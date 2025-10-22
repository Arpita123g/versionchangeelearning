import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { ApiService } from '../../backendgameapi/api.service';

@Injectable({
  providedIn: 'root'
})
export class HrmsheetService {
  constructor(
    private _api: ApiService) {

  }
  kpiexcelalldata: any = [];
  talentacqexcelalldata: any = [];
  talentmngexcelalldata: any = [];
  organaizationexcelalldata: any = [];
  kpiexcelformat: any = [];
  talentacqexcelformat: any = [];
  talentmngexcelformat: any = [];
  organaizationexcelformat: any = [];
  // stpgamecolname = [
  //   "Phase 1", "Product 1 Launch",];

  stpgamecolname = [
    "Top Management", "Senior Management", "Junior Management", "Overtime Cost", "Budget for Year", "Budget Overrun ",
    "Budget Penalty Carried over next year", "Employee Satisfaction Score", "Stakeholder Satisfaction Score", "Score",
    "Talent Acquisition", "Talent Management", "Organization & Budgets", "Conflict", "Top Management, Permanent", "Senior Management, Permanent",
    "Junior Management, Permanent", "Junior Management, Outsourced", "Top Management, Newly Hired", "Senior Management, Newly Hired",
    "Junior Management, Newly Hired", "Top Management, Voluntary Resignation", "Senior Management, Voluntary Resignation",
    "Junior Management, Voluntary Resignation", "Top Management, Firing", "Senior Management, Firing", "Junior Management, Firing",
    "Top Management, Total Employees", "Senior Management, Total Employees", "Junior Management, Total Employees", "Total Number of Employees",
    "Top Management, Channel Cost", "Senior Management, Channel Cost", "Junior Management, Channel Cost", "Top Management, Vendor Cost",
    "Senior Management, Vendor Cost", "Junior Management, Outsourcing Cost", "Total Hiring Cost", "Total Firing Cost", "Total Salary Cost of Permanent Employee",
    "Top Management, Attrition Rate", "Senior Management, Attrition Rate", "Junior Management, Attrition Rate", "Top Management, Offer Dropouts",
    "Senior Management, Offer Dropouts", "Junior Management, Offer Dropouts", "Top Management, Recruitment Metrics", "Senior Management, Recruitment Metrics",
    "Junior Management, Recruitment Metrics"
  ];
  talentManagementKpiReportperforlevinc: any = [
    ['e6', 'f6', 'g6', 'h6', 'e7', 'f7', 'g7', 'h7', 'e8', 'f8', 'g8', 'h8',], // Round 0  
    ['e9', 'f9', 'g9', 'h9', 'e10', 'f10', 'g10', 'h10', 'e11', 'f11', 'g11', 'h11',], // Round 1
    ['e12', 'f12', 'g12', 'h12', 'e13', 'f13', 'g13', 'h13', 'e14', 'f14', 'g14', 'h14',],  // Round 2
    ['e15', 'f15', 'g15', 'h15', 'e16', 'f16', 'g16', 'h16', 'e17', 'f17', 'g17', 'h17',],  // Round 3
    ['e18', 'f18', 'g18', 'h18', 'e19', 'f19', 'g19', 'h19', 'e20', 'f20', 'g20', 'h20',],  // Round 4
    ['e21', 'f21', 'g21', 'h21', 'e22', 'f22', 'g22', 'h22', 'e23', 'f23', 'g23', 'h23',],  // Round 5
  ];
  talentManagementKpiReportprodlev: any = [
    ['e29', 'f29', 'g29', 'h29', 'e30', 'f30', 'g30', 'h30', 'e31', 'f31', 'g31', 'h31'], // Round 0
    ['e32', 'f32', 'g32', 'h32', 'e33', 'f33', 'g33', 'h33', 'e34', 'f34', 'g34', 'h34'], // Round 1
    ['e35', 'f35', 'g35', 'h35', 'e36', 'f36', 'g36', 'h36', 'e37', 'f37', 'g37', 'h37'], // Round 2
    ['e38', 'f38', 'g38', 'h38', 'e39', 'f39', 'g39', 'h39', 'e40', 'f40', 'g40', 'h40'], // Round 3
    ['e41', 'f41', 'g41', 'h41', 'e42', 'f42', 'g42', 'h42', 'e43', 'f43', 'g43', 'h43'], // Round 4
    ['e44', 'f44', 'g44', 'h44', 'e45', 'f45', 'g45', 'h45', 'e46', 'f46', 'g46', 'h46'], // Round 5
  ];
  talentManagementKpiReportstresslev: any = [
    ['e52', 'f52', 'g52', 'h52', 'e53', 'f53', 'g53', 'h53', 'e54', 'f54', 'g54', 'h54'], // Round 0
    ['e55', 'f55', 'g55', 'h55', 'e56', 'f56', 'g56', 'h56', 'e57', 'f57', 'g57', 'h57'], // Round 1
    ['e58', 'f58', 'g58', 'h58', 'e59', 'f59', 'g59', 'h59', 'e60', 'f60', 'g60', 'h60'], // Round 2
    ['e61', 'f61', 'g61', 'h61', 'e62', 'f62', 'g62', 'h62', 'e63', 'f63', 'g63', 'h63'], // Round 3
    ['e64', 'f64', 'g64', 'h64', 'e65', 'f65', 'g65', 'h65', 'e66', 'f66', 'g66', 'h66'], // Round 4
    ['e67', 'f67', 'g67', 'h67', 'e68', 'f68', 'g68', 'h68', 'e69', 'f69', 'g69', 'h69'], // Round 5
  ];
  talentManagementKpiReportbudgetandcost: any = [
    ['e75', 'f75', 'g75', 'h75', 'e76', 'f76', 'g76', 'h76', 'e77', 'f77', 'g77', 'h77', 'e78', 'f78', 'g78', 'h78',], // Round 0
    ['e79', 'f79', 'g79', 'h79', 'e80', 'f80', 'g80', 'h80', 'e81', 'f81', 'g81', 'h81', 'e82', 'f82', 'g82', 'h82',], // Round 1
    ['e83', 'f83', 'g83', 'h83', 'e84', 'f84', 'g84', 'h84', 'e85', 'f85', 'g85', 'h85', 'e86', 'f86', 'g86', 'h86',], // Round 2
    ['e87', 'f87', 'g87', 'h87', 'e88', 'f88', 'g88', 'h88', 'e89', 'f89', 'g89', 'h89', 'e90', 'f90', 'g90', 'h90',], // Round 3
    ['e91', 'f91', 'g91', 'h91', 'e92', 'f92', 'g92', 'h92', 'e93', 'f93', 'g93', 'h93', 'e94', 'f94', 'g94', 'h94',], // Round 4
    ['e95', 'f95', 'g95', 'h95', 'e96', 'f96', 'g96', 'h96', 'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98',], // Round 5
  ];
  talentManagementKpiReportkpis: any = [
    ['e104', 'f104', 'g104', 'h104',  'e105', 'f105', 'g105', 'h105',], // Round 0
    ['e106', 'f106', 'g106', 'h106',  'e107', 'f107', 'g107', 'h107',], // Round 1
    ['e108', 'f108', 'g108', 'h108',  'e109', 'f109', 'g109', 'h109',], // Round 2
    ['e110', 'f110', 'g110', 'h110',  'e111', 'f111', 'g111', 'h111',], // Round 3
    ['e112', 'f112', 'g112', 'h112',  'e113', 'f113', 'g113', 'h113',], // Round 4
    ['e114', 'f114', 'g114', 'h114',  'e115', 'f115', 'g115', 'h115',], // Round 5

  ];
  conflictdata: any = [
    ["e120", "f120"],
    ["e121", "f121"],
    ["e122", "f122"],
    ["e123", "f123"],
    ["e124", "f124"],
  ];
  thinkingablity: any = [
    ['e129','e130','e131','e132'],//0
    ['e129','e130','e131','e132'],//1
    ['e129','e130','e131','e132'],//2
    ['e129','e130','e131','e132'],//3
    ['e129','e130','e131','e132'],//4
    ['e129','e130','e131','e132'],//5
   
  ]
  // talent acquisition ...........
  talentManagementReportemployeebrand: any = [
    ['e6', 'f6', 'g6', 'h6', 'e7', 'f7', 'g7', 'h7', 'e8', 'f8', 'g8', 'h8'], //0 round 
    ['e9', 'f9', 'g9', 'h9', 'e10', 'f10', 'g10', 'h10', 'e11', 'f11', 'g11', 'h11'], //1 round
    ['e12', 'f12', 'g12', 'h12', 'e13', 'f13', 'g13', 'h13', 'e14', 'f14', 'g14', 'h14'], // 2 round
    ['e15', 'f15', 'g15', 'h15', 'e16', 'f16', 'g16', 'h16', 'e17', 'f17', 'g17', 'h17'], // 3 round
    ['e18', 'f18', 'g18', 'h18', 'e19', 'f19', 'g19', 'h19', 'e20', 'f20', 'g20', 'h20'], // 4 round
    ['e21', 'f21', 'g21', 'h21', 'e22', 'f22', 'g22', 'h22', 'e23', 'f23', 'g23', 'h23'], // 5 round
  ];
  talentManagementReportnoemployee: any = [
    [
      'e29', 'f29', 'g29', 'h29', 'e30', 'f30', 'g30', 'h30',
      'e31', 'f31', 'g31', 'h31', 'e32', 'f32', 'g32', 'h32',
      'e33', 'f33', 'g33', 'h33', 'e34', 'f34', 'g34', 'h34',
      'e35', 'f35', 'g35', 'h35', 'e36', 'f36', 'g36', 'h36',
      'e37', 'f37', 'g37', 'h37', 'e38', 'f38', 'g38', 'h38',
      'e39', 'f39', 'g39', 'h39', 'e40', 'f40', 'g40', 'h40',
      'e41', 'f41', 'g41', 'h41', 'e42', 'f42', 'g42', 'h42',
      'e43', 'f43', 'g43', 'h43', 'e44', 'f44', 'g44', 'h44',
      'e45', 'f45', 'g45', 'h45'
    ], // 0 round
    [
      'e46', 'f46', 'g46', 'h46', 'e47', 'f47', 'g47', 'h47',
      'e48', 'f48', 'g48', 'h48', 'e49', 'f49', 'g49', 'h49',
      'e50', 'f50', 'g50', 'h50', 'e51', 'f51', 'g51', 'h51',
      'e52', 'f52', 'g52', 'h52', 'e53', 'f53', 'g53', 'h53',
      'e54', 'f54', 'g54', 'h54', 'e55', 'f55', 'g55', 'h55',
      'e56', 'f56', 'g56', 'h56', 'e57', 'f57', 'g57', 'h57',
      'e58', 'f58', 'g58', 'h58', 'e59', 'f59', 'g59', 'h59',
      'e60', 'f60', 'g60', 'h60', 'e61', 'f61', 'g61', 'h61',
      'e62', 'f62', 'g62', 'h62'
    ], // 1 round
    [
      'e63', 'f63', 'g63', 'h63', 'e64', 'f64', 'g64', 'h64',
      'e65', 'f65', 'g65', 'h65', 'e66', 'f66', 'g66', 'h66',
      'e67', 'f67', 'g67', 'h67', 'e68', 'f68', 'g68', 'h68',
      'e69', 'f69', 'g69', 'h69', 'e70', 'f70', 'g70', 'h70',
      'e71', 'f71', 'g71', 'h71', 'e72', 'f72', 'g72', 'h72',
      'e73', 'f73', 'g73', 'h73', 'e74', 'f74', 'g74', 'h74',
      'e75', 'f75', 'g75', 'h75', 'e76', 'f76', 'g76', 'h76',
      'e77', 'f77', 'g77', 'h77', 'e78', 'f78', 'g78', 'h78',
      'e79', 'f79', 'g79', 'h79'
    ], // 2 round
    [
      'e80', 'f80', 'g80', 'h80', 'e81', 'f81', 'g81', 'h81',
      'e82', 'f82', 'g82', 'h82', 'e83', 'f83', 'g83', 'h83',
      'e84', 'f84', 'g84', 'h84', 'e85', 'f85', 'g85', 'h85',
      'e86', 'f86', 'g86', 'h86', 'e87', 'f87', 'g87', 'h87',
      'e88', 'f88', 'g88', 'h88', 'e89', 'f89', 'g89', 'h89',
      'e90', 'f90', 'g90', 'h90', 'e91', 'f91', 'g91', 'h91',
      'e92', 'f92', 'g92', 'h92', 'e93', 'f93', 'g93', 'h93',
      'e94', 'f94', 'g94', 'h94', 'e95', 'f95', 'g95', 'h95',
      'e96', 'f96', 'g96', 'h96'
    ], // 3 round
    [
      'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98',
      'e99', 'f99', 'g99', 'h99', 'e100', 'f100', 'g100', 'h100',
      'e101', 'f101', 'g101', 'h101', 'e102', 'f102', 'g102', 'h102',
      'e103', 'f103', 'g103', 'h103', 'e104', 'f104', 'g104', 'h104',
      'e105', 'f105', 'g105', 'h105', 'e106', 'f106', 'g106', 'h106',
      'e107', 'f107', 'g107', 'h107', 'e108', 'f108', 'g108', 'h108',
      'e109', 'f109', 'g109', 'h109', 'e110', 'f110', 'g110', 'h110',
      'e111', 'f111', 'g111', 'h111', 'e112', 'f112', 'g112', 'h112',
      'e113', 'f113', 'g113', 'h113'
    ], // 4 round
    [
      'e114', 'f114', 'g114', 'h114', 'e115', 'f115', 'g115', 'h115',
      'e116', 'f116', 'g116', 'h116', 'e117', 'f117', 'g117', 'h117',
      'e118', 'f118', 'g118', 'h118', 'e119', 'f119', 'g119', 'h119',
      'e120', 'f120', 'g120', 'h120', 'e121', 'f121', 'g121', 'h121',
      'e122', 'f122', 'g122', 'h122', 'e123', 'f123', 'g123', 'h123',
      'e124', 'f124', 'g124', 'h124', 'e125', 'f125', 'g125', 'h125',
      'e126', 'f126', 'g126', 'h126', 'e127', 'f127', 'g127', 'h127',
      'e128', 'f128', 'g128', 'h128', 'e129', 'f129', 'g129', 'h129',
      'e130', 'f130', 'g130', 'h130'
    ] // 5 round
  ];
  talentManagementReportgendivtottalemp: any = [
    ['e135', 'f135', 'g135', 'h135', 'e136', 'f136', 'g136', 'h136', 'e137', 'f137', 'g137', 'h137'], // 0 round
    ['e138', 'f138', 'g138', 'h138', 'e139', 'f139', 'g139', 'h139', 'e140', 'f140', 'g140', 'h140'], // 1 round
    ['e141', 'f141', 'g141', 'h141', 'e142', 'f142', 'g142', 'h142', 'e143', 'f143', 'g143', 'h143'], // 2 round
    ['e144', 'f144', 'g144', 'h144', 'e145', 'f145', 'g145', 'h145', 'e146', 'f146', 'g146', 'h146'], // 3 round
    ['e147', 'f147', 'g147', 'h147', 'e148', 'f148', 'g148', 'h148', 'e149', 'f149', 'g149', 'h149'], // 4 round
    ['e150', 'f150', 'g150', 'h150', 'e151', 'f151', 'g151', 'h151', 'e152', 'f152', 'g152', 'h152']  // 5 round
  ];

