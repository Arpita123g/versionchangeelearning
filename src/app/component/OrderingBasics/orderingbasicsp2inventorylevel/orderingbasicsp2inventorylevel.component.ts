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
  selector: 'app-orderingbasicsp2inventorylevel',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicsp2inventorylevel.component.html',
  styleUrls: ['./orderingbasicsp2inventorylevel.component.scss']
})
export class Orderingbasicsp2inventorylevelComponent extends AbstractComponent {

  tableelement: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus"];
  totalOptionalcase: boolean = true;
  resultcellname: string[] = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }
  headelement: string[] = [
    "Week", "Order", "Beginning Inventory", "Demand", "Ending Inventory", "Back Ordering",
    "New Level", "Stockout", "Order Placed", "Lead Time", "Recpt Week",
     ];
  header: any = [];
  databasecellnamearray: any = [
    'b9',  'p9',  'q9',  's9',  't9',  'u9',  'v9',  'w9',  'x9',  'y9',  'z9', //21
    'b10', 'p10', 'q10', 's10', 't10', 'u10', 'v10', 'w10', 'x10', 'y10', 'z10', //32
    'b11', 'p11', 'q11', 's11', 't11', 'u11', 'v11', 'w11', 'x11', 'y11', 'z11', //43
    'b12', 'p12', 'q12', 's12', 't12', 'u12', 'v12', 'w12', 'x12', 'y12', 'z12', //54
    'b13', 'p13', 'q13', 's13', 't13', 'u13', 'v13', 'w13', 'x13', 'y13', 'z13', //65
    'b14', 'p14', 'q14', 's14', 't14', 'u14', 'v14', 'w14', 'x14', 'y14', 'z14', //76
    'b15', 'p15', 'q15', 's15', 't15', 'u15', 'v15', 'w15', 'x15', 'y15', 'z15', //87
    'b16', 'p16', 'q16', 's16', 't16', 'u16', 'v16', 'w16', 'x16', 'y16', 'z16',//98
    'b17', 'p17', 'q17', 's17', 't17', 'u17', 'v17', 'w17', 'x17', 'y17', 'z17',//109
    'b18', 'p18', 'q18', 's18', 't18', 'u18', 'v18', 'w18', 'x18', 'y18', 'z18',//120
    'b19', 'p19', 'q19', 's19', 't19', 'u19', 'v19', 'w19', 'x19', 'y19', 'z19',//131s
    'b20', 'p20', 'q20', 's20', 't20', 'u20', 'v20', 'w20', 'x20', 'y20', 'z20',//142
    'b21', 'p21', 'q21', 's21', 't21', 'u21', 'v21', 'w21', 'x21', 'y21', 'z21',//153
    'b22', 'p22', 'q22', 's22', 't22', 'u22', 'v22', 'w22', 'x22', 'y22', 'z22',//164
    'b23', 'p23', 'q23', 's23', 't23', 'u23', 'v23', 'w23', 'x23', 'y23', 'z23',//175
    'b24', 'p24', 'q24', 's24', 't24', 'u24', 'v24', 'w24', 'x24', 'y24', 'z24',//186
    'b25', 'p25', 'q25', 's25', 't25', 'u25', 'v25', 'w25', 'x25', 'y25', 'z25',//197
    'b26', 'p26', 'q26', 's26', 't26', 'u26', 'v26', 'w26', 'x26', 'y26', 'z26',//208
    'b27', 'p27', 'q27', 's27', 't27', 'u27', 'v27', 'w27', 'x27', 'y27', 'z27',//219
    'b28', 'p28', 'q28', 's28', 't28', 'u28', 'v28', 'w28', 'x28', 'y28', 'z28',//230
    'b29', 'p29', 'q29', 's29', 't29', 'u29', 'v29', 'w29', 'x29', 'y29', 'z29',//241
    'b30', 'p30', 'q30', 's30', 't30', 'u30', 'v30', 'w30', 'x30', 'y30', 'z30',//252
    'b31', 'p31', 'q31', 's31', 't31', 'u31', 'v31', 'w31', 'x31', 'y31', 'z31',//263
    'b32', 'p32', 'q32', 's32', 't32', 'u32', 'v32', 'w32', 'x32', 'y32', 'z32',//274
    'b33', 'p33', 'q33', 's33', 't33', 'u33', 'v33', 'w33', 'x33', 'y33', 'z33',//285
    'b34', 'p34', 'q34', 's34', 't34', 'u34', 'v34', 'w34', 'x34', 'y34', 'z34',//296
    'b35', 'p35', 'q35', 's35', 't35', 'u35', 'v35', 'w35', 'x35', 'y35', 'z35',//307
    'b36', 'p36', 'q36', 's36', 't36', 'u36', 'v36', 'w36', 'x36', 'y36', 'z36',//318
    'b37', 'p37', 'q37', 's37', 't37', 'u37', 'v37', 'w37', 'x37', 'y37', 'z37',//329
    'b38', 'p38', 'q38', 's38', 't38', 'u38', 'v38', 'w38', 'x38', 'y38', 'z38',//340
    'b39', 'p39', 'q39', 's39', 't39', 'u39', 'v39', 'w39', 'x39', 'y39', 'z39',//351
    'b40', 'p40', 'q40', 's40', 't40', 'u40', 'v40', 'w40', 'x40', 'y40', 'z40',//362
    'b41', 'p41', 'q41', 's41', 't41', 'u41', 'v41', 'w41', 'x41', 'y41', 'z41',//373
    'b42', 'p42', 'q42', 's42', 't42', 'u42', 'v42', 'w42', 'x42', 'y42', 'z42',//384
    'b43', 'p43', 'q43', 's43', 't43', 'u43', 'v43', 'w43', 'x43', 'y43', 'z43',//395
    'b44', 'p44', 'q44', 's44', 't44', 'u44', 'v44', 'w44', 'x44', 'y44', 'z44', //406
    'b45', 'p45', 'q45', 's45', 't45', 'u45', 'v45', 'w45', 'x45', 'y45', 'z45',//417
    'b46', 'p46', 'q46', 's46', 't46', 'u46', 'v46', 'w46', 'x46', 'y46', 'z46',//428
    'b47', 'p47', 'q47', 's47', 't47', 'u47', 'v47', 'w47', 'x47', 'y47', 'z47',//439
    'b48', 'p48', 'q48', 's48', 't48', 'u48', 'v48', 'w48', 'x48', 'y48', 'z48',//450
    'b49', 'p49', 'q49', 's49', 't49', 'u49', 'v49', 'w49', 'x49', 'y49', 'z49',//461
    'b50', 'p50', 'q50', 's50', 't50', 'u50', 'v50', 'w50', 'x50', 'y50', 'z50',//472
    'b51', 'p51', 'q51', 's51', 't51', 'u51', 'v51', 'w51', 'x51', 'y51', 'z51',//483
    'b52', 'p52', 'q52', 's52', 't52', 'u52', 'v52', 'w52', 'x52', 'y52', 'z52',//494
    'b53', 'p53', 'q53', 's53', 't53', 'u53', 'v53', 'w53', 'x53', 'y53', 'z53',//505
    'b54', 'p54', 'q54', 's54', 't54', 'u54', 'v54', 'w54', 'x54', 'y54', 'z54',//516
    'b55', 'p55', 'q55', 's55', 't55', 'u55', 'v55', 'w55', 'x55', 'y55', 'z55',//527
    'b56', 'p56', 'q56', 's56', 't56', 'u56', 'v56', 'w56', 'x56', 'y56', 'z56',//538
    'b57', 'p57', 'q57', 's57', 't57', 'u57', 'v57', 'w57', 'x57', 'y57', 'z57',//549
    'b58', 'p58', 'q58', 's58', 't58', 'u58', 'v58', 'w58', 'x58', 'y58', 'z58',//560
    'b59', 'p59', 'q59', 's59', 't59', 'u59', 'v59', 'w59', 'x59', 'y59', 'z59',//571
    'b60', 'p60', 'q60', 's60', 't60', 'u60', 'v60', 'w60', 'x60', 'y60', 'z60'//582
  ]
  


  override ngOnInit(): void {
    this.getFetchData(this.noofattempt)
  }

  populateLeads() {
    this.tableelement = [];
    for (let i = 0; i < 52; i++) {

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
    console.log("table", this.tableelement)
  }

  getFetchData(attempt: string) {
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
