import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BusinessbasicFoodforthoughtComponent } from '../businessbasicfoodforthought/businessbasicfoodforthought.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip:ApexTooltip;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-businessbascislocation',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule], 
  templateUrl: './businessbascislocation.component.html',
  styleUrls: ['../BusinessBasicsGame.scss']
})
export class BusinessbascislocationComponent extends AbstractComponent {
  licandregulcost: barchart;

  x58: number = 0; x59: number = 0; x60: number = 0; x61: number = 0; x62: number = 0; x63: number = 0; x64: number = 0; x65: number = 0;
  c18: string = "";
  c26: string = ""; g11: string = ""; g12: string = ""; d7: string = ""; d8: string = "";
  showLicensingAndRegulation: boolean = true;
  jsonarray1: any = [];
  checkdisable: boolean = false;
  foodforthought: boolean = true;
  licandregulcostrange = [
    ['d11', 'e11'],
    ['d12', 'e12']
  ]
  jaynagar: boolean = false;
  Whitefield: boolean = false;
  jaynagarrent: string = '';
  whitefieldrent: string = '';
  market: boolean = false;
  inhouse: string = '';
  outsourcing: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.licandregulcost = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],

      fill: this.fill[0],
      yaxis: this.yaxis[0],
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
        text: "Licensing & Regulation Monthly Cost, INR",
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
          fontSize: "14px",
      // whiteSpace: "nowrap",
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.d7 = data.resultList[0].businessBasicCaseManagement.d7;
              this.d8 = data.resultList[0].businessBasicCaseManagement.d8;
              this.g11 = data.resultList[0].businessBasicCaseManagement.g11;
              this.g12 = data.resultList[0].businessBasicCaseManagement.g12;
              this.c18 = data.resultList[0].c18;
              this.c26 = data.resultList[0].c26;
              this.inhouse = data.resultList[0].businessBasicCaseManagement.d11;
              this.outsourcing = data.resultList[0].businessBasicCaseManagement.d12;
              this.jaynagarrent = data.resultList[0].businessBasicCaseManagement.e7;//period data
              this.whitefieldrent = data.resultList[0].businessBasicCaseManagement.e8;//period data
              this.jsonarray1 = [];
              for (let i = 0; i < 2; i++) {
                this.jsonarray1.push({ 'x': this.labelsBreak(data.resultList[0].businessBasicCaseManagement[this.licandregulcostrange[i][0]]), 'y': data.resultList[0].businessBasicCaseManagement[this.licandregulcostrange[i][1]] });
              }
              this.licandregulcost.series = [{ "name": "value", "data": this.jsonarray1 }];

              if ((data.resultList[0].h4 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
              }
              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.licenseandregstatus == "active") {
                this.showLicensingAndRegulation = true;
              } else {
                this.showLicensingAndRegulation = false;
              }
            }
            this.checkloading = false;
          }else{
            this.checkloading = false;
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getSelectedlocation(value: string) {
    this.c18 = value;
    this.writeLocation();
  }

  getSelectedlicensing(value: string) {
    this.c26 = value;
    this.writeLocation();
  }

  writeLocation() {
    let apiname = '/businessbasic/singleinputbusinessbasic';
    let locationData = {
      "c18": String(this.c18),
      "c26": String(this.c26),
    }
    this._api.businessdatawrite("businessbasic", 1,
      locationData, apiname,'businessbasiccasemanagementid').subscribe((data: any) => {

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }
  openDialog(): void {
    this.dialog.open(BusinessbasicFoodforthoughtComponent, {
      data: {},
    });
  }
  selectedOption: string = ''; // Initialize to an initial value

  marketclick() {
    this.market = true;
  }
  textLines: string = "The company will hire one resource who will have complete oversight over the store's compliance needs. The resource will provide customized solutions as per the business needs. The one drawback would be without expert insights there may be blind spots which will cause delays in operations.";
  textLines1: string = "The outsourcing agency is ISBI Bank, these professionals are trained to stay up to date on changing regulations. There is the possibility of a quicker turnaround on getting compliant due to their experience. The drawback is they are expensive and relying on a third party for compliance might not always align with the company’s business objective.";

  showall: boolean = false;
  showallnew: boolean = false;
  toggleshow() {
    this.showall = !this.showall;
  }

  truncatedText: string = this.textLines.substring(0, 190) + (this.textLines.length > 190 ? '...' : '');

  toggleshow1() {
    this.showallnew = !this.showallnew;
  }
  truncatedText1: string = this.textLines1.substring(0, 190) + (this.textLines1.length > 190 ? '...' : '');

}