  talentManagementReportcostofrec: any = [
    [
      'e157', 'f157', 'g157', 'h157',  'e158', 'f158', 'g158', 'h158', 'e159', 'f159', 'g159', 'h159',
      'e160', 'f160', 'g160', 'h160',  'e161', 'f161', 'g161', 'h161', 'e162', 'f162', 'g162', 'h162',
      'e163', 'f163', 'g163', 'h163',  'e164', 'f164', 'g164', 'h164', 'e165', 'f165', 'g165', 'h165'
    ], // 0 round
    [
      'e166', 'f166', 'g166', 'h166', 'e167', 'f167', 'g167', 'h167',  'e168', 'f168', 'g168', 'h168',
      'e169', 'f169', 'g169', 'h169', 'e170', 'f170', 'g170', 'h170',  'e171', 'f171', 'g171', 'h171',
      'e172', 'f172', 'g172', 'h172', 'e173', 'f173', 'g173', 'h173',  'e174', 'f174', 'g174', 'h174'
    ], // 1 round
    [
       'e175', 'f175', 'g175', 'h175',  'e176', 'f176', 'g176', 'h176',  'e177', 'f177', 'g177', 'h177',
       'e178', 'f178', 'g178', 'h178',  'e179', 'f179', 'g179', 'h179',  'e180', 'f180', 'g180', 'h180',
       'e181', 'f181', 'g181', 'h181',  'e182', 'f182', 'g182', 'h182',  'e183', 'f183', 'g183', 'h183'
    ], // 2 round
    [
       'e184', 'f184', 'g184', 'h184',  'e185', 'f185', 'g185', 'h185',  'e186', 'f186', 'g186', 'h186',
       'e187', 'f187', 'g187', 'h187',  'e188', 'f188', 'g188', 'h188',  'e189', 'f189', 'g189', 'h189',
       'e190', 'f190', 'g190', 'h190',  'e191', 'f191', 'g191', 'h191',  'e192', 'f192', 'g192', 'h192'
    ], // 3 round
    [
       'e193', 'f193', 'g193', 'h193', 'e194', 'f194', 'g194', 'h194', 'e195', 'f195', 'g195', 'h195',
       'e196', 'f196', 'g196', 'h196', 'e197', 'f197', 'g197', 'h197', 'e198', 'f198', 'g198', 'h198',
       'e199', 'f199', 'g199', 'h199', 'e200', 'f200', 'g200', 'h200', 'e201', 'f201', 'g201', 'h201'
    ], // 4 round
    [
      'e202', 'f202', 'g202', 'h202',  'e203', 'f203', 'g203', 'h203', 'e204', 'f204', 'g204', 'h204',
      'e205', 'f205', 'g205', 'h205',  'e206', 'f206', 'g206', 'h206', 'e207', 'f207', 'g207', 'h207',
      'e208', 'f208', 'g208', 'h208',  'e209', 'f209', 'g209', 'h209', 'e210', 'f210', 'g210', 'h210'
    ] // 5 round
  ];

