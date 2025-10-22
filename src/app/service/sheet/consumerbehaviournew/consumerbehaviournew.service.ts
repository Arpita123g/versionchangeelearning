import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ConsumerbehaviournewService extends CommonsheetdesignService {
  excelalldata: any = [];
  excelformat: any = [];
  headingforconsumer: any = [];
  consumergamecolname: any = [];
  consumerexcelformat: any = [];


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

  downloadReportforConsumer(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
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
          if (gamename == "consumerbehaviournew") {
            this.createExcelReportforconsumer(data, language);
          }
        }
      })
  }

  createExcelReportforconsumer(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {
      this.headingforconsumer = [
        data.resultList[i].consumerBehaviourNewLM[language].b347,
        data.resultList[i].consumerBehaviourNewLM[language].b224,
        data.resultList[i].consumerBehaviourNewLM[language].b225 + " mn",
        data.resultList[i].consumerBehaviourNewLM[language].b226 + " %",
        // data.resultList[i].consumerBehaviourNewLM[language].b10,
      ],

        this.consumergamecolname = [
          data.resultList[i].consumerBehaviourNewLM[language].b190,
          data.resultList[i].consumerBehaviourNewLM[language].b191,
          data.resultList[i].consumerBehaviourNewLM[language].b192,
          data.resultList[i].consumerBehaviourNewLM[language].b193,
          data.resultList[i].consumerBehaviourNewLM[language].b194,
          data.resultList[i].consumerBehaviourNewLM[language].b195,
          data.resultList[i].consumerBehaviourNewLM[language].b196,
          data.resultList[i].consumerBehaviourNewLM[language].b197,
          data.resultList[i].consumerBehaviourNewLM[language].b87,
          data.resultList[i].consumerBehaviourNewLM[language].b198,
          data.resultList[i].consumerBehaviourNewLM[language].b199,
          data.resultList[i].consumerBehaviourNewLM[language].b200,
          data.resultList[i].consumerBehaviourNewLM[language].b201,
          data.resultList[i].consumerBehaviourNewLM[language].b202,
          data.resultList[i].consumerBehaviourNewLM[language].b118,
          data.resultList[i].consumerBehaviourNewLM[language].b135,
          data.resultList[i].consumerBehaviourNewLM[language].b203,
          data.resultList[i].consumerBehaviourNewLM[language].b204,
          data.resultList[i].consumerBehaviourNewLM[language].b205,
          data.resultList[i].consumerBehaviourNewLM[language].b150,
          data.resultList[i].consumerBehaviourNewLM[language].b164,
          data.resultList[i].consumerBehaviourNewLM[language].b176,
          data.resultList[i].consumerBehaviourNewLM[language].b177,
          data.resultList[i].consumerBehaviourNewLM[language].b178,
          data.resultList[i].consumerBehaviourNewLM[language].b179,
          data.resultList[i].consumerBehaviourNewLM[language].b180,

          data.resultList[i].consumerBehaviourNewLM[language].b209,
          data.resultList[i].consumerBehaviourNewLM[language].b210,
          data.resultList[i].consumerBehaviourNewLM[language].b337,
          data.resultList[i].consumerBehaviourNewLM[language].b338,
          data.resultList[i].consumerBehaviourNewLM[language].b10,
          data.resultList[i].consumerBehaviourNewLM[language].b11,
          data.resultList[i].consumerBehaviourNewLM[language].b12,

        ]

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b347],
        [],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b221, data.resultList[i].consumerBehaviourNewLM[language].b222],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b190, data.resultList[i].consumerbehaviournewdata.w76],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b191, data.resultList[i].consumerbehaviournewdata.w77],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b192, data.resultList[i].consumerbehaviournewdata.w78],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b193, data.resultList[i].consumerbehaviournewdata.w79],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b194, data.resultList[i].consumerbehaviournewdata.y11],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b195, data.resultList[i].consumerbehaviournewdata.y12],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b196, data.resultList[i].consumerbehaviournewdata.y13],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b197, data.resultList[i].consumerbehaviournewdata.y14],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b87, data.resultList[i].consumerbehaviournewdata.w80],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b198, data.resultList[i].consumerbehaviournewdata.y37],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b199, data.resultList[i].consumerbehaviournewdata.y38],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b200, data.resultList[i].consumerbehaviournewdata.y43],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b201, data.resultList[i].consumerbehaviournewdata.y44],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b202, data.resultList[i].consumerbehaviournewdata.y45],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b118, data.resultList[i].consumerbehaviournewdata.w50],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b135, data.resultList[i].consumerbehaviournewdata.w52],

        ["", data.resultList[i].consumerBehaviourNewLM[language].b203, data.resultList[i].consumerbehaviournewdata.y55],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b204, data.resultList[i].consumerbehaviournewdata.y56],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b205, data.resultList[i].consumerbehaviournewdata.y57],

        ["", data.resultList[i].consumerBehaviourNewLM[language].b150, data.resultList[i].consumerbehaviournewdata.w64],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b164, data.resultList[i].consumerbehaviournewdata.w81],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b176, data.resultList[i].consumerbehaviournewdata.w70],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b177, data.resultList[i].consumerbehaviournewdata.w71],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b178, data.resultList[i].consumerbehaviournewdata.w72],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b179, data.resultList[i].consumerbehaviournewdata.w73],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b180, data.resultList[i].consumerbehaviournewdata.w74],
        [],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b224],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b221, data.resultList[i].consumerBehaviourNewLM[language].b223],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b209, data.resultList[i].consumerbehaviournewdata.p22],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b210, data.resultList[i].consumerbehaviournewdata.p27],
        [],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b225 + " mn"],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b221, data.resultList[i].consumerBehaviourNewLM[language].b223],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b337, data.resultList[i].consumerbehaviournewdata.p34],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b338, data.resultList[i].consumerbehaviournewdata.p35],
        [],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b226 +  " %"],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b221, data.resultList[i].consumerBehaviourNewLM[language].b381],
        
        // ["", data.resultList[i].consumerBehaviourNewLM[language].b10, data.resultList[i].consumerbehaviournewdata.w86],
        // ["", data.resultList[i].consumerBehaviourNewLM[language].b11, data.resultList[i].consumerbehaviournewdata.w87],
        // ["", data.resultList[i].consumerBehaviourNewLM[language].b12, data.resultList[i].consumerbehaviournewdata.w88],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b10, data.resultList[i].consumerbehaviournewdata.w86],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b11, data.resultList[i].consumerbehaviournewdata.w87],
        ["", data.resultList[i].consumerBehaviourNewLM[language].b12, data.resultList[i].consumerbehaviournewdata.w88],
        [],
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesign('consumerbehaviournew', this.excelalldata, data.resultList.length, this.consumergamecolname, this.headingforconsumer);
  }


  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, consumergamecolname: any, headingconsumer: any) {

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Report');
    // this.greencellcolor = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: '90EE90' },
    //   bgColor: { argb: 'FF0000FF' }
    // }

    // this.redcellcolor = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: 'ff0000' },
    //   bgColor: { argb: 'FF0000FF' }
    // }

    // this.yellowcellcolor = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: 'FFFFFF00' },
    //   bgColor: { argb: 'FF0000FF' }
    // }

    let cellstyle = {
      name: 'Arial',
      size: 11,
      bold: true,
      color: { argb: 'FFFFFF' }
    }
    // let cellstyle1 = {
    //   name: 'Arial',
    //   size: 11,
    //   bold: true,
    //   color: { argb: '00000000' }
    // }

    for (let i = 0; i < attempnumber; i++) {
      excelalldata[i].forEach((d: any) => {
        let row = worksheet.addRow(d);
        if (headingconsumer.includes(d[1])) {
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
          consumergamecolname.includes(d[1])) {
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
