import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-orderingbasicscasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicscasefoodforthought.component.html',
  styleUrls: ['./orderingbasicscasefoodforthought.component.scss']
})
export class OrderingbasicscasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      question: ["What factor should you consider when determining the optimal ordering quantity?"],

      option: [["Current inventory level", "Lead time variability", "Sales promotion frequency"],
      ["Current inventory level", "Lead time variability", "Sales promotion frequency"]],

      feedback: [["Monitoring current inventory levels is important for inventory management, but it primarily informs reorder point decisions rather than ordering quantity. Ordering quantity is more influenced by factors like demand variability and lead time considerations.", "Correct! Lead time variability is a crucial factor to consider when determining the optimal ordering quantity. Variability in lead time affects the level of safety stock needed to prevent stockouts during longer lead times, ensuring sufficient inventory levels are maintained.", "While sales promotion frequency can impact demand fluctuations, it's not directly related to ordering quantity and reorder level decisions. These decisions are more influenced by factors like demand variability, lead time, and desired service level."],
      ["Monitoring current inventory levels is important for inventory management, but it primarily informs reorder point decisions rather than ordering quantity. Ordering quantity is more influenced by factors like demand variability and lead time considerations.", "Correct! Lead time variability is a crucial factor to consider when determining the optimal ordering quantity. Variability in lead time affects the level of safety stock needed to prevent stockouts during longer lead times, ensuring sufficient inventory levels are maintained.", "While sales promotion frequency can impact demand fluctuations, it's not directly related to ordering quantity and reorder level decisions. These decisions are more influenced by factors like demand variability, lead time, and desired service level."]],

      score: [["v7", "v8", "v9"], ["v7", "v8", "v9"]],

      rigor: [["w7", "w8", "w9"], ["w7", "w8", "w9"]],

      structuring: [["x7", "x8", "x9"], ["x7", "x8", "x9"]],

      synthesis: [["y7", "y8", "y9"], ["y7", "y8", "y9"]],

      business: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],
    },
    {
      question: ["Which metric helps measure the level of demand uncertainty?"],

      option: [["Mean demand", "Mode demand", "Standard deviation of demand"],
      ["Mean demand", "Mode demand", "Standard deviation of demand"]],

      feedback: [["Mean demand provides an average value but doesn't capture the variability or uncertainty in demand. For measuring demand uncertainty, metrics like standard deviation or variance are more appropriate.", "Mode demand represents the most frequently occurring value, but it doesn't indicate the level of demand uncertainty. Metrics like standard deviation or variance are better suited for measuring demand uncertainty.", "Correct! The standard deviation of demand quantifies the variability or uncertainty in demand. A higher standard deviation indicates greater variability in demand, which impacts inventory management decisions."],
      ["Mean demand provides an average value but doesn't capture the variability or uncertainty in demand. For measuring demand uncertainty, metrics like standard deviation or variance are more appropriate.", "Mode demand represents the most frequently occurring value, but it doesn't indicate the level of demand uncertainty. Metrics like standard deviation or variance are better suited for measuring demand uncertainty.", "Correct! The standard deviation of demand quantifies the variability or uncertainty in demand. A higher standard deviation indicates greater variability in demand, which impacts inventory management decisions."]],

      score: [["v10", "v11", "v12"], ["v10", "v11", "v12"]],

      rigor: [["w10", "w11", "w12"], ["w10", "w11", "w12"]],

      structuring: [["x10", "x11", "x12"], ["x10", "x11", "x12"]],

      synthesis: [["y10", "y11", "y12"], ["y10", "y11", "y12"]],

      business: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],
    },
    {
      question: ["When setting the reorder level, what should you take into account?"],

      option: [["Lead time variability", "Safety stock", " Historical demand"],
      ["Lead time variability", "Safety stock", " Historical demand"]],

      feedback: [["While lead time variability influences safety stock calculations and reorder point decisions, the reorder level specifically considers the desired level of inventory when an order is placed, taking into account factors like demand variability and safety stock.", "Correct! Safety stock is an essential consideration when setting the reorder level. It ensures that sufficient inventory is available to prevent stockouts during unexpected demand fluctuations or longer-than-expected lead times.", "Historical demand data can inform forecasting and inventory management decisions, but it's not directly related to setting the reorder level. The reorder level is primarily determined by factors like safety stock requirements and desired service level."],
      ["While lead time variability influences safety stock calculations and reorder point decisions, the reorder level specifically considers the desired level of inventory when an order is placed, taking into account factors like demand variability and safety stock.", "Correct! Safety stock is an essential consideration when setting the reorder level. It ensures that sufficient inventory is available to prevent stockouts during unexpected demand fluctuations or longer-than-expected lead times.", "Historical demand data can inform forecasting and inventory management decisions, but it's not directly related to setting the reorder level. The reorder level is primarily determined by factors like safety stock requirements and desired service level."]],

      score: [["v13", "v14", "v15"], ["v13", "v14", "v15"]],

      rigor: [["w13", "w14", "w15"], ["w13", "w14", "w15"]],

      structuring: [["x13", "x14", "x15"], ["x13", "x14", "x15"]],

      synthesis: [["y13", "y14", "y15"], ["y13", "y14", "y15"]],

      business: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],
    },
    {
      question: ["What does a higher service level imply?"],

      option: [["Higher ordering costs", "Lower stockout risk", "Increased backorder expenses"],
      ["Higher ordering costs", "Lower stockout risk", "Increased backorder expenses"]],

      feedback: [["While achieving a higher service level may involve additional costs, such as holding costs for maintaining higher inventory levels, it doesn't necessarily lead to higher ordering costs.", "Correct! A higher service level implies a lower risk of stockouts, as it ensures that customer demand is more consistently met without experiencing shortages or delays.", "Backorder expenses are incurred when demand exceeds available inventory, resulting in delayed fulfillment. While a higher service level aims to minimize backorders, it doesn't necessarily lead to increased backorder expenses."],
      ["While achieving a higher service level may involve additional costs, such as holding costs for maintaining higher inventory levels, it doesn't necessarily lead to higher ordering costs.", "Correct! A higher service level implies a lower risk of stockouts, as it ensures that customer demand is more consistently met without experiencing shortages or delays.", "Backorder expenses are incurred when demand exceeds available inventory, resulting in delayed fulfillment. While a higher service level aims to minimize backorders, it doesn't necessarily lead to increased backorder expenses."]],

      score: [["v16", "v17", "v18"], ["v16", "v17", "v18"]],

      rigor: [["w16", "w17", "w18"], ["w16", "w17", "w18"]],

      structuring: [["x16", "x17", "x18"], ["x16", "x17", "x18"]],

      synthesis: [["y16", "y17", "y18"], ["y16", "y17", "y18"]],

      business: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

    },
    {
      question: [" How does variability in lead time affect reorder level decisions?"],

      option: [["It decreases the reorder level", " It increases the reorder level", "It has no effect on the reorder level"],
      ["It decreases the reorder level", " It increases the reorder level", "It has no effect on the reorder level"]],

      feedback: [["Variability in lead time typically increases the reorder level rather than decreasing it. A higher variability in lead time requires a higher safety stock level to account for potential delays, thus increasing the reorder level.", "Correct! Variability in lead time increases the uncertainty of when inventory will arrive, necessitating a higher safety stock level to prevent stockouts during longer lead times. As a result, it increases the reorder level.", "Variability in lead time directly influences reorder level decisions by impacting the required safety stock level. Higher variability necessitates a higher safety stock level, thus affecting the reorder level."],
      ["Variability in lead time typically increases the reorder level rather than decreasing it. A higher variability in lead time requires a higher safety stock level to account for potential delays, thus increasing the reorder level.", "Correct! Variability in lead time increases the uncertainty of when inventory will arrive, necessitating a higher safety stock level to prevent stockouts during longer lead times. As a result, it increases the reorder level.", "Variability in lead time directly influences reorder level decisions by impacting the required safety stock level. Higher variability necessitates a higher safety stock level, thus affecting the reorder level."]],

      score: [["v19", "v20", "v21"], ["v19", "v20", "v21"]],

      rigor: [["w19", "w20", "w21"], ["w19", "w20", "w21"]],

      structuring: [["x19", "x20", "x21"], ["x19", "x20", "x21"]],

      synthesis: [["y19", "y20", "y21"], ["y19", "y20", "y21"]],

      business: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],
    },
    {
      question: ["What role does safety stock play in inventory management?"],

      option: [[" It reduces holding costs", " It prevents stockouts during unexpected demand spikes", "It increases order frequency"],
      [" It reduces holding costs", " It prevents stockouts during unexpected demand spikes", "It increases order frequency"]],

      feedback: [["While safety stock contributes to inventory holding costs, its primary role is to mitigate the risk of stockouts by providing a buffer against unexpected demand fluctuations or lead time variability.", "Correct! Safety stock acts as a buffer to prevent stockouts during unexpected demand spikes or longer-than-expected lead times, ensuring that inventory levels remain sufficient to meet customer demand.", "Safety stock doesn't directly impact order frequency but rather ensures that inventory levels remain adequate to meet demand, reducing the need for emergency or rush orders."],
      ["While safety stock contributes to inventory holding costs, its primary role is to mitigate the risk of stockouts by providing a buffer against unexpected demand fluctuations or lead time variability.", "Correct! Safety stock acts as a buffer to prevent stockouts during unexpected demand spikes or longer-than-expected lead times, ensuring that inventory levels remain sufficient to meet customer demand.", "Safety stock doesn't directly impact order frequency but rather ensures that inventory levels remain adequate to meet demand, reducing the need for emergency or rush orders."]],

      score: [["v22", "v23", "v24"], ["v22", "v23", "v24"]],

      rigor: [["w22", "w23", "w24"], ["w22", "w23", "w24"]],

      structuring: [["x22", "x23", "x24"], ["x22", "x23", "x24"]],

      synthesis: [["y22", "y23", "y24"], ["y22", "y23", "y24"]],

      business: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],
    },
    {
      question: [" How does a higher standard deviation of demand impact ordering quantity decisions?"],

      option: [[" It decreases the ordering quantity", " It increases the ordering quantity", "It has no effect on the ordering quantity"],
      [" It decreases the ordering quantity", " It increases the ordering quantity", "It has no effect on the ordering quantity"]],

      feedback: [["A higher standard deviation of demand indicates greater demand variability, which typically leads to higher safety stock levels and, consequently, higher ordering quantities to account for fluctuations in demand.", "Correct! A higher standard deviation of demand implies greater demand variability, necessitating higher safety stock levels to prevent stockouts during fluctuations. As a result, it increases the ordering quantity.", "Variability in demand directly influences the required level of safety stock, which in turn affects the ordering quantity. Therefore, a higher standard deviation of demand typically results in higher ordering quantities."],
      ["A higher standard deviation of demand indicates greater demand variability, which typically leads to higher safety stock levels and, consequently, higher ordering quantities to account for fluctuations in demand.", "Correct! A higher standard deviation of demand implies greater demand variability, necessitating higher safety stock levels to prevent stockouts during fluctuations. As a result, it increases the ordering quantity.", "Variability in demand directly influences the required level of safety stock, which in turn affects the ordering quantity. Therefore, a higher standard deviation of demand typically results in higher ordering quantities."]],

      score: [["v25", "v26", "v27"], ["v25", "v26", "v27"]],

      rigor: [["w25", "w26", "w27"], ["w25", "w26", "w27"]],

      structuring: [["x25", "x26", "x27"], ["x25", "x26", "x27"]],

      synthesis: [["y25", "y26", "y27"], ["y25", "y26", "y27"]],

      business: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],


    },
    {
      question: ["What does the mean demand represent in forecasting?"],

      option: [["Most frequently occurring demand value", "Average demand over a period", "Maximum demand observed"],
      ["Most frequently occurring demand value", "Average demand over a period", "Maximum demand observed"]],

      feedback: [["The most frequently occurring demand value is represented by the mode, not the mean. The mean demand represents the average demand over a specified period. Option B: Average demand over a period", "Correct! The mean demand represents the average demand over a specified period, providing a central tendency measure of demand behavior.", "The maximum demand observed represents the highest level of demand experienced within a given period, not the mean demand. The mean demand provides an average value over time."],
      ["The most frequently occurring demand value is represented by the mode, not the mean. The mean demand represents the average demand over a specified period. Option B: Average demand over a period", "Correct! The mean demand represents the average demand over a specified period, providing a central tendency measure of demand behavior.", "The maximum demand observed represents the highest level of demand experienced within a given period, not the mean demand. The mean demand provides an average value over time."]],

      score: [["v28", "v29", "v30"], ["v28", "v29", "v30"]],

      rigor: [["w28", "w29", "w30"], ["w28", "w29", "w30"]],

      structuring: [["x28", "x29", "x30"], ["x28", "x29", "x30"]],

      synthesis: [["y28", "y29", "y30"], ["y28", "y29", "y30"]],

      business: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],


    },
  ];
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
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
    if (getSelectTab == 'cesimcase') {
      let apiname = "/orderingbasicsmaster/fetchorderingbasicsmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
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
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/orderingbasicscm/fetchorderingbasicscm"
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
    let apiname = '/orderingbasicscm/updateorderingbasicscm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'orderingbasicscm', body, {}, apiname, 'orderingbasicscmactivestatus').subscribe(
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

  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }
}
