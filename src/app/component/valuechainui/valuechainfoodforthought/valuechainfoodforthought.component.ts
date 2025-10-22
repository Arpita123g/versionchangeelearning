import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-valuechainfoodforthought',
  standalone: true,
  imports: [CommonModule, FoodforthoughtComponent],
  templateUrl: './valuechainfoodforthought.component.html',
  styleUrls: ['./valuechainfoodforthought.component.scss']
})
export class ValuechainfoodforthoughtComponent implements OnInit {
  gamename = 'valuechain';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['Historical data alone may not capture evolving market dynamics.',
        'Correct! A strategic approach combining competitor analysis and industry benchmarks.',
        'Strategic decisions require a more informed approach; reconsider the method for setting targets.'],
      question: ['What approach will you take to estimate and set a realistic target for market share?',],
      option: ['Rely solely on historical data and industry averages',
        "Analyze competitors' data and consider industry averages",
        "Set an arbitrary target without analyzing market trends"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p6', 'p7', 'p8']
    },
    {
      feedbackvalue: '',
      feedback: ['Cost is crucial, but other factors contribute to optimal capacity allocation.',
        'Correct! A comprehensive approach considering both cost and strategic factors.',
        'A more balanced approach that considers external capacity may lead to cost efficiencies.'],
      question: ["What factors will you consider when deciding the mix between in-house and outsource capacity allocation for cost optimization?",],
      option: ["Base the decision solely on cost considerations",
        "Balance cost optimization with strategic considerations for an optimal in-house and outsource mix ",
        "Rely solely on in-house capacity without considering external factors"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p9', 'p10', 'p11']
    },
    {
      feedbackvalue: '',
      feedback: ['Cost only: Cost is crucial, but reliability and experience are equally important.',
        'Reliability and experience only: Correct! A balanced approach considering cost, reliability, and experience.',
        'Cost, reliability, and experience: A comprehensive choice balancing quality and cost-effectiveness.'],
      question: ["What factors will you prioritize when choosing a component supplier?",],
      option: [" Cost",
        "Reliability and experience",
        "Cost, reliability, and experience"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p12', 'p13', 'p14']
    },
    {
      feedbackvalue: '',
      feedback: ['Lowest cost: Vendor experience is crucial for reliability; reconsider the focus on cost alone.',
        'Highest cost: Cost efficiency should be balanced with service quality for an optimal choice.',
        'Balance of cost and experience: Correct! Achieving cost efficiency without compromising reliability.'],
      question: ["How will you select the transportation vendors?",],
      option: [" Lowest cost",
        " Highest cost for better service",
        "Balance of cost and vendor experience"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p15', 'p16', 'p17']
    },
    {
      feedbackvalue: '',
      feedback: ['Basic features: May compromise competitiveness; consider a more balanced approach.',
        'Premium features: Consider market elasticity for pricing; a more strategic approach is needed.',
        'Features and elasticity: Correct! An optimal balance for competitiveness and profitability.'],
      question: ["How should the player set smartphone features for differentiation?",],
      option: [" Basic features to reduce costs",
        " Premium features without considering market elasticity",
        " Features balancing differentiation and market elasticity"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p18', 'p19', 'p20']
    },
    {
      feedbackvalue: '',
      feedback: ['Maximize margins: This may strain relationships and limit market reach; consider a balanced approach.',
        'Minimize margins: Distributors need an incentive; reconsider to strike a balance.',
        'Optimize margins: Correct! A strategic approach considering commitment and market reach.'],
      question: ["What should be the primary consideration for setting distributor margins?",],
      option: ["Maximize margins to boost profits",
        " Minimize margins for wider market reach",
        "Optimize margins for a balance of commitment and market reach"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p21', 'p22', 'p23']
    },
    {
      feedbackvalue: '',
      feedback: ['Innovate without cost: Cost-effectiveness is crucial; consider an innovation strategy mindful of costs.',
        'Services for perception, costs, and ROI: Correct! Comprehensive innovation strategy; keep up the strategic approach.',
        'Prioritize cost-effectiveness: Consumer perception is crucial; consider a more balanced approach for market success.'],
      question: ["How should the player select innovations and services?",],
      option: ["Innovate without considering cost implications",
        "Services that enhance consumer perception, optimize costs, and ensure ROI ",
        " Prioritize cost-effectiveness"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p24', 'p25', 'p26']
    },
    {
      feedbackvalue: '',
      feedback: ['Opt for highest loan: May lead to financial strain; consider a more balanced approach for sustainable growth.',
        'Choose lowest loan: A cautious approach; striking a balance may allow for more significant growth.',
        'Balance for growth and stability: Correct! A strategic approach for continuous operations; keep up the balanced decision-making.'],
      question: ["How should the player determine the amount of long-term loan?",],
      option: ["Opt for the highest loan amount for growth",
        " Choose the lowest loan amount to minimize debt",
        " Balance loan amount for growth and financial stability"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p27', 'p28', 'p29']
    },
    {
      feedbackvalue: '',
      feedback: ['Opt for highest loan: May lead to financial strain; consider a more balanced approach for sustainable growth.',
        'Choose lowest loan: A cautious approach; striking a balance may allow for more significant growth.',
        'Balance for growth and stability: Correct! A strategic approach for continuous operations; keep up the balanced decision-making.'],
      question: ["How should the player determine the amount of long-term loan?",],
      option: ["Opt for the highest loan amount for growth",
        " Choose the lowest loan amount to minimize debt",
        " Balance loan amount for growth and financial stability"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p27', 'p28', 'p29']
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