  talentManagementReportrecmatrix: any = [
    [
      'e215', 'f215', 'g215', 'h215',  'e216', 'f216', 'g216', 'h216',  'e217', 'f217', 'g217', 'h217',
      'e218', 'f218', 'g218', 'h218',  'e219', 'f219', 'g219', 'h219',  'e220', 'f220', 'g220', 'h220',
      'e221', 'f221', 'g221', 'h221',  'e222', 'f222', 'g222', 'h222',  'e223', 'f223', 'g223', 'h223'
    ], // 0 round
    [
       'e224', 'f224', 'g224', 'h224', 'e225', 'f225', 'g225', 'h225',  'e226', 'f226', 'g226', 'h226',
       'e227', 'f227', 'g227', 'h227', 'e228', 'f228', 'g228', 'h228',  'e229', 'f229', 'g229', 'h229',
       'e230', 'f230', 'g230', 'h230', 'e231', 'f231', 'g231', 'h231',  'e232', 'f232', 'g232', 'h232'
    ], // 1 round
    [
      'e233', 'f233', 'g233', 'h233',  'e234', 'f234', 'g234', 'h234', 'e235', 'f235', 'g235', 'h235',
      'e236', 'f236', 'g236', 'h236',  'e237', 'f237', 'g237', 'h237', 'e238', 'f238', 'g238', 'h238',
      'e239', 'f239', 'g239', 'h239',  'e240', 'f240', 'g240', 'h240', 'e241', 'f241', 'g241', 'h241'
    ], // 2 round
    [
       'e242', 'f242', 'g242', 'h242',  'e243', 'f243', 'g243', 'h243',  'e244', 'f244', 'g244', 'h244',
       'e245', 'f245', 'g245', 'h245',  'e246', 'f246', 'g246', 'h246',  'e247', 'f247', 'g247', 'h247',
       'e248', 'f248', 'g248', 'h248',  'e249', 'f249', 'g249', 'h249',  'e250', 'f250', 'g250', 'h250'
    ], // 3 round
    [
       'e251', 'f251', 'g251', 'h251', 'e252', 'f252', 'g252', 'h252', 'e253', 'f253', 'g253', 'h253',
       'e254', 'f254', 'g254', 'h254', 'e255', 'f255', 'g255', 'h255', 'e256', 'f256', 'g256', 'h256',
       'e257', 'f257', 'g257', 'h257', 'e258', 'f258', 'g258', 'h258', 'e259', 'f259', 'g259', 'h259'
    ], // 4 round
    [
       'e260', 'f260', 'g260', 'h260',  'e261', 'f261', 'g261', 'h261', 'e262', 'f262', 'g262', 'h262',
       'e263', 'f263', 'g263', 'h263',  'e264', 'f264', 'g264', 'h264', 'e265', 'f265', 'g265', 'h265',
       'e266', 'f266', 'g266', 'h266',  'e267', 'f267', 'g267', 'h267', 'e268', 'f268', 'g268', 'h268'
    ] // 5 round
  ];

