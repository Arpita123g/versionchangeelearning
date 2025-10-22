import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-projectmanagementfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,FoodforthoughtComponent],
  templateUrl: './projectmanagementfoodforthought.component.html',
  styleUrls: ['./projectmanagementfoodforthought.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ProjectmanagementfoodforthoughtComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  gamename = 'projectmanagement';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: [
        'The critical path is not about the shortest sequence but focuses on the longest sequence of dependent tasks.',
        'The critical path is the longest sequence of dependent tasks that must be completed on time for the project to finish within its allocated timeframe.',
        'The critical path is not determined by the highest resource allocation but by task dependencies.',
      ],
      question: ['What is the critical path in a project map?'],
      option: [
        'The shortest sequence of tasks.',
        'The longest sequence of dependent tasks.',
        'Tasks with the highest resource allocation.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an7', 'an8', 'an9'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Ignoring resource-intensive tasks might lead to suboptimal resource allocation.',
        'Strategic allocation of resources on resource-intensive tasks optimizes efficiency.',
        'Extending the duration of resource-intensive tasks may not be the most efficient strategy.',
      ],
      question: [
        'What is the purpose of identifying resource-intensive tasks in a project map?',
      ],
      option: [
        'To ignore these tasks and focus on others.',
        'To strategically allocate resources for efficiency.',
        'To extend the duration of these tasks.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an10', 'an11', 'an12'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Random assignment of tasks is unlikely to optimize resource allocation.',
        'Matching task requirements with resource skills optimizes resource allocation.',
        'Allocating all tasks to a single resource may not optimize overall resource utilization.',
      ],
      question: ['How can you optimize resource allocation for a task?'],
      option: [
        'Assign tasks randomly to different resources.',
        'Match task requirements with resource skills.',
        'Allocate all tasks to a single resource.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an13', 'an14', 'an15'],
    },
    {
      feedbackvalue: '',
      feedback: [
        "A mentorship program may impact duration and budget; it's not guaranteed to increase both.",
        'A mentorship program may affect duration and budget, but not necessarily decrease both.',
        'A mentorship program may have minimal direct impact on duration and budget.',
      ],
      question: [
        'What is a potential trade-off when implementing a mentorship program for skill enhancement?',
      ],
      option: [
        'Increased budget and shorter duration.',
        'Longer duration and decreased budget.',
        'Minimal direct impact on duration and budget.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an16', 'an17', 'an18'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Managing tasks in parallel is generally associated with shorter project duration, not increased dependencies.',
        'Managing tasks in parallel can accelerate project duration by reducing sequential dependencies.',
        'Managing tasks in parallel can simplify resource allocation, not complicate it.',
      ],
      question: [
        'How does managing tasks in parallel contribute to project optimization?',
      ],
      option: [
        'It increases task dependencies.',
        'It accelerates project duration.',
        'It complicates resource allocation.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an19', 'n20', 'an21'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Allocating the entire budget upfront may lead to inefficiencies and lack of flexibility.',
        'Making real-time adjustments based on task planning progress optimizes budget utilization.',
        'Sticking to the initially allocated budget may not account for changing project needs.',
      ],
      question: [
        ' In tracking project metrics, how can you optimize budget utilization?',
      ],
      option: [
        'Allocate the entire budget at the project start.',
        'Make real-time adjustments based on planned task progress.',
        'Stick to the initially allocated budget.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an22', 'an23', 'an24'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Prioritizing activities with the highest time and budget costs might not align with efficiency.',
        'Prioritizing activities with the lowest time and budget costs might not contribute significantly to efficiency.',
        'Prioritizing activities with minimal impact on time and budget ensures efficiency in skill enhancement.',
      ],
      question: [
        'When considering efficiency boosters, what should participants prioritize for skill enhancement?',
      ],
      option: [
        'Activities with the highest time and budget costs.',
        'Activities with the lowest time and budget costs.',
        'Activities with minimal impact on time and budget.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an25', 'an26', 'an27'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Ignoring task variances may lead to difficulties in meeting project timelines.',
        'Incorporating contingency planning for potential variances helps handle uncertainties in task durations.',
        'Assigning tasks to a single resource to avoid variances might not be a practical or effective strategy.',
      ],
      question: [
        'How can participants handle task variance in project planning?',
      ],
      option: [
        'Ignore variances and proceed with the original plan.',
        'Incorporate contingency planning for potential variances.',
        'Assign tasks to a single resource to avoid variances.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an28', 'an29', 'an30'],
    },
    {
      feedbackvalue: '',
      feedback: [
        'Ignoring task variances may lead to difficulties in meeting project timelines.',
        'Incorporating contingency planning for potential variances helps handle uncertainties in task durations.',
        'Assigning tasks to a single resource to avoid variances might not be a practical or effective strategy.',
      ],
      question: [
        'How can participants handle task variance in project planning?',
      ],
      option: [
        'Ignore variances and proceed with the original plan.',
        'Incorporate contingency planning for potential variances.',
        'Assign tasks to a single resource to avoid variances.',
      ],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['an28', 'an29', 'an30'],
    },
  ];
}
