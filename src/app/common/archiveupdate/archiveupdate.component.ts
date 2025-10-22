import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { GlobalService } from 'src/app/service/global.service';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-archiveupdate',
  templateUrl: './archiveupdate.component.html',
  styleUrls: ['./archiveupdate.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule]
})
export class ArchiveupdateComponent extends AbstractComponent {
  message: string = '';
  archivebuttonname: string = "";
  archiveflag: string = "";

  constructor(
    _router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    public dialogRef: MatDialogRef<ArchiveupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    console.log("da", this.data)
    if (this.data.archiveflag == "no") {
      this.message = "Archiving a game will hide the game from all other pages except the archive page. You can archive or return games from the archive at any time and the operation does not make any permanent changes to your course. Archiving does not affect your participants in any way, they will be able to log in and play the game exactly the same way as usual, whether the game is archived or not."
      this.archivebuttonname = "Archive"
    } else {
      this.message = "Unarchiving a game will return the game in the ongoing or completed page depending on the timeline."
      this.archivebuttonname = "Unarchive"
    }
  }


  archiveupdate() {
    if (this.archivebuttonname == 'Archive') {
      this.archiveflag = "yes";
    }else{
      this.archiveflag = "no";
    }
    let body = {
      instructorpanelid: this.data.instructorpanelid,
      archiveflag: this.archiveflag,
      studentcourseattempts: this.data.studentcourseattempts,
      deletedflag: this.data.deletedflag,
      totallicenseleft: this.data.totallicenseleft,
      noofstudentregistered: this.data.noofstudentregistered,
      action: 'update',
      status: 'active',
      caller: 'webadmin',
      usermode: 'instructor',
      email: this.useremail,
    };

    this._restapiservice.updateInstructor(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this._alert.success(data.message);
        this.dialogRef.close();

      } else {
        this._alert.error(data.message);
      }
    });
  }
}