  //talent management......
  talentManagementReportawarnesslevel: any = [
    ['e6', 'f6', 'g6', 'h6', 'e7', 'f7', 'g7', 'h7', 'e8', 'f8', 'g8', 'h8',], // Round 0  
    ['e9', 'f9', 'g9', 'h9', 'e10', 'f10', 'g10', 'h10', 'e11', 'f11', 'g11', 'h11',], // Round 1
    ['e12', 'f12', 'g12', 'h12', 'e13', 'f13', 'g13', 'h13', 'e14', 'f14', 'g14', 'h14',],  // Round 2
    ['e15', 'f15', 'g15', 'h15', 'e16', 'f16', 'g16', 'h16', 'e17', 'f17', 'g17', 'h17',],  // Round 3
    ['e18', 'f18', 'g18', 'h18', 'e19', 'f19', 'g19', 'h19', 'e20', 'f20', 'g20', 'h20',],  // Round 4
    ['e21', 'f21', 'g21', 'h21', 'e22', 'f22', 'g22', 'h22', 'e23', 'f23', 'g23', 'h23',],  // Round 5
  ];

  talentManagementReportcommitmentlevel: any = [
    [ 'e29', 'f29', 'g29', 'h29', 'e30', 'f30', 'g30', 'h30',  'e31', 'f31', 'g31', 'h31'], // Round 0
    [ 'e32', 'f32', 'g32', 'h32', 'e33', 'f33', 'g33', 'h33',  'e34', 'f34', 'g34', 'h34'], // Round 1
    [ 'e35', 'f35', 'g35', 'h35', 'e36', 'f36', 'g36', 'h36',  'e37', 'f37', 'g37', 'h37'], // Round 2
    [ 'e38', 'f38', 'g38', 'h38', 'e39', 'f39', 'g39', 'h39',  'e40', 'f40', 'g40', 'h40'], // Round 3
    [ 'e41', 'f41', 'g41', 'h41', 'e42', 'f42', 'g42', 'h42',  'e43', 'f43', 'g43', 'h43'], // Round 4
    [ 'e44', 'f44', 'g44', 'h44', 'e45', 'f45', 'g45', 'h45',  'e46', 'f46', 'g46', 'h46'], // Round 5
  ];

