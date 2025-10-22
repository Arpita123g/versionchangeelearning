import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PromotionssigmentsService extends CommonsheetdesignService {
  excelalldata: any = [];
  excelformat: any = [];
  headingforpromotions: any = [];
  promotionsgamecolname: any = [];
  promotionsexcelformat: any = [];
  cellstyle1 = {
    name: 'Arial',
    size: 11,
    bold: true,
    color: { argb: '00000000' }
  }

  constructor(private _api: ApiService) {
    super();
  }

  downloadReportforPromotionsigments(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
    coursedetailsid: number, language: string) {
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
      coursedetailsid: coursedetailsid,
      language: language
    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "promotionsnew") {
            this.createExcelReportforpromotionsigments(data, language);
          }
        }
      })
  }

  createExcelReportforpromotionsigments(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {
      this.headingforpromotions = [
        data.resultList[i].promotionsNewLM[language].b279,
        data.resultList[i].promotionsNewLM[language].b142,
        data.resultList[i].promotionsNewLM[language].b143,
        data.resultList[i].promotionsNewLM[language].b144,
        data.resultList[i].promotionsNewLM[language].b145,
        data.resultList[i].promotionsNewLM[language].b146,
        data.resultList[i].promotionsNewLM[language].b147 + " %",
        data.resultList[i].promotionsNewLM[language].b274 + " %",

      ],

        this.promotionsgamecolname = [
          data.resultList[i].promotionsNewLM[language].b119,
          data.resultList[i].promotionsNewLM[language].b120,
          data.resultList[i].promotionsNewLM[language].b121,
          data.resultList[i].promotionsNewLM[language].b122,
          data.resultList[i].promotionsNewLM[language].b123,
          data.resultList[i].promotionsNewLM[language].b124,
          data.resultList[i].promotionsNewLM[language].b125,
          data.resultList[i].promotionsNewLM[language].b126,
          data.resultList[i].promotionsNewLM[language].b127,
          data.resultList[i].promotionsNewLM[language].b51,
          data.resultList[i].promotionsNewLM[language].b128,
          data.resultList[i].promotionsNewLM[language].b129,
          data.resultList[i].promotionsNewLM[language].b130,
          data.resultList[i].promotionsNewLM[language].b131,
          data.resultList[i].promotionsNewLM[language].b132,
          data.resultList[i].promotionsNewLM[language].b53,
          data.resultList[i].promotionsNewLM[language].b54,
          data.resultList[i].promotionsNewLM[language].b133,
          data.resultList[i].promotionsNewLM[language].b134,
          data.resultList[i].promotionsNewLM[language].b135,
          data.resultList[i].promotionsNewLM[language].b136,
          data.resultList[i].promotionsNewLM[language].b137,
          data.resultList[i].promotionsNewLM[language].b138,
          data.resultList[i].promotionsNewLM[language].b139,
          data.resultList[i].promotionsNewLM[language].b140,

          data.resultList[i].promotionsNewLM[language].b51,
          data.resultList[i].promotionsNewLM[language].b52,
          data.resultList[i].promotionsNewLM[language].b53,
          data.resultList[i].promotionsNewLM[language].b54,

          data.resultList[i].promotionsNewLM[language].b149,
          data.resultList[i].promotionsNewLM[language].b150,
          data.resultList[i].promotionsNewLM[language].b151,
          data.resultList[i].promotionsNewLM[language].b152,
          data.resultList[i].promotionsNewLM[language].b153,

          data.resultList[i].promotionsNewLM[language].b154,
          data.resultList[i].promotionsNewLM[language].b155,
          data.resultList[i].promotionsNewLM[language].b156,
          data.resultList[i].promotionsNewLM[language].b157,
          data.resultList[i].promotionsNewLM[language].b158,

          data.resultList[i].promotionsNewLM[language].b159,
          data.resultList[i].promotionsNewLM[language].b160,

          data.resultList[i].promotionsNewLM[language].b9,
          data.resultList[i].promotionsNewLM[language].b10,
          data.resultList[i].promotionsNewLM[language].b11,



        ]

      this.promotionsexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b279],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b174],
        ["", data.resultList[i].promotionsNewLM[language].b119, data.resultList[i].promotionsnewdata.x20],
        ["", data.resultList[i].promotionsNewLM[language].b120, data.resultList[i].promotionsnewdata.w21],
        ["", data.resultList[i].promotionsNewLM[language].b121, data.resultList[i].promotionsnewdata.w22],
        ["", data.resultList[i].promotionsNewLM[language].b122, data.resultList[i].promotionsnewdata.w23],
        ["", data.resultList[i].promotionsNewLM[language].b123, data.resultList[i].promotionsnewdata.y24],
        ["", data.resultList[i].promotionsNewLM[language].b124, data.resultList[i].promotionsnewdata.y25],
        ["", data.resultList[i].promotionsNewLM[language].b125, data.resultList[i].promotionsnewdata.y26],
        ["", data.resultList[i].promotionsNewLM[language].b126, data.resultList[i].promotionsnewdata.y27],
        ["", data.resultList[i].promotionsNewLM[language].b127, data.resultList[i].promotionsnewdata.w28],
        ["", data.resultList[i].promotionsNewLM[language].b51, data.resultList[i].promotionsnewdata.z23],
        ["", data.resultList[i].promotionsNewLM[language].b128, data.resultList[i].promotionsnewdata.y34],
        ["", data.resultList[i].promotionsNewLM[language].b129, data.resultList[i].promotionsnewdata.y35],
        ["", data.resultList[i].promotionsNewLM[language].b130, data.resultList[i].promotionsnewdata.y36],
        ["", data.resultList[i].promotionsNewLM[language].b131, data.resultList[i].promotionsnewdata.y37],
        ["", data.resultList[i].promotionsNewLM[language].b132, data.resultList[i].promotionsnewdata.w38],
        ["", data.resultList[i].promotionsNewLM[language].b53, data.resultList[i].promotionsnewdata.z24],
        ["", data.resultList[i].promotionsNewLM[language].b54, data.resultList[i].promotionsnewdata.z25],
        ["", data.resultList[i].promotionsNewLM[language].b133, data.resultList[i].promotionsnewdata.x47],
        ["", data.resultList[i].promotionsNewLM[language].b134, data.resultList[i].promotionsnewdata.x48],
        ["", data.resultList[i].promotionsNewLM[language].b135, data.resultList[i].promotionsnewdata.x49],
        ["", data.resultList[i].promotionsNewLM[language].b136, data.resultList[i].promotionsnewdata.x50],
        ["", data.resultList[i].promotionsNewLM[language].b137, data.resultList[i].promotionsnewdata.x51],
        ["", data.resultList[i].promotionsNewLM[language].b138, data.resultList[i].promotionsnewdata.x52],
        ["", data.resultList[i].promotionsNewLM[language].b139, data.resultList[i].promotionsnewdata.x53],
        ["", data.resultList[i].promotionsNewLM[language].b140, data.resultList[i].promotionsnewdata.x54],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b142],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b42, data.resultList[i].promotionsNewLM[language].b43],
        ["", data.resultList[i].promotionsNewLM[language].b51, data.resultList[i].promotionsnewdata.s6, data.resultList[i].promotionsnewdata.t6],
        ["", data.resultList[i].promotionsNewLM[language].b52, data.resultList[i].promotionsnewdata.s7, data.resultList[i].promotionsnewdata.t7],
        ["", data.resultList[i].promotionsNewLM[language].b53, data.resultList[i].promotionsnewdata.s8, data.resultList[i].promotionsnewdata.t8],
        ["", data.resultList[i].promotionsNewLM[language].b54, data.resultList[i].promotionsnewdata.s9, data.resultList[i].promotionsnewdata.t9],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b143],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b46, data.resultList[i].promotionsNewLM[language].b47],
        ["", data.resultList[i].promotionsNewLM[language].b51, data.resultList[i].promotionsnewdata.s18, data.resultList[i].promotionsnewdata.t18],
        ["", data.resultList[i].promotionsNewLM[language].b52, data.resultList[i].promotionsnewdata.s19, data.resultList[i].promotionsnewdata.t19],
        ["", data.resultList[i].promotionsNewLM[language].b53, data.resultList[i].promotionsnewdata.s20, data.resultList[i].promotionsnewdata.t20],
        ["", data.resultList[i].promotionsNewLM[language].b54, data.resultList[i].promotionsnewdata.s21, data.resultList[i].promotionsnewdata.t21],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b144],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b175],
        ["", data.resultList[i].promotionsNewLM[language].b51, data.resultList[i].promotionsnewdata.u6],
        ["", data.resultList[i].promotionsNewLM[language].b52, data.resultList[i].promotionsnewdata.u7],
        ["", data.resultList[i].promotionsNewLM[language].b53, data.resultList[i].promotionsnewdata.u8],
        ["", data.resultList[i].promotionsNewLM[language].b54, data.resultList[i].promotionsnewdata.u9],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b145],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b175],
        ["", data.resultList[i].promotionsNewLM[language].b149, data.resultList[i].promotionsnewdata.s27],
        ["", data.resultList[i].promotionsNewLM[language].b150, data.resultList[i].promotionsnewdata.s28],
        ["", data.resultList[i].promotionsNewLM[language].b151, data.resultList[i].promotionsnewdata.s29],
        ["", data.resultList[i].promotionsNewLM[language].b152, data.resultList[i].promotionsnewdata.s30],
        ["", data.resultList[i].promotionsNewLM[language].b153, data.resultList[i].promotionsnewdata.s31],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b146],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b175],
        ["", data.resultList[i].promotionsNewLM[language].b154, data.resultList[i].promotionsnewdata.s24],
        ["", data.resultList[i].promotionsNewLM[language].b155, data.resultList[i].promotionsnewdata.s25],
        ["", data.resultList[i].promotionsNewLM[language].b156, data.resultList[i].promotionsnewdata.s26],
        ["", data.resultList[i].promotionsNewLM[language].b157, data.resultList[i].promotionsnewdata.s31],
        ["", data.resultList[i].promotionsNewLM[language].b158, data.resultList[i].promotionsnewdata.s32],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b147 + " %"],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b175],
        ["", data.resultList[i].promotionsNewLM[language].b159, data.resultList[i].promotionsnewdata.s33],
        ["", data.resultList[i].promotionsNewLM[language].b160, data.resultList[i].promotionsnewdata.s38],
        [],
        ["", data.resultList[i].promotionsNewLM[language].b274 + " %"],
        ["", data.resultList[i].promotionsNewLM[language].b173, data.resultList[i].promotionsNewLM[language].b175],
        ["", data.resultList[i].promotionsNewLM[language].b9, data.resultList[i].promotionsnewdata.z27],
        ["", data.resultList[i].promotionsNewLM[language].b10, data.resultList[i].promotionsnewdata.z28],
        ["", data.resultList[i].promotionsNewLM[language].b11, data.resultList[i].promotionsnewdata.z29],
        [],
      ]
      this.excelalldata.push(this.promotionsexcelformat)
    }

    this.excelSheetDesign('promotionsnew', this.excelalldata, data.resultList.length, this.promotionsgamecolname, this.headingforpromotions);
  }

  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, promotionsgamecolname: any, headingpromotions: any) {

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
        if (headingpromotions.includes(d[1])) {
          worksheet.mergeCells(`B${row.number}:C${row.number + 1}}`);
          for (let cellNumber of [2, 3]) {
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
          promotionsgamecolname.includes(d[1])) {
          for (let colNumber = 2; colNumber <= 3; colNumber++) {
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
