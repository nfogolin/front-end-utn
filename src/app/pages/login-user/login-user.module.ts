import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginUserRoutingModule } from "./login-user-routing.module";
import { LoginUserComponent } from "./login-user.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
      LoginUserComponent
    ],
    imports: [
      CommonModule,
      LoginUserRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSnackBarModule
    ]
  })

  export class LoginUserModule { }