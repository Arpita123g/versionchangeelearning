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
  selector: 'app-itmanagementsecurity',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itmanagementsecurity.component.html',
  styleUrls: ['./itmanagementsecurity.component.scss']
})
export class ItmanagementsecurityComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  showAll: boolean[] = [false, false, false, false, false, false];

 
  textLines: string[] = [
    "Multi-factor authentication requires users to provide multiple forms of verification before granting access to the payment gateway system. This typically includes something the user knows (e.g., password), something they have (e.g., token or mobile device), and/or something they are (e.g., biometric data).",
    "Encryption ensures that sensitive data transmitted between users and the payment gateway system, as well as data stored within the system, is protected from unauthorized access. Transport Layer Security (TLS) encryption secures data in transit, while encryption algorithms such as AES protect data at rest.",
    "An Intrusion Detection and Prevention System (IDPS) monitors network traffic and system activity for signs of malicious behavior or unauthorized access attempts. It uses advanced detection techniques to identify and block suspicious activities in real-time.",
    "A Security Information and Event Management (SIEM) system collects, analyzes, and correlates security event data from various sources within the payment gateway system. It provides real-time monitoring, threat detection, incident response, and compliance reporting capabilities.",
    "Regular security audits and penetration testing assess the security posture of the payment gateway system by identifying vulnerabilities and weaknesses that could be exploited by cyber attackers. They involve comprehensive assessments of system architecture, configurations, code, and controls.",
    "The Reserve Bank of India (RBI) issues guidelines for payment system operators to ensure the safety, security, and efficiency of electronic payment systems in India. Compliance includes requirements for risk management, security controls, data protection, and operational resilience.",
    "PCI DSS certification is required for payment gateway companies that process, store, or transmit cardholder data. It sets security standards for protecting payment card information and requires implementing controls such as encryption, access controls, and vulnerability management.",
    "ISO/IEC 27001 certification is an international standard for information security management systems (ISMS). It provides a systematic approach to managing sensitive information, including financial data processed by payment gateway companies. Compliance requires implementing security controls, risk assessments, and continuous improvement processes.",
    "The National Payments Corporation of India (NPCI) issues guidelines for payment system participants, including payment gateway companies. Compliance includes requirements for secure transactions, fraud prevention, dispute resolution, and interoperability with NPCI-managed payment systems such as UPI and IMPS.",
    "Compliance with the Information Technology Act, 2000, and associated regulations is essential for safeguarding electronic transactions and protecting sensitive information processed by payment gateway companies. It includes requirements for data privacy, cybersecurity, electronic signatures, and legal liabilities.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));


  cardData = [
    {
      id: 'card1',
      title: 't18',
      img: "assets/images/itmanagement/multiufactorauthentication.svg",
      databasecellname: "af48",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v18',
        textmonth: 'y17',
        cellvalue1: 'y18',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 't19',
      img: "assets/images/itmanagement/encryptionindatainreset.svg",
      databasecellname: "af49",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v19',
        textmonth: 'y17',
        cellvalue1: 'y19',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 't20',
      img: "assets/images/itmanagement/instrutiondetectionandpreventsystem.svg",
      databasecellname: "af50",
      ischecked: false,
      description: {
        text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v20',
        textmonth: 'y17',
        cellvalue1: 'y20',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 't21',
      img: "assets/images/itmanagement/securityinformationandeventmanagement.svg",
      databasecellname: "af51",
      ischecked: false,
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v21',
        textmonth: 'y17',
        cellvalue1: 'y21',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 't22',
      img: "assets/images/itmanagement/regularsecurityaudit.svg",
      databasecellname: "af52",
      ischecked: false,
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v22',
        textmonth: 'y17',
        cellvalue1: 'y22',
      },
      turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 't9',
      img: "assets/images/itmanagement/rbiguideline.svg",
      databasecellname: "af55",
      ischecked: false,
      description: {
        text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v9',
        textmonth: 'w8',
        cellvalue1: 'w9',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 't10',
      img: "assets/images/itmanagement/pcidss.svg",
      databasecellname: "af56",
      ischecked: false,
      description: {
        text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v10',
        textmonth: 'w8',
        cellvalue1: 'w10',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 't11',
      img: "assets/images/itmanagement/isoice27001certificate.jpg",
      databasecellname: "af57",
      ischecked: false,
      description: {
        text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v11',
        textmonth: 'w8',
        cellvalue1: 'w11',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 't12',
      img: "assets/images/itmanagement/adherencenpci.svg",
      databasecellname: "af58",
      ischecked: false,
      description: {
        text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v12',
        textmonth: 'w8',
        cellvalue1: 'w12',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 't13',
      img: "assets/images/itmanagement/itactcompliance.jpg",
      databasecellname: "af59",
      ischecked: false,
      description: {
        text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll,
        textname: 'v8',
        cellvalue: 'v13',
        textmonth: 'w8',
        cellvalue1: 'w13',
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
          if (data.status == "Success") {
            if (data.resultList != null) {
            
            this.result = data.resultList[0];
            this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
            this.foodforthought = this.result.itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus !== 'inactive';
  
            if (this.result.itmanagementdata) {
              this.inputDisabled = this.result.itmanagementdata.af96 === 'yes' || this.timefinished;
            }

            }
            this.checkloading  = false;
            
          } else {
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);

        }
      })
  }

  

  writeGameData(cellname: string, event: any) {
    let itinputData = {
      [cellname]: event.target.checked ? 1 : 0
    };

    this._api.mergerAcquisitionDataWrite("itmanagement", 3,
      itinputData, '/itmanagement/singleinputitmanagement', 'itmanagementcmid').subscribe({
        next: (data: any) => data.status === "Success" && this.getFetchData(),
        error: (error: any) => {
          this.checkloading = this.checkdisable = false;
          this.driveerrorLog(error, '/itmanagement/singleinputitmanagement');
        }
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
