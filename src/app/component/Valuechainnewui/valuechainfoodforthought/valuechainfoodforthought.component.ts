import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-valuechainfoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,FoodforthoughtComponent],
  templateUrl: './valuechainfoodforthought.component.html',
  styleUrls: ['./valuechainfoodforthought.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ValuechainfoodforthoughtComponent implements OnInit {
  gamename = 'valuechainnew';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['b213',
        "b214",
        'b215'],
      question: ['b181'],
      option: ['b189',
        "b190",
        "b191"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p6', 'p7', 'p8']
    },
    {
      feedbackvalue: '',
      feedback: ['b216',
        "b217",
        'b218'],
      question: ['b182'],
      option: ['b192',
        "b193",
        "b194"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p9', 'p10', 'p11']
    },
    {
      feedbackvalue: '',
      feedback: ['b219',
        "b220",
        'b221'],
      question: ['b183'],
      option: ['b195',
        "b196",
        "b197"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p12', 'p13', 'p14']
    },
    {
      feedbackvalue: '',
      feedback: ['b222',
        "b223",
        'b224'],
      question: ['b184'],
      option: ['b198',
        "b199",
        "b200"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p15', 'p16', 'p17']
    },
    {
      feedbackvalue: '',
      feedback: ['b225',
        "b226",
        'b227'],
      question: ['b185'],
      option: ['b201',
        "b202",
        "b203"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p18', 'p19', 'p20']
    },
    {
      feedbackvalue: '',
      feedback: ['b228',
        "b229",
        'b230'],
      question: ['b186'],
      option: ['b204',
        "b205",
        "b206"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p21', 'p22', 'p23']
    },
    {
      feedbackvalue: '',
      feedback: ['b231',
        "b232",
        'b233'],
      question: ['b187'],
      option: ['b207',
        "b208",
        "b209"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p24', 'p25', 'p26']
    },
    {
      feedbackvalue: '',
      feedback: ['b234',
        "b235",
        'b236'],
      question: ['b188'],
      option: ['b210',
        "b211",
        "b212"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p27', 'p28', 'p29']
    },
    {
      feedbackvalue: '',
      feedback: ['b234',
        "b235",
        'b236'],
      question: ['b188'],
      option: ['b210',
        "b211",
        "b212"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['p27', 'p28', 'p29']
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
