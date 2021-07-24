import { Injectable, NgModule } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import IError from "../interfaces/entities/IError";

@Injectable({
    providedIn: 'root'
})

export class MessageService{

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private _snackBar: MatSnackBar){

    }

    openSnackBar(errorsMessage: IError[]) {
        let errorsDescr:string = '';

        errorsMessage.forEach(function(error){
            errorsDescr+=(errorsDescr==''?'':' | ') + error.msg + (error.param != undefined? ' - ' + error.param:'');
        })

        this._snackBar.open(errorsDescr, 'Cerrar', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }

    openSnackBarMessage(errorsMessage: string) {
        this._snackBar.open(errorsMessage, 'Cerrar', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}