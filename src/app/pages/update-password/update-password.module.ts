import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UpdatePasswordRoutingModule } from "./update-password-routing.module";
import { UpdatePasswordComponent } from "./update-password.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "src/app/interceptors/token.interceptor";

@NgModule({
    declarations: [
      UpdatePasswordComponent
    ],
    imports: [
      CommonModule,
      UpdatePasswordRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSnackBarModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true }
    ]
  })

  export class UpdatePasswordModule { }