import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export abstract class CommonsheetdesignService {
  greencellcolor: any = {}
  redcellcolor: any = {}
  yellowcellcolor: any = {}
  constructor() { }

  excelSheetDesignFunction(name: string, gamename: string, exceldata: any, attempnumber: any,columnname:any) {
    this.greencellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '90EE90' },
      bgColor: { argb: 'FF0000FF' }
    }
    this.redcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ff0000' },
      bgColor: { argb: 'FF0000FF' }
    }

    this.yellowcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' },
      bgColor: { argb: 'FF0000FF' }
    }

    let cellstyle = {
      name: 'Arial',
      size: 11,
      bold: true,
      color: { argb: 'FFFFFF' }
    }
    let cellstyle1 = {
      name: 'Arial',
      size: 11,
      bold: true,
      color: { argb: '00000000' }
    }

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('report');

    for (let i = 0; i < attempnumber; i++) {
      exceldata[i].forEach((d: any) => {
        let row = worksheet.addRow(d);

        for (let colNumber = 1; colNumber <= 8; colNumber++) {
          const cell = row.getCell(colNumber);

          // Check the value in the cell and apply background color accordingly
          if (cell.value == 'P') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'C3F9C3 ' }, // Pink color
            };
          } else if (cell.value == 'Nu') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFD77E' }, // Green color
            };
          } else if (cell.value == 'N') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'f7cac9' }, // Yellow color
            };
          } else if (cell.value == ' Kabir') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Anne') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Rajas') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Priya') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Neha') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Rajat') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          }
        }


        if (name == 'business') {
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'consumer') {
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'logistics') {
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'changemanagement') {
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'promotion') {
          if ((d[1] == 'Website ') || (d[1] == 'Social Commerce ') || (d[1] == 'Modern Trade ') || (d[1] == 'Retailers ')) {
            this.fillcolorincolumnnameforpromotion(row);
          } else if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }

        } else if (name == 'portfolio') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        }
        else if (name == 'valuechain') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }

        }
        else if (name == 'cvpanalysis') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'accountinggame') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'accountingarabic') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        }
        else if (name == 'pricinggame') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'mergersacquisition') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'hrplanning') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnameforHrp(row);
          }

        }
        else if (name == 'designthinking') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        }
        else if (name == 'crmgame') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
        } else if (name == 'innovation') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
        }
        else if (name == 'orderingbasics') {
          if (
            columnname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
        }
        else if (name == 'stpgame') {
          if (
            columnname.includes(d[1])) {
              this.fillcolorincolumnnamestp(row);
            }
        }
        else if (name == 'ecommercegame') {
          if (
            columnname.includes(d[1])) {
              this.fillcolorincolumnnameforpromotion(row);
            }
        }
        else if (name == 'cbgame') {
          if (
            columnname.includes(d[1])) {
              this.fillcolorincolumnnameforCapital(row);
            }
        }
        
        else if (name == 'fsa') {
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
            if ((row.getCell(2).value == "Decisions") || (row.getCell(2).value == "Investment") || (row.getCell(2).value == "Ratio Analysis Score, %")) {
              worksheet.mergeCells(`B${row.number}:C${row.number + 1}`);
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
          }
        } else if (name == 'salestarget') {
          if ((d[1] == 'Modern Trade') || (d[1] == 'Retail') || (d[1] == 'HoReCa')) {
            this.fillcolorincolumnnameforpromotion(row);
          } else if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
          if (columnname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        }


     
        if ((d[1] == "Kabir ") || (d[1] == "Anne ") ||
          (d[1] == "Rajas ") || (d[1] == "Priya ") || (d[1] == "Neha ") || (d[1] == "Rajat ")
        ) {
          for (let colNumber = 2; colNumber <= 6; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
          }
        }
        let logisvalue = row.getCell(2);
        if ((logisvalue.value == "Decisions") ||
          (logisvalue.value == "Income Statement, INR") || (logisvalue.value == "Operational Cost, INR") || (logisvalue.value == "Cash Balance, INR") ||
          (logisvalue.value == "Cash Balance, mn INR") || (logisvalue.value == "Sales, mn units") || (logisvalue.value == "Production, mn units") ||
          (logisvalue.value == "KPI") || (logisvalue.value == "accountingarabic") || (logisvalue.value == "Decisions") ||
          (logisvalue.value == "Market, %") || (logisvalue.value == "Market Units, Mn") || (logisvalue.value == "Thinking Ability, %")
          || (logisvalue.value == "Market %") || (logisvalue.value == "Revenue, INR") || (logisvalue.value == "Turnaround Time, days")
          || (logisvalue.value == "Inbound Logistics TAT, days") || (logisvalue.value == "Inbound Logistics Cost, INR") || (logisvalue.value == "Outbound Logistics Cost, INR")
          || (logisvalue.value == "Employee Performance Level") || (logisvalue.value == "Group KPI") || (logisvalue.value == "Unutilized Time of Employees, minutes")
          || (logisvalue.value == "Budget, INR") || (logisvalue.value == "Employee Working Relations")
          || (logisvalue.value == "Product Sales, units") || (logisvalue.value == "Segment Sales, units")
          || (logisvalue.value == "Platform Sales, units")
          || (logisvalue.value == "Operating Income, INR") || (logisvalue.value == "Promotion Cost, INR")
          || (logisvalue.value == "Ratio Analysis Score, %")
          || (logisvalue.value == "Channel Sales, k INR") || (logisvalue.value == "Segment Sales, K INR") || (logisvalue.value == "Product Wise Sales, K INR") || (logisvalue.value == "Sales Cost, k INR")
          || (logisvalue.value == "Income Statement, k INR") || (logisvalue.value == "Channel Effectiveness")
          || (logisvalue.value == "Phase Measures") || (logisvalue.value == "Capital Invested in Securities, k INR") || (logisvalue.value == "Capital, k INR")
          || (logisvalue.value == "Combined Measures")
          || (logisvalue.value == "KPI company-wide") || (logisvalue.value == "KPI product level") || (logisvalue.value == "Operating Income, mn INR")
          || (logisvalue.value == "Break even point") || (logisvalue.value == "CVP Analysis, INR") || (logisvalue.value == "Production, units")
          || (logisvalue.value == "Sales, units")
          || (logisvalue.value == "Scores") || (logisvalue.value == "Investment")
          || (logisvalue.value == "Price, INR") || (logisvalue.value == "Sales, seats") || (logisvalue.value == "Target") || (logisvalue.value == "Proposed Structure")
          || (logisvalue.value == "Earned Value") || (logisvalue.value == "Stakeholder view") || (logisvalue.value == "Cost, K INR")
          || (logisvalue.value == "Thinking Ability") || (logisvalue.value == "Employees Count") || (logisvalue.value == "Income Statement, INR Million") || (logisvalue.value == "Lead Pipeline Count")
          || (logisvalue.value == "Sales Conversion Chances") || (logisvalue.value == "Resource Allocation, hours") || (logisvalue.value == "Value Creation, INR") || (logisvalue.value == "KPI Variation")
          || (logisvalue.value == "Sales units") || (logisvalue.value == "Cash balance, k INR") || (logisvalue.value == "Income Statement, k INR")
          || (logisvalue.value == "Quantity, units") || (logisvalue.value == "Cost, INR  ") || (logisvalue.value == "Financial Statement, Mn INR, Phase 3") || (logisvalue.value == "Company Operating Margins, Phase 1 to 3")
          || (logisvalue.value == "Product Market Share, Phase 1 to 3")  || (logisvalue.value == "Company Market Share, Phase 1 to 3") || (logisvalue.value == "Company Sales & Market Share, Phase 3")
          || (logisvalue.value == "Website Experience") || (logisvalue.value == "Promotion Distribution") || (logisvalue.value == "Product Margins")
          || (logisvalue.value == "Present Value of Cash Stream, INR million") || (logisvalue.value == "Present Value of Divisonal Cash Stream, INR million") || (logisvalue.value == "Budget, INR million")
          || (logisvalue.value == "Projects")
        ) {
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

        if ((logisvalue.value == "Parameters") || (logisvalue.value == "Score") || (logisvalue.value == "Summary")) {
          for (let cellNumber of [2, 3]) {
            row.getCell(cellNumber).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '00000000' }, // Yellow color
              bgColor: { argb: 'FF0000FF' }
            };
            // 
          }
          row.font = cellstyle; // row.getCell(1).font = cellstyle;
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
            row.font = cellstyle1;
          }
        }
      });
    }

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, gamename + '.xlsx');
    })
  }

  fillcolorincolumnnamecrm(row: any) {
    for (let colNumber = 2; colNumber <= 4; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }
  fillcolorincolumnnamestp(row: any) {
    for (let colNumber = 2; colNumber <= 8; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }
  fillcolorincolumnname(row: any) {
    for (let colNumber = 2; colNumber <= 3; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }

  fillcolorincolumnnameforpromotion(row: any) {

    for (let colNumber = 2; colNumber <= 5; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }

  fillcolorincolumnnameforCapital(row: any) {

    for (let colNumber = 2; colNumber <= 10; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }

  fillcolorincolumnnameforHrp(row: any) {

    for (let colNumber = 2; colNumber <= 9; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' },
      };
    }
  }

}
