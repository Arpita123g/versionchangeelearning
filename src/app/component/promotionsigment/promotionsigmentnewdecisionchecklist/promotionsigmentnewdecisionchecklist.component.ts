import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-promotionsigmentnewdecisionchecklist',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective  ],
  templateUrl: './promotionsigmentnewdecisionchecklist.component.html',
  styleUrls: ['./promotionsigmentnewdecisionchecklist.component.scss']
})
export class PromotionsigmentnewdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
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
  resultarray:any =[];
  foodforthought:boolean = true;
  optionalcase: any = ["foodforthoughtstatus", "onlinestatus", "moderntradestatus", "reatilersstatus"]

  databasecellnamearray: any = [
    'x20', 'x21', 'x22', 'x23', 'x24', 'x25', 'x26', 'x27', 'x28',
    'z23', 'x34', 'x35', 'x36', 'x37', 'x38', 'z24', 'z25',
    'x47', 'x48', 'x49', 'x50', 'x51', 'x52', 'x53', 'x54',
    's32', 's33', 's38',
  ]

  blankInputMessage: any = [
    'Website, Budgeting', 'Social Commerce, Budgeting', 'Modern Trade, Budgeting',
    'Retailers, Budgeting', 'Facebook, Budgeting', 'Instagram, Budgeting', 'Twitter, Budgeting',
    'LinkedIn, Budgeting', 'YouTube, Budgeting',
    'Website', 'Social Commerce, Community Engagement Series', 'Social Commerce, Flash Sales and Trending Topics',
    'Social Commerce, Visual Storytelling and Influencer Collaborations',
    'Social Commerce, Expert Insights and Premium Skincare Journey',
    'Social Commerce, Tutorial Series and Influencer Reviews', 'Modern Trade', 'Retailers',
    'Website, A/B Testing', 'Social Commerce, A/B Testing', 'Modern Trade & Retailers, A/B Testing',
    'Online Channel, Margin', 'Modern Trade Channel, Margin', 'Retailers Channel, Margin',
    'Product Focus, Acne Face Cream', 'Product Focus, Apple Cider Face Wash'
  ]
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
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
    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
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
    let apiname = '/promotions/fetchpromotions';
    this._api.promotionsigmentfetchdata(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].z21;
              this.submitprove = data.resultList[0].z20;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].promotionsCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
                let roundvalue = "round" + Number(this.noofattempt);


                if (data.resultList[0].aiAssessmentMaster != null) {
                  let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                  if (analysisshowdata == 'yes') {
                    this.analysisshow = true
                  } else {
                    this.analysisshow = false;
                  }
                }
                if (i < 9) {
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }

              }
              if ((this.result[10] == 0) && (this.result[11] == 0) && (this.result[12] == 0) && (this.result[13] == 0)
                && (this.result[14] == 0)) {
                for (let i = 10; i < 15; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 10; i < 15; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              if ((this.result[17] == 0) && (this.result[18] == 0) && (this.result[19] == 0)) {
                for (let i = 17; i < 20; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 17; i < 20; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              if ((this.result[23] == 0) && (this.result[24] == 0)) {
                for (let i = 23; i < 25; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 23; i < 25; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              for (let i = 0; i < 9; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (Number(this.result[i]) * 100) + "%"
                }
              } for (let i = 20; i < 23; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (Number(this.result[i]) * 100) + "%"
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

              this.foodforthoughtQNo = data.resultList[0].z21;
              this._global.casemanagementid.next(data.resultList[0].promotionscmid);


              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].promotionsCM.promotionsCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              this.useranalysisSubmit();
            }
            this.checkloading = false;
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
    this.assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + this.responseresultcm.b5 +
      "\n\n" +
      "Market Research" +
      "\n\nC1 to C8 represents competitor historical data and U presents player company historical data" +
      "\n\nGoogle Ad Spend " +
      "\n" + " " + " " + "Google Ad Spend " +
      "\n" + this.responseresultcm.d14 + " " + this.responseresultcm.e14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n" + this.responseresultcm.d16 + " " + this.responseresultcm.e16 +
      "\n" + this.responseresultcm.d17 + " " + this.responseresultcm.e17 +
      "\n" + this.responseresultcm.d18 + " " + this.responseresultcm.e18 +
      "\n" + this.responseresultcm.d19 + " " + this.responseresultcm.e19 +
      "\n" + this.responseresultcm.d20 + " " + this.responseresultcm.e20 +
      "\n" + this.responseresultcm.d21 + " " + this.responseresultcm.e21 +
      "\n" + this.responseresultcm.d22 + " " + this.responseresultcm.e22 +
      "\n\n" + this.responseresultcm.d24 +
      "\n" + " " + this.responseresultcm.e25 + " " + this.responseresultcm.f25 + " " + this.responseresultcm.g25 + " " + this.responseresultcm.h25 +
      "\n" + this.responseresultcm.d26 + " " + this.responseresultcm.e26 + " " + this.responseresultcm.f26 + " " + this.responseresultcm.g26 + " " + this.responseresultcm.h26 +
      "\n" + this.responseresultcm.d27 + " " + this.responseresultcm.e27 + " " + this.responseresultcm.f27 + " " + this.responseresultcm.g27 + " " + this.responseresultcm.h27 +
      "\n" + this.responseresultcm.d28 + " " + this.responseresultcm.e28 + " " + this.responseresultcm.f28 + " " + this.responseresultcm.g28 + " " + this.responseresultcm.h28 +
      "\n" + this.responseresultcm.d29 + " " + this.responseresultcm.e29 + " " + this.responseresultcm.f29 + " " + this.responseresultcm.g29 + " " + this.responseresultcm.h29 +
      "\n" + this.responseresultcm.d30 + " " + this.responseresultcm.e30 + " " + this.responseresultcm.f30 + " " + this.responseresultcm.g30 + " " + this.responseresultcm.h30 +
      "\n" + this.responseresultcm.d31 + " " + this.responseresultcm.e31 + " " + this.responseresultcm.f31 + " " + this.responseresultcm.g31 + " " + this.responseresultcm.h31 +
      "\n" + this.responseresultcm.d32 + " " + this.responseresultcm.e32 + " " + this.responseresultcm.f32 + " " + this.responseresultcm.g32 + " " + this.responseresultcm.h32 +
      "\n" + this.responseresultcm.d33 + " " + this.responseresultcm.e33 + " " + this.responseresultcm.f33 + " " + this.responseresultcm.g33 + " " + this.responseresultcm.h33 +
      "\n" + this.responseresultcm.d34 + " " + this.responseresultcm.e34 + " " + this.responseresultcm.f34 + " " + this.responseresultcm.g34 + " " + this.responseresultcm.h34 +
      "\n\n" + this.responseresultcm.d36 +
      "\n" + " " + this.responseresultcm.e37 + " " + this.responseresultcm.f37 + " " + this.responseresultcm.g37 + " " + this.responseresultcm.h37 +
      "\n" + this.responseresultcm.d38 + " " + this.responseresultcm.e38 + " " + this.responseresultcm.f38 + " " + this.responseresultcm.g38 + " " + this.responseresultcm.h38 +
      "\n" + this.responseresultcm.d39 + " " + this.responseresultcm.e39 + " " + this.responseresultcm.f39 + " " + this.responseresultcm.g39 + " " + this.responseresultcm.h39 +
      "\n" + this.responseresultcm.d40 + " " + this.responseresultcm.e40 + " " + this.responseresultcm.f40 + " " + this.responseresultcm.g40 + " " + this.responseresultcm.h40 +
      "\n" + this.responseresultcm.d41 + " " + this.responseresultcm.e41 + " " + this.responseresultcm.f41 + " " + this.responseresultcm.g41 + " " + this.responseresultcm.h41 +
      "\n" + this.responseresultcm.d42 + " " + this.responseresultcm.e42 + " " + this.responseresultcm.f42 + " " + this.responseresultcm.g42 + " " + this.responseresultcm.h42 +
      "\n" + this.responseresultcm.d43 + " " + this.responseresultcm.e43 + " " + this.responseresultcm.f43 + " " + this.responseresultcm.g43 + " " + this.responseresultcm.h43 +
      "\n" + this.responseresultcm.d44 + " " + this.responseresultcm.e44 + " " + this.responseresultcm.f44 + " " + this.responseresultcm.g44 + " " + this.responseresultcm.h44 +
      "\n" + this.responseresultcm.d45 + " " + this.responseresultcm.e45 + " " + this.responseresultcm.f45 + " " + this.responseresultcm.g45 + " " + this.responseresultcm.h45 +
      "\n" + this.responseresultcm.d46 + " " + this.responseresultcm.e46 + " " + this.responseresultcm.f46 + " " + this.responseresultcm.g46 + " " + this.responseresultcm.h46 +
      "\n\n" + this.responseresultcm.d48 +
      "\n" + " " + this.responseresultcm.e49 + " " + this.responseresultcm.f49 +
      "\n" + this.responseresultcm.d50 + " " + this.responseresultcm.e50 + " " + this.responseresultcm.f50 +
      "\n" + this.responseresultcm.d51 + " " + this.responseresultcm.e51 + " " + this.responseresultcm.f51 +
      "\n" + this.responseresultcm.d52 + " " + this.responseresultcm.e52 + " " + this.responseresultcm.f52 +
      "\n" + this.responseresultcm.d53 + " " + this.responseresultcm.e53 + " " + this.responseresultcm.f53 +
      "\n\n" + this.responseresultcm.d55 +
      "\n" + " " + this.responseresultcm.e56 + " " + this.responseresultcm.f56 +
      "\n" + this.responseresultcm.d57 + " " + this.responseresultcm.e57 + " " + this.responseresultcm.f57 +
      "\n" + this.responseresultcm.d58 + " " + this.responseresultcm.e58 + " " + this.responseresultcm.f58 +
      "\n" + this.responseresultcm.d59 + " " + this.responseresultcm.e59 + " " + this.responseresultcm.f59 +
      "\n" + this.responseresultcm.d60 + " " + this.responseresultcm.e60 + " " + this.responseresultcm.f60 +
      "\n\n" + this.responseresultcm.d62 +
      "\n" + " " + " " + this.responseresultcm.e63 + " " + this.responseresultcm.f63 + " " + this.responseresultcm.g63 + " " + this.responseresultcm.h63 +
      "\n" + this.responseresultcm.d64 + " " + this.responseresultcm.e64 + " " + this.responseresultcm.f64 + " " + this.responseresultcm.g64 + " " + this.responseresultcm.h64 +
      "\n" + this.responseresultcm.d65 + " " + this.responseresultcm.e65 + " " + this.responseresultcm.f65 + " " + this.responseresultcm.g65 + " " + this.responseresultcm.h65 +
      "\n" + this.responseresultcm.d66 + " " + this.responseresultcm.e66 + " " + this.responseresultcm.f66 + " " + this.responseresultcm.g66 + " " + this.responseresultcm.h66 +
      "\n" + this.responseresultcm.d67 + " " + this.responseresultcm.e67 + " " + this.responseresultcm.f67 + " " + this.responseresultcm.g67 + " " + this.responseresultcm.h67 +
      "\n" + this.responseresultcm.d68 + " " + this.responseresultcm.e68 + " " + this.responseresultcm.f68 + " " + this.responseresultcm.g68 + " " + this.responseresultcm.h68 +
      "\n" + this.responseresultcm.d69 + " " + this.responseresultcm.e69 + " " + this.responseresultcm.f69 + " " + this.responseresultcm.g69 + " " + this.responseresultcm.h69 +
      "\n" + this.responseresultcm.d70 + " " + this.responseresultcm.e70 + " " + this.responseresultcm.f70 + " " + this.responseresultcm.g70 + " " + this.responseresultcm.h70 +
      "\n" + this.responseresultcm.d71 + " " + this.responseresultcm.e71 + " " + this.responseresultcm.f71 + " " + this.responseresultcm.g71 + " " + this.responseresultcm.h71 +
      "\n\n" + this.responseresultcm.d73 +
      "\n" + this.responseresultcm.d74 + " " + this.responseresultcm.e74 +
      "\n" + this.responseresultcm.d75 + " " + this.responseresultcm.e75 +
      "\n" + this.responseresultcm.d76 + " " + this.responseresultcm.e76 +
      "\n" + this.responseresultcm.d77 + " " + this.responseresultcm.e77 +
      "\n" + this.responseresultcm.d78 + " " + this.responseresultcm.e78 +
      "\n" + this.responseresultcm.d79 + " " + this.responseresultcm.e79 +
      "\n" + this.responseresultcm.d80 + " " + this.responseresultcm.e80 +
      "\n" + this.responseresultcm.d81 + " " + this.responseresultcm.e81 +
      "\n" + this.responseresultcm.d82 + " " + this.responseresultcm.e82 +
      "\n\n" + this.responseresultcm.d84 +
      "\n" + " " + " " + this.responseresultcm.e85 + " " + this.responseresultcm.f85 +
      "\n" + this.responseresultcm.d86 + " " + this.responseresultcm.e86 + " " + this.responseresultcm.f86 +
      "\n" + this.responseresultcm.d87 + " " + this.responseresultcm.e87 + " " + this.responseresultcm.f87 +
      "\n" + this.responseresultcm.d88 + " " + this.responseresultcm.e88 + " " + this.responseresultcm.f88 +
      "\n" + this.responseresultcm.d89 + " " + this.responseresultcm.e89 + " " + this.responseresultcm.f89 +

      "\n\n" + this.responseresultcm.j4 + "\n" +
      "\n" + this.responseresultcm.j6 + " " + this.responseresultcm.k6 + "\n" +
      "\n" + this.responseresultcm.j21 +
      "\n" + this.responseresultcm.j22 + " " + this.responseresultcm.k22 + " " + this.responseresultcm.l22 + " " + this.responseresultcm.m22 +
      "\n" + this.responseresultcm.j23 + " " + this.responseresultcm.k23 + " " + this.responseresultcm.l23 + " " + this.responseresultcm.m23 +
      "\n" + this.responseresultcm.j24 + " " + this.responseresultcm.k24 + " " + this.responseresultcm.l24 + " " + this.responseresultcm.m24 +
      "\n" + this.responseresultcm.j25 + " " + this.responseresultcm.k25 + " " + this.responseresultcm.l25 + " " + this.responseresultcm.m25 +
      "\n\n" + this.responseresultcm.j27 + "\n" +
      "\n" + this.responseresultcm.j28 + " " + this.responseresultcm.k28 + " " + this.responseresultcm.l28 + " " + this.responseresultcm.m28 +
      "\n" + this.responseresultcm.j29 + " " + this.responseresultcm.k29 + " " + this.responseresultcm.l29 + " " + this.responseresultcm.m29 +
      "\n" + this.responseresultcm.j30 + " " + this.responseresultcm.k30 + " " + this.responseresultcm.l30 + " " + this.responseresultcm.m30 +
      "\n" + this.responseresultcm.j31 + " " + this.responseresultcm.k31 + " " + this.responseresultcm.l31 + " " + this.responseresultcm.m31 +
      "\n\n" + this.responseresultcm.j33 +
      "\n" + this.responseresultcm.j34 + " " + this.responseresultcm.k34 + " " + this.responseresultcm.l34 + " " + this.responseresultcm.m34 +
      "\n" + this.responseresultcm.j35 + " " + this.responseresultcm.k35 + " " + this.responseresultcm.l35 + " " + this.responseresultcm.m35 +
      "\n" + this.responseresultcm.j36 + " " + this.responseresultcm.k36 + " " + this.responseresultcm.l36 + " " + this.responseresultcm.m36 +
      "\n" + this.responseresultcm.j37 + " " + this.responseresultcm.k37 + " " + this.responseresultcm.l37 + " " + this.responseresultcm.m37 +
      "\n\n" + this.responseresultcm.j39 +
      "\n" + this.responseresultcm.j40 + " " + this.responseresultcm.k40 + " " + this.responseresultcm.l40 + " " + this.responseresultcm.m40 +
      "\n" + this.responseresultcm.j41 + " " + this.responseresultcm.k41 + " " + this.responseresultcm.l41 + " " + this.responseresultcm.m41 +
      "\n" + this.responseresultcm.j42 + " " + this.responseresultcm.k42 + " " + this.responseresultcm.l42 + " " + this.responseresultcm.m42 +
      "\n" + this.responseresultcm.j43 + " " + this.responseresultcm.k43 + " " + this.responseresultcm.l43 + " " + this.responseresultcm.m43 +
      "\n\n" + this.responseresultcm.j45 +
      "\n" + this.responseresultcm.j46 + " " + this.responseresultcm.k46 + " " + this.responseresultcm.l46 + " " + this.responseresultcm.m46 +
      "\n" + this.responseresultcm.j47 + " " + this.responseresultcm.k47 + " " + this.responseresultcm.l47 + " " + this.responseresultcm.m47 +
      "\n" + this.responseresultcm.j48 + " " + this.responseresultcm.k48 + " " + this.responseresultcm.l48 + " " + this.responseresultcm.m48 +
      "\n" + this.responseresultcm.j49 + " " + this.responseresultcm.k49 + " " + this.responseresultcm.l49 + " " + this.responseresultcm.m49 +
      "\n\n" + this.responseresultcm.j51 +
      "\n" + this.responseresultcm.j52 + " " + this.responseresultcm.k52 + " " + this.responseresultcm.l52 + " " + this.responseresultcm.m52 +
      "\n" + this.responseresultcm.j53 + " " + this.responseresultcm.k53 + " " + this.responseresultcm.l53 + " " + this.responseresultcm.m53 +
      "\n" + this.responseresultcm.j54 + " " + this.responseresultcm.k54 + " " + this.responseresultcm.l54 + " " + this.responseresultcm.m54 +
      "\n" + this.responseresultcm.j55 + " " + this.responseresultcm.k55 + " " + this.responseresultcm.l55 + " " + this.responseresultcm.m55 +
      "\n\n" + this.responseresultcm.j57 +
      "\n" + this.responseresultcm.j58 + " " + this.responseresultcm.k58 + " " + this.responseresultcm.l58 + " " + this.responseresultcm.m58 +
      "\n" + this.responseresultcm.j59 + " " + this.responseresultcm.k59 + " " + this.responseresultcm.l59 + " " + this.responseresultcm.m59 +
      "\n" + this.responseresultcm.j60 + " " + this.responseresultcm.k60 + " " + this.responseresultcm.l60 + " " + this.responseresultcm.m60 +
      "\n" + this.responseresultcm.j61 + " " + this.responseresultcm.k61 + " " + this.responseresultcm.l61 + " " + this.responseresultcm.m61 +
      "\n\n" + this.responseresultcm.j57 +
      "\n" + this.responseresultcm.j58 + " " + this.responseresultcm.k58 + " " + this.responseresultcm.l58 + " " + this.responseresultcm.m58 +
      "\n" + this.responseresultcm.j59 + " " + this.responseresultcm.k59 + " " + this.responseresultcm.l59 + " " + this.responseresultcm.m59 +
      "\n" + this.responseresultcm.j60 + " " + this.responseresultcm.k60 + " " + this.responseresultcm.l60 + " " + this.responseresultcm.m60 +
      "\n" + this.responseresultcm.j61 + " " + this.responseresultcm.k61 + " " + this.responseresultcm.l61 + " " + this.responseresultcm.m61 +
      "\n\n" + this.responseresultcm.j63 +
      "\n" + this.responseresultcm.j64 + " " + this.responseresultcm.k64 + " " + this.responseresultcm.l64 + " " + this.responseresultcm.m64 +
      "\n" + this.responseresultcm.j65 + " " + this.responseresultcm.k65 + " " + this.responseresultcm.l65 + " " + this.responseresultcm.m65 +
      "\n" + this.responseresultcm.j66 + " " + this.responseresultcm.k66 + " " + this.responseresultcm.l66 + " " + this.responseresultcm.m66 +
      "\n" + this.responseresultcm.j67 + " " + this.responseresultcm.k67 + " " + this.responseresultcm.l67 + " " + this.responseresultcm.m67 +
      "\n\n" + this.responseresultcm.o4 + "\n" +
      "\n" + this.responseresultcm.o7 + " " + this.responseresultcm.q7 + " " + this.responseresultcm.r7 + " " + this.responseresultcm.s7 + " " + this.responseresultcm.t7 +
      "\n" + this.responseresultcm.o8 + " " + this.responseresultcm.q8 + " " + this.responseresultcm.r8 + " " + this.responseresultcm.s8 + " " + this.responseresultcm.t8 +
      "\n" + this.responseresultcm.o9 + " " + this.responseresultcm.q9 + " " + this.responseresultcm.r9 + " " + this.responseresultcm.s9 + " " + this.responseresultcm.t9 +
      "\n" + this.responseresultcm.o10 + " " + this.responseresultcm.q10 + " " + this.responseresultcm.r10 + " " + this.responseresultcm.s10 + " " + this.responseresultcm.t10 +
      "\n\n" + this.responseresultcm.o12 +
      "\n" + this.responseresultcm.o13 + " " + this.responseresultcm.q13 + " " + this.responseresultcm.r13 + " " + this.responseresultcm.s13 + " " + this.responseresultcm.t13 +
      "\n" + this.responseresultcm.o14 + " " + this.responseresultcm.q14 + " " + this.responseresultcm.r14 + " " + this.responseresultcm.s14 + " " + this.responseresultcm.t14 +
      "\n" + this.responseresultcm.o15 + " " + this.responseresultcm.q15 + " " + this.responseresultcm.r15 + " " + this.responseresultcm.s15 + " " + this.responseresultcm.t15 +
      "\n" + this.responseresultcm.o16 + " " + this.responseresultcm.q16 + " " + this.responseresultcm.r16 + " " + this.responseresultcm.s16 + " " + this.responseresultcm.t16 +
      "\n" + this.responseresultcm.o17 + " " + this.responseresultcm.q17 + " " + this.responseresultcm.r17 + " " + this.responseresultcm.s17 + " " + this.responseresultcm.t17 +
      "\n" + this.responseresultcm.o18 + " " + this.responseresultcm.q18 + " " + this.responseresultcm.r18 + " " + this.responseresultcm.s18 + " " + this.responseresultcm.t18 +
      "\n\n" + this.responseresultcm.o20 +
      "\n" + this.responseresultcm.o21 + " " + this.responseresultcm.q21 + " " + this.responseresultcm.r21 + " " + this.responseresultcm.s21 + " " + this.responseresultcm.t21 +
      "\n" + this.responseresultcm.o22 + " " + this.responseresultcm.q22 + " " + this.responseresultcm.r22 + " " + this.responseresultcm.s22 + " " + this.responseresultcm.t22 +
      "\n" + this.responseresultcm.o23 + " " + this.responseresultcm.q23 + " " + this.responseresultcm.r23 + " " + this.responseresultcm.s23 + " " + this.responseresultcm.t23 +
      "\n" + this.responseresultcm.o24 + " " + this.responseresultcm.q24 + " " + this.responseresultcm.r24 + " " + this.responseresultcm.s24 + " " + this.responseresultcm.t24 +
      "\n\n" + this.responseresultcm.o26 +
      "\n" + this.responseresultcm.o27 + " " + this.responseresultcm.q27 + " " + this.responseresultcm.r27 + " " + this.responseresultcm.s27 + " " + this.responseresultcm.t27 +
      "\n" + this.responseresultcm.o28 + " " + this.responseresultcm.q28 + " " + this.responseresultcm.r28 + " " + this.responseresultcm.s28 + " " + this.responseresultcm.t28 +
      "\n" + this.responseresultcm.o29 + " " + this.responseresultcm.q29 + " " + this.responseresultcm.r29 + " " + this.responseresultcm.s29 + " " + this.responseresultcm.t29 +
      "\n" + this.responseresultcm.o30 + " " + this.responseresultcm.q30 + " " + this.responseresultcm.r30 + " " + this.responseresultcm.s30 + " " + this.responseresultcm.t30 +
      "\n\n" + this.responseresultcm.v4 +
      "\n\n" + this.responseresultcm.v6 +
      "\n" + this.responseresultcm.v7 + " " + this.responseresultcm.x7 + " " + this.responseresultcm.y7 +
      "\n" + this.responseresultcm.v8 + " " + this.responseresultcm.x8 + " " + this.responseresultcm.y8 +
      "\n" + this.responseresultcm.v9 + " " + this.responseresultcm.x9 + " " + this.responseresultcm.y9 +
      "\n" + this.responseresultcm.v10 + " " + this.responseresultcm.x10 + " " + this.responseresultcm.y10 +
      "\n\n" + this.responseresultcm.v18 +
      "\n" + this.responseresultcm.v19 + " " + this.responseresultcm.w19 + " " + this.responseresultcm.x19 +
      "\n" + this.responseresultcm.v20 + " " + this.responseresultcm.w20 + " " + this.responseresultcm.x20 +
      "\n" + this.responseresultcm.v21 + " " + this.responseresultcm.w21 + " " + this.responseresultcm.x21 +
      "\n" + this.responseresultcm.v22 + " " + this.responseresultcm.w22 + " " + this.responseresultcm.x22 +
      "\n\n" + this.responseresultcm.v24 +
      "\n" + this.responseresultcm.v25 + " " + this.responseresultcm.w25 + " " + this.responseresultcm.x25 +
      "\n" + this.responseresultcm.v26 + " " + this.responseresultcm.w26 + " " + this.responseresultcm.x26 +
      "\n" + this.responseresultcm.v27 + " " + this.responseresultcm.w27 + " " + this.responseresultcm.x27 +
      "\n" + this.responseresultcm.v28 + " " + this.responseresultcm.w28 + " " + this.responseresultcm.x28 +
      "\n\n" + this.responseresultcm.v30 +
      "\n" + this.responseresultcm.v31 + " " + this.responseresultcm.w31 + " " + this.responseresultcm.x31 +
      "\n" + this.responseresultcm.v32 + " " + this.responseresultcm.w32 + " " + this.responseresultcm.x32 +
      "\n" + this.responseresultcm.v33 + " " + this.responseresultcm.w33 + " " + this.responseresultcm.x33 +
      "\n" + this.responseresultcm.v34 + " " + this.responseresultcm.w34 + " " + this.responseresultcm.x34 +
      "\n" + this.responseresultcm.v36 + " " + this.responseresultcm.w36 + " " + this.responseresultcm.x36 + " " + this.responseresultcm.y36 +
      "\n" + this.responseresultcm.v37 + " " + this.responseresultcm.w37 + " " + this.responseresultcm.x37 + " " + this.responseresultcm.y37 +
      "\n" + this.responseresultcm.v38 + " " + this.responseresultcm.w38 + " " + this.responseresultcm.x38 + " " + this.responseresultcm.y38 +
      "\n\nPlayer's Input" + "/n" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Website, Budgeting" + " " + this.result[0] +
      "\n" + "Social Commerce, Budgeting" + " " + this.result[1] +
      "\n" + "Modern Trade, Budgeting" + " " + this.result[2] +
      "\n" + "Retailers, Budgeting" + " " + this.result[3] +
      "\n" + "Facebook, Budgeting" + " " + this.result[4] +
      "\n" + "Instagram, Budgeting" + " " + this.result[5] +
      "\n" + "Twitter, Budgeting" + " " + this.result[6] +
      "\n" + "LinkedIn, Budgeting" + " " + this.result[7] +
      "\n" + "YouTube, Budgeting" + " " + this.result[8] +
      "\n" + "Website" + " " + +
      "\n" + "Social Commerce, Community Engagement Series" + " " + this.result[10] +
      "\n" + "Social Commerce, Flash Sales and Trending Topics" + " " + this.result[11] +
      "\n" + "Social Commerce, Visual Storytelling and Influencer Collaborations" + " " + this.result[12] +
      "\n" + "Social Commerce, Expert Insights and Premium Skincare Journey" + " " + this.result[13] +
      "\n" + "Social Commerce, Tutorial Series and Influencer Reviews" + " " + this.result[14] +
      "\n" + "Modern Trade" + " " + this.result[15] +
      "\n" + "Retailers" + " " + this.result[16] +
      "\n" + "Website, A/B Testing" + " " + this.result[17] +
      "\n" + "Social Commerce, A/B Testing" + " " + this.result[18] +
      "\n" + "Modern Trade & Retailers, A/B Testing" + " " + this.result[19] +
      "\n" + "Online Channel, Margin" + " " + this.result[20] +
      "\n" + "Modern Trade Channel, Margin" + " " + this.result[21] +
      "\n" + "Retailers Channel, Margin" + " " + this.result[22] +
      "\n" + "Product Focus, Acne Face Cream" + " " + this.result[23] +
      "\n" + "Product Focus, Apple Cider Face Wash" + " " + this.result[24] +
      "\n\nSystem Generated Output based on player input" + "\n" +
      "\n" + "Product sales input" +
      "\n" + "Parameter" + "Acne Face Cream" + "Apple cider face wash" +
      "\n" + this.responseresultdatabase.r6 + " " + this.responseresultdatabase.s6 + " " + this.responseresultdatabase.t6 +
      "\n" + this.responseresultdatabase.r7 + " " + this.responseresultdatabase.s7 + " " + this.responseresultdatabase.t7 +
      "\n" + this.responseresultdatabase.r8 + " " + this.responseresultdatabase.s8 + " " + this.responseresultdatabase.t8 +
      "\n" + this.responseresultdatabase.r9 + " " + this.responseresultdatabase.s9 + " " + this.responseresultdatabase.t9 +
      "\n" + "Platform sales input" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + this.responseresultdatabase.r6 + " " + this.responseresultdatabase.u6 +
      "\n" + this.responseresultdatabase.r7 + " " + this.responseresultdatabase.u7 +
      "\n" + this.responseresultdatabase.r8 + " " + this.responseresultdatabase.u8 +
      "\n" + this.responseresultdatabase.r9 + " " + this.responseresultdatabase.u9 +
      "\n" + "Segment sales input" +
      "\n" + this.responseresultdatabase.s17 + " " + this.responseresultdatabase.t17 + " " +
      "\n" + this.responseresultdatabase.r18 + " " + this.responseresultdatabase.s18 + " " + this.responseresultdatabase.t18 +
      "\n" + this.responseresultdatabase.r19 + " " + this.responseresultdatabase.s19 + " " + this.responseresultdatabase.t19 +
      "\n" + this.responseresultdatabase.r20 + " " + this.responseresultdatabase.s20 + " " + this.responseresultdatabase.t20 +
      "\n" + this.responseresultdatabase.r21 + " " + this.responseresultdatabase.s21 + " " + this.responseresultdatabase.t21 +
      "\n" + "Promotion Cost, INR" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Communication Mix Cost" + " " + this.responseresultdatabase.s27 +
      "\n" + "Campaign Creation Cost" + " " + this.responseresultdatabase.s28 +
      "\n" + "A/B Testing Cost" + " " + this.responseresultdatabase.s29 +
      "\n" + "Channel Cost" + " " + this.responseresultdatabase.s30 +
      "\n" + "Total Cost" + " " + this.responseresultdatabase.s31 +
      "\n" + "Operating Income, INR" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Revenue" + " " + this.responseresultdatabase.s24 +
      "\n" + "Variable Cost" + " " + this.responseresultdatabase.s25 +
      "\n" + "Gross Profit" + " " + this.responseresultdatabase.s26 +
      "\n" + "Promotion Cost" + " " + this.responseresultdatabase.s31 +
      "\n" + "Operating Profit/Loss" + " " + this.responseresultdatabase.s32 +
      "\n" + "KPI" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Operating Margin" + " " + Number(this.responseresultdatabase.s33) * 100 + "%"
    "\n" + "ROAS" + " " + Number(this.responseresultdatabase.s38) * 100 + "%"

    this.feedback = this.assesment;


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

  decisionchecklistpopup() {
    this.inputDataCheck();

  }

  inputDataCheck() {
    this.errorlist = [];
    for (let i = 0; i < this.databasecellnamearray.length; i++) {
      if (this.result[i] == "-") {
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
        this.inputdatacheckvalue = true;
      }

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
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 10) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          resultarray: this.result,

        },
        panelClass: 'custom-dialog-container'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };
  
    openDialog();
  }
  
  // saveDecisionChecklist() {
  //   if (this.noofattempt == "1") {
  //     if (this.foodforthoughtQNo == 10) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
  //             resultarray: this.result,

  //           },
  //           panelClass: 'custom-dialog-container'
  //         });
  //         dialogRef.afterClosed().subscribe(result => {
  //           if (result) {
  //             this.newItemEvent.emit('report');
  //           }
  //         });
  //       }
  //     }
  //     else {
  //       this._alert.error("To move ahead finish Food For Thought section");
  //     }
  //   } else if (this.noofattempt != '1') {
  //     if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //       this._alert.error("To move ahead, kindly Write your analysis");

  //     } else {
  //       const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           resultarray: this.result,

  //         },
  //         panelClass: 'custom-dialog-container'
  //       });
  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //           this.newItemEvent.emit('report');
  //         }
  //       });
  //     }
  //   }


  // }

}

//popup


@Component({
  selector: 'app-promotionsigmentnewpopup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],  
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})

export class PromotionsigmentnewpopupComponent extends AbstractComponent {

  showtab: boolean = true;
  resultarray: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PromotionsigmentnewpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/promotions/singleinputpromotions';
    let decisionsubmitData = {
      "z20": "yes"
    }
    this._api.promotionsdatawrite("promotions", 1,
      decisionsubmitData, apiname, 'promotionscmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[27] == "-" ? "0" : (this.data.resultarray[27] * 100).toFixed(0),
            this.data.resultarray[26] == "-" ? "0" : (this.data.resultarray[26] * 100).toFixed(0),
            this.data.resultarray[25] == "-" ? "0" : (this.data.resultarray[25]), 'update', this.noofattempt)

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Promotions & Segments").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Promotions & Segments").subscribe((data: any) => {

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

      }, (error: any) => { this.checkloading = false; })

  }


  close() {
    this.dialogRef.close(false);
  }
}