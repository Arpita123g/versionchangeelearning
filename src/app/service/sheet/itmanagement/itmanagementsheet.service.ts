import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
    providedIn: 'root'
})

export class ItmanagementSheetService extends CommonsheetdesignService {
    constructor(
        private _api: ApiService) {
        super();
    }

    excelAllData: any = [];
    itExcelFormat: any = [];
    itColName: any = [];
    headingCell: any = ["Decisions", "System Architecture Cost, INR", "Data Storage Capacity", "Projected Value Earned, INR",
        "Development & Other Cost, INR", "KPI", "Thinking Ability, %"
    ]

    cellStyle1 = {
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
                    if (gamename == "itmanagement") {
                        this.createExcelReportforitManagement(data);

                    }
                }
            })

    }

    createExcelReportforitManagement(data: any) {
        this.excelAllData = [];
        for (let i = 0; i < data.resultList.length; i++) {
            // let roundData = data.resultList[i].ecommercegamedata;

            // Extracting column names dynamically from the backend
            this.itColName = [
                "Server Type", "Server Selection", "Network Management", "Data Storage Capacity, GB", "Data Management",
                data.resultList[i].itmanagementdata.c31, data.resultList[i].itmanagementdata.c32,
                data.resultList[i].itmanagementdata.c33, data.resultList[i].itmanagementdata.c34,
                "Development Model", "Method & Lifecycle Management",
                "Version Control",
                data.resultList[i].itmanagementdata.c69,
                data.resultList[i].itmanagementdata.c70, data.resultList[i].itmanagementdata.c71,
                data.resultList[i].itmanagementdata.c72, data.resultList[i].itmanagementdata.c73,
                data.resultList[i].itmanagementdata.c60, data.resultList[i].itmanagementdata.c61,
                data.resultList[i].itmanagementdata.c62, data.resultList[i].itmanagementdata.c63,
                data.resultList[i].itmanagementdata.c64,
                "Roadmap", data.resultList[i].itmanagementdata.c87,
                data.resultList[i].itmanagementdata.c88, data.resultList[i].itmanagementdata.c89,
                "Continous Improvements", data.resultList[i].itmanagementdata.c102,
                data.resultList[i].itmanagementdata.c103, data.resultList[i].itmanagementdata.c104,
                "Server", "Network Equipment", "Database", "Total Cost", "Daily Transaction", "Required Capacity, GB",
                "Value Earned, INR", "Tech Cost, INR", "Scalability & Performance", "Platform Development", "Compliances",
                "System", "R&D", "Pilot Projects", "Continous Improvements", "Training & Development", "Total Cost", "Uptime",
                "Daily transaction handling capacity", "Compliance timeline, months", "Minimum development time, months",
                "Maximum development time, months", "Performance", "Security", "System Architecture", "Software Development",
                "Innovation"
            ];
            console.log("name", this.itColName)

            this.itExcelFormat = [
                [],
                ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                [],
                ["", "Decisions"],
                [],
                ["", "Parameter", "Input"],
                ["", "Server Type", data.resultList[i].itmanagementdata.d7],
                ["", "Server Selection", data.resultList[i].itmanagementdata.af85],
                ["", "Network Management", data.resultList[i].itmanagementdata.af86],
                ["", "Data Storage Capacity, GB", data.resultList[i].itmanagementdata.m8 == 0 ? "-" : Number(Number(data.resultList[i].itmanagementdata.m8).toFixed(0))],
                ["", "Data Management", data.resultList[i].itmanagementdata.af87],
                ["", data.resultList[i].itmanagementdata.c31, data.resultList[i].itmanagementdata.b31 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c32, data.resultList[i].itmanagementdata.b32 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c33, data.resultList[i].itmanagementdata.b33 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c34, data.resultList[i].itmanagementdata.b34 == 1 ? "Implemented" : "Not Implemented"],
                ["", "Development Model", data.resultList[i].itmanagementdata.af89],
                ["", "Method & Lifecycle Management", data.resultList[i].itmanagementdata.af90],
                ["", "Version Control", data.resultList[i].itmanagementdata.af91],
                ["", data.resultList[i].itmanagementdata.c69, data.resultList[i].itmanagementdata.b69 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c70, data.resultList[i].itmanagementdata.b70 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c71, data.resultList[i].itmanagementdata.b71 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c72, data.resultList[i].itmanagementdata.b72 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c73, data.resultList[i].itmanagementdata.b73 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c60, data.resultList[i].itmanagementdata.b60 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c61, data.resultList[i].itmanagementdata.b61 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c62, data.resultList[i].itmanagementdata.b62 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c63, data.resultList[i].itmanagementdata.b63 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c64, data.resultList[i].itmanagementdata.b64 == 1 ? "Implemented" : "Not Implemented"],
                ["", "Roadmap", data.resultList[i].itmanagementdata.af93],
                ["", data.resultList[i].itmanagementdata.c87, data.resultList[i].itmanagementdata.b87 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c88, data.resultList[i].itmanagementdata.b88 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c89, data.resultList[i].itmanagementdata.b89 == 1 ? "Implemented" : "Not Implemented"],
                ["", "Continous Improvements", data.resultList[i].itmanagementdata.af94],
                ["", data.resultList[i].itmanagementdata.c102, data.resultList[i].itmanagementdata.b102 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c103, data.resultList[i].itmanagementdata.b103 == 1 ? "Implemented" : "Not Implemented"],
                ["", data.resultList[i].itmanagementdata.c104, data.resultList[i].itmanagementdata.b104 == 1 ? "Implemented" : "Not Implemented"],
                [],
                ["", "System Architecture Cost, INR"],
                [],
                ["", "Parameter", "Y1", "Y2(P)", "Y3(P)",],
                ["", "Server", Number(Number(data.resultList[i].itmanagementdata.n15).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o15).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.p15).toFixed(0))],
                ["", "Network Equipment", Number(Number(data.resultList[i].itmanagementdata.n16).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o16).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.p16).toFixed(0))],
                ["", "Database", Number(Number(data.resultList[i].itmanagementdata.n17).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o17).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.p17).toFixed(0))],
                ["", "Total Cost", Number(Number(data.resultList[i].itmanagementdata.n18).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o18).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.p18).toFixed(0))],
                [],
                ["", "Data Storage Capacity"],
                [],
                ["", "Parameter", "Y1", "Y2(P)", "Y3(P)",],
                ["", "Daily Transaction", Number(Number(data.resultList[i].itmanagementdata.m4).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.n4).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o4).toFixed(0))],
                ["", "Required Capacity, GB", Number(Number(data.resultList[i].itmanagementdata.m7).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.n7).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o7).toFixed(0))],
                [],
                ["", "Projected Value Earned, INR"],
                [],
                ["", "Parameter", "Y1", "Y2(P)", "Y3(P)",],
                ["", "Value Earned, INR", Number(Number(data.resultList[i].itmanagementdata.m60).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.n60).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o60).toFixed(0))],
                ["", "Tech Cost, INR", Number(Number(data.resultList[i].itmanagementdata.m61).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.n61).toFixed(0)), Number(Number(data.resultList[i].itmanagementdata.o61).toFixed(0))],
                [],
                ["", "Development & Other Cost, INR"],
                [],
                ["", "Parameter", "Y1",],
                ["", "Scalability & Performance", Number(Number(data.resultList[i].itmanagementdata.m21).toFixed(0))],
                ["", "Platform Development", Number(Number(data.resultList[i].itmanagementdata.m22).toFixed(0))],
                ["", "Compliances", Number(Number(data.resultList[i].itmanagementdata.m23).toFixed(0))],
                ["", "System", Number(Number(data.resultList[i].itmanagementdata.m24).toFixed(0))],
                ["", "R&D", Number(Number(data.resultList[i].itmanagementdata.m25).toFixed(0))],
                ["", "Pilot Projects", Number(Number(data.resultList[i].itmanagementdata.m26).toFixed(0))],
                ["", "Continous Improvements", Number(Number(data.resultList[i].itmanagementdata.m27).toFixed(0))],
                ["", "Training & Development", Number(Number(data.resultList[i].itmanagementdata.m28).toFixed(0))],
                ["", "Total Cost", Number(Number(data.resultList[i].itmanagementdata.m29).toFixed(0))],
                [],
                ["", "KPI", ""],
                [],
                ["", "Parameter", "Input"],
                ["", "Uptime", (Number((Number(data.resultList[i].itmanagementdata.m30) * 100).toFixed(0)))],
                ["", "Daily transaction handling capacity", (Number(Number(data.resultList[i].itmanagementdata.m31).toFixed(0)))],
                ["", "Compliance timeline, months", (Number(Number(data.resultList[i].itmanagementdata.q45).toFixed(0)))],
                ["", "Minimum development time, months", (Number(Number(data.resultList[i].itmanagementdata.q43).toFixed(0)))],
                ["", "Maximum development time, months", (Number(Number(data.resultList[i].itmanagementdata.q42).toFixed(0)))],
                ["", "Performance", (Number((Number(data.resultList[i].itmanagementdata.m56) * 100).toFixed(0)))],
                ["", "Security", (Number((Number(data.resultList[i].itmanagementdata.n56) * 100).toFixed(0)))],
                [],
                ["", "Thinking Ability, %", ""],
                [],
                ["", "Parameter", "Input"],
                ["", "System Architecture", data.resultList[i].itmanagementdata.af103 == 0 ? "-" : Number((Number(data.resultList[i].itmanagementdata.af103) * 100).toFixed(0))],
                ["", "Software Development", data.resultList[i].itmanagementdata.af104 == 0 ? "-" : Number((Number(data.resultList[i].itmanagementdata.af104) * 100).toFixed(0))],
                ["", "Security", data.resultList[i].itmanagementdata.af105 == 0 ? "-" : Number((Number(data.resultList[i].itmanagementdata.af105) * 100).toFixed(0))],
                ["", "Innovation", data.resultList[i].itmanagementdata.af106 == 0 ? "-" : Number((Number(data.resultList[i].itmanagementdata.af106) * 100).toFixed(0))],


            ]
            this.excelAllData.push(this.itExcelFormat)
        }

        this.excelSheetDesign('itmanagement', this.excelAllData, data.resultList.length, this.itColName);

    }

    excelSheetDesign(gamename: string, excelAllData: any, attempnumber: any, columnname: any) {

        
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('Report');
        let cellstyle = {
            name: 'Arial',
            size: 11,
            bold: true,
            color: { argb: 'FFFFFF' }
        }
        for (let i = 0; i < attempnumber; i++) {
            excelAllData[i].forEach((d: any) => {
                let row = worksheet.addRow(d);
                if (this.headingCell.includes(d[1])) {
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
                    for (let colNumber = 2; colNumber <= 5; colNumber++) {
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
                        row.font = this.cellStyle1;
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