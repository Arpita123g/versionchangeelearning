import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-changemanagementnewfoodforthougth',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodforthoughtComponent],
  templateUrl: './changemanagementnewfoodforthougth.component.html',
  styleUrls: ['./changemanagementnewfoodforthougth.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ChangemanagementnewfoodforthougthComponent {
  gamename = 'changemanagementnew';
  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['b173',
        "b174",
        'b175'],
      question: ['b149'],
      option: ['b155',
        "b156",
        "b157"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av6', 'av7', 'av8']
    },
    {
      feedbackvalue: '',
      feedback: ['b176',
        "b177",
        'b178'],
      question: ['b150'],
      option: ['b158',
        "b159",
        "b160"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av9', 'av10', 'av11']
    },
    {
      feedbackvalue: '',
      feedback: ['b179',
        "b180",
        'b181'],
      question: ['b151'],
      option: ['b161',
        "b162",
        "b163"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av12', 'av13', 'av14']
    },
    {
      feedbackvalue: '',
      feedback: ['b182',
        "b183",
        'b184'],
      question: ['b152'],
      option: ['b164',
        "b165",
        "b166"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av15', 'av16', 'av17']
    },
    {
      feedbackvalue: '',
      feedback: ['b185',
        "b186",
        'b187'],
      question: ['b153'],
      option: ['b167',
        "b168",
        "b169"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av18', 'av19', 'av20']
    },
    {
      feedbackvalue: '',
      feedback: ['b188',
        "b189",
        'b190'],
      question: ['b154'],
      option: ['b170',
        "b171",
        "b172"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av21', 'av22', 'av23']
    },
    {
      feedbackvalue: '',
      feedback: ['b188',
        "b189",
        'b190'],
      question: ['b154'],
      option: ['b170',
        "b171",
        "b172"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av21', 'av22', 'av23']
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
