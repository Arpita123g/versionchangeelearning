import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { CvpanalysisfoodforthoughtComponent } from '../cvpanalysisfoodforthought/cvpanalysisfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-cvpanalysismarketing',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './cvpanalysismarketing.component.html',
  styleUrls: ['./cvpanalysismarketing.component.scss']
})
export class CvpanalysismarketingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  topstatus: boolean = true;
  consumerpreferene: barchart;
  consumerpreferene1: barchart;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  checkdisable: boolean = false;


  databasecellname: any = ['ae8', 'c21', 'e21', 'ae9', 'af8', 'c22', 'e22', 'af9', 'c35', 'c36', 'c37', 'ae10', 'ae11',
    'c38', 'd35', 'd36', 'd37', 'af10', 'af11', 'd38',
  ];

  consumerpreferenechart: any = ['h14', 'h15', 'h16'];
  consumerpreferenechart1: any = ['h19', 'h20', 'h21'];

  

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.consumerpreferene = {
      series: [
        //   {
        //   name: 'Factors Importance with base 1',
        //   data: [1.25, 1.4, 2.67]
        // }
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
      xaxis: {
        categories: ["Quality Control", "Advertising", "Price",]
      },
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
        text: '',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    }

    this.consumerpreferene1 = {
      series: [
        //   {
        //   name: 'Factors Importance with base 1',
        //   data: [1.19, 1.3, 3.12]
        // }
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
      xaxis: {
        categories: ["Quality Control", "Advertising", "Price",]
      },
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
        text: '',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    }
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    // this.checkloading = true;
    
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.result = [];
              this._global.casemanagementid.next(data.resultList[0].cvpanalysiscmid);

              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.topstatus == 'inactive') {
                this.topstatus = false;
              }

              if ((data.resultList[0].ai8 == 'yes') || (data.resultList[0].ai8 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]].toFixed(0);
              }
              
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.emissionsstatus == "active") {
                this.showEmmisionStatus = true;
              } else {
                this.showEmmisionStatus = false;
              }

              // this.consumerpreferene.series = [
              //   {
              //     "name": "Factors Importance with base 1", "data": [
              //       data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart[0]],
              //       data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart[1]],
              //       data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart[2]]]
              //   },
              // ]

              // this.consumerpreferene1.series = [
              //   {
              //     "name": "Factors Importance with base 1", "data": [data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart1[0]],
              //     data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart1[1]],
              //     data.resultList[0].cvpAnalysisCM[this.consumerpreferenechart1[2]]]
              //   },
              // ]
              this.InputRespectupdateValue(); 


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

  inputtablevalue(value: any, inputfield: string) {

    if (inputfield == 'demand') {
      if ((this.result[value] >= 0) && (this.result[value] < 300001)) {
        this.valueWrite();
      } else {
        this.result[value] = 0;
        this._alert.error("The expected range is between 0 to 300000");
      }
    } else if (inputfield == 'price') {
      if ((this.result[value] >= 300) && (this.result[value] < 2001)) {
        this.valueWrite();
      } else {
        this.result[value] = 0;
        this._alert.error("The expected range is between 300 to 2000");
      }
    } else if (inputfield == 'advertising') {
      if ((this.result[value] >= 0) && (this.result[value] < 51)) {
        this.valueWrite();
      } else {
        this.result[value] = 0;
        this._alert.error("The expected range is between 0 to 50");
      }
    } else {
      this.valueWrite();
    }


  }

   InputRespectupdateValue() {
   
    let apiname = '/cvpanalysis/fetchcvpanalysis';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
       
        const resultIndices = [1, 2, 5, 6, 8, 9, 10,13,14,15,16,19];
        const dataCellIndices = [1, 2, 5, 6, 8,9,10,13,14,15,16,19];

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]].toFixed(0);
        }

         this.consumerpreferene.series = [
                {
                  "name": "Factors Importance with base 1", "data": [
                   updatedData.cvpAnalysisCM[this.consumerpreferenechart[0]],
                   updatedData.cvpAnalysisCM[this.consumerpreferenechart[1]],
                   updatedData.cvpAnalysisCM[this.consumerpreferenechart[2]]]
                },
              ]

              this.consumerpreferene1.series = [
                {
                  "name": "Factors Importance with base 1", "data": [updatedData.cvpAnalysisCM[this.consumerpreferenechart1[0]],
                  updatedData.cvpAnalysisCM[this.consumerpreferenechart1[1]],
                  updatedData.cvpAnalysisCM[this.consumerpreferenechart1[2]]]
                },
              ]
      }
    });
  }

  valueWrite() {
    let apiname = '/cvpanalysis/singleinputcvpanalysis';
    let marketingData = {
      "ae8":  (this.result[0]) == undefined ? 0 : Number(this.result[0]),
      "ae9":  (this.result[3]) == undefined ? 0 : Number(this.result[3]),
      "af8":  (this.result[4]) == undefined ? 0 : Number(this.result[4]),
      "af9":  (this.result[7]) == undefined ? 0 : Number(this.result[7]),
      "ae10": (this.result[11]) == undefined ? 0 : Number(this.result[11]),
      "ae11": (this.result[12]) == undefined ? 0 : Number(this.result[12]),
      "af10": (this.result[17]) == undefined ? 0 : Number(this.result[17]),
      "af11": (this.result[18]) == undefined ? 0 : Number(this.result[18]),
    }
    this._api.logisticsDataWrite("cvpanalysis", 1,
      marketingData, apiname, 'cvpanalysiscmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.InputRespectupdateValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(CvpanalysisfoodforthoughtComponent, {
      data: {},
    });
  }

 

}
