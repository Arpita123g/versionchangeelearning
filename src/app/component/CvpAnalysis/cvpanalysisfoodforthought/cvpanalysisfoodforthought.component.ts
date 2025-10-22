import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-cvpanalysisfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './cvpanalysisfoodforthought.component.html',
  styleUrls: ['./cvpanalysisfoodforthought.component.scss']
})
export class CvpanalysisfoodforthoughtComponent implements OnInit {

  gamename = 'cvpanalysis';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['This option overlooks the importance of considering current market conditions and production capacity when estimating sales. A holistic approach involves evaluating both historical performance and existing factors influencing demand.',
        'Well done! Taking into account historical performance, current market growth, and production capacity ensures a more accurate and comprehensive sales forecast.',
        'While market growth is a crucial factor, relying solely on it may lead to an incomplete sales forecast. Its important to consider multiple factors for a robust estimation'],
      question: [' What factors should you consider when estimating sales forecast?',],
      option: ['Only past company performance',
        "Past company performance, current market growth, and production capacity",
        " Only market growth"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t5', 't6', 't7']
    },
    {
      feedbackvalue: '',
      feedback: ['While meeting consumer demand is vital, a successful pricing strategy also involves maximizing profit margin. Consideration of both factors ensures competitiveness and profitability.',
        'Correct! Balancing profit margin and consumer demand is key to setting a pricing strategy that is both competitive and profitable.',
        'Focusing solely on competitive pricing may neglect the importance of maintaining a healthy profit margin. A holistic approach involves considering both competitiveness and profitability.'],
      question: ["When setting a pricing strategy, what should you balance to maximize profit?",],
      option: ["Only meeting consumer demand",
        "Maximizing profit margin and meeting consumer demand",
        "Only competitive pricing"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t8', 't9', 't10']
    },
    {
      feedbackvalue: '',
      feedback: ['You are oversimplifing the decision-making process. Its essential to balance advertising, quality, and pricing based on the importance assigned to each factor by consumers.',
        'While equality may seem fair, the consumer preference graph indicates varying importance. A balanced approach considers the assigned importance of each factor.',
        'Perfect! Aligning your strategy with consumer preferences involves considering the assigned importance to advertising, quality, and pricing.'],
      question: [" According to the demand factor graph, what should you optimize for when deciding the balance between advertising, quality, and pricing?",],
      option: ["Only advertising",
        " Equal importance to all factors",
        " Balance based on the importance assigned to each factor"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t11', 't12', 't13']
    },
    {
      feedbackvalue: '',
      feedback: ['Allocating the entire revenue might not be practical. Its essential to consider the impact of advertising on brand visibility and customer attraction for effective budgeting.',
        'You are assuming a uniform impact of advertising, which may not be accurate. Consider determining the budget based on the specific impact on brand visibility and customer attraction.',
        'Well thought out! Considering the specific impact of advertising on brand visibility and customer attraction allows for a more effective budgeting strategy.'],
      question: ["How should you determine the advertising budget based on forecasted revenue?",],
      option: ["Allocate the entire forecasted revenue",
        "Allocate a fixed percentage of forecasted revenue",
        "Determine based on the impact of advertising on brand visibility and customer attraction"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t14', 't15', 't16']
    },
    {
      feedbackvalue: '',
      feedback: ['While cost efficiency is essential, minimizing quality spending may compromise product quality and customer satisfaction, negatively affecting EBITDA.',
        'You are overlooking the potential positive impact of optimizing quality spending on EBITDA. Quality optimization contributes to profitability and customer satisfaction.',
        'Absolutely correct! Optimizing quality spending contributes to enhanced profitability and meets customer expectations, positively impacting EBITDA.'],
      question: ["How can optimizing the quality budget contribute to product-level EBITDA?",],
      option: ["By minimizing quality spending",
        "No impact on EBITDA",
        "By enhancing profitability and meeting customer expectations"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t17', 't18', 't19']
    },
    {
      feedbackvalue: '',
      feedback: ['Focusing solely on short-term stability may hinder long-term growth opportunities. Its crucial to balance both short-term and long-term considerations.',
        'While long-term growth is important, it should be pursued without compromising short-term financial stability. A balanced approach considers both aspects.',
        'Exactly! Striking a balance between long-term growth and short-term stability ensures sustainable development and financial health.'],
      question: ["When deciding on machinery investment, what should be the focus for long-term growth without compromising short-term financial stability?",],
      option: ["Only short-term financial stability",
        "Only long-term growth",
        "Balancing long-term growth without compromising short-term financial stability"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t20', 't21', 't22']
    },
    {
      feedbackvalue: '',
      feedback: ['While preventing stock-outs is crucial, its equally important to minimize excess stock. A balanced approach ensures efficient production and meets market demand.',
        'Minimizing excess stock is essential, but preventing stock-outs is equally vital for customer satisfaction. Balancing both aspects is key.',
        'Well done! Striking a balance between preventing stock-outs and minimizing excess stock ensures optimal inventory management and efficient production.'],
      question: ["How can you optimize capacity allocation to prevent stock-outs while minimizing excess stock?",],
      option: ["Only focus on preventing stock-outs",
        "Only focus on minimizing excess stock",
        "Strike a balance between preventing stock-outs and minimizing excess stock"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t23', 't24', 't25']
    },
    {
      feedbackvalue: '',
      feedback: ['Considering only market demand might lead to stock-outs or excess stock. Its crucial to consider the impact on costs and customer satisfaction for effective inventory management.',
        'While production efficiency is important, managing inventory involves broader considerations. Its crucial to consider the impact on costs and customer satisfaction.',
        'Absolutely correct! Managing inventory levels involves considering the impact on costs and customer satisfaction for efficient and customer-centric inventory management.'],
      question: ["What should be considered when managing inventory levels to minimize excess stock?",],
      option: ["Only market demand",
        "Only production efficiency",
        "Consider the impact on costs and customer satisfaction"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t26', 't27', 't28']
    },
    {
      feedbackvalue: '',
      feedback: ['Considering only market demand might lead to stock-outs or excess stock. Its crucial to consider the impact on costs and customer satisfaction for effective inventory management.',
        'While production efficiency is important, managing inventory involves broader considerations. Its crucial to consider the impact on costs and customer satisfaction.',
        'Absolutely correct! Managing inventory levels involves considering the impact on costs and customer satisfaction for efficient and customer-centric inventory management.'],
      question: ["What should be considered when managing inventory levels to minimize excess stock?",],
      option: ["Only market demand",
        "Only production efficiency",
        "Consider the impact on costs and customer satisfaction"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['t26', 't27', 't28']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
