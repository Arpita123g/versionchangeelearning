import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-businessbascismatdialogforhelp',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './businessbascismatdialogforhelp.component.html',
  styleUrls: ['./businessbascismatdialogforhelp.component.scss'],

})
export class BusinessbascismatdialogforhelpComponent implements OnInit {
  Usermailsub: Subscription;
  usermail: string = '';
  Usermodesub: Subscription;
  usertype: string = '';
  constructor(
    public dialogRef: MatDialogRef<BusinessbascismatdialogforhelpComponent>,
    private _global: GlobalService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.Usermailsub = this._global.useremail.subscribe((data) => {
      this.usermail = data;
    });
    this.Usermodesub = this._global.loginmode.subscribe((data) => {
      this.usertype = data;
    });
  }
  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.Usermailsub.unsubscribe();
    this.Usermodesub.unsubscribe();
  }

}







