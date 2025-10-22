import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({  
  selector: 'app-capitalbudgetingfoodforthought',
  standalone: true,
  imports: [CommonModule, FoodforthoughtComponent],
  templateUrl: './capitalbudgetingfoodforthought.component.html',
  styleUrls: ['./capitalbudgetingfoodforthought.component.scss']
})
export class CapitalbudgetingfoodforthoughtComponent implements OnInit {
  gamename = 'cbgame';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["While expected cash flow is an important consideration in project evaluation, the primary factor in estimating the discount rate is the project's risk profile, as it influences the cost of capital.",
        "Project duration is a factor, but it's not the primary one in estimating the discount rate. The focus should be on risk and alignment with the company's weighted average cost of capital (WACC).",
        "Absolutely right! Estimating the discount rate involves a careful assessment of the project's risk profile, ensuring alignment with the company's overall cost of capital."],
      question: ['What factor is crucial in estimating the discount rate for a project within the project portfolio?',],
      option: ["Project's expected cash flow",
        "Project's duration",
        "Project's risk profile"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad6', 'ad7', 'ad8']
    },
    {
      feedbackvalue: '',
      feedback: ['Varying discount rates indeed impact the present value of future cash flows. Higher discount rates reduce present value, highlighting the importance of assessing project risk.',
        'Higher discount rates actually decrease present value. Lower discount rates increase present value, underscoring the need for a balanced approach to risk.',
        'Well done! Lower discount rates increase present value, influencing the viability of projects with lower risk.'],
      question: ["How might varying discount rates impact the present value of future cash flows?",],
      option: ["Varying discount rates have no impact on cash flows",
        "Higher discount rates increase present value",
        "Lower discount rates increase present value"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad9', 'ad10', 'ad11']
    },
    {
      feedbackvalue: '',
      feedback: ['Budget constraints are a crucial consideration. Participants must balance budget constraints with project risk and potential returns for effective decision-making.',
        "While higher risk projects may offer higher returns, it's not a guaranteed relationship. Balancing risk, returns, and budget constraints is key to effective decision-making.",
        'Excellent! Participants should consider the trade-offs between risk, potential returns, and budget constraints to maximize future cash flow.'],
      question: ["What trade-offs should participants consider when choosing projects within given budget constraints?",],
      option: ["Budget constraints do not impact project choices",
        "Higher risk projects always result in higher returns",
        "Balancing risk, potential returns, and budget constraints"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad12', 'ad13', 'ad14']
    },
    {
      feedbackvalue: '',
      feedback: ["Both IRR and NPV are critical metrics in project prioritization, offering insights into the project's financial viability and potential returns.",
        'While IRR and NPV have different perspectives, neither specifically favors short-term or long-term projects. They provide complementary information.',
        'Fantastic! Both IRR and NPV contribute valuable insights into project viability, but they focus on different aspects of financial performance.'],
      question: ["How can financial metrics like IRR and NPV guide project prioritization?",],
      option: ["These metrics have no relevance in project prioritization",
        "IRR favors short-term projects, while NPV favors long-term projects",
        "Both IRR and NPV provide insights into project viability"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad15', 'ad16', 'ad17']
    },
    {
      feedbackvalue: '',
      feedback: ['The primary purpose of the Payback period is to measure how quickly the initial investment is recovered, providing insights into liquidity and risk.',
        'Exactly right! The Payback period measures the time it takes to recover the initial investment, offering insights into liquidity and risk.',
        'While the Payback period considers future cash flows indirectly, its primary focus is on the time it takes to recover the initial investment.'],
      question: ["What is the primary purpose of the Payback period metric in project evaluation?",],
      option: ["Assessing project profitability",
        "Measuring how quickly the initial investment is recovered",
        "Predicting future cash flows"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad18', 'ad19', 'ad20']
    },
    {
      feedbackvalue: '',
      feedback: ['The Profitability Index is indeed relevant in project decision-making. It assists in prioritizing projects based on their profitability relative to the investment.',
        "The Profitability Index does not compare project profitability to industry benchmarks. It evaluates a project's profitability relative to its investment.",
        'Excellent! The Profitability Index is used to prioritize projects by considering their profitability relative to the investment, aiding in decision-making.'],
      question: ["How does the Profitability Index contribute to decision-making?",],
      option: ["It has no relevance in project decision-making",
        "It compares project profitability to industry benchmarks",
        "It helps prioritize projects based on their profitability relative to the investment"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad21', 'ad22', 'ad23']
    },
    {
      feedbackvalue: '',
      feedback: ['The Profitability Index is indeed relevant in project decision-making. It assists in prioritizing projects based on their profitability relative to the investment.',
        "The Profitability Index does not compare project profitability to industry benchmarks. It evaluates a project's profitability relative to its investment.",
        'Excellent! The Profitability Index is used to prioritize projects by considering their profitability relative to the investment, aiding in decision-making.'],
      question: ["How does the Profitability Index contribute to decision-making?",],
      option: ["It has no relevance in project decision-making",
        "It compares project profitability to industry benchmarks",
        "It helps prioritize projects based on their profitability relative to the investment"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad21', 'ad22', 'ad23']
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
