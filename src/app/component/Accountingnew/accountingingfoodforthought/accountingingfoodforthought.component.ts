import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-accountingingfoodforthought',
  standalone: true,
  imports: [CommonModule,FoodforthoughtComponent],
  templateUrl: './accountingingfoodforthought.component.html',
  styleUrls: ['./accountingingfoodforthought.component.scss']
})
export class AccountingingfoodforthoughtComponent implements OnInit {

  gamename = 'accountinggame';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['Issuing additional common shares typically does not affect total liabilities. Instead, it increases total equity.',
        'Issuing additional common shares does not directly affect total assets.',
        'Correct! Issuing additional common shares increases the total equity of the company as it represents additional ownership in the business.'],
      question: [' When a company issues additional common shares, how does it affect the balance sheet?',],
      option: ['Decreases total liabilities',
        "Increases total assets",
        "Increases total equity"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r7', 'r8', 'r9']
    },
    {
      feedbackvalue: '',
      feedback: ['Recognizing depreciation expense typically decreases net income as it represents a non-cash expense.',
        'Depreciation expense does not directly affect gross profit, which is calculated as revenue minus cost of goods sold.',
        "Correct! Recognizing depreciation expense reduces net income as it is subtracted from the company's earnings."],
      question: ['What effect does recognizing depreciation expense have on the income statement?',],
      option: ['Increases net income',
        "Decreases gross profit",
        "Decreases net income"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r10', 'r11', 'r12']
    },
    {
      feedbackvalue: '',
      feedback: ['Borrowing money from a bank typically increases cash flow from financing as it represents an inflow of cash.',
        "Borrowing money does not directly affect cash flow from operations, which primarily includes cash generated from the company's core business activities.",
        "Correct! Borrowing money from a bank increases cash flow from financing as it represents new capital raised."],
      question: ['If a company borrows money from a bank, how is it reflected in the cash flow statement?',],
      option: ['Decreases cash flow from financing',
        "Increases cash flow from operations",
        "Increases cash flow from financing"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r13', 'r14', 'r15']
    },
    {
      feedbackvalue: '',
      feedback: ['Correct! An increase in accounts receivable represents an increase in assets as it reflects amounts owed to the company by customers for goods or services sold on credit.',
        "Accounts receivable does not directly affect total liabilities.",
        "Accounts receivable does not directly affect total equity."],
      question: [' How does an increase in accounts receivable impact the balance sheet?',],
      option: ['Increases total assets',
        "Decreases total liabilities",
        "Decreases total equity"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r16', 'r17', 'r18']
    },
    {
      feedbackvalue: '',
      feedback: ['Correct! An increase in cost of goods sold (COGS) typically reduces net income as it represents higher expenses incurred in producing goods or services.',
        "An increase in COGS typically reduces net income.",
        "An increase in COGS generally leads to a decrease in net income."],
      question: [' What happens to net income if cost of goods sold (COGS) increases?',],
      option: ['Decreases',
        "Increases",
        "Remains unchanged"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r19', 'r20', 'r21']
    },
    {
      feedbackvalue: '',
      feedback: ['Correct! Paying dividends to shareholders reduces cash flow from financing as it represents an outflow of cash.',
        "Paying dividends does not directly affect cash flow from operations, which primarily includes cash generated from the company's core business activities.",
        "Paying dividends does not directly affect cash flow from investing, which primarily includes cash flows related to investment activities such as purchasing or selling assets."],
      question: ['If a company pays dividends to its shareholders, how does it affect the cash flow statement?',],
      option: ['Decreases cash flow from financing',
        "Increases cash flow from operations",
        "Decreases cash flow from investing"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r22', 'r23', 'r24']
    },
    {
      feedbackvalue: '',
      feedback: ['Correct! Paying dividends to shareholders reduces cash flow from financing as it represents an outflow of cash.',
        "Paying dividends does not directly affect cash flow from operations, which primarily includes cash generated from the company's core business activities.",
        "Paying dividends does not directly affect cash flow from investing, which primarily includes cash flows related to investment activities such as purchasing or selling assets."],
      question: ['If a company pays dividends to its shareholders, how does it affect the cash flow statement?',],
      option: ['Decreases cash flow from financing',
        "Increases cash flow from operations",
        "Decreases cash flow from investing"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['r22', 'r23', 'r24']
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }

}