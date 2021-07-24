import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppGestion';

  constructor(private authService : AuthorizationService){

  }

  ngOnInit():void{
    this.authService.reactivateAuth();
  }
}
