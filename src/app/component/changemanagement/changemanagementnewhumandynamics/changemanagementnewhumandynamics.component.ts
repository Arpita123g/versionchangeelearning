import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-changemanagementnewhumandynamics',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementnewhumandynamics.component.html',
  styleUrls: ['./changemanagementnewhumandynamics.component.scss']
})
export class ChangemanagementnewhumandynamicsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  p = '#C3F9C3 ';
  n = '#f7cac9';
  nu = '#FFD77E ';
  blank = '#EEEEEF'
  showAll1: boolean[] = [false, false, false];
  showAll2: boolean[] = [false, false, false];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  textLines1: string[] = ["Mr Thappar boasts an impressive 25-year track record in the industry, having successfully managed multimillion-dollar projects. His association with Via spans the last 15 years, during which he has navigated various departments and, for the past 5 years, reported directly to the CEO. Known for his pacesetting leadership style, he encourages immediate action and is punctual with deadlines. Outside of work, Mr. Thappar is a family man, with two children pursuing their bachelor's degrees in the USA. Working Preference: Yes, I prefer working in a team, but it must be a punctual and deadline-driven team. I thrive in smart, efficient teams that value both collaboration and precision. Passions: I am passionate about building a large organization that creates significant value for people. The challenge and satisfaction of contributing to organizational growth drive my professional aspirations. Strengths and Weaknesses: People management is a significant strength of mine; however, I acknowledge that my relentless pursuit of perfection can sometimes be a weakness.",

    "A graduate of the Wharton School at Penn State, Mrs Barclay has been an integral part of Via since she arrived in India in 2014. With prior experience in asset management at Blackstone, she is poised to take on the role of Vice president of Asset Management soon. Known for her process-oriented approach, she prefers succinct meetings adhering to schedules. Mrs Barclay is a proud parent with a school-going child. Working Preference: Absolutely, I prefer working in a team, especially with young minds focused on the future. Interacting with diverse perspectives in a collaborative setting energizes me. Passions: My health is a top priority, and I eagerly look forward to the holidays. Balancing a successful career with personal well-being is essential to me. Strengths and Weaknesses: A strong work focus is one of my strengths, but I admit that I can be sensitive to criticism, making it a potential weakness.",

    "Mr Roy, a cheerful Chartered Accountant with 15 years of industry experience, joined Eco three years before the acquisition. His career includes a stint as a Tax consultant with the Big 4, where he earned the nickname 'problem solver.' A people person, he enjoys building relationships and frequently hosts weekend parties. Despite not being a stickler for processes, Mr. Roy possesses a sharp and keen mind. He is a divorcee. Working Preference: Yes, I prefer working in a team. Building wealth, and involving friends and family, is more fulfilling and enjoyable within a collaborative setting. Passions: I am passionate about creating wealth and ensuring the prosperity of my close ones. Building strong relationships is a key part of this journey. Strengths and Weaknesses: Building relationships is undoubtedly a strength, but my fear of not solving a problem can be a hindrance at times."
  ]
  textLines2: string[] = [
    "With 25 years of experience and an Ivy League education, Miss Mehta brings a wealth of operational expertise from her tenure in major consulting firms. A Sigma black belt and former member of General Electric's operations team, she joined Eco five years before the acquisition. Highly process-oriented and organized, she values punctuality and has a short temper. In addition to her professional achievements, Miss Mehta has adopted two children, both enrolled in a top sports academy. Working Preference: Initially a solo runner, I've recognized the importance of people management in leadership and have started working in teams to enhance this aspect. Passions: Working towards goals that contribute to a larger vision is a professional passion. In my personal life, guiding my kids toward successful sports careers brings me immense joy. Strengths and Weaknesses: My strength lies in number crunching, but I acknowledge that asking for help when needed can be a weakness.",

    "Mrs Pratap, with five years in the real estate industry, made significant contributions at Eco after her tenure with Black Olives Venture. Described as a boon by her reporting manager, she graduated from Mumbai University and recently got married. A social and jolly individual, Mrs Pratap values her friendship with Anne and appreciates the structured approach to work. Her husband is aspiring to build his startup. Working Preference: I am a team player, but the nature of my job role often requires solo performance. It's a dynamic balance that I navigate based on the task’s demands. Passions: Project financing and valuation excite me. I am passionate about building a successful career in this direction and contributing to impactful projects. Strengths and Weaknesses: Understanding people is one of my strengths, while organizational skills are areas where I continue to develop.",

    "A recent graduate from an Ivy League college, Mr. Saxena joined Eco with a penchant for technology and a keen interest in projects involving complex tech. Known for his mathematical modelling approach to real estate project valuation, he balances socializing on weekends and fully focuses on work during the week. An ambivert, he enjoys exploring diverse cuisines, often joining Mr. Roy in their quest for the best biryanis. Working Preference: It depends on whom I am working with. I adapt my approach based on the dynamics of the team or the individual project requirements. Passions: I am passionate about software and technology that transforms the real estate valuation process. Embracing innovation in this field excites me. Strengths and Weaknesses: My go-getter attitude is a strength, but I recognize that overworking can be a potential weakness that I need to manage effectively.",
  ]

  truncatedText1: string[] = this.textLines1.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  truncatedText2: string[] = this.textLines2.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));

  cards1 = [
    { name: "Kabir Thappar", text: this.textLines1[0], truncatedText: this.truncatedText1[0], showAll: this.showAll1 },
    { name: "Neha Pratap", text: this.textLines2[1], truncatedText: this.truncatedText2[1], showAll: this.showAll2 },
    { name: "Rajas Roy", text: this.textLines1[2], truncatedText: this.truncatedText1[2], showAll: this.showAll1 },

  ];
  cards2 = [
    { name: "Priya Mehta", text: this.textLines2[0], truncatedText: this.truncatedText2[0], showAll: this.showAll2 },
    { name: "Anne Barclay", text: this.textLines1[1], truncatedText: this.truncatedText1[1], showAll: this.showAll1 },
    { name: "Rajat Saxena", text: this.textLines2[2], truncatedText: this.truncatedText2[2], showAll: this.showAll2 },
  ];

  override ngOnInit(): void {
    this.getFetchData();
  }


  toggleshow1(index: number) {
    this.showAll1[index] = !this.showAll1[index];
  }
  toggleshow2(index: number) {
    this.showAll2[index] = !this.showAll2[index];
  }


  getFetchData() {
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].changemanagementcmid);
            if (data.resultList[0].changeManagementCM.changeManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

          }
          this.checkloading = false;
        }

      }, error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }

    })
  }
  openDialog(): void {
    this.dialog.open(ChangemanagementnewfoodforthougthComponent, {
      data: {},
    });
  }
}
