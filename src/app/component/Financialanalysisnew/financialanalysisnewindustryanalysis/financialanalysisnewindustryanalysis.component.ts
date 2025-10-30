import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
// import { piechart } from '../../ProductConsumerGame/consumercrafting/consumercrafting.component';
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
}
interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-financialanalysisnewindustryanalysis',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule,
     NgApexchartsModule,MatIconModule, TippyDirective],
  templateUrl: './financialanalysisnewindustryanalysis.component.html',
  styleUrls: ['./financialanalysisnewindustryanalysis.component.scss']
})
export class FinancialanalysisnewindustryanalysisComponent extends AbstractComponent {
  estimatedpassengergraph: barchart;
  foodforthought: boolean = true;
  marketsharebytechgraph: pieChart;
  marketsharebytechgraph1: pieChart;
  marketsharebytechgraph2: pieChart;
  estimatedpassengergraphcell:any = [
    ['d11','e11'],
    ['d12','e12'],
    ['d13','e13'],
    ['d14','e14'],
    ['d15','e15'],
    ['d16','e16'],
    ['d17','e17'],
    ['d18','e18'],
    ['d19','e19'],
    ['d20','e20'],
    ['d21','e21']
  ]

  graphofshareIndiacell:any = [
    ['d34','e34'],
    ['d35','e35'],
    ['d36','e36'],
    ['d37','e37']
  ];

  graphofshareEuropecell:any = [
    ['d44','e44'],
    ['d45','e45'],
    ['d46','e46'],
    ['d47','e47']
  ];

  graphofshareSouthCoreacell:any = [
    ['d54','e54'],
    ['d55','e55'],
    ['d56','e56'],
    ['d57','e57']
  ];
  marketsharebytechgraphnames:any = [];
  marketsharebytechgraph1names:any = [];
  marketsharebytechgraph2names:any = [];

