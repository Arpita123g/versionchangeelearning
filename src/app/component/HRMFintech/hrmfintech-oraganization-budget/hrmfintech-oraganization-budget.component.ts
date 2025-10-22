import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
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
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
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
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-hrmfintech-oraganization-budget',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,NgApexchartsModule,MatIconModule],
  templateUrl: './hrmfintech-oraganization-budget.component.html',
  styleUrls: ['./hrmfintech-oraganization-budget.component.scss']
})
export class HrmfintechOraganizationBudgetComponent extends AbstractComponent {
  inputDisabled: boolean = false;
  result: any = {}
  foodforthought: boolean = true;

  tools: any = [
    {
      title: "Tool for Performance & Goals",
      cellName: ["e326", "e327", "e328", "e329", "e330", "e331"],
      icon: "1 (1).svg"
    }, {
      title: "Tool for Recruitment Analytics",
      cellName: ["e334", "e335", "e336", "e337", "e338", "e339"],
      icon: "1 (3).svg"
    }, {
      title: "Tool for Workforce Analytics",
      cellName: ["e342", "e343", "e344", "e345", "e346", "e347"],
      icon: "1 (4).svg"
    }, {
      title: "Tool for Process Content Guidance",
      cellName: ["e350", "e351", "e352", "e353", "e354", "e355"],
      icon: "1 (2).svg"
    },
  ]
  levels: any[] = [
    {
      title: 'Base Level',
      icon: 'base.png'
    },
    {
      title: 'Intermediate Level',
      icon: 'intermediate.png'
    },
    {
      title: 'Expert Level',
      icon: 'expert.png'
    }
  ]

