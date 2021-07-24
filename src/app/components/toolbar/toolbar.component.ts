import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { DataServices } from 'src/app/services/dataServices.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public authService: AuthorizationService
    , private router: Router
    , public dataServices: DataServices) { }

  ngOnInit(): void {
    
  }

  logOut(){
    this.authService.dropAuthenticate();
    this.dataServices.userName = '';
    this.router.navigate(['/loginUser']);
  }

  loginUserGo(){
    this.router.navigate(['/loginUser']);
  }

  createUserGo(){
    this.router.navigate(['/registerUser']);
  }

  viewProductsGo(){
    this.router.navigate(['/products']);
  }

  updatePasswordGo(){
    this.router.navigate(['/updatePassword']);
  }



}
