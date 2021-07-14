import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnectionIdInterceptor } from 'src/app/interceptors/connectionIdInterceptor';

@NgModule({
    declarations: [
      FooterComponent
    ],
    imports: [
      CommonModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ConnectionIdInterceptor, multi:true }
    ],
    exports: [
        FooterComponent
    ]
  })
  export class FooterModule { }