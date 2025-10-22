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
  selector: 'app-itmanagementinnovation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itmanagementinnovation.component.html',
  styleUrls: ['./itmanagementinnovation.component.scss']
})
export class ItmanagementinnovationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  showAll: boolean[] = [false, false, false, false, false, false];
  selectedCardId1: string = '';
  selectedCardId2: string = '';


  periodcellname: any = ['aa9', 'aa10', 'aa11', 'aa12', 'aa13', 'ab9', 'ab10', 'ab11', 'ab12', 'ab13', 'ac8', 'ac9',//11
    'ac10', 'ac11', 'ac12', 'ac13', 'ad8', 'ad9', 'ad10', 'ad11', 'ad12', 'ad13', 'ae8', 'ae9', 'ae10', 'ae11',//25
    'ae12', 'ae13', 'aa18', 'aa19', 'aa20', 'ab18', 'ab19', 'ab20', 'ac17', 'ac18', 'ac19', 'ac20', 'ad17', 'ad18',//39
    'ad19', 'ad20', 'aa25', 'aa26', 'aa27', 'aa28', 'ab25', 'ab26', 'ab27', 'ab28', 'ac25', 'ac26', 'ac27', 'ac28',//53
    'aa33', 'aa34', 'aa35', 'ab33', 'ab34', 'ab35', 'ac33', 'ac34', 'ac35',//62
  ];

  databasecellname: any = ['af62', 'af63', 'af64', 'af65', 'af66', 'af69', 'af70', 'af71', 'af74', 'af75', 'af76',//73
    'af77', 'af80', 'af81', 'af82',//77
  ];

  textLines: string[] = [
    "This roadmap focuses on integrating quantum computing technology into Payguard's infrastructure to enhance data processing capabilities, improve encryption methods, and optimize fraud detection algorithms. It can revolutionize operations by enabling faster transaction processing, stronger encryption methods, and more accurate fraud detection, enhancing customer trust and operational efficiency.",
    "This roadmap focuses on developing AR-based payment interfaces that offer immersive and interactive experiences for users, allowing them to visualize and interact with payment transactions in real-time. It can differentiate services by offering innovative and engaging user experiences, attracting tech-savvy customers, and enhancing brand perception and loyalty.",
    "This roadmap focuses on leveraging 5G technology to build high-speed, low-latency payment networks that enable faster transaction processing, seamless connectivity, and enhanced security features. It can revolutionize services by enabling lightning-fast transaction processing, reducing latency, and enhancing security, driving customer satisfaction and market competitiveness.",
    "This roadmap focuses on adopting distributed ledger technology (DLT), such as blockchain, for enhancing transaction security, transparency, and traceability in Payguard's payment ecosystem. It can strengthen payment ecosystem by providing immutable transaction records, reducing fraud risks, and enhancing trust among users and partners, leading to improved market reputation and growth opportunities.",
    "This roadmap focuses on implementing AI-powered chatbots for providing personalized and responsive customer support services, enhancing user engagement, and reducing support costs. It can streamline customer support operations by providing round-the-clock assistance, resolving queries instantly, and improving user satisfaction and retention rates, leading to operational efficiency and cost savings.",
    "This pilot project aims to implement biometric authentication for Payguard's payment gateway system, enhancing security and user experience. Users can authenticate transactions using fingerprint or facial recognition technologies, reducing reliance on traditional authentication methods.",
    "This pilot project focuses on integrating blockchain technology into Payguard's payment gateway system to enhance transparency, traceability, and transaction security. Blockchain-powered smart contracts enable secure and immutable transactions, reducing the risk of fraud and improving trust among users and partners.",
    "This pilot project aims to implement AI-powered fraud detection algorithms within Payguard's payment gateway system to proactively identify and mitigate fraudulent activities in real-time. Machine learning models analyze transaction patterns, detect anomalies, and flag suspicious activities, enabling swift intervention and fraud prevention.",
    "Payguard as a bellwether continuously invests in cutting-edge technologies and innovative features, staying ahead of market trends and setting industry standards.",
    "Payguard as an early adopter embraces emerging technologies and features swiftly, gaining a competitive advantage and driving innovation in the payment gateway industry.",
    "Payguard as a late adopter carefully observes market trends and competitor actions before implementing new technologies and features, ensuring stability and minimizing risks.",
    "Payguard as a laggard tends to be cautious in adopting new technologies and features, preferring to rely on established practices and solutions to maintain stability.",
    "These workshops focus on emerging technologies relevant to the payment gateway industry, such as blockchain, artificial intelligence, and biometric authentication. Participants learn about the latest developments, best practices, and implementation strategies through hands-on exercises and case studies.",
    "These certification programs cover topics such as cybersecurity, data privacy, and regulatory compliance specific to the payment industry. Participants gain in-depth knowledge and skills required to design and maintain secure and compliant payment systems.",
    "Agile development training provides the tech team with methodologies and practices for iterative and collaborative software development. Participants learn to adapt quickly to changing requirements, prioritize tasks effectively, and deliver high-quality products efficiently.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));

  cardData = [
    {
      id: 'card1',
      title: 'aa9',
      img: "assets/images/itmanagement/quantamcomputingintegration.svg",
      databasecellname: "af62",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
        textname: 'ac8',
        cellvalue: 'ac9',
        devtextmonth: 'ad8',
        cellvalue1: 'ad9',
        feasibility: 'ae8',
        cellvalue2: 'ae9',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'aa10',
      img: "assets/images/itmanagement/paymentinterfaces.jpg",
      databasecellname: "af63",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
        textname: 'ac8',
        cellvalue: 'ac10',
        devtextmonth: 'ad8',
        cellvalue1: 'ad10',
        feasibility: 'ae8',
        cellvalue2: 'ae10',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'aa11',
      img: "assets/images/itmanagement/5gpowernetwork.svg",
      databasecellname: "af64",
      ischecked: false,
      description: {
        text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
        textname: 'ac8',
        cellvalue: 'ac11',
        devtextmonth: 'ad8',
        cellvalue1: 'ad11',
        feasibility: 'ae8',
        cellvalue2: 'ae11',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'aa12',
      img: "assets/images/itmanagement/technologyadoptoer.svg",
      databasecellname: "af65",
      ischecked: false,
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        textname: 'ac8',
        cellvalue: 'ac12',
        devtextmonth: 'ad8',
        cellvalue1: 'ad12',
        feasibility: 'ae8',
        cellvalue2: 'ae12',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'aa13',
      img: "assets/images/itmanagement/aiandchatboartforcustomersupport.svg",
      databasecellname: "af66",
      ischecked: false,
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        textname: 'ac8',
        cellvalue: 'ac13',
        devtextmonth: 'ad8',
        cellvalue1: 'ad13',
        feasibility: 'ae8',
        cellvalue2: 'ae13',
      },
      turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 'aa18',
      img: "assets/images/itmanagement/pcidss.svg",
      databasecellname: "af69",
      ischecked: false,
      description: {
        text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac18',
        textmonth: 'ad17',
        cellvalue1: 'ad18',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'aa19',
      img: "assets/images/itmanagement/blockchainintegration.svg",
      databasecellname: "af70",
      ischecked: false,
      description: {
        text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac19',
        textmonth: 'ad17',
        cellvalue1: 'ad19',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'aa20',
      img: "assets/images/itmanagement/isoice27001certificate.jpg",
      databasecellname: "af71",
      ischecked: false,
      description: {
        text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac20',
        textmonth: 'ad17',
        cellvalue1: 'ad20',
      },
      turncatedtext: '',
    },
  ];

  cardData2 = [
    {
      id: 'card1',
      title: 'aa25',
      img: "assets/images/itmanagement/wellwether.svg",
      databasecellname: "af74",
      ischecked: false,
      description: {
        text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac25',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'aa26',
      img: "assets/images/itmanagement/earlyadoptoter.svg",
      databasecellname: "af75",
      ischecked: false,
      description: {
        text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac26',

      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'aa27',
      img: "assets/images/itmanagement/lateadopter.svg",
      databasecellname: "af76",
      ischecked: false,
      description: {
        text: this.textLines[10], truncatedText: this.truncatedText[10], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac27',

      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'aa28',
      img: "assets/images/itmanagement/laggarad.svg",
      databasecellname: "af77",
      ischecked: false,
      description: {
        text: this.textLines[11], truncatedText: this.truncatedText[11], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac28',
      },
      turncatedtext: '',
    },
  ];

  cardData3 = [
    {
      id: 'card1',
      title: 'aa33',
      img: "assets/images/itmanagement/advancetechnologyworkshop.svg",
      databasecellname: "af80",
      ischecked: false,
      description: {
        text: this.textLines[12], truncatedText: this.truncatedText[12], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac33',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'aa34',
      img: "assets/images/itmanagement/certificationprogram.svg",
      databasecellname: "af81",
      ischecked: false,
      description: {
        text: this.textLines[13], truncatedText: this.truncatedText[13], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac34',

      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'aa35',
      img: "assets/images/itmanagement/agilemethodology.svg",
      databasecellname: "af82",
      ischecked: false,
      description: {
        text: this.textLines[14], truncatedText: this.truncatedText[14], showAll: this.showAll,
        textname: 'ac17',
        cellvalue: 'ac35',

      },
      turncatedtext: '',
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
          this.checkloading = false;

          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.status !== "Success" || !data.resultList) return;

              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
              if (data.resultList[0].itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (this.result.itmanagementdata) {
                this.inputDisabled = this.result.itmanagementdata.af96 === 'yes' || this.timefinished;
              }


            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);

        }
      })
  }


  writeGameData(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string, fourthcell: string, fifthcell: string,
    length: number
  ) {
    let apiname = '/itmanagement/singleinputitmanagement';
    let itmanagementinputData: any = {}
    if (inputtype == 'radio') {
      if (length == 5) {
        itmanagementinputData = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [fourthcell]: fourthcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [fifthcell]: fifthcell === cellname ? (event.target.checked ? 1 : 0) : 0,

        };
      } else {
        itmanagementinputData = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [fourthcell]: fourthcell === cellname ? (event.target.checked ? 1 : 0) : 0,


        };
      }



    } else {
      itmanagementinputData = {
        [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
      };

    }

    this._api.writeGameData("itmanagement", 2,
      itmanagementinputData, apiname, 'itmanagementcmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(ItmanagementfoodforthoughtComponent, {
      data: {},
    });
  }

}
