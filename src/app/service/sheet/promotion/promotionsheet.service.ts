import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class PromotionsheetService extends CommonsheetdesignService {
  constructor(
    private _api: ApiService) {
    super();
  }
  excelalldata: any = [];
  capitalcolname: any = [];
  crmexcelformat: any = [];
  headingpromotion: any = [];
  promotiongamecolname: any = [];

  cellstyle1 = {
    name: 'Arial',
    size: 11,
    bold: true,
    color: { argb: '00000000' }
  }

  downloadReportforPROMOTIONgame(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
    coursedetailsid: number, language: string) {

    let body =
    {
      email: email,
      caller: "student",
      usermode: "student",
      searchtype: "report",
      searchcontent: "",
      coursecode: coursecode,
      coursename: coursename,
      studentsectionid: studentsectionid,
      attempt: noofattempt,
      coursedetailsid: coursedetailsid,
      language: language
    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "promotiongame") {
            this.createExcelReportforpromotion(data, language);
          }

        }
      })

  }
  //crm game excel sheet...
  createExcelReportforpromotion(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {
      this.headingpromotion = [
        data.resultList[i].promoTionsNewLM[language].b279,
        data.resultList[i].promoTionsNewLM[language].b142,
        data.resultList[i].promoTionsNewLM[language].b143,
        data.resultList[i].promoTionsNewLM[language].b144,
        data.resultList[i].promoTionsNewLM[language].b145,
        data.resultList[i].promoTionsNewLM[language].b146,
        data.resultList[i].promoTionsNewLM[language].b147,
        data.resultList[i].promoTionsNewLM[language].b274 + ", %",

      ],

        this.promotiongamecolname = [
          data.resultList[i].promoTionsNewLM[language].b119 + ", %",
          data.resultList[i].promoTionsNewLM[language].b120 + ", %",
          data.resultList[i].promoTionsNewLM[language].b121 + ", %",
          data.resultList[i].promoTionsNewLM[language].b122 + ", %",
          data.resultList[i].promoTionsNewLM[language].b123 + ", %",
          data.resultList[i].promoTionsNewLM[language].b124 + ", %",
          data.resultList[i].promoTionsNewLM[language].b125 + ", %",
          data.resultList[i].promoTionsNewLM[language].b126 + ", %",
          data.resultList[i].promoTionsNewLM[language].b127 + ", %",
          data.resultList[i].promoTionsNewLM[language].b51,
          data.resultList[i].promoTionsNewLM[language].b128,
          data.resultList[i].promoTionsNewLM[language].b129,
          data.resultList[i].promoTionsNewLM[language].b130,
          data.resultList[i].promoTionsNewLM[language].b131,
          data.resultList[i].promoTionsNewLM[language].b132,
          data.resultList[i].promoTionsNewLM[language].b53,
          data.resultList[i].promoTionsNewLM[language].b54,
          data.resultList[i].promoTionsNewLM[language].b133,
          data.resultList[i].promoTionsNewLM[language].b134,
          data.resultList[i].promoTionsNewLM[language].b135,
          data.resultList[i].promoTionsNewLM[language].b136,
          data.resultList[i].promoTionsNewLM[language].b137,
          data.resultList[i].promoTionsNewLM[language].b138,
          data.resultList[i].promoTionsNewLM[language].b139,
          data.resultList[i].promoTionsNewLM[language].b140,

          data.resultList[i].promoTionsNewLM[language].b51,
          data.resultList[i].promoTionsNewLM[language].b52,
          data.resultList[i].promoTionsNewLM[language].b53,
          data.resultList[i].promoTionsNewLM[language].b54,
          data.resultList[i].promoTionsNewLM[language].b149,
          data.resultList[i].promoTionsNewLM[language].b150,
          data.resultList[i].promoTionsNewLM[language].b151,
          data.resultList[i].promoTionsNewLM[language].b152,
          data.resultList[i].promoTionsNewLM[language].b153,
          data.resultList[i].promoTionsNewLM[language].b154,
          data.resultList[i].promoTionsNewLM[language].b155,
          data.resultList[i].promoTionsNewLM[language].b156,
          data.resultList[i].promoTionsNewLM[language].b157,
          data.resultList[i].promoTionsNewLM[language].b158,
          data.resultList[i].promoTionsNewLM[language].b159 + "%",
          data.resultList[i].promoTionsNewLM[language].b160 + "%",
          data.resultList[i].promoTionsNewLM[language].b9 + "%",
          data.resultList[i].promoTionsNewLM[language].b10 + "%",
          data.resultList[i].promoTionsNewLM[language].b11 + "%",

        ]
      this.crmexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b279, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b174],
        ["", data.resultList[i].promoTionsNewLM[language].b119 + ", %", data.resultList[i].promotionsnewdata.x20 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x20) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b120 + ", %", data.resultList[i].promotionsnewdata.x21 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x21) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b121 + ", %", data.resultList[i].promotionsnewdata.x22 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x22) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b122 + ", %", data.resultList[i].promotionsnewdata.x23 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x23) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b123 + ", %", data.resultList[i].promotionsnewdata.x24 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x24) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b124 + ", %", data.resultList[i].promotionsnewdata.x25 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x25) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b125 + ", %", data.resultList[i].promotionsnewdata.x26 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x26) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b126 + ", %", data.resultList[i].promotionsnewdata.x27 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x27) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b127 + ", %", data.resultList[i].promotionsnewdata.x28 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.x28) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b51, data.resultList[i].promotionsnewdata.z23],
        ["", data.resultList[i].promoTionsNewLM[language].b128, Number(data.resultList[i].promotionsnewdata.x34) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b129, Number(data.resultList[i].promotionsnewdata.x35) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b130, Number(data.resultList[i].promotionsnewdata.x36) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b131, Number(data.resultList[i].promotionsnewdata.x37) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b132, Number(data.resultList[i].promotionsnewdata.x38) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b53, data.resultList[i].promotionsnewdata.z24],
        ["", data.resultList[i].promoTionsNewLM[language].b54, data.resultList[i].promotionsnewdata.z25],
        ["", data.resultList[i].promoTionsNewLM[language].b133, Number(data.resultList[i].promotionsnewdata.x47) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b134, Number(data.resultList[i].promotionsnewdata.x48) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b135, Number(data.resultList[i].promotionsnewdata.x49) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b136, Number((Number(data.resultList[i].promotionsnewdata.x50)*100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b137, Number((Number(data.resultList[i].promotionsnewdata.x51)*100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b138, Number((Number(data.resultList[i].promotionsnewdata.x52)*100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b139, Number(data.resultList[i].promotionsnewdata.x53) == 1 ? 'yes' : 'no'],
        ["", data.resultList[i].promoTionsNewLM[language].b140, Number(data.resultList[i].promotionsnewdata.x54) == 1 ? 'yes' : 'no'],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b142, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b110, data.resultList[i].promoTionsNewLM[language].b111],
        ["", data.resultList[i].promoTionsNewLM[language].b51, Number(Number(data.resultList[i].promotionsnewdata.s6).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t6).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b52, Number(Number(data.resultList[i].promotionsnewdata.s7).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t7).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b53, Number(Number(data.resultList[i].promotionsnewdata.s8).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t8).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b54, Number(Number(data.resultList[i].promotionsnewdata.s9).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t9).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b143, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b46, data.resultList[i].promoTionsNewLM[language].b47],
        ["", data.resultList[i].promoTionsNewLM[language].b51, Number(Number(data.resultList[i].promotionsnewdata.s18).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t18).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b52, Number(Number(data.resultList[i].promotionsnewdata.s19).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t19).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b53, Number(Number(data.resultList[i].promotionsnewdata.s20).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t20).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b54, Number(Number(data.resultList[i].promotionsnewdata.s21).toFixed(0)), Number(Number(data.resultList[i].promotionsnewdata.t21).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b144, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b175],
        ["", data.resultList[i].promoTionsNewLM[language].b51,  Number(Number(data.resultList[i].promotionsnewdata.u6).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b52,  Number(Number(data.resultList[i].promotionsnewdata.u7).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b53,  Number(Number(data.resultList[i].promotionsnewdata.u8).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b54,  Number(Number(data.resultList[i].promotionsnewdata.u9).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b145, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b175],
        ["", data.resultList[i].promoTionsNewLM[language].b149, Number(Number(data.resultList[i].promotionsnewdata.s27).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b150, Number(Number(data.resultList[i].promotionsnewdata.s28).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b151, Number(Number(data.resultList[i].promotionsnewdata.s29).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b152, Number(Number(data.resultList[i].promotionsnewdata.s30).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b153, Number(Number(data.resultList[i].promotionsnewdata.s31).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b146, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173, data.resultList[i].promoTionsNewLM[language].b175],
        ["", data.resultList[i].promoTionsNewLM[language].b154, Number(Number(data.resultList[i].promotionsnewdata.s24).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b155, Number(Number(data.resultList[i].promotionsnewdata.s25).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b156, Number(Number(data.resultList[i].promotionsnewdata.s26).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b157, Number(Number(data.resultList[i].promotionsnewdata.s31).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b158, Number(Number(data.resultList[i].promotionsnewdata.s32).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b147, "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173,       data.resultList[i].promoTionsNewLM[language].b175],
        ["", data.resultList[i].promoTionsNewLM[language].b159 + "%", data.resultList[i].promotionsnewdata.s33 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.s33) * 100).toFixed(0))],
        ["", data.resultList[i].promoTionsNewLM[language].b160 + "%", data.resultList[i].promotionsnewdata.s38 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.s38) * 100).toFixed(0))],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b274 + ", %", "", "", "", "", ""],
        [],
        ["", data.resultList[i].promoTionsNewLM[language].b173,      data.resultList[i].promoTionsNewLM[language].b175],
        ["", data.resultList[i].promoTionsNewLM[language].b9 + "%",  data.resultList[i].promotionsnewdata.z27 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.z27) * 100).toFixed(0)) ],
        ["", data.resultList[i].promoTionsNewLM[language].b10 + "%", data.resultList[i].promotionsnewdata.z28 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.z28) * 100).toFixed(0)) ],
        ["", data.resultList[i].promoTionsNewLM[language].b11 + "%", data.resultList[i].promotionsnewdata.z29 == "" ? '-' : Number((Number(data.resultList[i].promotionsnewdata.z29) * 100).toFixed(0)) ],


      ]
      this.excelalldata.push(this.crmexcelformat)
    }
    this.excelSheetDesign('promotiongame', this.excelalldata, data.resultList.length, this.promotiongamecolname, this.headingpromotion);
  }


  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, columnname: any, headingname: any) {


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
        if (headingname.includes(d[1])) {
          worksheet.mergeCells(`B${row.number}:E${row.number + 1}}`);
          for (let cellNumber of [2, 3, 4, 5]) {
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