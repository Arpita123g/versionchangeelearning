import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
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
  ApexYAxis,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
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

interface TownhallProgramme {
  titlecell: string;
  isSelectedcell: string[][];
  valuecell: string[][];
  selected?: boolean;
  value?: string;
}

@Component({
  selector: 'app-hrmfintech-talentmanagement',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,MatIconModule],
  templateUrl: './hrmfintech-talentmanagement.component.html',
  styleUrls: ['./hrmfintech-talentmanagement.component.scss']
})
export class HrmfintechTalentmanagementComponent extends AbstractComponent {
  result: any = [];
  townhallData: any = [];

  incentivepolicies: string[] = [
    '15% bonus pay above compensation for Top performers',
    '10% bonus pay above compensation for Top performers',
    '5% bonus pay above compensation for Top performers',
    '3% bonus pay above compensation for Top performers',
    'No bonus pay policy'
  ];
  trainingofemployeeList: string[] = [
    'No Training in Current Round',
    'One Short Training',
    'Focused Functional Training',
    'Training as needed',
    'As by personal development plans'
  ];
  futureLeadershipProgrammeSeniorList: string[] = [
    'Executive Leadership Program from HBS for 5 Managers',
    'Succession Planning Program for 3 Managers',
    'Digital Business Leadership Program for 4 Managers',
    'Competency Leadership Program for 4 Managers',
    'Technology Leadership Program for 2 Managers'
  ];
  futureLeadershipProgrammeJuniorList: string[] = [
    'Berkley Management Program for 8 Managers',
    'Leadership Management Program for 7 Managers',
    'Technical Leaders Program for 9 Managers',
    'Global Business Program for 4 Managers',
    'Product Management Program for 8 Managers'
  ];

