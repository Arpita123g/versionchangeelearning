import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbaralertComponent } from '../common/snackbaralert/snackbaralert.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbaralertService {

  constructor(private _snackBar: MatSnackBar) {}
  durationInSeconds = 5;

  openSnackBar(message:string,styleclass:string) {
    this._snackBar.openFromComponent(SnackbaralertComponent, {
      data: message,
      duration: this.durationInSeconds * 1000,
      panelClass: [styleclass]
    });
  }

  success(message: string){
    this.openSnackBar(message,'green-snackbar');
  }

  error(message: string){
    this.openSnackBar(message,'red-snackbar');
  }
  
  
}
