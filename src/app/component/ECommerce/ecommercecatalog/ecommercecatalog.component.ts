import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { EcommercefoodforthoughtComponent } from '../ecommercefoodforthought/ecommercefoodforthought.component';
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
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-ecommercecatalog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule,
     NgApexchartsModule, MatIconModule, TippyDirective,FormsModule],
  templateUrl: './ecommercecatalog.component.html',
  styleUrls: ['./ecommercecatalog.component.scss']
})
export class EcommercecatalogComponent extends AbstractComponent {
  foodforthought: boolean = true;
  submitprove: string = "";
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optionalcase: any = [];
  optional: any = [];
  checkboxvalue: { [key: string]: string } = {};
  Markups: barChart;
  Ordered: barChart;
  catalogData: any = [];
  inputDisabled: boolean = false;
  productNames: any[] = [];
  orderedNames: any[] = [];

  markupcellname: any = [
    ['k8', 'k9', 'k10', 'k11', 'k12', 'k13', 'k14', 'k15', 'k16', 'k17'],
    ['m8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14', 'm15', 'm16', 'm17']
  ]

  orderedcellname: any = [
    ['p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16', 'p17'],
    ['r8', 'r9', 'r10', 'r11', 'r12', 'r13', 'r14', 'r15', 'r16', 'r17'],
    ['u8', 'u9', 'u10', 'u11', 'u12', 'u13', 'u14', 'u15', 'u16', 'u17']
  ]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Markups = {
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
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
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
        text: "Resources",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.Ordered = {
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
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
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
        text: "Resources",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  tableData = [
    ["Selection", "Category", "Product Name", "Target Market", "Material", "Quality", "Sustainability", "Unit Cost, INR", "Retail Price, INR", "Market Trend", "Profit Margin", "Inventory Management", "Brand Fit", "Competitor Analysis", "Customer Feedback", "Monthly Market Size (Units)"],
    ["ar7", 'e7', 'f7', 'g7', 'h7', 'i7', 'j7', 'k7', 'l7', 'm7', 'n7', 'o7', 'p7', 'q7', 'r7', 's7'],
    ["ar8", 'e8', 'f8', 'g8', 'h8', 'i8', 'j8', 'k8', 'l8', 'm8', 'n8', 'o8', 'p8', 'q8', 'r8', 's8'],
    ["ar9", 'e9', 'f9', 'g9', 'h9', 'i9', 'j9', 'k9', 'l9', 'm9', 'n9', 'o9', 'p9', 'q9', 'r9', 's9'],
    ["ar10", 'e10', 'f10', 'g10', 'h10', 'i10', 'j10', 'k10', 'l10', 'm10', 'n10', 'o10', 'p10', 'q10', 'r10', 's10'],
    ["ar11", 'e11', 'f11', 'g11', 'h11', 'i11', 'j11', 'k11', 'l11', 'm11', 'n11', 'o11', 'p11', 'q11', 'r11', 's11'],
    ["ar12", 'e12', 'f12', 'g12', 'h12', 'i12', 'j12', 'k12', 'l12', 'm12', 'n12', 'o12', 'p12', 'q12', 'r12', 's12'],
    ["ar13", 'e13', 'f13', 'g13', 'h13', 'i13', 'j13', 'k13', 'l13', 'm13', 'n13', 'o13', 'p13', 'q13', 'r13', 's13'],
    ["ar14", 'e14', 'f14', 'g14', 'h14', 'i14', 'j14', 'k14', 'l14', 'm14', 'n14', 'o14', 'p14', 'q14', 'r14', 's14'],
    ["ar15", 'e15', 'f15', 'g15', 'h15', 'i15', 'j15', 'k15', 'l15', 'm15', 'n15', 'o15', 'p15', 'q15', 'r15', 's15'],
    ["ar16", 'e16', 'f16', 'g16', 'h16', 'i16', 'j16', 'k16', 'l16', 'm16', 'n16', 'o16', 'p16', 'q16', 'r16', 's16'],
    ["ar17", 'e17', 'f17', 'g17', 'h17', 'i17', 'j17', 'k17', 'l17', 'm17', 'n17', 'o17', 'p17', 'q17', 'r17', 's17'],
    ["ar18", 'e18', 'f18', 'g18', 'h18', 'i18', 'j18', 'k18', 'l18', 'm18', 'n18', 'o18', 'p18', 'q18', 'r18', 's18'],
    ["ar19", 'e19', 'f19', 'g19', 'h19', 'i19', 'j19', 'k19', 'l19', 'm19', 'n19', 'o19', 'p19', 'q19', 'r19', 's19'],
    ["ar20", 'e20', 'f20', 'g20', 'h20', 'i20', 'j20', 'k20', 'l20', 'm20', 'n20', 'o20', 'p20', 'q20', 'r20', 's20'],
    ["ar21", 'e21', 'f21', 'g21', 'h21', 'i21', 'j21', 'k21', 'l21', 'm21', 'n21', 'o21', 'p21', 'q21', 'r21', 's21'],
    ["ar22", 'e22', 'f22', 'g22', 'h22', 'i22', 'j22', 'k22', 'l22', 'm22', 'n22', 'o22', 'p22', 'q22', 'r22', 's22'],
    ["ar23", 'e23', 'f23', 'g23', 'h23', 'i23', 'j23', 'k23', 'l23', 'm23', 'n23', 'o23', 'p23', 'q23', 'r23', 's23'],
    ["ar24", 'e24', 'f24', 'g24', 'h24', 'i24', 'j24', 'k24', 'l24', 'm24', 'n24', 'o24', 'p24', 'q24', 'r24', 's24'],
    ["ar25", 'e25', 'f25', 'g25', 'h25', 'i25', 'j25', 'k25', 'l25', 'm25', 'n25', 'o25', 'p25', 'q25', 'r25', 's25'],
    ["ar26", 'e26', 'f26', 'g26', 'h26', 'i26', 'j26', 'k26', 'l26', 'm26', 'n26', 'o26', 'p26', 'q26', 'r26', 's26'],
    ["ar27", 'e27', 'f27', 'g27', 'h27', 'i27', 'j27', 'k27', 'l27', 'm27', 'n27', 'o27', 'p27', 'q27', 'r27', 's27'],
    ["ar28", 'e28', 'f28', 'g28', 'h28', 'i28', 'j28', 'k28', 'l28', 'm28', 'n28', 'o28', 'p28', 'q28', 'r28', 's28'],
    ["ar29", 'e29', 'f29', 'g29', 'h29', 'i29', 'j29', 'k29', 'l29', 'm29', 'n29', 'o29', 'p29', 'q29', 'r29', 's29'],
    ["ar30", 'e30', 'f30', 'g30', 'h30', 'i30', 'j30', 'k30', 'l30', 'm30', 'n30', 'o30', 'p30', 'q30', 'r30', 's30'],
    ["ar31", 'e31', 'f31', 'g31', 'h31', 'i31', 'j31', 'k31', 'l31', 'm31', 'n31', 'o31', 'p31', 'q31', 'r31', 's31'],
    ["ar32", 'e32', 'f32', 'g32', 'h32', 'i32', 'j32', 'k32', 'l32', 'm32', 'n32', 'o32', 'p32', 'q32', 'r32', 's32'],
    ["ar33", 'e33', 'f33', 'g33', 'h33', 'i33', 'j33', 'k33', 'l33', 'm33', 'n33', 'o33', 'p33', 'q33', 'r33', 's33'],
    ["ar34", 'e34', 'f34', 'g34', 'h34', 'i34', 'j34', 'k34', 'l34', 'm34', 'n34', 'o34', 'p34', 'q34', 'r34', 's34'],
    ["ar35", 'e35', 'f35', 'g35', 'h35', 'i35', 'j35', 'k35', 'l35', 'm35', 'n35', 'o35', 'p35', 'q35', 'r35', 's35'],
    ["ar36", 'e36', 'f36', 'g36', 'h36', 'i36', 'j36', 'k36', 'l36', 'm36', 'n36', 'o36', 'p36', 'q36', 'r36', 's36']
  ]


  headerHints = [
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Specifies the demographic and lifestyle preferences of the intended customers for each product.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Highlights the sustainable materials used in the product.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Describes the durability and fabric quality.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Details the eco-friendly properties of each product.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Lists the cost price for participants and the suggested retail price in Indian Rupees.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Lists the cost price for participants and the suggested retail price in Indian Rupees.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Indicates the current demand trend for the product type.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Describes the expected profit margin per item sold.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Shows how quickly the product is expected to sell and the frequency of restocking needed.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Describes how well the product aligns with the overall brand image.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Provides insights into the competition for each product in the market.</p></div>
      </div>
    </div>
    `,
    `
    <div class='help-tip p-2'>
      <div style='display:flex;'>
        <div><h4 style='color: white; margin:0 auto; font-weight: 600;'>Q.1</h4></div>
        &nbsp; &nbsp; &nbsp;
        <div><p style='margin: 0 auto; color: white; font-size:13px;'> Offers a general reception based on customer reviews of similar products.</p></div>
      </div>
    </div>
    `,

    // Repeat similar HTML hints for other headers...
  ];
  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }


  suppliertable = [
    {
      // head: "EcoTextile Solutions",
      head: "e40",//period data
      row: [
        // { label: "Quality (out of 5)", value: "4.5 /f40" },
        // { label: "Sustainability (out of 5)", value: "5 /g40" },
        // { label: "Cost comparison", value: "Market + 10% /h40" },
        { label: "f39", value: "f40" },
        { label: "g39", value: "g40" },
        { label: "h39", value: "h40" },
      ],
      inputcell: 'aq39',
      hascheckbox: true,
    },
    {
      // head: "GreenFiber Industries",
      head: "e41",//period data
      row: [
        // { label: "Quality (out of 5)", value: "4 f/41" },
        // { label: "Sustainability (out of 5)", value: "4.5 g/41" },
        // { label: "Cost comparison", value: "Market h/41" },
        //it will be uncommented
        { label: "f39", value: "f41" },
        { label: "g39", value: "g41" },
        { label: "h39", value: "h41" },
      ],
      inputcell: 'aq40',
      hascheckbox: true,
    },
    {
      // head: "PureHemp Co.",
      head: "e42",//period data
      row: [
        // { label: "Quality (out of 5)", value: "5 / f42" },
        // { label: "Sustainability (out of 5)", value: "5 / g42" },
        // { label: "Cost comparison", value: "Market + 20 / h42" },
        //it will be uncommented
        { label: "f39", value: "f42" },
        { label: "g39", value: "g42" },
        { label: "h39", value: "h42" },
      ],
      inputcell: 'aq41',
      hascheckbox: true,
    },
    {
      // head: "ReGen Fabrics",
      head: "e43", //period data
      row: [
        // { label: "Quality (out of 5)", value: "5 / f43" },
        // { label: "Sustainability (out of 5)", value: "5 /g43" },
        // { label: "Cost comparison", value: "Market + 20 / h43" },
        //it will be uncommented
        { label: "f39", value: "f43" },
        { label: "g39", value: "g43" },
        { label: "h39", value: "h43" },
      ],
      inputcell: 'aq42',
      hascheckbox: true,
    },
    {
      // head: "OrganicWeave Ltd.",
      head: "e44",  //period data
      row: [
        // { label: "Quality (out of 5)", value: "5 / f44" },
        // { label: "Sustainability (out of 5)", value: "5 /g44" },
        // { label: "Cost comparison", value: "Market + 20 / h44" },
        //it will be uncommented
        { label: "f39", value: "f44" },
        { label: "g39", value: "g44" },
        { label: "h39", value: "h44" },
      ],
      inputcell: 'aq43',
      hascheckbox: true,
    },
  ]

  PricingtableData: any = [
    ["Category", "Product Name", "Supplier Unit Cost, INR", "Markups %", "Unit Price, INR", "Estimate Market Share %", "Estimated Monthly Sales, units"],
    ["i8", "j8", "k8", "ar46", "m8", "as46", "p8"],
    ["i9", "j9", "k9", "ar47", "m9", "as47", "p9"],
    ["i10", "j10", "k10", "ar48", "m10", "as48", "p10"],
    ["i11", "j11", "k11", "ar49", "m11", "as49", "p11"],
    ["i12", "j12", "k12", "ar50", "m12", "as50", "p12"],
    ["i13", "j13", "k13", "ar51", "m13", "as51", "p13"],
    ["i14", "j14", "k14", "ar52", "m14", "as52", "p14"],
    ["i15", "j15", "k15", "ar53", "m15", "as53", "p15"],
    ["i16", "j16", "k16", "ar54", "m16", "as54", "p16"],
    ["i17", "j17", "k17", "ar55", "m17", "as55", "p17"],
  ];

  OrdertableData = [
    ["Category", "Product Name", "Monthly Demand, units", "Buffer Coefficient", "Ordered, units", "Standard Shrink %", "Safety Stock, units"],
    ["i8", "j8", "p8", "ar58", "r8", "s8", "u8"],
    ["i9", "j9", "p9", "ar59", "r9", "s9", "u9"],
    ["i10", "j10", "p10", "ar60", "r10", "s10", "u10"],
    ["i11", "j11", "p11", "ar61", "r11", "s11", "u11"],
    ["i12", "j12", "p12", "ar62", "r12", "s12", "u12"],
    ["i13", "j13", "p13", "ar63", "r13", "s13", "u13"],
    ["i14", "j14", "p14", "ar64", "r14", "s14", "u14"],
    ["i15", "j15", "p15", "ar65", "r15", "s15", "u15"],
    ["i16", "j16", "p16", "ar66", "r16", "s16", "u16"],
    ["i17", "j17", "p17", "ar67", "r17", "s17", "u17"],
  ]
  getRowValue(row: any) {
    return row.shift();

  }
  override ngOnInit(): void {
    this.getFetchData(this.noofattempt, 'first');
  }

  //fetch api call
  getFetchData(attempt: string, calltime: string) {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let jsonarray1 = []; let jsonarray2 = []; let jsonarray3 = [];
              let jsonarray4 = []; let jsonarray5 = [];
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].ecommercegamecmid);
              if (data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              if (this.result.ecommercegamedata) {
                this.submitprove = data.resultList[0].ecommercegamedata.aq168;
                if ((this.submitprove == 'yes') || (this.submitprove == 'yes') || (this.timefinished)) {
                  this.inputDisabled = true;
                }
                if (calltime == 'first') {
                  for (let i = 1; i < this.tableData.length; i++) {
                    const tableValue = this.tableData[i][0];
                    if (this.result.ecommercegamedata[tableValue] == 1) {
                      if (!this.catalogData.some((item: any) => this.isEqual(item, tableValue))) {
                        this.catalogData.push(tableValue);
                      }
                    }
                  }

                }
                let Markupsxaxis: (string | string[])[] = [];
                const ecommerceGameData = data.resultList?.[0]?.ecommercegamedata;
                if (ecommerceGameData) {
                  this.productNames = this.PricingtableData.slice(1).map((row: (string | number)[]) => ecommerceGameData[row[1]]);
                  Markupsxaxis.push(...this.productNames)
                } else {
                  console.error("ecommercegamedata is missing.");
                }
                for (let i = 0; i < this.markupcellname[0].length; i++) {
                  jsonarray1.push((data.resultList[0].ecommercegamedata[this.markupcellname[0][i]])).toFixed(0);
                  jsonarray2.push((data.resultList[0].ecommercegamedata[this.markupcellname[1][i]])).toFixed(0);
                }
                this.Markups.series = [
                  { "name": "Cost", "data": jsonarray1 },
                  { "name": "Price", "data": jsonarray2 },
                ];
                this.Markups.xaxis = {
                  categories: this.productNames,
                  labels: {
                    formatter: function (value: string) {
                      return value.split(" ");
                    },
                  },
                };
                let Orderedxaxis: (string | string[])[] = [];
                if (ecommerceGameData) {
                  this.orderedNames = this.OrdertableData.slice(1).map((row: (string | number)[]) => ecommerceGameData[row[1]]);
                  Orderedxaxis.push(...this.orderedNames);
                } else {
                  console.error("ecommercegamedata orderedNames is missing.");
                }
                for (let i = 0; i < this.orderedcellname[0].length; i++) {
                  jsonarray3.push((data.resultList[0].ecommercegamedata[this.orderedcellname[0][i]])).toFixed(0);
                  jsonarray4.push((data.resultList[0].ecommercegamedata[this.orderedcellname[1][i]])).toFixed(0);
                  jsonarray5.push((data.resultList[0].ecommercegamedata[this.orderedcellname[2][i]])).toFixed(0);
                }
                this.Ordered.series = [
                  { "name": "Monthly Demand, Units", "data": jsonarray3 },
                  { "name": "Ordered, units", "data": jsonarray4 },
                  { "name": "Safety stock, units", "data": jsonarray5 },
                ]
                this.Ordered.xaxis = {
                  categories:Orderedxaxis,
                  position: "bottom",
                  labels: {
                    formatter: function (value: string) {
                      return value.split(" ");
                    },
                  },
                }
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

  isEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2); // Or use Lodash _.isEqual
  }

  //write api call
  writegameData(event: any, cell: string, tableName: string) {

    const apiname = "/ecommercegame/singleinputecommercegame";
    let body: any = {};


    const value = event.target.value;
    let checked = (event.target as HTMLInputElement).checked;

    if (tableName === 'catalog') {
      if (checked) {
        if (this.catalogData.length == 10) {
          (event.target as HTMLInputElement).checked = false;
          return this._alert.error("You can select a maximum of 10 options here");
        }
        // Check if cell is already in the list (handle objects properly)
        if (!this.catalogData.some((item: any) => JSON.stringify(item) === JSON.stringify(cell))) {
          this.catalogData.push(cell);
        }
      } else {
        // Properly remove item (handle objects)
        // this.catalogData = this.catalogData.filter((item: any) => JSON.stringify(item) !== JSON.stringify(cell));
        this.catalogData = this.catalogData.filter((item: any) => !this.isEqual(item, cell));
      }
      body = { [cell]: checked ? 1 : 0 };
    }

    else if (tableName == 'supplier') {
      body = { [cell]: checked ? 1 : 0 };
    }
    else {
      const limits: { [key: string]: [number, number, string, boolean] } = {
        price1: [0, 400, "Markups range is between 0% to 400%", true],
        price2: [0, 20, "Estimated Market Share is between 0% to 20%", true],
        order: [0, 10, "Buffer coefficient between 0 to 10", false],
      };

      if (tableName in limits) {
        const [min, max, errorMsg, isPercentage] = limits[tableName];
        if (value < min || value > max) {
          event.target.value = 0;
          this._alert.error(errorMsg);
        }
        body = { [cell]: isPercentage ? event.target.value / 100 : Number(event.target.value) };
      }
    }


    //it will be uncommented
    // Send the updated data to the API
    this._api.writeGameData("ecommercegame", 2, body, apiname, 'ecommercegamecmid').subscribe(
      (data: any) => {
        if (data.status === "Success") {
          this.getFetchData(this.noofattempt, 'second');
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }
  openDialog(): void {
    this.dialog.open(EcommercefoodforthoughtComponent, {
      data: {},
    });
  }
}
