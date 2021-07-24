import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService:AuthorizationService
      , private router: Router){}
  
  canActivate(){
    this.authService.reactivateAuth().then((resp) =>{
      if (!resp){
        this.router.navigate(['/loginUser']);
        return false;
      }else{
        return true;
      }
    }).catch((e)=>{

    });
    return true;
  }
}