  talentManagementReportempengscorelevel: any = [
    ['e52', 'f52', 'g52', 'h52', 'e53', 'f53', 'g53', 'h53', 'e54', 'f54', 'g54', 'h54'], // Round 0
    ['e55', 'f55', 'g55', 'h55', 'e56', 'f56', 'g56', 'h56', 'e57', 'f57', 'g57', 'h57'], // Round 1
    ['e58', 'f58', 'g58', 'h58', 'e59', 'f59', 'g59', 'h59', 'e60', 'f60', 'g60', 'h60'], // Round 2
    ['e61', 'f61', 'g61', 'h61', 'e62', 'f62', 'g62', 'h62', 'e63', 'f63', 'g63', 'h63'], // Round 3
    ['e64', 'f64', 'g64', 'h64', 'e65', 'f65', 'g65', 'h65', 'e66', 'f66', 'g66', 'h66'], // Round 4
    ['e67', 'f67', 'g67', 'h67', 'e68', 'f68', 'g68', 'h68', 'e69', 'f69', 'g69', 'h69'], // Round 5
  ];

  talentManagementReportlenmngscorelevel: any = [
    ['e75','f75','g75','h75','e76','f76','g76','h76','e77','f77','g77','h77','e78','f78','g78','h78','e79','f79','g79','h79','e80','f80','g80','h80'],//0
    ['e81','f81','g81','h81','e82','f82','g82','h82','e83','f83','g83','h83','e84','f84','g84','h84','e85','f85','g85','h85','e86','f86','g86','h86'],//1
    ['e87','f87','g87','h87','e88','f88','g88','h88','e89','f89','g89','h89','e90','f90','g90','h90','e91','f91','g91','h91','e92','f92','g92','h92'],//2
    ['e93','f93','g93','h93','e94','f94','g94','h94','e95','f95','g95','h95','e96','f96','g96','h96','e97','f97','g97','h97','e98','f98','g98','h98'],//3
    ['e99','f99','g99','h99','e100','f100','g100','h100','e101','f101','g101','h101','e102','f102','g102','h102','e103','f103','g103','h103','e104','f104','g104','h104'],//2
    ['e105','f105','g105','h105','e106','f106','g106','h106','e107','f107','g107','h107','e108','f108','g108','h108','e109','f109','g109','h109','e110','f110','g110','h110'],//3
  ];

  talentManagementReportlearningindex1: any = [
    ['e115', 'f115', 'g115', 'h115',], //0 round
    ['e116', 'f116', 'g116', 'h116',], //1 round
    ['e117', 'f117', 'g117', 'h117',], //2 round
    ['e118', 'f118', 'g118', 'h118',], //3 round
    ['e119', 'f119', 'g119', 'h119',], //4 round
    ['e120', 'f120', 'g120', 'h120',], //5 round
  ];
  talentManagementReportlearningindex2: any = [
    ['e121', 'f121', 'g121', 'h121',], //0 round
    ['e122', 'f122', 'g122', 'h122',], //1 round
    ['e123', 'f123', 'g123', 'h123',], //2 round
    ['e124', 'f124', 'g124', 'h124',], //3 round
    ['e125', 'f125', 'g125', 'h125',], //4 round
    ['e126', 'f126', 'g126', 'h126',], //5 round
  ];

  //organization report.......
  orgReportcost: any = [
    ['e6', 'e7', 'e8', 'e9', 'e10'], //0 round
    ['e11', 'e12', 'e13', 'e14', 'e15'], //1 round
    ['e16', 'e17', 'e18', 'e19', 'e20'], //2 round
    ['e21', 'e22', 'e23', 'e24', 'e25'], //3 round
    ['e26', 'e27', 'e28', 'e29', 'e30'], //4 round
    ['e31', 'e32', 'e33', 'e34', 'e35'], //5 round
  ];
  orgReportincineffect: any = [
    ['e41', 'e42', 'e43', 'e44'], //0 round
    ['e45', 'e46', 'e47', 'e48'], //1 round
    ['e49', 'e50', 'e51', 'e52'], //2 round
    ['e53', 'e54', 'e55', 'e56'], //3 round
    ['e57', 'e58', 'e59', 'e60'], //4 round
    ['e61', 'e62', 'e63', 'e64'], //5 round
  ];
  orgReporteffectlevel: any = [
    ['e69'], //0 round
    ['e70'], //1 round
    ['e71'], //2 round
    ['e72'], //3 round
    ['e73'], //4 round
    ['e74'], //5 round
  ]
  kpiheadingcell: any = ['Performance Level Incremental, %', 'Productivity Level', 'Stress Level', 'Budget & Cost, k INR',
    "KPI's", "Conflict", "Thinking Ability"
  ]
  talentacqheadingcell: any = ['Increase in employer branding %, channel ', 'Number of Employees', 'Gender diversity ratio, % of total employees',
    'Cost of recruitment, k INR', "Recruitment metrics", "Conflict", "Thinking Ability"
  ]
  talentmngheadingcell: any = ['Awareness Level %', 'Commitment Level %', 'Employee Engagement Score, Max Level 5',
    'Cost of Learning & Management, k INR', "Learning Index"
  ]
  orgheadingcell: any = ['Cost of tools for increasing effectiveness, k INR',
    'Increase in effectiveness after deploying tool', 'Performance level increment %',

  ]

  kpibordercell:any = ['Top Management','Senior Management','Junior Management',
    'Overtime Cost','Budget for Year','Budget Overrun','Budget Penalty Carried over next year',
    'Employee Satisfaction Score','Stakeholder Satisfaction Score','Score',
    'Talent Acquisition','Talent Management','Organization & Budgets',
    'Conflict'
  ]

