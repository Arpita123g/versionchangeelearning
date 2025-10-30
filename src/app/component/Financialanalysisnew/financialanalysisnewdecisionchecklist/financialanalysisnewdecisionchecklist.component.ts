import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-financialanalysisnewdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './financialanalysisnewdecisionchecklist.component.html',
  styleUrls: ['./financialanalysisnewdecisionchecklist.component.scss']
})
export class FinancialanalysisnewdecisionchecklistComponent extends AbstractComponent {
  roundname: string = "";
  result: any = [];
  analysisshow: boolean = true;
  foodforthoughtQNo: number = 0;
  useranalysisinput: string = "";
  dropdownvalue: any = [];
  playername: string = '';
  disabled: boolean = false;
  assesmentbody: string = "";
  isClass: boolean[] = [];
  feedback: string = "";
  useranalysisvalue: any = {};
  optional: any[] = [];
  @Output() newItemEvent = new EventEmitter<any>();
  optionalcase = ["foodforthoughtstatus"]
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  submitprove: string = "";

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }



  databasecellnamearray: any = [

    'ak5', 'al5', 'am5',
    'ak6', 'al6', 'am6',
    'ak7', 'al7', 'am7',
    'ak10', 'al10', 'am10',
    'ak11', 'al11', 'am11',
    'ak12', 'al12', 'am12',
    'ak15', 'al15', 'am15',
    'ak16', 'al16', 'am16',
    'ak17', 'al17', 'am17',
    'ak20', 'al20', 'am20',
    'ak21', 'al21', 'am21',
    'ak22', 'al22', 'am22',
    'ak23', 'al23', 'am23',
    'ak26', 'al26', 'am26',
    'ak27', 'al27', 'am27',
    'ak28', 'al28', 'am28',//48
    "ak31", 'ak32', 'ak33', 'ak34', 'ak35',//53
    'ak36', 'ak37', 'ak38', 'ak39', 'ak40',//58
    's32', 't23',//60
  ]

  defaultvalue: any = []

  blankInputMessage = ["Current Ratio, Electra Motors", "Current Ratio, Titan Motors",
    "Current Ratio, GreenSpeed Technologies", "Acid-test Ratio, Electra Motors", "Acid-test Ratio, Titan Motors",
    "Acid-test Ratio, GreenSpeed Technologies", "Cash Ratio, Electra Motors", "Cash Ratio, Titan Motors",
    "Cash Ratio, GreenSpeed Technologies", "Debt-to-Equity Ratio, Electra Motors", "Debt-to-Equity Ratio, Titan Motors",
    "Debt-to-Equity Ratio, GreenSpeed Technologies", "Debt Ratio, Electra Motors",
    "Debt Ratio, Titan Motors", "Debt Ratio, GreenSpeed Technologies", "Interest Coverage Ratio, Electra Motors",
    "Interest Coverage Ratio, Titan Motors", "Interest Coverage Ratio, GreenSpeed Technologies",
    "Asset Turnover Ratio, Electra Motors", "Asset Turnover Ratio, Titan Motors", "Asset Turnover Ratio, GreenSpeed Technologies",
    "Inventory Turnover Ratio, Electra Motors",
    "Inventory Turnover Ratio, Titan Motors", "Inventory Turnover Ratio, GreenSpeed Technologies",
    "Days Sales in Inventory Ratio, Electra Motors", "Days Sales in Inventory Ratio, Titan Motors", "Days Sales in Inventory Ratio, GreenSpeed Technologies",
    "Gross Margin, Electra Motors", "Gross Margin, Titan Motors", "Gross Margin, GreenSpeed Technologies",
    "Operating Margin, Electra Motors", "Operating Margin, Titan Motors",
    "Operating Margin, GreenSpeed Technologies", "Return on Asset, Electra Motors",
    "Return on Asset, Titan Motors", "Return on Asset, GreenSpeed Technologies",
    "Return on Equity, Electra Motors", "Return on Equity, Titan Motors",
    "Return on Equity, GreenSpeed Technologies", "Book value per share, Electra Motors",
    "Book value per share, Titan Motors", "Book value per share, GreenSpeed Technologies",
    "Earnings per share, Electra Motors", "Earnings per share, Titan Motors",
    "Earnings per share, GreenSpeed Technologies", "Price-earning Ratio, Electra Motors",
    "Price-earning Ratio, Titan Motors", "Price-earning Ratio, GreenSpeed Technologies"
    , "Portfolio 1", "Portfolio 2", "Portfolio 3", "Portfolio 4", "Portfolio 5", "Portfolio 6",
    "Portfolio 7", "Portfolio 8", "Portfolio 9", "Portfolio 10",
  ]

  errorlist: any = []
  inputdatacheckvalue: boolean = false;

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
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.responseresultcm = data.resultList[0].financialAnalysisCM;
            this.responseresultdatabase = data.resultList[0]
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
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].am32;
              this.submitprove = data.resultList[0].am31;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }else{
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].financialAnalysisCM;
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
                if (i < 48) {
                  if((i>8)&&(i<18)){
                    if (this.result[i] == "0") {
                      this.result[i] = "0";
                    }
                  }else{
                    if (this.result[i] == "") {
                      this.result[i] = "-";
                    }
                  }
                 
                }

              }
              if ((this.result[48] == 0) && (this.result[49] == 0) && (this.result[50] == 0) && (this.result[51] == 0)
                && (this.result[52] == 0) && (this.result[53] == 0) && (this.result[54] == 0) && (this.result[55] == 0)
                && (this.result[56] == 0) && (this.result[57] == 0)) {
                for (let i = 48; i < 58; i++) {
                  this.result[i] = "-";
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
              for (let i = 9; i < 15; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (this.result[i] * 100).toFixed(0) + "%";
                }

              } for (let i = 27; i < 39; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (this.result[i] * 100).toFixed(0) + "%"
                }
              }
              this.foodforthoughtQNo = data.resultList[0].am32;
              this._global.casemanagementid.next(data.resultList[0].financialanalysiscmid);


              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              this.useranalysisSubmit();
              
            }
            this.checkloading = false;
          } else {
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
    this.assesment = "\n\nStatic Information" +
      "\n\nMemo" +
      "\n" + this.responseresultcm.b5 +
      "\n\nIndustry Analysis" +
      "\n\nGlobal Market" +
      "\nThe global automotive industry is experiencing a transformative phase, characterized by a surge in demand for sustainable and technologically advanced passenger vehicles. The market is projected to witness substantial growth, with an anticipated market size of $2675 billion by the next 10 years, reflecting a CAGR of 5.32%. Key drivers include a growing environmental consciousness, technological advancements in autonomous driving, and the increasing need for efficient urban transportation. However, challenges such as high initial costs for electric vehicles and a global semiconductor shortage pose significant restraints. Opportunities arise from emerging markets in Asia-Pacific and the integration of automotive and tech sectors for innovative solutions." +
      "\n\nMarket Size Graph" +
      "\n " + " " + this.responseresultcm.e10 +
      "\n" + this.responseresultcm.d11 + " " + this.responseresultcm.e11 +
      "\n" + this.responseresultcm.d12 + " " + this.responseresultcm.e12 +
      "\n" + this.responseresultcm.d13 + " " + this.responseresultcm.e13 +
      "\n" + this.responseresultcm.d14 + " " + this.responseresultcm.e14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n" + this.responseresultcm.d16 + " " + this.responseresultcm.e16 +
      "\n" + this.responseresultcm.d17 + " " + this.responseresultcm.e17 +
      "\n" + this.responseresultcm.d18 + " " + this.responseresultcm.e18 +
      "\n" + this.responseresultcm.d19 + " " + this.responseresultcm.e19 +
      "\n" + this.responseresultcm.d20 + " " + this.responseresultcm.e20 +
      "\n" + this.responseresultcm.d21 + " " + this.responseresultcm.e21 +
      "\n\nMarket Dynamics" +
      "\nDrivers: " +
      "\n•	Increasing environmental consciousness and government incentives for electric vehicles." +
      "\n•	Technological advancements in autonomous driving and connectivity features." +
      "\n•	Growing urbanization and the need for efficient and compact transportation." +
      "\n\nRestraints:" +
      "\n•	High initial costs of electric vehicles." +
      "\n•	Limited charging infrastructure." +
      "\n•	Global semiconductor shortage affecting vehicle production." +
      "\n\nOpportunities:" +
      "\n•	Emerging markets in Asia-Pacific." +
      "\n•	Collaborations between automotive and tech companies for innovation." +
      "\n•	Shifting consumer preferences towards shared mobility services." +
      "\n\nChallenges:" +
      "\n•	Regulatory uncertainties in emission standards." +
      "\n•	Supply chain disruptions impacting production." +
      "\n•	Resistance to adoption of new technologies in traditional markets." +
      "\n\nRegional Markets" +
      "\nThe passenger vehicle segment, encompassing sedans, SUVs, hatchbacks, electric vehicles (EVs), and hybrids, is experiencing notable trends in different regions. In India, there is a dominance of compact and fuel-efficient vehicles, with a growing interest in electric two & four-wheelers. Europe sees a surge in electric vehicle adoption, especially in Nordic countries, and a rising preference for electric SUVs. In South Korea, technologically advanced vehicles with a focus on connectivity, government support for hydrogen fuel cell technology, and growth in the electric and hybrid segment are observed." +
      "\n\n" + this.responseresultcm.d29 +
      "\n" + this.responseresultcm.d30 + " " + this.responseresultcm.e30 +
      "\n\nGraph of Share" +
      "\n" + " " + this.responseresultcm.e33 +
      "\n" + this.responseresultcm.d34 + " " + this.responseresultcm.e34 +
      "\n" + this.responseresultcm.d35 + " " + this.responseresultcm.e35 +
      "\n" + this.responseresultcm.d36 + " " + this.responseresultcm.e36 +
      "\n" + this.responseresultcm.d37 + " " + this.responseresultcm.e37 +
      "\n\n" + this.responseresultcm.d39 +
      "\n" + this.responseresultcm.d40 + " " + this.responseresultcm.e40 +
      "\n\nGraph of Share" +
      "\n" + " " + this.responseresultcm.e43 +
      "\n" + this.responseresultcm.d44 + " " + this.responseresultcm.e44 +
      "\n" + this.responseresultcm.d45 + " " + this.responseresultcm.e45 +
      "\n" + this.responseresultcm.d46 + " " + this.responseresultcm.e46 +
      "\n" + this.responseresultcm.d47 + " " + this.responseresultcm.e47 +
      "\n\n" + this.responseresultcm.d49 +
      "\n" + this.responseresultcm.d50 + " " + this.responseresultcm.e50 +
      "\n\nGraph of Share" +
      "\n" + " " + this.responseresultcm.e53 +
      "\n" + this.responseresultcm.d54 + " " + this.responseresultcm.e54 +
      "\n" + this.responseresultcm.d55 + " " + this.responseresultcm.e55 +
      "\n" + this.responseresultcm.d56 + " " + this.responseresultcm.e56 +
      "\n" + this.responseresultcm.d57 + " " + this.responseresultcm.e57 +
      "\n\n" + this.responseresultcm.d59 +
      "\nBattery Technology Advancements:" +
      "\n	• Longer battery life and faster charging times." +
      "\n •	Solid-state battery research for enhanced safety and efficiency." +
      "\n\n Autonomous Driving:" +
      "\n •	Advancements in AI and sensor technologies." +
      "\n •	Increased testing and deployment of autonomous vehicles." +
      "\n\nConnected Vehicles:" +
      "\n •	Integration of IoT for enhanced connectivity." +
      "\n •	Vehicle-to-Everything (V2X) communication for improved safety." +
      "\n\n" + this.responseresultcm.d62 +
      "\n\n" + this.responseresultcm.d64 + "Current: A global leader in electric and hydrogen vehicles, currently holds a dominant position in the market with a significant market share of 15%. The company operates across India, Europe, and South Korea, offering a diverse range of sustainable transportation solutions. Electra Motors' current success is attributed to its cutting-edge technology, efficient manufacturing processes, and a well-established network of charging infrastructure." +
      "\nFuture: Looking ahead, Electra Motors envisions expanding its market share to 20% by 2025 through strategic initiatives. The company plans to leverage its current strengths in electric and hydrogen vehicle technologies to capture emerging markets in Asia-Pacific. Electra Motors aims to enhance its production capacity, by introducing new models with improved range and performance. The company is committed to investing in R&D to stay ahead of technological advancements and maintain its leadership in the sustainable automotive sector." +
      "\n" + this.responseresultcm.d65 + "Current: A key player in the hybrid, electric, and hydrogen vehicle segment, currently commands a respectable market share of 10%. The company's market presence spans India, Europe, and South Korea, catering to diverse consumer preferences. Titan Motors has established itself as a technological innovator, integrating smart features and connectivity solutions into its vehicles, contributing to its current market standing." +
      "\nFuture: In the coming years, Titan Motors aims to solidify its market position by increasing its market share to 14%. The company plans to expand manufacturing capacities to meet the growing demand for electric and hybrid vehicles. Titan Motors envisions a comprehensive product lineup, including more electric SUVs and technologically advanced features. Collaborations with tech companies are on the horizon to enhance connectivity and autonomous driving capabilities, ensuring Titan Motors remains at the forefront of innovation." +
      "\n" + this.responseresultcm.d66 + "Current: GreenSpeed Technologies, known for its diverse portfolio encompassing combustion, hybrid, and advanced electric and hydrogen vehicles, currently maintains a market share of 8%. The company has a strong presence in India and Europe, offering solutions tailored to local market demands. GreenSpeed Technologies is recognized for its commitment to sustainability, with eco-friendly manufacturing processes contributing to its current market standing." +
      "\nFuture: GreenSpeed Technologies aims to increase its market share to 12% in the next 2 years through a two-pronged strategy. The company plans to enhance its combustion and hybrid offerings while intensifying efforts in the electric and hydrogen vehicle segments. GreenSpeed Technologies is focused on improving manufacturing efficiency and reducing environmental impact further. The company sees potential in expanding its market presence in South Korea and anticipates increased demand for its advanced propulsion technologies." +
      "\n\nStatements" +
      "\n\nElectra Motors" +
      "\n\n" + this.responseresultcm.h8 + " " + this.responseresultcm.i8 + " " + this.responseresultcm.j8 +
      "\n" + this.responseresultcm.h9 + " " + this.responseresultcm.i9 + " " + this.responseresultcm.j9 +
      "\n\n" + this.responseresultcm.h11 +
      "\n" + this.responseresultcm.h12 + " " + this.responseresultcm.i12 + " " + this.responseresultcm.j12 +
      "\n" + this.responseresultcm.h13 + " " + this.responseresultcm.i13 + " " + this.responseresultcm.j13 +
      "\n" + this.responseresultcm.h14 + " " + this.responseresultcm.i14 + " " + this.responseresultcm.j14 +
      "\n" + this.responseresultcm.h15 + " " + this.responseresultcm.i15 + " " + this.responseresultcm.j15 +
      "\n" + this.responseresultcm.h16 + " " + this.responseresultcm.i16 + " " + this.responseresultcm.j16 +
      "\n" + this.responseresultcm.h17 + " " + this.responseresultcm.i17 + " " + this.responseresultcm.j17 +
      "\n" + this.responseresultcm.h18 + " " + this.responseresultcm.i18 + " " + this.responseresultcm.j18 +
      "\n" + this.responseresultcm.h19 + " " + this.responseresultcm.i19 + " " + this.responseresultcm.j19 +
      "\n\n" + this.responseresultcm.h21 + " " + this.responseresultcm.i21 + " " + this.responseresultcm.j21 +
      "\n" + this.responseresultcm.h22 + " " + this.responseresultcm.i22 + " " + this.responseresultcm.j22 +
      "\n\n" + this.responseresultcm.h24 + " " + this.responseresultcm.i24 + " " + this.responseresultcm.j24 +
      "\n" + this.responseresultcm.h25 + " " + this.responseresultcm.i25 + " " + this.responseresultcm.j25 +
      "\n\n" + this.responseresultcm.h27 + " " + this.responseresultcm.i27 + " " + this.responseresultcm.j27 +
      "\n" + this.responseresultcm.h28 + " " + this.responseresultcm.i28 + " " + this.responseresultcm.j28 +
      "\n\n" + this.responseresultcm.h30 + " " + this.responseresultcm.i30 + " " + this.responseresultcm.j30 +
      "\n\n" + this.responseresultcm.h32 + " " + this.responseresultcm.i32 + " " + this.responseresultcm.j32 +
      "\n" + this.responseresultcm.h33 +
      "\n\n" + this.responseresultcm.h34 + " " + this.responseresultcm.i34 + " " + this.responseresultcm.j34 +
      "\n" + this.responseresultcm.h35 + " " + this.responseresultcm.i35 + " " + this.responseresultcm.j35 +
      "\n" + this.responseresultcm.h36 + " " + this.responseresultcm.i36 + " " + this.responseresultcm.j36 +
      "\n" + this.responseresultcm.h37 + " " + this.responseresultcm.i37 + " " + this.responseresultcm.j37 +
      "\n" + this.responseresultcm.h38 + " " + this.responseresultcm.i38 + " " + this.responseresultcm.j38 +
      "\n\n" + this.responseresultcm.h40 +
      "\n" + this.responseresultcm.h41 +
      "\n" + this.responseresultcm.h42 + " " + this.responseresultcm.i42 + " " + this.responseresultcm.j42 +
      "\n" + this.responseresultcm.h43 + " " + this.responseresultcm.i43 + " " + this.responseresultcm.j43 +
      "\n" + this.responseresultcm.h44 + " " + this.responseresultcm.i44 + " " + this.responseresultcm.j44 +
      "\n" + this.responseresultcm.h45 + " " + this.responseresultcm.i45 + " " + this.responseresultcm.j45 +
      "\n" + this.responseresultcm.h46 + " " + this.responseresultcm.i46 + " " + this.responseresultcm.j46 +
      "\n/n" + this.responseresultcm.h48 +
      "\n" + this.responseresultcm.h49 + " " + this.responseresultcm.i49 + " " + this.responseresultcm.j49 +
      "\n" + this.responseresultcm.h50 + " " + this.responseresultcm.i50 + " " + this.responseresultcm.j50 +
      "\n" + this.responseresultcm.h51 + " " + this.responseresultcm.i51 + " " + this.responseresultcm.j51 +
      "\n" + this.responseresultcm.h52 + " " + this.responseresultcm.i52 + " " + this.responseresultcm.j52 +
      "\n\n" + this.responseresultcm.h54 + " " + this.responseresultcm.i54 + " " + this.responseresultcm.j54 +
      "\n\n" + this.responseresultcm.h56 + " " + this.responseresultcm.i56 + " " + this.responseresultcm.j56 +
      "\n\n" + this.responseresultcm.h57 + " " + this.responseresultcm.i57 + " " + this.responseresultcm.j57 +
      "\n\n" + this.responseresultcm.h58 + " " + this.responseresultcm.i58 + " " + this.responseresultcm.j58 +
      "\n\n" + this.responseresultcm.h59 + " " + this.responseresultcm.i59 + " " + this.responseresultcm.j59 +
      "\n\n" + this.responseresultcm.h60 + " " + this.responseresultcm.i60 + " " + this.responseresultcm.j60 +
      "\n\n" + this.responseresultcm.h61 + " " + this.responseresultcm.i61 + " " + this.responseresultcm.j61 +
      "\n\n" + this.responseresultcm.h62 + " " + this.responseresultcm.i62 + " " + this.responseresultcm.j62 +
      "\n\n" + this.responseresultcm.h64 +
      "\n\n" + this.responseresultcm.h66 + " " + this.responseresultcm.i66 + " " + this.responseresultcm.j66 +
      "\n\n" + this.responseresultcm.h67 + " " + this.responseresultcm.i67 + " " + this.responseresultcm.j67 +
      "\n\n" + this.responseresultcm.h69 +
      "\n" + this.responseresultcm.h70 + " " + this.responseresultcm.i70 + " " + this.responseresultcm.j70 +
      "\n" + this.responseresultcm.h71 + " " + this.responseresultcm.i71 + " " + this.responseresultcm.j71 +
      "\n" + this.responseresultcm.h72 + " " + this.responseresultcm.i72 + " " + this.responseresultcm.j72 +
      "\n" + this.responseresultcm.h73 + " " + this.responseresultcm.i73 + " " + this.responseresultcm.j73 +
      "\n" + this.responseresultcm.h74 + " " + this.responseresultcm.i74 + " " + this.responseresultcm.j74 +
      "\n" + this.responseresultcm.h75 + " " + this.responseresultcm.i75 + " " + this.responseresultcm.j75 +
      "\n" + this.responseresultcm.h76 + " " + this.responseresultcm.i76 + " " + this.responseresultcm.j76 +
      "\n" + this.responseresultcm.h77 + " " + this.responseresultcm.i77 + " " + this.responseresultcm.j77 +
      "\n\n" + this.responseresultcm.h79 + " " + this.responseresultcm.i79 + " " + this.responseresultcm.j79 +
      "\n" + this.responseresultcm.h80 + " " + this.responseresultcm.i80 + " " + this.responseresultcm.j80 +
      "\n\n" + this.responseresultcm.h82 + " " + this.responseresultcm.i82 + " " + this.responseresultcm.j82 +
      "\n" + this.responseresultcm.h83 + " " + this.responseresultcm.i83 + " " + this.responseresultcm.j83 +
      "\n\n" + this.responseresultcm.h85 + " " + this.responseresultcm.i85 + " " + this.responseresultcm.j85 +
      "\n" + this.responseresultcm.h86 + " " + this.responseresultcm.i86 + " " + this.responseresultcm.j86 +
      "\n\n" + this.responseresultcm.h88 + " " + this.responseresultcm.i88 + " " + this.responseresultcm.j88 +
      "\n\n" + this.responseresultcm.h90 + " " + this.responseresultcm.i90 + " " + this.responseresultcm.j90 +
      "\n" + this.responseresultcm.h91 +
      "\n" + this.responseresultcm.h92 + " " + this.responseresultcm.i92 + " " + this.responseresultcm.j92 +
      "\n" + this.responseresultcm.h93 + " " + this.responseresultcm.i93 + " " + this.responseresultcm.j93 +
      "\n" + this.responseresultcm.h94 + " " + this.responseresultcm.i94 + " " + this.responseresultcm.j94 +
      "\n" + this.responseresultcm.h95 + " " + this.responseresultcm.i95 + " " + this.responseresultcm.j95 +
      "\n" + this.responseresultcm.h96 + " " + this.responseresultcm.i96 + " " + this.responseresultcm.j96 +
      "\n\n" + this.responseresultcm.h98 +
      "\n\n" + this.responseresultcm.h99 +
      "\n" + this.responseresultcm.h100 + " " + this.responseresultcm.i100 + " " + this.responseresultcm.j100 +
      "\n" + this.responseresultcm.h101 + " " + this.responseresultcm.i101 + " " + this.responseresultcm.j101 +
      "\n" + this.responseresultcm.h102 + " " + this.responseresultcm.i102 + " " + this.responseresultcm.j102 +
      "\n" + this.responseresultcm.h103 + " " + this.responseresultcm.i103 + " " + this.responseresultcm.j103 +
      "\n" + this.responseresultcm.h104 + " " + this.responseresultcm.i104 + " " + this.responseresultcm.j104 +
      "\n\n" + this.responseresultcm.h106 +
      "\n" + this.responseresultcm.h107 + " " + this.responseresultcm.i107 + " " + this.responseresultcm.j107 +
      "\n" + this.responseresultcm.h108 + " " + this.responseresultcm.i108 + " " + this.responseresultcm.j108 +
      "\n" + this.responseresultcm.h109 + " " + this.responseresultcm.i109 + " " + this.responseresultcm.j109 +
      "\n" + this.responseresultcm.h110 + " " + this.responseresultcm.i110 + " " + this.responseresultcm.j110 +
      "\n\n" + this.responseresultcm.h112 + " " + this.responseresultcm.i112 + " " + this.responseresultcm.j112 +
      "\n\n" + this.responseresultcm.h114 + " " + this.responseresultcm.i114 + " " + this.responseresultcm.j114 +
      "\n\n" + this.responseresultcm.h115 + " " + this.responseresultcm.i115 + " " + this.responseresultcm.j115 +
      "\n\n" + this.responseresultcm.h116 + " " + this.responseresultcm.i116 + " " + this.responseresultcm.j116 +
      "\n\n" + this.responseresultcm.h117 + " " + this.responseresultcm.i117 + " " + this.responseresultcm.j117 +
      "\n\n" + this.responseresultcm.h118 + " " + this.responseresultcm.i118 + " " + this.responseresultcm.j118 +
      "\n\n" + this.responseresultcm.h119 + " " + this.responseresultcm.i119 + " " + this.responseresultcm.j119 +
      "\n\n" + this.responseresultcm.h120 + " " + this.responseresultcm.i120 + " " + this.responseresultcm.j120 +
      "\n\n" + this.responseresultcm.h122 +
      "\n\n" + this.responseresultcm.h124 + " " + this.responseresultcm.i124 + " " + this.responseresultcm.j124 +
      "\n\n" + this.responseresultcm.h125 + " " + this.responseresultcm.i125 + " " + this.responseresultcm.j125 +
      "\n\n" + this.responseresultcm.h127 +
      "\n" + this.responseresultcm.h128 + " " + this.responseresultcm.i128 + " " + this.responseresultcm.j128 +
      "\n" + this.responseresultcm.h129 + " " + this.responseresultcm.i129 + " " + this.responseresultcm.j129 +
      "\n" + this.responseresultcm.h130 + " " + this.responseresultcm.i130 + " " + this.responseresultcm.j130 +
      "\n" + this.responseresultcm.h131 + " " + this.responseresultcm.i131 + " " + this.responseresultcm.j131 +
      "\n" + this.responseresultcm.h132 + " " + this.responseresultcm.i132 + " " + this.responseresultcm.j132 +
      "\n" + this.responseresultcm.h133 + " " + this.responseresultcm.i133 + " " + this.responseresultcm.j133 +
      "\n" + this.responseresultcm.h134 + " " + this.responseresultcm.i134 + " " + this.responseresultcm.j134 +
      "\n" + this.responseresultcm.h135 + " " + this.responseresultcm.i135 + " " + this.responseresultcm.j135 +
      "\n\n" + this.responseresultcm.h137 + " " + this.responseresultcm.i137 + " " + this.responseresultcm.j137 +
      "\n" + this.responseresultcm.h138 + " " + this.responseresultcm.i138 + " " + this.responseresultcm.j138 +
      "\n\n" + this.responseresultcm.h140 + " " + this.responseresultcm.i140 + " " + this.responseresultcm.j140 +
      "\n" + this.responseresultcm.h141 + " " + this.responseresultcm.i141 + " " + this.responseresultcm.j141 +
      "\n\n" + this.responseresultcm.h143 + " " + this.responseresultcm.i143 + " " + this.responseresultcm.j143 +
      "\n" + this.responseresultcm.h144 + " " + this.responseresultcm.i144 + " " + this.responseresultcm.j144 +
      "\n\n" + this.responseresultcm.h146 + " " + this.responseresultcm.i146 + " " + this.responseresultcm.j146 +
      "\n\n" + this.responseresultcm.h148 + " " + this.responseresultcm.i148 + " " + this.responseresultcm.j148 +
      "\n" + this.responseresultcm.h149 +
      "\n" + this.responseresultcm.h150 + " " + this.responseresultcm.i150 + " " + this.responseresultcm.j150 +
      "\n" + this.responseresultcm.h151 + " " + this.responseresultcm.i151 + " " + this.responseresultcm.j151 +
      "\n" + this.responseresultcm.h152 + " " + this.responseresultcm.i152 + " " + this.responseresultcm.j152 +
      "\n" + this.responseresultcm.h153 + " " + this.responseresultcm.i153 + " " + this.responseresultcm.j153 +
      "\n" + this.responseresultcm.h154 + " " + this.responseresultcm.i154 + " " + this.responseresultcm.j154 +
      "\n\n" + this.responseresultcm.h156 +
      "\n" + this.responseresultcm.h157 +
      "\n" + this.responseresultcm.h158 + " " + this.responseresultcm.i158 + " " + this.responseresultcm.j158 +
      "\n" + this.responseresultcm.h159 + " " + this.responseresultcm.i159 + " " + this.responseresultcm.j159 +
      "\n" + this.responseresultcm.h160 + " " + this.responseresultcm.i160 + " " + this.responseresultcm.j160 +
      "\n" + this.responseresultcm.h161 + " " + this.responseresultcm.i161 + " " + this.responseresultcm.j161 +
      "\n" + this.responseresultcm.h162 + " " + this.responseresultcm.i162 + " " + this.responseresultcm.j162 +
      "\n\n" + this.responseresultcm.h164 +
      "\n" + this.responseresultcm.h165 + " " + this.responseresultcm.i165 + " " + this.responseresultcm.j165 +
      "\n" + this.responseresultcm.h166 + " " + this.responseresultcm.i166 + " " + this.responseresultcm.j166 +
      "\n" + this.responseresultcm.h167 + " " + this.responseresultcm.i167 + " " + this.responseresultcm.j167 +
      "\n" + this.responseresultcm.h168 + " " + this.responseresultcm.i168 + " " + this.responseresultcm.j168 +
      "\n" + this.responseresultcm.h170 + " " + this.responseresultcm.i170 + " " + this.responseresultcm.j170 +
      "\n\n" + this.responseresultcm.h172 + " " + this.responseresultcm.i172 + " " + this.responseresultcm.j172 +
      "\n" + this.responseresultcm.h173 + " " + this.responseresultcm.i173 + " " + this.responseresultcm.j173 +
      "\n" + this.responseresultcm.h174 + " " + this.responseresultcm.i174 + " " + this.responseresultcm.j174 +
      "\n" + this.responseresultcm.h175 + " " + this.responseresultcm.i175 + " " + this.responseresultcm.j175 +
      "\n" + this.responseresultcm.h176 + " " + this.responseresultcm.i176 + " " + this.responseresultcm.j176 +
      "\n" + this.responseresultcm.h177 + " " + this.responseresultcm.i177 + " " + this.responseresultcm.j177 +
      "\n" + this.responseresultcm.h178 + " " + this.responseresultcm.i178 + " " + this.responseresultcm.j178 +
      "\n\n" + this.responseresultcm.l4 +
      "\n\n" + " " + this.responseresultcm.m6 + " " + this.responseresultcm.n6 + " " + this.responseresultcm.o6 +
      "\n" + " " + this.responseresultcm.l7 + " " + this.responseresultcm.m7 + " " + this.responseresultcm.n7 + " " + this.responseresultcm.o7 +
      "\n" + " " + this.responseresultcm.l8 + " " + this.responseresultcm.m8 + " " + this.responseresultcm.n8 + " " + this.responseresultcm.o8 +
      "\n" + " " + this.responseresultcm.l9 + " " + this.responseresultcm.m9 + " " + this.responseresultcm.n9 + " " + this.responseresultcm.o9 +
      "\n\n\n\n" + this.responseresultcm.l13 + " " + this.responseresultcm.m13 +
      "\n\n" + this.responseresultcm.l15 +
      "\n" + " " + this.responseresultcm.m16 + " " + this.responseresultcm.n16 + " " + this.responseresultcm.o16 + " " + this.responseresultcm.p16 + " " + this.responseresultcm.q16 +
      "\n" + this.responseresultcm.l17 + " " + this.responseresultcm.m17 + " " + this.responseresultcm.n17 + " " + this.responseresultcm.o17 + "Equal investment in all creates a balanced investment portfolio. EM is stable and profitable, TM is innovative, and GT adds diversification. This approach minimizes risks and maximizes strengths for a well-rounded portfolio." + this.responseresultcm.q17 +
      "\n" + this.responseresultcm.l18 + " " + this.responseresultcm.m18 + " " + this.responseresultcm.n18 + " " + this.responseresultcm.o18 + "This portfolio invests in 3 companies: EM for liquidity and profitability, TM for innovation, and GT for diversity. The combination balances stability with growth, targeting market leaders and innovative companies." + this.responseresultcm.q18 +
      "\n" + this.responseresultcm.l19 + " " + this.responseresultcm.m19 + " " + this.responseresultcm.n19 + " " + this.responseresultcm.o19 + "This portfolio mainly invests in TM for its advanced technology, complemented by EM’s strong finances and GT for diversity. It prioritizes stable returns by focusing on established players and incremental tech advancements." + this.responseresultcm.q19 +
      "\n" + this.responseresultcm.l20 + " " + this.responseresultcm.m20 + " " + this.responseresultcm.n20 + " " + this.responseresultcm.o20 + "This portfolio prioritizes GT for its diversified technology aligned with evolving vehicle demands. The focus is on companies catering to this trend to capitalize on anticipated market appreciation for GT." + this.responseresultcm.q20 +
      "\n" + this.responseresultcm.l21 + " " + this.responseresultcm.m21 + " " + this.responseresultcm.n21 + " " + this.responseresultcm.o21 + "EM provides stability and profitability, TM offers technological advancement, and GT adds diversity. This approach targets both established leaders and potential disruptors in the automotive industry." + this.responseresultcm.q21 +
      "\n" + this.responseresultcm.l22 + " " + this.responseresultcm.m22 + " " + this.responseresultcm.n22 + " " + this.responseresultcm.o22 + "This portfolio features EM and TM, known for solid earnings and profitability. EM brings stability with an impressive return on equity, while TM  adds dividends with a blend of technology and moderate profitability. GT diversifies the mix." + this.responseresultcm.q22 +
      "\n" + this.responseresultcm.l23 + " " + this.responseresultcm.m23 + " " + this.responseresultcm.n23 + " " + this.responseresultcm.o23 + "Portfolio prioritizes EM for its return ratios and market leadership. TM adds innovation and GT adds dynamism, targeting high-growth potential in the automotive sector." + this.responseresultcm.q23 +
      "\n" + this.responseresultcm.l24 + " " + this.responseresultcm.m24 + " " + this.responseresultcm.n24 + " " + this.responseresultcm.o24 + "This portfolio balances income and stability. It favours TM for its tech and moderate profitability, while EM adds stability with strong finances. GT diversifies the portfolio. It suits stakeholders seeking a reliable investment base with income." + this.responseresultcm.q24 +
      "\n" + this.responseresultcm.l25 + " " + this.responseresultcm.m25 + " " + this.responseresultcm.n25 + " " + this.responseresultcm.o25 + "Portfolio prioritizes TM for tech innovations and growth, EM for stability and financial strength, and GT for dynamism. Aiming to seize undervalued assets while ensuring stability." + this.responseresultcm.q25 +
      "\n" + this.responseresultcm.l26 + " " + this.responseresultcm.m26 + " " + this.responseresultcm.n26 + " " + this.responseresultcm.o26 + "This growth-oriented portfolio heavily allocates to EM for its strong returns, with TM bringing innovation and GT prioritizing ratios. The strategy aims to capture market leaders and trendsetters for a dynamic portfolio." + this.responseresultcm.q26 +
      "\n\nPlayer's Input on Decision Making" +
      "\n\nParameters" + " " + "Input" +
      "\nCurrent Ratio, Electra Motors" + " " + this.result[0] +
      "\nCurrent Ratio, Titan Motors" + " " + this.result[1] +
      "\nCurrent Ratio, GreenSpeed Technologies" + " " + this.result[2] +
      "\nAcid-test Ratio, Electra Motors" + " " + this.result[3] +
      "\nAcid-test Ratio, Titan Motors" + " " + this.result[4] +
      "\nAcid-test Ratio, GreenSpeed Technologies" + " " + this.result[5] +
      "\nCash Ratio, Electra Motors" + " " + this.result[6] +
      "\nCash Ratio, Titan Motors" + " " + this.result[7] +
      "\nCash Ratio, GreenSpeed Technologies" + " " + this.result[8] +
      "\nDebt-to-Equity Ratio, Electra Motors" + " " + this.result[9] +
      "\nDebt-to-Equity Ratio, Titan Motors" + " " + this.result[10] +
      "\nDebt-to-Equity Ratio, GreenSpeed Technologies" + " " + this.result[11] +
      "\nDebt Ratio, Electra Motors" + " " + this.result[12] +
      "\nDebt Ratio, Titan Motors" + " " + this.result[13] +
      "\nDebt Ratio, GreenSpeed Technologies" + " " + this.result[14] +
      "\nInterest Coverage Ratio, Electra Motors" + " " + this.result[15] +
      "\nInterest Coverage Ratio, Titan Motors" + " " + this.result[16] +
      "\nInterest Coverage Ratio, GreenSpeed Technologies" + " " + this.result[17] +
      "\nAsset Turnover Ratio, Electra Motors" + " " + this.result[18] +
      "\nAsset Turnover Ratio, Titan Motors" + " " + this.result[19] +
      "\nAsset Turnover Ratio, GreenSpeed Technologies" + " " + this.result[20] +
      "\nInventory Turnover Ratio, Electra Motorss" + " " + this.result[21] +
      "\nInventory Turnover Ratio, Titan Motors" + " " + this.result[22] +
      "\nInventory Turnover Ratio, GreenSpeed Technologies" + " " + this.result[23] +
      "\nDays Sales in Inventory Ratio, Electra Motors" + " " + this.result[24] +
      "\nDays Sales in Inventory Ratio, Titan Motors" + " " + this.result[25] +
      "\nDays Sales in Inventory Ratio, GreenSpeed Technologies" + " " + this.result[26] +
      "\nGross Margin, Electra Motors" + " " + this.result[27] +
      "\nGross Margin, Titan Motors" + " " + this.result[28] +
      "\nGross Margin, GreenSpeed Technologies" + " " + this.result[29] +
      "\nOperating Margin, Electra Motors" + " " + this.result[30] +
      "\nOperating Margin, Titan Motors" + " " + this.result[31] +
      "\nOperating Margin, GreenSpeed Technologies" + " " + this.result[32] +
      "\nReturn on Asset, Electra Motors" + " " + this.result[33] +
      "\nReturn on Asset, Titan Motors" + " " + this.result[34] +
      "\nReturn on Asset, GreenSpeed Technologies" + " " + this.result[35] +
      "\nReturn on Equity, Electra Motors" + " " + this.result[36] +
      "\nReturn on Equity, Titan Motors" + " " + this.result[37] +
      "\nReturn on Equity, GreenSpeed Technologies" + " " + this.result[38] +
      "\nBook value per share, Electra Motors" + " " + this.result[39] +
      "\nBook value per share, Titan Motors" + " " + this.result[40] +
      "\nBook value per share, GreenSpeed Technologies" + " " + this.result[41] +
      "\nEarnings per share, Electra Motors" + " " + this.result[42] +
      "\nEarnings per share, Titan Motors" + " " + this.result[43] +
      "\nEarnings per share, GreenSpeed Technologies" + " " + this.result[44] +
      "\nPrice-earning Ratio, Electra Motors" + " " + this.result[45] +
      "\nPrice-earning Ratio, Titan Motors" + " " + this.result[46] +
      "\nPrice-earning Ratio, GreenSpeed Technologies" + " " + this.result[47] +
      "\n\nPortfolio 1" + " " + this.result[48] === '1' ? 'Yes' : 'No' +
        "\nPortfolio 2" + " " + this.result[49] === '1' ? 'Yes' : 'No' +
          "\nPortfolio 3" + " " + this.result[50] === '1' ? 'Yes' : 'No' +
            "\nPortfolio 4" + " " + this.result[51] === '1' ? 'Yes' : 'No' +
              "\nPortfolio 5" + " " + this.result[52] === '1' ? 'Yes' : 'No' +
                "\nPortfolio 6" + " " + this.result[53] === '1' ? 'Yes' : 'No' +
                  "\nPortfolio 7" + " " + this.result[54] === '1' ? 'Yes' : 'No' +
                    "\nPortfolio 8" + " " + this.result[55] === '1' ? 'Yes' : 'No' +
                      "\nPortfolio 9" + " " + this.result[56] === '1' ? 'Yes' : 'No' +
                        "\nPortfolio 10" + " " + this.result[57] === '1' ? 'Yes' : 'No' +
                        "\n\nSystem Genertaed Output " +
                        "\nRatio Analysis Score % " +
                        "\nParameter %" + " " + "Output" +
                        "\nLiquidity Ratio " + this.responseresultdatabase.s27 +
                        "\nLeverage Ratio " + this.responseresultdatabase.s28 +
                        "\nEfficiency Ratio " + this.responseresultdatabase.s29 +
                        "\nProfitability Ratio " + this.responseresultdatabase.s30 +
                        "\nMarket Value Ratio " + this.responseresultdatabase.s31 +
                        "\nTotal Score " + this.responseresultdatabase.s32 +
                        "\n\nInvestment " +
                        "\nParameter " + " " + "Output" +
                        "\nElectra Motors, Potfolio Allocation " + this.responseresultdatabase.s19 +
                        "\nTitan Motors, Potfolio Allocation " + this.responseresultdatabase.t19 +
                        "\nGreenSpeed Technologies, Potfolio Allocation " + this.responseresultdatabase.u19 +
                        "\nPortfolio Name " + this.responseresultdatabase.t23 +
                        "\nStakeholder Views " + this.responseresultdatabase.s23;

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

  decisionchecklistpopup() {
    this.inputDataCheck();

  }

  inputDataCheck() {
    this.errorlist = [];
    for (let i = 0; i < this.databasecellnamearray.length; i++) {

      // if((i!=9)||(i!=10)||(i!=11)||(i!=9)||(i!=9)||(i!=9)||(i!=9)||(i!=9)||(i!=9)||
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
    if (this.noofattempt == "1") {
      if (this.foodforthoughtQNo == 10) {
        if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
          this._alert.error("To move ahead, kindly Write your analysis");

        } else {
          const dialogRef = this.dialog.open(Financialanalysisnewdecisionchecklistpopup, {
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
            panelClass: 'centertop-dialog',
            position: { top: '20px' },
            // panelClass: 'custom-dialog-container'
          });
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.newItemEvent.emit('report');
            }
          });
        }
      }
      else {
        this._alert.error("To move ahead finish Food For Thought section");
      }
    } else if (this.noofattempt != '1') {
      if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
        this._alert.error("To move ahead, kindly Write your analysis");

      } else {
        const dialogRef = this.dialog.open(Financialanalysisnewdecisionchecklistpopup, {
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
      }
    }


  }

}



// popup ...........


@Component({
  selector: 'app-financialanalysisnewdecisionchecklistpopup.component',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule],
  templateUrl: './financialanalysisnewpopup.component.html',
  styleUrls: ['./financialanalysisnewdecisionchecklist.component.scss']
})

export class Financialanalysisnewdecisionchecklistpopup extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<Financialanalysisnewdecisionchecklistpopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }


  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/financialanalysis/singleinputfinancialanalysis';
    let decisionsubmitData = {
      "am31": "yes"
    }

    this._api.logisticsDataWrite("financialanalysis", 1,
      decisionsubmitData, apiname, 'financialanalysiscmid').subscribe((data: any) => {

        if (data.status == "Success") {
          console.log(this.resultarray, 'savekpivalue')
          this._login.savekpivalue((Number(this.data.resultarray[58]) * 100).toFixed(0), this.data.resultarray[59],
            0, 'update', this.noofattempt)
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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Financial Analysis").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Financial Analysis").subscribe((data: any) => {

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
