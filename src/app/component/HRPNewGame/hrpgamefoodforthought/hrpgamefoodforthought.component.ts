import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-hrpgamefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,FoodforthoughtComponent],
  templateUrl: './hrpgamefoodforthought.component.html',
  styleUrls: ['./hrpgamefoodforthought.component.scss']
})
export class HrpgamefoodforthoughtComponent implements OnInit {
  gamename = 'hrplanningnew';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['b214',
        "b215",
        'b216'],
      question: ['b166'],
      option: ['b178',
        "b179",
        "b180"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s7', 's8', 's9']
    },
    {
      feedbackvalue: '',
      feedback: ['b217',
        "b218",
        'b219'],
      question: ['b167'],
      option: ['b181',
        "b182",
        "b183"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s10', 's11', 's12']
    },
    {
      feedbackvalue: '',
      feedback: ['b220',
        "b221",
        'b222'],
      question: ['b168'],
      option: ['b184',
        "b185",
        "b186"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s13', 's14', 's15']
    },
    {
      feedbackvalue: '',
      feedback: ['b223',
        "b224",
        'b225'],
      question: ['b169'],
      option: ['b187',
        "b188",
        "b189"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s16', 's17', 's18']
    },
    {
      feedbackvalue: '',
      feedback: ['b226',
        "b227",
        'b228'],
      question: ['b170'],
      option: ['b190',
        "b191",
        "b192"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s19', 's20', 's21']
    },
    {
      feedbackvalue: '',
      feedback: ['b229',
        "b230",
        'b231'],
      question: ['b171'],
      option: ['b193',
        "b194",
        "b195"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s22', 's23', 's24']
    },
    {
      feedbackvalue: '',
      feedback: ['b232',
        "b233",
        'b234'],
      question: ['b172'],
      option: ['b196',
        "b197",
        "b198"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s25', 's26', 's27']
    },
    {
      feedbackvalue: '',
      feedback: ['b235',
        "b236",
        'b237'],
      question: ['b173'],
      option: ['b199',
        "b200",
        "b201"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s28', 's29', 's30']
    },
    {
      feedbackvalue: '',
      feedback: ['b238',
        "b239",
        'b240'],
      question: ['b174'],
      option: ['b202',
        "b203",
        "b204"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s31', 's32', 's33']
    },
    {
      feedbackvalue: '',
      feedback: ['b241',
        "b242",
        'b243'],
      question: ['b175'],
      option: ['b205',
        "b206",
        "b207"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s34', 's35', 's36']
    },
    {
      feedbackvalue: '',
      feedback: ['b244',
        "b245",
        'b246'],
      question: ['b176'],
      option: ['b208',
        "b209",
        "b210"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s37', 's38', 's39']
    },
    {
      feedbackvalue: '',
      feedback: ['b247',
        "b248",
        'b249'],
      question: ['b177'],
      option: ['b211',
        "b212",
        "b213"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s40', 's41', 's42']
    },
    {
      feedbackvalue: '',
      feedback: ['b247',
        "b248",
        'b249'],
      question: ['b177'],
      option: ['b211',
        "b212",
        "b213"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['s40', 's41', 's42']
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
