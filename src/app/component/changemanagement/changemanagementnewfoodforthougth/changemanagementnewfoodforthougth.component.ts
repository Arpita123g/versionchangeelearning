import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-changemanagementnewfoodforthougth',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './changemanagementnewfoodforthougth.component.html',
  styleUrls: ['./changemanagementnewfoodforthougth.component.scss']

})
export class ChangemanagementnewfoodforthougthComponent {
  gamename = 'changemanagement';
  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: [['av7', 'av8', 'av9'], ['av7', 'av8', 'av9']],
      question: ["at7", "at7"],
      option: [["au7", "au8", "au9"], ["au7", "au8", "au9"]],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['av6', 'av7', 'av8']
    },
    {
      feedbackvalue: '',
      feedback: [['av10', 'av11', 'av12'], ['av10', 'av11', 'av12']],
      question: ["at10", "at10"],
      option: [['au10', 'au11', 'au12'], ['au10', 'au11', 'au12']],
      questionchecked: [false, false, false],
      cellvalue: ['av9', 'av10', 'av11'],
      disabled: false
    },
    {
      feedbackvalue: '',
      feedback: [['av13', 'av14', 'av15'], ['av13', 'av14', 'av15']],
      question: ["at13", "at13"],
      option: [['au13', 'au14', 'au15'], ['au13', 'au14', 'au15']],
      questionchecked: [false, false],
      cellvalue: ['av12', 'av13', 'av14'],
      disabled: false
    },

    {
      feedbackvalue: '',
      feedback: [['av16', 'av17', 'av18'], ['av16', 'av17', 'av18']],
      question: ['at16', 'at16'],
      option: [['au16', 'au17', 'au18'], ['au16', 'au17', 'au18'],],
      questionchecked: [false, false, false],
      cellvalue: ['av15', 'av16', 'av17'],
      disabled: false


    },

    {
      feedbackvalue: '',
      feedback: [['av19', 'av20', 'av21'], ['av19', 'av20', 'av21']],
      question: ["at19", "at19"],
      option: [['au19', 'au20', 'au21'], ['au19', 'au20', 'au21']],
      questionchecked: [false, false, false],
      cellvalue: ['av18', 'av19', 'av20'],
      disabled: false

    },

    {
      feedbackvalue: '',
      feedback: [['av22', 'av23', 'av24'], ['av22', 'av23', 'av24']],
      question: ["at22", "at22"],
      option: [['au22', 'au23', 'au24'], ['au22', 'au23', 'au24']],
      questionchecked: [false, false],
      cellvalue: ['av21', 'av22', 'av23'],
      disabled: false,
    },
    {
      feedbackvalue: '',
      feedback: [['av22', 'av23','av24'], ['av22', 'av23','av24']],
      question: ["at22", "at22"],
      option: [['au22', 'au23','au24'], ['au22', 'au23','au24']],
      questionchecked: [false, false],
      cellvalue: ['av21', 'av22','av23'],
      disabled: false,
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
