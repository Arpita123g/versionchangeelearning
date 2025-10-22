import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class CapitalBudgetingsheetService extends CommonsheetdesignService {
  constructor(
    private _api: ApiService) {
    super();
  }
  excelalldata: any = [];
  cbexcelformat: any = [];
  capitalcolname: any = [];
  headingcell: any = ["Decisions","Present Value of Cash Stream, INR million","Present Value of Divisonal Cash Stream, INR million",
    "Budget, INR million","Projects","KPI","Thinking Ability, %"
  ]

  unit:string = ", %";
 
 
  cellstyle1 = {
    name: 'Arial',
    size: 11,
    bold: true,
    color: { argb: '00000000' }
  }

  
  downloadReportforgame(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
    coursedetailsid: number) {
    let body =
    {
      email: email,
      caller: "student",
      usermode: "student",
      searchtype: "report",
      searchcontent: "",
      coursecode: coursecode,
      studentsectionid: studentsectionid,
      attempt: noofattempt,
      coursename: coursename,
      coursedetailsid: coursedetailsid

    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "cbgame") {
            this.createExcelReportforCbGame(data);

          }
        }
      })

  }

  createExcelReportforCbGame(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      // let roundData = data.resultList[i].ecommercegamedata;

      // Extracting column names dynamically from the backend
      this.capitalcolname = [
        data.resultList[i].cbGameCM.cbgameperioddata.h6+this.unit,//0
        data.resultList[i].cbGameCM.cbgameperioddata.h7+this.unit,//1
        data.resultList[i].cbGameCM.cbgameperioddata.h8+this.unit,//2
        data.resultList[i].cbGameCM.cbgameperioddata.h9+this.unit,//3
        data.resultList[i].cbGameCM.cbgameperioddata.h10+this.unit,//4
        data.resultList[i].cbGameCM.cbgameperioddata.h11+this.unit,//5
        data.resultList[i].cbGameCM.cbgameperioddata.h12+this.unit,//6
        data.resultList[i].cbGameCM.cbgameperioddata.h13+this.unit,//7
        data.resultList[i].cbGameCM.cbgameperioddata.h14+this.unit,//8
        data.resultList[i].cbGameCM.cbgameperioddata.h15+this.unit,//9
        data.resultList[i].cbGameCM.cbgameperioddata.h16+this.unit,//10
        data.resultList[i].cbGameCM.cbgameperioddata.h17+this.unit,//11
        data.resultList[i].cbGameCM.cbgameperioddata.h18+this.unit,//12
        data.resultList[i].cbGameCM.cbgameperioddata.h19+this.unit,//13
        data.resultList[i].cbGameCM.cbgameperioddata.h6,//14
        data.resultList[i].cbGameCM.cbgameperioddata.h7,//15
        data.resultList[i].cbGameCM.cbgameperioddata.h8,//16
        data.resultList[i].cbGameCM.cbgameperioddata.h9,//17
        data.resultList[i].cbGameCM.cbgameperioddata.h10,//18
        data.resultList[i].cbGameCM.cbgameperioddata.h11,//19
        data.resultList[i].cbGameCM.cbgameperioddata.h12,//20
        data.resultList[i].cbGameCM.cbgameperioddata.h13,//21
        data.resultList[i].cbGameCM.cbgameperioddata.h14,//22
        data.resultList[i].cbGameCM.cbgameperioddata.h15,//23
        data.resultList[i].cbGameCM.cbgameperioddata.h16,//24
        data.resultList[i].cbGameCM.cbgameperioddata.h17,//25
        data.resultList[i].cbGameCM.cbgameperioddata.h18,//26
        data.resultList[i].cbGameCM.cbgameperioddata.h19,//27
        data.resultList[i].cbgamedata.b100,//28
        data.resultList[i].cbgamedata.b101,//29
        data.resultList[i].cbgamedata.b106,//30
        data.resultList[i].cbgamedata.b107,//31
        data.resultList[i].cbgamedata.b108,//32
        data.resultList[i].cbgamedata.b109,//33
        data.resultList[i].cbgamedata.b112,//34
        data.resultList[i].cbgamedata.b113,//35
        data.resultList[i].cbgamedata.b116,//36
        data.resultList[i].cbgamedata.b117,//37
        data.resultList[i].cbgamedata.b118,//38
        data.resultList[i].cbgamedata.b119,//39
        data.resultList[i].cbgamedata.b120,//40
        // data.resultList[i].cbgamedata.b121,//41
        "Average discount rate across projects, %",
        "Present value of cash Stream, INR million",
        "Net present value of cash stream, INR million",
        "Project Portfolio",
        "Decide",
      ];
      console.log("name",this.capitalcolname)

      this.cbexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],

        ["", data.resultList[i].cbGameCM.cbgameperioddata.h6+this.unit, Number((Number(data.resultList[i].cbgamedata.ap7)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h7+this.unit, Number((Number(data.resultList[i].cbgamedata.ap8)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h8+this.unit, Number((Number(data.resultList[i].cbgamedata.ap9)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h9+this.unit, Number((Number(data.resultList[i].cbgamedata.ap10)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h10+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap11)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h11+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap12)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h12+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap13)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h13+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap14)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h14+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap15)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h15+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap16)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h16+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap17)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h17+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap18)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h18+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap19)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h19+this.unit,  Number((Number(data.resultList[i].cbgamedata.ap20)*100).toFixed(0))],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h6, data.resultList[i].cbgamedata.ap23 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h7, data.resultList[i].cbgamedata.ap24 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h8, data.resultList[i].cbgamedata.ap25 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h9, data.resultList[i].cbgamedata.ap26 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h10, data.resultList[i].cbgamedata.ap27 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h11, data.resultList[i].cbgamedata.ap28 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h12, data.resultList[i].cbgamedata.ap29 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h13, data.resultList[i].cbgamedata.ap30 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h14, data.resultList[i].cbgamedata.ap31 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h15, data.resultList[i].cbgamedata.ap32 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h16, data.resultList[i].cbgamedata.ap33 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h17, data.resultList[i].cbgamedata.ap34 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h18, data.resultList[i].cbgamedata.ap35 == 1 ? "Selected" : "Not Selected"],
        ["", data.resultList[i].cbGameCM.cbgameperioddata.h19, data.resultList[i].cbgamedata.ap36 == 1 ? "Selected" : "Not Selected"],
        ["", "Present Value of Cash Stream, INR million", ""],
        ["", "Parameter", "Input"],

        ["", data.resultList[i].cbgamedata.b100, (Number(Number(data.resultList[i].cbgamedata.c100).toFixed(0)))],
        ["", data.resultList[i].cbgamedata.b101, (Number(Number(data.resultList[i].cbgamedata.c101).toFixed(0)))],
        ["", "Present Value of Divisonal Cash Stream, INR million", ""],
        ["", "Parameter", "Input"],

        ["", data.resultList[i].cbgamedata.b106, (Number(Number(data.resultList[i].cbgamedata.c106).toFixed(0)))],
        ["", data.resultList[i].cbgamedata.b107, (Number(Number(data.resultList[i].cbgamedata.c107).toFixed(0)))],
        ["", data.resultList[i].cbgamedata.b108, (Number(Number(data.resultList[i].cbgamedata.c108).toFixed(0)))],
        ["", data.resultList[i].cbgamedata.b109, (Number(Number(data.resultList[i].cbgamedata.c109).toFixed(0)))],

        ["", "Budget, INR million", ""],
        ["", "Parameter", "Input"],

        ["", data.resultList[i].cbgamedata.b112, (Number(Number(data.resultList[i].cbgamedata.c112).toFixed(0)))],
        ["", data.resultList[i].cbgamedata.b113, (Number(Number(data.resultList[i].cbgamedata.c113).toFixed(0)))],

        ["", "Projects", ""],
        ["", "Area", "Projects", "Investment, INR million", "PV, INR million", "NPV, INR Million", "IRR %", "Benefit Cost Ratio", "Profitability Index", "EAC"],

        ["", data.resultList[i].cbgamedata.b116, data.resultList[i].cbgamedata.c116, (Number(Number(data.resultList[i].cbgamedata.d116).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e116).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f116).toFixed(0))), (Number((Number(data.resultList[i].cbgamedata.g116)*100).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.h116).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i116).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j116).toFixed(1)))],
        ["", data.resultList[i].cbgamedata.b117, data.resultList[i].cbgamedata.c117, (Number(Number(data.resultList[i].cbgamedata.d117).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e117).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f117).toFixed(0))), (Number((Number(data.resultList[i].cbgamedata.g117)*100).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.h117).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i117).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j117).toFixed(1)))],
        ["", data.resultList[i].cbgamedata.b118, data.resultList[i].cbgamedata.c118, (Number(Number(data.resultList[i].cbgamedata.d118).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e118).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f118).toFixed(0))), (Number((Number(data.resultList[i].cbgamedata.g118)*100).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.h118).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i118).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j118).toFixed(1)))],
        ["", data.resultList[i].cbgamedata.b119, data.resultList[i].cbgamedata.c119, (Number(Number(data.resultList[i].cbgamedata.d119).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e119).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f119).toFixed(0))), (Number((Number(data.resultList[i].cbgamedata.g119)*100).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.h119).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i119).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j119).toFixed(1)))],
        ["", data.resultList[i].cbgamedata.b120, data.resultList[i].cbgamedata.c120, (Number(Number(data.resultList[i].cbgamedata.d120).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e120).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f120).toFixed(0))), (Number((Number(data.resultList[i].cbgamedata.g120)*100).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.h120).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i120).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j120).toFixed(1)))],
        // ["", data.resultList[i].cbgamedata.b121, data.resultList[i].cbgamedata.c121, (Number(Number(data.resultList[i].cbgamedata.d121).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.e121).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.f121).toFixed(0))), (Number(Number(data.resultList[i].cbgamedata.g121)*100).toFixed(0)), (Number(Number(data.resultList[i].cbgamedata.h121).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.i121).toFixed(1))), (Number(Number(data.resultList[i].cbgamedata.j121).toFixed(1)))],


        ["", "KPI", ""],
        ["", "Parameter", "Input"],

        ["", "Average discount rate across projects, %", (Number((Number(data.resultList[i].cbgamedata.c127)*100).toFixed(0)))],
        ["", "Present value of cash Stream, INR million", (Number(Number(data.resultList[i].cbgamedata.c129).toFixed(0)))],
        ["", "Net present value of cash stream, INR million", (Number(Number(data.resultList[i].cbgamedata.c128).toFixed(0)))],

        ["", "Thinking Ability, %", ""],
        ["", "Parameter", "Input"],

        ["", "Project Portfolio", data.resultList[i].cbgamedata.ao46== 0 ? "-" :Number((Number(data.resultList[i].cbgamedata.ao46)*100).toFixed(0))],
        ["", "Decide", data.resultList[i].cbgamedata.ao47== 0 ? "-" :Number((Number(data.resultList[i].cbgamedata.ao47)*100).toFixed(0))],
      ]
      this.excelalldata.push(this.cbexcelformat)
    }

     this.excelSheetDesign('cbgame', this.excelalldata, data.resultList.length, this.capitalcolname);

  }

   excelSheetDesign(gamename: string,excelalldata: any, attempnumber: any, columnname: any) {
  
 
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('Report');
      let cellstyle = {
        name: 'Arial',
        size: 11,
        bold: true,
        color: { argb: 'FFFFFF' }
      }
      for (let i = 0; i < attempnumber; i++) {
        excelalldata[i].forEach((d: any) => {
          let row = worksheet.addRow(d);
         if (this.headingcell.includes(d[1])) {
          worksheet.mergeCells(`B${row.number}:E${row.number + 1}}`);
          for (let cellNumber of [2, 3,4,5]) {
            row.getCell(cellNumber).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '00000000' }, // Yellow color
              bgColor: { argb: 'FF0000FF' }
            };
          }
          row.font = cellstyle; 
           
          }

         
          if (
            columnname.includes(d[1])) {
              for (let colNumber = 2; colNumber <= 10; colNumber++) {
                const cell = row.getCell(colNumber);
                cell.fill = {
                  type: 'pattern',
                  pattern: 'solid',
                  fgColor: { argb: 'ADD8E6' }, // Light blue color
                };
              }
             }
         
  
          for (let i = 0; i < attempnumber; i++) {
            if (
              (row.getCell(2).value == "Round1") || (row.getCell(2).value == "Round2") ||
              (row.getCell(2).value == "Round3") || (row.getCell(2).value == "Round4") ||
              (row.getCell(2).value == "Round5") || (row.getCell(2).value == "Round6") ||
              (row.getCell(2).value == "Round7") ||
              (row.getCell(2).value == "Round8") || (row.getCell(2).value == "Round9") ||
              (row.getCell(2).value == "Round10")
            ) {
              for (let cell of [2, 3, 4, 5, 6, 7, 8]) {
                row.getCell(cell).fill = {
                  type: 'pattern',
                  pattern: 'solid',
                  fgColor: { argb: 'D3D3D3' },
                  bgColor: { argb: 'FF0000FF' }
                };
              }
              row.font = this.cellstyle1;
            }
          }
  
        });
       
      }
  
      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, gamename + '.xlsx');
      })
    }
}