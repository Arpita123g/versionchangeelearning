import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
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
  selector: 'app-portfolionewdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './portfolionewdecisionchecklist.component.html',
  styleUrls: ['./portfolionewdecisionchecklist.component.scss']
})
export class PortfolionewdecisionchecklistComponent extends AbstractComponent {
  roundname: string = "";
  result: any = [];
  foodforthoughtQNo: number = 0;
  dropdownvalue: any = [];
  playername: string = '';
  optional: any[] = [];
  @Output() newItemEvent = new EventEmitter<any>();
  inputdatacheckvalue: boolean = false;
  previousResulList: any = [];
  errorlist: any = [];
  analysisshow: boolean = true;
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  optionalcase: any = [];
  phase1submitprove:string = "";
  phase2submitprove:string = "";
  foodforthought:boolean = true;

  defaultvalue: any = [
    0, 30, 10, 5, 5, 0, 50, 50, 0, 0, 0, 0, 50, 0, 10, 0, 15, 25, 0, 30, 0
  ];

  blankInputMessage: any = [
    'Indian Stocks', 'Indian Commodity', 'Hybrid Fund', 'Corporate Bond', 'PSU Bond', 'US Stocks', 'Cash Equivalents',
    'Indian Stocks', 'Indian Commodity', 'Hybrid Fund', 'Corporate Bond', 'PSU Bond', 'US Stocks', 'Cash Equivalents',
    'Indian Stocks', 'Indian Commodity', 'Hybrid Fund', 'Corporate Bond', 'PSU Bond', 'US Stocks', 'Cash Equivalents',
  ];

  databasecellnamearray: any = [
    'am8', 'am9', 'am10', 'am11', 'am12', 'am13', 'am14',
    'am17', 'am18', 'am19', 'am20', 'am21', 'am22', 'am23',
    'am26', 'am27', 'am28', 'am29', 'am30', 'am31', 'am32'
  ];

