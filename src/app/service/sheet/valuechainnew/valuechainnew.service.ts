import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ValuechainnewService extends CommonsheetdesignService {
  excelalldata: any = [];
  excelformat: any = [];
  headingforvaluechain: any = [];
  valuechaingamecolname: any = [];
  valuechainexcelformat: any = [];

  cellstyle1 = {
    name: 'Arial',
    size: 11,
    bold: true,
    color: { argb: '00000000' }
  }

  constructor(
    private _api: ApiService) {
    super();
  }

  downloadReportforValuechain(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
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
          if (gamename == "valuechainnew") {
            this.createExcelReportforvaluechain(data, language);
          }
        }
      })
  }

  createExcelReportforvaluechain(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {
      this.headingforvaluechain = [
        data.resultList[i].valueChainNewLM[language].b166,
        data.resultList[i].valueChainNewLM[language].b124,
        data.resultList[i].valueChainNewLM[language].b130,
        data.resultList[i].valueChainNewLM[language].b134,
        data.resultList[i].valueChainNewLM[language].b138,
        data.resultList[i].valueChainNewLM[language].b154,
        data.resultList[i].valueChainNewLM[language].b167 + " %",

      ],

        this.valuechaingamecolname = [
          data.resultList[i].valueChainNewLM[language].b28,
          data.resultList[i].valueChainNewLM[language].b35,
          data.resultList[i].valueChainNewLM[language].b40,
          data.resultList[i].valueChainNewLM[language].b243,
          data.resultList[i].valueChainNewLM[language].b117,
          data.resultList[i].valueChainNewLM[language].b115,
          data.resultList[i].valueChainNewLM[language].b116,
          data.resultList[i].valueChainNewLM[language].b66,
          data.resultList[i].valueChainNewLM[language].b67,
          data.resultList[i].valueChainNewLM[language].b74,
          data.resultList[i].valueChainNewLM[language].b25,
          data.resultList[i].valueChainNewLM[language].b244,
          data.resultList[i].valueChainNewLM[language].b118,
          data.resultList[i].valueChainNewLM[language].b119,
          data.resultList[i].valueChainNewLM[language].b120,
          data.resultList[i].valueChainNewLM[language].b93,
          data.resultList[i].valueChainNewLM[language].b94,
          data.resultList[i].valueChainNewLM[language].b95,
          data.resultList[i].valueChainNewLM[language].b96,
          data.resultList[i].valueChainNewLM[language].b97,
          data.resultList[i].valueChainNewLM[language].b245,

          data.resultList[i].valueChainNewLM[language].b125,
          data.resultList[i].valueChainNewLM[language].b126,
          data.resultList[i].valueChainNewLM[language].b127,
          data.resultList[i].valueChainNewLM[language].b128,
          data.resultList[i].valueChainNewLM[language].b129,

          data.resultList[i].valueChainNewLM[language].b131,
          data.resultList[i].valueChainNewLM[language].b132,
          data.resultList[i].valueChainNewLM[language].b133,

          data.resultList[i].valueChainNewLM[language].b135,
          data.resultList[i].valueChainNewLM[language].b136,
          data.resultList[i].valueChainNewLM[language].b137,

          data.resultList[i].valueChainNewLM[language].b139,
          data.resultList[i].valueChainNewLM[language].b140,
          data.resultList[i].valueChainNewLM[language].b141,
          data.resultList[i].valueChainNewLM[language].b142,
          data.resultList[i].valueChainNewLM[language].b143,
          data.resultList[i].valueChainNewLM[language].b144,
          data.resultList[i].valueChainNewLM[language].b145,
          data.resultList[i].valueChainNewLM[language].b146,
          data.resultList[i].valueChainNewLM[language].b147,
          data.resultList[i].valueChainNewLM[language].b148,
          data.resultList[i].valueChainNewLM[language].b149,
          data.resultList[i].valueChainNewLM[language].b150,
          data.resultList[i].valueChainNewLM[language].b151,
          data.resultList[i].valueChainNewLM[language].b152,
          data.resultList[i].valueChainNewLM[language].b153,

          data.resultList[i].valueChainNewLM[language].b155,
          data.resultList[i].valueChainNewLM[language].b156,
          data.resultList[i].valueChainNewLM[language].b157,

          data.resultList[i].valueChainNewLM[language].b9 + "%",
          data.resultList[i].valueChainNewLM[language].b10 + "%",
          data.resultList[i].valueChainNewLM[language].b11 + "%",
          data.resultList[i].valueChainNewLM[language].b12 + "%",


        ]

      this.valuechainexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b166],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b164],

        ["", data.resultList[i].valueChainNewLM[language].b28,  Number(data.resultList[i].valuechainnewdata.z8 )],
        ["", data.resultList[i].valueChainNewLM[language].b35,  Number(data.resultList[i].valuechainnewdata.z10)],
        ["", data.resultList[i].valueChainNewLM[language].b40,  Number(data.resultList[i].valuechainnewdata.z14)],
        ["", data.resultList[i].valueChainNewLM[language].b243, Number(data.resultList[i].valuechainnewdata.z15)],
        ["", data.resultList[i].valueChainNewLM[language].b117, Number(data.resultList[i].valuechainnewdata.z16)],
        ["", data.resultList[i].valueChainNewLM[language].b115, data.resultList[i].valuechainnewdata.z17 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b116, data.resultList[i].valuechainnewdata.z18 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b66,  data.resultList[i].valuechainnewdata.z19 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b67,  data.resultList[i].valuechainnewdata.z20 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b74,  Number(data.resultList[i].valuechainnewdata.z24)],
        ["", data.resultList[i].valueChainNewLM[language].b25,  Number(data.resultList[i].valuechainnewdata.z25)],
        ["", data.resultList[i].valueChainNewLM[language].b244, Number(data.resultList[i].valuechainnewdata.z26)],

        ["", data.resultList[i].valueChainNewLM[language].b118, Number(data.resultList[i].valuechainnewdata.z27)],
        ["", data.resultList[i].valueChainNewLM[language].b119, Number(data.resultList[i].valuechainnewdata.z28)],
        ["", data.resultList[i].valueChainNewLM[language].b120, Number(data.resultList[i].valuechainnewdata.z29)],
        ["", data.resultList[i].valueChainNewLM[language].b93, data.resultList[i].valuechainnewdata.z30 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b94, data.resultList[i].valuechainnewdata.z31 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b95, data.resultList[i].valuechainnewdata.z32 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b96, data.resultList[i].valuechainnewdata.z33 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b97, data.resultList[i].valuechainnewdata.z34 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].valueChainNewLM[language].b245, Number(data.resultList[i].valuechainnewdata.z37)],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b124],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b165],
        ["", data.resultList[i].valueChainNewLM[language].b125, Number(Number(data.resultList[i].valuechainnewdata.i18).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b126, Number(Number(data.resultList[i].valuechainnewdata.i25).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b127, Number(data.resultList[i].valuechainnewdata.i26)],
        ["", data.resultList[i].valueChainNewLM[language].b128, Number(Number(data.resultList[i].valuechainnewdata.i27 + data.resultList[i].valuechainnewdata.i29).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b129, data.resultList[i].valuechainnewdata.i30 == 0 ? '-' : data.resultList[i].valuechainnewdata.i30],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b130],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b165],
        ["", data.resultList[i].valueChainNewLM[language].b131, Number(Number(data.resultList[i].valuechainnewdata.l17).toFixed(1))],
        ["", data.resultList[i].valueChainNewLM[language].b132, Number(Number(data.resultList[i].valuechainnewdata.l34).toFixed(1))],
        ["", data.resultList[i].valueChainNewLM[language].b133, Number(Number(data.resultList[i].valuechainnewdata.l38).toFixed(1))],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b134],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b165],
        ["", data.resultList[i].valueChainNewLM[language].b135, Number(data.resultList[i].valuechainnewdata.l35)],
        ["", data.resultList[i].valueChainNewLM[language].b136, Number(Number(data.resultList[i].valuechainnewdata.l36).toFixed(1))],
        ["", data.resultList[i].valueChainNewLM[language].b137, data.resultList[i].valuechainnewdata.l37 == 0 ? '-' : data.resultList[i].valuechainnewdata.l37],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b138],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b165],
        ["", data.resultList[i].valueChainNewLM[language].b139, data.resultList[i].valuechainnewdata.l41],
        ["", data.resultList[i].valueChainNewLM[language].b140, Number(Number(data.resultList[i].valuechainnewdata.l42).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b141, Number(Number(data.resultList[i].valuechainnewdata.l43).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b142, data.resultList[i].valuechainnewdata.l44],
        ["", data.resultList[i].valueChainNewLM[language].b143, Number(Number(data.resultList[i].valuechainnewdata.l45).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b144, Number(Number(data.resultList[i].valuechainnewdata.l46).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b145, data.resultList[i].valuechainnewdata.l47],
        ["", data.resultList[i].valueChainNewLM[language].b146, data.resultList[i].valuechainnewdata.l48],
        ["", data.resultList[i].valueChainNewLM[language].b147, Number(Number(data.resultList[i].valuechainnewdata.l49).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b148, data.resultList[i].valuechainnewdata.l50],
        ["", data.resultList[i].valueChainNewLM[language].b149, Number(Number(data.resultList[i].valuechainnewdata.l51).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b150, Number(Number(data.resultList[i].valuechainnewdata.l52).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b151, Number(Number(data.resultList[i].valuechainnewdata.l53).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b152, Number(Number(data.resultList[i].valuechainnewdata.l54).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b153, Number(Number(data.resultList[i].valuechainnewdata.l55).toFixed(0))],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b154],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b165],
        ["", data.resultList[i].valueChainNewLM[language].b155, Number((Number(data.resultList[i].valuechainnewdata.l39) * 100).toFixed(1)) ],
        ["", data.resultList[i].valueChainNewLM[language].b156, Number((Number(data.resultList[i].valuechainnewdata.l56) * 100).toFixed(1)) ],
        ["", data.resultList[i].valueChainNewLM[language].b157, Number(Number(data.resultList[i].valuechainnewdata.i29).toFixed(0))],
        [],
        ["", data.resultList[i].valueChainNewLM[language].b167 + " %"],
        ["", data.resultList[i].valueChainNewLM[language].b163, data.resultList[i].valueChainNewLM[language].b168],
        ["", data.resultList[i].valueChainNewLM[language].b9  + "%",  Number((Number(data.resultList[i].valuechainnewdata.z49) * 100).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b10 + "%", Number((Number(data.resultList[i].valuechainnewdata.z50) * 100).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b11 + "%", Number((Number(data.resultList[i].valuechainnewdata.z51) * 100).toFixed(0))],
        ["", data.resultList[i].valueChainNewLM[language].b12 + "%", Number((Number(data.resultList[i].valuechainnewdata.z52) * 100).toFixed(0))],
        [],
      ]
      this.excelalldata.push(this.valuechainexcelformat)
    }

    this.excelSheetDesign('valuechainnew', this.excelalldata, data.resultList.length, this.valuechaingamecolname, this.headingforvaluechain);
  }

  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, valuechaingamecolname: any, headingvaluechain: any) {

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
        if (headingvaluechain.includes(d[1])) {
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
          valuechaingamecolname.includes(d[1])) {
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
