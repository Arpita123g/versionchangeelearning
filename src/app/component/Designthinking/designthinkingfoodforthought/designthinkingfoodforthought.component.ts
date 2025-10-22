import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-designthinkingfoodforthought',
  standalone: true,
  imports: [CommonModule, FoodforthoughtComponent],
  templateUrl: './designthinkingfoodforthought.component.html',
  styleUrls: ['./designthinkingfoodforthought.component.scss']
})
export class DesignthinkingfoodforthoughtComponent implements OnInit {

  gamename = 'designthinking';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["While sentiment analysis contributes, it's not the sole factor in determining preferences.",
        "Correct! Sentiment analysis delves into underlying emotions and reactions, offering a deeper understanding.",
        'Skipping emotional aspects would miss crucial insights gained from sentiment analysis.'],
      question: ['What is the nuanced role of sentiment analysis in the Empathize phase?',],
      option: ['To solely determine user preferences.',
        "To understand underlying emotions and reactions.",
        "To skip emotional aspects and focus on objective data."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u7', 'u8', 'u9']
    },
    {
      feedbackvalue: '',
      feedback: ["Ignoring constraints may lead to unrealistic and unattainable goals.",
        'Correct! Leveraging constraints fuels creative problem-solving and innovative target setting.',
        "Randomly selecting targets without constraint consideration lacks strategic planning."],
      question: [' How does considering constraints in the Define phase contribute to innovative target setting?',],
      option: ['By ignoring constraints for unrestricted goal setting.',
        "By leveraging constraints to fuel creative problem-solving.",
        "By randomly selecting targets without constraint consideration."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u10', 'u11', 'u12']
    },
    {
      feedbackvalue: '',
      feedback: ['Copying competitors without analysis is not a strategic approach.',
        "Correct! Understanding the market landscape and identifying gaps is crucial for strategic ideation.",
        "Randomly selecting ideas without market insights lacks strategic thinking."],
      question: ['What is the strategic significance of analyzing competitors, market size, and feature importance when selecting product ideas?',],
      option: ['To copy competitors without critical analysis.',
        "To understand the market landscape and identify gaps.",
        "To randomly select ideas without market insights."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u13', 'u14', 'u15']
    },
    {
      feedbackvalue: '',
      feedback: ["Including all features regardless of cost may exceed budget constraints.",
        "Correct! Prioritizing features based on cost-benefit analysis ensures strategic decision-making.",
        "Randomly changing features without cost consideration lacks strategic planning."],
      question: ["How can the fluctuating cost during prototype creation be strategically managed to ensure maximum value?",],
      option: ["By including all features regardless of cost.",
        "By prioritizing features based on cost-benefit analysis.",
        "By randomly changing features without cost consideration."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u16', 'u17', 'u18']
    },
    {
      feedbackvalue: '',
      feedback: ["Focusing solely on high margins may neglect customer perceptions.",
        "Correct! Balancing pricing with customer value ensures both profitability and market competitiveness.",
        "Randomly setting prices without considering customer value lacks strategic pricing."],
      question: [' In determining product pricing, why is it essential to balance margin goals with perceived customer value?',],
      option: ['To focus solely on high margins, regardless of customer perception.',
        "To align pricing with customer value while achieving profit margins.",
        " To randomly set prices without considering customer value."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u19', 'u20', 'u21']
    },
    {
      feedbackvalue: '',
      feedback: ["Matching competitors' spending without evaluation may not optimize impact.",
        "Correct! Making data-driven decisions based on competitor spending and desired reach ensures strategic optimization.",
        "Randomly allocating a budget without competitor insights lacks strategic advertising planning."],
      question: [' How can the advertising budget be optimized for maximum impact while considering competitor spending history?',],
      option: [" By matching competitors' spending without evaluating effectiveness.",
        "By making data-driven decisions based on competitor spending and desired reach.",
        "By randomly allocating a budget without competitor insights."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u22', 'u23', 'u24']
    },
    {
      feedbackvalue: '',
      feedback: ['Disregarding consumer preferences may impact long-term brand loyalty.',
        "Correct! Balancing the warranty with consumer preferences contributes to long-term brand loyalty.",
        "Randomly selecting a warranty period without consumer insights lacks strategic thinking."],
      question: [' When deciding on product warranty, how can you balance consumer preferences with long-term brand loyalty?',],
      option: ['By disregarding consumer preferences for a standardized warranty.',
        " By aligning the warranty with consumer preferences while building brand loyalty.",
        "By randomly selecting a warranty period without consumer insights."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u25', 'u26', 'u27']
    },
    {
      feedbackvalue: '',
      feedback: ['Sticking to historically successful channels without adaptation may not align with current market trends.',
        "Correct! Making agile decisions based on past performance and current market trends ensures adaptability.",
        "Randomly choosing channels without considering past performance lacks strategic distribution planning."],
      question: ['In selecting distribution channels, how can you leverage past performance data to adapt to evolving market dynamics?',],
      option: ['By sticking to historically successful channels without adaptation.',
        "By making agile decisions based on past performance and current market trends.",
        "By randomly choosing channels without considering past performance."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u28', 'u29', 'u30']
    },
    {
      feedbackvalue: '',
      feedback: ['Sticking to historically successful channels without adaptation may not align with current market trends.',
        "Correct! Making agile decisions based on past performance and current market trends ensures adaptability.",
        "Randomly choosing channels without considering past performance lacks strategic distribution planning."],
      question: ['In selecting distribution channels, how can you leverage past performance data to adapt to evolving market dynamics?',],
      option: ['By sticking to historically successful channels without adaptation.',
        "By making agile decisions based on past performance and current market trends.",
        "By randomly choosing channels without considering past performance."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['u28', 'u29', 'u30']
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
