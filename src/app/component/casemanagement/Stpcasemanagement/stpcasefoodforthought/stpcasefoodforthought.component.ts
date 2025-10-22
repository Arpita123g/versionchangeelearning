import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stpcasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpcasefoodforthought.component.html',
  styleUrls: ['./stpcasefoodforthought.component.scss']
})
export class StpcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];

  foodforthought: any = [
    {
      question: ["What is the primary goal of segmenting consumers?"],

      option: [["To simplify marketing efforts", "To tailor products and marketing to specific groups", "To reduce the overall cost of production"]],

      feedback: [["While segmentation may simplify certain aspects of marketing, its primary goal is not simplification but rather the customization of products and strategies to fit specific market needs.",
        "Correct! Segmenting consumers allows a company to tailor its products, marketing efforts, and strategies to meet the distinct needs and preferences of different market segments, enhancing effectiveness and efficiency.",
        "Segmenting the market does not directly aim to reduce production costs. It focuses more on marketing efficiency and effectiveness in addressing the needs of specific consumer groups."]],

      score: [["aw7", "aw8", "aw9"], ["aw7", "aw8", "aw9"]],

      rigor: [["ax7", "ax8", "ax9"], ["ax7", "ax8", "ax9"]],

      structuring: [["ay7", "ay8", "ay9"], ["ay7", "ay8", "ay9"]],

      synthesis: [["az7", "az8", "az9"], ["az7", "az8", "az9"]],

      business: [["ba7", "ba8", "ba9"], ["ba7", "ba8", "ba9"]],
    },
    {
      question: ["When assessing market trends, which factor is most crucial for predicting consumer behavior changes?"],

      option: [["1 Historical sales data", "Short-term profit margins", "Economic indicators"]],

      feedback: [["While historical data is important, it alone cannot predict future behavior changes without considering broader economic indicators.",
        "Short-term profit margins provide insight into current financial health but are not the most crucial for predicting future consumer behavior.",
        "Correct! Economic indicators are crucial as they provide a broader context about the economic environment affecting consumer confidence and spending habits."]],

      score: [["aw10", "aw11", "aw12"], ["aw10", "aw11", "aw12"]],

      rigor: [["ax10", "ax11", "ax12"], ["ax10", "ax11", "ax12"]],

      structuring: [["ay10", "ay11", "ay12"], ["ay10", "ay11", "ay12"]],

      synthesis: [["az10", "az11", "az12"], ["az10", "az11", "az12"]],

      business: [["ba10", "ba11", "ba12"], ["ba10", "ba11", "ba12"]],
    },
    {
      question: ["What is a common risk when setting a high initial price for a technologically innovative product?"],

      option: [["Instant market saturation", "Limiting the product’s market reach", "Decreasing operational costs"]],

      feedback: [["High prices typically prevent rapid market saturation; instead, they might slow down the adoption rate.",
        "Correct! A high initial price can limit the product's market reach by making it unaffordable for a wider audience, potentially missing out on significant market segments.",
        "High initial pricing has little direct impact on operational costs. It focuses more on recouping investment and establishing a product's premium market position."]],

      score: [["aw13", "aw14", "aw15"], ["aw13", "aw14", "aw15"]],

      rigor: [["ax13", "ax14", "ax15"], ["ax13", "ax14", "ax15"]],

      structuring: [["ay13", "ay14", "ay15"], ["ay13", "ay14", "ay15"]],

      synthesis: [["az13", "az14", "az15"], ["az13", "az14", "az15"]],

      business: [["ba13", "ba14", "ba15"], ["ba13", "ba14", "ba15"]],
    },
    {
      question: ["Why is it important to consider the price elasticity of demand in a pricing strategy?"],

      option: [["It helps determine the optimal inventory level", "It predicts how quantity demanded will respond to price changes", "It directly increases the product's value perception"]],

      feedback: [["While important, inventory levels are more closely tied to supply chain management than directly to price elasticity.",
        "Correct! Understanding price elasticity helps predict consumer response to price changes, crucial for setting effective pricing strategies.",
        "Price elasticity doesn't increase value perception; rather, it informs how price changes might affect sales volume and revenue."]],

      score: [["aw16", "aw17", "aw18"], ["aw16", "aw17", "aw18"]],

      rigor: [["ax16", "ax17", "ax18"], ["ax16", "ax17", "ax18"]],

      structuring: [["ay16", "ay17", "ay18"], ["ay16", "ay17", "ay18"]],

      synthesis: [["az16", "az17", "az18"], ["az16", "az17", "az18"]],

      business: [["ba16", "ba17", "ba18"], ["ba16", "ba17", "ba18"]],
    },
    {
      question: ["In a competitive market, what strategic advantage does analyzing competitors' financial statements provide?"],

      option: [["Helps set industry benchmarks", "Assists in regulatory compliance", "Guarantees higher profits"]],

      feedback: [["Correct! Analyzing competitors' financials helps set benchmarks and understand industry standards, which is crucial for strategic positioning and operational planning.",
        "While compliance is important, it’s not directly influenced by competitors’ financial statements.",
        "Analyzing financial statements doesn’t guarantee higher profits; it aids in strategic decision-making."]],

      score: [["aw19", "aw20", "aw21"], ["aw19", "aw20", "aw21"]],

      rigor: [["ax19", "ax20", "ax21"], ["ax19", "ax20", "ax21"]],

      structuring: [["ay19", "ay20", "ay21"], ["ay19", "ay20", "ay21"]],

      synthesis: [["az19", "az20", "az21"], ["az19", "az20", "az21"]],

      business: [["ba19", "ba20", "ba21"], ["ba19", "ba20", "ba21"]],
    },
    {
      question: ["How does the concept of 'first-mover advantage' potentially benefit a company?"],

      option: [[" By ensuring long-term customer loyalty", "By automatically increasing market share", "By granting permanent exclusivity in technology"]],

      feedback: [["Correct! Being the first to market can secure long-term customer loyalty if the product meets consumer needs effectively.",
        "Market share increase is not automatic; it depends on continued strategic marketing and product excellence.",
        "No exclusivity is permanent; competitors may innovate or imitate, potentially capturing market share later."]],

      score: [["aw22", "aw23", "aw24"], ["aw22", "aw23", "aw24"]],

      rigor: [["ax22", "ax23", "ax24"], ["ax22", "ax23", "ax24"]],

      structuring: [["ay22", "ay23", "ay24"], ["ay22", "ay23", "ay24"]],

      synthesis: [["az22", "az23", "az24"], ["az22", "az23", "az24"]],

      business: [["ba22", "ba23", "ba24"], ["ba22", "ba23", "ba24"]],
    },
    {
      question: ["What is a potential downside of using aggressive promotional tactics in market segments with high competition?"],

      option: [["It can sharply increase the market size", "It may lead to diminishing returns due to ad saturation", "It ensures product differentiation"]],

      feedback: [["While aggressive promotion might increase visibility, it doesn’t necessarily increase the overall market size.",
        "Correct! Over-saturation of advertisements can lead to diminishing returns as the effectiveness of additional spending decreases.",
        "Aggressive promotion doesn’t ensure differentiation; rather, it might make products seem too common or desperate."]],

      score: [["aw25", "aw26", "aw27"], ["aw25", "aw26", "aw27"]],

      rigor: [["ax25", "ax26", "ax27"], ["ax25", "ax26", "ax27"]],

      structuring: [["ay25", "ay26", "ay27"], ["ay25", "ay26", "ay27"]],

      synthesis: [["az25", "az26", "az27"], ["az25", "az26", "az27"]],

      business: [["ba25", "ba26", "ba27"], ["ba25", "ba26", "ba27"]],
    },
    {
      question: ["Why would a company choose to implement an in-house recycling program?"],

      option: [["To comply with global operational standards", " To enhance brand image and appeal to socially conscious consumers", " To simplify product distribution"]],

      feedback: [["While compliance is a factor, it's not the primary driver for in-house recycling.",
        "Correct! Implementing an in-house recycling program can significantly enhance a brand's image and appeal to consumers who value environmental responsibility.",
        "Recycling programs do not typically impact distribution logistics directly."]],

      score: [["aw28", "aw29", "aw30"], ["aw28", "aw29", "aw30"]],

      rigor: [["ax28", "ax29", "ax30"], ["ax28", "ax29", "ax30"]],

      structuring: [["ay28", "ay29", "ay30"], ["ay28", "ay29", "ay30"]],

      synthesis: [["az28", "az29", "az30"], ["az28", "az29", "az30"]],

      business: [["ba28", "ba29", "ba30"], ["ba28", "ba29", "ba30"]],
    },
    {
      question: ["When launching a new product, why is it critical to align the launch timing with market readiness?"],

      option: [["To ensure the technology is outdated", "To maximize impact and adoption rate", "To minimize employee training needs"]],

      feedback: [["The goal is to ensure the technology is cutting-edge, not outdated.",
        "Correct! Properly timing a product launch to coincide with market readiness maximizes the impact and adoption rate, ensuring optimal market penetration.",
        "While training is important, it's not the primary reason for aligning launch timing with market readiness."]],

      score: [["aw31", "aw32", "aw33"], ["aw31", "aw32", "aw33"]],

      rigor: [["ax31", "ax32", "ax33"], ["ax31", "ax32", "ax33"]],

      structuring: [["ay31", "ay32", "ay33"], ["ay31", "ay32", "ay33"]],

      synthesis: [["az31", "az32", "az33"], ["az31", "az32", "az33"]],

      business: [["ba31", "ba32", "ba33"], ["ba31", "ba32", "ba33"]],
    },
    {
      question: ["When choosing packaging for a new environmentally friendly product, which consideration is most important to align with the socially conscious consumer segment?"],

      option: [["Choosing the cheapest available packaging option to minimize costs", "Using sustainable materials even if they are more expensive", " Prioritizing aesthetics over sustainability to attract more consumers"]],

      feedback: [["While minimizing costs is important, for environmentally friendly products, it is crucial to prioritize sustainable practices to align with the expectations of socially conscious consumers.",
        "Correct! Socially conscious consumers value sustainability, often willing to pay a premium for products that align with their environmental concerns. Choosing sustainable packaging materials can strengthen brand loyalty and market position within this segment.",
        "Although aesthetics are important, they should not overshadow sustainability for environmentally friendly products, especially when targeting socially conscious consumers who prioritize ethical considerations over visual appeal."]],

      score: [["aw34", "aw35", "aw36"], ["aw34", "aw35", "aw36"]],

      rigor: [["ax34", "ax35", "ax36"], ["ax34", "ax35", "ax36"]],

      structuring: [["ay34", "ay35", "ay36"], ["ay34", "ay35", "ay36"]],

      synthesis: [["az34", "az35", "az36"], ["az34", "az35", "az36"]],

      business: [["ba34", "ba35", "ba36"], ["ba34", "ba35", "ba36"]],
    },
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
  }
  getFetchData() {
    //***********it will be uncommitted*******************/

    
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/stpgamemaster/fetchstpgamemaster";
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                  }
                }
  
              }
  
            }
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/stpgamecm/fetchstpgamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                  }
                }
  
              }
  
            }
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } 

  }

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/stpgamecm/updatestpgamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'stpgamecm', body, {}, apiname, 'stpgamecmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }

}
