import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserLoginService } from 'src/app/services/userLogin.service';
import { MessageService } from 'src/app/services/message.service';
import { DataServices } from 'src/app/services/dataServices.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  hide = true;
  isSubmmit = false;
  loading = false;

  constructor(public fr: FormBuilder
    , private loginUserService: UserLoginService
    , private authService: AuthorizationService
    , private router: Router
    , private messageService: MessageService
    , private dataServices: DataServices) { 

    }

  formLoginUser = this.fr.group({
    Usuario: ["", Validators.required],
    Password: ["", Validators.required]
  });

  ngOnInit(): void {
    
  }

  userLoginDo(){
    if (this.formLoginUser.valid){
        this.loading = true;
        this.loginUserService.userLogin(this.formLoginUser.value).subscribe(rsp =>{
        if(!rsp.Error){
          localStorage.setItem('x-token', rsp.Data.Token);
          this.authService.setAutenticate();
          this.dataServices.userName = 'Bienvenido ' + rsp.Data.sUserNameReal;
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
      })
    }else{ 
      this.isSubmmit = true;
      (!this.formLoginUser.controls['Usuario'].valid ? this.formLoginUser.controls['Usuario'].markAsTouched() : null);
      (!this.formLoginUser.controls['Password'].valid ? this.formLoginUser.controls['Password'].markAsTouched() : null);
      this.messageService.openSnackBarMessage('Los campos marcados no cumplen las VALIDACIONES');
    }
  }
}
