import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-logisticsmodegamefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodforthoughtComponent],
  templateUrl: './logisticsmodegamefoodforthought.component.html',
  styleUrls: ['./logisticsmodegamefoodforthought.component.scss']
})
export class LogisticsmodegamefoodforthoughtComponent {
  gamename = 'logistics';
  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: [['ak7', 'ak8', 'ak9'], ['ak7', 'ak8', 'ak9']],
      question: ["ai7", "ai7"],
      option: [["aj7", "aj8", "aj9"], ["aj7", "aj8", "aj9"]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ac4', 'ac5', 'ac6']
    },
    {
      feedbackvalue: '',
      feedback: [['ak10', 'ak11', 'ak12'], ['ak10', 'ak11', 'ak12']],
      question: ["ai10", "ai10"],
      option: [['aj10', 'aj11', 'aj12'], ['aj10', 'aj11', 'aj12']],
      questionchecked: [false, false, false],
      cellvalue: ['ac7', 'ac8', 'ac9'],
      disabled: false
    },
    {
      feedbackvalue: '',
      feedback: [['ak13', 'ak14','ak15'], ['ak13', 'ak14','ak15']],
      question: ["ai13", "ai13"],
      option: [['aj13', 'aj14','aj15'], ['aj13', 'aj14','aj15']],
      questionchecked: [false, false],
      cellvalue: ['ac10', 'ac11','ac12'],
      disabled: false
    },

    {
      feedbackvalue: '',
      feedback: [['ak16', 'ak17','ak18'], ['ak16', 'ak17','ak18']],
      question: ['ai16', 'ai16'],
      option: [['aj16', 'aj17','aj18'], ['aj16', 'aj17','aj18'],],
      questionchecked: [false, false, false],
      cellvalue: ['ac13', 'ac14', 'ac15'],
      disabled: false


    },

    {
      feedbackvalue: '',
      feedback: [['ak19', 'ak20','ak21'], ['ak19', 'ak20','ak21']],
      question: ["ai19", "ai19"],
      option: [['aj19', 'aj20','aj21'], ['aj19', 'aj20','aj21']],
      questionchecked: [false, false, false],
      cellvalue: ['ac16', 'ac17', 'ac18'],
      disabled: false

    },

    {
      feedbackvalue: '',
      feedback: [['ak22', 'ak23','ak24'], ['ak22', 'ak23','ak24']],
      question: ["ai22", "ai22"],
      option: [['aj22', 'aj23','aj24'], ['aj22', 'aj23','aj24']],
      questionchecked: [false, false],
      cellvalue: ['ac19', 'ac20','ac21'],
      disabled: false,
    },

    {
      feedbackvalue: '',
      feedback: [['ak25', 'ak26','ak27'], ['ak25', 'ak26','ak27']],
      question: ["ai25", "ai25"],
      option: [['aj25', 'aj26','aj27'], ['aj25', 'aj26','aj27']],
      questionchecked: [false, false, false],
      cellvalue: ['ac22', 'ac23', 'ac24'],
      disabled: false,

    },
    {
      feedbackvalue: '',
      feedback: [['ak28', 'ak29','ak30'], ['ak28', 'ak29','ak30']],
      question: ["ai28", "ai28"],
      option: [['aj28', 'aj29','aj30'], ['aj28', 'aj29','aj30'],],
      questionchecked: [false, false, false],
      cellvalue: ['ac25', 'ac26', 'ac27'],
      disabled: false,


    },
    {
      feedbackvalue: '',
      feedback: [['ak31', 'ak32','ak33'], ['ak31', 'ak32','ak33']],
      question: ["ai31", "ai31"],
      option: [['aj31', 'aj32','aj33'], ['aj31', 'aj32','aj33']],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['ac28', 'ac29','ac30'],
    },
    {
      feedbackvalue: '',
      feedback: [['ak31', 'ak32','ak33'], ['ak31', 'ak32','ak33']],
      question: ["ai31", "ai31"],
      option: [['aj31', 'aj32','aj33'], ['aj31', 'aj32','aj33']],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['ac28', 'ac29','ac30'],
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