  graphShellValue: any = {
    toolCostGraph: ['c338', 'c339', 'c340', 'c341', 'c342', 'c343'],
    estimatedCummulativeEffectGraph: ['c348', 'c349', 'c350', 'c351', 'c352', 'c353']
  }
  toolCostGraph: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
      categories: ['Previous Year', 'Current Year'],
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: true,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
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
        formatter: function (val: any) {
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
      enabled: true,
    },
    title: {
      text: "Tool ownership cost, k INR",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  }
  estimatedCummulativeEffectGraph: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
      categories: ['Previous Year', 'Current Year'],
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: true,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
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
        formatter: function (val: any) {
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
      enabled: true,
    },
    title: {
      text: "Projected incremental effectiveness %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  }

  optionalCase: any = ['productengstatus', 'customersuccessstatus', 'designcommunicationstatus']

  projectedBudget: any = [
    {
      title: "Hiring Cost",
      salesCellName: ['c473', 'c474', 'c475', 'c476', 'c477', 'c478'],
      productCellName: ['d473', 'd474', 'd475', 'd476', 'd477', 'd478'],
      customerCellName: ['e473', 'e474', 'e475', 'e476', 'e477', 'e478'],
      designCellName: ['f473', 'f474', 'f475', 'f476', 'f477', 'f478']
    },
    {
      title: "Retrenchment Cost",
      salesCellName: ['c479', 'c480', 'c481', 'c482', 'c483', 'c484'],
      productCellName: ['d479', 'd480', 'd481', 'd482', 'd483', 'd484'],
      customerCellName: ['e479', 'e480', 'e481', 'e482', 'e483', 'e484'],
      designCellName: ['f479', 'f480', 'f481', 'f482', 'f483', 'f484']
    },
    {
      title: "Salary Cost",
      salesCellName: ['c485', 'c486', 'c487', 'c488', 'c489', 'c490'],
      productCellName: ['d485', 'd486', 'd487', 'd488', 'd489', 'd490'],
      customerCellName: ['e485', 'e486', 'e487', 'e488', 'e489', 'e490'],
      designCellName: ['f485', 'f486', 'f487', 'f488', 'f489', 'f490']
    },
    {
      title: "Training Cost",
      salesCellName: ['c491', 'c492', 'c493', 'c494', 'c495', 'c496'],
      productCellName: ['d491', 'd492', 'd493', 'd494', 'd495', 'd496'],
      customerCellName: ['e491', 'e492', 'e493', 'e494', 'e495', 'e496'],
      designCellName: ['f491', 'f492', 'f493', 'f494', 'f495', 'f496']
    },
    {
      title: "Leadership Programme Cost",
      salesCellName: ['c497', 'c498', 'c499', 'c500', 'c501', 'c502'],
      productCellName: ['d497', 'd498', 'd499', 'd500', 'd501', 'd502'],
      customerCellName: ['e497', 'e498', 'e499', 'e500', 'e501', 'e502'],
      designCellName: ['f497', 'f498', 'f499', 'f500', 'f501', 'f502']
    },
    {
      title: "Division Policy Cost",
      salesCellName: ['c503', 'c504', 'c505', 'c506', 'c507', 'c508'],
      productCellName: ['d503', 'd504', 'd505', 'd506', 'd507', 'd508'],
      customerCellName: ['e503', 'e504', 'e505', 'e506', 'e507', 'e508'],
      designCellName: ['f503', 'f504', 'f505', 'f506', 'f507', 'f508']
    },
    {
      title: "Diversity Inclusion Policy Cost",
      salesCellName: ['c509', 'c510', 'c511', 'c512', 'c513', 'c514'],
      productCellName: ['d509', 'd510', 'd511', 'd512', 'd513', 'd514'],
      customerCellName: ['e509', 'e510', 'e511', 'e512', 'e513', 'e514'],
      designCellName: ['f509', 'f510', 'f511', 'f512', 'f513', 'f514']
    },
    {
      title: "Townhall Programme Cost",
      salesCellName: ['c515', 'c516', 'c517', 'c518', 'c519', 'c520'],
      productCellName: ["d515", "d516", "d517", "d518", "d519", "d520"],
      customerCellName: ['e515', 'e516', 'e517', 'e518', 'e519', 'e520'],
      designCellName: ["f515", "f516", "f517", "f518", "f519", "f520"]
    },

    {
      title: "Tools Cost",
      salesCellName: ['c521', 'c522', 'c523', 'c524', 'c525', 'c526'],
      productCellName: ["d521", "d522", "d523", "d524", "d525", "d526"],
      customerCellName: ['e521', 'e522', 'e523', 'e524', 'e525', 'e526'],
      designCellName: ["f521", "f522", "f523", "f524", "f525", "f526"]
    },
    {
      title: "Total Cost",
      salesCellName: ['c527', 'c528', 'c529', 'c530', 'c531', 'c532'],
      productCellName: ['d527', 'd528', 'd529', 'd530', 'd531', 'd532'],
      customerCellName: ['e527', 'e528', 'e529', 'e530', 'e531', 'e532'],
      designCellName: ["f527", "f528", "f529", "f530", "f531", "f532"]
    },
    {
      title: "Budget Cost",
      salesCellName: ['c533', 'c534', 'c535', 'c536', 'c537', 'c538'],
      productCellName: ['d533', 'd534', 'd535', 'd536', 'd537', 'd538'],
      customerCellName: ['e533', 'e534', 'e535', 'e536', 'e537', 'e538'],
      designCellName: ['f533', 'f534', 'f535', 'f536', 'f537', 'f538']
    },
  ]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();

  }
  getFetchData() {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);
              if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((data.resultList[0].decisions.d417 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }
              this.genrateGraph(this.noofattempt);
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


  openDialog(): void {
    this.dialog.open(HrmfintechFoodforthoughtComponent, {
      data: {},
    });
  }

  genrateGraph(noofattempt: string) {
    const cuurentattemptno = Number(noofattempt);
    const previousattemptno = Number(noofattempt) - 1;
    const toolCostGraphSeries = [
      {
        name: "Total Cost of Buying Tools, including Maintainance",
        data: [this.result.graph[this.graphShellValue.toolCostGraph[previousattemptno]] || 0, this.result.graph[this.graphShellValue.toolCostGraph[cuurentattemptno]] || 0]
      }
    ];
    const estimatedCummulativeEffectGraphSeries = [
      {
        name: "Estimated Increase of Effectiveness, %",
        data: [Number(Number(this.result.graph[this.graphShellValue.estimatedCummulativeEffectGraph[previousattemptno]]).toFixed(2)) || 0, Number(Number(this.result.graph[this.graphShellValue.estimatedCummulativeEffectGraph[cuurentattemptno]]).toFixed(2)) || 0]
      }
    ];
    this.toolCostGraph.series = toolCostGraphSeries;
    this.estimatedCummulativeEffectGraph.series = estimatedCummulativeEffectGraphSeries;

  }
  writehrmvalue(cellname: string, e: any, title: string) {

    let apiname = "/hrmgame/singleinputhrmgame";
    let value = title;
    if (cellname && value) {
      let body = {
        decisions: {
          [cellname]: value,
        }

      }

      this._api.writeGameData("hrmgame", 2,
        body, apiname, 'hrmgamecmid').subscribe((data: any) => {
          if (data.status == "Success") {
            this.getFetchData();
          }

        }, (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        })
    }
  }

  getPrevRound() {
    return Number(this.noofattempt) - 1;
  }
}
