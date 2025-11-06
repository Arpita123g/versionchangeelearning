import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountingarabicdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule,FormsModule],
  templateUrl: './accountingarabicdecisionchecklist.component.html',
  styleUrls: ['./accountingarabicdecisionchecklist.component.scss']
})
export class AccountingingArabicdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [true,true,true,true];
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
  attempt:number=0;



  databasecellnamearray: any = ['ac9', 'ac10', 'ac11', 'ac12', 'ac13', 'ac17', 'ac18', 'ac19', 'ac20', 'ac21', //9
    'ac25', 'ac26', 'ac27', 'ac28', 'ac35', 'ac36', 'ac37', 'ac38', 'ac39', 'ac43', 'ac44', 'ac45', 'ac46', 'ac52', //23
    'ac53', 'ac54', 'ac61', 'ac62', 'ac66', 'ac67', 'ac68', 'ac70', 'ac73', 'ac76', //33
    'ac81', 'ac84', 'ac85', 'ac88', 'ac89', 'ac92', 'ac93', //40
    'b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b32', 'b33', //49

  ];

  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];

  blankInputMessage: any = ["Cash", "Accounts receivable", "Inventory", "Prepaid expenses", 'Other current assets',
    'Machinery & equipment', 'Furniture & fixtures', 'Leasehold improvements', 'Land & buildings', 'Other fixed assets',
    'Intangible assets', 'Goodwill', 'Deposits', 'Other assets', 'Accounts payable', 'Accrued expenses', 'Unearned revenue',
    'Notes, short-term', 'Current part of long-term debt', 'Bank loans payable', 'Notes payable to stockholders',
    'LESS: Short-term portion', 'Other long term debt', 'Invested capital', 'Retained earnings - beginning', 'Retained earnings - current',
    'Revenue', 'Cost of good sold', 'Sales cost', 'Administration cost', 'Bad debts', 'Depreciation & Amortization', 'Interest Expense',
    'Tax', 'Opening balance', 'Operations, Cash In', 'Operations, Cash Out', 'Investment, Cash In', 'Investment, Cash Out', 'Financing, Cash In', 'Financing, Cash Out',
    'Investment in Research and Development', 'Expansion of Manufacturing Facilities', 'Debt Restructuring', 'Cost Reduction Initiatives',
    'Introduction of Premium Product Line', 'Employee Training and Development', 'Working Capital Optimization', 'Equipment Lease Financing', 'Exploring Export Opportunities'
  ];

  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought:boolean = true;


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
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
                }
              }

              for (let i = 41; i < 50; i++) {
                if (Number(this.previousResulList[i]) == 1) {
                  this.previousResulList[i] = "Suggested"
                } else {
                  this.previousResulList[i] = "Not Suggested"
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
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              this.attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].accountingArabicCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(this.attempt);
              this._global.casemanagementid.next(data.resultList[0].accountingarabiccmid);
              this.foodforthoughtQNo = data.resultList[0].ag9;
              this.submitprove = data.resultList[0].ag8;

              if ((this.submitprove == 'yes')|| (this.timefinished)) {
                this.disabled = true;
              }else{
                this.disabled = false;
              }

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
                if (Number(this.result[i]) == 0) {
                  this.result[i] = "-"
                }
              }

              for (let i = 41; i < 50; i++) {
                if (Number(this.result[i]) == 1) {
                  this.result[i] = "Suggested"
                } else {
                  this.result[i] = "Not Suggested"
                }
              }
              this.errorlist = [];
              if ((this.optional[0] == true) && (this.result[41] == "Not Suggested") && (this.result[42] == "Not Suggested") && (this.result[43] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Balance Sheet")
              } if ((this.optional[1] == true) && (this.result[44] == "Not Suggested") && (this.result[45] == "Not Suggested") && (this.result[46] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Income Statement")
              } if ((this.optional[2] == true) && (this.result[47] == "Not Suggested") && (this.result[48] == "Not Suggested") && (this.result[49] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Cash Flow Statement")
              }

              
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (this.attempt > 1) {

                  if (this.result[i] == this.previousResulList[i]) {
                    this.isClass[i] = true;
                  } else {
                    this.isClass[i] = false;
                  }
                } else {
                  this.isClass[i] = true;
                }
              }

              this.roundname = "Round " + this.attempt;
              if (this.attempt > 0) {
                for (let i = 1; i < this.attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }


              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }

              this.kpivaluearray = [Number((data.resultList[0].l8) * 100).toFixed(0),
              data.resultList[0].l28,
              data.resultList[0].m28]
            }

          }else{
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
           }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.assesment = "\n\nFixed Data" +
      "\n\nMemo" +
      "\n" + this.responseresultcm.b5 +
      "\n\n" +
      "Information" +
      "\n\n" +
      "Establishment" +
      "\n" + "Mr. Raj, fueled by a passion for sustainability, set out to launch a paper manufacturing company. To raise funds, he issued 200,000 ordinary shares, embraced by his supportive family. Seeking further capital, he secured a Rs. 300,000 loan from the local bank. With financial backing and unwavering determination, Mr. Raj's dream of creating eco-friendly paper products was set in motion, promising a brighter, greener future." +
      "\n\n" +
      "Investment" +
      "\n" + "With the company's financial foundation secure, Mr. Raj wasted no time in expanding his paper manufacturing venture. He invested in a prime piece of land for Rs. 60,000, laying the groundwork for future growth. Additionally, he purchased process machinery worth Rs. 200,000, immediately recording the first depreciation, ensuring efficiency in production. To drive innovation and sustainability, Mr. Raj acquired a patent for Rs. 50,000, promising to reduce waste in the production process, with the first depreciation also recorded. With each investment, Mr. Raj's vision of creating a greener, more sustainable future for his company and the environment grew closer to realization." +
      "\n\n" +
      "Operations" +
      "\n" + "Mr. Raj's paper manufacturing venture surged forward with strategic moves. He purchased raw materials worth Rs. 100,000 on credit, fueling production. Salaries of Rs. 40,000 were swiftly paid to production staff, ensuring smooth operations. The first batch of 100 units was completed, with variable costs meticulously recorded." +
      "\n" + "With products ready, Mr. Raj invested Rs. 50,000 in a dedicated sales team, swiftly securing buyers for his eco-friendly paper products. Eight customers eagerly purchased 80 units at Rs. 5,000 each, with one paying in cash and seven opting for credit." +
      "\n" + "Amidst successes, challenges emerged. Mr. Raj received an unexpected electricity bill of Rs. 15,000, promptly settling it to keep operations running smoothly. He then fulfilled his financial obligations by paying off the debt for the raw materials bought on credit." +
      "\n" + "However, one customer's declaration of bankruptcy posed a setback. Undeterred, Mr. Raj navigated the situation gracefully, learning and adapting as he continued to grow his business. Finally, he ensured financial stability by paying 8% interest on the loan obtained earlier, further solidifying his commitment to success in the sustainable paper manufacturing industry." +
      "\n" + "As the fiscal year drew to a close, Mr. Raj diligently calculated and paid the taxes owed to the government. With a tax rate of 20%, his contribution reflected both his commitment to compliance and his growing success as an entrepreneur in the paper manufacturing sector." +
      "\n\n" +
      "Correct Accounts" +
      "\n\n" +
      "Balance Sheet" +
      "\n" +
      "Assets" +
      "\n" +
      "Current assets" +
      "\n" + this.responseresultcm.f9 + " " + this.responseresultcm.g9 +
      "\n" + this.responseresultcm.f10 + " " + this.responseresultcm.g10 +
      "\n" + this.responseresultcm.f11 + " " + this.responseresultcm.g11 +
      "\n" + this.responseresultcm.f12 + " " + this.responseresultcm.g12 +
      "\n" + this.responseresultcm.f13 + " " + this.responseresultcm.g13 +
      "\n\n" +
      "Fixed assets" +
      "\n" + this.responseresultcm.f16 + " " + this.responseresultcm.g16 +
      "\n" + this.responseresultcm.f17 + " " + this.responseresultcm.g17 +
      "\n" + this.responseresultcm.f18 + " " + this.responseresultcm.g18 +
      "\n" + this.responseresultcm.f19 + " " + this.responseresultcm.g19 +
      "\n" + this.responseresultcm.f20 + " " + this.responseresultcm.g20 +
      "\n\n" +
      "Other assets" +
      "\n" + this.responseresultcm.f23 + " " + this.responseresultcm.g23 +
      "\n" + this.responseresultcm.f24 + " " + this.responseresultcm.g24 +
      "\n" + this.responseresultcm.f25 + " " + this.responseresultcm.g25 +
      "\n" + this.responseresultcm.f26 + " " + this.responseresultcm.g26 +
      "\n\n" +
      "Liabilities" +
      "\n" +
      "Current liabilities" +
      "\n" + this.responseresultcm.f30 + " " + this.responseresultcm.g30 +
      "\n" + this.responseresultcm.f31 + " " + this.responseresultcm.g31 +
      "\n" + this.responseresultcm.f32 + " " + this.responseresultcm.g32 +
      "\n" + this.responseresultcm.f33 + " " + this.responseresultcm.g33 +
      "\n" + this.responseresultcm.f34 + " " + this.responseresultcm.g34 +
      "\n\n" +
      "Long-term debt" +
      "\n" + this.responseresultcm.f37 + " " + this.responseresultcm.g37 +
      "\n" + this.responseresultcm.f38 + " " + this.responseresultcm.g38 +
      "\n" + this.responseresultcm.f39 + " " + this.responseresultcm.g39 +
      "\n" + this.responseresultcm.f40 + " " + this.responseresultcm.g40 +
      "\n\n" +
      "Shareholder's Equity" +
      "\n" +
      "Other assets" +
      "\n" + this.responseresultcm.f44 + " " + this.responseresultcm.g44 +
      "\n" + this.responseresultcm.f45 + " " + this.responseresultcm.g45 +
      "\n" + this.responseresultcm.f46 + " " + this.responseresultcm.g46 +
      "\n\n" +
      "Income Statement" +
      "\n" +
      "\n" + this.responseresultcm.f50 + " " + this.responseresultcm.g50 +
      "\n" + this.responseresultcm.f51 + " " + this.responseresultcm.g51 +
      "\n" + this.responseresultcm.f52 + " " + this.responseresultcm.g52 +
      "\n" + this.responseresultcm.f53 + " " + this.responseresultcm.g53 +
      "\n" + this.responseresultcm.f54 + " " + this.responseresultcm.g54 +
      "\n" + this.responseresultcm.f55 + " " + this.responseresultcm.g55 +
      "\n" + this.responseresultcm.f56 + " " + this.responseresultcm.g56 +
      "\n" + this.responseresultcm.f57 + " " + this.responseresultcm.g57 +
      "\n\n" +
      "Cash Flow Statement" +
      "\n" +
      "\n" + this.responseresultcm.f61 + " " + this.responseresultcm.g61 +
      "\n\n" +
      "Cash flow from operations" +
      "\n" + this.responseresultcm.f64 + " " + this.responseresultcm.g64 +
      "\n" + this.responseresultcm.f65 + " " + this.responseresultcm.g65 +
      "\n\n"
    "Cash flow from investment" +
      "\n" + this.responseresultcm.f68 + " " + this.responseresultcm.g68 +
      "\n" + this.responseresultcm.f69 + " " + this.responseresultcm.g69 +
      "\n\n" +
      "Cash flow from financing" +
      "\n" + this.responseresultcm.f72 + " " + this.responseresultcm.g72 +
      "\n" + this.responseresultcm.f73 + " " + this.responseresultcm.g73 +
      "\n\n" +
      "Evaluation" +
      "\n" + "Type" + " " + "Name" + " " + "Decsription" + " " + "Benefits" + " " + "Cost" + " " + "Approval" + " " + "Reason" + " " + "Risk Probability Year 1" + " " + " Risk Probability Year 2" + " " + " Risk Probability Year 3"
    "\n" + this.responseresultcm.i7 + " " + this.responseresultcm.j7 + " " + this.responseresultcm.k7 + " " + this.responseresultcm.l7 + " " + this.responseresultcm.m7 + " " + this.responseresultcm.n7 + " " + this.responseresultcm.o7 + " " + this.responseresultcm.p7 + " " + this.responseresultcm.q7 + " " + this.responseresultcm.r7 +
      "\n" + this.responseresultcm.i8 + " " + this.responseresultcm.j8 + " " + this.responseresultcm.k8 + " " + this.responseresultcm.l8 + " " + this.responseresultcm.m8 + " " + this.responseresultcm.n8 + " " + this.responseresultcm.o8 + " " + this.responseresultcm.p8 + " " + this.responseresultcm.q8 + " " + this.responseresultcm.r8 +
      "\n" + this.responseresultcm.i9 + " " + this.responseresultcm.j9 + " " + this.responseresultcm.k9 + " " + this.responseresultcm.l9 + " " + this.responseresultcm.m9 + " " + this.responseresultcm.n9 + " " + this.responseresultcm.o9 + " " + this.responseresultcm.p9 + " " + this.responseresultcm.q9 + " " + this.responseresultcm.r9 +
      "\n" + this.responseresultcm.i10 + " " + this.responseresultcm.j10 + " " + this.responseresultcm.k10 + " " + this.responseresultcm.l10 + " " + this.responseresultcm.m10 + " " + this.responseresultcm.n10 + " " + this.responseresultcm.o10 + " " + this.responseresultcm.p10 + " " + this.responseresultcm.q10 + " " + this.responseresultcm.r10 +
      "\n" + this.responseresultcm.i11 + " " + this.responseresultcm.j11 + " " + this.responseresultcm.k11 + " " + this.responseresultcm.l11 + " " + this.responseresultcm.m11 + " " + this.responseresultcm.n11 + " " + this.responseresultcm.o11 + " " + this.responseresultcm.p11 + " " + this.responseresultcm.q11 + " " + this.responseresultcm.r11 +
      "\n" + this.responseresultcm.i12 + " " + this.responseresultcm.j12 + " " + this.responseresultcm.k12 + " " + this.responseresultcm.l12 + " " + this.responseresultcm.m12 + " " + this.responseresultcm.n12 + " " + this.responseresultcm.o12 + " " + this.responseresultcm.p12 + " " + this.responseresultcm.q12 + " " + this.responseresultcm.r12 +
      "\n" + this.responseresultcm.i13 + " " + this.responseresultcm.j13 + " " + this.responseresultcm.k13 + " " + this.responseresultcm.l13 + " " + this.responseresultcm.m13 + " " + this.responseresultcm.n13 + " " + this.responseresultcm.o13 + " " + this.responseresultcm.p13 + " " + this.responseresultcm.q13 + " " + this.responseresultcm.r13 +
      "\n" + this.responseresultcm.i14 + " " + this.responseresultcm.j14 + " " + this.responseresultcm.k14 + " " + this.responseresultcm.l14 + " " + this.responseresultcm.m14 + " " + this.responseresultcm.n14 + " " + this.responseresultcm.o14 + " " + this.responseresultcm.p14 + " " + this.responseresultcm.q14 + " " + this.responseresultcm.r14 +
      "\n" + this.responseresultcm.i15 + " " + this.responseresultcm.j15 + " " + this.responseresultcm.k15 + " " + this.responseresultcm.l15 + " " + this.responseresultcm.m15 + " " + this.responseresultcm.n15 + " " + this.responseresultcm.o15 + " " + this.responseresultcm.p15 + " " + this.responseresultcm.q15 + " " + this.responseresultcm.r15 +
      "\n\n" +
      "Players Input based on the information" +
      "\n" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" +
      "Balance Sheet" +
      "\n" + "Cash" + " " + this.result[0] +
      "\n" + "Accounts receivable" + " " + this.result[1] +
      "\n" + "Inventory" + " " + this.result[2] +
      "\n" + "Prepaid expenses" + " " + this.result[3] +
      "\n" + "Other current assets" + " " + this.result[4] +
      "\n" + "Machinery & equipment" + " " + this.result[5] +
      "\n" + "Furniture & fixtures" + " " + this.result[6] +
      "\n" + "Leasehold improvements" + " " + this.result[7] +
      "\n" + "Land & buildings" + " " + this.result[8] +
      "\n" + "Other fixed assets" + " " + this.result[9] +
      "\n" + "Intangible assets " + " " + this.result[10] +
      "\n" + "Goodwill " + " " + this.result[11] +
      "\n" + "Deposits " + " " + this.result[12] +
      "\n" + "Other assets " + " " + this.result[13] +
      "\n" + "Accounts payable" + " " + this.result[14] +
      "\n" + "Accrued expenses" + " " + this.result[15] +
      "\n" + "Unearned revenue" + " " + this.result[16] +
      "\n" + "Notes, short-term" + " " + this.result[17] +
      "\n" + "Current part of long-term debt" + " " + this.result[18] +
      "\n" + "Bank loans payable" + " " + this.result[19] +
      "\n" + "Notes payable to stockholders" + " " + this.result[20] +
      "\n" + "LESS: Short-term portion" + " " + this.result[21] +
      "\n" + "Other long term debt" + " " + this.result[22] +
      "\n" + "Invested capital" + " " + this.result[23] +
      "\n" + "Retained earnings - beginning" + " " + this.result[24] +
      "\n" + "Retained earnings - current" + " " + this.result[25] +
      "\n" +
      "Income Statement, INR" +
      "\n" + "Revenue" + " " + this.result[26] +
      "\n" + "Cost of good sold" + " " + this.result[27] +
      "\n" + "Sales cost" + " " + this.result[28] +
      "\n" + "Administration cost" + " " + this.result[29] +
      "\n" + "Bad debts" + " " + this.result[30] +
      "\n" + "Depreciation & Amortization" + " " + this.result[31] +
      "\n" + "Interest Expense" + " " + this.result[32] +
      "\n" + "Tax" + " " + this.result[33] +
      "\n" +
      " Cash Flow Statement, INR " +
      "\n" + "Opening balance" + " " + this.result[34] +
      "\n" + "Operations, Cash In" + " " + this.result[35] +
      "\n" + "Operations, Cash Out" + " " + this.result[36] +
      "\n" + "Investment, Cash In" + " " + this.result[37] +
      "\n" + "Investment, Cash Out" + " " + this.result[38] +
      "\n" + "Financing, Cash In" + " " + this.result[39] +
      "\n" + "Financing, Cash Out" + " " + this.result[40] +
      "\n" +
      "Opportunities" +
      "\n" + "Investment in Research and Development" + " " + this.result[41] +
      "\n" + "Expansion of Manufacturing Facilities" + " " + this.result[42] +
      "\n" + "Debt Restructuring" + " " + this.result[43] +
      "\n" + "Cost Reduction Initiatives" + " " + this.result[44] +
      "\n" + "Introduction of Premium Product Line" + " " + this.result[45] +
      "\n" + "Employee Training and Development" + " " + this.result[46] +
      "\n" + "Working Capital Optimization" + " " + this.result[47] +
      "\n" + "Equipment Lease Financing" + " " + this.result[48] +
      "\n" + "Exploring Export Opportunities" + " " + this.result[49] +
      "\n\n" +
      "Output Generated based on player's input" +
      "\n\n" +
      "Correct Accounts Score" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Balance Sheet" + " " + Number(this.responseresultdatabase.k5) * 100 + "%" +
      "\n" + "Income Statement" + " " + Number(this.responseresultdatabase.k6) * 100 + "%" +
      "\n" + "Cash Flow Statement" + " " + Number(this.responseresultdatabase.k7) * 100 + "%";
    "\n\n" +
      "Investment Suggestions based on opportunities" +
      "\n" +
      "Parameter" + " " + " Approval Likelihood" + " " + "1-Year Value Creation" + " " + "3-Year Value Creation"
    "\n" + "" + " " + this.responseresultdatabase.k25 + " " + this.responseresultdatabase.l25 + " " + this.responseresultdatabase.m25 +
      "\n" + "" + " " + this.responseresultdatabase.k26 + " " + this.responseresultdatabase.l26 + " " + this.responseresultdatabase.m26 +
      "\n" + "" + " " + this.responseresultdatabase.k26 + " " + this.responseresultdatabase.l27 + " " + this.responseresultdatabase.m27
    "\n\n" +
      "KPI" +
      "\n" + "Parameters" + " " + "Input" +
      "Total Score" + " " + Number(this.responseresultdatabase.l8) * 100 + "%" +
      "1-Year Value Creation " + " " + this.responseresultdatabase.l28 +
      "1-Year Value Creation " + " " + this.responseresultdatabase.m28

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
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 6) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(AccountingArabicPopup, {
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

}





//accountingpopup..........

@Component({
  selector: 'app-accountingarabicdecisionchecklist.component',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './accountingarabicpopup.html',
  styleUrls: ['./accountingarabicdecisionchecklist.component.scss']

})

export class AccountingArabicPopup extends AbstractComponent {

  showtab: boolean = true;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AccountingArabicPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/accountingarabic/singleinputaccountingarabic';
    let decisionsubmitData = {
      "ag8": "yes"
    }
    this._api.promotionsdatawrite("accountingarabic", 1,
      decisionsubmitData, apiname, 'accountingarabiccmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "accountingarabic").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "accountingarabic").subscribe((data: any) => {

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