import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-mergersacquisitionfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,FoodforthoughtComponent ],
  templateUrl: './mergersacquisitionfoodforthought.component.html',
  styleUrls: ['./mergersacquisitionfoodforthought.component.scss']
})
export class MergersacquisitionfoodforthoughtComponent implements OnInit {
  gamename = 'mergersacquisition';
  constructor() { }

  ngOnInit(): void {
  }

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['Marketing reports focus on promotional strategies and do not provide insights into the financial health of a company.',
        "Correct! Income statement, balance sheet, and ratios offer crucial financial data that aids in evaluating the company's health.",
        'Employee attendance records are not relevant for financial health assessment in the context of mergers and acquisitions.'],
      question: ['Which financial informations are crucial for assessing the health of a company in the context of mergers and acquisitions?',],
      option: ['Marketing reports',
        "Income statement, balance sheet, and ratios",
        "Employee attendance records"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q9', 'q10', 'q11']
    },
    {
      feedbackvalue: '',
      feedback: ['Confusing competitors is not a primary objective.',
        'Correct! Focusing on growth, efficiency, or cost management ensures alignment with the strategic goals of your company.',
        "Following industry trends may not necessarily align with your company's strategic objectives."],
      question: ['Why is it important to focus on either growth, efficiency, or cost management when selecting a target company for a detailed analysis?',],
      option: ['To confuse competitors',
        "To align with strategic objectives",
        "To follow industry trends"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q12', 'q13', 'q14']
    },
    {
      feedbackvalue: '',
      feedback: ['Ignoring local customs can lead to misunderstandings and hinder market entry.',
        "A standardized approach may not be suitable for diverse markets.",
        "Correct! Adapting to local market conditions is crucial for successful market entry, ensuring the company's offerings resonate with the target audience."],
      question: [' When expanding into new markets, what should be a crucial consideration for a company involved in mergers and acquisitions?',],
      option: ['Ignoring local customs',
        "Maintaining a standardized approach",
        "Adapting to local market conditions"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q15', 'q16', 'q17']
    },
    {
      feedbackvalue: '',
      feedback: ["The CEO's personal preference is not a decisive factor in determining the premium.",
        "Correct! Understanding synergy benefits, financial gains, and strategic importance plays a crucial role in deciding the premium during negotiations.",
        "Stock market fluctuations may have an impact, but they are not the primary influence on determining the premium."],
      question: ['What factor significantly influences the determination of the premium to be paid on the valuation of a target company during negotiations?',],
      option: ["CEO's personal preference",
        "Synergy benefits, financial gains, and strategic importance",
        "Stock market fluctuations"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q18', 'q19', 'q20']
    },
    {
      feedbackvalue: '',
      feedback: ['Rushing through the decision-making process without analysis can lead to significant risks.',
        "Correct! Due diligence is essential for identifying risks and opportunities associated with the target company, enabling informed decision-making.",
        "Avoiding analysis before making a deal can result in unforeseen complications."],
      question: [' What is the purpose of due diligence in the context of mergers and acquisitions?',],
      option: ['To rush through the decision-making process',
        "To identify risks and opportunities associated with the target company",
        "To avoid any analysis before making a deal"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q21', 'q22', 'q23']
    },
    {
      feedbackvalue: '',
      feedback: ['Cultural integration significantly impacts the success of mergers.',
        "Correct! Paying attention to cultural integration fosters a positive work environment and improves employee morale, contributing to the overall success of the merger or ",
        "Cultural integration is relevant regardless of company size."],
      question: ['Why should companies pay attention to cultural integration during mergers and acquisitions?',],
      option: ["It doesn't impact the success of the merger",
        "To foster a positive work environment and improve employee morale",
        "Cultural integration is only relevant for smaller companies"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q24', 'q25', 'q26']
    },
    {
      feedbackvalue: '',
      feedback: ["Shareholders' reactions are influenced by the chosen financing option.",
        "Correct! Shareholders may react positively or negatively based on the chosen financing option, emphasizing the importance of considering their perspective.",
        "Shareholders' reactions can vary and are not always negative to financing decisions."],
      question: ['How might the reaction of shareholders be influenced by the chosen financing option for a merger or acquisition?',],
      option: ['It has no impact on shareholders',
        "Shareholders may react positively or negatively based on the chosen financing option",
        "Shareholders always react negatively to financing decisions"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q27', 'q28', 'q29']
    },
    {
      feedbackvalue: '',
      feedback: ["Legal compliance is more than just a formality; it ensures adherence to regulations.",
        "Correct! Thoroughly assessing legal compliance is crucial to ensure the legality of business operations, minimizing the risk of legal issues post-acquisition.",
        "Legal compliance is a critical aspect of mergers and acquisitions."],
      question: [' Why is it important to thoroughly assess the legal compliance of a target company during mergers and acquisitions?,'],
      option: ["It's just a formality",
        "To ensure the legality of the business operations",
        "Legal compliance doesn't matter in mergers and acquisitions"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q30', 'q31', 'q32']
    },
    {
      feedbackvalue: '',
      feedback: ["Legal compliance is more than just a formality; it ensures adherence to regulations.",
        "Correct! Thoroughly assessing legal compliance is crucial to ensure the legality of business operations, minimizing the risk of legal issues post-acquisition.",
        "Legal compliance is a critical aspect of mergers and acquisitions."],
      question: [' Why is it important to thoroughly assess the legal compliance of a target company during mergers and acquisitions?,'],
      option: ["It's just a formality",
        "To ensure the legality of the business operations",
        "Legal compliance doesn't matter in mergers and acquisitions"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['q30', 'q31', 'q32']
    },
  ];

}
