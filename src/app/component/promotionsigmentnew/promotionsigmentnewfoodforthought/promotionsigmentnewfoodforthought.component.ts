import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-promotionsigmentnewfoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,FoodforthoughtComponent],
  templateUrl: './promotionsigmentnewfoodforthought.component.html',
  styleUrls: ['./promotionsigmentnewfoodforthought.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class PromotionsigmentnewfoodforthoughtComponent {
  gamename = "promotionsnew"

  questionanswerpaper: any = [

    {
      feedbackvalue: '',
      feedback: ['b229',
        "b230",
        'b231'],
      question: ['b189'],
      option: ['b199',
        "b200",
        "b201"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad6', 'ad7', 'ad8']
    },

    {
      feedbackvalue: '',
      feedback: ['b232',
        "b233",
        'b234'],
      question: ['b190'],
      option: ['b202',
        "b203",
        "b204"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad9', 'ad10', 'ad11']
    },

    {
      feedbackvalue: '',
      feedback: ['b235',
        "b236",
        'b237'],
      question: ['b191'],
      option: ['b205',
        "b206",
        "b207"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad12', 'ad13', 'ad14']
    },

    {
      feedbackvalue: '',
      feedback: ['b238',
        "b239",
        'b240'],
      question: ['b192'],
      option: ['b208',
        "b209",
        "b210"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad15', 'ad16', 'ad17']
    },
    {
      feedbackvalue: '',
      feedback: ['b241',
        "b242",
        'b243'],
      question: ['b193'],
      option: ['b211',
        "b212",
        "b213"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad18', 'ad19', 'ad20']
    },

    {
      feedbackvalue: '',
      feedback: ['b244',
        "b245",
        'b246'],
      question: ['b194'],
      option: ['b214',
        "b215",
        "b216"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad21', 'ad22', 'ad23']
    },

    {
      feedbackvalue: '',
      feedback: ['b247',
        "b248",
        'b249'],
      question: ['b195'],
      option: ['b217',
        "b218",
        "b219"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad24', 'ad25', 'ad26']
    },

    {
      feedbackvalue: '',
      feedback: ['b250',
        "b251",
        'b252'],
      question: ['b196'],
      option: ['b220',
        "b221",
        "b222"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad27', 'ad28', 'ad29']
    },

    {
      feedbackvalue: '',
      feedback: ['b253',
        "b254",
        'b255'],
      question: ['b197'],
      option: ['b223',
        "b224",
        "b225"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad30', 'ad31', 'ad32']
    },

    {
      feedbackvalue: '',
      feedback: ['b256',
        "b257",
        'b258'],
      question: ['b198'],
      option: ['b226',
        "b227",
        "b228"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad33', 'ad34', 'ad35']
    },

    {
      feedbackvalue: '',
      feedback: ['b256',
        "b257",
        'b258'],
      question: ['b198'],
      option: ['b226',
        "b227",
        "b228"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad33', 'ad34', 'ad35']
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
