import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';
    
@Component({
  selector: 'app-businessbasicfoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodforthoughtComponent],
  templateUrl: './businessbasicfoodforthought.component.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  // standalone: true,
})

export class BusinessbasicFoodforthoughtComponent {

  gamename = "businessbasic"
  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: [['aa5', 'aa6', 'aa7'], ['aa5', 'aa6', 'aa7']],
      question: ["y5", "y5"],
      option: [["z5", "z6", "z7",], ["z5", "z6", "z7",]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['b87', 'b88', 'b89']
    },
    {
      feedbackvalue: '',
      feedback: [['aa9', 'aa10', 'aa11'], ['aa9', 'aa10', 'aa11']],
      question: ["y9", "y9"],
      option: [['z9', 'z10', 'z11'], ['z9', 'z10', 'z11']],
      questionchecked: [false, false, false],
      cellvalue: ['b91', 'b92', 'b93'],
      disabled: false
    },
    {
      feedbackvalue: '',
      feedback: [['aa13', 'aa14'], ['aa13', 'aa14']],
      question: ["y13", "y13"],
      option: [["z13", "z14",], ["z13", "z14",]],
      questionchecked: [false, false],
      cellvalue: ['b95', 'b96'],
      disabled: false
    },

    {
      feedbackvalue: '',
      feedback: [['aa16', 'aa17', 'aa18'], ['aa16', 'aa17', 'aa18']],
      question: ['y16', 'y16'],
      option: [["z16",
        "z17",
        "z18"], ["z16",
        "z17",
        "z18"]],
      questionchecked: [false, false, false],
      cellvalue: ['b98', 'b99', 'b100'],
      disabled: false


    },

    {
      feedbackvalue: '',
      feedback: [['aa20', 'aa21', 'aa22'], ['aa20', 'aa21', 'aa22']],
      question: ["y20", "y20"],
      option: [["z20",
        "z21",
        "z22"], ["z20",
        "z21",
        "z22"]],
      questionchecked: [false, false, false],
      cellvalue: ['b102', 'b103', 'b104'],
      disabled: false

    },

    {
      feedbackvalue: '',
      feedback: [['aa24', 'aa25'], ['aa24', 'aa25']],
      question: ["y24", "y24"],
      option: [["z24",
        "z25"], ["z24",
        "z25"]],
      questionchecked: [false, false],
      cellvalue: ['b106', 'b107'],
      disabled: false,
    },

    {
      feedbackvalue: '',
      feedback: [['aa27', 'aa28', 'aa29'], ['aa27', 'aa28', 'aa29']],
      question: ["y27", "y27"],
      option: [["z27",
        "z28",
        "z29"], ["z27",
        "z28",
        "z29"]],
      questionchecked: [false, false, false],
      cellvalue: ['b109', 'b110', 'b111'],
      disabled: false,

    },
    {
      feedbackvalue: '',
      feedback: [['aa31', 'aa32', 'aa33'], ['aa31', 'aa32', 'aa33']],
      question: ["y31", "y31"],
      option: [["z31",
        "z32",
        "z33"], ["z31",
        "z32",
        "z33"]],
      questionchecked: [false, false, false],
      cellvalue: ['b113', 'b114', 'b115'],
      disabled: false,


    },
    {
      feedbackvalue: '',
      feedback: [['aa35', 'aa36'], ['aa35', 'aa36']],
      question: ["y35", "y35"],
      option: [["z35",
        "z36"], ["z35",
        "z36"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['b117', 'b118'],
    },

    {
      feedbackvalue: '',
      feedback: [['aa38', 'aa39', 'aa40'], ['aa38', 'aa39', 'aa40']],
      question: ["y38", "y38"],
      option: [["z38",
        "z39",
        "z40",], ["z38",
        "z39",
        "z40",]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['b120', 'b121', 'b122'],

    },
    {
      feedbackvalue: '',
      feedback: [['aa42', 'aa43', 'aa44'], ['aa42', 'aa43', 'aa44']],
      question: ["y42", "y42"],
      option: [["z42",
        "z43",
        "z44"], ["z42",
        "z43",
        "z44"]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['b124', 'b125', 'b126'],

    },
    {
      feedbackvalue: '',
      feedback: [['aa46', 'aa47'], ['aa46', 'aa47']],
      question: ["y46", "y46"],
      option: [["z46", "z47"], ["z46", "z47"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['b128', 'b129'],
    },
    {
      feedbackvalue: '',
      feedback: [['aa46', 'aa47'], ['aa46', 'aa47']],
      question: ["y46", "y46"],
      option: [["z46", "z47"], ["z46", "z47"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['b128', 'b129'],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
