import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-orderingbasicsp1inventorylevel',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicsp1inventorylevel.component.html',
  styleUrls: ['./orderingbasicsp1inventorylevel.component.scss']
})
export class Orderingbasicsp1inventorylevelComponent extends AbstractComponent {

  tableelement:any=[];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus",];
  totalOptionalcase: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

   }

  headelement:string[]=[
     "Week", "Order", "Beginning Inventory", "Demand", "Ending Inventory", "Back Ordering",
    "New Level", "Stockout", "Order Placed", "Lead Time", "Recpt Week",
    // 'b8', 'c8', 'd8', 'f8', 'g8', 'h8', 'i8', 'j8', 'k8', 'l8', 'm8',
  ];
  header:any=[];

  databasecellnamearray: string[] = [
    'b9', 'c9', 'd9', 'f9', 'g9', 'h9', 'i9', 'j9', 'k9', 'l9', 'm9', //21
    'b10', 'c10', 'd10', 'f10', 'g10', 'h10', 'i10', 'j10', 'k10', 'l10', 'm10', //32
    'b11', 'c11', 'd11', 'f11', 'g11', 'h11', 'i11', 'j11', 'k11', 'l11', 'm11', //43
    'b12', 'c12', 'd12', 'f12', 'g12', 'h12', 'i12', 'j12', 'k12', 'l12', 'm12', //54
    'b13', 'c13', 'd13', 'f13', 'g13', 'h13', 'i13', 'j13', 'k13', 'l13', 'm13', //65
    'b14', 'c14', 'd14', 'f14', 'g14', 'h14', 'i14', 'j14', 'k14', 'l14', 'm14', //76
    'b15', 'c15', 'd15', 'f15', 'g15', 'h15', 'i15', 'j15', 'k15', 'l15', 'm15', //87
    'b16', 'c16', 'd16', 'f16', 'g16', 'h16', 'i16', 'j16', 'k16', 'l16', 'm16',//98
    'b17', 'c17', 'd17', 'f17', 'g17', 'h17', 'i17', 'j17', 'k17', 'l17', 'm17',//109
    'b18', 'c18', 'd18', 'f18', 'g18', 'h18', 'i18', 'j18', 'k18', 'l18', 'm18',//120
    'b19', 'c19', 'd19', 'f19', 'g19', 'h19', 'i19', 'j19', 'k19', 'l19', 'm19',//131s
    'b20', 'c20', 'd20', 'f20', 'g20', 'h20', 'i20', 'j20', 'k20', 'l20', 'm20',//142
    'b21', 'c21', 'd21', 'f21', 'g21', 'h21', 'i21', 'j21', 'k21', 'l21', 'm21',//153
    'b22', 'c22', 'd22', 'f22', 'g22', 'h22', 'i22', 'j22', 'k22', 'l22', 'm22',//164
    'b23', 'c23', 'd23', 'f23', 'g23', 'h23', 'i23', 'j23', 'k23', 'l23', 'm23',//175
    'b24', 'c24', 'd24', 'f24', 'g24', 'h24', 'i24', 'j24', 'k24', 'l24', 'm24',//186
    'b25', 'c25', 'd25', 'f25', 'g25', 'h25', 'i25', 'j25', 'k25', 'l25', 'm25',//197
    'b26', 'c26', 'd26', 'f26', 'g26', 'h26', 'i26', 'j26', 'k26', 'l26', 'm26',//208
    'b27', 'c27', 'd27', 'f27', 'g27', 'h27', 'i27', 'j27', 'k27', 'l27', 'm27',//219
    'b28', 'c28', 'd28', 'f28', 'g28', 'h28', 'i28', 'j28', 'k28', 'l28', 'm28',//230
    'b29', 'c29', 'd29', 'f29', 'g29', 'h29', 'i29', 'j29', 'k29', 'l29', 'm29',//241
    'b30', 'c30', 'd30', 'f30', 'g30', 'h30', 'i30', 'j30', 'k30', 'l30', 'm30',//252
    'b31', 'c31', 'd31', 'f31', 'g31', 'h31', 'i31', 'j31', 'k31', 'l31', 'm31',//263
    'b32', 'c32', 'd32', 'f32', 'g32', 'h32', 'i32', 'j32', 'k32', 'l32', 'm32',//274
    'b33', 'c33', 'd33', 'f33', 'g33', 'h33', 'i33', 'j33', 'k33', 'l33', 'm33',//285
    'b34', 'c34', 'd34', 'f34', 'g34', 'h34', 'i34', 'j34', 'k34', 'l34', 'm34',//296
    'b35', 'c35', 'd35', 'f35', 'g35', 'h35', 'i35', 'j35', 'k35', 'l35', 'm35',//307
    'b36', 'c36', 'd36', 'f36', 'g36', 'h36', 'i36', 'j36', 'k36', 'l36', 'm36',//318
    'b37', 'c37', 'd37', 'f37', 'g37', 'h37', 'i37', 'j37', 'k37', 'l37', 'm37',//329
    'b38', 'c38', 'd38', 'f38', 'g38', 'h38', 'i38', 'j38', 'k38', 'l38', 'm38',//340
    'b39', 'c39', 'd39', 'f39', 'g39', 'h39', 'i39', 'j39', 'k39', 'l39', 'm39',//351
    'b40', 'c40', 'd40', 'f40', 'g40', 'h40', 'i40', 'j40', 'k40', 'l40', 'm40',//362
    'b41', 'c41', 'd41', 'f41', 'g41', 'h41', 'i41', 'j41', 'k41', 'l41', 'm41',//373
    'b42', 'c42', 'd42', 'f42', 'g42', 'h42', 'i42', 'j42', 'k42', 'l42', 'm42',//384
    'b43', 'c43', 'd43', 'f43', 'g43', 'h43', 'i43', 'j43', 'k43', 'l43', 'm43',//395
    'b44', 'c44', 'd44', 'f44', 'g44', 'h44', 'i44', 'j44', 'k44', 'l44', 'm44', //406
    'b45', 'c45', 'd45', 'f45', 'g45', 'h45', 'i45', 'j45', 'k45', 'l45', 'm45',//417
    'b46', 'c46', 'd46', 'f46', 'g46', 'h46', 'i46', 'j46', 'k46', 'l46', 'm46',//428
    'b47', 'c47', 'd47', 'f47', 'g47', 'h47', 'i47', 'j47', 'k47', 'l47', 'm47',//439
    'b48', 'c48', 'd48', 'f48', 'g48', 'h48', 'i48', 'j48', 'k48', 'l48', 'm48',//450
    'b49', 'c49', 'd49', 'f49', 'g49', 'h49', 'i49', 'j49', 'k49', 'l49', 'm49',//461
    'b50', 'c50', 'd50', 'f50', 'g50', 'h50', 'i50', 'j50', 'k50', 'l50', 'm50',//472
    'b51', 'c51', 'd51', 'f51', 'g51', 'h51', 'i51', 'j51', 'k51', 'l51', 'm51',//483
    'b52', 'c52', 'd52', 'f52', 'g52', 'h52', 'i52', 'j52', 'k52', 'l52', 'm52',//494
    'b53', 'c53', 'd53', 'f53', 'g53', 'h53', 'i53', 'j53', 'k53', 'l53', 'm53',//505
    'b54', 'c54', 'd54', 'f54', 'g54', 'h54', 'i54', 'j54', 'k54', 'l54', 'm54',//516
    'b55', 'c55', 'd55', 'f55', 'g55', 'h55', 'i55', 'j55', 'k55', 'l55', 'm55',//527
    'b56', 'c56', 'd56', 'f56', 'g56', 'h56', 'i56', 'j56', 'k56', 'l56', 'm56',//538
    'b57', 'c57', 'd57', 'f57', 'g57', 'h57', 'i57', 'j57', 'k57', 'l57', 'm57',//549
    'b58', 'c58', 'd58', 'f58', 'g58', 'h58', 'i58', 'j58', 'k58', 'l58', 'm58',//560
    'b59', 'c59', 'd59', 'f59', 'g59', 'h59', 'i59', 'j59', 'k59', 'l59', 'm59',//571
    'b60', 'c60', 'd60', 'f60', 'g60', 'h60', 'i60', 'j60', 'k60', 'l60', 'm60'//582
  ];

  

  tabledata=[
    {Week: "1",Order: "300",Inventory: "20", Probability: "33",Demand: "400",Ending: "90",Back: "123",Level: "233", Stockout: "3", Orderplaced: "Yes",Lead: "5",Recpt: "44"},
    {Week: "2",Order: "400",Inventory: "30",Probability: "40", Demand: "450", Ending: "100",Back: "130",Level: "250", Stockout: "2", Orderplaced: "No",Lead: "4",Recpt: "50"},
    { Week: "3", Order: "-", Inventory: "185", Probability: "30", Demand: "155", Ending: "-", Back: "455", Level: "-", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "4", Order: "-", Inventory: "155", Probability: "40", Demand: "115", Ending: "-", Back: "415", Level: "-", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "5", Order: "-", Inventory: "115", Probability: "60", Demand: "55", Ending: "-", Back: "355", Level: "-", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "6", Order: "-", Inventory: "55", Probability: "40", Demand: "15", Ending: "-", Back: "315", Level: "-", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "7", Order: "-", Inventory: "15", Probability: "30", Demand: "-", Ending: "10", Back: "295", Level: "5", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "8", Order: "-", Inventory: "-", Probability: "50", Demand: "-", Ending: "10", Back: "255", Level: "40", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "9", Order: "300", Inventory: "260", Probability: "30", Demand: "230", Ending: "-", Back: "225", Level: "-", Stockout: "No", Lead: "", Recpt: "" },
    { Week: "10", Order: "-", Inventory: "230", Probability: "60", Demand: "170", Ending: "-", Back: "165", Level: "-", Stockout: "Yes", Lead: "5", Recpt: "16" },
  ];


  
 override ngOnInit(): void {
  this.getFetchData(this.noofattempt)

  }
  populateLeads() {
    this.tableelement = [];  
    for (let i = 0; i <52; i++) {

      this.tableelement.push({
        Week: this.result[11 * i],
        Order: this.result[11 * i + 1],
        Inventory: this.result[11 * i + 2],
       Demand: this.result[11 * i + 3],
        Ending: this.result[11 * i + 4],
        Back: this.result[11 * i + 5],
        Level: this.result[11 * i + 6],
        Stockout: this.result[11 * i + 7],
        Orderplaced: this.result[11 * i + 8],
        Lead: this.result[11 * i + 9],
        Recpt: this.result[11 * i + 10],
      });

    }
    console.log("table",this.tableelement)
  }

  getFetchData(attempt: string) {
      // this.tableelement=this.tabledata

    let apiname = '/orderingbasics/fetchorderingbasics';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].ap18;
              // if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
              //   this.getFetchData(String(Number(this.noofattempt) - 1));
              // } else {
                this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellnamearray.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellnamearray[i]]
                }
                console.log("resul",this.result)

                
                // for (let i = 0; i < this.headelement.length; i++) {
                //   this.header[i] = data.resultList[0][this.headelement[i]]
                // }
              // }
              this.populateLeads();
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
