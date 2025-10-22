import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-financialanalysisnewfoodforthought',
  standalone: true,
  imports: [CommonModule, FoodforthoughtComponent],
  templateUrl: './financialanalysisnewfoodforthought.component.html',
  styleUrls: ['./financialanalysisnewfoodforthought.component.scss']
})
export class FinancialanalysisnewfoodforthoughtComponent implements OnInit {
  gamename = 'financialanalysis';
  questionanswerpaper: any = [
    // {
    //   feedbackvalue: '',
    //   feedback: [['z7', 'z8', 'z9'], ['z7', 'z8', 'z9']],
    //   question: ["x7", "x7"],
    //   option: [["y7", "y8", "y9"], ["y7", "y8", "y9"]],
    //   disabled: false,
    //   questionchecked: [false, false, false],
    //   cellvalue: ['ab5', 'ab6', 'ab7']
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z10', 'z11', 'z12'], ['z10', 'z11', 'z12']],
    //   question: ["x10", "x10"],
    //   option: [['y10', 'y11', 'y12'], ['y10', 'y11', 'y12']],
    //   questionchecked: [false, false, false],
    //   cellvalue: ['ab8', 'ab9', 'ab10'],
    //   disabled: false
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z13', 'z14', 'z15'], ['z13', 'z14', 'z15']],
    //   question: ["x13", "x13"],
    //   option: [['y13', 'y14', 'y15'], ['y13', 'y14', 'y15']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab11', 'ab12', 'ab13'],
    //   disabled: false
    // },

    // {
    //   feedbackvalue: '',
    //   feedback: [['z16', 'z17', 'z18'], ['z16', 'z17', 'z18']],
    //   question: ['x16', 'x16'],
    //   option: [['y16', 'y17', 'y18'], ['y16', 'y17', 'y18'],],
    //   questionchecked: [false, false, false],
    //   cellvalue: ['ab14', 'ab15', 'ab16'],
    //   disabled: false


    // },

    // {
    //   feedbackvalue: '',
    //   feedback: [['z19', 'z20', 'z21'], ['z19', 'z20', 'z21']],
    //   question: ["x19", "x19"],
    //   option: [['y19', 'y20', 'y21'], ['y19', 'y20', 'y21']],
    //   questionchecked: [false, false, false],
    //   cellvalue: ['ab17', 'ab18', 'ab19'],
    //   disabled: false

    // },

    // {
    //   feedbackvalue: '',
    //   feedback: [['z22', 'z23', 'z24'], ['z22', 'z23', 'z24']],
    //   question: ["x22", "x22"],
    //   option: [['y22', 'y23', 'y24'], ['y22', 'y23', 'y24']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab20', 'ab21', 'ab22'],
    //   disabled: false,
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z25', 'z26','z27'], ['z25', 'z26','z27']],
    //   question: ["x25", "x25"],
    //   option: [['y25', 'y26','y27'], ['y25', 'y26','y27']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab23', 'ab24','ab25'],
    //   disabled: false,
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z28', 'z29','z30'], ['z28', 'z29','z30']],
    //   question: ["x28", "x28"],
    //   option: [['y28', 'y29','y30'], ['y28', 'y29','y30']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab26', 'ab27','ab28'],
    //   disabled: false,
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z31', 'z32','z33'], ['z31', 'z32','z33']],
    //   question: ["x28", "x28"],
    //   option: [['y31', 'y32','y33'], ['y31', 'y32','y33']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab29', 'ab30','ab31'],
    //   disabled: false,
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z34', 'z35','z36'], ['z34', 'z35','z36']],
    //   question: ["x31", "x31"],
    //   option: [['y34', 'y35','y36'], ['y34', 'y35','y36']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab32', 'ab33','ab34'],
    //   disabled: false,
    // },
    // {
    //   feedbackvalue: '',
    //   feedback: [['z37', 'z38','z39'], ['z37', 'z38','z39']],
    //   question: ["x34", "x34"],
    //   option: [['y37', 'y38','y39'], ['y37', 'y38','y39']],
    //   questionchecked: [false, false],
    //   cellvalue: ['ab32', 'ab33','ab34'],
    //   disabled: false,
    // },

    {
      feedbackvalue: '',
      feedback: ["Advances in new technology will be reshaping the industry by enhancing efficiency. This reflects the industry's shift towards sustainability and innovation.",
        "While regulations play a role, technological advancements often have a more profound impact. Government regulations may drive innovation but may not be the primary factor in breakthroughs.",
        "Traditional technologies are gradually being phased out in favor of more sustainable options. Expansion in traditional technologies is less likely to drive significant breakthroughs."],
      question: ["Considering breakthroughs in the industry, which factor is likely to have the most significant impact on market dynamics?"],
      option: ["Advances in new Technology which supports or disrupts the industry",
        "Increased Government Regulations",
        "Expansion of Traditional Technologies"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab5', 'ab6', 'ab7']
    },
    {
      feedbackvalue: '',
      feedback: ["A rising operating margin suggests improved cost management, contributing to higher profitability. It indicates that the company is becoming more efficient in managing its expenses.",
        "While increased revenue is positive, the operating margin specifically focuses on costs. A rising operating margin does not necessarily mean increased revenue.",
        "Tax liabilities are unrelated to the operating margin. The operating margin is a measure of efficiency and profitability, not tax obligations."],
      question: ["When analyzing the income statement, what does a rising operating margin typically indicate about a company's financial performance?"],
      option: [" Improved Cost Management",
        "Increased Revenue",
        "Higher Tax Liabilities"],
      questionchecked: [false, false, false],
      cellvalue: ['ab8', 'ab9', 'ab10'],
      disabled: false
    },
    {
      feedbackvalue: '',
      feedback: ["High asset turnover is associated with efficient inventory management, not excess accumulation. Excess inventory would likely result in a lower asset turnover ratio.",
        "A high asset turnover ratio indicates efficient utilization of assets to generate revenue. This implies that the company is effectively using its assets to generate sales.",
        "Asset turnover is not directly related to debt levels. It measures how efficiently a company uses its assets to generate sales, regardless of its debt levels."],
      question: ["In the context of a balance sheet, what does a high asset turnover ratio suggest about a company?"],
      option: ["Accumulation of Excess Inventory",
        "Efficient Asset Utilization",
        "High Debt Levels"],
      questionchecked: [false, false],
      cellvalue: ['ab11', 'ab12', 'ab13'],
      disabled: false
    },

    {
      feedbackvalue: '',
      feedback: ["While a global presence is essential, the focus here is on technology and innovation. Market presence alone may not ensure a competitive advantage.",
        "Continuous investment in research and development is crucial for maintaining a competitive edge. This option reflects the importance of innovation in sustaining a competitive advantage.",
        "Sales volume alone does not necessarily guarantee a competitive advantage. The focus is on the factors contributing to technological leadership."],
      question: ["Considering key information about technology and markets, which aspect is most likely to contribute to a company's competitive advantage?"],
      option: ["Market Presence in Multiple Regions",
        "Continuous Investment in R&D",
        "High Sales Volume"],
      questionchecked: [false, false, false],
      cellvalue: ['ab14', 'ab15', 'ab16'],
      disabled: false


    },

    {
      feedbackvalue: '',
      feedback: ["A lower ratio indicates potential liquidity challenges. A strong liquidity position would typically have a high ratio.",
        "A lower ratio  suggests potential short-term solvency issues as current assets may not cover current liabilities. This indicates a potential strain in meeting short-term obligations.",
        "Adequate cash reserves would typically result in a higher ratio . A lower ratio might imply a liquidity concern."],
      question: ["When assessing liquidity using the acid test ratio, what does a lower value of ratio suggest?"],
      option: ["Strong Liquidity Position",
        "Potential Short-Term Solvency Issues",
        "Adequate Cash Reserves"],
      questionchecked: [false, false, false],
      cellvalue: ['ab17', 'ab18', 'ab19'],
      disabled: false

    },

    {
      feedbackvalue: '',
      feedback: ["A high debt to equity ratio typically increases financial risk. This option provides an inaccurate interpretation.",
        "The debt to equity ratio is a key indicator of financial risk. It does have a significant impact on financial risk.",
        "A high debt to equity ratio indicates higher financial risk as the company relies heavily on borrowed funds. This reflects a potential strain on the company's financial stability."],
      question: ["How does a high debt to equity ratio impact a company's financial risk?"],
      option: ["Reduces Financial Risk",
        "Has No Impact on Financial Risk",
        "Increases Financial Risk"],
      questionchecked: [false, false],
      cellvalue: ['ab20', 'ab21', 'ab22'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: ["A decrease in inventory turnover suggests decreased efficiency. Improved efficiency would typically result in an increased turnover ratio.",
        "A decrease in inventory turnover might indicate excessive inventory levels, affecting operational efficiency. This reflects potential challenges in managing and selling inventory.",
        "Increased sales would typically lead to a higher inventory turnover ratio. The focus here is on the decrease in turnover."],
      question: ["If a company's inventory turnover decreases over time, what might this indicate about its operational efficiency?"],
      option: ["Improved Efficiency",
        "Excessive Inventory Levels",
        "Increased Sales"],
      questionchecked: [false, false],
      cellvalue: ['ab23', 'ab24', 'ab25'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: ["A high ROE indicates strong profitability relative to equity, reflecting effective use of shareholder funds. It signifies the company's ability to generate profit from its equity.",
        "ROE is not directly related to levels of debt. This option provides an inaccurate interpretation.",
        "ROE focuses on profitability relative to equity, not asset utilization. This option provides an inaccurate interpretation."],
      question: ["What does a high return on equity (ROE) indicate about a company's financial performance?"],
      option: ["Strong Profitability Relative to Equity",
        "High Levels of Debt",
        "Efficient Asset Utilization"],
      questionchecked: [false, false],
      cellvalue: ['ab26', 'ab27', 'ab28'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: ["A low P/E ratio often indicates the market perceives high growth potential. Investors may expect future earnings to outpace the current stock price.",
        "A low P/E ratio is often associated with undervaluation. This option provides an inaccurate interpretation.",
        "A low P/E ratio is not typically associated with strong earnings stability. This option provides an inaccurate interpretation."],
      question: ["How does a low P/E ratio compare to a high P/E ratio in terms of market perception?"],
      option: ["Indicates High Growth Potential",
        " Suggests Undervaluation",
        "Reflects Strong Earnings Stability"],
      questionchecked: [false, false],
      cellvalue: ['ab29', 'ab30', 'ab31'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: ["Diversification helps reduce overall portfolio risk by balancing the performance of individual assets. This ensures that the portfolio is not overly impacted by the poor performance of a single asset.",
        "Maximizing returns often involves selecting assets with different performance characteristics. This option provides an inaccurate interpretation.",
        "Diversification does the opposite by adding complexity to portfolio management. Simplifying portfolio management is not the primary goal of diversification."],
      question: ["When selecting a portfolio composition, why is it important to consider the correlation between the chosen companies?"],
      option: ["Diversification to Reduce Risk",
        "Maximizing Returns Through Similar Performances",
        "Simplifying Portfolio Management"],
      questionchecked: [false, false],
      cellvalue: ['ab32', 'ab33', 'ab34'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: ["Diversification helps reduce overall portfolio risk by balancing the performance of individual assets. This ensures that the portfolio is not overly impacted by the poor performance of a single asset.",
        "Maximizing returns often involves selecting assets with different performance characteristics. This option provides an inaccurate interpretation.",
        "Diversification does the opposite by adding complexity to portfolio management. Simplifying portfolio management is not the primary goal of diversification."],
      question: ["When selecting a portfolio composition, why is it important to consider the correlation between the chosen companies?"],
      option: ["Diversification to Reduce Risk",
        "Maximizing Returns Through Similar Performances",
        "Simplifying Portfolio Management"],
      questionchecked: [false, false],
      cellvalue: ['ab32', 'ab33', 'ab34'],
      disabled: false,
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
