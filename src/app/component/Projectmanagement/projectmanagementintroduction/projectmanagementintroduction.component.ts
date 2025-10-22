import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-projectmanagementintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementintroduction.component.html',
  styleUrls: ['./projectmanagementintroduction.component.scss'],
})
export class ProjectmanagementintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];

  translations: any = {
    'show more': {
      en: 'Show More',
      hi: 'और दिखाएं',
      fr: 'Afficher plus',
    },
    'show less': {
      en: 'Show Less',
      hi: 'कम दिखाएं',
      fr: 'Afficher moins',
    },
  };

  selectedLang = 'hi'; // or 'en', 'fr', etc.

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private Sharedservice: SharedserviceService,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  // textLines: string[] = [
  //   "b8",
  //   "b9",
  //   "b10",
  //   "b11",
  //   "b12",
  //   "b13",
  // ]

  textLines: string[] = [
    "Start by reading the Memo, a comprehensive note outlining project objectives, budget constraints, and the designated timeline. This document serves as the foundation, offering a clear overview of the project's scope and limitations, and empowering you to make informed decisions.",
    'In the Project Map & Analysis section, delve into the intricate details of each task, understanding their interconnections and time requirements. This tab enables you to create a strategic plan, ensuring you comprehend the complexity of the project and make well-informed decisions to achieve objectives.',
    'The Task Allocation & Measures tab allows to match resources with tasks based on their skills. Here, you can optimize efficiency by making decisions like implementing overtime or arranging training, which affects budget and time. This section offers a hands-on approach to resource management, ensuring you consider various factors in your decision-making process.',
    "On tracking tab you gain real-time insights into your project's financial health and timeline. This essential tool allows you to monitor the budget, track project timelines, and efficiently manage workdays and associated costs. It empowers informed decision-making, ensuring a cost-effective and well-planned project execution.",
    "It's time to give tangible form to the top ideas. These initial models are crafted not as finished products but as testable entities, ripe for feedback and iteration. The emphasis here is a balanced focus on functionality, aesthetics, and overall user experience.",
  ];

  truncate(text: string) {
    return text.substring(0, 100) + (text.length > 100 ? '...' : '');
  }

  truncatedText: string[] = this.textLines.map(
    (text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''),
  );
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    {
      title: 'Memo',
      image: '../../../../assets/images/projectmanagement/projectintrmar.svg',
      text: this.textLines[0],
      truncatedText: this.truncatedText[0],
      showAll: this.showAll,
    },
    {
      title: 'Project Map',
      image: '.../../../../assets/images/projectmanagement/projectmap.svg',
      text: this.textLines[1],
      truncatedText: this.truncatedText[1],
      showAll: this.showAll,
    },
    {
      title: 'Planning',
      image: '../../../../assets/images/projectmanagement/projectplanning.svg',
      text: this.textLines[2],
      truncatedText: this.truncatedText[2],
      showAll: this.showAll,
    },
    {
      title: 'Tracking',
      image: '../../../../assets/images/projectmanagement/projecttracking.svg',
      text: this.textLines[3],
      truncatedText: this.truncatedText[3],
      showAll: this.showAll,
    },
    {
      title: 'Reports',
      image: '../../../../assets/images/projectmanagement/projectreport.svg',
      text: this.textLines[4],
      truncatedText: this.truncatedText[4],
      showAll: this.showAll,
    },
  ];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  // For Language

  // cards = [
  //   { title: 'b14', image: '../../../../assets/images/projectmanagement/projectintrmar.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
  //   { title: 'b15', image: '.../../../../assets/images/projectmanagement/projectmap.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
  //   { title: 'b16', image: '../../../../assets/images/projectmanagement/projectplanning.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
  //   { title: 'b17', image: '../../../../assets/images/projectmanagement/projecttracking.svgg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
  //   { title: 'b18', image: '../../../../assets/images/projectmanagement/projectreport.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
  // ]

  // translate(key: 'show more' | 'show less'): string {
  //   return this.translations[key][this.selectedLang] || key;
  // }

  // getFetchData() {
  //   let apiname = '/projectmanagement/fetchprojectmanagement';
  //   this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {

  //             this.language = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()];
  //             console.log("language",this.language);
  //             if ((data.resultList[0].projectmanagementdata.al96 == 'yes') || (data.resultList[0].projectmanagementdata.al96 == 'Yes')) {
  //               this.Sharedservice.enableTab();
  //             }
  //             if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
  //               this.foodforthought = false;
  //             }
  //             this.checkloading = false;
  //           }else{
  //             this.checkloading = false;
  //           }
  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  getFetchData() {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            if (
              data.resultList[0].bb7 == 'yes' ||
              data.resultList[0].bb7 == 'Yes'
            ) {
              this.Sharedservice.enableTab();
            }
            if (
              data.resultList[0].projectmanagementCM
                .projectmanagementCMActiveStatus.foodforthoughtstatus ==
              'inactive'
            ) {
              this.foodforthought = false;
            }
          }
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      },
    });
  }

  openDialog(): void {
    this.dialog.open(ProjectmanagementfoodforthoughtComponent, {
      data: {},
    });
  }
}
