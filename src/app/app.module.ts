import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos Para Lazy Loading:
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { FooterModule } from './components/footer/footer.module';
import { LoginUserModule } from './pages/login-user/login-user.module';
import { RegisterUserModule } from './pages/register-user/register-user.module';
import { ProductsModule } from './pages/products/products.module';
import { UpdatePasswordModule } from './pages/update-password/update-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    FooterModule,
    LoginUserModule,
    RegisterUserModule,
    ProductsModule,
    UpdatePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
