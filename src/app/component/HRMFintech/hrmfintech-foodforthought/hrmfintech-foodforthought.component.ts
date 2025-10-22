import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-hrmfintech-foodforthought',
  standalone: true,
  imports: [CommonModule,MatIconModule, FoodforthoughtComponent],
  templateUrl: './hrmfintech-foodforthought.component.html',
  styleUrls: ['./hrmfintech-foodforthought.component.scss']
})
export class HrmfintechFoodforthoughtComponent implements OnInit {

  gamename = 'hrmgame';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['Internal promotions often bring leadership continuity and reward loyal, proven employees.',
        "Job portals are more effective for junior roles and might not be suitable for finding experienced executives.",
        'Social media is better suited for entry or mid-level roles and networking, not necessarily top management.'],
      question: ['Which of the following hiring channels is generally considered most effective for filling top management positions?',],
      option: [' Internal promotions',
        " Job portals",
        " Social media recruitment"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e404', 'f404', 'g404']
    },
    {
      feedbackvalue: '',
      feedback: ["Ensuring fairness based on performance helps maintain trust and morale across the team.",
        'Seniority alone should not justify retention; performance matters more in firing decisions.',
        "While department needs are important, individual performance should be the primary criterion."],
      question: [' When deciding to fire employees, which factor should be prioritized to maintain team morale?',],
      option: ['Performance ratings',
        " Length of service",
        "Department needs"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e405', 'f405', 'g405']
    },
    {
      feedbackvalue: '',
      feedback: ['Outsourcing typically reduces direct control over operations.',
        "Outsourcing is primarily used to save costs and tap into external expertise.",
        "Outsourcing can reduce certain internal responsibilities but doesn't eliminate training needs."],
      question: ['Outsourcing is often chosen to:',],
      option: ['Increase control over processes',
        "Reduce operational costs and access specialized expertise",
        " Eliminate the need for internal training"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e406', 'f406', 'g406']
    },
    {
      feedbackvalue: '',
      feedback: ["Balancing market rates with internal equity ensures fairness and competitiveness.",
        "While tenure may influence compensation, it shouldn’t be the primary factor.",
        "Budgets are important but shouldn't compromise fairness and equity in compensation."],
      question: ["In designing a compensation strategy, which factor is most crucial for ensuring equity across the organization?",],
      option: ["Market rates and internal equity",
        " Employee tenure",
        " Departmental budgets"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e407', 'f407', 'g407']
    },
    {
      feedbackvalue: '',
      feedback: ["Bonuses should reward high performers, not be distributed uniformly.",
        "Bonuses should motivate employees and be aligned with their performance levels.",
        "While costs should be managed, reducing them at the expense of performance incentives is counterproductive."],
      question: ['When implementing a bonus policy for high performers, what should be the primary focus?'],
      option: ['Uniform distribution to all employees',
        "Motivation and performance alignment",
        "Cost reduction"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e408', 'f408', 'g408']
    },
    {
      feedbackvalue: '',
      feedback: ['On-the-job short training allows junior managers to apply learning directly to their tasks.',
        "Specific training is useful but might not be as impactful for as per the cost-benefit impact.",
        "While beneficial, peer mentoring may not provide structured learning for critical skill gaps."],
      question: ['Which training approach is most effective for addressing skill gaps at the junior management level?',],
      option: [" On the Job short training",
        "Specific training as per needs",
        " Peer mentoring"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e409', 'f4049', 'g409']
    },
    {
      feedbackvalue: '',
      feedback: ['While important, satisfaction alone doesn’t justify or prevent a pay cut.',
        "Cost-saving is a factor, but long-term morale and retention should be prioritized.",
        "Pay cuts can severely impact morale and retention, which are vital for the organization’s future."],
      question: ['What is a critical consideration when deciding on a pay cut for employees?',],
      option: [' Employee satisfaction',
        "Cost-saving goals",
        "Long-term impact on morale and retention"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e410', 'f410', 'g410']
    },
    {
      feedbackvalue: '',
      feedback: ['Leadership development should emphasize strategic and interpersonal skills, not just technical expertise.',
        "Leadership programs should aim to develop leaders who support long-term organizational goals.",
        "Compliance training is necessary but not the focus of leadership development."],
      question: [' Leadership development programs should primarily focus on:',],
      option: [' Technical skills',
        "Cultivating future leaders aligned with organizational goals",
        "Compliance training"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e411', 'f411', 'g411']
    },
    {
      feedbackvalue: '',
      feedback: ['While cost is important, diversity and inclusion policies should focus on impact and alignment with organizational goals.',
        "Policies should reflect the company’s values and foster an inclusive environment.",
        "Popularity doesn’t always equate to effectiveness in diversity and inclusion efforts."],
      question: ['When selecting diversity and inclusion policies, a key factor to consider is:',],
      option: ['  Cost-effectiveness only',
        "Alignment with organizational values and employee needs",
        "Popularity among employees"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e412', 'f412', 'g412']
    },
    {
      feedbackvalue: '',
      feedback: ['Total cost of ownership includes more than just the purchase price.',
        "Total cost of ownership covers the entire lifecycle of the tool, including maintenance and training.",
        "Training is part of the cost but doesn’t represent the full ownership cost."],
      question: ['In evaluating tools for organizational activities, the total cost of ownership includes:',],
      option: [' Initial purchase price only',
        "Initial price, training, and maintenance costs",
        "Training costs only"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e413', 'f413', 'g413']
    },
    {
      feedbackvalue: '',
      feedback: ['Focusing on overspent areas may lead to inefficiencies. Prioritize based on future needs.',
        "Learning from past spending helps improve future allocation.",
        "Equal allocation doesn’t account for the specific needs and priorities of each department."],
      question: ['To optimize remaining budget allocations, one should:',],
      option: ['Prioritize areas that have already overspent',
        "Analyze cost-benefit patterns for effective resource allocation",
        " Allocate equally across all departments"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e414', 'f414', 'g414']
    },
    {
      feedbackvalue: '',
      feedback: ["Understanding the root cause is essential for effective conflict resolution and long-term harmony.",
        "Ignoring conflict can worsen the situation over time and lead to unresolved tension.",
        "Prioritizing one party’s interests may lead to further dissatisfaction and division."],
      question: [" When approaching conflict resolution, a key consideration should be:",],
      option: [' Identifying the root cause and balancing interests of all parties involved',
        "  Ignoring the conflict to avoid further issues",
        " Prioritizing the solution preferred by management"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e415', 'f415', 'g415']
    },
    {
      feedbackvalue: '',
      feedback: ["Understanding the root cause is essential for effective conflict resolution and long-term harmony.",
        "Ignoring conflict can worsen the situation over time and lead to unresolved tension.",
        "Prioritizing one party’s interests may lead to further dissatisfaction and division."],
      question: [" When approaching conflict resolution, a key consideration should be:",],
      option: [' Identifying the root cause and balancing interests of all parties involved',
        "  Ignoring the conflict to avoid further issues",
        " Prioritizing the solution preferred by management"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['e415', 'f415', 'g415']
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
