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
import { ItmanagementfoodforthoughtComponent } from '../itmanagementfoodforthought/itmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-itmanagementintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itmanagementintroduction.component.html',
  styleUrls: ['./itmanagementintroduction.component.scss']
})
export class ItmanagementintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
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


              if ((data.resultList[0].itmanagementdata.af96 == 'yes') || (data.resultList[0].itmanagementdata.af96 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "Dive into the dynamic landscape of market scenarios, where you'll explore your role and responsibilities in understanding market trends and competition. Analyze current challenges and opportunities, assess customer needs and preferences, and develop strategies to capitalize on market trends while navigating competitive threats.",
    "In this tab, you'll make critical decisions regarding the hardware setup and overall architecture of your information management system. Choose between cloud or on-premises deployment, optimize system performance, and design data storage solutions to ensure scalability and reliability.",
    "Dive into the realm of software development and integration as you decide between custom-built solutions or off-the-shelf software packages. Seamlessly integrate your system with existing applications, manage the entire software development lifecycle, and implement DevOps practices for efficient deployment and maintenance.",
    "Protect your information management system from cyber threats and ensure compliance with industry regulations in this tab. Set up robust access controls, encrypt sensitive data, conduct security audits, and maintain compliance with regulatory standards to safeguard your organization's assets and maintain trust with stakeholders.",
    "Explore the frontier of technology innovation and stay ahead of the curve in this tab. Research and evaluate emerging technologies such as AI and blockchain, pilot innovative projects to test their feasibility, develop a roadmap for future technology investments, and invest in training to equip your team with the skills needed to leverage these technologies effectively.",
    "Here, you'll receive valuable insights and feedback on your strategic decisions, as well as detailed reports highlighting key performance metrics and outcomes. Evaluate the effectiveness of your strategies, identify areas for improvement, and refine your approach based on real-time feedback to drive continuous improvement and success in managing the information management system.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/itmanagement/introductiontabmarket.jpg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'System Architecture', image: '.../../../../assets/images/itmanagement/systemarchitechtureintro.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Software Development', image: '../../../../assets/images/itmanagement/softwaredevelopmentintro.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Security', image: '../../../../assets/images/itmanagement/introductionsecurity.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Innovation', image: '../../../../assets/images/itmanagement/introductioninnovation.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/itmanagement/reportsintroduction.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(ItmanagementfoodforthoughtComponent, {
      data: {},
    });
  }

}
