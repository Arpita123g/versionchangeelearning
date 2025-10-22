import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-valuechaindecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechaindecisionchecklist.component.html',
  styleUrls: ['./valuechaindecisionchecklist.component.scss']
})
export class ValuechaindecisionchecklistComponent extends AbstractComponent {
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
  resultarray: any = [];
  kpivaluearray: any = [];
  foodforthought: boolean = true;
  language: any = [];
  languageid: number = 0; // Initialize with a valid number

  optionalcase: any = ["foodforthoughtstatus", "componentsupplierstatus", "transportationstatus", "distributormarginsstatus", "innovationservicesstatus",];
  databasecellnamearray: any = ['z8', 'z10', 'z14', 'z15', 'z16', 'z17', 'z18', 'z19', 'z20', 'z24',//10
    'z25', 'z26', 'z27', 'z28', 'z29', 'z30', 'z31', 'z32', 'z33', 'z34',//20
    'z37', 'l38', 'l39', 'l56',];

  blankInputMessage: string[] = [
  ];
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
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].valuechainnewdata[this.databasecellnamearray[i]];
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
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;

              this.blankInputMessage = [this.language.b28, this.language.b35,
              this.language.b40, this.language.b243, this.language.b117,
              this.language.b115, this.language.b116, this.language.b66,
              this.language.b67, this.language.b74, this.language.b25,
              this.language.b244, this.language.b118, this.language.b119,
              this.language.b120, this.language.b93, this.language.b94,
              this.language.b95, this.language.b96, this.language.b97,
              this.language.b245,
              ];
              this.foodforthoughtQNo = data.resultList[0].z43;
              this.submitprove = data.resultList[0].valuechainnewdata.z42;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].valueChainNewCM.valuechainnewperioddata;
              this.responseresultdatabase = data.resultList[0].valuechainnewdata;
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
                this.result[i] = data.resultList[0].valuechainnewdata[this.databasecellnamearray[i]];

              }
              for (let i = 5; i < 9; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Yes'
                } else {
                  this.result[i] = 'No'
                }
              }
              for (let i = 15; i < 20; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Yes'
                } else {
                  this.result[i] = 'No'
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

              this.foodforthoughtQNo = data.resultList[0].valuechainnewdata.z43;
              this._global.casemanagementid.next(data.resultList[0].valueChainNewCM.valuechainnewcmid);


              this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + attempt : "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round " + i : "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }


              if ((this.optional[1] == true) && (this.result[5] == "No") && (this.result[6] == "No")) {
                this.result[5] = "-";
                this.result[6] = "-";
              } if ((this.optional[2] == true) && (this.result[7] == "No") && (this.result[8] == "No")) {
                this.result[7] = "-";
                this.result[8] = "-";
              }
              this.kpivaluearray = [Number((data.resultList[0].valuechainnewdata.l39) * 100).toFixed(2),
              Number((data.resultList[0].valuechainnewdata.l56) * 100).toFixed(2),
              (Number(data.resultList[0].valuechainnewdata.i29)).toFixed(0)]
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
      "Demand" +
      "\n" + this.responseresultcm.d6 + " " + this.responseresultcm.e6 +
      "\n" + this.responseresultcm.d7 + " " + this.responseresultcm.e7 +
      "\n" + this.responseresultcm.d8 + " " + this.responseresultcm.e8 +
      "\n" + this.responseresultcm.d9 + " " + this.responseresultcm.e9 +
      "\n" + this.responseresultcm.d10 + " " + this.responseresultcm.e10 +
      "\n" + this.responseresultcm.d11 + " " + this.responseresultcm.e11 +
      "\n\n" + this.responseresultcm.d13 + " " + this.responseresultcm.e13 +
      "\n" + this.responseresultcm.d14 + " " + this.responseresultcm.e14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n" + this.responseresultcm.d16 + " " + this.responseresultcm.e16 +
      "\n" + this.responseresultcm.d17 + " " + this.responseresultcm.e17 +
      "\n" + this.responseresultcm.d18 + " " + this.responseresultcm.e18 +
      "\n" + this.responseresultcm.d19 + " " + this.responseresultcm.e19 +
      "\n" + this.responseresultcm.d20 + " " + this.responseresultcm.e20 +
      "\n\n" + this.responseresultcm.d22 + " " + this.responseresultcm.e22 +
      "\n" + this.responseresultcm.d23 + " " + this.responseresultcm.e23 +
      "\n" + this.responseresultcm.d24 + " " + this.responseresultcm.e24 +
      "\n" + this.responseresultcm.d25 + " " + this.responseresultcm.e25 +
      "\n" + this.responseresultcm.d26 + " " + this.responseresultcm.e26 +
      "\n" + this.responseresultcm.d27 + " " + this.responseresultcm.e27 +
      "\n" + this.responseresultcm.d28 + " " + this.responseresultcm.e28 +
      "\n" + this.responseresultcm.d29 + " " + this.responseresultcm.e29 +
      "\n\n" + this.responseresultcm.d31 + " " + this.responseresultcm.e31 +
      "\n" + this.responseresultcm.d32 + " " + this.responseresultcm.e32 +
      "\n" + this.responseresultcm.d33 + " " + this.responseresultcm.e33 +
      "\n" + this.responseresultcm.d34 + " " + this.responseresultcm.e34 +
      "\n" + this.responseresultcm.d35 + " " + this.responseresultcm.e35 +
      "\n" + this.responseresultcm.d36 + " " + this.responseresultcm.e36 +
      "\n\nProduction" +
      "\n\n" + this.responseresultcm.g6 + " " + this.responseresultcm.h6 +
      "\n\nProduction Curve" +
      "\n" + this.responseresultcm.g9 + " " + this.responseresultcm.h9 +
      "\n" + this.responseresultcm.g10 + " " + this.responseresultcm.h10 +
      "\n" + this.responseresultcm.g11 + " " + this.responseresultcm.h11 +
      "\n" + this.responseresultcm.g12 + " " + this.responseresultcm.h12 +
      "\n" + this.responseresultcm.g13 + " " + this.responseresultcm.h13 +
      "\n" + this.responseresultcm.g14 + " " + this.responseresultcm.h14 +
      "\n" + this.responseresultcm.g15 + " " + this.responseresultcm.h15 +
      "\n" + this.responseresultcm.g16 + " " + this.responseresultcm.h16 +
      "\n" + this.responseresultcm.g17 + " " + this.responseresultcm.h17 +
      "\n" + this.responseresultcm.g18 + " " + this.responseresultcm.h18 +
      "\n" + this.responseresultcm.g19 + " " + this.responseresultcm.h19 +
      "\n" + this.responseresultcm.g20 + " " + this.responseresultcm.h20 +
      "\n\n" + this.responseresultcm.g22 + " " + this.responseresultcm.h22 +
      "\n" + this.responseresultcm.g23 + " " + this.responseresultcm.h23 +
      "\n" + this.responseresultcm.g24 + " " + this.responseresultcm.h24 +
      "\n" + this.responseresultcm.g25 + " " + this.responseresultcm.h25 +
      "\n" + this.responseresultcm.g26 + " " + this.responseresultcm.h26 +
      "\n\n" + this.responseresultcm.g28 + " " + this.responseresultcm.h28 + " " + this.responseresultcm.i28 + " " + this.responseresultcm.j28 +
      "\n" + this.responseresultcm.g29 + " " + "Vendor 1 is a reliable partner known for unwavering commitment " +
      "to sustainability. Their ethical standards and transparent operations make them the go-to choice for " +
      "businesses focused on environmental and social responsibility." + " " +
      this.responseresultcm.i29 + " " + this.responseresultcm.j29 +
      "\n" + this.responseresultcm.g30 + " " + "Vendor 2 prioritizes economic efficiency, excelling in " +
      "cost-effective solutions with streamlined operations. While a pragmatic choice for budget optimization, " +
      "their focus may not align with sustainability and ethical considerations as strongly." + " " +
      this.responseresultcm.i30 + " " + this.responseresultcm.j30 +
      "\n\n" + this.responseresultcm.g32 + " " + this.responseresultcm.h32 + " " + this.responseresultcm.i32 + " " + this.responseresultcm.j32 +
      "\n" + this.responseresultcm.g33 + " " + "Vendor 1, an industry veteran, boasts an impeccable track record " +
      "with minimal damages. Renowned for their reliability, they offer a time-tested solution for businesses " +
      "seeking transportation services with a proven history of safety and efficiency." + " " +
      this.responseresultcm.i33 + " " + this.responseresultcm.j33 +
      "\n" + this.responseresultcm.g34 + " " + "Vendor 2, a cost-efficient newcomer, provides budget-friendly" +
      "transportation solutions. However, businesses should note that, being relatively new, there's a chance" +
      "of products experiencing damages during transit." + " " +
      this.responseresultcm.i34 + " " + this.responseresultcm.j34 +
      "\n\n" + this.responseresultcm.g36 + " " + this.responseresultcm.h36 +
      "\n\n" + this.responseresultcm.g38 + " " + this.responseresultcm.h38 +
      "\n\n" + this.responseresultcm.g40 + " " + this.responseresultcm.h40 +
      "\n\n" + this.responseresultcm.g42 + " " + this.responseresultcm.h42 +
      "\n" + this.responseresultcm.g43 + " " + this.responseresultcm.h43 +
      "\n" + this.responseresultcm.g44 + " " + this.responseresultcm.h44 +
      "\n" + this.responseresultcm.g45 + " " + this.responseresultcm.h45 +
      "\n" + this.responseresultcm.g46 + " " + this.responseresultcm.h46 +
      "\n" + this.responseresultcm.g47 + " " + this.responseresultcm.h47 +
      "\n" + this.responseresultcm.g48 + " " + this.responseresultcm.h48 +
      "\n" + this.responseresultcm.g49 + " " + this.responseresultcm.h49 +
      "\n" + this.responseresultcm.g50 + " " + this.responseresultcm.h50 +
      "\n" + this.responseresultcm.g51 + " " + this.responseresultcm.h51 +
      "\n" + this.responseresultcm.g52 + " " + this.responseresultcm.h52 +
      "\n" + this.responseresultcm.g53 + " " + this.responseresultcm.h53 +
      "\n\nMarketing" +
      "\n" + this.responseresultcm.n6 + " " + this.responseresultcm.o6 + " " + this.responseresultcm.p6 + " " + this.responseresultcm.q6 +
      "\n" + this.responseresultcm.n7 + " " + this.responseresultcm.o7 + " " + this.responseresultcm.p7 + " " + this.responseresultcm.q7 +
      "\n" + this.responseresultcm.n8 + " " + this.responseresultcm.o8 + " " + this.responseresultcm.p8 + " " + this.responseresultcm.q8 +
      "\n" + this.responseresultcm.n9 + " " + this.responseresultcm.o9 + " " + this.responseresultcm.p9 + " " + this.responseresultcm.q9 +
      "\n" + this.responseresultcm.n10 + " " + this.responseresultcm.o10 + " " + this.responseresultcm.p10 + " " + this.responseresultcm.q10 +
      "\n" + this.responseresultcm.n11 + " " + this.responseresultcm.o11 + " " + this.responseresultcm.p11 + " " + this.responseresultcm.q11 +
      "\n" + this.responseresultcm.n12 + " " + this.responseresultcm.o12 + " " + this.responseresultcm.p12 + " " + this.responseresultcm.q12 +
      "\n" + this.responseresultcm.n13 + " " + this.responseresultcm.o13 + " " + this.responseresultcm.p13 + " " + this.responseresultcm.q13 +
      "\n" + this.responseresultcm.n14 + " " + this.responseresultcm.o14 + " " + this.responseresultcm.p14 + " " + this.responseresultcm.q14 +
      "\n" + this.responseresultcm.n15 + " " + this.responseresultcm.o15 + " " + this.responseresultcm.p15 + " " + this.responseresultcm.q15 +
      "\n" + this.responseresultcm.n16 + " " + this.responseresultcm.o16 + " " + this.responseresultcm.p16 + " " + this.responseresultcm.q16 +
      "\n" + this.responseresultcm.n17 + " " + this.responseresultcm.o17 + " " + this.responseresultcm.p17 + " " + this.responseresultcm.q17 +
      "\n\n" + this.responseresultcm.n19 + " " + this.responseresultcm.o19 + " " + this.responseresultcm.p19 +
      "\n" + this.responseresultcm.n20 + " " + this.responseresultcm.o20 + " " + this.responseresultcm.p20 +
      "\n" + this.responseresultcm.n21 + " " + this.responseresultcm.o21 + " " + this.responseresultcm.p21 +
      "\n" + this.responseresultcm.n22 + " " + this.responseresultcm.o22 + " " + this.responseresultcm.p22 +
      "\n" + this.responseresultcm.n23 + " " + this.responseresultcm.o23 + " " + this.responseresultcm.p23 +
      "\n" + this.responseresultcm.n24 + " " + this.responseresultcm.o24 + " " + this.responseresultcm.p24 +
      "\n" + this.responseresultcm.n25 + " " + this.responseresultcm.o25 + " " + this.responseresultcm.p25 +
      "\n" + this.responseresultcm.n26 + " " + this.responseresultcm.o26 + " " + this.responseresultcm.p26 +
      "\n\n" + this.responseresultcm.n28 + " " + this.responseresultcm.o28 + " " + this.responseresultcm.p28 +
      "\n" + this.responseresultcm.n29 + " " + this.responseresultcm.o29 + " " + this.responseresultcm.p29 +
      "\n" + this.responseresultcm.n30 + " " + this.responseresultcm.o30 + " " + this.responseresultcm.p30 +
      "\n" + this.responseresultcm.n31 + " " + this.responseresultcm.o31 + " " + this.responseresultcm.p31 +
      "\n" + this.responseresultcm.n32 + " " + this.responseresultcm.o32 + " " + this.responseresultcm.p32 +
      "\n" + this.responseresultcm.n33 + " " + this.responseresultcm.o33 + " " + this.responseresultcm.p33 +
      "\n" + this.responseresultcm.n34 + " " + this.responseresultcm.o34 + " " + this.responseresultcm.p34 +
      "\n" + this.responseresultcm.n35 + " " + this.responseresultcm.o35 + " " + this.responseresultcm.p35 +
      "\n" + this.responseresultcm.n36 + " " + this.responseresultcm.o36 + " " + this.responseresultcm.p36 +
      "\n\n" + this.responseresultcm.n38 + " " + this.responseresultcm.o38 + " " + this.responseresultcm.p38 + " " + this.responseresultcm.q38 +
      "\n" + this.responseresultcm.n39 + " " + this.responseresultcm.o39 + " " + this.responseresultcm.p39 + " " + this.responseresultcm.q39 +
      "\n" + this.responseresultcm.n40 + " " + this.responseresultcm.o40 + " " + this.responseresultcm.p40 + " " + this.responseresultcm.q40 +
      "\n" + this.responseresultcm.n41 + " " + this.responseresultcm.o41 + " " + this.responseresultcm.p41 + " " + this.responseresultcm.q41 +
      "\n" + this.responseresultcm.n42 + " " + this.responseresultcm.o42 + " " + this.responseresultcm.p42 + " " + this.responseresultcm.q42 +
      "\n" + this.responseresultcm.n43 + " " + this.responseresultcm.o43 + " " + this.responseresultcm.p43 + " " + this.responseresultcm.q43 +
      "\n" + this.responseresultcm.n44 + " " + this.responseresultcm.o44 + " " + this.responseresultcm.p44 + " " + this.responseresultcm.q44 +
      "\n\n" + " " + this.responseresultcm.o46 +
      "\n" + this.responseresultcm.n47 + " " + "Online channels offer a broad distribution reach, tapping into " +
      "a vast consumer base. With lower operational costs, companies benefit from competitive pricing and " +
      "potentially higher sales volumes. Margins typically range from 5% to 10%, making it an efficient " +
      "and cost-effective distribution channel." +
      "\n" + this.responseresultcm.n48 + " " + "Specialty stores provide a targeted and focused distribution " +
      "approach, particularly effective for niche or high-end products. With margins ranging from 7% to 15%, " +
      "these stores offer a balance between exclusivity and personalized customer service, enhancing brand " +
      "perception and potentially commanding premium prices." +
      "\n" + this.responseresultcm.n49 + " " + "Large retailers contribute to wide-scale distribution, leveraging" +
      "established networks and attracting diverse consumer demographics. Margins, ranging from 5% to 12%," +
      "reflect the negotiation power and volume of sales. Retailers provide convenience and accessibility," +
      "fostering brand visibility and attracting a broad customer base." +
      "\n\nInnovation & Services" +
      "\n\n" + this.responseresultcm.n53 + " " + this.responseresultcm.o53 + " " + this.responseresultcm.p53 + " " + this.responseresultcm.q53 + " " + this.responseresultcm.r53 +
      "\n" + this.responseresultcm.n54 + " " + "By harnessing the power of predictive analytics, the company can " +
      "strategically manage inventory levels, minimizing costs associated with excess stock and stockouts. " +
      "This efficiency contributes to improved customer service and cost optimization. " + " " +
      this.responseresultcm.p54 + " " + this.responseresultcm.q54 + " " + this.responseresultcm.r54 +
      "\n" + this.responseresultcm.n55 + " " + "Offering customers a subscription-based service for warranty, " +
      "repairs and upgrades not only ensures ongoing customer engagement but also creates a predictable " +
      "revenue stream. This model promotes customer loyalty, contributing to increased market share." + " " +
      this.responseresultcm.p55 + " " + this.responseresultcm.q55 + " " + this.responseresultcm.r55 +
      "\n" + this.responseresultcm.n56 + " " + "Integrating blockchain technology in the supply chain enhances " +
      "visibility, reducing errors and fraud. This innovation not only ensures the integrity of the supply " +
      "chain but also builds trust among smartphone customers and stakeholders." + " " +
      this.responseresultcm.p56 + " " + this.responseresultcm.q56 + " " + this.responseresultcm.r56 +
      "\n" + this.responseresultcm.n57 + " " + "By leveraging remote diagnostic tools, the company can address " +
      "customer issues promptly and efficiently, reducing the need for physical service visits. This not only " +
      "enhances customer satisfaction but also optimizes operational costs in the smartphone industry." + " " +
      this.responseresultcm.p57 + " " + this.responseresultcm.q57 + " " + this.responseresultcm.r57 +
      "\n" + this.responseresultcm.n58 + " " + "The AI-powered recommendation engine enhances the online shopping " +
      "experience for smartphone users. By analyzing user data, the system generates personalized suggestions, " +
      "increasing the likelihood of conversions and fostering customer satisfaction. This innovation not only " +
      "boosts market share but also establishes the company as a leader in personalized customer engagement " +
      "within the smartphone industry." + " " +
      this.responseresultcm.p58 + " " + this.responseresultcm.q58 + " " + this.responseresultcm.r58 +
      "\n\nFinance" +
      "\n\n" + this.responseresultcm.s6 + " " + this.responseresultcm.t6 +
      "\n" + this.responseresultcm.s7 + " " + this.responseresultcm.t7 +
      "\n" + this.responseresultcm.s8 + " " + this.responseresultcm.t8 +
      "\n" + this.responseresultcm.s9 + " " + this.responseresultcm.t9 +


      "\n\nInput" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Estimated Market Growth %" + " " + this.result[0] +
      "\n" + "Estimated Market Share %" + " " + this.result[1] +
      "\n" + "In-house Capacity Utilization %" + " " + this.result[2] +
      "\n" + "Outsourcing Capacity Utilization %" + " " + this.result[3] +
      "\n" + "Additional Machinery units" + " " + this.result[4] +
      "\n" + "Component Supplier 1" + " " + this.result[5] +
      "\n" + "Component Supplier 2" + " " + this.result[6] +
      "\n" + "Transporter 1" + " " + this.result[7] +
      "\n" + "Transporter 2" + " " + this.result[8] +
      "\n" + "Feature Index" + " " + this.result[9] +
      "\n" + "Promotion, mn INR" + " " + this.result[10] +
      "\n" + "Pricing, INR" + " " + this.result[11] +
      "\n" + "Online Channel Margin %" + " " + this.result[12] +
      "\n" + "Speciality Stores Channel Margin %" + " " + this.result[13] +
      "\n" + "Retail Channel Margin %" + " " + this.result[14] +
      "\n" + "Predictive Analytics" + " " + this.result[15] +
      "\n" + "Subsciption Based Services" + " " + this.result[16] +
      "\n" + "Blockchain Integration" + " " + this.result[17] +
      "\n" + "Remote Diagnosis" + " " + this.result[18] +
      "\n" + "AI-Powered Personalization" + " " + this.result[19] +
      "\n" + "Long-term Borrowings, mn INR" + " " + this.result[20] +


      "\n\n" + "Output" +
      "\nCash Balance" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Cash at start of the period" + " " + this.responseresultdatabase.i18 +
      "\n" + "Cash from operations" + " " + this.responseresultdatabase.i25 +
      "\n" + "Cash from investment" + " " + this.responseresultdatabase.i26 +
      "\n" + "Cash from financing" + " " + Number(this.responseresultdatabase.i27) + Number(this.responseresultdatabase.i29) +
      "\n" + "Cash at end of the period" + " " + this.responseresultdatabase.i30 +
      "\n" + "Sales, mn units" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Market Size" + " " + this.responseresultdatabase.l17 +
      "\n" + "Demand" + " " + this.responseresultdatabase.l34 +
      "\n" + "Actual Sales" + " " + this.responseresultdatabase.l38 +
      "\n" + "Production, mn units" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Capacity" + " " + this.responseresultdatabase.l35 +
      "\n" + "Closing Inventory" + " " + this.responseresultdatabase.l36 +
      "\n" + "Opportunity loss" + " " + this.responseresultdatabase.l37 +
      "\n" + "Operating Income, INR" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Revenue" + " " + this.responseresultdatabase.l41 +
      "\n" + "Variable Cost" + " " + this.responseresultdatabase.l42 +
      "\n" + "Gross Profit/Loss" + " " + this.responseresultdatabase.l43 +
      "\n" + "Component Cost" + " " + this.responseresultdatabase.l44 +
      "\n" + "Transportation & Inventory Cost" + " " + this.responseresultdatabase.l45 +
      "\n" + "Channel Cost" + " " + this.responseresultdatabase.l46 +
      "\n" + "Promotion Cost" + " " + this.responseresultdatabase.l47 +
      "\n" + "Services & Innovation Cost" + " " + this.responseresultdatabase.l48 +
      "\n" + "EBITDA" + " " + this.responseresultdatabase.l49 +
      "\n" + "Depreciation" + " " + this.responseresultdatabase.l50 +
      "\n" + "EBIT" + " " + this.responseresultdatabase.l51 +
      "\n" + "Interest Cost" + " " + this.responseresultdatabase.l52 +
      "\n" + "Profit before taxes" + " " + this.responseresultdatabase.l53 +
      "\n" + "Tax" + " " + this.responseresultdatabase.l54 +
      "\n" + "Profit/Loss" + " " + this.responseresultdatabase.l55 +
      "\n" + "KPI" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Market Share %" + " " + Number(this.responseresultdatabase.l39) * 100 + "%" +
      "\n" + "Margin %" + " " + Number(this.responseresultdatabase.l56) * 100 + "%" +
      "\n" + "Emergency Borrowing, mn INR" + " " + this.responseresultdatabase.i29;

    this.feedback = this.assesment;
    //  console.log("feedback",this.feedback);
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
        if (this.languageselect.toLowerCase() == 'EU') {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        } else {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        }
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
      if (this.languageselect.toLowerCase() == 'EU') {
        this._alert.error("To move ahead, kindly Write your analysis");
      } else {
        this._alert.error("To move ahead, kindly Write your analysis");
      } return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      if (this.languageselect.toLowerCase() == 'EU') {
        this._alert.error("To move ahead finish Food For Thought section");
      } else {
        this._alert.error("To move ahead finish Food For Thought section");
      } return;
    }

    const openDialog = () => {
      const dialogRef = this.dialog.open(ValuechaindecisinchecklistPopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          resultarray: this.result,
          kpivaluearray: this.kpivaluearray,
          languageid: this.languageid,



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
  //     if (this.foodforthoughtQNo == 8) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(ValuechaindecisinchecklistPopup, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
  //             resultarray: this.result,
  //             kpivaluearray: this.kpivaluearray


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
  //       const dialogRef = this.dialog.open(ValuechaindecisinchecklistPopup, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           resultarray: this.result,
  //           kpivaluearray: this.kpivaluearray


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



// popup...........

@Component({
  selector: 'app-valuechaindecisinchecklistPopup',
  standalone: true,
  templateUrl: './valuechaindecisinchecklistPopup.html',
  styleUrls: ['./valuechaindecisionchecklist.component.scss']

})

export class ValuechaindecisinchecklistPopup extends AbstractComponent {

  showtab: boolean = true;
  resultarray: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ValuechaindecisinchecklistPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/valuechainnew/singleinputvaluechainnew';
    let decisionsubmitData = {
      "z42": "yes"
    }
    this._api.Languagedatawrite("valuechainnew", 1,
      decisionsubmitData, apiname, 'valuechainnewcmid',this.languageselect, this.data.languageid, 'valuechainnewlmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Value Chain New").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Value Chain New").subscribe((data: any) => {

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
