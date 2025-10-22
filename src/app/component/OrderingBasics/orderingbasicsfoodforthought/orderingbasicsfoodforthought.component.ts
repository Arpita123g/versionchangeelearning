import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-orderingbasicsfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule, FoodforthoughtComponent],
  templateUrl: './orderingbasicsfoodforthought.component.html',
  styleUrls: ['./orderingbasicsfoodforthought.component.scss']
})
export class OrderingbasicsfoodforthoughtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gamename = 'orderingbasics';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["Monitoring current inventory levels is important for inventory management, but it primarily informs reorder point decisions rather than ordering quantity. Ordering quantity is more influenced by factors like demand variability and lead time considerations.",
      "Correct! Lead time variability is a crucial factor to consider when determining the optimal ordering quantity. Variability in lead time affects the level of safety stock needed to prevent stockouts during longer lead times, ensuring sufficient inventory levels are maintained.",
      "While sales promotion frequency can impact demand fluctuations, it's not directly related to ordering quantity and reorder level decisions. These decisions are more influenced by factors like demand variability, lead time, and desired service level."],
      question: ["What factor should you consider when determining the optimal ordering quantity?",],
      option: ["Current inventory level",
       "Lead time variability", 
       "Sales promotion frequency"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae7', 'ae8', 'ae9']
    },
    {
      feedbackvalue: '',
      feedback: ["Mean demand provides an average value but doesn't capture the variability or uncertainty in demand. For measuring demand uncertainty, metrics like standard deviation or variance are more appropriate.",
      "Mode demand represents the most frequently occurring value, but it doesn't indicate the level of demand uncertainty. Metrics like standard deviation or variance are better suited for measuring demand uncertainty.",
      "Correct! The standard deviation of demand quantifies the variability or uncertainty in demand. A higher standard deviation indicates greater variability in demand, which impacts inventory management decisions."],
      question: ["Which metric helps measure the level of demand uncertainty?",],
      option: ["Mean demand",
       "Mode demand", 
       "Standard deviation of demand"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae10', 'ae11', 'ae12']
    },
    {
      feedbackvalue: '',
      feedback: ["While lead time variability influences safety stock calculations and reorder point decisions, the reorder level specifically considers the desired level of inventory when an order is placed, taking into account factors like demand variability and safety stock.",
      "Correct! Safety stock is an essential consideration when setting the reorder level. It ensures that sufficient inventory is available to prevent stockouts during unexpected demand fluctuations or longer-than-expected lead times.",
      "Historical demand data can inform forecasting and inventory management decisions, but it's not directly related to setting the reorder level. The reorder level is primarily determined by factors like safety stock requirements and desired service level."],
      question: ["When setting the reorder level, what should you take into account?",],
      option: ["Lead time variability",
       "Safety stock", 
       "Historical demand"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae13', 'ae14', 'ae15']
    },
    {
      feedbackvalue: '',
      feedback: ["While achieving a higher service level may involve additional costs, such as holding costs for maintaining higher inventory levels, it doesn't necessarily lead to higher ordering costs.",
      "Correct! A higher service level implies a lower risk of stockouts, as it ensures that customer demand is more consistently met without experiencing shortages or delays.",
      "Backorder expenses are incurred when demand exceeds available inventory, resulting in delayed fulfillment. While a higher service level aims to minimize backorders, it doesn't necessarily lead to increased backorder expenses."],
      question: ["What does a higher service level imply?",],
      option: ["Higher ordering costs",
       "Lower stockout risk", 
       "Increased backorder expenses"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae16', 'ae17', 'ae18']
    },
    {
      feedbackvalue: '',
      feedback: ["Variability in lead time typically increases the reorder level rather than decreasing it. A higher variability in lead time requires a higher safety stock level to account for potential delays, thus increasing the reorder level.",
      "Correct! Variability in lead time increases the uncertainty of when inventory will arrive, necessitating a higher safety stock level to prevent stockouts during longer lead times. As a result, it increases the reorder level.",
      "Variability in lead time directly influences reorder level decisions by impacting the required safety stock level. Higher variability necessitates a higher safety stock level, thus affecting the reorder level."],
      question: ["How does variability in lead time affect reorder level decisions?",],
      option: ["It decreases the reorder level",
       "It increases the reorder level", 
       "It has no effect on the reorder level"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae19', 'ae20', 'ae21']
    },
    {
      feedbackvalue: '',
      feedback: ["While safety stock contributes to inventory holding costs, its primary role is to mitigate the risk of stockouts by providing a buffer against unexpected demand fluctuations or lead time variability.",
      "Correct! Safety stock acts as a buffer to prevent stockouts during unexpected demand spikes or longer-than-expected lead times, ensuring that inventory levels remain sufficient to meet customer demand.",
      "Safety stock doesn't directly impact order frequency but rather ensures that inventory levels remain adequate to meet demand, reducing the need for emergency or rush orders."],
      question: ["What role does safety stock play in inventory management?",],
      option: ["It reduces holding costs",
       "It prevents stockouts during unexpected demand spikes", 
       "It increases order frequency"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae22', 'ae23', 'ae24']
    },
    {
      feedbackvalue: '',
      feedback: ["A higher standard deviation of demand indicates greater demand variability, which typically leads to higher safety stock levels and, consequently, higher ordering quantities to account for fluctuations in demand.",
      "Correct! A higher standard deviation of demand implies greater demand variability, necessitating higher safety stock levels to prevent stockouts during fluctuations. As a result, it increases the ordering quantity.",
      "Variability in demand directly influences the required level of safety stock, which in turn affects the ordering quantity. Therefore, a higher standard deviation of demand typically results in higher ordering quantities."],
      question: ["How does a higher standard deviation of demand impact ordering quantity decisions?",],
      option: ["It decreases the ordering quantity",
       "It increases the ordering quantity", 
       "It has no effect on the ordering quantity"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae25', 'ae26', 'ae27']
    },
    {
      feedbackvalue: '',
      feedback: ["The most frequently occurring demand value is represented by the mode, not the mean. The mean demand represents the average demand over a specified period. Option B: Average demand over a period",
      "Correct! The mean demand represents the average demand over a specified period, providing a central tendency measure of demand behavior.",
      "The maximum demand observed represents the highest level of demand experienced within a given period, not the mean demand. The mean demand provides an average value over time."],
      question: ["What does the mean demand represent in forecasting?",],
      option: ["Most frequently occurring demand value",
       "Average demand over a period", 
       "Maximum demand observed"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae28', 'ae29', 'ae30']
    },
    {
      feedbackvalue: '',
      feedback: ["The most frequently occurring demand value is represented by the mode, not the mean. The mean demand represents the average demand over a specified period. Option B: Average demand over a period",
      "Correct! The mean demand represents the average demand over a specified period, providing a central tendency measure of demand behavior.",
      "The maximum demand observed represents the highest level of demand experienced within a given period, not the mean demand. The mean demand provides an average value over time."],
      question: ["What does the mean demand represent in forecasting?",],
      option: ["Most frequently occurring demand value",
       "Average demand over a period", 
       "Maximum demand observed"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ae28', 'ae29', 'ae30']
    },
  ]
}
