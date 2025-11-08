import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
// import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { EcommercesheetService } from 'src/app/service/sheet/ecommerce/ecommercesheet.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-ecommercesynopsis',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './ecommercesynopsis.component.html',
  styleUrls: ['./ecommercesynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class EcommercesynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  result1: any = [];
  optional: any[] = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  // disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  responseresult: any = [];
  optionalcase: any = ["foodforthoughtstatus"];
  state: string = 'default';
  cashfromfinancing: number = 0;
  totalOptionalcase: boolean = true;
  // isButtonDisabled: boolean = false;
  resultSalesTableData: any[][] = [];
  resultProductTableData: any[][] = [];
  financialData: { label: string; values: number[] }[] = [];
  resultPromotionTableData: { label: string; values: number[] }[] = []
  resultWebsiteTableData: { label: string; values: number[] }[] = []
  resultKpiTableData: { label: string; values: number[] }[] = []
  resultThinkingAbilityTableData: { label: string; values: number[] }[] = []

  databasecellnamearray: string[] = [
    'j8', 'j9', 'j10', 'j11', 'j12', 'j13', 'j14', 'j15', 'j16', 'j17', //9
    'ar46', 'ar47', 'ar48', 'ar49', 'ar50', 'ar51', 'ar52', 'ar53', 'ar54', 'ar55', //19
    'as46', 'as47', 'as48', 'as49', 'as50', 'as51', 'as52', 'as53', 'as54', 'as55', //29
    'ar58', 'ar59', 'ar60', 'ar61', 'ar62', 'ar63', 'ar64', 'ar65', 'ar66', 'ar67', //39
    'b49', 'b50', 'b51', 'b55', 'b56', 'b57', 'b61', 'b62', 'b63', 'aq151', //49
    'f73', 'f74', 'f75', 'f76', 'f77', 'e73', 'e74', 'e75', 'e76', 'e77', //59
    'b83', 'b84', 'b85', 'b86', 'b87', 'aq152', 'b103', 'b104', 'b105', 'b106', 'b107', //70
    'aq153', 'b116', 'b117', 'b118', 'aq154', 'aq155', 'aq156', //77
    'b134', 'b135', 'b136', 'b137', 'b138', //82
    'c116', 'c117', 'c118', 'c134', 'c135', 'c136', 'c137', 'c138', //90
    'n86', 'o86', 'p86', 'q86', 'r86', 's86', 't86', 'u86', 'v86', 'w86', //100
    'n87', 'o87', 'p87', 'q87', 'r87', 's87', 't87', 'u87', 'v87', 'w87', //110
    'n88', 'o88', 'p88', 'q88', 'r88', 's88', 't88', 'u88', 'v88', 'w88', //120
    'm8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14', 'm15', 'm16', 'm17', //130
    'n95', 'o95', 'p95', 'q95', 'r95', 's95', 't95', 'u95', 'v95', 'w95', //140
    'o97', 'o98', 'o99', 'o101', 'o102', 'o103', 'o104', 'o105', 'o106', 'o107', 'o108', //151
    'q57', 'q58', 'q59', 'q60',//155
    'r57', 'r58', 'r59', 'r60',//159
    'n78', 'n79', 'n80', //162
    'r97', 'r98', 'r100', 'r99', 'n109', //167
    'aq162', 'aq163', 'aq164', 'aq165' //171


  ];
  periodcellnamearray: string[] = [
    'v10', 'v11', 'v12', 'v16', 'v17', 'v18', //5
    'v22', 'v23', 'v24', 'v86', 'v87', 'v88', 'v89', 'v90', //13
    'ag15', 'ag16', 'ag17', 'ag18', 'ag19' //18
  ];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: EcommercesheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }



  override ngOnInit(): void {
    if (this.studentelementdetailsvalue.numberofattemptsleft == 1) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }

    this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              let roundvalue = "round" + Number(attempt) + "sv";
              if (data.resultList[0].aiFeedbackMaster != null) {
                let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              if (data.resultList[0].ecommercegamedata) {
                this.submitprove = data.resultList[0].ecommercegamedata.aq168;
              } else {
                this.submitprove = 'no';
              }
              if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
                this.isdisabled = true;
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < 172; i++) {
                  this.result[i] = data.resultList[0].ecommercegamedata[this.databasecellnamearray[i]];

                }

                for (let i = 0; i < 19; i++) {
                  this.result1[i] = data.resultList[0].ecommerceGameCM.ecommercegameperioddata[this.periodcellnamearray[i]];

                }


                for (let i = 0; i < this.databasecellnamearray.length; i++) {
                  if ((this.result[i] == "") || (this.result[i] == 0)) {
                    this.result[i] = "-"
                  }
                }
                const rowCount = 10; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount; i++) {
                  this.resultSalesTableData.push([
                    this.result[i], // First column
                    this.result[i + 91], // Second column
                    this.result[i + 101], // Third column
                    this.result[i + 111], // Fourth column
                  ]);
                }

                const rowCount1 = 10; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount1; i++) {
                  this.resultProductTableData.push([
                    this.result[i], // First column
                    this.result[i + 121], // Second column
                    this.result[i + 131], // Third column

                  ]);
                }
                const rowLabels = ['Revenue', 'Cost', 'Gross Profit/Loss', 'Promotion cost', 'Website cost', 'Personnel & Service cost', 'Packaging cost', 'Logistics and Inventory cost', 'Process Improvement cost', 'Operating expense', 'EBITDA'];
                for (let i = 0; i < rowLabels.length; i++) {
                  this.financialData.push({
                    label: rowLabels[i],
                    values: [
                      this.result[i + 141] == '-' ? 0 : this.result[i + 141].toFixed(0),

                    ],
                  });
                }
                const rowLabels1 = ['Social Media', 'Campaigns', 'Organic', 'Email'];
                for (let i = 0; i < rowLabels1.length; i++) {
                  this.resultPromotionTableData.push({
                    label: rowLabels1[i],
                    values: [
                      this.result[i + 152] == '-' ? 0 : this.result[i + 152],
                      this.result[i + 156] == '-' ? 0 : this.result[i + 156],

                    ],
                  });
                }

                const rowLabels3 = ['Bounce Rate', 'Engagement Rate', 'Customer Satisfaction'];
                for (let i = 0; i < rowLabels3.length; i++) {
                  this.resultWebsiteTableData.push({
                    label: rowLabels3[i],
                    values: [
                      this.result[i + 160] == '-' ? 0 : this.result[i + 160],

                    ],
                  });
                }
                const rowLabels2 = ['Average Order Value, INR', 'Sales Performance Indication', 'Product Return', 'ROAS', 'Operating Margin'];

                for (let i = 0; i < rowLabels2.length; i++) {
                  let value = this.result[i + 163] == '-' ? 0 : this.result[i + 163];

                  // Format specific rows
                  if (rowLabels2[i] === 'Product Return' || rowLabels2[i] === 'Operating Margin') {
                    value = (value * 100).toFixed(0) + '%'; // Convert to percentage with 2 decimals
                  } else if (rowLabels2[i] === 'Sales Performance Indication') {
                    value = value.toFixed(2); // Keep 2 decimals
                  } else {
                    value = value.toFixed(0); // Default conversion to string
                  }

                  this.resultKpiTableData.push({
                    label: rowLabels2[i],
                    values: [value],
                  });
                }
                const rowLabels4 = ['Catalog', 'Marketing', 'Experience', 'Operations'];
                for (let i = 0; i < rowLabels4.length; i++) {
                  this.resultThinkingAbilityTableData.push({
                    label: rowLabels4[i],
                    values: [
                      this.result[i + 168] == '-' ? 0 : this.result[i + 168],

                    ],
                  });
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {
                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                this.checkloading = false;

                if (this.analysisshow == true) {
                  this.getfeedbackvalue(attempt);
                } else {
                  this.checkloading = false;
                }

              }
            }

            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
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


  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  // exit() {
  //   this.isButtonDisabled = true;
  //   if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
  //     this._router.navigate(['auth/component/studentdashboardheader']);
  //   } else {
  //     if (this.disabled == false) {
  //       this.checkloading = true;

  //      let body = {
  //         email: this.useremail,
  //         usermode: "student",
  //         caller: "student",
  //         action: "update",
  //         coursecode: this.coursecode,
  //         spreadsheetid: this.studentspreadsheetid,
  //         currentround:Number(this.noofattempt)
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


  downloadreportecommerce() {
    let apiname = '/ecommercegame/fetchecommercegame';
    this.excelsheetservice.downloadReportforgame(apiname, "ecommercegame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}
