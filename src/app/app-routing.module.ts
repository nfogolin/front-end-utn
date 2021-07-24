import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from 'src/app/pages/products/products.module';
import { AuthorizationGuard } from './guards/authorization.guard';
import { LoginUserModule } from './pages/login-user/login-user.module';
import { RegisterUserModule } from './pages/register-user/register-user.module';
import { UpdatePasswordModule } from './pages/update-password/update-password.module';

const routes: Routes = [
  {
    path:"loginUser",
    loadChildren:()=> import('src/app/pages/login-user/login-user.module').then(m=>LoginUserModule)
  },
  {
    path: "registerUser",
    loadChildren:()=> import('src/app/pages/register-user/register-user.module').then(m=>RegisterUserModule)
  },
  {
    path: "products",
    loadChildren: ()=> import('src/app/pages/products/products.module').then(m=>ProductsModule),
    canActivate : [AuthorizationGuard]
  },
  {
    path: "updatePassword",
    loadChildren: ()=> import('src/app/pages/update-password/update-password.module').then(m=>UpdatePasswordModule),
    canActivate : [AuthorizationGuard]
  },

  {
    path: "**", loadChildren: ()=> import('src/app/pages/products/products.module').then(m=>ProductsModule),
    pathMatch: 'full',
    canActivate : [AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
