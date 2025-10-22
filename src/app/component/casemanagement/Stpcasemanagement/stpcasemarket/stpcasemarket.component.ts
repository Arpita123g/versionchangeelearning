import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditorConfig, NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stpcasemarket',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, NgxSimpleTextEditorModule],
  templateUrl: './stpcasemarket.component.html',
  styleUrls: ['./stpcasemarket.component.scss']
})
export class StpcasemarketComponent extends AbstractComponent {
  defaultcase: string = "";
  outlooktextheading: any = []
  outlooktextcontent: any = []
  selectedround: number = 1;
  checked: boolean = false;
  selectedButton: string | null = 'Round 1';
  headingvalue: string = '';
  contentvalue: string = '';
  config: EditorConfig = {
    buttons: [],
  };
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getOutlookData();
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    }

  getOutlookData() {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/stpgamemaster/fetchstpgamemaster";
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i].b5;
                  this.outlooktextcontent[i] = outlookdata;
  
                }
                this.contentvalue = this.outlooktextcontent[0];
              }
  
            }
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/stpgamecm/fetchstpgamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i].b5;
                  this.outlooktextcontent[i] = outlookdata;
  
                }
                this.contentvalue = this.outlooktextcontent[0];
              }
  
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }


  
  }

  contentvaluechange() {
    let round = this.selectedround;
    let content = this.contentvalue
    this.outlooktextheading[round - 1] = this.headingvalue;
    this.outlooktextcontent[round - 1] = this.contentvalue;


     let apiname = '/stpgamecm/updatestpgamecm'

    let body = {
      'b5': content,
    }
    this._api.updatecasemanagementdata(String(round), "normal", "no", 'stpgamecm', body, {}, apiname, 'stpgamecmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }

  roundclick(index: number, round: string) {
    this.selectedButton = round;
    this.checked = !this.checked;
    this.selectedround = index + 1;
    // this.headingvalue = this.outlooktextheading[index];
    this.contentvalue = this.outlooktextcontent[index];

  }
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }

}
