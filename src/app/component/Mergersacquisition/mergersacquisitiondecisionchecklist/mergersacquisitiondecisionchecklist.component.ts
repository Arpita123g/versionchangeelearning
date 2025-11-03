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

@Component({
  selector: 'app-mergersacquisitiondecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mergersacquisitiondecisionchecklist.component.html',
  styleUrls: ['./mergersacquisitiondecisionchecklist.component.scss']
})
export class MergersacquisitiondecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = false;
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
  topstatus: boolean = true;
  @Output() newItemEvent = new EventEmitter<any>();
  databasecellnamearray: any = ['b24', 'ac23', 'ac26', 'ac27', 'ac28','l24','g28','h29'];
  optionalcase: any = ['foodforthoughtstatus'];
  blankInputMessage: any;
  kpivaluearray: any;
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
    let apiname = '/mergersacquisition/fetchmergersacquisition';
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
          // this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getFetchData(attempt: string) {
    this.checkloading = true;

    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].mergersAcquisitionCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);
              this.foodforthoughtQNo = data.resultList[0].ac31;
              this.submitprove = data.resultList[0].ac30;
             
              if ((this.submitprove == 'yes') || (this.timefinished)) {
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

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
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

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              this.kpivaluearray = [Number(data.resultList[0].l24),
              (data.resultList[0].g28),
              (Number(data.resultList[0].h29)).toFixed(0)]

              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }
              this.checkloading = false;


            }

          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.assesment = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + this.responseresultcm.b5 +
      "\n\nMemo" +
      "\n" + "To : Strategic Planning Team " +
      "From : Ananya Mehta, CEO, MAI " +
      "Date : September 5th, 2023 " +
      "Subject : Strategic Planning for Potential Mergers & Acquisitions " +

      "Dear Team , " +

      "Given the rapid shifts in the automobile industry and our drive to remain at the forefront, " +
      "I believe it's time to explore opportunities that further cement our position in the market and " +
      "strengthen our value proposition. To this end, I'd like to explore potential mergers and acquisitions " +
      "that align with our strategic objectives. " +

      "Primary Objectives : " +

      "Supply Chain Streamlining & Cost Reduction: Look for potential companies that have optimized manufacturing " +
      "capabilities, especially in battery tech and electric vehicle components.Such an acquisition can provide us " +
      "with both a streamlined supply chain and reduced production costs. " +

      "Growth via Market Share Acquisition: Identify competitors whose market acquisition can lead to substantial" +
      "growth in our market share.This not only boosts our sales but also consolidates our position in key markets. " +


      "Technology & Innovation : Innovation is the bedrock of our industry.Hence, we are interested in companies, possibly " +
      "start - ups, that have made significant strides in EV technology.This could be in battery longevity, fast charging, " +
      "or any other domain that could give MAI a competitive edge. " +

      "Plan of Action : " +

      "Financial Analysis : Examine our financials, especially our Cash and cash Equivalents, to determine our capacity" +
      "for a potential M & A." +

      "Market Research : Conduct assessments on companies that fit any of our three objectives.This will include " +
      "understanding their market value, innovations, and their potential impact on our brand. " +

      "Due Diligence : Any shortlisted company should be thoroughly vetted for their financial health, any potential " +
      "liabilities, and synergies with our brand and mission. " +

      "Strategic Alignment Meeting : " +

      "Convene a meeting with key stakeholders, including R & D, Marketing, and Supply Chain Heads, to ensure " +
      "alignment with our broader strategic goals.I entrust this crucial responsibility to our Strategic Planning " +
      "Team, confident in your capabilities to chart a path that aligns with MAI's vision. I am eager to see the " +
      "recommendations you put forth and am available for any guidance or clarifications you might need. " +

      "Let's drive MAI into the future, fortified and invigorated! " +

      "Warm Regards , " +

      "Ananya Mehta " +
      "CEO, Mumbai Auto Innovations(MAI). " +
      "\n\nCompany" +
      "\n" + this.responseresultcm.d10 + " " + this.responseresultcm.e10 +
      "\n\nIncome Statement, INR million" +
      "\n" + this.responseresultcm.e18 + " " + this.responseresultcm.f18 + " " + this.responseresultcm.g18 + " " + this.responseresultcm.h18 + " " + this.responseresultcm.i18 + " " + this.responseresultcm.j18 + " " + this.responseresultcm.k18 + " " + this.responseresultcm.l18 +
      "\n" + this.responseresultcm.e19 + " " + this.responseresultcm.f19 + " " + this.responseresultcm.g19 + " " + this.responseresultcm.h19 + " " + this.responseresultcm.i19 + " " + this.responseresultcm.j19 + " " + this.responseresultcm.k19 + " " + this.responseresultcm.l19 +
      "\n\nBalance Sheet, INR million" +
      "\n" + this.responseresultcm.e26 + " " + this.responseresultcm.f26 + " " + this.responseresultcm.g26 +
      "\n" + this.responseresultcm.e27 + " " + this.responseresultcm.f27 + " " + this.responseresultcm.g27 +
      "\n\nRatio" +
      "\n" + this.responseresultcm.e34 + " " + this.responseresultcm.f34 + " " + this.responseresultcm.g34 + " " + this.responseresultcm.h34 + " " + this.responseresultcm.i34 + " " + this.responseresultcm.j34 + " " + this.responseresultcm.k34 + " " + this.responseresultcm.l34 + " " + this.responseresultcm.m34 + " " + this.responseresultcm.n34 + " " + this.responseresultcm.o34 + " " + this.responseresultcm.p34 +
      "\n" + this.responseresultcm.e35 + " " + this.responseresultcm.f35 + " " + this.responseresultcm.g35 + " " + this.responseresultcm.h35 + " " + this.responseresultcm.i35 + " " + this.responseresultcm.j35 + " " + this.responseresultcm.k35 + " " + this.responseresultcm.l35 + " " + this.responseresultcm.m35 + " " + this.responseresultcm.n35 + " " + this.responseresultcm.o35 + " " + this.responseresultcm.p35 +
      "\n\nCash & Cash Equivalents, INR million" +
      "\n" + this.responseresultcm.e42 +
      "\n\n" + this.responseresultcm.d48 + " " + this.responseresultcm.e48 +

      "\n\nCompanies" + " " + "Information" + " " + "Synergy Benefits" + " " + "Strategic Importance" + " " + "Expected Financial Benefits" + " " + "Cultural Integration Ease" + " " + "Asking Price, INR B" + " " + "Valuation, INR B" + " " + "Min Premium Expected %" +
      "\n" + this.responseresultcm.r7 + " " + "Profile : A global leader in advanced battery manufacturing, with patented " +
      "technology for fast-charging and long-life batteries." +
      "Advantage: Controls 20 % of the battery supply market, ensuring a streamlined supply chain and cost reductions." +
      "Financials & Valuation:" +
      "Revenue: INR 1.5B" +
      "Gross Margin: 40 %" +
      "Net Margin: 15 %" +
      "Valuation: INR 7B" +
      "Shareholder Structure: Privately owned with 60 % held by founders, 40 % by private equity firms. " +
      " " + "Integrating BatteryTech's fast-charging, long-life batteries will reduce costs by 10% and position " +
      "MAI as a market leader in EV battery technology. " + " " +
      "9 (A direct fit with MAI's core business of EVs) " + " " +
      "Annual savings of INR 150M from reduced battery costs. " + " " +
      "7 (Shared vision for EV innovations but slight differences in operational styles) " + " " +
      this.responseresultcm.x7 + " " + this.responseresultcm.y7 + " " + this.responseresultcm.z7 +

      "\n" + this.responseresultcm.r8 + " " + "Profile: Specializes in inefficient vehicle component manufacturing," +
      "leveraging AI and automation." +
      "Advantage: Can reduce manufacturing costs by up to 25%." +
      "Financials & Valuation:" +
      "Revenue: INR 2B" +
      "Gross Margin: 35 %" +
      "Net Margin: 10 %" +
      "Valuation: INR 10B" +
      "Shareholder Structure: Public company listed on the BSE " +
      " " + "Leveraging their AI and automation will potentially decrease manufacturing lead times by 15% and enhance" +
      "production efficiency." + " " +
      "8 (Directly impacts manufacturing process)" + " " +
      "Annual savings of INR 80M from improved manufacturing efficiencies. " + " " +
      "8 (Both companies have a strong focus on operational excellence) " + " " +
      this.responseresultcm.x8 + " " + this.responseresultcm.y8 + " " + this.responseresultcm.z8 +

      "\n" + this.responseresultcm.r9 + " " + "Profile: A major supplier of rare metals used in EV batteries. " +
      "Advantage: Guarantees long-term contracts at fixed prices, ensuring supply chain stability." +
      "Financials & Valuation:" +
      "Revenue: INR 3B" +
      "Gross Margin: 30 %" +
      "Net Margin: 12 %" +
      "Valuation: INR 15B" +
      "Shareholder Structure: Public company with diversified ownership. " +
      " " + "Securing long-term contracts at fixed prices will ensure supply chain stability and could reduce raw " +
      "material costs by up to 8%. " + " " +
      "7 (Supply chain stabilization and cost containment) " + " " +
      "Annual savings of INR 60M from fixed pricing contracts. " + " " +
      "6 (Differing core operations might cause some integration hiccups) " + " " +
      this.responseresultcm.x9 + " " + this.responseresultcm.y9 + " " + this.responseresultcm.z9 +

      "\n" + this.responseresultcm.r10 + " " + "Profile: An EV logistics company, ensuring efficient delivery of vehicle components. " +
      "Advantage: Reduces lead times by up to 50%. " +
      "Financials & Valuation:" +
      "Revenue: INR 500M" +
      "Gross Margin: 25%" +
      "Net Margin: 8%" +
      "Valuation: INR 2.5B" +
      "Shareholder Structure: Private company, majority-owned by the founding family. " +
      " " + "Utilizing their logistics expertise will enhance component delivery efficiency, potentially boosting the" +
      "production rate by 20%. " + " " +
      "6 (Improved logistics will enhance the supply chain) " + " " +
      "Annual revenue increase of INR 40M from faster time-to-market. " + " " +
      "7 (Both companies have a keen focus on sustainability) " + " " +
      this.responseresultcm.x10 + " " + this.responseresultcm.y10 + " " + this.responseresultcm.z10 +

      "\n" + this.responseresultcm.r11 + " " + "Profile: Emerging EV company with a strong market presence in Southeast Asia. " +
      "Advantage:Acquisition can boost MAI's market share by 10% in SEA. " +
      "Financials & Valuation:" +
      "Revenue: INR 4B" +
      "Gross Margin: 34%" +
      "Net Margin: 14%" +
      "Valuation: INR 20B" +
      "Shareholder Structure: Public company with diversified ownership. " +
      " " + "Direct access to the Southeast Asian market, projected to increase MAI's annual revenue by 10% within three years. " + " " +
      "9 (Direct entry into a new and emerging market) " + " " +
      "Annual revenue boost of INR 250M from SEA market. " + " " +
      "5 (Differences in regional market approaches might pose challenges) " + " " +
      this.responseresultcm.x11 + " " + this.responseresultcm.y11 + " " + this.responseresultcm.z11 +

      "\n" + this.responseresultcm.r12 + " " + "Profile:  European EV manufacturer with an extensive dealership network. " +
      "Advantage: Instant access to the European market and established infrastructure. " +
      "Financials & Valuation:" +
      "Revenue: INR 3.5B" +
      "Gross Margin: 33%" +
      "Net Margin: 13%" +
      "Valuation: INR 18B" +
      "Shareholder Structure: Public company listed on the LSE. " +
      " " + "Immediate market entry into Europe, potentially expanding MAI's global market share by 8%. " + " " +
      "9 (Expansion into the European market) " + " " +
      "Annual revenue boost of INR 200M from European sales. " + " " +
      "6 (European business culture varies from the Indian landscape) " + " " +
      this.responseresultcm.x12 + " " + this.responseresultcm.y12 + " " + this.responseresultcm.z12 +

      "\n" + this.responseresultcm.r13 + " " + "Profile:  Holds a significant market share in South America's emerging EV market. " +
      "Advantage: A foothold in South America's EV sector. " +
      "Financials & Valuation:" +
      "Revenue: INR 1B" +
      "Gross Margin: 30%" +
      "Net Margin: 10%" +
      "Valuation: INR 5B" +
      "Shareholder Structure: Private company, 70% held by venture capitalists. " +
      " " + "Gaining a foothold in South America, which could boost MAI's revenues by 5% within two years. " + " " +
      "8 (Gateway to South American market) " + " " +
      "Annual revenue increase of INR 50M from the South American sector. " + " " +
      "5 (Diverse cultural and operational practices might be challenging) " + " " +
      this.responseresultcm.x13 + " " + this.responseresultcm.y13 + " " + this.responseresultcm.z13 +

      "\n" + this.responseresultcm.r14 + " " + "Profile:   Develops innovative fast-charging stations with AI capabilities for predictive maintenance. " +
      "Advantage: Revolutionary charging solutions that can be deployed globally. " +
      "Financials & Valuation:" +
      "Revenue: INR 750M" +
      "Gross Margin: 45%" +
      "Net Margin: 20%" +
      "Valuation: INR 4B" +
      "Shareholder Structure: Privately owned with 50% by founders, and 50% by angel investors. " +
      " " + "Enhancing MAI's charging infrastructure, leading to better customer satisfaction and potentially increasing sales by 7%. " + " " +
      "7 (Enhances the customer experience) " + " " +
      "Annual revenue boost of INR 70M from increased EV sales due to better charging infrastructure. " + " " +
      "8 (Both companies are tech-forward and customer-centric) " + " " +
      this.responseresultcm.x14 + " " + this.responseresultcm.y14 + " " + this.responseresultcm.z14 +

      "\n" + this.responseresultcm.r15 + " " + "Profile:  Pioneer in AI-driven sustainable solutions for EVs, including smart energy consumption. " +
      "Advantage:  Boosts vehicle efficiency by up to 20%. " +
      "Financials & Valuation:" +
      " Revenue: INR 500M" +
      "Gross Margin: 40%" +
      "Net Margin: 18%" +
      "Valuation: INR 3B" +
      "Shareholder Structure: Privately owned, major stakes held by tech magnates. " +
      " " + "AI-driven solutions can upgrade MAI's fleet, making them smarter and more energy-efficient, increasing" +
      "brand value and potentially boosting sales by 6%. " + " " +
      "8 (Tech enhancements for MAI's fleet) " + " " +
      "Annual revenue increase of INR 60M from the sales of smarter vehicles. " + " " +
      "9 (Both companies have a strong focus on innovation) " + " " +
      this.responseresultcm.x15 + " " + this.responseresultcm.y15 + " " + this.responseresultcm.z15 +

      "\n" + this.responseresultcm.r16 + " " + "Profile: Develops nanotechnology solutions for EV batteries, increasing their lifespan. " +
      "Advantage:  Batteries that last 2x longer than average. " +
      "Financials & Valuation:" +
      "Revenue: INR 300M" +
      "Gross Margin: 50%" +
      " Net Margin: 25 %" +
      "Valuation: INR 1.5B" +
      "Shareholder Structure: Private company, 80% owned by a consortium of scientists. " +
      " " + "Nanotech solutions will prolong battery lifespans, offering MAI a unique selling proposition and potentially increasing sales by 4%. " + " " +
      "7 (Unique tech proposition for MAI) " + " " +
      "Annual revenue boost of INR 40M from sales of vehicles with longer battery lifespans. " + " " +
      "8 (Shared vision for cutting-edge technologies) " + " " +
      this.responseresultcm.x16 + " " + this.responseresultcm.y16 + " " + this.responseresultcm.z16 +

      "\n\n" + "  " + "BatteryTech Solutions" + " " + "EfficientManufacture Corp." + " " + "ElectroMetals Ltd." + " " + "GreenLogistics Co." + " " + "RapidDrive Inc." + " " + "EcoVehicles Plc." + " " + "AutoExpand Ltd." + " " + "Chargify Technologies" + " " + "EcoAI Innovations" + " " + "NanoDrive Systems" +
      "\n" + this.responseresultcm.ab7 + " " + this.responseresultcm.ac7 + " " + this.responseresultcm.ad7 + " " + this.responseresultcm.ae7 + " " + this.responseresultcm.af7 + " " + this.responseresultcm.ag7 + " " + this.responseresultcm.ah7 + " " + this.responseresultcm.ai7 + " " + this.responseresultcm.aj7 + " " + this.responseresultcm.ak7 + " " + this.responseresultcm.al7 +
      "\n" + this.responseresultcm.ab8 + " " + this.responseresultcm.ac8 + " " + this.responseresultcm.ad8 + " " + this.responseresultcm.ae8 + " " + this.responseresultcm.af8 + " " + this.responseresultcm.ag8 + " " + this.responseresultcm.ah8 + " " + this.responseresultcm.ai8 + " " + this.responseresultcm.aj8 + " " + this.responseresultcm.ak8 + " " + this.responseresultcm.al8 +
      "\n" + this.responseresultcm.ab9 + " " + this.responseresultcm.ac9 + " " + this.responseresultcm.ad9 + " " + this.responseresultcm.ae9 + " " + this.responseresultcm.af9 + " " + this.responseresultcm.ag9 + " " + this.responseresultcm.ah9 + " " + this.responseresultcm.ai9 + " " + this.responseresultcm.aj9 + " " + this.responseresultcm.ak9 + " " + this.responseresultcm.al9 +
      "\n" + this.responseresultcm.ab10 + " " + this.responseresultcm.ac10 + " " + this.responseresultcm.ad10 + " " + this.responseresultcm.ae10 + " " + this.responseresultcm.af10 + " " + this.responseresultcm.ag10 + " " + this.responseresultcm.ah10 + " " + this.responseresultcm.ai10 + " " + this.responseresultcm.aj10 + " " + this.responseresultcm.ak10 + " " + this.responseresultcm.al10 +
      "\n\n" + this.responseresultcm.ab12 + " " + this.responseresultcm.ac12 + " " + this.responseresultcm.ad12 + " " + this.responseresultcm.ae12 + " " + this.responseresultcm.af12 + " " + this.responseresultcm.ag12 + " " + this.responseresultcm.ah12 + " " + this.responseresultcm.ai12 + " " + this.responseresultcm.aj12 + " " + this.responseresultcm.ak12 + " " + this.responseresultcm.al12 +
      "\n" + this.responseresultcm.ab13 + " " + this.responseresultcm.ac13 + " " + this.responseresultcm.ad13 + " " + this.responseresultcm.ae13 + " " + this.responseresultcm.af13 + " " + this.responseresultcm.ag13 + " " + this.responseresultcm.ah13 + " " + this.responseresultcm.ai13 + " " + this.responseresultcm.aj13 + " " + this.responseresultcm.ak13 + " " + this.responseresultcm.al13 +
      "\n" + this.responseresultcm.ab14 + " " + this.responseresultcm.ac14 + " " + this.responseresultcm.ad14 + " " + this.responseresultcm.ae14 + " " + this.responseresultcm.af14 + " " + this.responseresultcm.ag14 + " " + this.responseresultcm.ah14 + " " + this.responseresultcm.ai14 + " " + this.responseresultcm.aj14 + " " + this.responseresultcm.ak14 + " " + this.responseresultcm.al14 +
      "\n\n" + this.responseresultcm.ab16 + " " + this.responseresultcm.ac16 + " " + this.responseresultcm.ad16 + " " + this.responseresultcm.ae16 + " " + this.responseresultcm.af16 + " " + this.responseresultcm.ag16 + " " + this.responseresultcm.ah16 + " " + this.responseresultcm.ai16 + " " + this.responseresultcm.aj16 + " " + this.responseresultcm.ak16 + " " + this.responseresultcm.al16 +
      "\n" + this.responseresultcm.ab17 + " " + this.responseresultcm.ac17 + " " + this.responseresultcm.ad17 + " " + this.responseresultcm.ae17 + " " + this.responseresultcm.af17 + " " + this.responseresultcm.ag17 + " " + this.responseresultcm.ah17 + " " + this.responseresultcm.ai17 + " " + this.responseresultcm.aj17 + " " + this.responseresultcm.ak17 + " " + this.responseresultcm.al17 +
      "\n" + this.responseresultcm.ab18 + " " + this.responseresultcm.ac18 + " " + this.responseresultcm.ad18 + " " + this.responseresultcm.ae18 + " " + this.responseresultcm.af18 + " " + this.responseresultcm.ag18 + " " + this.responseresultcm.ah18 + " " + this.responseresultcm.ai18 + " " + this.responseresultcm.aj18 + " " + this.responseresultcm.ak18 + " " + this.responseresultcm.al18 +
      "\n" + this.responseresultcm.ab19 + " " + this.responseresultcm.ac19 + " " + this.responseresultcm.ad19 + " " + this.responseresultcm.ae19 + " " + this.responseresultcm.af19 + " " + this.responseresultcm.ag19 + " " + this.responseresultcm.ah19 + " " + this.responseresultcm.ai19 + " " + this.responseresultcm.aj19 + " " + this.responseresultcm.ak19 + " " + this.responseresultcm.al19 +
      "\n" + this.responseresultcm.ab20 + " " + this.responseresultcm.ac20 + " " + this.responseresultcm.ad20 + " " + this.responseresultcm.ae20 + " " + this.responseresultcm.af20 + " " + this.responseresultcm.ag20 + " " + this.responseresultcm.ah20 + " " + this.responseresultcm.ai20 + " " + this.responseresultcm.aj20 + " " + this.responseresultcm.ak20 + " " + this.responseresultcm.al20 +
      "\n" + this.responseresultcm.ab21 + " " + this.responseresultcm.ac21 + " " + this.responseresultcm.ad21 + " " + this.responseresultcm.ae21 + " " + this.responseresultcm.af21 + " " + this.responseresultcm.ag21 + " " + this.responseresultcm.ah21 + " " + this.responseresultcm.ai21 + " " + this.responseresultcm.aj21 + " " + this.responseresultcm.ak21 + " " + this.responseresultcm.al21 +
      "\nShareholder Structure Implication " + " " + "Since 60% of the shares are held by founders and 40% by private " +
      "equity firms, any major decisions (such as raising more equity or a potential sale of the company) would need the " +
      "consensus of both these stakeholders. Private equity firms often look for exit strategies in the medium term, so " +
      "their interest would align with actions that increase the company's value in the foreseeable future. " + " " +
      "Being a publicly listed company on the BSE, EfficientManufacture Corp. will be subject to stringent disclosure " +
      "requirements and would be influenced by the dynamics of public shareholders. Decisions related to financial " +
      "structuring, mergers, or other major corporate movements would need to be communicated transparently and would " +
      "be influenced by institutional investors, retail shareholders, and market sentiments. " + " " +
      "Being a publicly listed company with diversified ownership, ElectroMetals Ltd. would be driven by the interests " +
      "of a broad spectrum of shareholders, ranging from institutional to retail. Major corporate decisions would likely " +
      "require a comprehensive stakeholder communication strategy, ensuring transparency and alignment with the diversified " +
      "shareholders' interests. This structure may allow the company a bit more flexibility in decision-making compared to " +
      "companies dominated by a few large shareholders." + " " +
      "Being privately held and majority-owned by the founding family suggests that the company might lean towards a more " +
      "conservative approach in terms of investments and expansion. The founding family would be interested in maintaining " +
      "the company's reputation and ensuring long-term sustainability. " + " " +
      "Being a publicly listed company with diversified ownership, RapidDrive Inc. would be influenced by a broader array " +
      "of investors ranging from institutional giants to individual retail shareholders. As the company is in the EV " +
      "domain and rapidly growing, the shareholder base might be more receptive to risks, technological advancements, " +
      "and capital expenditures to fund expansion and innovation." + " " +
      "Being a publicly listed company on the LSE, EcoVehicles Plc. will have stringent governance and transparency " +
      "requirements. The shareholder base, given its public nature, would expect consistent dividends and growth, and " +
      "would be sensitive to the company's strategic moves in the evolving EV market." + " " +
      "Given that 70% of the company is held by venture capitalists (VCs), there will be a strong focus on growth and " +
      "potentially an exit strategy in the medium term. VCs typically seek rapid growth and market dominance, so they " +
      "would likely be in favor of aggressive investment strategies, technological advancements, and potential mergers " +
      "or acquisitions to speed up market penetration. The company might also be more open to external financing rounds " +
      "to fund its expansion." + " " +
      "With an equal split between founders and angel investors, Chargify Technologies would benefit from the strategic " +
      "insights and networks of the angels while still maintaining a strong influence from its founders. Decisions would " +
      "be a balance between the growth-centric approach of angel investors and the vision and direction set by the " +
      "founders. The angel investors would likely be keen on scaling up operations and potentially exploring strategic " +
      "partnerships or even exits in the medium to long term." + " " +
      "With major stakes held by tech magnates, there would be a significant influence of these industry leaders on " +
      "company decisions. Their extensive networks, resources, and experience would benefit the company, but they would " +
      "also expect high returns on their investments. As such, the company may pursue aggressive growth strategies and " +
      "may be more open to partnerships, collaborations, or acquisitions that align with the vision of these tech leaders. " + " " +
      "Being 80% owned by a consortium of scientists, the company would likely prioritize long-term research and " +
      "innovative breakthroughs over short-term profits. The decision-making would be heavily influenced by the " +
      "scientific viability and transformative potential of projects. This structure suggests a company that is " +
      "deeply invested in technological advancement, with a patient and methodological approach to growth and innovation. " +
      "\n\nCompanies " + " " + "Shareholder's Comment" + " " + "Likelihood of Approval" +
      "\n" + this.responseresultcm.ab25 + " " + "Strategic Alignment: The acquisition fits perfectly within MAI's " +
      "objective to lead in the EV segment. Owning a company specializing in EV batteries can lead to cost savings, " +
      "innovation acceleration, and potentially superior product offerings. " +
      "Financial Feasibility: The price is high.While cash can cover a minor portion, MAI would heavily rely on debt: " +
      "and equity financing.This raises concerns about leverage and potential dilution of shareholder value. " +
      "Risk Assessment: Integration risk might be minimal due to complementary business models, but there could be " +
      "technological obsolescence risks in the rapidly evolving battery space. " +
      "Potential Returns: Owning a core component of EVs(batteries) might lead to higher margins on EV sales and a " +
      "competitive advantage in the market." + " " + this.responseresultcm.ad25 +

      "\n" + this.responseresultcm.ab26 + " " + "Strategic Alignment: While not directly linked to MAI's core business, " +
      "operational efficiencies can lead to cost savings and faster time-to-market, giving a competitive edge. " +
      "Financial Feasibility: The acquisition is expensive, and financing it would demand a considerable mix of debt " +
      "and equity. " +
      "Risk Assessment: Integrating manufacturing processes can be complex and time - consuming.Expected efficiencies " +
      "might take time to realize. " +
      "Potential Returns: Streamlined operations could improve profit margins and potentially enhance product quality." +
      " " + this.responseresultcm.ad26 +

      "\n" + this.responseresultcm.ab27 + " " + "Strategic Alignment: Securing a steady supply of vital metals can " +
      "stabilize the supply chain and potentially lead to cost savings. " +
      "Financial Feasibility: The asking price is steep, making this acquisition a significant financial commitment. " +
      "Risk Assessment: Fluctuations in metal prices and geopolitical risks associated with mining can affect profitability. " +
      "Potential Returns: Cost savings from direct sourcing and potential for forward integration. " +
      " " + this.responseresultcm.ad27 +

      "\n" + this.responseresultcm.ab28 + " " + "Strategic Alignment: Optimizing logistics can improve MAI's supply " +
      "chain efficiency and reduce delivery times. " +
      "Financial Feasibility: The acquisition is relatively affordable, but still requires substantial debt " +
      "or equity financing. " +
      "Risk Assessment: Logistics integration might pose challenges initially, but the long - term benefits " +
      "can outweigh the integration pains. " +
      "Potential Returns: Cost savings in logistics, improved delivery times leading to customer satisfaction, " +
      "and potential new revenue streams. " +
      " " + this.responseresultcm.ad28 +

      "\n" + this.responseresultcm.ab29 + " " + "Strategic Alignment: Southeast Asia is an emerging market with a " +
      "massive potential customer base. Acquiring a local player can provide instant market access. " +
      "Financial Feasibility: The price is exorbitant, requiring significant financing, likely leading to high debt " +
      "levels and substantial equity dilution. " +
      "Risk Assessment: Integration of different market dynamics, customer preferences, and potential cultural " +
      "differences can pose challenges. " +
      "Potential Returns: High growth potential, diversified revenue streams, and potential economies of scale. " +
      " " + this.responseresultcm.ad29 +

      "\n" + this.responseresultcm.ab30 + " " + "Strategic Alignment: Entry into Europe can diversify revenue streams " +
      "and increase global market share. " +
      "Financial Feasibility: The price is exorbitant, requiring significant financing, likely leading to high debt " +
      "levels and substantial equity dilution. " +
      "Risk Assessment: Europe has stringent regulations, and understanding the market dynamics can be challenging. " +
      "Potential Returns: Access to a mature market with potential high - value customers and diversification benefits. " +
      " " + this.responseresultcm.ad30 +

      "\n" + this.responseresultcm.ab31 + " " + "Strategic Alignment: South America offers a growing market. Expansion " +
      "aligns with MAI's global growth ambitions. " +
      "Financial Feasibility: The price is moderate, but still requires a balanced mix of debt and equity. " +
      "Risk Assessment: Navigating a new market, understanding local preferences, and potential geopolitical risks. " +
      "Potential Returns: Growth potential in an emerging market and first - mover advantage if executed well. " +
      " " + this.responseresultcm.ad31 +

      "\n" + this.responseresultcm.ab32 + " " + "Strategic Alignment: Enhancing the EV charging infrastructure can boost " +
      "EV sales and improve customer experience. " +
      "Financial Feasibility: More affordable than some other options, but still requires debt or equity financing. " +
      "Risk Assessment: Technological obsolescence risks and competition from other charging solutions. " +
      "Potential Returns: Direct revenues from charging infrastructure and indirect boost to EV sales. " +
      " " + this.responseresultcm.ad32 +

      "\n" + this.responseresultcm.ab33 + " " + "Strategic Alignment: AI enhancements align with the global trend " +
      "of smart, connected vehicles. " +
      "Financial Feasibility: Reasonably priced, allowing for a balanced financing mix. " +
      "Risk Assessment: Integrating AI solutions into existing product lines might pose initial challenges. " +
      "Potential Returns: Sales boost from advanced vehicle features, potential new revenue streams from " +
      "AI - driven services. " + " " + this.responseresultcm.ad33 +

      "\n" + this.responseresultcm.ab34 + " " + "Strategic Alignment: Extending battery life aligns directly with EV " +
      "market demands. " +
      "Financial Feasibility: The acquisition is affordable, reducing the financial burden. " +
      "Risk Assessment: Ensuring the tech is scalable and can be integrated into MAI's existing product line. " +
      "Potential Returns: Enhanced product offerings leading to increased sales and customer loyalty. " +
      " " + this.responseresultcm.ad34 +
      "\n\nLikelihood Curve" +
      "\n" + "  " + this.responseresultcm.ac37 + " " + this.responseresultcm.ad37 +
      "\n" + this.responseresultcm.ab38 + "   " + this.responseresultcm.ac38 + " " + this.responseresultcm.ad38 +
      "\n" + this.responseresultcm.ab39 + "   " + this.responseresultcm.ac39 + " " + this.responseresultcm.ad39 +
      "\n" + this.responseresultcm.ab40 + "   " + this.responseresultcm.ac40 + " " + this.responseresultcm.ad40 +
      "\n\nDebt-Interest Rate Curve" +
      "\n" + this.responseresultcm.an14 + " " + this.responseresultcm.ao14 +
      "\n" + this.responseresultcm.an15 + " " + this.responseresultcm.ao15 +
      "\n" + this.responseresultcm.an16 + " " + this.responseresultcm.ao16 +
      "\n" + this.responseresultcm.an17 + " " + this.responseresultcm.ao17 +
      "\n\n" + this.responseresultcm.an19 + " " + this.responseresultcm.ao19 +


      "\n\nInput" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Target Firm" + " " + this.result[0] +
      "\n" + "Premium %, over current valuation" + " " + this.result[1] +
      "\n" + "Cash Financing offered price" + " " + this.result[2] +
      "\n" + "Loans Financing as offered price" + " " + this.result[3] +
      "\n" + "Stock Financing as offered price" + " " + this.result[4] +


      "\n\n" + "Output" +
      "\nTarget" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Profile" + " " + this.responseresultdatabase.j24 +
      "\n" + "Synergy Benefits" + " " + this.responseresultdatabase.f24 +
      "\n" + "Expected Financial Benefit" + " " + this.responseresultdatabase.h24 +
      "\n" + "Strategic Importance, Max 10" + " " + this.responseresultdatabase.g24 +
      "\n" + "Cultural Integration Ease, Max 10" + " " + this.responseresultdatabase.i24 +
      "\n\n" + "Earned Value" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "BID Price, INR million" + " " + this.responseresultdatabase.c29 +
      "\n" + "ASK - BID Spread, INR million" + " " + this.responseresultdatabase.h29 +
      "\n" + "Offer Status" + " " + this.responseresultdatabase.g28 +
      "\n\n" + "Proposed Structure" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Cash, INR million" + " " + this.responseresultdatabase.c35 +
      "\n" + "Loan, INR million" + " " + this.responseresultdatabase.c36 +
      "\n" + "Stock, INR million" + " " + this.responseresultdatabase.c37 +
      "\n" + "Target Stake" + " " + this.responseresultdatabase.f38 +
      "\n" + "MAI Stake" + " " + this.responseresultdatabase.f39 +
      "\n\n" + "Stakeholder view" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Comments" + " " + this.responseresultdatabase.k24 +
      "\n" + "Likelihood of Board Approval" + " " + this.responseresultdatabase.l24;

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
    // this.checkloading = true;
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
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(MergersacquisitionpopupComponent, {
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

  // saveDecisionChecklist() {
  //   if (this.noofattempt == "1") {
  //     if (this.foodforthoughtQNo == 8) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(MergersacquisitionpopupComponent, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
  //             kpivaluearray: this.kpivaluearray,

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
  //       const dialogRef = this.dialog.open(MergersacquisitionpopupComponent, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           kpivaluearray: this.kpivaluearray,

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


// Mergersacquisitionpopup............


@Component({
  selector: 'app-mergersacquisitionpopup',
  templateUrl: './mergersacquisitionpopup.html',
  styleUrls: ['./mergersacquisitiondecisionchecklist.component.scss']
})
export class MergersacquisitionpopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MergersacquisitionpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/mergersacquisition/singleinputmergersacquisition';
    let decisionsubmitData = {
      "ac30": "yes"
    }
    this._api.mergerAcquisitionDataWrite("mergersacquisition", 1,
      decisionsubmitData, apiname, 'mergersacquisitioncmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.kpivaluearray[0] == "-" ? "0" : (this.data.kpivaluearray[0]),
            this.data.kpivaluearray[1] == "-" ? "0" : (this.data.kpivaluearray[1]),
            this.data.kpivaluearray[2] == "-" ? "0" : (this.data.kpivaluearray[2]), 'update', this.noofattempt)

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

        this.driveerrorLog(error, apiname);
      })
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "mergersacquisition").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }

  async sendAssesmentValue() {
    this.checkloading = true;

    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "mergersacquisition").subscribe((data: any) => {

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