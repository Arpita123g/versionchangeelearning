import { ChangeDetectorRef, Component } from '@angular/core';
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
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hrmfintech-talentacq',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,MatIconModule],
  templateUrl: './hrmfintech-talentacq.component.html',
  styleUrls: ['./hrmfintech-talentacq.component.scss']
})
export class HrmfintechTalentacqComponent extends AbstractComponent {


  tableData: any = [
    {
      status: 'active',
      title: "Sales",
      id: 'sales',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "Channel 1",
          topprevshell1: ['', 'e6', 'e9', 'e12', 'e15', 'e18', 'e21'],
          topprevshell2: ['', 'f6', 'f9', 'f12', 'f15', 'f18', 'f21'],
          topprevshell3: ['', 'g6', 'g9', 'g12', 'g15', 'g18', 'g21'],
          topcurshell1: ['', 'e9', 'e12', 'e15', 'e18', 'e21'],
          topcurshell2: ['', 'f9', 'f12', 'f15', 'f18', 'f21'],
          topcurshell3: ['', 'g9', 'g12', 'g15', 'g18', 'g21'],
        },
        {
          name: "Channel 2",
          topprevshell1: ['', 'e7', 'e10', 'e13', 'e16', 'e19', 'e22'],
          topprevshell2: ['', 'f7', 'f10', 'f13', 'f16', 'f19', 'f22'],
          topprevshell3: ['', 'g7', 'g10', 'g13', 'g16', 'g19', 'g22'],
          topcurshell1: ['', 'e10', 'e13', 'e16', 'e19', 'e22'],
          topcurshell2: ['', 'f10', 'f13', 'f16', 'f19', 'f22'],
          topcurshell3: ['', 'g10', 'g13', 'g16', 'g19', 'g22'],
        },
        {
          name: "Channel 3",
          topprevshell1: ['', 'e8', 'e11', 'e14', 'e17', 'e20', 'e23'],
          topprevshell2: ['', 'f8', 'f11', 'f14', 'f17', 'f20', 'f23'],
          topprevshell3: ['', 'g8', 'g11', 'g14', 'g17', 'g20', 'g23'],
          topcurshell1: ['', 'e11', 'e14', 'e17', 'e20', 'e23'],
          topcurshell2: ['', 'f11', 'f14', 'f17', 'f20', 'f23'],
          topcurshell3: ['', 'g11', 'g14', 'g17', 'g20', 'g23'],
        },
      ],
      hiringData: [
        {
          title: "Top<br/>Management",
          pvshellvalue: ['', 'e27', 'e28', 'e29', 'e30', 'e31', 'e32'],
          cyshellvalue: ['', 'e28', 'e29', 'e30', 'e31', 'e32'],
        },
        {
          title: "Senior<br/>Management",
          pvshellvalue: ['', 'e35', 'e36', 'e37', 'e38', 'e39', 'e40'],
          cyshellvalue: ['', 'e36', 'e37', 'e38', 'e39', 'e40'],
        },
        {
          title: "Junior<br/>Management",
          pvshellvalue: ['', 'e43', 'e44', 'e45', 'e46', 'e47', 'e48'],
          cyshellvalue: ['', 'e44', 'e45', 'e46', 'e47', 'e48'],
        },
        {
          title: "Bench Junior Management",
          pvshellvalue: ['', 'e51', 'e52', 'e53', 'e54', 'e55', 'e56'],
          cyshellvalue: ['', 'e52', 'e53', 'e54', 'e55', 'e56'],
        },
      ],
      firingData: [
        {
          title: "Top Management",
          pvshellvalue: ['', 'e75', 'e76', 'e77', 'e78', 'e79', 'e80'],
          cyshellvalue: ['', 'e76', 'e77', 'e78', 'e79', 'e80'],
        },
        {
          title: "Senior Management",
          pvshellvalue: ['', 'e67', 'e68', 'e69', 'e70', 'e71', 'e72'],
          cyshellvalue: ['', 'e68', 'e69', 'e70', 'e71', 'e72'],
        },
        {
          title: "Junior Management",
          pvshellvalue: ['', 'e59', 'e60', 'e61', 'e62', 'e63', 'e64'],
          cyshellvalue: ['', 'e60', 'e61', 'e62', 'e63', 'e64'],
        },
      ],
      outsourceData: ['e91', 'e92', 'e93', 'e94', 'e95', 'e96'],
      vendorData: ['e83', 'e84', 'e85', 'e86', 'e87', 'e88'],
      hiringChannelGraph: {
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
            text: "Channel cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c7', 'c8', 'c9', 'c10', 'c11', 'c12'],
        senior: ['d7', 'd8', 'd9', 'd10', 'd11', 'd12'],
        junior: ['e7', 'e8', 'e9', 'e10', 'e11', 'e12'],
      },
      hiringGraph: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management'], 
            ['Bench Junior', ' Management']],
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
            text: "New hires, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c358', 'c359', 'c360', 'c361', 'c362', 'c362'],
        senior: ['d358', 'd359', 'd360', 'd361', 'd362', 'd362'],
        junior: ['e358', 'e359', 'e360', 'e361', 'e362', 'e362'],
        benchjunior:['e51','e52','e53','e54','e55','e56'],//it is form decision key
      },
      firingGraph: {
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
            text: "Retrenchment, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c398', 'c399', 'c400', 'c401', 'c402', 'c403'],
        senior: ['d398', 'd399', 'd400', 'd401', 'd402', 'd403'],
        junior: ['e398', 'e399', 'e400', 'e401', 'e402', 'e403'],
      }
    },
    {
      status: 'active',
      title: "Product & Engineering",
      id: 'productengg',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "Channel 1",
          topprevdata1: "Direct Hiring	",
          topprevdata2: "Direct Hiring	",
          topprevdata3: "Direct Hiring	",
          topcurdata1: "",
          topcurdata2: "",
          topcurdata3: "",
          topprevshell1: ['', 'i6', 'i9', 'i12', 'i15', 'i18', 'i21'],
          topprevshell2: ['', 'j6', 'j9', 'j12', 'j15', 'j18', 'j21'],
          topprevshell3: ['', 'k6', 'k9', 'k12', 'k15', 'k18', 'k21'],
          topcurshell1: ['', 'i9', 'i12', 'i15', 'i18', 'i21'],
          topcurshell2: ['', 'j9', 'j12', 'j15', 'j18', 'j21'],
          topcurshell3: ['', 'k9', 'k12', 'k15', 'k18', 'k21'],

        },
        {
          name: "Channel 2",
          topprevshell1: ['', 'i7', 'i10', 'i13', 'i16', 'i19', 'i22'],
          topprevshell2: ['', 'j7', 'j10', 'j13', 'j16', 'j19', 'j22'],
          topprevshell3: ['', 'k7', 'k10', 'k13', 'k16', 'k19', 'k22'],
          topcurshell1: ['', 'i10', 'i13', 'i16', 'i19', 'i22'],
          topcurshell2: ['', 'j10', 'j13', 'j16', 'j19', 'j22'],
          topcurshell3: ['', 'k10', 'k13', 'k16', 'k19', 'k22'],
        },
        {
          name: "Channel 3",
          topprevshell1: ['', 'i8', 'i11', 'i14', 'i17', 'i20', 'i23'],
          topprevshell2: ['', 'j8', 'j11', 'j14', 'j17', 'j20', 'j23'],
          topprevshell3: ['', 'k8', 'k11', 'k14', 'k17', 'k20', 'k23'],
          topcurshell1: ['', 'i11', 'i14', 'i17', 'i20', 'i23'],
          topcurshell2: ['', 'j11', 'j14', 'j17', 'j20', 'j23'],
          topcurshell3: ['', 'k11', 'k14', 'k17', 'k20', 'k23'],
        },
      ],
      hiringData: [
        {
          title: "Top<br/>Management",
          pvshellvalue: ['', 'f27', 'f28', 'f29', 'f30', 'f31', 'f32'],
          cyshellvalue: ['', 'f28', 'f29', 'f30', 'f31', 'f32'],
        },
        {
          title: "Senior<br/>Management",
          pvshellvalue: ['', 'f35', 'f36', 'f37', 'f38', 'f39', 'f40'],
          cyshellvalue: ['', 'f36', 'f37', 'f38', 'f39', 'f40'],
        },
        {
          title: "Junior<br/>Management",
          pvshellvalue: ['', 'f43', 'f44', 'f45', 'f46', 'f47', 'f48'],
          cyshellvalue: ['', 'f44', 'f45', 'f46', 'f47', 'f48'],
        },
        {
          title: "Bench Junior Management",
          pvshellvalue: ['', 'f51', 'f52', 'f53', 'f54', 'f55', 'f56'],
          cyshellvalue: ['', 'f52', 'f53', 'f54', 'f55', 'f56'],
        },
      ],
      firingData: [
        {
          title: "Top Management",
          pvshellvalue: ['', 'f75', 'f76', 'f77', 'f78', 'f79', 'f80'],
          cyshellvalue: ['', 'f76', 'f77', 'f78', 'f79', 'f80'],
        },
        {
          title: "Senior Management",
          pvshellvalue: ['', 'f67', 'f68', 'f69', 'f70', 'f71', 'f72'],
          cyshellvalue: ['', 'f68', 'f69', 'f70', 'f71', 'f72'],
        },
        {
          title: "Junior Management",
          pvshellvalue: ['', 'f59', 'f60', 'f61', 'f62', 'f63', 'f64'],
          cyshellvalue: ['', 'f60', 'f61', 'f62', 'f63', 'f64'],
        },
      ],
      outsourceData: ['f91', 'f92', 'f93', 'f94', 'f95', 'f96'],
      vendorData: ['f83', 'f84', 'f85', 'f86', 'f87', 'f88'],
      hiringChannelGraph: {
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
            text: "Channel cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c18', 'c19', 'c20', 'c21', 'c22', 'c23'],
        senior: ['d18', 'd19', 'd20', 'd21', 'd22', 'd23'],
        junior: ['e18', 'e19', 'e20', 'e21', 'e22', 'e23'],
      },
      hiringGraph: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management'], 
            ['Bench Junior', ' Management']],
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
            text: "New hires, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c368', 'c369', 'c370', 'c371', 'c372', 'c373'],
        senior: ['d368', 'd369', 'd370', 'd371', 'd372', 'd373'],
        junior: ['e368', 'e369', 'e370', 'e371', 'e372', 'e373'],
        benchjunior:['f51','f52','f53','f54','f55','f56'],//it is form decision key
      },
      firingGraph: {
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
            text: "Retrenchment, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c408', 'c409', 'c410', 'c411', 'c412', 'c413'],
        senior: ['d408', 'd409', 'd410', 'd411', 'd412', 'd413'],
        junior: ['e408', 'e409', 'e410', 'e411', 'e412', 'e413'],
       
      }
    },
    {
      status: 'active',
      title: "Customer Success",
      id: "customersuccess",
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "Channel 1",
          topprevdata1: "Direct Hiring	",
          topprevdata2: "Direct Hiring	",
          topprevdata3: "Direct Hiring	",
          topcurdata1: "",
          topcurdata2: "",
          topcurdata3: "",
          topprevshell1: ['', 'm6', 'm9', 'm12', 'm15', 'm18', 'm21'],
          topprevshell2: ['', 'n6', 'n9', 'n12', 'n15', 'n18', 'n21'],
          topprevshell3: ['', 'o6', 'o9', 'o12', 'o15', 'o18', 'o21'],
          topcurshell1: ['', 'm9', 'm12', 'm15', 'm18', 'm21'],
          topcurshell2: ['', 'n9', 'n12', 'n15', 'n18', 'n21'],
          topcurshell3: ['', 'o9', 'o12', 'o15', 'o18', 'o21'],
        },
        {
          name: "Channel 2",
          topprevshell1: ['', 'm7', 'm10', 'm13', 'm16', 'm19', 'm22'],
          topprevshell2: ['', 'n7', 'n10', 'n13', 'n16', 'n19', 'n22'],
          topprevshell3: ['', 'o7', 'o10', 'o13', 'o16', 'o19', 'o22'],
          topcurshell1: ['', 'm10', 'm13', 'm16', 'm19', 'm22'],
          topcurshell2: ['', 'n10', 'n13', 'n16', 'n19', 'n22'],
          topcurshell3: ['', 'o10', 'o13', 'o16', 'o19', 'o22'],
        },
        {
          name: "Channel 3",
          topprevshell1: ['', 'm8', 'm11', 'm14', 'm17', 'm20', 'm23'],
          topprevshell2: ['', 'n8', 'n11', 'n14', 'n17', 'n20', 'n23'],
          topprevshell3: ['', 'o8', 'o11', 'o14', 'o17', 'o20', 'o23'],
          topcurshell1: ['', 'm11', 'm14', 'm17', 'm20', 'm23'],
          topcurshell2: ['', 'n11', 'n14', 'n17', 'n20', 'n23'],
          topcurshell3: ['', 'o11', 'o14', 'o17', 'o20', 'o23'],
        },
      ],
      hiringData: [
        {
          title: "Top<br/>Management",
          pvshellvalue: ['', 'g27', 'g28', 'g29', 'g30', 'g31', 'g32'],
          cyshellvalue: ['', 'g28', 'g29', 'g30', 'g31', 'g32'],
        },
        {
          title: "Senior<br/>Management",
          pvshellvalue: ['', 'g35', 'g36', 'g37', 'g38', 'g39', 'g40'],
          cyshellvalue: ['', 'g36', 'g37', 'g38', 'g39', 'g40'],
        },
        {
          title: "Junior<br/>Management",
          pvshellvalue: ['', 'g43', 'g44', 'g45', 'g46', 'g47', 'g48'],
          cyshellvalue: ['', 'g44', 'g45', 'g46', 'g47', 'g48'],
        },
        {
          title: "Bench Junior Management",
          pvshellvalue: ['', 'g51', 'g52', 'g53', 'g54', 'g55', 'g56'],
          cyshellvalue: ['', 'g52', 'g53', 'g54', 'g55', 'g56'],
        },
      ],
      firingData: [
        {
          title: "Top Management",
          pvshellvalue: ['', 'g75', 'g76', 'g77', 'g78', 'g79', 'g80'],
          cyshellvalue: ['', 'g76', 'g77', 'g78', 'g79', 'g80'],
        },
        {
          title: "Senior Management",
          pvshellvalue: ['', 'g67', 'g68', 'g69', 'g70', 'g71', 'g72'],
          cyshellvalue: ['', 'g68', 'g69', 'g70', 'g71', 'g72'],
        },
        {
          title: "Junior Management",
          pvshellvalue: ['', 'g59', 'g60', 'g61', 'g62', 'g63', 'g64'],
          cyshellvalue: ['', 'g60', 'g61', 'g62', 'g63', 'g64'],
        },
      ],
      outsourceData: ['g91', 'g92', 'g93', 'g94', 'g95', 'g96'],
      vendorData: ['g83', 'g84', 'g85', 'g86', 'g87', 'g88'],
      hiringChannelGraph: {
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
            text: "Channel cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c29', 'c30', 'c31', 'c32', 'c33', 'c34'],
        senior: ['d29', 'd30', 'd31', 'd32', 'd33', 'd34'],
        junior: ['e29', 'e30', 'e31', 'e32', 'e33', 'e34'],
      },
      hiringGraph: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management'], 
            ['Bench Junior', ' Management']],
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
            text: "New hires, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c378', 'c379', 'c380', 'c381', 'c382', 'c383'],
        senior: ['d378', 'd379', 'd380', 'd381', 'd382', 'd383'],
        junior: ['e378', 'e379', 'e380', 'e381', 'e382', 'e383'],
        benchjunior:['g51','g52','g53','g54','g55','g56'],//it is form decision key
      },
      firingGraph: {
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
            text: "Retrenchment, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c418', 'c419', 'c420', 'c421', 'c422', 'c423'],
        senior: ['d418', 'd419', 'd420', 'd421', 'd422', 'd423'],
        junior: ['e418', 'e419', 'e420', 'e421', 'e422', 'e423'],
      }
    },
    {
      status: 'active',
      title: "Design & Communication",
      id: 'designcomm',
      tableHeader: ["Top Management", "Senior Management", "Junior Management"],
      tableData: [
        {
          name: "Channel 1",
          topprevdata1: "Direct Hiring	",
          topprevdata2: "Direct Hiring	",
          topprevdata3: "Direct Hiring	",
          topcurdata1: "",
          topcurdata2: "",
          topcurdata3: "",
          topprevshell1: ['', 'q6', 'q9', 'q12', 'q15', 'q18', 'q21'],
          topprevshell2: ['', 'r6', 'r9', 'r12', 'r15', 'r18', 'r21'],
          topprevshell3: ['', 's6', 's9', 's12', 's15', 's18', 's21'],
          topcurshell1: ['', 'q9', 'q12', 'q15', 'q18', 'q21'],
          topcurshell2: ['', 'r9', 'r12', 'r15', 'r18', 'r21'],
          topcurshell3: ['', 's9', 's12', 's15', 's18', 's21'],
        },
        {
          name: "Channel 2",
          topprevshell1: ['', 'q7', 'q10', 'q13', 'q16', 'q19', 'q22'],
          topprevshell2: ['', 'r7', 'r10', 'r13', 'r16', 'r19', 'r22'],
          topprevshell3: ['', 's7', 's10', 's13', 's16', 's19', 's22'],
          topcurshell1: ['', 'q10', 'q13', 'q16', 'q19', 'q22'],
          topcurshell2: ['', 'r10', 'r13', 'r16', 'r19', 'r22'],
          topcurshell3: ['', 's10', 's13', 's16', 's19', 's22'],
        },
        {
          name: "Channel 3",
          topprevshell1: ['', 'q8', 'q11', 'q14', 'q17', 'q20', 'q23'],
          topprevshell2: ['', 'r8', 'r11', 'r14', 'r17', 'r20', 'r23'],
          topprevshell3: ['', 's8', 's11', 's14', 's17', 's20', 's23'],
          topcurshell1: ['', 'q11', 'q14', 'q17', 'q20', 'q23'],
          topcurshell2: ['', 'r11', 'r14', 'r17', 'r20', 'r23'],
          topcurshell3: ['', 's11', 's14', 's17', 's20', 's23'],
        },
      ],
      hiringData: [
        {
          title: "Top<br/>Management",
          pvshellvalue: ['', 'h27', 'h28', 'h29', 'h30', 'h31', 'h32'],
          cyshellvalue: ['', 'h28', 'h29', 'h30', 'h31', 'h32'],
        },
        {
          title: "Senior<br/>Management",
          pvshellvalue: ['', 'h35', 'h36', 'h37', 'h38', 'h39', 'h40'],
          cyshellvalue: ['', 'h36', 'h37', 'h38', 'h39', 'h40'],
        },
        {
          title: "Junior<br/>Management",
          pvshellvalue: ['', 'h43', 'h44', 'h45', 'h46', 'h47', 'h48'],
          cyshellvalue: ['', 'h44', 'h45', 'h46', 'h47', 'h48'],
        },
        {
          title: "Bench Junior Management",
          pvshellvalue: ['', 'h51', 'h52', 'h53', 'h54', 'h55', 'h56'],
          cyshellvalue: ['', 'h52', 'h53', 'h54', 'h55', 'h56'],
        },
      ],
      firingData: [
        {
          title: "Top Management",
          pvshellvalue: ['', 'h75', 'h76', 'h77', 'h78', 'h79', 'h80'],
          cyshellvalue: ['', 'h76', 'h77', 'h78', 'h79', 'h80'],
        },
        {
          title: "Senior Management",
          pvshellvalue: ['', 'h67', 'h68', 'h69', 'h70', 'h71', 'h72'],
          cyshellvalue: ['', 'h68', 'h69', 'h70', 'h71', 'h72'],
        },
        {
          title: "Junior Management",
          pvshellvalue: ['', 'h59', 'h60', 'h61', 'h62', 'h63', 'h64'],
          cyshellvalue: ['', 'h60', 'h61', 'h62', 'h63', 'h64'],
        },
      ],
      outsourceData: ['h91', 'h92', 'h93', 'h94', 'h95', 'h96'],
      vendorData: ['h83', 'h84', 'h85', 'h86', 'h87', 'h88'],
      hiringChannelGraph: {
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
            text: "Channel cost, k INR",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c40', 'c41', 'c42', 'c43', 'c44', 'c45'],
        senior: ['d40', 'd41', 'd42', 'd43', 'd44', 'd45'],
        junior: ['e40', 'e41', 'e42', 'e43', 'e44', 'e45'],
      },
      hiringGraph: {
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
            categories: [['Top', ' Management'], ['Senior', ' Management'], ['Junior', ' Management'], 
            ['Bench Junior', ' Management']],
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
            text: "New hires, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c388', 'c389', 'c390', 'c391', 'c392', 'c393'],
        senior: ['d388', 'd389', 'd390', 'd391', 'd392', 'd393'],
        junior: ['e388', 'e389', 'e390', 'e391', 'e392', 'e393'],
        benchjunior:['h51','h52','h53','h54','h55','h56'],//it is form decision key
      },
      firingGraph: {
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
            text: "Retrenchment, units",
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        },
        top: ['c428', 'c429', 'c430', 'c431', 'c432', 'c433'],
        senior: ['d428', 'd429', 'd430', 'd431', 'd432', 'd433'],
        junior: ['e428', 'e429', 'e430', 'e431', 'e432', 'e433'],
      }
    }
  ];
  selectOptions: string[] = ["Campus Hiring", "Employee Referral", "Direct Hiring", "Vendor General Hiring", "Executive Hiring"];

  result: any = [];
  statusMapping: any = {
    'productengstatus': 1,
    'customersuccessstatus': 2,
    'designcommunicationstatus': 3
  };
  foodforthought: boolean = true;
  optionalCase: any = ['productengstatus', 'customersuccessstatus', 'designcommunicationstatus']
  inputDisabled: boolean = false;
  requestVersions: { [key: string]: number } = {}; // To track latest input version per field
  
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.fetchData(this.noofattempt);
   
  }

  get activeItems() {
    return this.tableData.filter((item: any) => item.status !== 'inactive');
  }


  fetchData(attempt: any) {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);
              if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.noofattempt = data.resultList[0].attempt;
              this.result = data.resultList[0];
              for (let i = 0; i < this.optionalCase.length; i++) {
                const caseStatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[this.optionalCase[i]];
                const index = this.statusMapping[this.optionalCase[i]];
                if (index !== undefined) {
                  this.tableData[index].status = (caseStatus === 'inactive') ? 'inactive' : 'active';
                }
              }
              if ((data.resultList[0].decisions.d417 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              }

              this.generateGraph(this.noofattempt);
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

  onModelChange(value: any, fired: any): void {
    // Here, you can access the specific 'fired' object and the index 'k'
    const formattedValue = parseFloat(value).toFixed(0);  // Format to 2 decimal places
    this.result[fired.cyshellvalue[this.noofattempt]] = parseFloat(formattedValue);
    // This logs the current 'fired' object for that index
  }


  generateGraph(noofattempt: string) {
    const cuurentattemptno = Number(noofattempt);
    const previousattemptno = Number(noofattempt) - 1;
    this.tableData.forEach((arr: any) => {
      const newhiringChannelGraphSeries = [
        {
          name: "Previous Year",
          data: [(Number(this.result.graph[arr.hiringChannelGraph.top[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringChannelGraph.senior[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringChannelGraph.junior[previousattemptno]])).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [(Number(this.result.graph[arr.hiringChannelGraph.top[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringChannelGraph.senior[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringChannelGraph.junior[cuurentattemptno]])).toFixed(0) || 0]
        },
      ];
      const newhiringGraphSeries = [
        {
          name: "Previous Year",
          data: [(Number(this.result.graph[arr.hiringGraph.top[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringGraph.senior[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringGraph.junior[previousattemptno]])).toFixed(0) || 0,
          (Number(this.result.decisions[arr.hiringGraph.benchjunior[previousattemptno]])).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [(Number(this.result.graph[arr.hiringGraph.top[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringGraph.senior[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.hiringGraph.junior[cuurentattemptno]])).toFixed(0) || 0,
          (Number(this.result.decisions[arr.hiringGraph.benchjunior[cuurentattemptno]])).toFixed(0) || 0]
        },
      ];
      const newfiringGraphSeries = [
        {
          name: "Previous Year",
          data: [(Number(this.result.graph[arr.firingGraph.top[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.firingGraph.senior[previousattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.firingGraph.junior[previousattemptno]])).toFixed(0) || 0]
        },
        {
          name: "Current Year",
          data: [(Number(this.result.graph[arr.firingGraph.top[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.firingGraph.senior[cuurentattemptno]])).toFixed(0) || 0, (Number(this.result.graph[arr.firingGraph.junior[cuurentattemptno]])).toFixed(0) || 0]
        },
      ];
      arr.hiringChannelGraph.chart.series = newhiringChannelGraphSeries;
      arr.hiringGraph.chart.series = newhiringGraphSeries;
      arr.firingGraph.chart.series = newfiringGraphSeries;

      this.checkloading = false;
    });
  }


  // writehrmvalue(cellname: string, e: any) {

  //   let apiname = "/hrmgame/singleinputhrmgame";
  //   const target = e.target as HTMLInputElement;

  //   let value = "";
  //   if (target.type === 'checkbox') {
  //     value = target.checked ? 'Yes' : 'No';
  //   } else {
  //     value = target.value;

  //   }
   
  //     let body = {
  //       decisions: {
  //         [cellname]: value,
  //       }
  //     }

  //     this._api.writeGameData("hrmgame", 1,
  //       body, apiname, 'hrmgamecmid').subscribe((data: any) => {
  //         if (data.status == "Success") {
  //           this.fetchData(this.noofattempt);
  //         }

  //       }, (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       })
 
  // }

  writehrmvalue(cellname: string, e: any) {
    let apiname = "/hrmgame/singleinputhrmgame";
    const target = e.target as HTMLInputElement;
  
    let value = "";
    if (target.type === 'checkbox') {
      value = target.checked ? 'Yes' : 'No';
    } else {
      value = target.value;
    }
  
    // Track version for this field
    const currentVersion = (this.requestVersions[cellname] || 0) + 1;
    this.requestVersions[cellname] = currentVersion;
  
    let body = {
      decisions: {
        [cellname]: value,
      }
    };
  
    this._api.writeGameData("hrmgame", 1, body, apiname, 'hrmgamecmid').subscribe(
      (data: any) => {
        // Only proceed if this response is for the latest request
        if (this.requestVersions[cellname] === currentVersion && data.status === "Success") {
          this.fetchData(this.noofattempt); // ✅ Safe to update now
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
