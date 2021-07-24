import { Component, OnInit } from '@angular/core';
import ICountry from 'src/app/interfaces/entities/ICountry';
import { CountriesService } from 'src/app/services/countries.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import IProvince from 'src/app/interfaces/entities/IProvince';
import { ProvincesService } from 'src/app/services/province.service';
import ICity from 'src/app/interfaces/entities/ICity';
import { CitiesService } from 'src/app/services/city.service';
import { RegisterUserService } from 'src/app/services/registerUser.service';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserLoginService } from 'src/app/services/userLogin.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  countries: ICountry[];
  provinces: IProvince[];
  cities: ICity[];
  isSubmmit = false;
  loading = false;
  hide = true;

  constructor(public fr: FormBuilder
    , private countriesService: CountriesService
    , private messageService: MessageService
    , private provincesService: ProvincesService
    , private citiesService: CitiesService
    , private router: Router
    , private registerUser: RegisterUserService
    , private authService: AuthorizationService
    , private loginUserService: UserLoginService) { 

  }

  formRegisterUser = this.fr.group({
    UserName: ["nfg", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    Password: ["samsung", [Validators.required, Validators.minLength(7)]],
    RepeatPassword: ["samsung", [Validators.required, Validators.minLength(7)]],
    Nombre: ["Nicolás", Validators.required],
    Fantasia: ["A.S.N.F.", Validators.required],
    Apellido: ["Fogolin", Validators.required],
    Mail: ["nfogolin@sancorseguros.com", [Validators.required, Validators.email]],
    Cuit: ["31200071", [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]],
    CountryId: ["1", Validators.required],
    ProvinceId: ["1", Validators.required],
    CityId: ["1", Validators.required]
  });

  ngOnInit(): void {
      this.countriesService.getCountries().subscribe(rsp =>{
        if(!rsp.Error){
          this.countries = rsp.Countries;
        }else{
          this.messageService.openSnackBar(rsp.Error);
        }
      }, (e)=>{
        this.messageService.openSnackBar(e.error.errors);
      });
  }

  createUserDo(){
    if (this.formRegisterUser.valid){

      this.loading = true;

      const { UserName, 
              Password, 
              RepeatPassword, 
              Nombre, 
              Fantasia, 
              Apellido, 
              Mail, 
              Cuit, 
              CityId 
      } = this.formRegisterUser.controls;

      this.registerUser.registerUser({
              UserName: UserName.value, 
              Password: Password.value, 
              RepeatPassword: RepeatPassword.value, 
              Nombre: Nombre.value, 
              Fantasia: Fantasia.value, 
              Apellido: Apellido.value, 
              Mail: Mail.value, 
              Cuit: Cuit.value,
              Ciudad: {
                Id: CityId.value
              }
      }).subscribe(rsp =>{
        if(!rsp.Error){

          this.loginUserService.userLogin({
            Usuario: UserName.value,
            Password: Password.value
          }).subscribe(rsp =>{
            if(!rsp.Error){
              localStorage.setItem('x-token', rsp.Data.Token);
              this.authService.setAutenticate();
              this.router.navigate(['/products']);
            }else{
              this.loading = false;
              this.messageService.openSnackBar(rsp.Error);
            }
          }, (e)=>{
            this.loading = false;
            if (e.error && e.error.errors){
              this.messageService.openSnackBar(e.error.errors);
            }else{
              this.messageService.openSnackBarMessage('Ocurrió un error durante la operación. Intente nuevamente.');
            }
          });     
        }else{
          this.loading = false;
          this.messageService.openSnackBar(rsp.Error);
        }
      }, (e)=>{
        this.loading = false;
        if (e.error && e.error.errors){
          this.messageService.openSnackBar(e.error.errors);
        }else{
          this.messageService.openSnackBarMessage('Ocurrió un error durante la operación. Intente nuevamente.');
        }
      })

    }else{
      this.isSubmmit = true;
      (!this.formRegisterUser.controls['UserName'].valid ? this.formRegisterUser.controls['UserName'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Password'].valid ? this.formRegisterUser.controls['Password'].markAsTouched() : null);
      (!this.formRegisterUser.controls['RepeatPassword'].valid ? this.formRegisterUser.controls['RepeatPassword'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Nombre'].valid ? this.formRegisterUser.controls['Nombre'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Fantasia'].valid ? this.formRegisterUser.controls['Fantasia'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Apellido'].valid ? this.formRegisterUser.controls['Apellido'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Mail'].valid ? this.formRegisterUser.controls['Mail'].markAsTouched() : null);
      (!this.formRegisterUser.controls['Cuit'].valid ? this.formRegisterUser.controls['Cuit'].markAsTouched() : null);
      (!this.formRegisterUser.controls['CountryId'].valid ? this.formRegisterUser.controls['CountryId'].markAsTouched() : null);
      (!this.formRegisterUser.controls['ProvinceId'].valid ? this.formRegisterUser.controls['ProvinceId'].markAsTouched() : null);
      (!this.formRegisterUser.controls['CityId'].valid ? this.formRegisterUser.controls['CityId'].markAsTouched() : null);
      this.messageService.openSnackBarMessage('Los campos marcados no cumplen las VALIDACIONES');
    }
  }

  setProvinceSelect(CountryId:number){
    if (CountryId > 0){
      this.provincesService.getProvinces(CountryId).subscribe(rsp =>{
        if(!rsp.Error){
          this.provinces = rsp.Provinces;
        }else{
          this.messageService.openSnackBar(rsp.Error);
        }
      }, (e)=>{
        this.messageService.openSnackBar(e.error.errors);
      })
    }else{
      this.provinces = [];
      this.cities = [];
    }
  }

  setCitySelect(ProvinceId:number){
    if (ProvinceId > 0){
      this.citiesService.getCities(ProvinceId).subscribe(rsp =>{
        if(!rsp.Error){
          this.cities = rsp.Cities;
        }else{
          this.messageService.openSnackBar(rsp.Error);
        }
      }, (e)=>{
        this.messageService.openSnackBar(e.error.errors);
      })
    }else{
      this.cities = [];
    }
  }

}
