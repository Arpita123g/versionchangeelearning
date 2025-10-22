import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNoData,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { ItmanagementfoodforthoughtComponent } from '../itmanagementfoodforthought/itmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

interface barChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  noData: ApexNoData;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-itmanagementsystemarchitecture',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, RouterModule,NgApexchartsModule,MatIconModule],
    templateUrl: './itmanagementsystemarchitecture.component.html',
  styleUrls: ['./itmanagementsystemarchitecture.component.scss']
})
export class ItmanagementsystemarchitectureComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  expectednoofdailytransactionchart: barChart;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  showAll: boolean[] = [false, false, false, false, false, false];
  jsonarray1: any = [];

  // periodcellname: any = ['e8', 'e9', 'f8', 'f9', 'f31', 'f37', 'e52', 'e53', 'e54', 'e55', 'f52', 'f53', 'f54', 'f55',//13
  //   'g51', 'g52', 'g53', 'g54', 'g55'//18
  // ];


  // databasecellname: any = ['af7', 'af8', 'c11', 'c12', 'c13', 'c14', 'd11', 'd12', 'd13', 'd14', 'e10', 'e11', 'e12',//31
  //   'e13', 'e14', 'f10', 'f11', 'f12', 'f13', 'f14', 'g10', 'g11', 'g12', 'g13', 'g14', 'h10', 'h11', 'h12', 'h13',//47
  //   'h14', 'i10', 'i11', 'i12', 'i13', 'i14', 'af11', 'af12', 'af13', 'af14', 'c18', 'c19', 'c20', 'd19', 'd20', 'e17',//63
  //   'e18', 'e19', 'e20', 'h17', 'h18', 'h19', 'h20', 'i17', 'i18', 'i19', 'i20', 'af17', 'af18', 'af19', 'af22', 'c24',//79
  //   'c25', 'c26', 'e23', 'e24', 'e25', 'e26', 'f23', 'f24', 'f25', 'f26', 'af23', 'af24', 'af25', 'af28', 'af29',//95
  //   'af30', 'af31'//97
  // ];

  expectednoofdailytransactionchartrange = [
    'm4', 'n4', 'o4'
  ]

  textLines: string[] = [
    "Cloud servers are virtualized servers hosted and managed by a third-party Cloud service provider. They offer scalability, flexibility, and cost-effectiveness, allowing organizations to quickly provision resources on-demand and pay only for what They use. With Cloud servers, businesses can access a wide range of services and features, such as automated backups, security monitoring, and global scalability, without the need for upfront investments in hardware or infrastructure maintenance.",
    "On-premise servers are physical servers that are owned, operated, and maintained by the organization within their own facilities, such as data centers or server rooms. They provide full control over infrastructure and data, ensuring compliance with regulatory requirements and data sovereignty concerns. On-premise servers offer high performance and low latency, making them suitable for applications with stringent performance requirements or sensitive data processing needs. However, they require upfront investments in hardware, maintenance, and operational overhead.",
    "EC2 offers scalable virtual servers in the cloud, providing a wide range of instance types and configurations to meet various workload requirements. It provides flexibility, reliability, and a vast ecosystem of services and integrations.",
    "Virtual Machines offer a diverse selection of virtualized computing resources, including Windows and Linux-based VMs, with customizable configurations and integration with suite of cloud services.",
    "Compute Engine provides scalable VMs with customizable configurations and industry-leading performance. It offers integration with global network infrastructure and advanced management features.",
    "Droplets are simple, cost-effective cloud VMs designed for developers and small businesses. They offer predictable pricing, easy deployment, and a user-friendly interface, making them ideal for startups and development projects.",
    "Meraki MX Security Appliance offers cloud-managed security and networking features, including firewall, VPN, and content filtering, with centralized management and easy deployment.",
    "SRX Series Services Gateways provide advanced security and networking capabilities, including intrusion prevention, application visibility, and dynamic VPN, for robust protection and performance.",
    "UniFi Dream Machine (UDM) is an all-in-one networking solution with built-in security, routing, and wireless access, offering simplicity and affordability for small to medium-sized cloud server deployments.",
    "AWS RDS is a fully managed relational database service that offers easy deployment, scalability, and high availability for popular database engines such as MySQL, PostgreSQL, and SQL Server.",
    "Azure SQL Database is a fully managed relational database service that provides built-in intelligence, advanced security features, and global scalability for mission-critical applications.",
    "Cloud SQL is a fully managed relational database service that offers high performance, automated backups, and seamless integration with other Cloud services for flexible and scalable database deployments.",
    "Horizontal scaling involves adding more resources, such as servers or instances, to distribute workload and handle increased demand. This approach increases system capacity and fault tolerance by spreading the load across multiple resources.",
    "Vertical scaling involves upgrading existing resources, such as increasing CPU, memory, or storage capacity, to improve performance and accommodate growing demands. This approach enhances the capabilities of individual resources.",
    "Caching involves storing frequently accessed data in temporary storage (cache) closer to the users or applications, reducing the need to fetch data from the original data source. This improves response times and reduces latency for accessing frequently requested data.",
    "Load balancing distributes incoming traffic across multiple servers or instances to optimize resource utilization, improve fault tolerance, and ensure high availability. This approach enhances scalability by evenly distributing workload and preventing overloading of individual resources."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));

  truncate(text:string){
    return (text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  }

  cardData = [
    {
      id: 'card1',
      title: 'e8',
      img: "assets/images/itmanagement/cloudserver.svg",
      inputcellname: "af7",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,

      },
      showAll: false,
    },
    {
      id: 'card2',
      title: 'e9',
      img: "assets/images/itmanagement/onepremiseserver.svg",
      inputcellname: "af8",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
      },
      showAll: false,
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 'c11',
      img: "assets/images/itmanagement/elsticcoputecloud.svg",
      inputcellname: "af11",
      ischecked: false,
      description: {
        text: "d11", 
        showAll: this.showAll,
        textname: 'e10',
        textvalue: 'e11',
        textname1: 'f10',
        textvalue1: 'f11',
        textname2: 'g10',
        textvalue2: 'g11',
        textname3: 'h10',
        textvalue3: 'h11',
        textname4: 'i10',
        textvalue4: 'i11',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'c12',
      img: "assets/images/itmanagement/virtualmechine.svg",
      inputcellname: 'af12',
      ischecked: false,
      description: {
        text: "d12",
        showAll: this.showAll,
        textname: 'e10',
        textvalue: 'e12',
        textname1: 'f10',
        textvalue1: 'f12',
        textname2: 'g10',
        textvalue2: 'g12',
        textname3: 'h10',
        textvalue3: 'h12',
        textname4: 'i10',
        textvalue4: 'i12',


      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'c13',
      img: "assets/images/itmanagement/computeengine.svg",
      inputcellname: 'af13',
      ischecked: false,
      description: {
        text: "d13",
        showAll: this.showAll,
        textname: 'e10',
        textvalue: 'e13',
        textname1: 'f10',
        textvalue1: 'f13',
        textname2: 'g10',
        textvalue2: 'g13',
        textname3: 'h10',
        textvalue3: 'h13',
        textname4: 'i10',
        textvalue4: 'i13',


      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'c14',
      img: "assets/images/itmanagement/droplets.svg",
      inputcellname: 'af14',
      ischecked: false,
      description: {
        text: "d14",
        showAll: this.showAll,
        textname: 'e10',
        textvalue: 'e14',
        textname1: 'f10',
        textvalue1: 'f14',
        textname2: 'g10',
        textvalue2: 'g14',
        textname3: 'h10',
        textvalue3: 'h14',
        textname4: 'i10',
        textvalue4: 'i14',


      },
      turncatedtext: '',
    },
  ];

  cardData2 = [
    {
      id: 'card1',
      title: 'c18',
      img: "assets/images/itmanagement/merakimxsecurityapplince.svg",
      inputcellname: 'af17',
      description: {
        text: "d18",
        showAll: this.showAll,
        textname: 'e17',
        textvalue: 'e18',
        textname1: 'h17',
        textvalue1: 'h18',
        textname2: 'i17',
        textvalue2: 'i18',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'c19',
      img: "assets/images/itmanagement/earlyadoptoter.svg",
      inputcellname: 'af18',
      ischecked: false,
      description: {
        text: "d19", 
        showAll: this.showAll,
        textname: 'e17',
        textvalue: 'e19',
        textname1: 'h17',
        textvalue1: 'h19',
        textname2: 'i17',
        textvalue2: 'i19',

      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'c20',
      img: "assets/images/itmanagement/unifidreammeechine.jpg",
      inputcellname: "af19",
      ischecked: false,
      description: {
        text: "d20", 
        showAll: this.showAll,
        textname: 'e17',
        textvalue: 'e20',
        textname1: 'h17',
        textvalue1: 'h20',
        textname2: 'i17',
        textvalue2: 'i20',
      },
      turncatedtext: '',
    },
  ];

  cardData3 = [
    {
      id: 'card1',
      title: 'c24',
      img: "assets/images/itmanagement/awsrds.svg",
      inputcellname: "af23",
      ischecked: false,
      description: {
        text: "d24", 
        showAll: this.showAll,
        textname: 'e23',
        textvalue: 'e24',
        textname1: 'f23',
        textvalue1: 'f24',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'c25',
      img: "assets/images/itmanagement/azuresqldatabase.jpg",
      inputcellname: "af24",
      ischecked: false,
      description: {
        text: "d25", 
        showAll: this.showAll,
        textname: 'e23',
        textvalue: 'e25',
        textname1: 'f23',
        textvalue1: 'f25',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'c26',
      img: "assets/images/itmanagement/cloudsql.svg",
      inputcellname: "af25",
      ischecked: false,
      description: {
        text: "d26", 
        showAll: this.showAll,
        textname: 'e23',
        textvalue: 'e26',
        textname1: 'f23',
        textvalue1: 'f26',
      },
      turncatedtext: '',
    },
  ];

  cardData4 = [
    {
      id: 'card1',
      title: 'e52',
      img: "assets/images/itmanagement/horizontalscaling.svg",
      inputcellname: "af28",
      ischecked: false,
      description: {
        text: this.textLines[12], truncatedText: this.truncatedText[12], showAll: this.showAll,
        textname: 'g51',
        textvalue: 'g52',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'e53',
      img: "assets/images/itmanagement/verticallysacling.svg",
      inputcellname: "af29",
      ischecked: false,
      description: {
        text: this.textLines[13], truncatedText: this.truncatedText[13], showAll: this.showAll,
        textname: 'g51',
        textvalue: 'g53',

      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'e54',
      img: "assets/images/itmanagement/caching.svg",
      inputcellname: "af30",
      ischecked: false,
      description: {
        text: this.textLines[14], truncatedText: this.truncatedText[14], showAll: this.showAll,
        textname: 'g51',
        textvalue: 'g54',

      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'e55',
      img: "assets/images/itmanagement/laodbalching.svg",
      inputcellname: "af31",
      ischecked: false,
      description: {
        text: this.textLines[15], truncatedText: this.truncatedText[15], showAll: this.showAll,
        textname: 'g51',
        textvalue: 'g55',

      },
      turncatedtext: '',
    },
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.expectednoofdailytransactionchart = {
      series: [],
      chart: {
        height: 250,
        type: "bar",
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {}
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "40%",
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Y1', 'Y2', 'Y3'],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Expected number of daily transaction",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

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
              this.jsonarray1 = [];
              this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
              if (data.resultList[0].itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.result = data.resultList[0];

              for (let i = 0; i < this.expectednoofdailytransactionchartrange.length; i++) {
                this.jsonarray1.push({ 'x': "", "y": data.resultList[0].itmanagementdata[this.expectednoofdailytransactionchartrange[i]] });
              }
              this.expectednoofdailytransactionchart.series = [{ "name": "Server", "data": this.jsonarray1 },
              ]
              
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

  writeecommercevalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string, fourthcell: string, length: number) {
    let apiname = "/itmanagement/singleinputitmanagement";
    let itinputData: { [key: string]: number | string } = {};

    if (inputtype === 'input') {
      if((event.target.value<0)||(event.target.value>20000)){
        event.target.value = 0;
        this._alert.error("range between 0 to 20000");
      }
      itinputData = {
        [cellname]:event.target.value
      };
    }
    if (inputtype === 'radio') {
      itinputData = [firstcell, secondcell, thirdcell, fourthcell]
        .slice(0, length)
        .reduce((acc: { [key: string]: number }, cell) => {
          acc[cell] = cell === cellname ? (event.target.checked ? 1 : 0) : 0;
          return acc;
        }, {});
    } else {
      itinputData = {
        [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
      };
    }

    this._api.writeGameData("itmanagement", 1, itinputData, apiname, 'itmanagementcmid')
    .subscribe({
      next: (data: any) => data.status === "Success" && this.getFetchData(),
      error: (error: any) => {
        this.checkloading = this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      }
    });
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

