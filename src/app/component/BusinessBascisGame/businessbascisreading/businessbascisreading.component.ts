import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-businessbascisreading',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReadingComponent],   
  templateUrl: './businessbascisreading.component.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
})
export class BusinessbascisreadingComponent extends AbstractComponent {
  gamename:string = 'businessbasics';
  toolbartabsub: Subscription;
  toolbartab:String = "";
  pdfText: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
      
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.toolbartabsub = this._global.toolbartab.subscribe((data) => {
      this.toolbartab = data;
    });
  }
  override ngOnInit(): void {
    console.log("businessbascisreading",this.gamename,this.toolbartab);
  }
  
  override ngOnDestroy(): void {
    this.toolbartabsub.unsubscribe();
  }
}

// For Popup

@Component({
  selector: 'app-businessbasicspopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: 'businessbasicspopup.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
})
export class BusinessbasicspopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<BusinessbasicspopupComponent>) { }
  ngOnInit(): void {
  }
}