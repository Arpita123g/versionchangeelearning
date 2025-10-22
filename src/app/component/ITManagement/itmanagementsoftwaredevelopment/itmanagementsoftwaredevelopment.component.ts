import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ItmanagementfoodforthoughtComponent } from '../itmanagementfoodforthought/itmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-itmanagementsoftwaredevelopment',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itmanagementsoftwaredevelopment.component.html',
  styleUrls: ['./itmanagementsoftwaredevelopment.component.scss']
})
export class ItmanagementsoftwaredevelopmentComponent extends AbstractComponent {
  foodforthought: boolean = true;
  inputDisabled: boolean = false;
  result: any = [];
  resultdata:any = [];
  showAll: boolean[] = [false, false, false, false, false, false];
  resultChunks: any;
  selectedOption: number | null = null;
  checkdisable: boolean = false;

  databasecellname: any = ['af34', 'af35', 'af38', 'af39', 'af40', 'af43', 'af44', 'af45'];

  periodcellname: any = ['n6', 'o6', 'm7', 'n7', 'o7', 'm8', 'n8', 'o8', 'm9', 'n9', 'o9', 'm10', 'n10', 'o10', 'm11',//14
    'n11', 'o11', 'm12', 'n12', 'o12', 'm13', 'n13', 'o13', 'm14', 'n14', 'o14', //25
    'm20', 'm21', 'm22', 'n20', 'q19', //30
    'q20', 'q21', 'q22', 'r19', 'r20', 'r21', 'r22', 'n21', 'n22', 'm27', 'm28', 'm29', 'n27', 'n28', 'n29'];//45

