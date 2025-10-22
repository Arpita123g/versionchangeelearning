import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EditorConfig } from 'ngx-simple-text-editor';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';

@Component({
  selector: 'app-crmcasemarket',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective,NgxSimpleTextEditorModule],
  templateUrl: './crmcasemarket.component.html',
  styleUrls: ['./crmcasemarket.component.scss']
})
export class CrmcasemarketComponent extends AbstractComponent {
  defaultcase: string = "";
  outlooktextheading: any = []
  outlooktextcontent: any = []
  headingvalue: string = '';
  contentvalue: string = '';
  selectedround: number = 1;
  checked: boolean = false;
  selectedButton: string | null = 'Round 1';
  config: EditorConfig = {
    buttons: [],
  };

  selectedLanguage: string = "english";
  attempt: string = "1";

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,    private sharedState: SharedserviceService
    ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    // this.getOutlookData(this.attempt, this.selectedLanguage);


    this.sharedState.selectedLanguage$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.tryFetching();
    });
  
    this.sharedState.attempt$.subscribe(attempt => {
      this.attempt = attempt;
      this.tryFetching();
    });
  }

  tryFetching() {
    if (this.selectedLanguage && this.attempt) {
      this.getOutlookData(this.attempt, this.selectedLanguage);
    }
  }

  // getOutlookData() {
  //   // let apiname = "/crmgamecm/fetchcrmgamecm"
  //   let apiname = "/crmgamelm/fetchcrmgamelm";

  //   this._api.fetchCaseManagementData(apiname).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < data.resultList.length; i++) {
  //               // let outlookdata = data.resultList[i].b5;
  //               let outlookdata = data.resultList[i].b23;

  //               this.outlooktextcontent[i] = outlookdata;

  //             }
  //             this.contentvalue = this.outlooktextcontent[0];
  //           }

  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  // for market coming from language...
  getOutlookData(attempt: string, selectedLanguage: string) {
    let apiname = "/crmgamelm/fetchcrmgamelm";

    this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < data.resultList.length; i++) {
                let outlookdata = data.resultList[i][selectedLanguage].b23;
                // this.outlooktextcontent[i] = outlookdata;
                this.outlooktextcontent[i] = outlookdata.replace(/\n/g, '<br>');
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

 

  contentvaluechange() {
    let round = this.selectedround;
    let content = this.contentvalue
    this.outlooktextheading[round - 1] = this.headingvalue;
    this.outlooktextcontent[round - 1] = this.contentvalue;


    let apiname = '/crmgamecm/updatecrmgamecm'

    let body = {
      'b5': content,
    }
    this._api.updatecasemanagementdata(String(round), "normal", "no", 'crmgamecm', body, {}, apiname, 'crmgamecmactivestatus').subscribe(
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

  // roundclick(index: number, round: string) {
  //   this.selectedButton = round;
  //   this.checked = !this.checked;
  //   this.selectedround = index + 1;
  //   // this.headingvalue = this.outlooktextheading[index];
  //   this.contentvalue = this.outlooktextcontent[index];
    

  // }
  roundclick(index: number, round: string) {
    this.selectedButton = round;
    this.checked = !this.checked;
    this.selectedround = index + 1;
    // this.headingvalue = this.outlooktextheading[index];
    this.contentvalue = this.outlooktextcontent[index];


    // this.selectedRound = round;
    let attemptNumber = this.selectedButton.split(" ");
    this.attempt = attemptNumber[1];
    this.getOutlookData( this.attempt,this.selectedLanguage)
  }
}