  tableData: any = [
    {
      status: 'active',
      title: "Sales",
      id: 'sales',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "5 Star<br/>★★★★★",
          topprevdata1: ['', 'e102', 'e106', 'e110', 'e114', 'e118', 'e122'],
          topprevdata2: ['', 'f102', 'f106', 'f110', 'f114', 'f118', 'f122'],
          topprevdata3: ['', 'g102', 'g106', 'g110', 'g114', 'g118', 'g122'],
          topcurdata1: ['', 'e106', 'e110', 'e114', 'e118', 'e122'],
          topcurdata2: ['', 'f106', 'f110', 'f114', 'f118', 'f122'],
          topcurdata3: ['', 'g106', 'g110', 'g114', 'g118', 'g122']
        },
        {
          name: "4 Star<br/>★★★★☆",
          topprevdata1: ['', 'e103', 'e107', 'e111', 'e115', 'e119', 'e123'],
          topprevdata2: ['', 'f103', 'f107', 'f111', 'f115', 'f119', 'f123'],
          topprevdata3: ['', 'g103', 'g107', 'g111', 'g115', 'g119', 'g123'],
          topcurdata1: ['', 'e107', 'e111', 'e115', 'e119', 'e123'],
          topcurdata2: ['', 'f107', 'f111', 'f115', 'f119', 'f123'],
          topcurdata3: ['', 'g107', 'g111', 'g115', 'g119', 'g123']
        },
        {
          name: "3 Star<br/>★★★☆☆",
          topprevdata1: ['', 'e104', 'e108', 'e112', 'e116', 'e120', 'e124'],
          topprevdata2: ['', 'f104', 'f108', 'f112', 'f116', 'f120', 'f124'],
          topprevdata3: ['', 'g104', 'g108', 'g112', 'g116', 'g120', 'g124'],
          topcurdata1: ['', 'e108', 'e112', 'e116', 'e120', 'e124'],
          topcurdata2: ['', 'f108', 'f112', 'f116', 'f120', 'f124'],
          topcurdata3: ['', 'g108', 'g112', 'g116', 'g120', 'g124']

        },
        {
          name: "2 Star<br/>★★☆☆☆",
          topprevdata1: ['', 'e105', 'e109', 'e113', 'e117', 'e121', 'e125'],
          topprevdata2: ['', 'f105', 'f109', 'f113', 'f117', 'f121', 'f125'],
          topprevdata3: ['', 'g105', 'g109', 'g113', 'g117', 'g121', 'g125'],
          topcurdata1: ['', 'e109', 'e113', 'e117', 'e121', 'e125'],
          topcurdata2: ['', 'f109', 'f113', 'f117', 'f121', 'f125'],
          topcurdata3: ['', 'g109', 'g113', 'g117', 'g121', 'g125']
        },

      ],
      incentivepolicy: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'e129',
            'e130',
            'e131',
            'e132',
            'e133',
            'e134'
          ],
          curdata: [
            '',
            'e130',
            'e131',
            'e132',
            'e133',
            'e134'
          ]
        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'f129',
            'f130',
            'f131',
            'f132',
            'f133',
            'f134'
          ],
          curdata: [
            '',
            'f130',
            'f131',
            'f132',
            'f133',
            'f134'
          ]
        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'g129',
            'g130',
            'g131',
            'g132',
            'g133',
            'g134'
          ],
          curdata: [
            '',
            'g130',
            'g131',
            'g132',
            'g133',
            'g134'
          ]
        },
      ],
      paycutdecision: [
        {
          title: "Junior Management",
          icon: 'businessman2.png',
          prevdata: [
            '',
            'e137',
            'e138',
            'e139',
            'e140',
            'e141',
            'e142'
          ],
          curdata: [
            '',
            'e138',
            'e139',
            'e140',
            'e141',
            'e142'
          ]
        },
        {
          title: "Senior Management",
          prevdata: [
            '',
            'e145',
            'e146',
            'e147',
            'e148',
            'e149',
            'e150'
          ],
          curdata: [
            '',
            'e146',
            'e147',
            'e148',
            'e149',
            'e150'
          ],
          icon: 'manager.png',
        },
        {
          title: "Top Management",
          prevdata: [
            '',
            'e153',
            'e154',
            'e155',
            'e156',
            'e157',
            'e158'
          ],
          curdata: [
            '',
            'e154',
            'e155',
            'e156',
            'e157',
            'e158'
          ],
          icon: 'wome.png',
        },
      ],
      trainingofemployee: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'e162',
            'e163',
            'e164',
            'e165',
            'e166',
            'e167'
          ],
          curdata: [
            '',
            'e163',
            'e164',
            'e165',
            'e166',
            'e167'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'f162',
            'f163',
            'f164',
            'f165',
            'f166',
            'f167'
          ],
          curdata: [
            '',
            'f163',
            'f164',
            'f165',
            'f166',
            'f167'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'g162',
            'g163',
            'g164',
            'g165',
            'g166',
            'g167'
          ],
          curdata: [
            '',
            'g163',
            'g164',
            'g165',
            'g166',
            'g167'
          ],

        },
      ],
      futureleadershipseniorprogramme: [
        {
          name: "Senior Management",
          prevdata: [
            '',
            'f171',
            'f172',
            'f173',
            'f174',
            'f175',
            'f176'
          ],
          curdata: [
            '',
            'f172',
            'f173',
            'f174',
            'f175',
            'f176'
          ],

        }
      ],
      futureleadershipjuniorprogramme: [
        {
          name: "Junior Management",
          prevdata: [
            '',
            'g171',
            'g172',
            'g173',
            'g174',
            'g175',
            'g176'
          ],
          curdata: [
            '',
            'g172',
            'g173',
            'g174',
            'g175',
            'g176'
          ],

        },
      ],
      compensation: {
        chart: {
          series: [
          ],
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
            categories: ['Top Management', 'Senior Management', 'Junior Management'],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Ratings %",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: [['c51', 'c52', 'c53', 'c54'], ['c56', 'c57', 'c58', 'c59'], ['c61', 'c62', 'c63', 'c64'], ['c66', 'c67', 'c68', 'c69'], ['c71', 'c72', 'c73', 'c74'], ['c76', 'c77', 'c78', 'c79']],
        senior: [['d51', 'd52', 'd53', 'd59'], ['d56', 'd57', 'd58', 'd59'], ['d61', 'd62', 'd63', 'd64',], ['d66', 'd67', 'd68', 'd69',], ['d71', 'd72', 'd73', 'd74',], ['d76', 'd77', 'd78', 'd79',]],
        junior: [['e51', 'e52', 'e53', 'e59'], ['e56', 'e57', 'e58', 'e59'], ['e61', 'e62', 'e63', 'e64',], ['e66', 'e67', 'e68', 'e69',], ['e71', 'e72', 'e73', 'e74',], ['e76', 'e77', 'e78', 'e79',]]
      },
      averageSalaryGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Average salary per employee, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c190', 'c191', 'c192', 'c193', 'c194', 'c195'],
        senior: ['d190', 'd191', 'd192', 'd193', 'd194', 'd195'],
        junior: ['e190', 'e191', 'e192', 'e193', 'e194', 'e195'],
      },
      trainingofemployeeGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Training cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c251', 'c252', 'c253', 'c254', 'c255', 'c256'],
        senior: ['d251', 'd252', 'd253', 'd254', 'd255', 'd256'],
        junior: ['e251', 'e252', 'e253', 'e254', 'e255', 'e256'],
      },
      futureleadershipGraph: {
        chart: {
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
            categories: [['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Leadership program cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        senior: ['c295', 'c296', 'c297', 'c298', 'c299', 'c300'],
        junior: ['d295', 'd296', 'd297', 'd298', 'd299', 'd300'],
      }
    },
    {
      status: 'active',
      title: "Product & Engineering",
      id: 'productengg',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "5 Star<br/>★★★★★",
          topprevdata1: ['', 'i102', 'i106', 'i110', 'i114', 'i118', 'i122'],
          topprevdata2: ['', 'j102', 'j106', 'j110', 'j114', 'j118', 'j122'],
          topprevdata3: ['', 'k102', 'k106', 'k110', 'k114', 'k118', 'k122'],
          topcurdata1: ['', 'i106', 'i110', 'i114', 'i118', 'i122'],
          topcurdata2: ['', 'j106', 'j110', 'j114', 'j118', 'j122'],
          topcurdata3: ['', 'k106', 'k110', 'k114', 'k118', 'k122'],

        },
        {
          name: "4 Star<br/>★★★★☆",
          topprevdata1: ['', 'i103', 'i107', 'i111', 'i115', 'i119', 'i123'],
          topprevdata2: ['', 'j103', 'j107', 'j111', 'j115', 'j119', 'j123'],
          topprevdata3: ['', 'k103', 'k107', 'k111', 'k115', 'k119', 'k123'],
          topcurdata1: ['', 'i107', 'i111', 'i115', 'i119', 'i123'],
          topcurdata2: ['', 'j107', 'j111', 'j115', 'j119', 'j123'],
          topcurdata3: ['', 'k107', 'k111', 'k115', 'k119', 'k123'],

        },
        {
          name: "3 Star<br/>★★★☆☆",
          topprevdata1: ['', 'i104', 'i108', 'i112', 'i116', 'i120', 'i124'],
          topprevdata2: ['', 'j104', 'j108', 'j112', 'j116', 'j120', 'j124'],
          topprevdata3: ['', 'k104', 'k108', 'k112', 'k116', 'k120', 'k124'],
          topcurdata1: ['', 'i108', 'i112', 'i116', 'i120', 'i124'],
          topcurdata2: ['', 'j108', 'j112', 'j116', 'j120', 'j124'],
          topcurdata3: ['', 'k108', 'k112', 'k116', 'k120', 'k124']
        },
        {
          name: "2 Star<br/>★★☆☆☆",
          topprevdata1: ['', 'i105', 'i109', 'i113', 'i117', 'i121', 'i125'],
          topprevdata2: ['', 'j105', 'j109', 'j113', 'j117', 'j121', 'j125'],
          topprevdata3: ['', 'k105', 'k109', 'k113', 'k117', 'k121', 'k125'],
          topcurdata1: ['', 'i109', 'i113', 'i117', 'i121', 'i125'],
          topcurdata2: ['', 'j109', 'j113', 'j117', 'j121', 'j125'],
          topcurdata3: ['', 'k109', 'k113', 'k117', 'k121', 'k125']

        },

      ],
      incentivepolicy: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'i129',
            'i130',
            'i131',
            'i132',
            'i133',
            'i134'
          ],
          curdata: [
            '',
            'i130',
            'i131',
            'i132',
            'i133',
            'i134'
          ],
        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'j129',
            'j130',
            'j131',
            'j132',
            'j133',
            'j134'
          ],
          curdata: [
            '',
            'j130',
            'j131',
            'j132',
            'j133',
            'j134'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'k129',
            'k130',
            'k131',
            'k132',
            'k133',
            'k134'
          ],
          curdata: [
            '',
            'k130',
            'k131',
            'k132',
            'k133',
            'k134'
          ],

        },
      ],
      paycutdecision: [
        {
          title: "Junior Management",
          prevdata: [
            '',
            'f137',
            'f138',
            'f139',
            'f140',
            'f141',
            'f142'
          ],
          curdata: [
            '',
            'f138',
            'f139',
            'f140',
            'f141',
            'f142'
          ],
          icon: 'businessman2.png',

        },
        {
          title: "Senior Management",
          prevdata: [
            '',
            'f145',
            'f146',
            'f147',
            'f148',
            'f149',
            'f150'
          ],
          curdata: [
            '',
            'f146',
            'f147',
            'f148',
            'f149',
            'f150'
          ],
          icon: 'manager.png',

        },
        {
          title: "Top Management",
          prevdata: [
            '',
            'f153',
            'f154',
            'f155',
            'f156',
            'f157',
            'f158'
          ],
          curdata: [
            '',
            'f154',
            'f155',
            'f156',
            'f157',
            'f158'
          ],
          icon: 'wome.png',

        },
      ],
      trainingofemployee: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'i162',
            'i163',
            'i164',
            'i165',
            'i166',
            'i167'
          ],
          curdata: [
            '',
            'i163',
            'i164',
            'i165',
            'i166',
            'i167'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'j162',
            'j163',
            'j164',
            'j165',
            'j166',
            'j167'
          ],
          curdata: [
            '',
            'j163',
            'j164',
            'j165',
            'j166',
            'j167'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'k162',
            'k163',
            'k164',
            'k165',
            'k166',
            'k167'
          ],
          curdata: [
            '',
            'k163',
            'k164',
            'k165',
            'k166',
            'k167'
          ],

        },
      ],
      futureleadershipseniorprogramme: [
        {
          name: "Senior Management",
          prevdata: [
            '',
            'j171',
            'j172',
            'j173',
            'j174',
            'j175',
            'j176'
          ],
          curdata: [
            '',
            'j172',
            'j173',
            'j174',
            'j175',
            'j176'
          ],

        }
      ],
      futureleadershipjuniorprogramme: [

        {
          name: "Junior Management",
          prevdata: [
            '',
            'k171',
            'k172',
            'k173',
            'k174',
            'k175',
            'k176'
          ],
          curdata: [
            '',
            'k172',
            'k173',
            'k174',
            'k175',
            'k176'
          ],

        },
      ],
      compensation: {
        chart: {
          series: [
          ],
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Ratings %",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: [['c86', 'c87', 'c88', 'c89'], ['c91', 'c92', 'c93', 'c94'], ['c96', 'c97', 'c98', 'c99'], ['c101', 'c102', 'c103', 'c104'], ['c106', 'c107', 'c108', 'c109'], ['c111', 'c112', 'c113', 'c114']],
        senior: [['d86', 'd87', 'd88', 'd89'], ['d91', 'd92', 'd93', 'd94'], ['d96', 'd97', 'd98', 'd99',], ['d101', 'd102', 'd103', 'd104',], ['d106', 'd107', 'd108', 'd109',], ['d111', 'd112', 'd113', 'd114',]],
        junior: [['e86', 'e87', 'e88', 'e89'], ['e91', 'e92', 'e93', 'e94'], ['e96', 'e97', 'e98', 'e99',], ['e101', 'e102', 'e103', 'e104',], ['e106', 'e107', 'e108', 'e109',], ['e111', 'e112', 'e113', 'e114',]]
      },
      averageSalaryGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Average salary per employee, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c200', 'c201', 'c202', 'c203', 'c204', 'c205'],
        senior: ['d200', 'd201', 'd202', 'd203', 'd204', 'd205'],
        junior: ['e200', 'e201', 'e202', 'e203', 'e204', 'e205'],
      },
      trainingofemployeeGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Training cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c262', 'c263', 'c264', 'c265', 'c266', 'c267'],
        senior: ['d262', 'd263', 'd264', 'd265', 'd266', 'd267'],
        junior: ['e262', 'e263', 'e264', 'e265', 'e266', 'e267'],
      },
      futureleadershipGraph: {
        chart: {
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
            categories: [['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Leadership program cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        senior: ['c306', 'c307', 'c308', 'c309', 'c310', 'c311'],
        junior: ['d306', 'd307', 'd308', 'd309', 'd310', 'd311'],
      }
    },
    {
      status: 'active',
      title: "Customer Success",
      id: "customersuccess",
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "5 Star<br/>★★★★★",
          topprevdata1: ['', 'm102', 'm106', 'm110', 'm114', 'm118', 'm122'],
          topprevdata2: ['', 'n102', 'n106', 'n110', 'n114', 'n118', 'n122'],
          topprevdata3: ['', 'o102', 'o106', 'o110', 'o114', 'o118', 'o122'],
          topcurdata1: ['', 'm106', 'm110', 'm114', 'm118', 'm122'],
          topcurdata2: ['', 'n106', 'n110', 'n114', 'n118', 'n122'],
          topcurdata3: ['', 'o106', 'o110', 'o114', 'o118', 'o122'],

        },
        {
          name: "4 Star<br/>★★★★☆",
          topprevdata1: ['', 'm103', 'm107', 'm111', 'm115', 'm119', 'm123'],
          topprevdata2: ['', 'n103', 'n107', 'n111', 'n115', 'n119', 'n123'],
          topprevdata3: ['', 'o103', 'o107', 'o111', 'o115', 'o119', 'o123'],
          topcurdata1: ['', 'm107', 'm111', 'm115', 'm119', 'm123'],
          topcurdata2: ['', 'n107', 'n111', 'n115', 'n119', 'n123'],
          topcurdata3: ['', 'o107', 'o111', 'o115', 'o119', 'o123']

        },
        {
          name: "3 Star<br/>★★★☆☆",
          topprevdata1: ['', 'm104', 'm108', 'm112', 'm116', 'm120', 'm124'],
          topprevdata2: ['', 'n104', 'n108', 'n112', 'n116', 'n120', 'n124'],
          topprevdata3: ['', 'o104', 'o108', 'o112', 'o116', 'o120', 'o124'],
          topcurdata1: ['', 'm108', 'm112', 'm116', 'm120', 'm124'],
          topcurdata2: ['', 'n108', 'n112', 'n116', 'n120', 'n124'],
          topcurdata3: ['', 'o108', 'o112', 'o116', 'o120', 'o124']

        },
        {
          name: "2 Star<br/>★★☆☆☆",
          topprevdata1: ['', 'm105', 'm109', 'm113', 'm117', 'm121', 'm125'],
          topprevdata2: ['', 'n105', 'n109', 'n113', 'n117', 'n121', 'n125'],
          topprevdata3: ['', 'o105', 'o109', 'o113', 'o117', 'o121', 'o125'],
          topcurdata1: ['', 'm109', 'm113', 'm117', 'm121', 'm125'],
          topcurdata2: ['', 'n109', 'n113', 'n117', 'n121', 'n125'],
          topcurdata3: ['', 'o109', 'o113', 'o117', 'o121', 'o125']
        },

      ],
      incentivepolicy: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'm129',
            'm130',
            'm131',
            'm132',
            'm133',
            'm134'
          ],
          curdata: [
            '',
            'm130',
            'm131',
            'm132',
            'm133',
            'm134'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'n129',
            'n130',
            'n131',
            'n132',
            'n133',
            'n134'
          ],
          curdata: [
            '',
            'n130',
            'n131',
            'n132',
            'n133',
            'n134'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'o129',
            'o130',
            'o131',
            'o132',
            'o133',
            'o134'
          ],
          curdata: [
            '',
            'o130',
            'o131',
            'o132',
            'o133',
            'o134'
          ],

        },
      ],
      paycutdecision: [
        {
          title: "Junior Management",
          prevdata: [
            '',
            'g137',
            'g138',
            'g139',
            'g140',
            'g141',
            'g142'
          ],
          curdata: [
            '',
            'g138',
            'g139',
            'g140',
            'g141',
            'g142'
          ],
          icon: 'businessman2.png',

        },
        {
          title: "Senior Management",
          prevdata: [
            '',
            'g145',
            'g146',
            'g147',
            'g148',
            'g149',
            'g150'
          ],
          curdata: [
            '',
            'g146',
            'g147',
            'g148',
            'g149',
            'g150'
          ],
          icon: 'manager.png',

        },
        {
          title: "Top Management",
          prevdata: [
            '',
            'g153',
            'g154',
            'g155',
            'g156',
            'g157',
            'g158'
          ],
          curdata: [
            '',
            'g154',
            'g155',
            'g156',
            'g157',
            'g158'
          ],
          icon: 'wome.png',

        },
      ],
      trainingofemployee: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'm162',
            'm163',
            'm164',
            'm165',
            'm166',
            'm167'
          ],
          curdata: [
            '',
            'm163',
            'm164',
            'm165',
            'm166',
            'm167'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'n162',
            'n163',
            'n164',
            'n165',
            'n166',
            'n167'
          ],
          curdata: [
            '',
            'n163',
            'n164',
            'n165',
            'n166',
            'n167'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            'o162',
            'o163',
            'o164',
            'o165',
            'o166',
            'o167'
          ],
          curdata: [
            '',
            'o163',
            'o164',
            'o165',
            'o166',
            'o167'
          ],

        },
      ],
      futureleadershipseniorprogramme: [
        {
          name: "Senior Management",
          prevdata: [
            '',
            'n171',
            'n172',
            'n173',
            'n174',
            'n175',
            'n176'
          ],
          curdata: [
            '',
            'n172',
            'n173',
            'n174',
            'n175',
            'n176'
          ],

        }
      ],
      futureleadershipjuniorprogramme: [

        {
          name: "Junior Management",
          prevdata: [
            '',
            'o171',
            'o172',
            'o173',
            'o174',
            'o175',
            'o176'
          ],
          curdata: [
            '',
            'o172',
            'o173',
            'o174',
            'o175',
            'o176'
          ],

        },
      ],
      compensation: {
        chart: {
          series: [
          ],
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Ratings %",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: [['c121', 'c122', 'c123', 'c124'], ['c126', 'c127', 'c128', 'c129'], ['c131', 'c132', 'c133', 'c134'], ['c136', 'c137', 'c138', 'c139'], ['c141', 'c142', 'c143', 'c144'], ['c146', 'c147', 'c148', 'c149']],
        senior: [['d121', 'd122', 'd123', 'd124'], ['d126', 'd127', 'd128', 'd129'], ['d131', 'd132', 'd133', 'd134'], ['d136', 'd137', 'd138', 'd139'], ['d141', 'd142', 'd143', 'd144'], ['d146', 'd147', 'd148', 'd149']],
        junior: [['e121', 'e122', 'e123', 'e124'], ['e126', 'e127', 'e128', 'e129'], ['e131', 'e132', 'e133', 'e134'], ['e136', 'e137', 'e138', 'e139'], ['e141', 'e142', 'e143', 'e144'], ['e146', 'e147', 'e148', 'e149']]
      },
      averageSalaryGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Average salary per employee, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c210', 'c211', 'c212', 'c213', 'c214', 'c215'],
        senior: ['d210', 'd211', 'd212', 'd213', 'd214', 'd215'],
        junior: ['e210', 'e211', 'e212', 'e213', 'e214', 'e215'],
      },
      trainingofemployeeGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Training cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c273', 'c274', 'c275', 'c276', 'c277', 'c278'],
        senior: ['d273', 'd274', 'd275', 'd276', 'd277', 'd278'],
        junior: ['e273', 'e274', 'e275', 'e276', 'e277', 'e278'],
      },
      futureleadershipGraph: {
        chart: {
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
            categories: [['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Leadership program cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        senior: ['c317', 'c318', 'c319', 'c320', 'c321', 'c322'],
        junior: ['d317', 'd318', 'd319', 'd320', 'd321', 'd322'],
      }
    },
    {
      status: 'active',
      title: "Design & Communication",
      id: 'designcomm',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "5 Star<br/>★★★★★",
          topprevdata1: ['', 'q102', 'q106', 'q110', 'q114', 'q118', 'q122'],
          topprevdata2: ['', 'r102', 'r106', 'r110', 'r114', 'r118', 'r122'],
          topprevdata3: ['', 's102', 's106', 's110', 's114', 's118', 's122'],
          topcurdata1: ['', 'q106', 'q110', 'q114', 'q118', 'q122'],
          topcurdata2: ['', 'r106', 'r110', 'r114', 'r118', 'r122'],
          topcurdata3: ['', 's106', 's110', 's114', 's118', 's122'],

        },
        {
          name: "4 Star<br/>★★★★☆",
          topprevdata1: ['', 'q103', 'q107', 'q111', 'q115', 'q119', 'q123'],
          topprevdata2: ['', 'r103', 'r107', 'r111', 'r115', 'r119', 'r123'],
          topprevdata3: ['', 's103', 's107', 's111', 's115', 's119', 's123'],
          topcurdata1: ['', 'q107', 'q111', 'q115', 'q119', 'q123'],
          topcurdata2: ['', 'r107', 'r111', 'r115', 'r119', 'r123'],
          topcurdata3: ['', 's107', 's111', 's115', 's119', 's123'],

        },
        {
          name: "3 Star<br/>★★★☆☆",
          topprevdata1: ['', 'q104', 'q108', 'q112', 'q116', 'q120', 'q124'],
          topprevdata2: ['', 'r104', 'r108', 'r112', 'r116', 'r120', 'r124'],
          topprevdata3: ['', 's104', 's108', 's112', 's116', 's120', 's124'],
          topcurdata1: ['', 'q108', 'q112', 'q116', 'q120', 'q124'],
          topcurdata2: ['', 'r108', 'r112', 'r116', 'r120', 'r124'],
          topcurdata3: ['', 's108', 's112', 's116', 's120', 's124'],

        },
        {
          name: "2 Star<br/>★★☆☆☆",
          topprevdata1: ['', 'q105', 'q109', 'q113', 'q117', 'q121', 'q125'],
          topprevdata2: ['', 'r105', 'r109', 'r113', 'r117', 'r121', 'r125'],
          topprevdata3: ['', 's105', 's109', 's113', 's117', 's121', 's125'],
          topcurdata1: ['', 'q109', 'q113', 'q117', 'q121', 'q125'],
          topcurdata2: ['', 'r109', 'r113', 'r117', 'r121', 'r125'],
          topcurdata3: ['', 's109', 's113', 's117', 's121', 's125'],

        },

      ],
      incentivepolicy: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'q129',
            'q130',
            'q131',
            'q132',
            'q133',
            'q134'
          ],
          curdata: [
            '',
            'q130',
            'q131',
            'q132',
            'q133',
            'q134'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'r129',
            'r130',
            'r131',
            'r132',
            'r133',
            'r134'
          ],
          curdata: [
            '',
            'r130',
            'r131',
            'r132',
            'r133',
            'r134'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            's129',
            's130',
            's131',
            's132',
            's133',
            's134'
          ],
          curdata: [
            '',
            's130',
            's131',
            's132',
            's133',
            's134'
          ],

        },
      ],
      paycutdecision: [
        {
          title: "Junior Management",
          prevdata: [
            '',
            'h137',
            'h138',
            'h139',
            'h140',
            'h141',
            'h142'
          ],
          curdata: [
            '',
            'h138',
            'h139',
            'h140',
            'h141',
            'h142'
          ],
          icon: 'businessman2.png',

        },
        {
          title: "Senior Management",
          prevdata: [
            '',
            'h145',
            'h146',
            'h147',
            'h148',
            'h149',
            'h150'
          ],
          curdata: [
            '',
            'h146',
            'h147',
            'h148',
            'h149',
            'h150'
          ],
          icon: 'manager.png',

        },
        {
          title: "Top Management",
          prevdata: [
            '',
            'h153',
            'h154',
            'h155',
            'h156',
            'h157',
            'h158'
          ],
          curdata: [
            '',
            'h154',
            'h155',
            'h156',
            'h157',
            'h158'
          ],
          icon: 'wome.png',

        },
      ],
      trainingofemployee: [
        {
          name: "Top Management",
          prevdata: [
            '',
            'q162',
            'q163',
            'q164',
            'q165',
            'q166',
            'q167'
          ],
          curdata: [
            '',
            'q163',
            'q164',
            'q165',
            'q166',
            'q167'
          ],

        },
        {
          name: "Senior Management",
          prevdata: [
            '',
            'r162',
            'r163',
            'r164',
            'r165',
            'r166',
            'r167'
          ],
          curdata: [
            '',
            'r163',
            'r164',
            'r165',
            'r166',
            'r167'
          ],

        },
        {
          name: "Junior Management",
          prevdata: [
            '',
            's162',
            's163',
            's164',
            's165',
            's166',
            's167'
          ],
          curdata: [
            '',
            's163',
            's164',
            's165',
            's166',
            's167'
          ],

        },
      ],
      futureleadershipseniorprogramme: [
        {
          name: "Senior Management",
          prevdata: [
            '',
            'r171',
            'r172',
            'r173',
            'r174',
            'r175',
            'r176'
          ],
          curdata: [
            '',
            'r172',
            'r173',
            'r174',
            'r175',
            'r176'
          ],

        }
      ],
      futureleadershipjuniorprogramme: [

        {
          name: "Junior Management",
          prevdata: [
            '',
            's171',
            's172',
            's173',
            's174',
            's175',
            's176'
          ],
          curdata: [
            '',
            's172',
            's173',
            's174',
            's175',
            's176'
          ],

        },
      ],
      compensation: {
        chart: {
          series: [
          ],
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Ratings %",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: [['c156', 'c157', 'c158', 'c159'], ['c161', 'c162', 'c163', 'c164'], ['c166', 'c167', 'c168', 'c169'], ['c171', 'c172', 'c173', 'c174'], ['c176', 'c177', 'c178', 'c179'], ['c181', 'c182', 'c183', 'c184']],
        senior: [['d156', 'd157', 'd158', 'd159'], ['d161', 'd162', 'd163', 'd164'], ['d166', 'd167', 'd168', 'd169'], ['d171', 'd172', 'd173', 'd174'], ['d176', 'd177', 'd178', 'd179'], ['d181', 'd182', 'd183', 'd184',]],
        junior: [['e156', 'e157', 'e158', 'e159'], ['e161', 'e162', 'e163', 'e164'], ['e166', 'e167', 'e168', 'e169'], ['e171', 'e172', 'e173', 'e174'], ['e176', 'e177', 'e178', 'e179'], ['e181', 'e182', 'e183', 'e184',]]
      },
      averageSalaryGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Average salary per employee, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c220', 'c221', 'c222', 'c223', 'c224', 'c225'],
        senior: ['d220', 'd221', 'd222', 'd223', 'd224', 'd225'],
        junior: ['e220', 'e221', 'e222', 'e223', 'e224', 'e225'],
      },
      trainingofemployeeGraph: {
        chart: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Training cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c284', 'c285', 'c286', 'c287', 'c288', 'c289'],
        senior: ['d284', 'd285', 'd286', 'd287', 'd288', 'd289'],
        junior: ['e284', 'e285', 'e286', 'e287', 'e288', 'e289'],
      },

      futureleadershipGraph: {
        chart: {
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
            categories: [['Senior', ' Management'], ['Junior', ' Management']],
            position: "bottom",
            labels: {
              offsetY: 0,
              rotate: 0,
              show: true,
              hideOverlappingLabels: false,
              trim: false,
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
            text: "Leadership program cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        senior: ['c328', 'c329', 'c330', 'c331', 'c332', 'c333'],
        junior: ['d328', 'd329', 'd330', 'd331', 'd332', 'd333'],
      }
    },
    {
      status: 'active',
      title: "Policy",
      id: 'policy',
      isDiff: true,
      prevdata: [],
      curdata: [],

      divisionpolicies: [
        { isSelectedcell: ['e180', 'e190', 'e200', 'e210', 'e220', 'e230'], valuecell: ['e427', 'e437', 'e447', 'e457', 'e467', 'e477'], value: '0 K', titlecell: 'e117', descriptioncell: 'l117', description: "" },
        { isSelectedcell: ['e181', 'e191', 'e201', 'e211', 'e221', 'e231'], valuecell: ['e428', 'e438', 'e448', 'e458', 'e468', 'e478'], value: '0 K', titlecell: 'e118', descriptioncell: 'l118', description: "" },
        { isSelectedcell: ['e182', 'e192', 'e202', 'e212', 'e222', 'e232'], valuecell: ['e429', 'e439', 'e449', 'e459', 'e469', 'e479'], value: '0 K', titlecell: 'e119', descriptioncell: 'l119', description: "" },
        { isSelectedcell: ['e183', 'e193', 'e203', 'e213', 'e223', 'e233'], valuecell: ['e430', 'e440', 'e450', 'e460', 'e470', 'e480'], value: '0 K', titlecell: 'e120', descriptioncell: 'l120', description: "" },
        { isSelectedcell: ['e184', 'e194', 'e204', 'e214', 'e224', 'e234'], valuecell: ['e431', 'e441', 'e451', 'e461', 'e471', 'e481'], value: '0 K', titlecell: 'e121', descriptioncell: 'l121', description: "" },
        { isSelectedcell: ['e185', 'e195', 'e205', 'e215', 'e225', 'e235'], valuecell: ['e432', 'e442', 'e452', 'e462', 'e472', 'e482'], value: '0 K', titlecell: 'e122', descriptioncell: 'l122', description: "" },
        { isSelectedcell: ['e186', 'e196', 'e206', 'e216', 'e226', 'e236'], valuecell: ['e433', 'e443', 'e453', 'e463', 'e473', 'e483'], value: '0 K', titlecell: 'e123', descriptioncell: 'l123', description: "" },
        { isSelectedcell: ['e187', 'e197', 'e207', 'e217', 'e227', 'e237'], valuecell: ['e434', 'e444', 'e454', 'e464', 'e474', 'e484'], value: '0 K', titlecell: 'e124', descriptioncell: 'l124', description: "" },
        { isSelectedcell: ['e188', 'e198', 'e208', 'e218', 'e228', 'e238'], valuecell: ['e435', 'e445', 'e455', 'e465', 'e475', 'e485'], value: '0 K', titlecell: 'e125', descriptioncell: 'l125', description: "" },
        { isSelectedcell: ['e189', 'e199', 'e209', 'e219', 'e229', 'e239'], valuecell: ['e436', 'e446', 'e456', 'e466', 'e476', 'e486'], value: '0 K', titlecell: 'e126', descriptioncell: 'l126', description: "" },
      ],
      diversitypolicies: [
        { isSelectedcell: ['e242', 'e252', 'e262', 'e272', 'e282', 'e292'], valuecell: ['e487', 'e497', 'e507', 'e517', 'e527', 'e537'], value: '0 K', titlecell: 'e143', description: "", descriptioncell: 'i143' },
        { isSelectedcell: ['e243', 'e253', 'e263', 'e273', 'e283', 'e293'], valuecell: ['e488', 'e498', 'e508', 'e518', 'e528', 'e538'], value: '0 K', titlecell: 'e144', description: "", descriptioncell: 'i144' },
        { isSelectedcell: ['e244', 'e254', 'e264', 'e274', 'e284', 'e294'], valuecell: ['e489', 'e499', 'e509', 'e519', 'e529', 'e539'], value: '0 K', titlecell: 'e145', description: "", descriptioncell: 'i145' },
        { isSelectedcell: ['e245', 'e255', 'e265', 'e275', 'e285', 'e295'], valuecell: ['e490', 'e500', 'e510', 'e520', 'e530', 'e540'], value: '0 K', titlecell: 'e146', description: "", descriptioncell: 'i146' },
        { isSelectedcell: ['e246', 'e256', 'e266', 'e276', 'e286', 'e296'], valuecell: ['e491', 'e501', 'e511', 'e521', 'e531', 'e541'], value: '0 K', titlecell: 'e147', description: "", descriptioncell: 'i147' },
        { isSelectedcell: ['e247', 'e257', 'e267', 'e277', 'e287', 'e297'], valuecell: ['e492', 'e502', 'e512', 'e522', 'e532', 'e542'], value: '0 K', titlecell: 'e148', description: "", descriptioncell: 'i148' },
        { isSelectedcell: ['e248', 'e258', 'e268', 'e278', 'e288', 'e298'], valuecell: ['e493', 'e503', 'e513', 'e523', 'e533', 'e543'], value: '0 K', titlecell: 'e149', description: "", descriptioncell: 'i149' },
        { isSelectedcell: ['e249', 'e259', 'e269', 'e279', 'e289', 'e299'], valuecell: ['e494', 'e504', 'e514', 'e524', 'e534', 'e544'], value: '0 K', titlecell: 'e150', description: "", descriptioncell: 'i150' },
        { isSelectedcell: ['e250', 'e260', 'e270', 'e280', 'e290', 'e300'], valuecell: ['e495', 'e505', 'e515', 'e525', 'e535', 'e545'], value: '0 K', titlecell: 'e151', description: "", descriptioncell: 'i151' },
        { isSelectedcell: ['e251', 'e261', 'e271', 'e281', 'e291', 'e301'], valuecell: ['e496', 'e506', 'e516', 'e526', 'e536', 'e546'], value: '0 K', titlecell: 'e152', description: "", descriptioncell: 'i152' },

      ],
      townhallprogramme: [
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e250', description: "", descriptioncell: 'j250' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e251', description: "", descriptioncell: 'j251' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e252', description: "", descriptioncell: 'j252' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e253', description: "", descriptioncell: 'j253' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e254', description: "", descriptioncell: 'j254' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e255', description: "", descriptioncell: 'j255' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e256', description: "", descriptioncell: 'j256' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e257', description: "", descriptioncell: 'j257' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e258', description: "", descriptioncell: 'j258' },
        { selected: false, isSelectedcell: [['e304', 'e305', 'e306'], ['e307', 'e308', 'e309'], ['e310', 'e311', 'e312'], ['e313', 'e314', 'e315'], ['e316', 'e317', 'e318'], ['e319', 'e320', 'e321']], value: '0 K', valuecell: [['e547', 'e548', 'e549'], ['e550', 'e551', 'e552'], ['e553', 'e554', 'e555'], ['e556', 'e557', 'e558'], ['e559', 'e560', 'e561'], ['e562', 'e563', 'e564']], titlecell: 'e259', description: "", descriptioncell: 'j259' },

      ],
      divisionPolicyTableData: [
        {
          status: 'active',
          title: 'Sales',
          curdata: ['', 'v80', 'v81', 'v82', 'v83', 'v84'],
          prevdata: ['', 'v79', 'v80', 'v81', 'v82', 'v83', 'v84'],
        },
        {
          status: 'active',
          title: 'Product & Engineering',
          curdata: ['', 'w80', 'w81', 'w82', 'w83', 'w84'],
          prevdata: ['', 'w79', 'w80', 'w81', 'w82', 'w83', 'w84']
        },
        {
          status: 'active',
          title: 'Customer Success',
          curdata: ['', 'x80', 'x81', 'x82', 'x83', 'x84'],
          prevdata: ['', 'x79', 'x80', 'x81', 'x82', 'x83', 'x84']
        },
        {
          status: 'active',
          title: 'Design & Communication',
          curdata: ['', 'y80', 'y81', 'y82', 'y83', 'y84'],
          prevdata: ['', 'y79', 'y80', 'y81', 'y82', 'y83', 'y84']
        },
      ],
      diversityPolicyTableData: [
        {
          status: 'active',
          title: 'Sales',
          curdata: ['', 'v31', 'v32', 'v33', 'v34', 'v35'],//3_Talent Learning Management
          prevdata: ['', 'v30', 'v31', 'v32', 'v33', 'v34', 'v35']//3_Talent Learning Management
        },
        {
          status: 'active',
          title: 'Product & Engineering',
          curdata: ['', 'w31', 'w32', 'w33', 'w34', 'w35'],//3_Talent Learning Management
          prevdata: ['', 'w30', 'w31', 'w32', 'w33', 'w34', 'w35']//3_Talent Learning Management
        },
        {
          status: 'active',
          title: 'Customer Success',
          curdata: ['', 'x31', 'x32', 'x33', 'x34', 'x35'],//3_Talent Learning Management
          prevdata: ['', 'x30', 'x31', 'x32', 'x33', 'x34', 'x35']//3_Talent Learning Management
        },
        {
          status: 'active',
          title: 'Design & Communication',
          curdata: ['', 'y31', 'y32', 'y33', 'y34', 'y35'],//3_Talent Learning Management
          prevdata: ['', 'y30', 'y31', 'y32', 'y33', 'y34', 'y35']//3_Talent Learning Management
        },
      ],
      townhallTableData: [
        {
          status: 'active',
          title: 'Sales',
          curdata: ['', 'v56', 'v57', 'v58', 'v59', 'v60'],
          prevdata: ['', 'v55', 'v56', 'v57', 'v58', 'v59', 'v60']
        },
        {
          status: 'active',
          title: 'Product & Engineering',
          curdata: ['', 'w56', 'w57', 'w58', 'w59', 'w60'],
          prevdata: ['', 'w55', 'w56', 'w57', 'w58', 'w59', 'w60']
        },
        {
          status: 'active',
          title: 'Customer Success',
          curdata: ['', 'x56', 'x57', 'x58', 'x59', 'x60'],
          prevdata: ['', 'x55', 'x56', 'x57', 'x58', 'x59', 'x60']
        },
        {
          status: 'active',
          title: 'Design & Communication',
          curdata: ['', 'y56', 'y57', 'y58', 'y59', 'y60'],
          prevdata: ['', 'y55', 'y56', 'y57', 'y58', 'y59', 'y60']
        },
      ],
    }
  ];



  futureleadershipgraphrange: any = [
    [//Sales
      ['c295', 'd295'],
      ['c296', 'd296'],
      ['c297', 'd297'],
      ['c298', 'd298'],
      ['c299', 'd299'],
      ['c300', 'd300'],
    ],
    [//Product & Engineering
      ['c306', 'd306'],
      ['c307', 'd307'],
      ['c308', 'd308'],
      ['c309', 'd309'],
      ['c310', 'd310'],
      ['c311', 'd311'],

    ],
    [//Customer Success
      ['c317', 'd317'],
      ['c318', 'd318'],
      ['c319', 'd319'],
      ['c320', 'd320'],
      ['c321', 'd321'],
      ['c322', 'd322'],

    ],
    [//Design & Communication
      ['c328', 'd328'],
      ['c329', 'd329'],
      ['c330', 'd330'],
      ['c331', 'd331'],
      ['c332', 'd332'],
      ['c333', 'd333'],

    ],
  ]

  foodforthought: boolean = true;
  optionalCase: any = ['productengstatus', 'customersuccessstatus', 'designcommunicationstatus']
  statusMapping: any = {
    'productengstatus': 1,
    'customersuccessstatus': 2,
    'designcommunicationstatus': 3
  };
  inputDisabled: boolean = false;
  requestVersions: { [key: string]: number } = {}; // define in component

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }


  override ngOnInit(): void {
    this.getFetchData();
  }

  get activeItems() {
    return this.tableData.filter((item: any) => item.status !== 'inactive');
  }

  getFetchData() {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let attempt = data.resultList[0].attempt;
              let currentattempt = attempt;
              let previouseattempt = attempt - 1;
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);

              if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.optionalCase.length; i++) {
                const caseStatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[this.optionalCase[i]];
                const index = this.statusMapping[this.optionalCase[i]];
                if (index !== undefined) {
                  this.tableData[index].status = (caseStatus === 'inactive') ? 'inactive' : 'active';
                  this.tableData[4].divisionPolicyTableData[index].status = (caseStatus === 'inactive') ? 'inactive' : 'active';
                  this.tableData[4].diversityPolicyTableData[index].status = (caseStatus === 'inactive') ? 'inactive' : 'active';
                  this.tableData[4].townhallTableData[index].status = (caseStatus === 'inactive') ? 'inactive' : 'active';
                }
              }

              if ((data.resultList[0].decisions.d417 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }

              // Update townhallprogramme selection
              const attemptIndex = Number(this.noofattempt); // Safely convert to number
              if (!isNaN(attemptIndex)) {
                this.tableData[4].townhallprogramme.forEach((programme: TownhallProgramme) => {
                  programme.selected = false;
                  programme.value = '';

                  for (let j = 0; j < 3; j++) {
                    if (this.result.hrmGameCM.hrmgameperioddata[programme.titlecell] === this.result.decisions[programme.isSelectedcell[attemptIndex][j]]) {
                      programme.selected = true;
                      if (!this.townhallData.includes(this.result.decisions[programme.isSelectedcell[attemptIndex][j]])) {
                        this.townhallData.push(this.result.decisions[programme.isSelectedcell[attemptIndex][j]]);
                      }
                      programme.value = this.result.decisions[programme.valuecell[attemptIndex][j]];
                      break;
                    }
                  }
                });
              } else {

              }
            }

            this.generateGraph(this.noofattempt);
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
  generateGraph(noofattempt: string) {
    const cuurentattemptno = Number(noofattempt);
    const previousattemptno = Number(noofattempt) - 1;
    this.tableData.slice(0, 4).forEach((arr: any) => {
      const compensationGraphSeries = [
        {
          name: "5 star",
          data: [
            (Number(this.result.graph[arr.compensation.top[cuurentattemptno][0]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.senior[cuurentattemptno][0]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.junior[cuurentattemptno][0]]) * 100).toFixed(0)]
        },
        {
          name: "4 star",
          data: [
            (Number(this.result.graph[arr.compensation.top[cuurentattemptno][1]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.senior[cuurentattemptno][1]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.junior[cuurentattemptno][1]]) * 100).toFixed(0)]
        },

        {
          name: "3 star",
          data: [
            (Number(this.result.graph[arr.compensation.top[cuurentattemptno][2]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.senior[cuurentattemptno][2]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.junior[cuurentattemptno][2]]) * 100).toFixed(0)]
        },
        {
          name: "2 star",
          data: [
            (Number(this.result.graph[arr.compensation.top[cuurentattemptno][3]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.senior[cuurentattemptno][3]]) * 100).toFixed(0),
            (Number(this.result.graph[arr.compensation.junior[cuurentattemptno][3]]) * 100).toFixed(0)]
        },
      ];
      const averagesalarySeries = [
        {
          name: "Previous Year",
          data: [Number(this.result.graph[arr.averageSalaryGraph.top[previousattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.averageSalaryGraph.senior[previousattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.averageSalaryGraph.junior[previousattemptno]]).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [Number(this.result.graph[arr.averageSalaryGraph.top[cuurentattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.averageSalaryGraph.senior[cuurentattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.averageSalaryGraph.junior[cuurentattemptno]]).toFixed(0) || 0]
        },
      ];
      const trainingofemployeeSeries = [
        {
          name: "Previous Year",
          data: [Number(this.result.graph[arr.trainingofemployeeGraph.top[previousattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.trainingofemployeeGraph.senior[previousattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.trainingofemployeeGraph.junior[previousattemptno]]).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [Number(this.result.graph[arr.trainingofemployeeGraph.top[cuurentattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.trainingofemployeeGraph.senior[cuurentattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.trainingofemployeeGraph.junior[cuurentattemptno]]).toFixed(0) || 0]
        },
      ];
      const futureleadershipSeries = [
        {
          name: "Previous Year",
          data: [Number(this.result.graph[arr.futureleadershipGraph.senior[previousattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.futureleadershipGraph.junior[previousattemptno]]).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [Number(this.result.graph[arr.futureleadershipGraph.senior[cuurentattemptno]]).toFixed(0) || 0,
          Number(this.result.graph[arr.futureleadershipGraph.junior[cuurentattemptno]]).toFixed(0) || 0]
        },
      ];
      arr.compensation.chart.series = compensationGraphSeries;
      arr.averageSalaryGraph.chart.series = averagesalarySeries;
      arr.trainingofemployeeGraph.chart.series = trainingofemployeeSeries;
      arr.futureleadershipGraph.chart.series = futureleadershipSeries;

    });
  }


  validateInput(event: any, cellname: string, group: string[], datatype: string) {
    let value = parseFloat(event.target.value);

    // Ensure value is within the valid range
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }

    // Round to remove floating-point precision
    value = parseInt(value.toFixed(0), 10);
    event.target.value = value;
    // Calculate total excluding the current cell
    let total = 0;
    group.forEach(cell => {
      if (cell !== cellname && this.result.decisions[cell]) {
        total += this.result.decisions[cell] * 100; // Multiply by 100 to match the percentage format
      }
    });

    // Add the current value to the total
    total += value;

    // Check if the total exceeds 100
    if (total > 100) {
      event.target.value = 0; // Reset current input to 0
      value = 0;
      this._alert.error("The sum cannot be greater than 100 ");


    }
    this.writehrmvalue(cellname, event, datatype)

  }


  // writehrmvalue(cellname: string, e: any, datatype: string) {
  //   let apiname = "/hrmgame/singleinputhrmgame";
  //   let body = {};
  //   let value = e.target.value;
  //   if (datatype == 'percentdata') {
  //     body = {
  //       decisions: {
  //         [cellname]: Number(value) / 100,
  //       }
  //     }
  //   } else {
  //     body = {
  //       decisions: {
  //         [cellname]: value,
  //       }
  //     }
  //   }
  //   this._api.writeGameData("hrmgame", 2,
  //     body, apiname, 'hrmgamecmid').subscribe((data: any) => {
  //       if (data.status == "Success") {
  //         this.result[cellname] = value;
  //         this.getFetchData();
  //       }

  //     }, (error: any) => {
  //       this.checkloading = false;
  //       this.driveerrorLog(error, apiname);
  //     })
  // }

  writehrmvalue(cellname: string, e: any, datatype: string) {
    const apiname = "/hrmgame/singleinputhrmgame";
    const target = e.target as HTMLInputElement;
    let rawValue = target.value;
    let processedValue: any;
  
    if (datatype === 'percentdata') {
      processedValue = Number(rawValue) / 100;
    } else {
      processedValue = rawValue;
    }
  
    const body = {
      decisions: {
        [cellname]: processedValue,
      }
    };
  
    // 🧠 Track version for each field
    const currentVersion = (this.requestVersions[cellname] || 0) + 1;
    this.requestVersions[cellname] = currentVersion;
  
    this._api.writeGameData("hrmgame", 2, body, apiname, 'hrmgamecmid').subscribe(
      (data: any) => {
        // ✅ Apply response only if it's the latest
        if (this.requestVersions[cellname] === currentVersion && data.status === "Success") {
          this.result[cellname] = rawValue; // Show user value (not percent)
          this.getFetchData();
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }
  

  // writehrmvalueforRadio(key: string, valueans: string, event: any) {
  //   let value = "";
  //   const target = event.target as HTMLInputElement;
  //   if (target.type === 'checkbox') {
  //     value = target.checked ? valueans : '';
  //   } else {
  //     value = valueans;
  //   }
  //   this.result.decisions[key] = valueans;
  //   let apiname = "/hrmgame/singleinputhrmgame";
  //   let body = {};

  //   body = {
  //     decisions: {
  //       [key]: value,
  //     }
  //   }

  //   this._api.writeGameData("hrmgame", 2,
  //     body, apiname, 'hrmgamecmid').subscribe((data: any) => {
  //       if (data.status == "Success") {
  //         this.result.decisions[key] = value;
  //         this.getFetchData();
  //       }

  //     }, (error: any) => {
  //       this.checkloading = false;
  //       this.driveerrorLog(error, apiname);
  //     })
  // }

  writehrmvalueforRadio(key: string, valueans: string, event: any) {
    let value = "";
    const target = event.target as HTMLInputElement;
  
    if (target.type === 'checkbox') {
      value = target.checked ? valueans : '';
    } else {
      value = valueans;
    }
  
    // ✅ Immediately show selected value in UI
    this.result.decisions[key] = valueans;
  
    const apiname = "/hrmgame/singleinputhrmgame";
  
    const body = {
      decisions: {
        [key]: value,
      }
    };
  
    // ✅ Step 2: Version tracking
    const currentVersion = (this.requestVersions[key] || 0) + 1;
    this.requestVersions[key] = currentVersion;
  
    this._api.writeGameData("hrmgame", 2, body, apiname, 'hrmgamecmid').subscribe(
      (data: any) => {
        // ✅ Step 3: Apply result only if version is still latest
        if (this.requestVersions[key] === currentVersion && data.status === "Success") {
          this.result.decisions[key] = value;
          this.getFetchData();
        } else {
          console.log('Stale response ignored for key:', key);
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }
  

  // onCheckboxChange(value: string, index: number, event: Event) {
  //   const isChecked = (event.target as HTMLInputElement).checked;
  //   const apiname = "/hrmgame/singleinputhrmgame";

  //   if (isChecked) {
  //     // If checked, check if the limit is exceeded
  //     if (this.townhallData.length >= 3) {
  //       (event.target as HTMLInputElement).checked = false;
  //       this._alert.error("You can select a maximum of 3 options here");
  //       return;
  //     } else {
  //       // Add the value if within the limit
  //       if (!this.townhallData.includes(value)) {
  //         this.townhallData.push(value);
  //       }
  //     }
  //   } else {
  //     // If unchecked, remove the value from the array
  //     const indexToRemove = this.townhallData.indexOf(value);
  //     if (indexToRemove > -1) {
  //       this.townhallData.splice(indexToRemove, 1); // Remove the value
  //     }
  //   }

  //   // Create the `decisions` object based on the updated `townhallData`
  //   const decisions: any = {};
  //   const selectedCells = this.tableData[4].townhallprogramme[0].isSelectedcell[this.noofattempt];
  //   selectedCells.forEach((cell: string, i: number) => {
  //     decisions[cell] = this.townhallData[i] || ''; // Use the value from `townhallData` or default to ''
  //   });

  //   const body = {
  //     decisions: decisions,
  //   };



  //   // Send the updated data to the API
  //   this._api.writeGameData("hrmgame", 2, body, apiname, 'hrmgamecmid').subscribe(
  //     (data: any) => {
  //       if (data.status === "Success") {
  //         this.getFetchData();
  //       }
  //     },
  //     (error: any) => {
  //       this.checkloading = false;
  //       this.driveerrorLog(error, apiname);
  //     }
  //   );
  // }

  onCheckboxChange(value: string, index: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const apiname = "/hrmgame/singleinputhrmgame";
  
    // Limit selection to 3 items
    if (isChecked) {
      if (this.townhallData.length >= 3) {
        (event.target as HTMLInputElement).checked = false;
        this._alert.error("You can select a maximum of 3 options here");
        return;
      } else if (!this.townhallData.includes(value)) {
        this.townhallData.push(value);
      }
    } else {
      const indexToRemove = this.townhallData.indexOf(value);
      if (indexToRemove > -1) {
        this.townhallData.splice(indexToRemove, 1);
      }
    }
  
    // Build decisions object
    const decisions: any = {};
    const selectedCells = this.tableData[4].townhallprogramme[0].isSelectedcell[this.noofattempt];
    selectedCells.forEach((cell: string, i: number) => {
      decisions[cell] = this.townhallData[i] || '';
    });
  
    const body = { decisions };
  
    // ✅ Versioning by group key (e.g., townhall-checkboxes)
    const key = 'townhall-checkboxes';
    const currentVersion = (this.requestVersions[key] || 0) + 1;
    this.requestVersions[key] = currentVersion;
  
    this._api.writeGameData("hrmgame", 2, body, apiname, 'hrmgamecmid').subscribe(
      (data: any) => {
        if (this.requestVersions[key] === currentVersion && data.status === "Success") {
          this.getFetchData();
        } else {
          console.log("Ignored stale checkbox response");
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }
  

  openDialog(): void {
    this.dialog.open(HrmfintechFoodforthoughtComponent, {
      data: {},
    });
  }



}