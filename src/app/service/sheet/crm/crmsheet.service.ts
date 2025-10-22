import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class CrmsheetService extends CommonsheetdesignService {
  constructor(
    private _api: ApiService) {
    super();
  }
  excelalldata: any = [];
  capitalcolname: any = [];
  crmexcelformat:any = [];
  headingcrm:any = [];
  crmgamecolname:any = [];
 
  cellstyle1 = {
    name: 'Arial',
    size: 11,
    bold: true,
    color: { argb: '00000000' }
  }
 
  downloadReportforCRMgame(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
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
          if (gamename == "crmgame") {
            this.createExcelReportforcrm(data, language);
          }

        }
      })

  }
  //crm game excel sheet...
  createExcelReportforcrm(data: any, language: string) {
    language = language.toLowerCase();
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {
      this.headingcrm=[
        data.resultList[i].crmGameLM[language].b36,
        data.resultList[i].crmGameLM[language].b248,
        data.resultList[i].crmGameLM[language].b249,
        data.resultList[i].crmGameLM[language].b250,
        data.resultList[i].crmGameLM[language].b251,
        data.resultList[i].crmGameLM[language].b252,
        data.resultList[i].crmGameLM[language].b394,

      ],

      this.crmgamecolname = [
        data.resultList[i].crmGameLM[language].b79 + "1",
        data.resultList[i].crmGameLM[language].b79 + " 2",
        data.resultList[i].crmGameLM[language].b79 + " 3",
        data.resultList[i].crmGameLM[language].b79 + " 4",
        data.resultList[i].crmGameLM[language].b79 + " 5",
        data.resultList[i].crmGameLM[language].b79 + " 6",
        data.resultList[i].crmGameLM[language].b79 + " 7",
        data.resultList[i].crmGameLM[language].b79 + " 8",
        data.resultList[i].crmGameLM[language].b79 + " 9",
        data.resultList[i].crmGameLM[language].b79 + " 10",
        data.resultList[i].crmGameLM[language].b79 + " 11",
        data.resultList[i].crmGameLM[language].b79 + " 12",
        data.resultList[i].crmGameLM[language].b79 + " 13",
        data.resultList[i].crmGameLM[language].b79 + " 14",
        data.resultList[i].crmGameLM[language].b79 + " 15",
        data.resultList[i].crmGameLM[language].b79 + " 16",
        data.resultList[i].crmGameLM[language].b79 + " 17",
        data.resultList[i].crmGameLM[language].b79 + " 18",
        data.resultList[i].crmGameLM[language].b79 + " 19",
        data.resultList[i].crmGameLM[language].b79 + " 20",
        data.resultList[i].crmGameLM[language].b79 + " 21",
        data.resultList[i].crmGameLM[language].b79 + " 22",
        data.resultList[i].crmGameLM[language].b79 + " 23",
        data.resultList[i].crmGameLM[language].b79 + " 24",
        data.resultList[i].crmGameLM[language].b79 + " 25",
        data.resultList[i].crmGameLM[language].b147,
        data.resultList[i].crmGameLM[language].b148,
        data.resultList[i].crmGameLM[language].b149,
        data.resultList[i].crmGameLM[language].b150,
        data.resultList[i].crmGameLM[language].b151,
        data.resultList[i].crmGameLM[language].b152,
        data.resultList[i].crmGameLM[language].b153,
        data.resultList[i].crmGameLM[language].b154,
        data.resultList[i].crmGameLM[language].b155,
        data.resultList[i].crmGameLM[language].b221,
        data.resultList[i].crmGameLM[language].b222,
        data.resultList[i].crmGameLM[language].b223,
        data.resultList[i].crmGameLM[language].b224,
        data.resultList[i].crmGameLM[language].b225,
        data.resultList[i].crmGameLM[language].b226,
        data.resultList[i].crmGameLM[language].b235,
        data.resultList[i].crmGameLM[language].b166,
        data.resultList[i].crmGameLM[language].b167,
        data.resultList[i].crmGameLM[language].b168,
        data.resultList[i].crmGameLM[language].b169,
        data.resultList[i].crmGameLM[language].b188,
        data.resultList[i].crmGameLM[language].b189,
        data.resultList[i].crmGameLM[language].b190,
        data.resultList[i].crmGameLM[language].b191,
        data.resultList[i].crmGameLM[language].b192,
        data.resultList[i].crmGameLM[language].b213,
        data.resultList[i].crmGameLM[language].b214,
        data.resultList[i].crmGameLM[language].b199,
        data.resultList[i].crmGameLM[language].b200,
        data.resultList[i].crmGameLM[language].b201,
        data.resultList[i].crmGameLM[language].b202,
        data.resultList[i].crmGameLM[language].b203,
        data.resultList[i].crmGameLM[language].b228,
        data.resultList[i].crmGameLM[language].b229,
        data.resultList[i].crmGameLM[language].b230,
        data.resultList[i].crmGameLM[language].b231,
        data.resultList[i].crmGameLM[language].b232,
        data.resultList[i].crmGameLM[language].b233,
        data.resultList[i].crmGameLM[language].b239,
        data.resultList[i].crmGameLM[language].b240,
        data.resultList[i].crmGameLM[language].b241,
        data.resultList[i].crmGameLM[language].b242,
        data.resultList[i].crmGameLM[language].b243,
        data.resultList[i].crmGameLM[language].b244,
        data.resultList[i].crmGameLM[language].b245,
        data.resultList[i].crmGameLM[language].b246,
        data.resultList[i].crmGameLM[language].b247,
        data.resultList[i].crmGameLM[language].b235,
        data.resultList[i].crmGameLM[language].b236,
        data.resultList[i].crmGameLM[language].b237,
        data.resultList[i].crmGameLM[language].b238,
        data.resultList[i].crmGameLM[language].b79,
        data.resultList[i].crmGameLM[language].b17,
        data.resultList[i].crmGameLM[language].b18,
      ]
      this.crmexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", data.resultList[i].crmGameLM[language].b36],
        [],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b79 + "1", data.resultList[i].crmgamedata.al9],
        ["", data.resultList[i].crmGameLM[language].b79 + " 2", data.resultList[i].crmgamedata.al10],
        ["", data.resultList[i].crmGameLM[language].b79 + " 3", data.resultList[i].crmgamedata.al11],
        ["", data.resultList[i].crmGameLM[language].b79 + " 4", data.resultList[i].crmgamedata.al12],
        ["", data.resultList[i].crmGameLM[language].b79 + " 5", data.resultList[i].crmgamedata.al13],
        ["", data.resultList[i].crmGameLM[language].b79 + " 6", data.resultList[i].crmgamedata.al14],
        ["", data.resultList[i].crmGameLM[language].b79 + " 7", data.resultList[i].crmgamedata.al15],
        ["", data.resultList[i].crmGameLM[language].b79 + " 8", data.resultList[i].crmgamedata.al16],
        ["", data.resultList[i].crmGameLM[language].b79 + " 9", data.resultList[i].crmgamedata.al17],
        ["", data.resultList[i].crmGameLM[language].b79 + " 10", data.resultList[i].crmgamedata.al18],
        ["", data.resultList[i].crmGameLM[language].b79 + " 11", data.resultList[i].crmgamedata.al19],
        ["", data.resultList[i].crmGameLM[language].b79 + " 12", data.resultList[i].crmgamedata.al20],
        ["", data.resultList[i].crmGameLM[language].b79 + " 13", data.resultList[i].crmgamedata.al21],
        ["", data.resultList[i].crmGameLM[language].b79 + " 14", data.resultList[i].crmgamedata.al22],
        ["", data.resultList[i].crmGameLM[language].b79 + " 15", data.resultList[i].crmgamedata.al23],
        ["", data.resultList[i].crmGameLM[language].b79 + " 16", data.resultList[i].crmgamedata.al24],
        ["", data.resultList[i].crmGameLM[language].b79 + " 17", data.resultList[i].crmgamedata.al25],
        ["", data.resultList[i].crmGameLM[language].b79 + " 18", data.resultList[i].crmgamedata.al26],
        ["", data.resultList[i].crmGameLM[language].b79 + " 19", data.resultList[i].crmgamedata.al27],
        ["", data.resultList[i].crmGameLM[language].b79 + " 20", data.resultList[i].crmgamedata.al28],
        ["", data.resultList[i].crmGameLM[language].b79 + " 21", data.resultList[i].crmgamedata.al29],
        ["", data.resultList[i].crmGameLM[language].b79 + " 22", data.resultList[i].crmgamedata.al30],
        ["", data.resultList[i].crmGameLM[language].b79 + " 23", data.resultList[i].crmgamedata.al31],
        ["", data.resultList[i].crmGameLM[language].b79 + " 24", data.resultList[i].crmgamedata.al32],
        ["", data.resultList[i].crmGameLM[language].b79 + " 25", data.resultList[i].crmgamedata.al33],
        ["", data.resultList[i].crmGameLM[language].b147, data.resultList[i].crmgamedata.al100],
        ["", data.resultList[i].crmGameLM[language].b148, data.resultList[i].crmgamedata.al101],
        ["", data.resultList[i].crmGameLM[language].b149, data.resultList[i].crmgamedata.al102],
        ["", data.resultList[i].crmGameLM[language].b150, data.resultList[i].crmgamedata.al103],
        ["", data.resultList[i].crmGameLM[language].b151, data.resultList[i].crmgamedata.al104],
        ["", data.resultList[i].crmGameLM[language].b152, data.resultList[i].crmgamedata.al105],
        ["", data.resultList[i].crmGameLM[language].b153, data.resultList[i].crmgamedata.al106],
        ["", data.resultList[i].crmGameLM[language].b154, data.resultList[i].crmgamedata.al107],
        ["", data.resultList[i].crmGameLM[language].b155, data.resultList[i].crmgamedata.al108],
        ["", data.resultList[i].crmGameLM[language].b221, data.resultList[i].crmgamedata.al46 == "" ? '-' : Number(data.resultList[i].crmgamedata.al46).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b222, data.resultList[i].crmgamedata.al47 == "" ? '-' : Number(data.resultList[i].crmgamedata.al47).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b223, data.resultList[i].crmgamedata.am46 == "" ? '-' : Number(data.resultList[i].crmgamedata.am46).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b224, data.resultList[i].crmgamedata.am47 == "" ? '-' : Number(data.resultList[i].crmgamedata.am47).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b225, data.resultList[i].crmgamedata.an46 == "" ? '-' : Number(data.resultList[i].crmgamedata.an46).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b226, data.resultList[i].crmgamedata.an47 == "" ? '-' : Number(data.resultList[i].crmgamedata.an47).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b235, data.resultList[i].crmgamedata.al110],
        ["", data.resultList[i].crmGameLM[language].b166, data.resultList[i].crmgamedata.al59],
        ["", data.resultList[i].crmGameLM[language].b167, data.resultList[i].crmgamedata.al60],
        ["", data.resultList[i].crmGameLM[language].b168, data.resultList[i].crmgamedata.al61],
        ["", data.resultList[i].crmGameLM[language].b169, data.resultList[i].crmgamedata.al62],
        ["", data.resultList[i].crmGameLM[language].b188, data.resultList[i].crmgamedata.b15 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b189, data.resultList[i].crmgamedata.b16 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b190, data.resultList[i].crmgamedata.b17 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b191, data.resultList[i].crmgamedata.b18 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b192, data.resultList[i].crmgamedata.b19 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b213, data.resultList[i].crmgamedata.al76 == "" ? '-' : Number(data.resultList[i].crmgamedata.al76).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b214, data.resultList[i].crmgamedata.al77 == "" ? '-' : Number(data.resultList[i].crmgamedata.al77).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b199, data.resultList[i].crmgamedata.b62 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b200, data.resultList[i].crmgamedata.b63 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b201, data.resultList[i].crmgamedata.b64 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b202, data.resultList[i].crmgamedata.b65 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        ["", data.resultList[i].crmGameLM[language].b203, data.resultList[i].crmgamedata.b66 == 1 ? data.resultList[i].crmGameLM[language].b396 : data.resultList[i].crmGameLM[language].b397],
        [],
        ["", data.resultList[i].crmGameLM[language].b248, ""],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b228, data.resultList[i].crmgamedata.c8 == "" ? '-' : Number(data.resultList[i].crmgamedata.c8).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b229, data.resultList[i].crmgamedata.c9 == "" ? '-' : Number(data.resultList[i].crmgamedata.c9).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b230, data.resultList[i].crmgamedata.c10 == "" ? '-' : Number(data.resultList[i].crmgamedata.c10).toFixed(0)],
        [],
        ["", data.resultList[i].crmGameLM[language].b249, ""],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b228, data.resultList[i].crmgamedata.n24 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.n24) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b229, data.resultList[i].crmgamedata.o24 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.o24) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b230, data.resultList[i].crmgamedata.p24 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.p24) * 100).toFixed(0)) + "%"],
        [],
        ["", data.resultList[i].crmGameLM[language].b250, ""],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b231, Number(data.resultList[i].crmgamedata.s14).toFixed(0), Number(data.resultList[i].crmgamedata.t14).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b232, Number(data.resultList[i].crmgamedata.s22).toFixed(0), Number(data.resultList[i].crmgamedata.t22).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b233, Number(data.resultList[i].crmgamedata.s24).toFixed(0), Number(data.resultList[i].crmgamedata.t24).toFixed(0)],
        [],
        ["", data.resultList[i].crmGameLM[language].b252, ""],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b239, data.resultList[i].crmgamedata.s33 == "" ? '-' : Number(data.resultList[i].crmgamedata.s33).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b240, data.resultList[i].crmgamedata.s34 == "" ? '-' : Number(data.resultList[i].crmgamedata.s34).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b241, data.resultList[i].crmgamedata.s35 == "" ? '-' : Number(data.resultList[i].crmgamedata.s35).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b242, data.resultList[i].crmgamedata.n27 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.n27) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b243, data.resultList[i].crmgamedata.s36 == "" ? '-' : Number(data.resultList[i].crmgamedata.s36).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b244, data.resultList[i].crmgamedata.s27 == "" ? '-' : Number(data.resultList[i].crmgamedata.s27).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b245, data.resultList[i].crmgamedata.s28 == "" ? '-' : Number(data.resultList[i].crmgamedata.s28).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b246, data.resultList[i].crmgamedata.s29 == "" ? '-' : Number(data.resultList[i].crmgamedata.s29).toFixed(0)],
        ["", data.resultList[i].crmGameLM[language].b247, data.resultList[i].crmgamedata.s31 == "" ? '-' : Number(data.resultList[i].crmgamedata.s31).toFixed(0)],
        [],
        ["", data.resultList[i].crmGameLM[language].b251, ""],
        ["", data.resultList[i].crmGameLM[language].b234, ""],
        ["", data.resultList[i].crmGameLM[language].b235, data.resultList[i].crmgamedata.n32 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.n32) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b236, data.resultList[i].crmgamedata.n40 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.n40) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b237, data.resultList[i].crmgamedata.n43 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.n43) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b238, data.resultList[i].crmgamedata.n33 == "" ? '-' : Number(data.resultList[i].crmgamedata.n33).toFixed(0)],
        [],
        ["", data.resultList[i].crmGameLM[language].b394, ""],
        ["", data.resultList[i].crmGameLM[language].b261, data.resultList[i].crmGameLM[language].b264],
        ["", data.resultList[i].crmGameLM[language].b79, data.resultList[i].crmgamedata.al92 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.al92) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b17, data.resultList[i].crmgamedata.al93 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.al93) * 100).toFixed(0)) + "%"],
        ["", data.resultList[i].crmGameLM[language].b18, data.resultList[i].crmgamedata.al94 == "" ? '-' : Number((Number(data.resultList[i].crmgamedata.al94) * 100).toFixed(0)) + "%"],

      ]
      this.excelalldata.push(this.crmexcelformat)
    }
    this.excelSheetDesign('crmgame',  this.excelalldata, data.resultList.length,this.crmgamecolname,this.headingcrm);
  }


   excelSheetDesign(gamename: string,excelalldata: any, attempnumber: any, columnname: any,headingname:any) {
  
 
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