  kpivaluearray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
      this.useranalysisinput = '';
    }
    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1))
    }else{
      this.getFetchData(this.noofattempt);
    }
    
  }



  getPreviousData(attempt: string) {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = (Number(data.resultList[0][this.databasecellnamearray[i]])*100).toFixed(0);
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
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.promotionsigmentfetchdata(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].ap16;
              this.submitprove = data.resultList[0].ap15;
              this.phase1submitprove = data.resultList[0].ap18;
              this.phase2submitprove = data.resultList[0].ap19;
              if ((this.submitprove == 'yes') || (this.submitprove == 'Yes') || (this.timefinished)) {
                this.disabled = true;
              }else{
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].portfolioManagementCM;
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
                this.result[i] = (Number(data.resultList[0][this.databasecellnamearray[i]])*100).toFixed(0);
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

              this.foodforthoughtQNo = data.resultList[0].ap16;
              this._global.casemanagementid.next(data.resultList[0].portfoliomanagementcmid);


              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              this.kpivaluearray = [Number((data.resultList[0].i834) * 100).toFixed(0),
              Number((data.resultList[0].i835) * 100).toFixed(0),
              (Number(data.resultList[0].h580) / 1000).toFixed(0)]
              
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
      "\n\nMarket Outlook" +
      "\n" + this.responseresultcm.b5 +
      "\n\n" + this.responseresultcm.b7 + " " + this.responseresultcm.c7 +
      "\n" + this.responseresultcm.b8 + " " + this.responseresultcm.c8 +
      "\n" + this.responseresultcm.b9 + " " + this.responseresultcm.c9 +
      "\n" + this.responseresultcm.b10 + " " + this.responseresultcm.c10 +
      "\n" + this.responseresultcm.b11 + " " + this.responseresultcm.c11 +
      "\n" + this.responseresultcm.b12 + " " + this.responseresultcm.c12 +
      "\n" + this.responseresultcm.b13 + " " + this.responseresultcm.c13 +
      "\n" + this.responseresultcm.b14 + " " + this.responseresultcm.c14 +
      "\n" + this.responseresultcm.b15 + " " + this.responseresultcm.c15 +
      "\n" + this.responseresultcm.b16 + " " + this.responseresultcm.c16 +
      "\n\n" + "The historical trend data indicates the securities return over past 9 years." +
      "The player is taking decisions of Phase 1 (P1), Phase 2 (P2) and Phase 3 (P3) one by one." +
      "Once a player makes decision of one phase they can't go back and edit decisions" +
      "\n\n" + this.responseresultcm.e12 + " " + this.responseresultcm.f12 + " " + this.responseresultcm.g12 + " " + this.responseresultcm.h12 + " " + this.responseresultcm.i12 + " " + this.responseresultcm.j12 + " " + this.responseresultcm.k12 + " " + this.responseresultcm.l12 + " " + this.responseresultcm.m12 + " " + this.responseresultcm.n12 +
      "\n" + this.responseresultcm.e13 + " " + this.responseresultcm.f13 + " " + this.responseresultcm.g13 + " " + this.responseresultcm.h13 + " " + this.responseresultcm.i13 + " " + this.responseresultcm.j13 + " " + this.responseresultcm.k13 + " " + this.responseresultcm.l13 + " " + this.responseresultcm.m13 + " " + this.responseresultcm.n13 +
      "\n" + this.responseresultcm.e14 + " " + this.responseresultcm.f14 + " " + this.responseresultcm.g14 + " " + this.responseresultcm.h14 + " " + this.responseresultcm.i14 + " " + this.responseresultcm.j14 + " " + this.responseresultcm.k14 + " " + this.responseresultcm.l14 + " " + this.responseresultcm.m14 + " " + this.responseresultcm.n14 +
      "\n" + this.responseresultcm.e15 + " " + this.responseresultcm.f15 + " " + this.responseresultcm.g15 + " " + this.responseresultcm.h15 + " " + this.responseresultcm.i15 + " " + this.responseresultcm.j15 + " " + this.responseresultcm.k15 + " " + this.responseresultcm.l15 + " " + this.responseresultcm.m15 + " " + this.responseresultcm.n15 +
      "\n" + this.responseresultcm.e16 + " " + this.responseresultcm.f16 + " " + this.responseresultcm.g16 + " " + this.responseresultcm.h16 + " " + this.responseresultcm.i16 + " " + this.responseresultcm.j16 + " " + this.responseresultcm.k16 + " " + this.responseresultcm.l16 + " " + this.responseresultcm.m16 + " " + this.responseresultcm.n16 +
      "\n" + this.responseresultcm.e17 + " " + this.responseresultcm.f17 + " " + this.responseresultcm.g17 + " " + this.responseresultcm.h17 + " " + this.responseresultcm.i17 + " " + this.responseresultcm.j17 + " " + this.responseresultcm.k17 + " " + this.responseresultcm.l17 + " " + this.responseresultcm.m17 + " " + this.responseresultcm.n17 +
      "\n" + this.responseresultcm.e18 + " " + this.responseresultcm.f18 + " " + this.responseresultcm.g18 + " " + this.responseresultcm.h18 + " " + this.responseresultcm.i18 + " " + this.responseresultcm.j18 + " " + this.responseresultcm.k18 + " " + this.responseresultcm.l18 + " " + this.responseresultcm.m18 + " " + this.responseresultcm.n18 +
      "\n" + this.responseresultcm.e19 + " " + this.responseresultcm.f19 + " " + this.responseresultcm.g19 + " " + this.responseresultcm.h19 + " " + this.responseresultcm.i19 + " " + this.responseresultcm.j19 + " " + this.responseresultcm.k19 + " " + this.responseresultcm.l19 + " " + this.responseresultcm.m19 + " " + this.responseresultcm.n19 +
      "\n\n" + this.responseresultcm.e6 +
      "\n" + "India's GDP stands at USD 394bn with a growth rate of 13.5%, post-pandemic growth is forecasted" +
      "in agriculture (3.9%), industry (11.8%), and IT services (8.2%). Domestic and foreign investments are expected" +
      "to surge by 15%, accompanied by an increase in IPOs. While the capital market is anticipated to hit an all-time high," +
      "concerns over inflation exceeding 5.6% persist. Supply shortages pose risks to energy and coal prices, while crude oil prices" +
      "remain high and agricultural and metal prices are projected to decline. The government's infrastructure push aims to spur growth," +
      "supported by innovative financing methods. In the US, double-digit growth is expected in energy, finance, real estate," +
      "and technology sectors, with technological advancements driving FAANGM stocks to record highs." +
      "\n\n" + this.responseresultcm.e9 + " " + this.responseresultcm.f9 +
      "\n" + this.responseresultcm.e10 + " " + this.responseresultcm.f10 +
      "\n\n" + this.responseresultcm.p5 +
      "\n" + "This year, Indian capital markets are expected to witness volatility, driven by both bullish" +
      "and bearish trends. Supported by robust domestic consumption and a youthful workforce, key sectors" +
      "like banking and automobiles are poised for strong performance. However, caution remains regarding" +
      "potential debt defaults in the fixed-income market. In the US, inflationary pressures may prompt" +
      "rate hikes, impacting tech companies' profitability, while geopolitical tensions contribute to" +
      "heightened energy prices." +
      "\n\n" + this.responseresultcm.p8 + " " + this.responseresultcm.q8 +
      "\n" + this.responseresultcm.p9 + " " + this.responseresultcm.q9 +
      "\n\n" + this.responseresultcm.t5 +
      "\n" + "The upcoming year brings challenges for Dalal Street amid uncertainty and high market valuations." +
      "Investor reactions may fluctuate due to fears of Fed rate hikes, war, inflation, and recession projections," +
      "leading to bouts of FOMO among new investors. While IT and pharma sectors contract, traditional sectors like" +
      "power and utilities are expected to perform well. Rising interest rates may negatively impact debt funds, with" +
      "corporate and PSU funds considered safer investments. In the US, economic resilience suggests a strong year ahead," +
      "with sectors like financials, industrials, and materials showing outperformance despite inflationary pressures." +
      "\n\n" + this.responseresultcm.t8 + " " + this.responseresultcm.u8 +
      "\n" + this.responseresultcm.t9 + " " + this.responseresultcm.u9 +

      "\n\nActual Return" + " " + "Phase 1" + " " + "Phase 2"+ " " + "Phase 3" +
      "\n" + "Nifty 50" + " " + this.responseresultdatabase.x560 + " " + this.responseresultdatabase.y560 + " " + this.responseresultdatabase.z560 +
      "\n" + "Sensex" + " " + this.responseresultdatabase.x561 + " " + this.responseresultdatabase.y561 + " " + this.responseresultdatabase.z561 +
      "\n" + "US Stocks" + " " + this.responseresultdatabase.x562 + " " + this.responseresultdatabase.y562 + " " + this.responseresultdatabase.z562 +
      "\n" + "Commodity" + " " + this.responseresultdatabase.x563 + " " + this.responseresultdatabase.y563 + " " + this.responseresultdatabase.z563 +
      "\n" + "Hybrid Fund" + " " + this.responseresultdatabase.x564 + " " + this.responseresultdatabase.y564 + " " + this.responseresultdatabase.z564 +
      "\n" + "Corporate Bond" + " " + this.responseresultdatabase.x565 + " " + this.responseresultdatabase.y565 + " " + this.responseresultdatabase.z565 +
      "\n" + "PSU Bond" + " " + this.responseresultdatabase.x566 + " " + this.responseresultdatabase.y566 + " " + this.responseresultdatabase.z566 +
      "\n\nCorrelation between securities" +
      "\n\nPhase 1" +
      "\n" + " " + "Indian Stocks" + " " + "Indian Commodity" + " " + "Hybrid Fund" + " " + "Corporate Bond" + " " + "PSU Bond" + " " + "US Stocks" + " " + "Cash & Cash Equivalent" +
      "\n" + "Indian Stocks" + " " + "1" +
      "\n" + "Indian Commodity" + " " + "0.397124927" + " " + "1" +
      "\n" + "Hybrid Fund" + " " + "0.425275935" + " " + "0.32714355" + " " + "1" +
      "\n" + "Corporate Bond" + " " + "0.425275935" + " " + "0.32714355" + " " + "1" + " " + "1" +
      "\n" + "PSU Bond" + " " + "0.425275935" + " " + "0.32714355" + " " + "1" + " " + "1" + " " + "1" +
      "\n" + "US Stocks" + " " + "0.013470356" + " " + "-0.041651059" + " " + "0.020664277" + " " + "0.02066428" + " " + "0.02066428" + " " + "1" +
      "\n" + "Cash & Cash Equivalent" + " " + "0.425275935" + " " + "0.32714355" + " " + "1" + " " + "1" + " " + "1" + " " + "0.020664277" + " " + "1" +
      "\n\nPhase 2" +
      "\n" + " " + "Indian Stocks" + " " + "Indian Commodity" + " " + "Hybrid Fund" + " " + "Corporate Bond" + " " + "PSU Bond" + " " + "US Stocks" + " " + "Cash & Cash Equivalent" +
      "\n" + "Indian Stocks"  + " " + "1" +
      "\n" + "Indian Commodity" + " " + "0.46844617" + " " + "1" +
      "\n" + "Hybrid Fund" + " " + "0.55679982"+ " " + "0.2594443" + " " + "1" +
      "\n" + "Corporate Bond" + " " + "0.665" + " " + "0.3594443" + " " + "0.99654" + " " + "1" +
      "\n" + "PSU Bond" + " " + "0.7758" + " " + "0.215443" + " " + "0.97653" + " " + "0.98734" + " " + "1" +
      "\n" + "US Stocks" + " " + "0.19625456" + " " + "0.16383703" + " " + "0.20557645" + " " + "0.15455764" + " " + "0.10457645" + " " + "1" +
      "\n" + "Cash & Cash Equivalent" + " " + "0.534" + " " + "0.1984443" + " " + "0.99865" + " " + "0.95467" + " " + "0.98612" + " " + "0.20557645" + " " + "1" +
      "\n\nPhase 3" +
      "\n" + " " + "Indian Stocks" + " " + "Indian Commodity" + " " + "Hybrid Fund" + " " + "Corporate Bond" + " " + "PSU Bond" + " " + "US Stocks" + " " + "Cash & Cash Equivalent" +
      "\n" + "Indian Stocks"  + " " + "1" +
      "\n" + "Indian Commodity" + " " + "0.49739506" + " " + "1" +
      "\n" + "Hybrid Fund" + " " + "0.5022776" + " " + "0.20523513" + " " + "1" +
      "\n" + "Corporate Bond" + " " + "0.481000555" + " " + "1.19397039" + " " + "0.98666865" + " " + "1" +
      "\n" + "PSU Bond" + " " + "0.501000555" + " " + "0.24397039" + " " + "98666865" + " " + "1" + " " + "1" +
      "\n" + "US Stocks" + " " + "-0.1628331" + " " + "-0.1102674" + " " + "-0.0148794" + " " + "-0.0429285" + " " + "-0.0329285" + " " + "1" +
      "\n" + "Cash & Cash Equivalent" + " " + "0.6022776" + " " + "0.20523513" + " " + "1" + " " + "0.90666865" + " " + "0.95666865" + " " + "-0.0158794" + " " + "1" +


      "\n\nInput - Players response" + "/n" +
      "\n" + "Phase 1 Allocation" +
      "\n" + "Indian Stocks" + " " + this.result[0] +
      "\n" + "Indian Commodity" + " " + this.result[1] +
      "\n" + "Hybrid Fund" + " " + this.result[2] +
      "\n" + "Corporate Bond" + " " + this.result[3] +
      "\n" + "PSU Bond" + " " + this.result[4] +
      "\n" + "US Stocks" + " " + this.result[5] +
      "\n" + "Cash Equivalents" + " " + this.result[6] +
      "\n" + "Phase 2 Allocation" +
      "\n" + "Indian Stocks" + " " + this.result[7] +
      "\n" + "Indian Commodity" + " " + this.result[8] +
      "\n" + "Hybrid Fund" + " " + this.result[9] +
      "\n" + "Corporate Bond" + " " + this.result[10] +
      "\n" + "PSU Bond" + " " + this.result[11] +
      "\n" + "US Stocks" + " " + this.result[12] +
      "\n" + "Cash Equivalents" + " " + this.result[13] +
      "\n" + "Phase 3 Allocation" +
      "\n" + "Indian Stocks" + " " + this.result[14] +
      "\n" + "Indian Commodity" + " " + this.result[15] +
      "\n" + "Hybrid Fund" + " " + this.result[16] +
      "\n" + "Corporate Bond" + " " + this.result[17] +
      "\n" + "PSU Bond" + " " + this.result[18] +
      "\n" + "US Stocks" + " " + this.result[19] +
      "\n" + "Cash Equivalents" + " " + this.result[20] +


      "\n\nOutput - System Generated based on player's response" + "\n" +
      "\n" + "Phase Measures" +
      "\n" + "Parameter" + " " + "Phase 1" + " " + "Phase 2" + " " + "Phase 3" +
      "\nPortfolio Return " + " " + this.responseresultdatabase.c25 + " " + this.responseresultdatabase.c301 + " " + this.responseresultdatabase.c578 +
      "\nPortfolio Risk " + " " + this.responseresultdatabase.c27 + " " + this.responseresultdatabase.c303 + " " + this.responseresultdatabase.c580 +
      "\nPortfolio Beta " + " " + this.responseresultdatabase.c28 + " " + this.responseresultdatabase.c304 + " " + this.responseresultdatabase.c581 +
      "\nTreynor Measure " + " " + this.responseresultdatabase.f25 + " " + this.responseresultdatabase.f301 + " " + this.responseresultdatabase.f578 +
      "\nSharpe Ratio " + " " + this.responseresultdatabase.f26 + " " + this.responseresultdatabase.f302 + " " + this.responseresultdatabase.f579 +
      "\nJenson's Alpha " + " " + this.responseresultdatabase.h25 + " " + this.responseresultdatabase.h301 + " " + this.responseresultdatabase.h578 +
      "\nCAPM" + " " + this.responseresultdatabase.f27 + " " + this.responseresultdatabase.f303 + " " + this.responseresultdatabase.f580 +
      "\nFama Measure" + " " + this.responseresultdatabase.h26 + " " + this.responseresultdatabase.h302 + " " + this.responseresultdatabase.h579 +
      "\n\n" + "Capital, k INR" +
      "\n" + "Parameter" + " " + "Phase 1" + " " + "Phase 2" + " " + "Phase 3" +
      "\nStart " + " " + this.responseresultdatabase.c9 + " " + this.responseresultdatabase.h27 + " " + this.responseresultdatabase.h303 +
      "\nEnd " + " " + this.responseresultdatabase.h27 + " " + this.responseresultdatabase.h303 + " " + this.responseresultdatabase.h580 +
      "\n\n" + "Capital Invested in Securities, k INR" +
      "\n" + "Parameter" + " " + "Phase 1" + " " + "Phase 2" + " " + "Phase 3" +
      "\nSecurity 1 - Indian Stocks " + " " + this.responseresultdatabase.g12 + " " + this.responseresultdatabase.g288 + " " + this.responseresultdatabase.g565 +
      "\nSecurity 2 - Commodities " + " " + this.responseresultdatabase.g13 + " " + this.responseresultdatabase.g289 + " " + this.responseresultdatabase.g566 +
      "\nSecurity 3 - Hybrid Fund " + " " + this.responseresultdatabase.g14 + " " + this.responseresultdatabase.g290 + " " + this.responseresultdatabase.g567 +
      "\nSecurity 4 - Corporate Bond " + " " + this.responseresultdatabase.g15 + " " + this.responseresultdatabase.g291 + " " + this.responseresultdatabase.g568 +
      "\nSecurity 5 - PSU Bond " + " " + this.responseresultdatabase.g16 + " " + this.responseresultdatabase.g292 + " " + this.responseresultdatabase.g569 +
      "\nSecurity 6 - US Stocks " + " " + this.responseresultdatabase.g17 + " " + this.responseresultdatabase.g293 + " " + this.responseresultdatabase.g570 +
      "\nSecurity 7 - Cash Equivalents " + " " + this.responseresultdatabase.g18 + " " + this.responseresultdatabase.g294 + " " + this.responseresultdatabase.g571 +
      "\n\n" + "Combined Measures" +
      "\n" + "Parameter" + " " + "Output" +
      "\nPortfolio Return " + " " + this.responseresultdatabase.c834 +
      "\nPortfolio Risk " + " " + this.responseresultdatabase.c835 +
      "\nPortfolio Beta " + " " + this.responseresultdatabase.c833 +
      "\nMarket Return " + " " + this.responseresultdatabase.f834 +
      "\nMarket Risk " + " " + this.responseresultdatabase.f835 +
      "\n\n" + "KPI" +
      "\n" + "Parameter" + " " + "Output" +
      "\nReturn over (+)/below (-) market  " + " " + this.responseresultdatabase.i834 +
      "\nRisk over (+)/below (-) market " + " " + this.responseresultdatabase.i835;
// console.log("prompt",this.assesment);
    this.feedback = this.assesment;
   if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }
  }

  getuseranalysisValue() {

    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt),"coursecode").subscribe(
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



  portfoliomanagementnewdecisionchecklistpopup() {
    if(this.studentelementdetailsvalue.numberofattemptsleft == 0){
      this.newItemEvent.emit('report');
    }else{
      this.inputDataCheck();
    }
    

  }

  inputDataCheck() {
    this.errorlist = [];
    if(((this.phase1submitprove)=='yes')&&((this.phase1submitprove)=='yes')){
      this.inputdatacheckvalue = true;
    }
    
    if (this.inputdatacheckvalue == true) {
      this.saveDecisionChecklist();
    } else {
      this._alert.error("To move ahead, kindly Write your analysis");
    }
  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(Portfolionewdecisionchecklistpopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray

        },
        panelClass: 'custom-dialog-container',
        position: { top: '20px' },
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
  //         const dialogRef = this.dialog.open(Portfolionewdecisionchecklistpopup, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
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
  //       const dialogRef = this.dialog.open(Portfolionewdecisionchecklistpopup, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
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




//.............pop-up....................          

@Component({
  selector: 'app-portfolionewdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolionewdecisionchecklistpopup.html',
  styleUrls: ['./portfolionewdecisionchecklist.component.scss']
})

export class Portfolionewdecisionchecklistpopup extends AbstractComponent {
  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<Portfolionewdecisionchecklistpopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }


  save() {
    this.checkloading = true;
    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';
    let decisionsubmitData = {
      "ap15": "yes"
    }
    this._api.promotionsdatawrite("portfoliomanagement", 1,
      decisionsubmitData, apiname, 'portfoliomanagementcmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Portfolio Management").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Portfolio Management").subscribe((data: any) => {

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


