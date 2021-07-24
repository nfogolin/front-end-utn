import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { RegisterUserService } from 'src/app/services/registerUser.service';
import { DataServices } from 'src/app/services/dataServices.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  isSubmmit = false;
  loading = false;
  hide = true;

  constructor(public fr: FormBuilder
    , private messageService: MessageService
    , private router: Router
    , private authService: AuthorizationService
    , private registerUser: RegisterUserService
    , private dataServices: DataServices) { 

  }

  formUpdatePassword = this.fr.group({
    OldPassword: ["", [Validators.required, Validators.minLength(7)]],
    NewPassword: ["", [Validators.required, Validators.minLength(7)]],
    RepeatPassword: ["", [Validators.required, Validators.minLength(7)]]
  });

  ngOnInit(): void {

  }

  updatePasswordDo(){
      if (this.formUpdatePassword.valid){
        this.loading = true;
        this.registerUser.updatePassword(this.formUpdatePassword.value).subscribe(rsp =>{
        if(!rsp.Error){
          this.authService.dropAuthenticate();
          this.dataServices.userName = '';
          this.router.navigate(['/']);
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
      (!this.formUpdatePassword.controls['OldPassword'].valid ? this.formUpdatePassword.controls['OldPassword'].markAsTouched() : null);
      (!this.formUpdatePassword.controls['NewPassword'].valid ? this.formUpdatePassword.controls['NewPassword'].markAsTouched() : null);
      (!this.formUpdatePassword.controls['RepeatPassword'].valid ? this.formUpdatePassword.controls['RepeatPassword'].markAsTouched() : null);
      this.messageService.openSnackBarMessage('Los campos marcados no cumplen las VALIDACIONES');
    }
  }

}