  talentacqbordercell:any =['Top Management','Senior Management','Junior Management',
    'Top Management, Permanent','Senior Management, Permanent','Junior Management, Permanent',
    'Junior Management, Outsourced','Top Management, Newly Hired','Senior Management, Newly Hired',
    'Junior Management, Newly Hired','Top Management, Voluntary Resignation','Senior Management, Voluntary Resignation',
    'Junior Management, Voluntary Resignation','Top Management, Firing','Senior Management, Firing','Junior Management, Firing',
    'Top Management, Total Employees','Senior Management, Total Employees','Junior Management, Total Employees',
    'Total Number of Employees','Top Management, Channel Cost','Senior Management, Channel Cost','Junior Management, Channel Cost',
    'Top Management, Vendor Cost','Senior Management, Vendor Cost','Junior Management, Outsourcing Cost',
    'Total Hiring Cost','Total Firing Cost','Total Salary Cost of Permanent Employee',
    'Top Management, Attrition Rate','Senior Management, Attrition Rate','Junior Management, Attrition Rate',
    'Top Management, Offer Dropouts','Senior Management, Offer Dropouts','Junior Management, Offer Dropouts',
    'Top Management, Recruitment Metrics','Senior Management, Recruitment Metrics','Junior Management, Recruitment Metrics'
  ]

  talentmngbordercell:any =['Top Management','Senior Management','Junior Management',
    'Training of Employees','Townhall Programme','Future Leadership Programme','Gender Diversity Policy Cost',
    'Divisional Policy Cost','Total Learning & Management Cost','Manpower went through training, %','Mandays of training, persondays'
  ]

  orgbordercell:any =['Performance and Goal Measurement Tool','Recruitment Analysis Tool','Workforce Analytics Tool',
    'Rectruitment Tool','Perfromance & Goal Tool',
    'Process Content & Guidance Tool','Total cost for the Effectiveness Tool','Future Leadership ProgrammePerformance effectiveness level'
  ]

