import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { EcommerceassessmentService } from 'src/app/service/assesment/ecommerce/ecommerceassessment.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-ecommercedecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, FormsModule, MatIconModule],
  templateUrl: './ecommercedecisionchecklist.component.html',
  styleUrls: ['./ecommercedecisionchecklist.component.scss']
})
export class EcommercedecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  result1: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  kpivaluearray: any = [];
  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought: boolean = true;
  optionalcase: any = ['foodforthoughtstatus',];
  blankInputMessage: any = [
    'Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5',//4
    'Product 6', 'Product 7', 'Product 8', 'Product 9', 'Product 10', 'Markups %, Product 1',//10
    'Markups %, Product 2', 'Markups %, Product 3', 'Markups %, Product 4', 'Markups %, Product 5',//14
    'Markups %, Product 6', 'Markups %, Product 7', 'Markups %, Product 8', 'Markups %, Product 9',//18
    'Markups %, Product 10', 'Estimated Market Share %, Product 1', 'Estimated Market Share %, Product 2',//21
    'Estimated Market Share %, Product 3', 'Estimated Market Share %, Product 4', 'Estimated Market Share %, Product 5',//24
    'Estimated Market Share %, Product 6', 'Estimated Market Share %, Product 7', 'Estimated Market Share %, Product 8',//27
    'Estimated Market Share %, Product 9', 'Estimated Market Share %, Product 10', 'Buffer Coefficient, Product 1',//30
    'Buffer Coefficient, Product 2', 'Buffer Coefficient, Product 3', 'Buffer Coefficient, Product 4', 'Buffer Coefficient, Product 5',
    'Buffer Coefficient, Product 6', 'Buffer Coefficient, Product 7', 'Buffer Coefficient, Product 8', 'Buffer Coefficient, Product 9',
    'Buffer Coefficient, Product 10', 'Green Thread Initiative', 'Eco-Chic Fashion Week', 'Seamseco Sustainable Challenge',
    'Seamseco Style Stories', 'Seamseco Runway Reels', 'Eco-Influencer Challenge', 'Green Fabric Diaries', 'Seamseco Style Challenges',
    'Eco-Innovator Interviews', 'Email Tool', 'Welcome Email Priority', 'Product Highlight Email Priority', 'Educational Content Email Priority',
    'Exclusive Offers Email Priority', 'Feedback and Engagement Email Priority', 'Welcome Email Leads Type', 'Product Highlight Email Leads Type',
    'Educational Content Leads Type', 'Exclusive Offers Leads Type', 'Feedback and Engagement Leads Type', 'Sustainability-Centric Content Marketing',
    'Influencer Collaborations', 'Pop-Up Shops and Experiential Events', 'Loyalty Program', 'Targeted Advertising Campaigns', 'Experience', 'Website Design',
    'Scarcity Indicator', 'Progress Bar for Checkout', 'Dynamic Exit-Intent Pop-Up', 'Personalized Recommendations', 'Social Proof Notifications', 'Checkout Page',
    'One-Click Checkout', 'Guest Checkout', 'Social Media Checkout', 'Customer Service System', 'Operations', 'Packaging', 'Logistics', 'Vendor Management Software',
    'Advanced Material Quality Testing', 'Blockchain for Supply Chain Transparency', 'Dynamic Pricing and Inventory Management Tool',
    'Customer Relationship Management (CRM) Integration'
  ];
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
    'c116', 'c117', 'c118', 'c134', 'c135', 'c136', 'c137', 'c138',//90
    'aq39', 'aq40', 'aq41', 'aq42', 'aq43'//for supplier


  ];
  periodcellnamearray: string[] = [
    'v10', 'v11', 'v12', 'v16', 'v17', 'v18', //5
    'v22', 'v23', 'v24', 'v86', 'v87', 'v88', 'v89', 'v90', //13
    'ag15', 'ag16', 'ag17', 'ag18', 'ag19' //18
  ];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private ecommerceassesmentservice: EcommerceassessmentService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }



  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
      this.useranalysisinput = '';
    }
    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1))
    } else {
      this.getFetchData(this.noofattempt);
    }
  }

  getPreviousData(attempt: string) {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].ecommercegamedata[this.databasecellnamearray[i]];
              }
              for (let i = 6; i < 11; i++) {
                if (this.previousResulList[i] == '0') {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 23; i < 32; i++) {
                if (this.previousResulList[i] == '0') {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0].ecommercegamedata[this.databasecellnamearray[i]];
                }
              }

              this.getFetchData(this.noofattempt);
            }

          } else {
            this.checkloading = false;

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }



  getFetchData(attempt: string) {
    this.checkloading = true;
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].ecommerceGameCM.ecommercegameperioddata;

              this.responseresultdatabase = data.resultList[0].ecommercegamedata;
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].ecommercegamecmid);


              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }

              if (data.resultList[0].ecommercegamedata) {
                this.foodforthoughtQNo = data.resultList[0].ecommercegamedata.aq169;
                this.submitprove = data.resultList[0].ecommercegamedata.aq168;

                if ((this.submitprove == 'yes') || (this.timefinished)) {
                  this.disabled = true;
                } else {
                  this.disabled = false;
                }

                for (let i = 0; i < 96; i++) {
                  this.result[i] = data.resultList[0].ecommercegamedata[this.databasecellnamearray[i]];

                }
                this.kpivaluearray = [Number((data.resultList[0].ecommercegamedata.n109) * 100).toFixed(2),
                Number((data.resultList[0].ecommercegamedata.r97)).toFixed(0),
                Number((data.resultList[0].ecommercegamedata.r99)).toFixed(0)]


              }



              for (let i = 0; i < 19; i++) {
                this.result1[i] = data.resultList[0].ecommerceGameCM.ecommercegameperioddata[this.periodcellnamearray[i]];

              }



              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if ((this.result[i] == "") || (this.result[i] == "0") || (this.result[i] == 0)) {
                  this.result[i] = "-"
                }
              }



              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (attempt > 1) {
                  if (this.result[i] == this.previousResulList[i]) {
                    this.isClass[i] = true;

                  } else {
                    this.isClass[i] = false;
                  }
                } else {
                  this.isClass[i] = true;
                }
              }

              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }



            }

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.feedback = this.ecommerceassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log(this.feedback);
    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }
  }

  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt), "coursecode").subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.useranalysisinput = data.resultList[0].studentsentiment;
            if (this.useranalysisinput == '') {
              this.useranalysisinput = String(localStorage.getItem('useranalysis'));
              if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
                this.useranalysisinput = '';
              }
            }
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }


  roundClick() {
    let attempt = this.roundname.split(" ");
    this.checkloading = true;
    this.getFetchData(attempt[1]);

  }

  decisioncheckliecommerceopup() {
    this.inputDataCheck();

  }

  inputDataCheck() {
    this.errorlist = [];
    // let catalogmarket = false;
    for (let i = 0; i < 10; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])

      }
    }
    for (let i = 10; i < 40; i++) {
      if (this.result[i] == '-') {

        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
        // catalogmarket = true;
      }
    }
    if (this.result.slice(40, 43).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Marketing-Facebook Campaign");
    }
    if (this.result.slice(43, 46).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Marketing-Instagram Campaign");
    }
    if (this.result.slice(46, 49).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Marketing-Youtube Campaign");
    }
    if (this.result[49] == "-") {
      this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[49])

    }
    for (let i = 50; i < 60; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
        // catalogmarket = true;
      }
    }
    if (this.result.slice(60, 65).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Marketing-Branding Campaign");
    }
    if (this.result[65] == "-") {
      this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[65])

    }
    if (this.result.slice(66, 71).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Experience-Nudges");
    }
    if (this.result[71] == "-") {
      this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[71])
    }
    if (this.result.slice(72, 75).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Experience-Checkout Features");
    }
    for (let i = 75; i < 78; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
      }
    }
    if (this.result.slice(78, 83).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Operations-Streaming Process");
    }
    if (this.result.slice(91, 96).every((value: any) => value === "-")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Catalog-Supplier");
    }



    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    }

    if (this.inputdatacheckvalue == false) {
      this.saveDecisionChecklist();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 16) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    this.useranalysisSubmit();

    const openDialog = () => {
      const dialogRef = this.dialog.open(Ecommercedecisionchecliecommerceopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray,

        },
        panelClass: 'custom-dialog-container',
        position:{top:'20px'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };

    openDialog();
  }

}



// ecommercepopup
@Component({
  selector: 'app-ecommercedecisionchecliecommerceopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule,FormsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class Ecommercedecisionchecliecommerceopup extends AbstractComponent {
  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<Ecommercedecisionchecliecommerceopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/ecommercegame/singleinputecommercegame';
    let decisionsubmitData = {
      "aq168": "yes"
    }
    this._api.promotionsdatawrite("ecommercegame", 1,
      decisionsubmitData, apiname, 'ecommercegamecmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.kpivaluearray[0],
            this.data.kpivaluearray[1], this.data.kpivaluearray[2], 'update', this.noofattempt)

          let submitprovecheck = this.data.submitprove;
          if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
            this.sendAssesmentValue();

          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }
        }

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Ecommerce").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Ecommerce").subscribe((data: any) => {

        if (data.status == "Success") {

          setTimeout(() => {
            this.sendfeedbackvalue();
          }, 4000);
          setTimeout(() => {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }, 10000);
        } else {
          this.checkloading = false;
          this._alert.error(data.status);
        }

      }, (error: any) => {
        this.checkloading = false;
      })


  }

  close() {
    this.dialogRef.close(false);
  }
}
