import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-foodforthoughtconsumer',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './foodforthoughtconsumer.component.html',
  styleUrls: ['./foodforthoughtconsumer.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FoodforthoughtConsumerComponent {

  gamename = 'consumerbehaviour';
  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: [['an96', 'an97', 'an98'], ['an96', 'an97', 'an98']],
      question: ["al96", "al96"],
      option: [["am96", "am97", "am98",], ["am96", "am97", "am98",]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ac6', 'ac7', 'ac8']
    },
    {
      feedbackvalue: '',
      feedback: [['an99', 'an100', 'an101'], ['an99', 'an100', 'an101']],
      question: ["al99", "al99"],
      option: [['am99', 'am100', 'am101'], ['am99', 'am100', 'am101']],
      questionchecked: [false, false, false],
      cellvalue: ['ac9', 'ac10', 'ac11'],
      disabled: false
    },
    {
      feedbackvalue: '',
      feedback: [['an102', 'an103'], ['an102', 'an103']],
      question: ["al102", "al102"],
      option: [["am102", "am103",], ["am102", "am103",]],
      questionchecked: [false, false],
      cellvalue: ['ac12', 'ac13'],
      disabled: false
    },

    {
      feedbackvalue: '',
      feedback: [['an104', 'an105', 'an106'], ['an104', 'an105', 'an106']],
      question: ['al104', 'al104'],
      option: [["am104",
        "am105",
        "am106"], ["am104",
        "am105",
        "am106"],],
      questionchecked: [false, false, false],
      cellvalue: ['ac14', 'ac15', 'ac16'],
      disabled: false


    },

    {
      feedbackvalue: '',
      feedback: [['an107', 'an108', 'an109'], ['an107', 'an108', 'an109']],
      question: ["al107", "al107"],
      option: [["am107",
        "am108",
        "am109"], ["am107",
        "am108",
        "am109"]],
      questionchecked: [false, false, false],
      cellvalue: ['ac17', 'ac18', 'ac19'],
      disabled: false

    },

    {
      feedbackvalue: '',
      feedback: [['an110', 'an111'], ['an110', 'an111']],
      question: ["al110", "al110"],
      option: [["am110",
        "am111"], ["am110",
        "am111"]],
      questionchecked: [false, false],
      cellvalue: ['ac20', 'ac21'],
      disabled: false,
    },

    {
      feedbackvalue: '',
      feedback: [['an112', 'an113', 'an114'], ['an112', 'an113', 'an114']],
      question: ["al112", "al112"],
      option: [["am112",
        "am113",
        "am114"], ["am112",
        "am113",
        "am114"]],
      questionchecked: [false, false, false],
      cellvalue: ['ac22', 'ac23', 'ac24'],
      disabled: false,

    },
    {
      feedbackvalue: '',
      feedback: [['an115', 'an116', 'an117'], ['an115', 'an116', 'an117']],
      question: ["al115", "al115"],
      option: [["am115",
        "am116",
        "am117"], ["am115",
        "am116",
        "am117"],],
      questionchecked: [false, false, false],
      cellvalue: ['ac25', 'ac26', 'ac27'],
      disabled: false,


    },
    {
      feedbackvalue: '',
      feedback: [['an118', 'an119'], ['an118', 'an119']],
      question: ["al118", "al118"],
      option: [["am118",
        "am119"], ["am118",
        "am119"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['ac28', 'ac29'],
    },

    {
      feedbackvalue: '',
      feedback: [['an120', 'an121', 'an123'], ['an120', 'an121', 'an123']],
      question: ["al120", "al120"],
      option: [["am120",
        "am121",
        "am122",], ["am120",
        "am121",
        "am122",]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ac30', 'ac31', 'ac32'],

    },
    {
      feedbackvalue: '',
      feedback: [['an123', 'an124', 'an125'], ['an123', 'an124', 'an125']],
      question: ["al123", "al123"],
      option: [["am123",
        "am124",
        "am125"], ["am123",
        "am124",
        "am125"]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ac33', 'ac34', 'ac35'],

    },
    {
      feedbackvalue: '',
      feedback: [['an126', 'an127'], ['an126', 'an127']],
      question: ["al126", "al126"],
      option: [["am126", "am127"], ["am126", "am127"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['ac36', 'ac37'],
    },
    {
      feedbackvalue: '',
      feedback: [['an126', 'an127'], ['an126', 'an127']],
      question: ["al126", "al126"],
      option: [["am126", "am127"], ["am126", "am127"]],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['ac36', 'ac37'],
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }


  
}
