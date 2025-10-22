import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-hrpgamefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './hrpgamefoodforthought.component.html',
  styleUrls: ['./hrpgamefoodforthought.component.scss']
})
export class HrpgamefoodforthoughtComponent implements OnInit {
  gamename = 'hrplanning';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['Aligning workforce estimation with departmental goals has a significant impact on demand forecasting. It helps in optimizing resource allocation by ensuring that the workforce aligns with strategic objectives.',
        "By aligning workforce estimation with departmental goals, you can optimize resource allocation, ensuring that the workforce is strategically aligned with the organization's objectives.",
        'Workforce estimation impacts various levels of management, not just top-level management. It is crucial for efficient planning throughout the organizational hierarchy.'],
      question: ['What role does aligning workforce estimation with departmental goals play in forecasting?',],
      option: ['It has no impact on forecasting.',
        " It helps in optimizing resource allocation.",
        " It only benefits top-level management."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s7', 's8', 's9']
    },
    {
      feedbackvalue: '',
      feedback: ["Both quantity and efficiency play a role in workforce planning. It's not about one being more important than the other but finding the right balance.",
        'Considering both the number of employees and their efficiency is essential for effective workforce planning. Balancing quantity and efficiency leads to optimized resource utilization.',
        "Quantity alone is not sufficient; efficiency is equally important in workforce planning."],
      question: [' When planning the workforce, why is it essential to consider both the number of employees and their efficiency?',],
      option: ['Efficiency is more important than quantity.',
        " Both quantity and efficiency impact resource planning.",
        "Quantity matters more than efficiency."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s10', 's11', 's12']
    },
    {
      feedbackvalue: '',
      feedback: ['Analyzing attrition, promotion, and internal transfers collectively provides insights into workforce changes, not just attrition alone.',
        "These trends collectively provide valuable insights into workforce changes, helping predict the number of new hires required.",
        "Internal transfers do impact new hires, and considering all factors is crucial for accurate predictions."],
      question: ['How can analyzing attrition, promotion, and internal transfers aid in predicting the number of new hires required?',],
      option: ['Attrition is the only factor to consider.',
        "These trends provide insights into workforce changes.",
        " Internal transfers have no impact on new hires."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s13', 's14', 's15']
    },
    {
      feedbackvalue: '',
      feedback: ["Historical data, including previous period's employee data, is valuable for understanding workforce trends and making informed decisions.",
        "Previous period's employee data is crucial for strategic workforce planning as it provides insights into historical trends and helps in making informed decisions for the current period.",
        "Previous data is not only about past mistakes but serves as a valuable resource for strategic planning."],
      question: ["Why is the previous period's employee data crucial for strategic workforce planning?",],
      option: ["It's not relevant; focus should be on current data.",
        " Historical data helps in understanding workforce trends.",
        "Previous data only reflects past mistakes."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s16', 's17', 's18']
    },
    {
      feedbackvalue: '',
      feedback: ["Balancing cost and reach is essential to effective budget utilization, ensuring that the selected platforms align with the company's financial goals.",
        "Evaluating the cost and reach of different platforms helps in effective budget utilization while maximizing the visibility of job openings.",
        "Platform choice significantly impacts employer branding, and it's not about having no impact."],
      question: ['In employer branding, why is it important to evaluate the cost and reach of different platforms?',],
      option: ['High-cost platforms always yield better results.',
        "Balancing cost and reach ensures effective budget utilization.",
        "Platform choice has no impact on employer branding."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s19', 's20', 's21']
    },
    {
      feedbackvalue: '',
      feedback: ['Company values do impact job posting effectiveness. Aligning values attracts a diverse talent pool that resonates with the company culture.',
        "Selecting platforms aligned with company values enhances the effectiveness of job postings by attracting talent that aligns with the company's culture and values.",
        "Job postings are not solely about job descriptions; they also convey the company's values and culture."],
      question: ['How can selecting platforms aligned with company values enhance the effectiveness of job postings?',],
      option: ["Company values don't affect job posting effectiveness.",
        "Aligning values attracts a diverse talent pool.",
        " Job postings are solely about job descriptions."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s22', 's23', 's24']
    },
    {
      feedbackvalue: '',
      feedback: ['Balancing both employee satisfaction and financial sustainability is crucial for long-term success. One should not be prioritized over the other.',
        "Balancing employee satisfaction and financial sustainability ensures a fair and sustainable approach to salary hikes.",
        "Employee satisfaction does impact financial sustainability, and both are interconnected."],
      question: ['Why is it crucial to balance employee satisfaction and financial sustainability when deciding salary hikes?',],
      option: [' Financial sustainability is more important than employee satisfaction.',
        "Both are equally important for long-term success.",
        "Employee satisfaction doesn't impact financial sustainability."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s25', 's26', 's27']
    },
    {
      feedbackvalue: '',
      feedback: ['Market conditions do impact salary offerings, and adjusting salaries based on these conditions is essential for remaining competitive.',
        "Adjusting salary offerings based on market conditions ensures the company's compensation remains attractive and competitive.",
        "Competing with market trends is necessary for attracting and retaining top talent."],
      question: [' How can adjusting salary offerings based on market conditions help a company remain competitive?',],
      option: ['Market conditions have no impact on salary offerings.',
        "It ensures the company's compensation remains attractive.",
        "Competing with market trends is unnecessary."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s28', 's29', 's30']
    },
    {
      feedbackvalue: '',
      feedback: ['Prioritizing training based on departmental upskilling needs is crucial for targeted development aligned with company goals.',
        "Prioritizing training based on departmental needs ensures targeted development, contributing to overall company growth.",
        "Departmental needs significantly affect training priorities, and ignoring them is not advisable."],
      question: ['Why is it important to prioritize training based on departmental upskilling needs?',],
      option: [' All departments require the same training.',
        "It ensures targeted development for specific company goals.",
        "Departmental needs don't affect training priorities."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s31', 's32', 's33']
    },
    {
      feedbackvalue: '',
      feedback: ['Training programs cannot be unlimited, and optimization is crucial for cost-effective employee development.',
        "Optimizing training programs helps in balancing employee development needs with available financial resources, ensuring cost-effective learning initiatives.",
        "Optimization is necessary, and ignoring cost considerations is not sustainable."],
      question: ['How can optimizing training programs balance employee development and financial resources?',],
      option: ['Training programs should be unlimited, regardless of cost.',
        "Balancing development needs with available resources is unnecessary.",
        "Optimization helps in cost-effective employee development."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s34', 's35', 's36']
    },
    {
      feedbackvalue: '',
      feedback: ['Policies do impact the work environment, and aligning them with employee needs enhances satisfaction and process efficiency.',
        "Crafting policies that align with employee needs and streamline processes contributes to a positive work environment by enhancing employee satisfaction and process efficiency.",
        "Positive work environments are influenced by well-crafted policies, and they are not unrelated."],
      question: ['Why is crafting policies that align with employee needs and streamline processes crucial for a positive work environment?',],
      option: ['Policies have no impact on the work environment.',
        "Alignment enhances employee satisfaction and process efficiency.",
        " Positive work environments don't depend on policies."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s37', 's38', 's39']
    },
    {
      feedbackvalue: '',
      feedback: ["Balancing both employee satisfaction and the company's financial capacity is essential for overall success and positive employee relations.",
        "Balancing employee satisfaction with financial capacity ensures policies are sustainable and contribute to overall success.",
        "Financial capacity does impact policy formulation, and ignoring it can lead to challenges in implementation."],
      question: ["How can formulating policies that balance employee satisfaction and the company's financial capacity contribute to overall success?",],
      option: [' Employee satisfaction should always be prioritized over financial capacity.',
        " Balancing both ensures sustainability and positive employee relations.",
        " Financial capacity has no bearing on policy formulation."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s40', 's41', 's42']
    },
    {
      feedbackvalue: '',
      feedback: ["Balancing both employee satisfaction and the company's financial capacity is essential for overall success and positive employee relations.",
        "Balancing employee satisfaction with financial capacity ensures policies are sustainable and contribute to overall success.",
        "Financial capacity does impact policy formulation, and ignoring it can lead to challenges in implementation."],
      question: ["How can formulating policies that balance employee satisfaction and the company's financial capacity contribute to overall success?",],
      option: [' Employee satisfaction should always be prioritized over financial capacity.',
        " Balancing both ensures sustainability and positive employee relations.",
        " Financial capacity has no bearing on policy formulation."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s40', 's41', 's42']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