  textLines: string[] = [
    "The waterfall methodology is a traditional sequential approach to software development. It consists of distinct phases such as requirements analysis, design, implementation, testing, deployment, and maintenance. Each phase must be completed before moving on to the next, with little room for iteration or changes once a phase is finished. The phases are Requirements Analysis >> Design >> Implementation >> Testing >> Deployment >> Maintenance.",
    "Agile methodology is an iterative and incremental approach to software development. It emphasizes collaboration, flexibility, and responsiveness to change. Development is divided into short iterations or sprints, typically lasting 1-4 weeks, during which cross-functional teams work on small, manageable increments of functionality. The stages are Planning >> Iterative Development (Sprints) >> Continuous Integration >> Testing >> Deployment >> Monitoring and Feedback.",
    "DevOps methodology is a collaborative approach that combines software development (Dev) and IT operations (Ops) to automate and streamline the software delivery process. It emphasizes continuous integration, continuous delivery (CI/CD), and automated testing to accelerate the pace of development and improve deployment reliability. The approach is Planning and Development >> Continuous Integration and Testing >> Continuous Deployment >>Monitoring and Feedback >> Continuous Improvement.",
    "Git is a distributed version control system widely used for tracking changes in source code during software development. It allows developers to collaborate on projects, maintain version history, and manage code branches efficiently. Git is highly efficient and offers excellent performance, even with large repositories and complex branching structures.",
    "Subversion (SVN) is a centralized version control system commonly used for managing source code and documents. It provides features such as versioning, branching, tagging, and merging, facilitating collaboration among developers. SVN offers decent performance for smaller projects but may experience scalability issues with large repositories or concurrent operations.",
    "Mercurial is a distributed version control system similar to Git, designed for managing projects of all sizes. It provides features such as distributed collaboration, branching, merging, and file tracking, offering flexibility and scalability for diverse development workflows. Mercurial offers good performance for most use cases, with efficient handling of large repositories and concurrent operations."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));

  cardData = [
    {
      id: 'card1',
      title: 'm20',
      img: "assets/images/itmanagement/waterfallmethology.svg",
      databasecellname: "af38",
      ischecked: false,
      text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
      description: [
        { textname: 'q19', cellvalue: 'q20' },
        { textname: 'r19', cellvalue: 'r20', }

      ],
      // turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'm21',
      img: "assets/images/itmanagement/agilemethodology.svg",
      databasecellname: "af39",
      ischecked: false,
      text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
      description: [
        { textname: 'q19', cellvalue: 'q21' },
        { textname: 'r19', cellvalue: 'r21' }
      ],
      // turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'm22',
      img: "assets/images/itmanagement/devopsmethodology.svg",
      databasecellname: "af40",
      ischecked: false,
      text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
      description: [
        { textname: 'q19', cellvalue: 'q22' },
        { textname: 'r19', cellvalue: 'r22' }
      ],
      // turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 'm27',
      img: "assets/images/itmanagement/gitinsoftware.svg",
      databasecellname: "af43",
      ischecked: false,
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
      },
      // turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'm28',
      img: "assets/images/itmanagement/subversion.svg",
      databasecellname: "af44",
      ischecked: false,
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
      },
      // turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'm29',
      img: "assets/images/itmanagement/mercurial.jpg",
      databasecellname: "af45",
      ischecked: false,
      description: {
        text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
      },
      // turncatedtext: '',
    },
  ];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }



  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/itmanagement/fetchitmanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
              if (data.resultList[0].itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.result = data.resultList[0];
              // for (let i = 0; i < this.periodcellname.length; i++) {
              //   this.result[i] = data.resultList[0].itManagementCM.itmanagementperioddata[this.periodcellname[i]];
              // };
              // for (let i = 46; i < 54; i++) {
              //   this.result[i] = data.resultList[0].itmanagementdata[this.databasecellname[i - 46]];
                // if (i > 58) {
                //   if (this.result[i] == 1) {
                //     this.cardData[i - 59].ischecked = true;
                //   } else {
                //     this.cardData[i - 59].ischecked = false;
                //   }
                // }
              // };
              console.log("result", this.result)
              // for (let i = 0; i < 44; i += 4) {
              //   this.resultChunks.push(this.result.slice(i, i + 4));
              // }
              if (data.resultList[0].itmanagementdata) {
                this.inputDisabled = data.resultList[0].itmanagementdata.af96 === 'yes' || this.timefinished;
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

 

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }


  writevalue(cellname: string, event: any, firstcell: string, secondcell: string, thirdcell: string,length: number) {
    let apiname = "/itmanagement/singleinputitmanagement";
    let itinputData: { [key: string]: number | string } = {};

    
    itinputData = [firstcell, secondcell, thirdcell]
        .slice(0, length)
        .reduce((acc: { [key: string]: number }, cell) => {
          acc[cell] = cell === cellname ? (event.target.checked ? 1 : 0) : 0;
          return acc;
        }, {});
    
    this._api.writeGameData("itmanagement", 1, itinputData, apiname, 'itmanagementcmid')
    .subscribe({
      next: (data: any) => data.status === "Success" && this.getFetchData(),
      error: (error: any) => {
        this.checkloading =  false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

    getSelection(inputField: string, index: number, event: any,) {
    // Handle radio button selection
    if (event.target.type === "radio") {
      [46, 47].forEach(i => this.result[i] = (i === index ? 1 : 0));
      this.selectedOption = index;
    } else {
      this.result[index] = event.target.checked ? 1 : 0;
    }

    // Grouped Reset for index ranges
    [[48, 49, 50], [51, 52, 53]].forEach(group => {
      if (group.includes(index)) {
        group.forEach(i => this.result[i] = 0);
        this.result[index] = 1;
      }
    });

    const apidata = { [inputField]: this.result[index] };

    this._api.writeGameData("itmanagement", 1, apidata, '/itmanagement/singleinputitmanagement', 'itmanagementcmid')
    .subscribe({
      next: (data: any) => data.status === "Success" && this.getFetchData(),
      error: (error: any) => {
        this.checkloading = this.checkdisable = false;
        this.driveerrorLog(error, '/itmanagement/singleinputitmanagement');
      }
    });




      // (data: any) => { },
      // (error: any) => {
      //   this.checkloading = false;
      //   this.inputDisabled = false;
      //   this.driveerrorLog(error, '/itmanagement/singleinputitmanagement');
      // }
  

}
openDialog(): void {
  this.dialog.open(ItmanagementfoodforthoughtComponent, {
    data: {},
  });
}

}