  cellstyle1 = {
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
          if (gamename == "hrmgame") {
            this.createExcelReportforhrmGame(data);

          }
        }
      })

  }
  createExcelReportforhrmGame(data: any) {
    this.kpiexcelalldata = [];
    this.talentacqexcelalldata = [];
    this.talentmngexcelalldata = [];
    this.organaizationexcelalldata = [];
    let attempt = Number(data.resultList[0].attempt);
    
    for (let i = 1; i < attempt+1; i++) {
      this.kpiexcelformat = [
        [],
        ["", "Round" + Number(i), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "", "", "Performance Level Incremental, %"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][2]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][6]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportperforlevinc[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        [],
        ["", "", "", "Productivity Level"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][2]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][6]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportprodlev[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        [],
        ["", "", "", "Stress Level"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][2]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][6]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].kpireport[this.talentManagementKpiReportstresslev[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        [],
        ["", "", "", "Budget & Cost, k INR"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Overtime Cost", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][0]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][1]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][2]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][3]]).toFixed(0))],
        ["", "Budget for Year", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][4]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][5]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][6]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][7]]).toFixed(0))],
        ["", "Budget Overrun", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][8]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][9]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][10]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][11]]).toFixed(0))],
        ["", "Budget Penalty Carried over next year", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][12]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][13]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][14]]).toFixed(0)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][15]]).toFixed(0))],
        [],
        [],
        ["", "", "", "KPI's"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Employee Satisfaction Score", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][0]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][1]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][2]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][3]]).toFixed(2))],
        ["", "Stakeholder Satisfaction Score", "", Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][4]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportkpis[i][5]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][6]]).toFixed(2)), Number(Number(data.resultList[0].kpireport[this.talentManagementKpiReportbudgetandcost[i][7]]).toFixed(2))],
        [],
        ["", "", "", "Conflict"],
        [],
        ["", "", "", "Students Analysis", "Choice",],
        ["", "Score", "", Number(Number(data.resultList[0].kpireport[this.conflictdata[i-1][0]]).toFixed(0)), data.resultList[0].kpireport[this.conflictdata[i-1][1]]],
        [],
        ["", "", "", "Thinking Ability"],
        [],
        ["", "", "", "Score"],
        ["", "Talent Acquisition", "", Number((Number(data.resultList[0].kpireport[this.thinkingablity[i][0]])*100).toFixed(0))+ "%"],
        ["", "Talent Management", "", Number((Number(data.resultList[0].kpireport[this.thinkingablity[i][1]])*100).toFixed(0))+ "%"],
        ["", "Organization & Budgets", "", Number((Number(data.resultList[0].kpireport[this.thinkingablity[i][2]])*100).toFixed(0))+ "%"],
        ["", "Conflict", "", Number((Number(data.resultList[0].kpireport[this.thinkingablity[i][3]])*100).toFixed(0))+ "%"],



      ]
      this.talentacqexcelformat = [
        [],
        ["", "Round" + Number(i), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "", "", "Increase in employer branding %, channel "],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "",    Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][0]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][1]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][2]])).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][3]])).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][4]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][5]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][6]])).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][7]])).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][8]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][9]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][10]])).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportemployeebrand[i][11]])).toFixed(0)) + "%"],
        [],
        [],
        ["", "", "", "Number of Employees"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management, Permanent", "",                Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][0]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][1]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][2]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][3]]).toFixed(0))],
        ["", "Senior Management, Permanent", "",             Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][4]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][5]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][6]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][7]]).toFixed(0))],
        ["", "Junior Management, Permanent", "",             Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][8]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][9]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][10]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][11]]).toFixed(0))],
        ["", "Junior Management, Outsourced", "",            Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][12]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][13]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][14]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][15]]).toFixed(0))],
        ["", "Top Management, Newly Hired", "",              Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][16]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][17]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][18]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][19]]).toFixed(0))],
        ["", "Senior Management, Newly Hired", "",           Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][20]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][21]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][22]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][23]]).toFixed(0))],
        ["", "Junior Management, Newly Hired", "",           Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][24]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][25]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][26]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][27]]).toFixed(0))],
        ["", "Top Management, Voluntary Resignation", "",    Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][28]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][29]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][30]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][31]]).toFixed(0))],
        ["", "Senior Management, Voluntary Resignation", "", Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][32]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][33]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][34]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][35]]).toFixed(0))],
        ["", "Junior Management, Voluntary Resignation", "", Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][36]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][37]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][38]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][39]]).toFixed(0))],
        ["", "Top Management, Firing", "",                   Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][40]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][41]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][42]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][43]]).toFixed(0))],
        ["", "Senior Management, Firing", "",                Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][44]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][45]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][46]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][47]]).toFixed(0))],
        ["", "Junior Management, Firing", "",                Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][48]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][49]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][50]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][51]]).toFixed(0))],
        ["", "Top Management, Total Employees", "",          Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][52]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][53]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][54]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][55]]).toFixed(0))],
        ["", "Senior Management, Total Employees", "",       Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][56]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][57]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][58]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][59]]).toFixed(0))],
        ["", "Junior Management, Total Employees", "",       Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][60]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][61]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][62]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][63]]).toFixed(0))],
        ["", "Total Number of Employees", "",                Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][64]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][65]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][66]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportnoemployee[i][67]]).toFixed(0))],
        [],
        ["", "", "", "Gender diversity ratio, % of total employees"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "",    Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][2]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][6]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        ["", "", "", "Cost of recruitment, k INR"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management, Channel Cost", "",            Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][0]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][1]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][2]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][3]]).toFixed(0))],
        ["", "Senior Management, Channel Cost", "",         Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][4]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][5]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][6]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][7]]).toFixed(0))],
        ["", "Junior Management, Channel Cost", "",         Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][8]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][9]]).toFixed(0)),  Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][10]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][11]]).toFixed(0))],
        ["", "Top Management, Vendor Cost", "",             Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][12]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][13]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][14]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][15]]).toFixed(0))],
        ["", "Senior Management, Vendor Cost", "",          Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][16]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][17]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][18]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][19]]).toFixed(0))],
        ["", "Junior Management, Outsourcing Cost", "",     Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][20]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][21]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][22]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][23]]).toFixed(0))],
        ["", "Total Hiring Cost", "",                       Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][24]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][25]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][26]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][27]]).toFixed(0))],
        ["", "Total Firing Cost", "",                       Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][28]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][29]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][30]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][31]]).toFixed(0))],
        ["", "Total Salary Cost of Permanent Employee", "", Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][32]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][33]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][34]]).toFixed(0)), Number(Number(data.resultList[0].acquisitionreport[this.talentManagementReportcostofrec[i][35]]).toFixed(0))],
        [],
        ["", "", "", "Recruitment metrics"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management, Attrition Rate", "",         Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][0]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][1]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][2]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management, Attrition Rate", "",      Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][4]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][5]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][6]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management, Attrition Rate", "",      Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][8]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][9]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][11]]) * 100).toFixed(0)) + "%"],
        ["", "Top Management, Offer Dropouts", "",         Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][12]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][13]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][14]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][15]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management, Offer Dropouts", "",      Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][16]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][17]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][18]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][19]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management, Offer Dropouts", "",      Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][20]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][21]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][22]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][23]]) * 100).toFixed(0)) + "%"],
        ["", "Top Management, Recruitment Metrics", "",    Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][24]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][25]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][26]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][27]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management, Recruitment Metrics", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][28]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][29]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][30]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][31]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management, Recruitment Metrics", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][32]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][33]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][34]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportrecmatrix[i][35]]) * 100).toFixed(0)) + "%"],
        [],
        ["", "Top Management", "",    Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][2]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][6]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].acquisitionreport[this.talentManagementReportgendivtottalemp[i][11]]) * 100).toFixed(0)) + "%"],
        [],

      ]

      this.talentmngexcelformat = [
        [],
        ["", "Round" + Number(i), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "", "", "Awareness Level %"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "",    Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][2]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][6]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportawarnesslevel[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        ["", "", "", "Commitment Level %"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "",    Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][2]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Senior Management", "", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][4]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][5]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][6]]) * 100).toFixed(0)) + "%",  Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][7]]) * 100).toFixed(0)) + "%"],
        ["", "Junior Management", "", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][8]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][9]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][10]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportcommitmentlevel[i][11]]) * 100).toFixed(0)) + "%"],
        [],
        ["", "", "", "Employee Engagement Score, Max Level 5"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Top Management", "",    Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][0]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][1]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][2]]).toFixed(2)),   Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][3]]).toFixed(2))],
        ["", "Senior Management", "", Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][4]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][5]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][6]]).toFixed(2)),   Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][7]]).toFixed(2))],
        ["", "Junior Management", "", Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][8]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][9]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][10]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportempengscorelevel[i][11]]).toFixed(2))],
        [],
        ["", "", "", "Cost of Learning & Management, k INR"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Training of Employees", "",            Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][0]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][1]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][2]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][3]]).toFixed(2))],
        ["", "Townhall Programme", "",               Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][4]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][5]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][6]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][7]]).toFixed(2))],
        ["", "Future Leadership Programme", "",      Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][8]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][9]]).toFixed(2)),  Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][10]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][11]]).toFixed(2))],
        ["", "Gender Diversity Policy Cost", "",     Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][12]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][13]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][14]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][15]]).toFixed(2))],
        ["", "Divisional Policy Cost", "",           Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][16]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][17]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][18]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][19]]).toFixed(2))],
        ["", "Total Learning & Management Cost", "", Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][20]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][21]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][22]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlenmngscorelevel[i][23]]).toFixed(2))],
        [],
        ["", "", "", "Learning Index"],
        [],
        ["", "", "", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
        ["", "Manpower went through training, %", "", Number((Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex1[i][0]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex1[i][1]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex1[i][2]]) * 100).toFixed(0)) + "%", Number((Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex1[i][3]]) * 100).toFixed(0)) + "%"],
        ["", "Mandays of training, persondays", "",   Number(Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex2[i][0]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex2[i][1]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex2[i][2]]).toFixed(2)), Number(Number(data.resultList[0].managementreport[this.talentManagementReportlearningindex2[i][3]]).toFixed(2))],
        [],
      ]

      this.organaizationexcelformat = [
        [],
        ["", "Round" + Number(i), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "", "", "Cost of tools for increasing effectiveness, k INR"],
        [],
        ["", "", "", "Company-wide"],
        ["", "Performance and Goal Measurement Tool", "",Number(data.resultList[0].organizationreport[this.orgReportcost[i][0]]).toFixed(0)],
        ["", "Recruitment Analysis Tool", "",            Number(data.resultList[0].organizationreport[this.orgReportcost[i][1]]).toFixed(0)],
        ["", "Workforce Analytics Tool", "",             Number(data.resultList[0].organizationreport[this.orgReportcost[i][2]]).toFixed(0)],
        ["", "Process Content & Guidance Tool", "",      Number(data.resultList[0].organizationreport[this.orgReportcost[i][3]]).toFixed(0)],
        ["", "Total cost for the Effectiveness Tool", "",Number(data.resultList[0].organizationreport[this.orgReportcost[i][4]]).toFixed(0)],
        [],
        [],
        ["", "", "", "Increase in effectiveness after deploying tool"],
        [],
        ["", "", "", "Company-wide"],
        ["", "Perfromance & Goal Tool", "",        Number((Number(data.resultList[0].organizationreport[this.orgReportincineffect[i][0]])*100).toFixed(0))],
        ["", "Rectruitment Tool", "",              Number((Number(data.resultList[0].organizationreport[this.orgReportincineffect[i][1]])*100).toFixed(0))],
        ["", "Workforce Analytics Tool", "",       Number((Number(data.resultList[0].organizationreport[this.orgReportincineffect[i][2]])*100).toFixed(0))],
        ["", "Process Content & Guidance Tool", "",Number((Number(data.resultList[0].organizationreport[this.orgReportincineffect[i][3]])*100).toFixed(0))],
        [],
        ["", "", "", "Performance level increment %"],
        [],
        ["", "", "", "Company-wide"],
        ["", "Performance effectiveness level ", "",Number((Number(data.resultList[0].organizationreport[this.orgReporteffectlevel[i][0]])*100).toFixed(0))],



      ]
      this.kpiexcelalldata.push(this.kpiexcelformat);
      this.talentacqexcelalldata.push(this.talentacqexcelformat);
      this.talentmngexcelalldata.push(this.talentmngexcelformat);
      this.organaizationexcelalldata.push(this.organaizationexcelformat);

    }
   
    this.excelSheetDesignFunction('hrmgame', 'HRM Download', this.kpiexcelalldata,
      this.talentacqexcelalldata, this.talentmngexcelalldata, this.organaizationexcelalldata,
      attempt, this.stpgamecolname);
  }

  excelSheetDesignFunction(name: string, gamename: string, kpiexceldata: any,
    talentacqexcelalldata: any, talentmngexcelalldata: any, organaizationexcelalldata: any, attempnumber: any, columnname: any) {


    let workbook = new Workbook();
    let kpiworksheet = workbook.addWorksheet('KPI');
    let talentacqworksheet = workbook.addWorksheet('Talent Acquisition');
    let talentmngworksheet = workbook.addWorksheet('Talent Management');
    let organaizationworksheet = workbook.addWorksheet('Organization Effectiveness');
    
    for (let i = 0; i < attempnumber; i++) {
      kpiexceldata[i].forEach((d: any) => {
        let row = kpiworksheet.addRow(d);
       if (this.kpiheadingcell.includes(d[3])) {
          for (let colNumber = 4; colNumber <= 8; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
          }
        }
        if (this.kpibordercell.includes(d[1])) {
          for (let colNumber = 4; colNumber <= 7; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.border = {
              top: { style: 'thin', color: { argb: '000000' } },   // Black thin top border
              left: { style: 'thin', color: { argb: '000000' } },  // Black thin left border
              bottom: { style: 'thin', color: { argb: '000000' } }, // Black thin bottom border
              right: { style: 'thin', color: { argb: '000000' } }   // Black thin right border
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
      talentacqexcelalldata[i].forEach((d: any) => {
        let row = talentacqworksheet.addRow(d);
        if (this.talentacqheadingcell.includes(d[3])) {
          for (let colNumber = 4; colNumber <= 8; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
           
          }
        }
        if (this.talentacqbordercell.includes(d[1])) {
          for (let colNumber = 4; colNumber <= 7; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.border = {
              top: { style: 'thin', color: { argb: '000000' } },   // Black thin top border
              left: { style: 'thin', color: { argb: '000000' } },  // Black thin left border
              bottom: { style: 'thin', color: { argb: '000000' } }, // Black thin bottom border
              right: { style: 'thin', color: { argb: '000000' } }   // Black thin right border
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
      talentmngexcelalldata[i].forEach((d: any) => {
        let row = talentmngworksheet.addRow(d);
        if (this.talentmngheadingcell.includes(d[3])) {
          for (let colNumber = 4; colNumber <= 8; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
          }
        }
        if (this.talentmngbordercell.includes(d[1])) {
          for (let colNumber = 4; colNumber <= 7; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.border = {
              top: { style: 'thin', color: { argb: '000000' } },   // Black thin top border
              left: { style: 'thin', color: { argb: '000000' } },  // Black thin left border
              bottom: { style: 'thin', color: { argb: '000000' } }, // Black thin bottom border
              right: { style: 'thin', color: { argb: '000000' } }   // Black thin right border
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
      organaizationexcelalldata[i].forEach((d: any) => {
        let row = organaizationworksheet.addRow(d);
        if (this.orgheadingcell.includes(d[3])) {
          for (let colNumber = 4; colNumber <= 8; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
          }
        }
        if (this.orgbordercell.includes(d[1])) {
          for (let colNumber = 4; colNumber <= 7; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.border = {
              top: { style: 'thin', color: { argb: '000000' } },   // Black thin top border
              left: { style: 'thin', color: { argb: '000000' } },  // Black thin left border
              bottom: { style: 'thin', color: { argb: '000000' } }, // Black thin bottom border
              right: { style: 'thin', color: { argb: '000000' } }   // Black thin right border
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
