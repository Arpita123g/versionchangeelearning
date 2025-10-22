  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
  import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
  import { Router } from '@angular/router';
  import { EditorConfig, NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
  import { Subscription } from 'rxjs';
  import { AbstractComponent } from 'src/app/AbstractComponent';
  import { LoginService } from 'src/app/service/auth/login.service';
  import { ApiService } from 'src/app/service/backendgameapi/api.service';
  import { GlobalService } from 'src/app/service/global.service';
  import { RestapiService } from 'src/app/service/restapi.service';
  import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
  import { NgApexchartsModule } from 'ng-apexcharts';
  @Component({
    selector: 'app-businessoutlook',
    standalone: true,
    imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,NgxSimpleTextEditorModule],      
    templateUrl: './businessoutlook.component.html',
    styleUrls: ['./businessoutlook.component.scss']
  })
  export class BusinessoutlookComponent extends AbstractComponent {

    // status:boolean = true;
    defaultcase: string = "";
    outlooktextheading: any = []
    outlooktextcontent: any = []

    headingvalue: string = '';
    contentvalue: string = '';

    config: EditorConfig = {
      buttons: [],

    };
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

    selectedround: number = 1;
    checked: boolean = false;

    selectedButton: string | null = 'Round 1';

    getOutlookData() {
      let getSelectTab = localStorage.getItem('selectedTab');
      if (getSelectTab == 'cesimcase') {
        let apiname = "/businessbasiccasemanagementmaster/fetchbusinessbasiccasemanagementmaster"
        this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i].b3;
                  this.outlooktextcontent[i] = outlookdata;

                }
                this.contentvalue = this.outlooktextcontent[0];
              }

            }
            this.checkloading = false;
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
      } else {
        let apiname = "/businessbasiccasemanagement/fetchbusinessbasiccasemanagement"
        this._api.fetchCaseManagementData(apiname).subscribe(
          {
            next: (data: any) => {
              if (data.status == "Success") {
                if (data.resultList != null) {
                  for (let i = 0; i < data.resultList.length; i++) {
                    let outlookdata = data.resultList[i].b3;
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


      let apiname = '/businessbasiccasemanagement/updatebusinessbasiccasemanagement'

      let body = {
        'b3': content,
      }
      this._api.updatecasemanagementdata(String(round), "normal", "no", 'businessbasiccasemanagement', body, {}, apiname, 'businessbasiccmactivestatus').subscribe(
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

    override ngOnDestroy(): void {
      this.Instructorelementdetailssub.unsubscribe();
    }
  }
