import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbaralert',
  templateUrl: './snackbaralert.component.html',
  styleUrls: ['./snackbaralert.component.scss']
})
export class SnackbaralertComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBarRef: MatSnackBarRef<SnackbaralertComponent>) { }
  
  ngOnInit(): void {
  }

}
