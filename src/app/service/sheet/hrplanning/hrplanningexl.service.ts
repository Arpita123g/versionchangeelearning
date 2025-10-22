import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class HrplanningexlService extends CommonsheetdesignService {
  excelalldata: any = [];
  excelformat: any = [];
  headingforhrp: any = [];
  hrpgamecolname: any = [];
  hrpexcelformat: any = [];

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

  downloadReportforhrp(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
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
          if (gamename == "hrplanningnew") {
            this.createExcelReportforhrp(data, language);
          }
        }
      })
  }

  createExcelReportforhrp(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.headingforhrp = [
        data.resultList[i].hrPlanningNewLM[language].b274,
        data.resultList[i].hrPlanningNewLM[language].b115,
        data.resultList[i].hrPlanningNewLM[language].b124,
        data.resultList[i].hrPlanningNewLM[language].b132,
        data.resultList[i].hrPlanningNewLM[language].b154,
      ],

        this.hrpgamecolname = [
          data.resultList[i].hrPlanningNewLM[language].b33,
          data.resultList[i].hrPlanningNewLM[language].b34,
          data.resultList[i].hrPlanningNewLM[language].b35,
          data.resultList[i].hrPlanningNewLM[language].b32,
          data.resultList[i].hrPlanningNewLM[language].b268,
          data.resultList[i].hrPlanningNewLM[language].b37,
          data.resultList[i].hrPlanningNewLM[language].b57,
          data.resultList[i].hrPlanningNewLM[language].b58,
          data.resultList[i].hrPlanningNewLM[language].b59,
          data.resultList[i].hrPlanningNewLM[language].b60,
          data.resultList[i].hrPlanningNewLM[language].b61,
          data.resultList[i].hrPlanningNewLM[language].b101,
          data.resultList[i].hrPlanningNewLM[language].b102,
          data.resultList[i].hrPlanningNewLM[language].b103,
          data.resultList[i].hrPlanningNewLM[language].b104,
          data.resultList[i].hrPlanningNewLM[language].b105,
          data.resultList[i].hrPlanningNewLM[language].b106,
          data.resultList[i].hrPlanningNewLM[language].b107,
          data.resultList[i].hrPlanningNewLM[language].b108,
          data.resultList[i].hrPlanningNewLM[language].b109,
          data.resultList[i].hrPlanningNewLM[language].b110,
          data.resultList[i].hrPlanningNewLM[language].b111,
          data.resultList[i].hrPlanningNewLM[language].b112,
          data.resultList[i].hrPlanningNewLM[language].b78,
          data.resultList[i].hrPlanningNewLM[language].b79,
          data.resultList[i].hrPlanningNewLM[language].b80,
          data.resultList[i].hrPlanningNewLM[language].b81,
          data.resultList[i].hrPlanningNewLM[language].b82,
          data.resultList[i].hrPlanningNewLM[language].b90,
          data.resultList[i].hrPlanningNewLM[language].b91,
          data.resultList[i].hrPlanningNewLM[language].b92,
          data.resultList[i].hrPlanningNewLM[language].b93,

          data.resultList[i].hrPlanningNewLM[language].b116,
          data.resultList[i].hrPlanningNewLM[language].b117,
          data.resultList[i].hrPlanningNewLM[language].b118,
          data.resultList[i].hrPlanningNewLM[language].b119,

          data.resultList[i].hrPlanningNewLM[language].b125,
          data.resultList[i].hrPlanningNewLM[language].b126,
          data.resultList[i].hrPlanningNewLM[language].b127,
          data.resultList[i].hrPlanningNewLM[language].b128,
          data.resultList[i].hrPlanningNewLM[language].b129,
          data.resultList[i].hrPlanningNewLM[language].b130,
          data.resultList[i].hrPlanningNewLM[language].b131,

          data.resultList[i].hrPlanningNewLM[language].b133,
          data.resultList[i].hrPlanningNewLM[language].b134,
          data.resultList[i].hrPlanningNewLM[language].b135+ ", %",
          data.resultList[i].hrPlanningNewLM[language].b136+ ", %",
          data.resultList[i].hrPlanningNewLM[language].b137,
          data.resultList[i].hrPlanningNewLM[language].b138+ ", %",

          data.resultList[i].hrPlanningNewLM[language].b5,
          data.resultList[i].hrPlanningNewLM[language].b6,
          data.resultList[i].hrPlanningNewLM[language].b270,
          data.resultList[i].hrPlanningNewLM[language].b8,
        ]

      this.hrpexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b274],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b151, data.resultList[i].hrPlanningNewLM[language].b152],
        ["", data.resultList[i].hrPlanningNewLM[language].b33, data.resultList[i].hrplanningnewdata.ae7],
        ["", data.resultList[i].hrPlanningNewLM[language].b34, data.resultList[i].hrplanningnewdata.ae8],
        ["", data.resultList[i].hrPlanningNewLM[language].b35, data.resultList[i].hrplanningnewdata.ae9],
        ["", data.resultList[i].hrPlanningNewLM[language].b32, data.resultList[i].hrplanningnewdata.ae10],
        ["", data.resultList[i].hrPlanningNewLM[language].b268, data.resultList[i].hrplanningnewdata.ae11],
        ["", data.resultList[i].hrPlanningNewLM[language].b37, data.resultList[i].hrplanningnewdata.ae12],
        ["", data.resultList[i].hrPlanningNewLM[language].b57, data.resultList[i].hrplanningnewdata.ae15 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b58, data.resultList[i].hrplanningnewdata.ae16 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b59, data.resultList[i].hrplanningnewdata.ae17 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b60, data.resultList[i].hrplanningnewdata.ae18 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b61, data.resultList[i].hrplanningnewdata.ae19 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b101, Number(data.resultList[i].hrplanningnewdata.ae22) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b102, Number(data.resultList[i].hrplanningnewdata.ae23) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b103, Number(data.resultList[i].hrplanningnewdata.ae24) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b104, Number(data.resultList[i].hrplanningnewdata.ae21) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b105, Number(data.resultList[i].hrplanningnewdata.ae25) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b106, Number(data.resultList[i].hrplanningnewdata.ae26) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b107, Number(data.resultList[i].hrplanningnewdata.af22) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b108, Number(data.resultList[i].hrplanningnewdata.af23) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b109, Number(data.resultList[i].hrplanningnewdata.af24) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b110, Number(data.resultList[i].hrplanningnewdata.af21) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b111, Number(data.resultList[i].hrplanningnewdata.af25) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b112, Number(data.resultList[i].hrplanningnewdata.af26) * 100],
        ["", data.resultList[i].hrPlanningNewLM[language].b78, data.resultList[i].hrplanningnewdata.ae29 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b79, data.resultList[i].hrplanningnewdata.ae30 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b80, data.resultList[i].hrplanningnewdata.ae31 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b81, data.resultList[i].hrplanningnewdata.ae32 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b82, data.resultList[i].hrplanningnewdata.ae33 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b90, data.resultList[i].hrplanningnewdata.ae35 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b91, data.resultList[i].hrplanningnewdata.ae36 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b92, data.resultList[i].hrplanningnewdata.ae37 == 1 ? 'Yes' : 'No'],
        ["", data.resultList[i].hrPlanningNewLM[language].b93, data.resultList[i].hrplanningnewdata.ae38 == 1 ? 'Yes' : 'No'],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b115],
        ["", data.resultList[i].hrPlanningNewLM[language].b151, data.resultList[i].hrPlanningNewLM[language].b32, data.resultList[i].hrPlanningNewLM[language].b33, data.resultList[i].hrPlanningNewLM[language].b34, data.resultList[i].hrPlanningNewLM[language].b35, data.resultList[i].hrPlanningNewLM[language].b36, data.resultList[i].hrPlanningNewLM[language].b37],
        ["", data.resultList[i].hrPlanningNewLM[language].b116, Number(Number(data.resultList[i].hrplanningnewdata.g73).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.g74).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.g75).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.g76).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.g77).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.g78).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b117, Number(Number(data.resultList[i].hrplanningnewdata.f81).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.f82).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.f83).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.f84).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.f85).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.f86).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b118, Number(Number(data.resultList[i].hrplanningnewdata.e89).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.e90).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.e91).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.e92).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.e93).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.e94).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b119, Number(Number(data.resultList[i].hrplanningnewdata.h89).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.h90).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.h91).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.h92).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.h93).toFixed(0)), Number(Number(data.resultList[i].hrplanningnewdata.h94).toFixed(0))],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b124],
        ["", data.resultList[i].hrPlanningNewLM[language].b151, data.resultList[i].hrPlanningNewLM[language].b153],
        ["", data.resultList[i].hrPlanningNewLM[language].b125, Number(Number(data.resultList[i].hrplanningnewdata.c114 / 1000).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b126, Number(Number(data.resultList[i].hrplanningnewdata.c115 / 1000).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b127, Number(Number(data.resultList[i].hrplanningnewdata.c116 / 1000).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b128, Number(Number(data.resultList[i].hrplanningnewdata.c117 / 1000).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b129, Number(Number(data.resultList[i].hrplanningnewdata.c118 / 1000).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b130, data.resultList[i].hrplanningnewdata.c119 / 1000],
        ["", data.resultList[i].hrPlanningNewLM[language].b131, Number(Number(data.resultList[i].hrplanningnewdata.c120 / 1000).toFixed(0))],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b132],
        ["", data.resultList[i].hrPlanningNewLM[language].b151, data.resultList[i].hrPlanningNewLM[language].b153],
        ["", data.resultList[i].hrPlanningNewLM[language].b133, Number(Number(data.resultList[i].hrplanningnewdata.c99).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b134, Number(Number(data.resultList[i].hrplanningnewdata.c103).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b135+ ", %", Number((Number(data.resultList[i].hrplanningnewdata.c124) * 100).toFixed(0)) ],
        ["", data.resultList[i].hrPlanningNewLM[language].b136 + ", %", Number((Number(data.resultList[i].hrplanningnewdata.c112) * 100).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b137, Number((data.resultList[i].hrplanningnewdata.c122).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b138+ ", %", Number((Number(data.resultList[i].hrplanningnewdata.c128) * 100).toFixed(0)) ],
        [],
        ["", data.resultList[i].hrPlanningNewLM[language].b154],
        ["", data.resultList[i].hrPlanningNewLM[language].b151, data.resultList[i].hrPlanningNewLM[language].b155],
        ["", data.resultList[i].hrPlanningNewLM[language].b5, Number((Number(data.resultList[i].hrplanningnewdata.ae44) * 100).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b6, Number((Number(data.resultList[i].hrplanningnewdata.ae45) * 100).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b270, Number((Number(data.resultList[i].hrplanningnewdata.ae46) * 100).toFixed(0))],
        ["", data.resultList[i].hrPlanningNewLM[language].b8, Number((Number(data.resultList[i].hrplanningnewdata.ae47) * 100).toFixed(0))],
        [],
      ]
      this.excelalldata.push(this.hrpexcelformat)
    }

    this.excelSheetDesign('hrplanningnew', this.excelalldata, data.resultList.length, this.hrpgamecolname, this.headingforhrp);
  }

  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, hrpgamecolname: any, headinghrp: any) {

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
        if (headinghrp.includes(d[1])) {
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
          hrpgamecolname.includes(d[1])) {
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
