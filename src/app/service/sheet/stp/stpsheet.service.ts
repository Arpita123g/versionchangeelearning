import { Injectable } from '@angular/core';
import { CommonsheetdesignService } from '../sheetdesign/commonsheetdesign.service';
import { ApiService } from '../../backendgameapi/api.service';

@Injectable({
  providedIn: 'root'
})
export class StpsheetService extends  CommonsheetdesignService {
  constructor(
    private _api: ApiService) {
    super();
  }
  excelalldata: any = [];
  stpexcelformat:any = [];
  stpgamecolname = [
    "Phase 1", "Product 1 Launch", "Design", "Performance", "Battery Life", "Premium Camera", "Extra Memory",
    "Premium Display", "Durable Screen", "Security", "Projected Sales, Mn units", "Price, INR ", "Product 2 Launch",
    "Promotion, Mn INR", "Packaging", "Repairability & Services", "Recycling", "Retail", "Online", "Specialist Stores",
    "Phase 2", "Phase 3", "TC", "TG", "IT", "NG", "ST", "EM", "TC P1", "TC P2", "TG Alpha", "TG Beta", "TG Gamma","Recyclying Cost",
    "IT Delta", "IT Epsilon", "NG Zeta", "NG Theta", "ST Sigma", "EM Omega", "Revenue", "Variable Cost", "Gross Profit", "Production Line Cost + Update Cost",
    "Administration Cost", "Market Research Cost", "Promotion Cost", "Channel Cost", "Packaging Cost", "Recycling Cost",
    "Repairability Cost", "Operating Profit/Loss", "Market Share", "Revenue, Mn INR", "Operating Profit/Loss, Mn INR", "Operating Margin", "Positioning"
  ];

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
           if (gamename == "stpgame") {
            this.createExcelReportforstpGame(data);

          }
        }
      })

  }
  createExcelReportforstpGame(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.stpexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Phase 1", ""],
        ["", "Product 1 Launch", data.resultList[i].cj8 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].cj9 == "" ? "-" : data.resultList[i].cj9],
        ["", "Performance", data.resultList[i].cj10 == "" ? "-" : Number(data.resultList[i].cj10).toFixed(0)],
        ["", "Battery Life", data.resultList[i].cj11 == "" ? "-" : Number(data.resultList[i].cj11).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].cj12 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].cj13 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].cj14 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].cj15 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].cj16 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].cj17 == "" ? "-" : Number(data.resultList[i].cj17).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].cj18 == "" ? "-" : Number(data.resultList[i].cj18).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].cj8 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].ck9 == "" ? "-" : data.resultList[i].ck9],
        ["", "Performance", data.resultList[i].ck10 == "" ? "-" : Number(data.resultList[i].ck10).toFixed(0)],
        ["", "Battery Life", data.resultList[i].ck11 == "" ? "-" : Number(data.resultList[i].ck11).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].ck12 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].ck13 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].ck14 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].ck15 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].ck16 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].ck17 == "" ? "-" : Number(data.resultList[i].ck17).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].ck18 == "" ? "-" : Number(data.resultList[i].ck18).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].cj20 == "" ? "-" : Number(data.resultList[i].cj20).toFixed(0)],
        ["", "Packaging", data.resultList[i].stpgamedata.CJ125],
        ["", "Repairability & Services", data.resultList[i].stpgamedata.CJ126],
        ["", "Recycling", data.resultList[i].stpgamedata.CJ127],
        ["", "Retail", data.resultList[i].cj35 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].cj36 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].cj37 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Phase 2", ""],
        ["", "Product 1 Launch", data.resultList[i].cj48 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].cj49 == "" ? "-" : data.resultList[i].cj49],
        ["", "Performance", data.resultList[i].cj50 == "" ? "-" : Number(data.resultList[i].cj50).toFixed(0)],
        ["", "Battery Life", data.resultList[i].cj51 == "" ? "-" : Number(data.resultList[i].cj51).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].cj52 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].cj53 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].cj54 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].cj55 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].cj56 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].cj57 == "" ? "-" : Number(data.resultList[i].cj57).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].cj58 == "" ? "-" : Number(data.resultList[i].cj58).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].ck48 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].ck49 == "" ? "-" : data.resultList[i].ck49],
        ["", "Performance", data.resultList[i].ck50 == "" ? "-" : Number(data.resultList[i].ck50).toFixed(0)],
        ["", "Battery Life", data.resultList[i].ck51 == "" ? "-" : Number(data.resultList[i].ck51).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].ck52 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].ck53 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].ck54 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].ck55 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].ck56 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].ck57 == "" ? "-" : Number(data.resultList[i].ck57).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].ck58 == "" ? "-" : Number(data.resultList[i].ck58).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].cj60 == "" ? "-" : Number(data.resultList[i].cj60).toFixed(0)],
        ["", "Packaging", data.resultList[i].stpgamedata.CJ128],
        ["", "Repairability & Services", data.resultList[i].stpgamedata.CJ129],
        ["", "Recycling", data.resultList[i].stpgamedata.CJ130],
        ["", "Retail", data.resultList[i].cj75 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].cj76 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].cj77 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Phase 3", ""],
        ["", "Product 1 Launch", data.resultList[i].cj88 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].cj89 == "" ? "-" : data.resultList[i].cj89],
        ["", "Performance", data.resultList[i].cj90 == "" ? "-" : Number(data.resultList[i].cj90).toFixed(0)],
        ["", "Battery Life", data.resultList[i].cj91 == "" ? "-" : Number(data.resultList[i].cj91).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].cj92 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].cj93 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].cj94 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].cj95 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].cj96 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].cj97 == "" ? "-" : Number(data.resultList[i].cj97).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].cj98 == "" ? "-" : Number(data.resultList[i].cj98).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].ck88 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].ck89 == "" ? "-" : data.resultList[i].ck89],
        ["", "Performance", data.resultList[i].ck90 == "" ? "-" : Number(data.resultList[i].ck90).toFixed(0)],
        ["", "Battery Life", data.resultList[i].ck91 == "" ? "-" : Number(data.resultList[i].ck91).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].ck92 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].ck93 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display",data.resultList[i].ck94 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].ck95 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Security", data.resultList[i].ck96 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].ck97 == "" ? "-" : Number(data.resultList[i].ck97).toFixed(0)],
        ["", "Price, INR ", data.resultList[i].ck98 == "" ? "-" : Number(data.resultList[i].ck98).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].cj100 == "" ? "-" : Number(data.resultList[i].cj100).toFixed(0)],
        ["", "Packaging", data.resultList[i].stpgamedata.CJ131],
        ["", "Repairability & Services", data.resultList[i].stpgamedata.CJ132],
        ["", "Recycling", data.resultList[i].stpgamedata.CJ133],
        ["", "Retail", data.resultList[i].cj115 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].cj116 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].cj117 == 1 ? "Implemented" : "Not Implemented"],
        [],
        ["","Company Sales & Market Share, Phase 3",""],
        [],
        ["", "Parameter", "Sales, Mn units", "Market Share"],
        ["", "TC",  Number(data.resultList[i].stpgamedata.AW136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.AW137)*100).toFixed(2))+"%",],
        ["", "TG",  Number(data.resultList[i].stpgamedata.AX136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.AX137)*100).toFixed(2))+"%",],
        ["", "IT",  Number(data.resultList[i].stpgamedata.AY136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.AY137)*100).toFixed(2))+"%",],
        ["", "NG",  Number(data.resultList[i].stpgamedata.AZ136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.AZ137)*100).toFixed(2))+"%",],
        ["", "ST",  Number(data.resultList[i].stpgamedata.BA136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.BA137)*100).toFixed(2))+"%",],
        ["", "ST",  Number(data.resultList[i].stpgamedata.BB136).toFixed(2), Number((Number(data.resultList[i].stpgamedata.BB137)*100).toFixed(2))+"%",],
        [],
        ["","Company Market Share, Phase 1 to 3",""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2","Phase 3"],
        ["", "TC",  Number((Number(data.resultList[i].stpgamedata.C137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.W137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AW137)*100).toFixed(2))+"%",],
        ["", "TG",  Number((Number(data.resultList[i].stpgamedata.D137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.X137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AX137)*100).toFixed(2))+"%",],
        ["", "IT",  Number((Number(data.resultList[i].stpgamedata.E137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.Y137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AY137)*100).toFixed(2))+"%",],
        ["", "NG",  Number((Number(data.resultList[i].stpgamedata.F137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.Z137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AZ137)*100).toFixed(2))+"%",],
        ["", "ST",  Number((Number(data.resultList[i].stpgamedata.G137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AA137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.BA137)*100).toFixed(2))+"%",],
        ["", "ST",  Number((Number(data.resultList[i].stpgamedata.H137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.AB137)*100).toFixed(2))+"%", Number((Number(data.resultList[i].stpgamedata.BB137)*100).toFixed(2))+"%",],
        [],
        ["","Product Market Share, Phase 1 to 3",""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2","Phase 3"],
        ["", "TC P1",           Number((Number(data.resultList[i].stpgamedata.C133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.W133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AW133)*100).toFixed(0))+"%",],
        ["", "TC P2",           Number((Number(data.resultList[i].stpgamedata.D133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.X133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AX133)*100).toFixed(0))+"%",],
        ["", "TG Alpha",     Number((Number(data.resultList[i].stpgamedata.E133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.Y133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AY133)*100).toFixed(0))+"%",],
        ["", "TG Beta",       Number((Number(data.resultList[i].stpgamedata.F133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.Z133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AZ133)*100).toFixed(0))+"%",],
        ["", "TG Gamma",     Number((Number(data.resultList[i].stpgamedata.G133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AA133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BA133)*100).toFixed(0))+"%",],
        ["", "IT Delta",     Number((Number(data.resultList[i].stpgamedata.H133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AB133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BB133)*100).toFixed(0))+"%",],
        ["", "IT Epsilon", Number((Number(data.resultList[i].stpgamedata.I133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AC133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BC133)*100).toFixed(0))+"%",],
        ["", "NG Zeta",       Number((Number(data.resultList[i].stpgamedata.J133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AD133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BD133)*100).toFixed(0))+"%",],
        ["", "NG Theta",     Number((Number(data.resultList[i].stpgamedata.K133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AE133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BE133)*100).toFixed(0))+"%",],
        ["", "ST Sigma",     Number((Number(data.resultList[i].stpgamedata.L133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AF133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BF133)*100).toFixed(0))+"%",],
        ["", "EM Omega",     Number((Number(data.resultList[i].stpgamedata.M133)*100).toFixed(0))+ "%", Number((Number(data.resultList[i].stpgamedata.AG133)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BG133)*100).toFixed(0))+"%",],
        [],
        ["","Company Operating Margins, Phase 1 to 3",""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2","Phase 3"],
        ["", "TC", Number((Number(data.resultList[i].stpgamedata.C156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.W156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AW156)*100).toFixed(0))+"%",],
        ["", "TG", Number((Number(data.resultList[i].stpgamedata.D156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.X156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AX156)*100).toFixed(0))+"%",],
        ["", "IT", Number((Number(data.resultList[i].stpgamedata.E156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.Y156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AY156)*100).toFixed(0))+"%",],
        ["", "NG", Number((Number(data.resultList[i].stpgamedata.F156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.Z156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AZ156)*100).toFixed(0))+"%",],
        ["", "ST", Number((Number(data.resultList[i].stpgamedata.G156*100)).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AA156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BA156)*100).toFixed(0))+"%",],
        ["", "ST", Number((Number(data.resultList[i].stpgamedata.H156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.AB156)*100).toFixed(0))+"%", Number((Number(data.resultList[i].stpgamedata.BB156*100)).toFixed(0))+"%",],
        [],
        ["","Financial Statement, Mn INR, Phase 3",""],
        ["", "",                                   "TC", "TG", "IT","NG","ST","EM"],
        ["", "Revenue",                            Number(data.resultList[i].stpgamedata.AW144).toFixed(0), Number(data.resultList[i].stpgamedata.AX144).toFixed(0), Number(data.resultList[i].stpgamedata.AY144).toFixed(0), Number(data.resultList[i].stpgamedata.AZ144).toFixed(0),Number(data.resultList[i].stpgamedata.BA144).toFixed(0),Number(data.resultList[i].stpgamedata.BB144).toFixed(0),],
        ["", "Variable Cost",                      Number(data.resultList[i].stpgamedata.AW145).toFixed(0), Number(data.resultList[i].stpgamedata.AX145).toFixed(0), Number(data.resultList[i].stpgamedata.AY145).toFixed(0), Number(data.resultList[i].stpgamedata.AZ145).toFixed(0),Number(data.resultList[i].stpgamedata.BA145).toFixed(0),Number(data.resultList[i].stpgamedata.BB145).toFixed(0),],
        ["", "Gross Profit",                       Number(data.resultList[i].stpgamedata.AW146).toFixed(0), Number(data.resultList[i].stpgamedata.AX146).toFixed(0), Number(data.resultList[i].stpgamedata.AY146).toFixed(0), Number(data.resultList[i].stpgamedata.AZ146).toFixed(0),Number(data.resultList[i].stpgamedata.BA146).toFixed(0),Number(data.resultList[i].stpgamedata.BB146).toFixed(0),],
        ["", "Production Line Cost + Update Cost", Number(data.resultList[i].stpgamedata.AW147).toFixed(0), Number(data.resultList[i].stpgamedata.AX147).toFixed(0), Number(data.resultList[i].stpgamedata.AY147).toFixed(0), Number(data.resultList[i].stpgamedata.AZ147).toFixed(0),Number(data.resultList[i].stpgamedata.BA147).toFixed(0),Number(data.resultList[i].stpgamedata.BB147).toFixed(0),],
        ["", "Administration Cost",                Number(data.resultList[i].stpgamedata.AW148).toFixed(0), Number(data.resultList[i].stpgamedata.AX148).toFixed(0), Number(data.resultList[i].stpgamedata.AY148).toFixed(0), Number(data.resultList[i].stpgamedata.AZ148).toFixed(0),Number(data.resultList[i].stpgamedata.BA148).toFixed(0),Number(data.resultList[i].stpgamedata.BB148).toFixed(0),],
        ["", "Market Research Cost",               Number(data.resultList[i].stpgamedata.AW149).toFixed(0), Number(data.resultList[i].stpgamedata.AX149).toFixed(0), Number(data.resultList[i].stpgamedata.AY149).toFixed(0), Number(data.resultList[i].stpgamedata.AZ149).toFixed(0),Number(data.resultList[i].stpgamedata.BA149).toFixed(0),Number(data.resultList[i].stpgamedata.BB149).toFixed(0),],
        ["", "Promotion Cost",                     Number(data.resultList[i].stpgamedata.AW150).toFixed(0), Number(data.resultList[i].stpgamedata.AX150).toFixed(0), Number(data.resultList[i].stpgamedata.AY150).toFixed(0), Number(data.resultList[i].stpgamedata.AZ150).toFixed(0),Number(data.resultList[i].stpgamedata.BA150).toFixed(0),Number(data.resultList[i].stpgamedata.BB150).toFixed(0),],
        ["", "Channel Cost",                       Number(data.resultList[i].stpgamedata.AW151).toFixed(0), Number(data.resultList[i].stpgamedata.AX151).toFixed(0), Number(data.resultList[i].stpgamedata.AY151).toFixed(0), Number(data.resultList[i].stpgamedata.AZ151).toFixed(0),Number(data.resultList[i].stpgamedata.BA151).toFixed(0),Number(data.resultList[i].stpgamedata.BB151).toFixed(0),],
        ["", "Packaging Cost",                     Number(data.resultList[i].stpgamedata.AW152).toFixed(0), Number(data.resultList[i].stpgamedata.AX152).toFixed(0), Number(data.resultList[i].stpgamedata.AY152).toFixed(0), Number(data.resultList[i].stpgamedata.AZ152).toFixed(0),Number(data.resultList[i].stpgamedata.BA152).toFixed(0),Number(data.resultList[i].stpgamedata.BB152).toFixed(0),],
        ["", "Recyclying Cost",                    Number(data.resultList[i].stpgamedata.AW153).toFixed(0), Number(data.resultList[i].stpgamedata.AX153).toFixed(0), Number(data.resultList[i].stpgamedata.AY153).toFixed(0), Number(data.resultList[i].stpgamedata.AZ153).toFixed(0),Number(data.resultList[i].stpgamedata.BA153).toFixed(0),Number(data.resultList[i].stpgamedata.BB153).toFixed(0),],
        ["", "Repairability Cost",                 Number(data.resultList[i].stpgamedata.AW154).toFixed(0), Number(data.resultList[i].stpgamedata.AX154).toFixed(0), Number(data.resultList[i].stpgamedata.AY154).toFixed(0), Number(data.resultList[i].stpgamedata.AZ154).toFixed(0),Number(data.resultList[i].stpgamedata.BA154).toFixed(0),Number(data.resultList[i].stpgamedata.BB154).toFixed(0),],
        ["", "Operating Profit/Loss",              Number(data.resultList[i].stpgamedata.AW155).toFixed(0), Number(data.resultList[i].stpgamedata.AX155).toFixed(0), Number(data.resultList[i].stpgamedata.AY155).toFixed(0), Number(data.resultList[i].stpgamedata.AZ155).toFixed(0),Number(data.resultList[i].stpgamedata.BA155).toFixed(0),Number(data.resultList[i].stpgamedata.BB155).toFixed(0),],
        [],
        ["", "KPI", ""],
        ["", "Parameter", "Output"],
        ["", "Market Share", data.resultList[i].stpgamedata.AW195 == "" ? "-": Number((Number(data.resultList[i].stpgamedata.AW195) * 100).toFixed(0)) + "%"],
        ["", "Revenue, Mn INR", data.resultList[i].stpgamedata.AW196 == "" ? "-": Number(data.resultList[i].stpgamedata.AW196).toFixed(0)],
        ["", "Operating Profit/Loss, Mn INR", data.resultList[i].stpgamedata.AW197 == "" ? "-": Number(data.resultList[i].stpgamedata.AW197).toFixed(0)],
        ["", "Operating Margin", data.resultList[i].stpgamedata.AW198 == "" ? "-": Number((Number(data.resultList[i].stpgamedata.AW198)*100).toFixed(0)) + "%"],
        [],
        ["", "Thinking Ability", ""],
        ["", "Parameter", "Score"],
        ["", "Positioning", data.resultList[i].stpgamedata.CJ124 == "" ? '-' : Number((Number(data.resultList[i].stpgamedata.CJ124) * 100).toFixed(0)) + "%"],
      ]
      this.excelalldata.push(this.stpexcelformat)
    }
    this.excelSheetDesignFunction('stpgame', 'stp report', this.excelalldata, data.resultList.length,this.stpgamecolname);
  }
}
