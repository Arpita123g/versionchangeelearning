import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ChangemanagementnewexlService extends CommonsheetdesignService {
  excelalldata: any = [];
  excelformat: any = [];
  headingforchangemanagementnew: any = [];
  changemanagementnewgamecolname: any = [];
  changemanagementnewexcelformat: any = [];

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

  downloadReportforchangemanagementnew(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
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
          if (gamename == "changemanagementnew") {
            this.createExcelReportchangemanagement(data, language);
          }
        }
      })
  }

  createExcelReportchangemanagement(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.headingforchangemanagementnew = [
        data.resultList[i].changeManagementNewLM[language].b235,
        data.resultList[i].changeManagementNewLM[language].b106,
        data.resultList[i].changeManagementNewLM[language].b117,
        data.resultList[i].changeManagementNewLM[language].b111,
        data.resultList[i].changeManagementNewLM[language].b112,
        data.resultList[i].changeManagementNewLM[language].b118,
      ],

        this.changemanagementnewgamecolname = [
          data.resultList[i].changeManagementNewLM[language].b41,
          data.resultList[i].changeManagementNewLM[language].b45,
          data.resultList[i].changeManagementNewLM[language].b60,
          data.resultList[i].changeManagementNewLM[language].b92,
          data.resultList[i].changeManagementNewLM[language].b93,
          data.resultList[i].changeManagementNewLM[language].b94,
          data.resultList[i].changeManagementNewLM[language].b95,
          data.resultList[i].changeManagementNewLM[language].b96,
          data.resultList[i].changeManagementNewLM[language].b97,
          data.resultList[i].changeManagementNewLM[language].b73,
          data.resultList[i].changeManagementNewLM[language].b98,
          data.resultList[i].changeManagementNewLM[language].b99,
          data.resultList[i].changeManagementNewLM[language].b100,
          data.resultList[i].changeManagementNewLM[language].b101,
          data.resultList[i].changeManagementNewLM[language].b102,
          data.resultList[i].changeManagementNewLM[language].b103,
          data.resultList[i].changeManagementNewLM[language].b86,
          data.resultList[i].changeManagementNewLM[language].b45,
          data.resultList[i].changeManagementNewLM[language].b60,
          data.resultList[i].changeManagementNewLM[language].b92,
          data.resultList[i].changeManagementNewLM[language].b93,
          data.resultList[i].changeManagementNewLM[language].b94,
          data.resultList[i].changeManagementNewLM[language].b95,
          data.resultList[i].changeManagementNewLM[language].b96,
          data.resultList[i].changeManagementNewLM[language].b97,
          data.resultList[i].changeManagementNewLM[language].b73,
          data.resultList[i].changeManagementNewLM[language].b98,
          data.resultList[i].changeManagementNewLM[language].b99,
          data.resultList[i].changeManagementNewLM[language].b100,
          data.resultList[i].changeManagementNewLM[language].b101,
          data.resultList[i].changeManagementNewLM[language].b102,
          data.resultList[i].changeManagementNewLM[language].b103,
          data.resultList[i].changeManagementNewLM[language].b88,
          data.resultList[i].changeManagementNewLM[language].b45,
          data.resultList[i].changeManagementNewLM[language].b60,
          data.resultList[i].changeManagementNewLM[language].b92,
          data.resultList[i].changeManagementNewLM[language].b93,
          data.resultList[i].changeManagementNewLM[language].b94,
          data.resultList[i].changeManagementNewLM[language].b95,
          data.resultList[i].changeManagementNewLM[language].b96,
          data.resultList[i].changeManagementNewLM[language].b97,
          data.resultList[i].changeManagementNewLM[language].b73,
          data.resultList[i].changeManagementNewLM[language].b98,
          data.resultList[i].changeManagementNewLM[language].b99,
          data.resultList[i].changeManagementNewLM[language].b100,
          data.resultList[i].changeManagementNewLM[language].b101,
          data.resultList[i].changeManagementNewLM[language].b102,
          data.resultList[i].changeManagementNewLM[language].b103,

          data.resultList[i].changeManagementNewLM[language].b34,
          data.resultList[i].changeManagementNewLM[language].b35,
          data.resultList[i].changeManagementNewLM[language].b36,
          data.resultList[i].changeManagementNewLM[language].b37,
          data.resultList[i].changeManagementNewLM[language].b38,
          data.resultList[i].changeManagementNewLM[language].b39,

          data.resultList[i].changeManagementNewLM[language].b107,
          data.resultList[i].changeManagementNewLM[language].b108,
          data.resultList[i].changeManagementNewLM[language].b109,
          data.resultList[i].changeManagementNewLM[language].b110,

          data.resultList[i].changeManagementNewLM[language].b34,
          data.resultList[i].changeManagementNewLM[language].b35,
          data.resultList[i].changeManagementNewLM[language].b36,
          data.resultList[i].changeManagementNewLM[language].b37,
          data.resultList[i].changeManagementNewLM[language].b38,
          data.resultList[i].changeManagementNewLM[language].b39,

          data.resultList[i].changeManagementNewLM[language].b113,
          data.resultList[i].changeManagementNewLM[language].b114,
          data.resultList[i].changeManagementNewLM[language].b115,
          data.resultList[i].changeManagementNewLM[language].b116,

          data.resultList[i].changeManagementNewLM[language].b34,
          data.resultList[i].changeManagementNewLM[language].b35,
          data.resultList[i].changeManagementNewLM[language].b36,
          data.resultList[i].changeManagementNewLM[language].b37,
          data.resultList[i].changeManagementNewLM[language].b38,
          data.resultList[i].changeManagementNewLM[language].b39,
        ]

      this.changemanagementnewexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b235],
        ["", data.resultList[i].changeManagementNewLM[language].b129, data.resultList[i].changeManagementNewLM[language].b130],
        ["", data.resultList[i].changeManagementNewLM[language].b41],
        ["", data.resultList[i].changeManagementNewLM[language].b45, data.resultList[i].changemanagementnewdata.bk6],
        ["", data.resultList[i].changeManagementNewLM[language].b60, data.resultList[i].changemanagementnewdata.bk7],
        ["", data.resultList[i].changeManagementNewLM[language].b92, data.resultList[i].changemanagementnewdata.bk8],
        ["", data.resultList[i].changeManagementNewLM[language].b93, data.resultList[i].changemanagementnewdata.bk9],
        ["", data.resultList[i].changeManagementNewLM[language].b94, data.resultList[i].changemanagementnewdata.bk10],
        ["", data.resultList[i].changeManagementNewLM[language].b95, data.resultList[i].changemanagementnewdata.bk11],
        ["", data.resultList[i].changeManagementNewLM[language].b96, data.resultList[i].changemanagementnewdata.bk12],
        ["", data.resultList[i].changeManagementNewLM[language].b97, data.resultList[i].changemanagementnewdata.bk13],
        ["", data.resultList[i].changeManagementNewLM[language].b73, data.resultList[i].changemanagementnewdata.bk14],
        ["", data.resultList[i].changeManagementNewLM[language].b98, data.resultList[i].changemanagementnewdata.bk15],
        ["", data.resultList[i].changeManagementNewLM[language].b99, data.resultList[i].changemanagementnewdata.bk16],
        ["", data.resultList[i].changeManagementNewLM[language].b100, data.resultList[i].changemanagementnewdata.bk17],
        ["", data.resultList[i].changeManagementNewLM[language].b101, data.resultList[i].changemanagementnewdata.bk18],
        ["", data.resultList[i].changeManagementNewLM[language].b102, data.resultList[i].changemanagementnewdata.bk19],
        ["", data.resultList[i].changeManagementNewLM[language].b103, data.resultList[i].changemanagementnewdata.bk20],
        ["", data.resultList[i].changeManagementNewLM[language].b86],
        ["", data.resultList[i].changeManagementNewLM[language].b45, data.resultList[i].changemanagementnewdata.bk22],
        ["", data.resultList[i].changeManagementNewLM[language].b60, data.resultList[i].changemanagementnewdata.bk23],
        ["", data.resultList[i].changeManagementNewLM[language].b92, data.resultList[i].changemanagementnewdata.bk24],
        ["", data.resultList[i].changeManagementNewLM[language].b93, data.resultList[i].changemanagementnewdata.bk25],
        ["", data.resultList[i].changeManagementNewLM[language].b94, data.resultList[i].changemanagementnewdata.bk26],
        ["", data.resultList[i].changeManagementNewLM[language].b95, data.resultList[i].changemanagementnewdata.bk27],
        ["", data.resultList[i].changeManagementNewLM[language].b96, data.resultList[i].changemanagementnewdata.bk28],
        ["", data.resultList[i].changeManagementNewLM[language].b97, data.resultList[i].changemanagementnewdata.bk29],
        ["", data.resultList[i].changeManagementNewLM[language].b73, data.resultList[i].changemanagementnewdata.bk30],
        ["", data.resultList[i].changeManagementNewLM[language].b98, data.resultList[i].changemanagementnewdata.bk31],
        ["", data.resultList[i].changeManagementNewLM[language].b99, data.resultList[i].changemanagementnewdata.bk32],
        ["", data.resultList[i].changeManagementNewLM[language].b100, data.resultList[i].changemanagementnewdata.bk33],
        ["", data.resultList[i].changeManagementNewLM[language].b101, data.resultList[i].changemanagementnewdata.bk34],
        ["", data.resultList[i].changeManagementNewLM[language].b102, data.resultList[i].changemanagementnewdata.bk35],
        ["", data.resultList[i].changeManagementNewLM[language].b103, data.resultList[i].changemanagementnewdata.bk36],
        ["", data.resultList[i].changeManagementNewLM[language].b88],
        ["", data.resultList[i].changeManagementNewLM[language].b45, data.resultList[i].changemanagementnewdata.bk38],
        ["", data.resultList[i].changeManagementNewLM[language].b60, data.resultList[i].changemanagementnewdata.bk39],
        ["", data.resultList[i].changeManagementNewLM[language].b92, data.resultList[i].changemanagementnewdata.bk40],
        ["", data.resultList[i].changeManagementNewLM[language].b93, data.resultList[i].changemanagementnewdata.bk41],
        ["", data.resultList[i].changeManagementNewLM[language].b94, data.resultList[i].changemanagementnewdata.bk42],
        ["", data.resultList[i].changeManagementNewLM[language].b95, data.resultList[i].changemanagementnewdata.bk43],
        ["", data.resultList[i].changeManagementNewLM[language].b96, data.resultList[i].changemanagementnewdata.bk44],
        ["", data.resultList[i].changeManagementNewLM[language].b97, data.resultList[i].changemanagementnewdata.bk45],
        ["", data.resultList[i].changeManagementNewLM[language].b73, data.resultList[i].changemanagementnewdata.bk46],
        ["", data.resultList[i].changeManagementNewLM[language].b98, data.resultList[i].changemanagementnewdata.bk47],
        ["", data.resultList[i].changeManagementNewLM[language].b99, data.resultList[i].changemanagementnewdata.bk48],
        ["", data.resultList[i].changeManagementNewLM[language].b100, data.resultList[i].changemanagementnewdata.bk49],
        ["", data.resultList[i].changeManagementNewLM[language].b101, data.resultList[i].changemanagementnewdata.bk50],
        ["", data.resultList[i].changeManagementNewLM[language].b102, data.resultList[i].changemanagementnewdata.bk51],
        ["", data.resultList[i].changeManagementNewLM[language].b103, data.resultList[i].changemanagementnewdata.bk52],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b106],
        ["", data.resultList[i].changeManagementNewLM[language].b129, data.resultList[i].changeManagementNewLM[language].b107, data.resultList[i].changeManagementNewLM[language].b108, data.resultList[i].changeManagementNewLM[language].b109, data.resultList[i].changeManagementNewLM[language].b110],
        ["", data.resultList[i].changeManagementNewLM[language].b34, data.resultList[i].changemanagementnewdata.x34, data.resultList[i].changemanagementnewdata.y34, data.resultList[i].changemanagementnewdata.z34, data.resultList[i].changemanagementnewdata.aa34],
        ["", data.resultList[i].changeManagementNewLM[language].b35, data.resultList[i].changemanagementnewdata.x35, data.resultList[i].changemanagementnewdata.y35, data.resultList[i].changemanagementnewdata.z35, data.resultList[i].changemanagementnewdata.aa35],
        ["", data.resultList[i].changeManagementNewLM[language].b36, data.resultList[i].changemanagementnewdata.x36, data.resultList[i].changemanagementnewdata.y36, data.resultList[i].changemanagementnewdata.z36, data.resultList[i].changemanagementnewdata.aa36],
        ["", data.resultList[i].changeManagementNewLM[language].b37, data.resultList[i].changemanagementnewdata.x37, data.resultList[i].changemanagementnewdata.y37, data.resultList[i].changemanagementnewdata.z37, data.resultList[i].changemanagementnewdata.aa37],
        ["", data.resultList[i].changeManagementNewLM[language].b38, data.resultList[i].changemanagementnewdata.x38, data.resultList[i].changemanagementnewdata.y38, data.resultList[i].changemanagementnewdata.z38, data.resultList[i].changemanagementnewdata.aa38],
        ["", data.resultList[i].changeManagementNewLM[language].b39, data.resultList[i].changemanagementnewdata.x39, data.resultList[i].changemanagementnewdata.y39, data.resultList[i].changemanagementnewdata.z39, data.resultList[i].changemanagementnewdata.aa39],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b117],
        ["", data.resultList[i].changeManagementNewLM[language].b129, data.resultList[i].changeManagementNewLM[language].b131],
        ["", data.resultList[i].changeManagementNewLM[language].b107, data.resultList[i].changemanagementnewdata.x40],
        ["", data.resultList[i].changeManagementNewLM[language].b108, data.resultList[i].changemanagementnewdata.y40],
        ["", data.resultList[i].changeManagementNewLM[language].b109, data.resultList[i].changemanagementnewdata.z40],
        ["", data.resultList[i].changeManagementNewLM[language].b110, data.resultList[i].changemanagementnewdata.aa40],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b111],
        ["", data.resultList[i].changeManagementNewLM[language].b129, data.resultList[i].changeManagementNewLM[language].b131],
        ["", data.resultList[i].changeManagementNewLM[language].b34, data.resultList[i].changemanagementnewdata.ak20],
        ["", data.resultList[i].changeManagementNewLM[language].b35, data.resultList[i].changemanagementnewdata.al20],
        ["", data.resultList[i].changeManagementNewLM[language].b36, data.resultList[i].changemanagementnewdata.am20],
        ["", data.resultList[i].changeManagementNewLM[language].b37, data.resultList[i].changemanagementnewdata.an20],
        ["", data.resultList[i].changeManagementNewLM[language].b38, data.resultList[i].changemanagementnewdata.ao20],
        ["", data.resultList[i].changeManagementNewLM[language].b39, data.resultList[i].changemanagementnewdata.ap20],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b112],
        ["", data.resultList[i].changeManagementNewLM[language].b129, data.resultList[i].changeManagementNewLM[language].b131],
        ["", data.resultList[i].changeManagementNewLM[language].b113, data.resultList[i].changemanagementnewdata.o40],
        ["", data.resultList[i].changeManagementNewLM[language].b114, data.resultList[i].changemanagementnewdata.o44],
        ["", data.resultList[i].changeManagementNewLM[language].b115, data.resultList[i].changemanagementnewdata.o48],
        ["", data.resultList[i].changeManagementNewLM[language].b116, data.resultList[i].changemanagementnewdata.o52],
        [],
        ["", data.resultList[i].changeManagementNewLM[language].b118],
        ["", "  ", data.resultList[i].changeManagementNewLM[language].b34, data.resultList[i].changeManagementNewLM[language].b35, data.resultList[i].changeManagementNewLM[language].b36, data.resultList[i].changeManagementNewLM[language].b37, data.resultList[i].changeManagementNewLM[language].b38, data.resultList[i].changeManagementNewLM[language].b39],
        ["", data.resultList[i].changeManagementNewLM[language].b34, , " ", data.resultList[i].changemanagementnewdata[language].al32, data.resultList[i].changemanagementnewdata[language].am32, data.resultList[i].changemanagementnewdata[language].an32, data.resultList[i].changemanagementnewdata[language].ao32, data.resultList[i].changemanagementnewdata[language].ap32],
        ["", data.resultList[i].changeManagementNewLM[language].b35, data.resultList[i].changemanagementnewdata[language].ak33, " ", data.resultList[i].changemanagementnewdata[language].am33, data.resultList[i].changemanagementnewdata[language].an33, data.resultList[i].changemanagementnewdata[language].ao33, data.resultList[i].changemanagementnewdata[language].ap33],
        ["", data.resultList[i].changeManagementNewLM[language].b36, data.resultList[i].changemanagementnewdata[language].ak34, data.resultList[i].changemanagementnewdata[language].al34, " ", data.resultList[i].changemanagementnewdata[language].an34, data.resultList[i].changemanagementnewdata[language].ao34, data.resultList[i].changemanagementnewdata[language].ap34],
        ["", data.resultList[i].changeManagementNewLM[language].b37, data.resultList[i].changemanagementnewdata[language].ak35, data.resultList[i].changemanagementnewdata[language].al35, data.resultList[i].changemanagementnewdata[language].am35, " ", data.resultList[i].changemanagementnewdata[language].ao35, data.resultList[i].changemanagementnewdata[language].ap35],
        ["", data.resultList[i].changeManagementNewLM[language].b38, data.resultList[i].changemanagementnewdata[language].ak36, data.resultList[i].changemanagementnewdata[language].al36, data.resultList[i].changemanagementnewdata[language].am36, data.resultList[i].changemanagementnewdata[language].an36, " ", data.resultList[i].changemanagementnewdata[language].ap36],
        ["", data.resultList[i].changeManagementNewLM[language].b39, data.resultList[i].changemanagementnewdata[language].ak37, data.resultList[i].changemanagementnewdata[language].al37, data.resultList[i].changemanagementnewdata[language].am37, data.resultList[i].changemanagementnewdata[language].an37, data.resultList[i].changemanagementnewdata[language].ao37, " "],
        [],
      ]
      this.excelalldata.push(this.changemanagementnewexcelformat)
    }

    this.excelSheetDesign('changemanagementnew', this.excelalldata, data.resultList.length, this.changemanagementnewgamecolname, this.headingforchangemanagementnew);
  }

  excelSheetDesign(gamename: string, excelalldata: any, attempnumber: any, changemanagementnewgamecolname: any, headingchangemanagementnew: any) {

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
        if (headingchangemanagementnew.includes(d[1])) {
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
          changemanagementnewgamecolname.includes(d[1])) {
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
