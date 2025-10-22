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
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-consumeroutlook',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, NgxSimpleTextEditorModule],
  templateUrl: './consumeroutlook.component.html',
  styleUrls: ['./consumeroutlook.component.scss']
})
export class ConsumeroutlookComponent extends AbstractComponent {
  defaultcase: string = "";
  outlooktextheading: any = []
  outlooktextcontent: any = []
  selectedround: number = 1;
  checked: boolean = false;
  headingvalue: string = '';
  contentvalue: string = '';
  selectedButton: string | null = 'Round 1';
  config: EditorConfig = {
    buttons: [],

  };
  selectedLanguage: string = "english";
  attempt: string = "1";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private sharedState: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    // this.getOutlookData();
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
      // this.getOutlookData(this.attempt, this.selectedLanguage);
      this.fetchLanguageForMaster(this.selectedLanguage)

    }
  }

  // getOutlookData() {
  //   let apiname = "/consumerbehaviournewcm/fetchconsumerbehaviournewcm"
  //   this._api.fetchCaseManagementData(apiname).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < data.resultList.length; i++) {
  //               let outlookdata = data.resultList[i].b93;
  //               //const sentences = outlookdata.split('.');

  //               // if (sentences.length > 0) {
  //               //   this.outlooktextheading[i] = sentences[0];
  //               //   this.outlooktextcontent[i] = sentences.slice(1).join('.');
  //               // } else {
  //               //   this.outlooktextheading[i] = '';
  //                 this.outlooktextcontent[i] = outlookdata;
  //               // }
  //             }
  //             // this.headingvalue = this.outlooktextheading[0];
  //             this.contentvalue = this.outlooktextcontent[0];
  //             }

  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }



  // getOutlookData(attempt: string, selectedLanguage: string) {

  //   let getSelectTab = localStorage.getItem('selectedTab');
  //   console.log("aaaaaaaaaaaaaaaaaaaa", getSelectTab)
  //   if (getSelectTab == 'cesimcase') {
  //     let apiname = "/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster"

  //     this._api.fetchaCaseFromMaster(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
  //       {
  //         next: (data: any) => {
  //           if (data.status == "Success") {
  //             if (data.resultList != null) {
  //               this.fetchLanguageForMaster(selectedLanguage);
  //               // for (let i = 0; i < data.resultList.length; i++) {
  //               //   let outlookdata = data.resultList[i][selectedLanguage].b20;
  //               //   // this.outlooktextcontent[i] = outlookdata;
  //               //   this.outlooktextcontent[i] = outlookdata.replace(/\n/g, '<br>');
  //               // }
  //               // this.contentvalue = this.outlooktextcontent[0];
  //             }
  //             this.checkloading = false;

  //           }
  //         }, error: (error: any) => {
  //           this.checkloading = false;
  //           this.driveerrorLog(error, apiname);
  //         }
  //       })


  //   } else {
  //     let apiname = "/consumerbehaviournewlm/fetchconsumerbehaviournewlm"

  //     this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
  //       {
  //         next: (data: any) => {
  //           if (data.status == "Success") {
  //             if (data.resultList != null) {
  //               for (let i = 0; i < data.resultList.length; i++) {
  //                 let outlookdata = data.resultList[i][selectedLanguage].b20;
  //                 // this.outlooktextcontent[i] = outlookdata;
  //                 this.outlooktextcontent[i] = outlookdata.replace(/\n/g, '<br>');
  //               }
  //               this.contentvalue = this.outlooktextcontent[0];
  //             }
  //             this.checkloading = false;

  //           }
  //         }, error: (error: any) => {
  //           this.checkloading = false;
  //           this.driveerrorLog(error, apiname);
  //         }
  //       })
  //   }


  // }


  fetchLanguageForMaster(selectedLanguage: string) {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/consumerbehaviournewlanguages/fetchconsumerbehaviournewlanguages"

      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i][selectedLanguage].b20;
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
    } else {
      let apiname = "/consumerbehaviournewlm/fetchconsumerbehaviournewlm"

      this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i][selectedLanguage].b20;
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


  }

  // getOutlookData(attempt: string, selectedLanguage: string) {

  //   let getSelectTab = localStorage.getItem('selectedTab');
  //   console.log("aaaaaaaaaaaaaaaaaaaa", getSelectTab)
  //   if (getSelectTab == 'cesimcase') {
  //     let apiname = "/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster"

  //     this._api.fetchaCaseFromMaster(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
  //       {
  //         next: (data: any) => {
  //           if (data.status == "Success") {
  //             if (data.resultList != null) {
  //               this.fetchLanguageForMaster(selectedLanguage);
  //               for (let i = 0; i < data.resultList.length; i++) {
  //                 let outlookdata = data.resultList[i][selectedLanguage].b20;
  //                 // this.outlooktextcontent[i] = outlookdata;
  //                 this.outlooktextcontent[i] = outlookdata.replace(/\n/g, '<br>');
  //               }
  //               this.contentvalue = this.outlooktextcontent[0];
  //             }
  //             this.checkloading = false;

  //           }
  //         }, error: (error: any) => {
  //           this.checkloading = false;
  //           this.driveerrorLog(error, apiname);
  //         }
  //       })


  //   } else {

  //   }


  // }


  contentvaluechange() {
    let round = this.selectedround;
    let content = this.contentvalue
    this.outlooktextheading[round - 1] = this.headingvalue;
    this.outlooktextcontent[round - 1] = this.contentvalue;


    console.log("content", content, "round", round);
    let apiname = '/consumerbehaviournewcm/updateconsumerbehaviournewcm'

    let body = {
      'b93': content,
    }
    this._api.updatecasemanagementdata(String(round), "normal", "no", 'consumerbehaviournewcm', body, {}, apiname, 'consumerbehaviournewcmactivestatus').subscribe(
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


}
