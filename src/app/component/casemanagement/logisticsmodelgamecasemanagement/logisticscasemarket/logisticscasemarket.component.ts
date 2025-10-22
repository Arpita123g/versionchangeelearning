import { Component } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';


@Component({
  selector: 'app-logisticscasemarket',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective, NgxSimpleTextEditorModule],
  templateUrl: './logisticscasemarket.component.html',
  styleUrls: ['./logisticscasemarket.component.scss']
})
export class LogisticscasemarketComponent extends AbstractComponent {
  selectedButton: string | null = 'Round 1';
  outlooktextheading: any = []
  outlooktextcontent: any = []
  contentvalue: string = '';
  defaultcase: string = "";
  selectedround:number = 1;
  checked:boolean=false;
  headingvalue: string = '';
  res: any = [];
  // outlooktextheading: any = []
  // outlooktextcontent: any = []

  // headingvalue: string = '';
  // contentvalue: string = '';
  config:EditorConfig ={
    buttons:[],
  
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
    this.getFetchData();
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
  }
  getFetchData() {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/logisticsmaster/fetchlogisticsmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj[key]);
                  });
                });
  
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i].c5;
                    this.outlooktextcontent[i] = outlookdata;
                }
                
                this.contentvalue = this.outlooktextcontent[0];
                
              }
              this.checkloading = false;
  
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/logisticscm/fetchlogisticscm"
    this._api.fetchCaseManagementData(apiname).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj[key]);
                });
              });

              for (let i = 0; i < data.resultList.length; i++) {
                let outlookdata = data.resultList[i].c5;
                  this.outlooktextcontent[i] = outlookdata;
              }
              
              this.contentvalue = this.outlooktextcontent[0];
              
            }
            this.checkloading = false;

          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    }

    
  }

  writeLogisticsValue(cellname: string, index: number, value: any) {
    let apiname = '/logisticscm/updatelogisticscm'
    if((cellname == "d29")){
    value = Number(value)/100;
  }
   
    let body = {
      [cellname]: value,

    }
    this._api.updatecasemanagementdata(String(index + 1), "normal","no",'logisticscm',body,{},apiname,'logisticscmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          }else{
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }
  contentvaluechange() {
    let round = this.selectedround;
    let content = this.contentvalue
    this.outlooktextheading[round-1] = this.headingvalue;
    this.outlooktextcontent[round-1] = this.contentvalue;
    
    
    let apiname = '/logisticscm/updatelogisticscm'
    
    let body = {
      'c5': content,
    }
    this._api.updatecasemanagementdata(String(round),"normal","no", 'logisticscm',body,{},apiname, 'logisticscmactivestatus').subscribe(
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
  roundclick(index: number,round:string) {
    this.selectedButton = round;
    this.checked = !this.checked;
    this.selectedround = index+1;
    // this.headingvalue = this.outlooktextheading[index];
    this.contentvalue = this.outlooktextcontent[index];

  }
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }
 
  // roundclick(index: number,round:string) {
  //   this.selectedButton = round;
  //   this.checked = !this.checked;
  //   this.selectedround = index+1;
  //   // this.headingvalue = this.outlooktextheading[index];
  //   this.contentvalue = this.outlooktextcontent[index];

  // }
}