  showAll: boolean[] = [false, false, false, false, false, false];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.estimatedpassengergraph = {
      series: [
       ],
      chart: {
        height: 250,
        type: "bar",
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
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
        // categories: [],
        categories: ['Y0', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Y10'],
        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "Estimated Passenger Cars Market Size, USD bn",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.marketsharebytechgraph = {
      series: [],
      chart: {
        width: 400,
        height: 250,
        type: 'pie',
        offsetX:-50,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign:'center'
      },
      labels: [],
      responsive: [
       
      ],
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
        text: 'Market Share by Technology, % ',
        offsetY: 0,
        // offsetX:-50,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.marketsharebytechgraph1 = {
      series: [],
      chart: {
        width: 400,
        height: 250,
        type: 'pie',
        offsetX:-50,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign:'center'
      },
      labels: [],
      responsive: [
        // {
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       height: 100,
        //     },
        //     legend: {
        //       position: 'middle',
        //     },
        //   },
        // },
      ],
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
        text: 'Market Share by Technology, % ',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.marketsharebytechgraph2 = {
      series: [],
      chart: {
        width: 400,
        height: 250,
        type: 'pie',
        offsetX:-50,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign:'center'
      },
      labels: [],
      responsive: [
       
      ],
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
        text: 'Market Share by Technology, % ',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  textLines: string[] = [
    "A global leader in electric and hydrogen vehicles, currently holds a dominant position in the market with a significant market share of 15%.The company operates across India, Europe, and South Korea, offering a diverse range of sustainable transportation solutions. Electra Motors' current success is attributed to its cutting-edge technology, efficient manufacturing processes, and a well-established network of charging infrastructure.",
    "Looking ahead, Electra Motors envisions expanding its market share to 20% by 2025 through strategic initiatives. The company plans to leverage its current strengths in electric and hydrogen vehicle technologies to capture emerging markets in Asia-Pacific. Electra Motors aims to enhance its production capacity, by introducing new models with improved range and performance. The company is committed to investing in R&D to stay ahead of technological advancements and maintain its leadership in the sustainable automotive sector.",
    "A key player in the hybrid, electric, and hydrogen vehicle segment, currently commands a respectable market share of 10%. The company's market presence spans India, Europe, and South Korea, catering to diverse consumer preferences. Titan Motors has established itself as a technological innovator, integrating smart features and connectivity solutions into its vehicles, contributing to its current market standing.",
    "In the coming years, Titan Motors aims to solidify its market position by increasing its market share to 14%. The company plans to expand manufacturing capacities to meet the growing demand for electric and hybrid vehicles. Titan Motors envisions a comprehensive product lineup, including more electric SUVs and technologically advanced features. Collaborations with tech companies are on the horizon to enhance connectivity and autonomous driving capabilities, ensuring Titan Motors remains at the forefront of innovation.",
    "GreenSpeed Technologies, known for its diverse portfolio encompassing combustion, hybrid, and advanced electric and hydrogen vehicles, currently maintains a market share of 8%. The company has a strong presence in India and Europe, offering solutions tailored to local market demands. GreenSpeed Technologies is recognized for its commitment to sustainability, with eco-friendly manufacturing processes contributing to its current market standing.",
    "GreenSpeed Technologies aims to increase its market share to 12% in the next 2 years through a two-pronged strategy. The company plans to enhance its combustion and hybrid offerings while intensifying efforts in the electric and hydrogen vehicle segments. GreenSpeed Technologies is focused on improving manufacturing efficiency and reducing environmental impact further. The company sees potential in expanding its market presence in South Korea and anticipates increased demand for its advanced propulsion technologies.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  jsonarray1:any = [];
  jsonarray2:any = [];
  jsonarray3:any = [];
  jsonarray4:any = [];
  jsonarray5:any = [];
  override ngOnInit(): void {
    
    this.getFetchData(this.noofattempt);
  }
  openDialog(): void {
    this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: {},
    });
  }
  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
   }
 

   getFetchData(attempt: string) {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];this.jsonarray2 = [];this.jsonarray3 = [];this.jsonarray4 = [];this.jsonarray5 = [];
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.estimatedpassengergraphcell.length; i++) {
                this.jsonarray1.push({ 'x': "", 'y': data.resultList[0].financialAnalysisCM[this.estimatedpassengergraphcell[i][1]] });
                this.jsonarray2.push(data.resultList[0][this.estimatedpassengergraphcell[i][0]]);
              }
              this.estimatedpassengergraph.series = [
                { "name": "Market Size Graph", "data": this.jsonarray1 },
                
              ]

              for (let i = 0; i < 4; i++) {
                this.marketsharebytechgraphnames[i] = data.resultList[0].financialAnalysisCM[this.graphofshareIndiacell[i][0]];
                this.jsonarray3[i] = Number(data.resultList[0].financialAnalysisCM[this.graphofshareIndiacell[i][1]]);

                this.marketsharebytechgraph1names[i] =data.resultList[0].financialAnalysisCM[this.graphofshareEuropecell[i][0]];
                this.jsonarray4[i] = Number(data.resultList[0].financialAnalysisCM[this.graphofshareEuropecell[i][1]]);

                this.marketsharebytechgraph2names[i] =data.resultList[0].financialAnalysisCM[this.graphofshareSouthCoreacell[i][0]];
                this.jsonarray5[i] = Number(data.resultList[0].financialAnalysisCM[this.graphofshareSouthCoreacell[i][1]]);
                }
                
              this.marketsharebytechgraph.series = this.jsonarray3;
              this.marketsharebytechgraph.labels = this.marketsharebytechgraphnames;

              this.marketsharebytechgraph1.series = this.jsonarray4;
              this.marketsharebytechgraph1.labels = this.marketsharebytechgraph1names;

              this.marketsharebytechgraph2.series = this.jsonarray5;
              this.marketsharebytechgraph2.labels = this.marketsharebytechgraph2names;
             
              this.estimatedpassengergraph.xaxis.categories= [this.jsonarray2];

              
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

}