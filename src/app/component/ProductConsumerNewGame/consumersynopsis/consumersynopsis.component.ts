import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ConsumerbehaviournewService } from 'src/app/service/sheet/consumerbehaviournew/consumerbehaviournew.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';


@Component({
  selector: 'app-consumersynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './consumersynopsis.component.html',
  styleUrls: ['./consumersynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class ConsumersynopsisComponent extends AbstractComponent {
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  result: any = [];
  // disabled: boolean = false;
  analysisshow: boolean = false;
  retry: string = "";
  resultcellname: any = ['w76', 'w77', 'w78', 'w79', 'y11', 'y12', 'y13', 'y14',
    'w80', 'y37', 'y38', 'y43', 'y44', 'y45', 'w50',
    'w52', 'y55', 'y56', 'y57', 'w64', 'w81', 'w70', 'w71', 'w72', 'w73', 'w74',
    'p22', 'p34', 'p27', 'p35', 'w86', 'w87', 'w88']
  optional: any[] = [];
  optionalcase = ["incomestatus", "situationalstatus", "socialstatus", "gamestatus", "foodforthoughtstatus"]
  feedbackvalue: string = "";
  state: string = 'default';
  // isButtonDisabled: boolean = false;
  Language: any = [];
  periodresult: any = [];
  periodcellname: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, private excelsheetservice: ConsumerbehaviournewService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }
  override ngOnInit(): void {
    const isFrench = this.languageselect === 'French';

    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = isFrench ? "Jeu terminé" : "Game Over";
    } else {
      const roundNumber = (this.studentelementdetailsvalue.previousassignedattempts - this.studentelementdetailsvalue.numberofattemptsleft + 2);
      this.retry = isFrench ? "Ronde" + roundNumber : "Round " + roundNumber;
    }
    this.getValues(this.noofattempt);

  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getValues(attempt[1]);
  }

  // for backend
  getValues(attempt: string) {
    // let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    // this._api.consumerFetchData(apiname, attempt).subscribe(
    //   {
    //     next: (data: any) => {
    //       if (data.status == "Success") {
    //         if (data.resultList != null) {
    //           this.submitprove = data.resultList[0].t76;
    //           let roundvalue = "round" + Number(attempt) + "sv";
    //           if (data.resultList[0].aiFeedbackMaster != null) {
    //             let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
    //             if (analysisshowdata == 'yes') {
    //               this.analysisshow = true
    //             } else {
    //               this.analysisshow = false;
    //             }
    //           }
    //           if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
    //             this.disabled = true;
    //             this.getValues(String(Number(this.noofattempt) - 1));
    //           } else {
    //             let attempt = data.resultList[0].attempt;
    //             this.roundname = "Round " + attempt;

    //             if (attempt > 0) {
    //               for (let i = 1; i < attempt + 1; i++) {
    //                 this.dropdownvalue[i - 1] = "Round " + i;
    //               }
    //             }
    //             for (let i = 0; i < this.resultcellname.length; i++) {
    //               this.result[i] = data.resultList[0][this.resultcellname[i]]
    //               if (this.result[i] == "") {
    //                 this.result[i] = "-";
    //               }
    //             }
    //             for (let i = 0; i < this.optionalcase.length; i++) {
    //               const caseStatus = data.resultList[0].consumerBehaviournewCM.consumerBehaviournewCMActiveStatus[this.optionalcase[i]];
    //               if (caseStatus == "inactive") {

    //                 this.optional[i] = false;
    //               } else {
    //                 this.optional[i] = true;
    //               }

    //             }

    //             if (this.analysisshow == true) {
    //               this.getfeedbackvalue(attempt);
    //             } else {
    //               this.checkloading = false;

    //             }
    //           }
    //         }
    //         this.checkloading = false;
    //       } else {
    //         this.checkloading = false;

    //       }
    //     }, error: (error: any) => {
    //       this.checkloading = false;
    //       this.driveerrorLog(error, apiname);
    //     }
    //   })

    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          this.Language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];
          const result = data.resultList[0];

          const attempt = result.attempt;
          this.submitprove = result.consumerbehaviournewdata.t76;
          const roundvalue = `round${Number(attempt)}sv`;

          this.analysisshow = result.aiFeedbackMaster?.[roundvalue] === 'yes';

          if (!this.submitprove || this.submitprove.toLowerCase() === "no") {
            this.isdisabled = true;
            this.getValues(String(Number(this.noofattempt) - 1));
          } else {

            this.roundname = this.languageselect.toLowerCase() === 'french' ? `Ronde ${attempt}` : `Round ${attempt}`;

            // if (attempt > 0) {
            //   this.dropdownvalue = Array.from({ length: attempt }, (_, i) => 
            //     this.languageselect.toLowerCase() === 'french' ? `Ronde ${i + 1}` : `Round ${i + 1}`
            //   );
            // }
            if (attempt > 0) {
              for (let i = 1; i < attempt + 1; i++) {
                this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'french' ? "Ronde" + " " + i : "Round" + " " + i;
              }
            }

            // this.periodresult = this.periodcellname.map((cell: any, i: number) => result.consumerBehaviournewCM[this.periodcellname[i]]);
            this.periodresult = this.periodcellname.map((i: number) => this.Language[this.periodcellname[i]]);

            this.result = this.resultcellname.map((cell: any) => result.consumerbehaviournewdata[cell] || "-");

            this.optional = this.optionalcase.map((caseName: any) =>
              result.consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus[caseName] !== "inactive"
            );


            if (this.analysisshow) {
              this.getfeedbackvalue(attempt);
            }
          }
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  getfeedbackvalue(attempt: string) {
    this._api.fetchfeedback(this.coursecode, this.studentsectionid, 'student', Number(attempt)).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.feedbackvalue = data.resultList[0].gptfeedback;
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }

  // exit() {
  //   this.isButtonDisabled = true;
  //   if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
  //     this._router.navigate(['auth/component/studentdashboardheader']);
  //   } else {
  //     if (this.disabled == false) {
  //       this.checkloading = true;

  //       let body = {
  //         email: this.useremail,
  //         usermode: "student",
  //         caller: "student",
  //         action: "update",
  //         coursecode: this.coursecode,
  //         spreadsheetid: this.studentspreadsheetid,
  //         currentround: Number(this.noofattempt)
  //       };
  //       this._login.updatecourseattempt(body).subscribe((data: any) => {
  //         if (data.status == 'Success') {
  //           let status = "exit";
  //           this._login.sendDrivemailLog(status).subscribe(
  //             {
  //               next: (data: any) => {
  //                 this._login.exitOnLastAttempt();
  //                 this._router.navigate(['auth/component/studentdashboardheader']);

  //               }, error: (error: any) => {
  //                 this.isButtonDisabled = false;
  //                 this.checkloading = false;
  //                 this.driveerrorLog(error, "/maillog/drivemaillog");
  //               }
  //             })

  //         }
  //       }, (error: any) => {
  //         this.isButtonDisabled = false;
  //         this.checkloading = false;
  //         this.driveerrorLog(error, '/student/updatecourseattempt');
  //       })
  //     } else {
  //       this.isButtonDisabled = false;
  //       this._alert.error("Please submit your decisions first")
  //     }
  //   }
  // }

  downloadreportforconsumer() {
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this.excelsheetservice.downloadReportforConsumer(apiname, "consumerbehaviournew", this.useremail, this.coursecode,
      this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);
  }
}
