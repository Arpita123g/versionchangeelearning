import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrmfintechassessmentService {

  constructor() { }
  attempt = 1;
  orgReportcost: any = [
    ['c6', 'e6', 'c7', 'e7', 'c8', 'e8', 'c9', 'e9', 'c10', 'e10'], //0 round
    ['c11', 'e11', 'c12', 'e12', 'c13', 'e13', 'c14', 'e14', 'c15', 'e15'], //1 round
    ['c16', 'e16', 'c17', 'e17', 'c18', 'e18', 'c19', 'e19', 'c20', 'e20'], //2 round
    ['c21', 'e21', 'c22', 'e22', 'c23', 'e23', 'c24', 'e24', 'c25', 'e25'], //3 round
    ['c26', 'e26', 'c27', 'e27', 'c28', 'e28', 'c29', 'e29', 'c30', 'e30'], //4 round
    ['c31', 'e31', 'c32', 'e32', 'c33', 'e33', 'c34', 'e34', 'c35', 'e35'], //5 round
  ]

  orgReportincineffect: any = [
    ['c41', 'e41', 'c42', 'e42', 'c43', 'e43', 'c44', 'e44'], //0 round
    ['c45', 'e45', 'c46', 'e46', 'c47', 'e47', 'c48', 'e48'], //1 round
    ['c49', 'e49', 'c50', 'e50', 'c51', 'e51', 'c52', 'e52'], //2 round
    ['c53', 'e53', 'c54', 'e54', 'c55', 'e55', 'c56', 'e56'], //3 round
    ['c57', 'e57', 'c58', 'e58', 'c59', 'e59', 'c60', 'e60'], //4 round
    ['c61', 'e61', 'c62', 'e62', 'c63', 'e63', 'c64', 'e64'], //5 round
  ]

  orgReporteffectlevel: any = [
    ['c69', 'e69'], //0 round
    ['c70', 'e70'], //1 round
    ['c71', 'e71'], //2 round
    ['c72', 'e72'], //3 round
    ['c73', 'e73'], //4 round
    ['c74', 'e74'], //5 round
  ]

  talentManagementReportemployeebrand: any = [
    ['c6', 'e6', 'f6', 'g6', 'h6', 'c7', 'e7', 'f7', 'g7', 'h7', 'c8', 'e8', 'f8', 'g8', 'h8'], //0 round 
    ['c9', 'e9', 'f9', 'g9', 'h9', 'c10', 'e10', 'f10', 'g10', 'h10', 'c11', 'e11', 'f11', 'g11', 'h11'], //1 round
    ['c12', 'e12', 'f12', 'g12', 'h12', 'c13', 'e13', 'f13', 'g13', 'h13', 'c14', 'e14', 'f14', 'g14', 'h14'], // 2 round
    ['c15', 'e15', 'f15', 'g15', 'h15', 'c16', 'e16', 'f16', 'g16', 'h16', 'c17', 'e17', 'f17', 'g17', 'h17'], // 3 round
    ['c18', 'e18', 'f18', 'g18', 'h18', 'c19', 'e19', 'f19', 'g19', 'h19', 'c20', 'e20', 'f20', 'g20', 'h20'], // 4 round
    ['c21', 'e21', 'f21', 'g21', 'h21', 'c22', 'e22', 'f22', 'g22', 'h22', 'c23', 'e23', 'f23', 'g23', 'h23'], // 5 round
  ]

  talentManagementReportnoemployee: any = [
    [
      'c29', 'e29', 'f29', 'g29', 'h29', 'c30', 'e30', 'f30', 'g30', 'h30',
      'c31', 'e31', 'f31', 'g31', 'h31', 'c32', 'e32', 'f32', 'g32', 'h32',
      'c33', 'e33', 'f33', 'g33', 'h33', 'c34', 'e34', 'f34', 'g34', 'h34',
      'c35', 'e35', 'f35', 'g35', 'h35', 'c36', 'e36', 'f36', 'g36', 'h36',
      'c37', 'e37', 'f37', 'g37', 'h37', 'c38', 'e38', 'f38', 'g38', 'h38',
      'c39', 'e39', 'f39', 'g39', 'h39', 'c40', 'e40', 'f40', 'g40', 'h40',
      'c41', 'e41', 'f41', 'g41', 'h41', 'c42', 'e42', 'f42', 'g42', 'h42',
      'c43', 'e43', 'f43', 'g43', 'h43', 'c44', 'e44', 'f44', 'g44', 'h44',
      'c45', 'e45', 'f45', 'g45', 'h45'
    ], // 0 round
    [
      'c46', 'e46', 'f46', 'g46', 'h46', 'c47', 'e47', 'f47', 'g47', 'h47',
      'c48', 'e48', 'f48', 'g48', 'h48', 'c49', 'e49', 'f49', 'g49', 'h49',
      'c50', 'e50', 'f50', 'g50', 'h50', 'c51', 'e51', 'f51', 'g51', 'h51',
      'c52', 'e52', 'f52', 'g52', 'h52', 'c53', 'e53', 'f53', 'g53', 'h53',
      'c54', 'e54', 'f54', 'g54', 'h54', 'c55', 'e55', 'f55', 'g55', 'h55',
      'c56', 'e56', 'f56', 'g56', 'h56', 'c57', 'e57', 'f57', 'g57', 'h57',
      'c58', 'e58', 'f58', 'g58', 'h58', 'c59', 'e59', 'f59', 'g59', 'h59',
      'c60', 'e60', 'f60', 'g60', 'h60', 'c61', 'e61', 'f61', 'g61', 'h61',
      'c62', 'e62', 'f62', 'g62', 'h62'
    ], // 1 round
    [
      'c63', 'e63', 'f63', 'g63', 'h63', 'c64', 'e64', 'f64', 'g64', 'h64',
      'c65', 'e65', 'f65', 'g65', 'h65', 'c66', 'e66', 'f66', 'g66', 'h66',
      'c67', 'e67', 'f67', 'g67', 'h67', 'c68', 'e68', 'f68', 'g68', 'h68',
      'c69', 'e69', 'f69', 'g69', 'h69', 'c70', 'e70', 'f70', 'g70', 'h70',
      'c71', 'e71', 'f71', 'g71', 'h71', 'c72', 'e72', 'f72', 'g72', 'h72',
      'c73', 'e73', 'f73', 'g73', 'h73', 'c74', 'e74', 'f74', 'g74', 'h74',
      'c75', 'e75', 'f75', 'g75', 'h75', 'c76', 'e76', 'f76', 'g76', 'h76',
      'c77', 'e77', 'f77', 'g77', 'h77', 'c78', 'e78', 'f78', 'g78', 'h78',
      'c79', 'e79', 'f79', 'g79', 'h79'
    ], // 2 round
    [
      'c80', 'e80', 'f80', 'g80', 'h80', 'c81', 'e81', 'f81', 'g81', 'h81',
      'c82', 'e82', 'f82', 'g82', 'h82', 'c83', 'e83', 'f83', 'g83', 'h83',
      'c84', 'e84', 'f84', 'g84', 'h84', 'c85', 'e85', 'f85', 'g85', 'h85',
      'c86', 'e86', 'f86', 'g86', 'h86', 'c87', 'e87', 'f87', 'g87', 'h87',
      'c88', 'e88', 'f88', 'g88', 'h88', 'c89', 'e89', 'f89', 'g89', 'h89',
      'c90', 'e90', 'f90', 'g90', 'h90', 'c91', 'e91', 'f91', 'g91', 'h91',
      'c92', 'e92', 'f92', 'g92', 'h92', 'c93', 'e93', 'f93', 'g93', 'h93',
      'c94', 'e94', 'f94', 'g94', 'h94', 'c95', 'e95', 'f95', 'g95', 'h95',
      'c96', 'e96', 'f96', 'g96', 'h96'
    ], // 3 round
    [
      'c97', 'e97', 'f97', 'g97', 'h97', 'c98', 'e98', 'f98', 'g98', 'h98',
      'c99', 'e99', 'f99', 'g99', 'h99', 'c100', 'e100', 'f100', 'g100', 'h100',
      'c101', 'e101', 'f101', 'g101', 'h101', 'c102', 'e102', 'f102', 'g102', 'h102',
      'c103', 'e103', 'f103', 'g103', 'h103', 'c104', 'e104', 'f104', 'g104', 'h104',
      'c105', 'e105', 'f105', 'g105', 'h105', 'c106', 'e106', 'f106', 'g106', 'h106',
      'c107', 'e107', 'f107', 'g107', 'h107', 'c108', 'e108', 'f108', 'g108', 'h108',
      'c109', 'e109', 'f109', 'g109', 'h109', 'c110', 'e110', 'f110', 'g110', 'h110',
      'c111', 'e111', 'f111', 'g111', 'h111', 'c112', 'e112', 'f112', 'g112', 'h112',
      'c113', 'e113', 'f113', 'g113', 'h113'
    ], // 4 round
    [
      'c114', 'e114', 'f114', 'g114', 'h114', 'c115', 'e115', 'f115', 'g115', 'h115',
      'c116', 'e116', 'f116', 'g116', 'h116', 'c117', 'e117', 'f117', 'g117', 'h117',
      'c118', 'e118', 'f118', 'g118', 'h118', 'c119', 'e119', 'f119', 'g119', 'h119',
      'c120', 'e120', 'f120', 'g120', 'h120', 'c121', 'e121', 'f121', 'g121', 'h121',
      'c122', 'e122', 'f122', 'g122', 'h122', 'c123', 'e123', 'f123', 'g123', 'h123',
      'c124', 'e124', 'f124', 'g124', 'h124', 'c125', 'e125', 'f125', 'g125', 'h125',
      'c126', 'e126', 'f126', 'g126', 'h126', 'c127', 'e127', 'f127', 'g127', 'h127',
      'c128', 'e128', 'f128', 'g128', 'h128', 'c129', 'e129', 'f129', 'g129', 'h129',
      'c130', 'e130', 'f130', 'g130', 'h130'
    ] // 5 round
  ];


  talentManagementReportgendivtottalemp: any = [
    ['c135', 'e135', 'f135', 'g135', 'h135', 'c136', 'e136', 'f136', 'g136', 'h136', 'c137', 'e137', 'f137', 'g137', 'h137'], // 0 round
    ['c138', 'e138', 'f138', 'g138', 'h138', 'c139', 'e139', 'f139', 'g139', 'h139', 'c140', 'e140', 'f140', 'g140', 'h140'], // 1 round
    ['c141', 'e141', 'f141', 'g141', 'h141', 'c142', 'e142', 'f142', 'g142', 'h142', 'c143', 'e143', 'f143', 'g143', 'h143'], // 2 round
    ['c144', 'e144', 'f144', 'g144', 'h144', 'c145', 'e145', 'f145', 'g145', 'h145', 'c146', 'e146', 'f146', 'g146', 'h146'], // 3 round
    ['c147', 'e147', 'f147', 'g147', 'h147', 'c148', 'e148', 'f148', 'g148', 'h148', 'c149', 'e149', 'f149', 'g149', 'h149'], // 4 round
    ['c150', 'e150', 'f150', 'g150', 'h150', 'c151', 'e151', 'f151', 'g151', 'h151', 'c152', 'e152', 'f152', 'g152', 'h152']  // 5 round
  ]

  talentManagementReportcostofrec: any = [
    [
      'c157', 'e157', 'f157', 'g157', 'h157', 'c158', 'e158', 'f158', 'g158', 'h158', 'c159', 'e159', 'f159', 'g159', 'h159',
      'c160', 'e160', 'f160', 'g160', 'h160', 'c161', 'e161', 'f161', 'g161', 'h161', 'c162', 'e162', 'f162', 'g162', 'h162',
      'c163', 'e163', 'f163', 'g163', 'h163', 'c164', 'e164', 'f164', 'g164', 'h164', 'c165', 'e165', 'f165', 'g165', 'h165'
    ], // 0 round
    [
      'c166', 'e166', 'f166', 'g166', 'h166', 'c167', 'e167', 'f167', 'g167', 'h167', 'c168', 'e168', 'f168', 'g168', 'h168',
      'c169', 'e169', 'f169', 'g169', 'h169', 'c170', 'e170', 'f170', 'g170', 'h170', 'c171', 'e171', 'f171', 'g171', 'h171',
      'c172', 'e172', 'f172', 'g172', 'h172', 'c173', 'e173', 'f173', 'g173', 'h173', 'c174', 'e174', 'f174', 'g174', 'h174'
    ], // 1 round
    [
      'c175', 'e175', 'f175', 'g175', 'h175', 'c176', 'e176', 'f176', 'g176', 'h176', 'c177', 'e177', 'f177', 'g177', 'h177',
      'c178', 'e178', 'f178', 'g178', 'h178', 'c179', 'e179', 'f179', 'g179', 'h179', 'c180', 'e180', 'f180', 'g180', 'h180',
      'c181', 'e181', 'f181', 'g181', 'h181', 'c182', 'e182', 'f182', 'g182', 'h182', 'c183', 'e183', 'f183', 'g183', 'h183'
    ], // 2 round
    [
      'c184', 'e184', 'f184', 'g184', 'h184', 'c185', 'e185', 'f185', 'g185', 'h185', 'c186', 'e186', 'f186', 'g186', 'h186',
      'c187', 'e187', 'f187', 'g187', 'h187', 'c188', 'e188', 'f188', 'g188', 'h188', 'c189', 'e189', 'f189', 'g189', 'h189',
      'c190', 'e190', 'f190', 'g190', 'h190', 'c191', 'e191', 'f191', 'g191', 'h191', 'c192', 'e192', 'f192', 'g192', 'h192'
    ], // 3 round
    [
      'c193', 'e193', 'f193', 'g193', 'h193', 'c194', 'e194', 'f194', 'g194', 'h194', 'c195', 'e195', 'f195', 'g195', 'h195',
      'c196', 'e196', 'f196', 'g196', 'h196', 'c197', 'e197', 'f197', 'g197', 'h197', 'c198', 'e198', 'f198', 'g198', 'h198',
      'c199', 'e199', 'f199', 'g199', 'h199', 'c200', 'e200', 'f200', 'g200', 'h200', 'c201', 'e201', 'f201', 'g201', 'h201'
    ], // 4 round
    [
      'c202', 'e202', 'f202', 'g202', 'h202', 'c203', 'e203', 'f203', 'g203', 'h203', 'c204', 'e204', 'f204', 'g204', 'h204',
      'c205', 'e205', 'f205', 'g205', 'h205', 'c206', 'e206', 'f206', 'g206', 'h206', 'c207', 'e207', 'f207', 'g207', 'h207',
      'c208', 'e208', 'f208', 'g208', 'h208', 'c209', 'e209', 'f209', 'g209', 'h209', 'c210', 'e210', 'f210', 'g210', 'h210'
    ] // 5 round
  ];

  talentManagementReportrecmatrix: any = [
    [
      'c215', 'e215', 'f215', 'g215', 'h215', 'c216', 'e216', 'f216', 'g216', 'h216', 'c217', 'e217', 'f217', 'g217', 'h217',
      'c218', 'e218', 'f218', 'g218', 'h218', 'c219', 'e219', 'f219', 'g219', 'h219', 'c220', 'e220', 'f220', 'g220', 'h220',
      'c221', 'e221', 'f221', 'g221', 'h221', 'c222', 'e222', 'f222', 'g222', 'h222', 'c223', 'e223', 'f223', 'g223', 'h223'
    ], // 0 round
    [
      'c224', 'e224', 'f224', 'g224', 'h224', 'c225', 'e225', 'f225', 'g225', 'h225', 'c226', 'e226', 'f226', 'g226', 'h226',
      'c227', 'e227', 'f227', 'g227', 'h227', 'c228', 'e228', 'f228', 'g228', 'h228', 'c229', 'e229', 'f229', 'g229', 'h229',
      'c230', 'e230', 'f230', 'g230', 'h230', 'c231', 'e231', 'f231', 'g231', 'h231', 'c232', 'e232', 'f232', 'g232', 'h232'
    ], // 1 round
    [
      'c233', 'e233', 'f233', 'g233', 'h233', 'c234', 'e234', 'f234', 'g234', 'h234', 'c235', 'e235', 'f235', 'g235', 'h235',
      'c236', 'e236', 'f236', 'g236', 'h236', 'c237', 'e237', 'f237', 'g237', 'h237', 'c238', 'e238', 'f238', 'g238', 'h238',
      'c239', 'e239', 'f239', 'g239', 'h239', 'c240', 'e240', 'f240', 'g240', 'h240', 'c241', 'e241', 'f241', 'g241', 'h241'
    ], // 2 round
    [
      'c242', 'e242', 'f242', 'g242', 'h242', 'c243', 'e243', 'f243', 'g243', 'h243', 'c244', 'e244', 'f244', 'g244', 'h244',
      'c245', 'e245', 'f245', 'g245', 'h245', 'c246', 'e246', 'f246', 'g246', 'h246', 'c247', 'e247', 'f247', 'g247', 'h247',
      'c248', 'e248', 'f248', 'g248', 'h248', 'c249', 'e249', 'f249', 'g249', 'h249', 'c250', 'e250', 'f250', 'g250', 'h250'
    ], // 3 round
    [
      'c251', 'e251', 'f251', 'g251', 'h251', 'c252', 'e252', 'f252', 'g252', 'h252', 'c253', 'e253', 'f253', 'g253', 'h253',
      'c254', 'e254', 'f254', 'g254', 'h254', 'c255', 'e255', 'f255', 'g255', 'h255', 'c256', 'e256', 'f256', 'g256', 'h256',
      'c257', 'e257', 'f257', 'g257', 'h257', 'c258', 'e258', 'f258', 'g258', 'h258', 'c259', 'e259', 'f259', 'g259', 'h259'
    ], // 4 round
    [
      'c260', 'e260', 'f260', 'g260', 'h260', 'c261', 'e261', 'f261', 'g261', 'h261', 'c262', 'e262', 'f262', 'g262', 'h262',
      'c263', 'e263', 'f263', 'g263', 'h263', 'c264', 'e264', 'f264', 'g264', 'h264', 'c265', 'e265', 'f265', 'g265', 'h265',
      'c266', 'e266', 'f266', 'g266', 'h266', 'c267', 'e267', 'f267', 'g267', 'h267', 'c268', 'e268', 'f268', 'g268', 'h268'
    ] // 5 round
  ];

  talentManagementReportawarnesslevel: any = [
    ['c6', 'e6', 'f6', 'g6', 'h6', 'c7', 'e7', 'f7', 'g7', 'h7', 'c8', 'e8', 'f8', 'g8', 'h8',], // Round 0  
    ['c9', 'e9', 'f9', 'g9', 'h9', 'c10', 'e10', 'f10', 'g10', 'h10', 'c11', 'e11', 'f11', 'g11', 'h11',], // Round 1
    ['c12', 'e12', 'f12', 'g12', 'h12', 'c13', 'e13', 'f13', 'g13', 'h13', 'c14', 'e14', 'f14', 'g14', 'h14',],  // Round 2
    ['c15', 'e15', 'f15', 'g15', 'h15', 'c16', 'e16', 'f16', 'g16', 'h16', 'c17', 'e17', 'f17', 'g17', 'h17',],  // Round 3
    ['c18', 'e18', 'f18', 'g18', 'h18', 'c19', 'e19', 'f19', 'g19', 'h19', 'c20', 'e20', 'f20', 'g20', 'h20',],  // Round 4
    ['c21', 'e21', 'f21', 'g21', 'h21', 'c22', 'e22', 'f22', 'g22', 'h22', 'c23', 'e23', 'f23', 'g23', 'h23',],  // Round 5
  ];

  talentManagementReportcommitmentlevel: any = [
    ['c29', 'e29', 'f29', 'g29', 'h29', 'c30', 'e30', 'f30', 'g30', 'h30', 'c31', 'e31', 'f31', 'g31', 'h31'], // Round 0
    ['c32', 'e32', 'f32', 'g32', 'h32', 'c33', 'e33', 'f33', 'g33', 'h33', 'c34', 'e34', 'f34', 'g34', 'h34'], // Round 1
    ['c35', 'e35', 'f35', 'g35', 'h35', 'c36', 'e36', 'f36', 'g36', 'h36', 'c37', 'e37', 'f37', 'g37', 'h37'], // Round 2
    ['c38', 'e38', 'f38', 'g38', 'h38', 'c39', 'e39', 'f39', 'g39', 'h39', 'c40', 'e40', 'f40', 'g40', 'h40'], // Round 3
    ['c41', 'e41', 'f41', 'g41', 'h41', 'c42', 'e42', 'f42', 'g42', 'h42', 'c43', 'e43', 'f43', 'g43', 'h43'], // Round 4
    ['c44', 'e44', 'f44', 'g44', 'h44', 'c45', 'e45', 'f45', 'g45', 'h45', 'c46', 'e46', 'f46', 'g46', 'h46'], // Round 5
  ];

  talentManagementReportempengscorelevel: any = [
    ['c52', 'e52', 'f52', 'g52', 'h52', 'c53', 'e53', 'f53', 'g53', 'h53', 'c54', 'e54', 'f54', 'g54', 'h54'], // Round 0
    ['c55', 'e55', 'f55', 'g55', 'h55', 'c56', 'e56', 'f56', 'g56', 'h56', 'c57', 'e57', 'f57', 'g57', 'h57'], // Round 1
    ['c58', 'e58', 'f58', 'g58', 'h58', 'c59', 'e59', 'f59', 'g59', 'h59', 'c60', 'e60', 'f60', 'g60', 'h60'], // Round 2
    ['c61', 'e61', 'f61', 'g61', 'h61', 'c62', 'e62', 'f62', 'g62', 'h62', 'c63', 'e63', 'f63', 'g63', 'h63'], // Round 3
    ['c64', 'e64', 'f64', 'g64', 'h64', 'c65', 'e65', 'f65', 'g65', 'h65', 'c66', 'e66', 'f66', 'g66', 'h66'], // Round 4
    ['c67', 'e67', 'f67', 'g67', 'h67', 'c68', 'e68', 'f68', 'g68', 'h68', 'c69', 'e69', 'f69', 'g69', 'h69'], // Round 5
  ];

  talentManagementReportcostoflearning: any = [
    ['c75', 'e75', 'f75', 'g75', 'h75', 'c76', 'e76', 'f76', 'g76', 'h76', 'c77', 'e77', 'f77', 'g77', 'h77', 'c78', 'e78', 'f78', 'g78', 'h78', 'c79', 'e79', 'f79', 'g79', 'h79', 'c80', 'e80', 'f80', 'g80', 'h80'], // Round 0
    ['c81', 'e81', 'f81', 'g81', 'h81', 'c82', 'e82', 'f82', 'g82', 'h82', 'c83', 'e83', 'f83', 'g83', 'h83', 'c84', 'e84', 'f84', 'g84', 'h84', 'c85', 'e85', 'f85', 'g85', 'h85', 'c86', 'e86', 'f86', 'g86', 'h86'], // Round 1
    ['c87', 'e87', 'f87', 'g87', 'h87', 'c88', 'e88', 'f88', 'g88', 'h88', 'c89', 'e89', 'f89', 'g89', 'h89', 'c90', 'e90', 'f90', 'g90', 'h90', 'c91', 'e91', 'f91', 'g91', 'h91', 'c92', 'e92', 'f92', 'g92', 'h92'], // Round 2
    ['c93', 'e93', 'f93', 'g93', 'h93', 'c94', 'e94', 'f94', 'g94', 'h94', 'c95', 'e95', 'f95', 'g95', 'h95', 'c96', 'e96', 'f96', 'g96', 'h96', 'c97', 'e97', 'f97', 'g97', 'h97', 'c98', 'e98', 'f98', 'g98', 'h98'], // Round 3
    ['c99', 'e99', 'f99', 'g99', 'h99', 'c100', 'e100', 'f100', 'g100', 'h100', 'c101', 'e101', 'f101', 'g101', 'h101', 'c102', 'e102', 'f102', 'g102', 'h102', 'c103', 'e103', 'f103', 'g103', 'h103', 'c104', 'e104', 'f104', 'g104', 'h104',], // Round 4
    ['c105', 'e105', 'f105', 'g105', 'h105', 'c106', 'e106', 'f106', 'g106', 'h106', 'c107', 'e107', 'f107', 'g107', 'h107', 'c108', 'e108', 'f108', 'g108', 'h108', 'c109', 'e109', 'f109', 'g109', 'h109', 'c110', 'e110', 'f110', 'g110', 'h110'], // Round 5
  ];

  talentManagementReportlearningindex1: any = [
    ['c115', 'e115', 'f115', 'g115', 'h115',], //0 round
    ['c116', 'e116', 'f116', 'g116', 'h116',], //1 round
    ['c117', 'e117', 'f117', 'g117', 'h117',], //2 round
    ['c118', 'e118', 'f118', 'g118', 'h118',], //3 round
    ['c119', 'e119', 'f119', 'g119', 'h119',], //4 round
    ['c120', 'e120', 'f120', 'g120', 'h120',], //5 round
  ]

  talentManagementReportlearningindex2: any = [
     ['c121', 'e121', 'f121', 'g121', 'h121',], //0 round
     ['c122', 'e122', 'f122', 'g122', 'h122',], //1 round
     ['c123', 'e123', 'f123', 'g123', 'h123',], //2 round
     ['c124', 'e124', 'f124', 'g124', 'h124',], //3 round
     ['c125', 'e125', 'f125', 'g125', 'h125',], //4 round
     ['c126', 'e126', 'f126', 'g126', 'h126',], //5 round
  ]

  talentManagementKpiReportperforlevinc: any = [
    ['c6', 'e6', 'f6', 'g6', 'h6', 'c7', 'e7', 'f7', 'g7', 'h7', 'c8', 'e8', 'f8', 'g8', 'h8',], // Round 0  
    ['c9', 'e9', 'f9', 'g9', 'h9', 'c10', 'e10', 'f10', 'g10', 'h10', 'c11', 'e11', 'f11', 'g11', 'h11',], // Round 1
    ['c12', 'e12', 'f12', 'g12', 'h12', 'c13', 'e13', 'f13', 'g13', 'h13', 'c14', 'e14', 'f14', 'g14', 'h14',],  // Round 2
    ['c15', 'e15', 'f15', 'g15', 'h15', 'c16', 'e16', 'f16', 'g16', 'h16', 'c17', 'e17', 'f17', 'g17', 'h17',],  // Round 3
    ['c18', 'e18', 'f18', 'g18', 'h18', 'c19', 'e19', 'f19', 'g19', 'h19', 'c20', 'e20', 'f20', 'g20', 'h20',],  // Round 4
    ['c21', 'e21', 'f21', 'g21', 'h21', 'c22', 'e22', 'f22', 'g22', 'h22', 'c23', 'e23', 'f23', 'g23', 'h23',],  // Round 5
  ]

   talentManagementKpiReportprodlev: any = [
    ['c29', 'e29', 'f29', 'g29', 'h29', 'c30', 'e30', 'f30', 'g30', 'h30', 'c31', 'e31', 'f31', 'g31', 'h31'], // Round 0
    ['c32', 'e32', 'f32', 'g32', 'h32', 'c33', 'e33', 'f33', 'g33', 'h33', 'c34', 'e34', 'f34', 'g34', 'h34'], // Round 1
    ['c35', 'e35', 'f35', 'g35', 'h35', 'c36', 'e36', 'f36', 'g36', 'h36', 'c37', 'e37', 'f37', 'g37', 'h37'], // Round 2
    ['c38', 'e38', 'f38', 'g38', 'h38', 'c39', 'e39', 'f39', 'g39', 'h39', 'c40', 'e40', 'f40', 'g40', 'h40'], // Round 3
    ['c41', 'e41', 'f41', 'g41', 'h41', 'c42', 'e42', 'f42', 'g42', 'h42', 'c43', 'e43', 'f43', 'g43', 'h43'], // Round 4
    ['c44', 'e44', 'f44', 'g44', 'h44', 'c45', 'e45', 'f45', 'g45', 'h45', 'c46', 'e46', 'f46', 'g46', 'h46'], // Round 5
  ];

   talentManagementKpiReportstresslev: any = [
    ['c52', 'e52', 'f52', 'g52', 'h52', 'c53', 'e53', 'f53', 'g53', 'h53', 'c54', 'e54', 'f54', 'g54', 'h54'], // Round 0
    ['c55', 'e55', 'f55', 'g55', 'h55', 'c56', 'e56', 'f56', 'g56', 'h56', 'c57', 'e57', 'f57', 'g57', 'h57'], // Round 1
    ['c58', 'e58', 'f58', 'g58', 'h58', 'c59', 'e59', 'f59', 'g59', 'h59', 'c60', 'e60', 'f60', 'g60', 'h60'], // Round 2
    ['c61', 'e61', 'f61', 'g61', 'h61', 'c62', 'e62', 'f62', 'g62', 'h62', 'c63', 'e63', 'f63', 'g63', 'h63'], // Round 3
    ['c64', 'e64', 'f64', 'g64', 'h64', 'c65', 'e65', 'f65', 'g65', 'h65', 'c66', 'e66', 'f66', 'g66', 'h66'], // Round 4
    ['c67', 'e67', 'f67', 'g67', 'h67', 'c68', 'e68', 'f68', 'g68', 'h68', 'c69', 'e69', 'f69', 'g69', 'h69'], // Round 5
  ];
  
   talentManagementKpiReportbudgetandcost: any = [
    ['c75', 'e75', 'f75', 'g75', 'h75', 'c76', 'e76', 'f76', 'g76', 'h76', 'c77', 'e77', 'f77', 'g77', 'h77', 'c78', 'e78', 'f78', 'g78', 'h78',], // Round 0
    ['c79', 'e79', 'f79', 'g79', 'h79', 'c80', 'e80', 'f80', 'g80', 'h80', 'c81', 'e81', 'f81', 'g81', 'h81', 'c82', 'e82', 'f82', 'g82', 'h82',], // Round 1
    ['c83', 'e83', 'f83', 'g83', 'h83', 'c84', 'e84', 'f84', 'g84', 'h84', 'c85', 'e85', 'f85', 'g85', 'h85', 'c86', 'e86', 'f86', 'g86', 'h86',], // Round 2
    ['c87', 'e87', 'f87', 'g87', 'h87', 'c88', 'e88', 'f88', 'g88', 'h88', 'c89', 'e89', 'f89', 'g89', 'h89', 'c90', 'e90', 'f90', 'g90', 'h90',], // Round 3
    ['c91', 'e91', 'f91', 'g91', 'h91', 'c92', 'e92', 'f92', 'g92', 'h92', 'c93', 'e93', 'f93', 'g93', 'h93', 'c94', 'e94', 'f94', 'g94', 'h94',], // Round 4
    ['c95', 'e95', 'f95', 'g95', 'h95', 'c96', 'e96', 'f96', 'g96', 'h96', 'c97', 'e97', 'f97', 'g97', 'h97', 'c98', 'e98', 'f98', 'g98', 'h98',], // Round 5
  ];

  talentManagementKpiReportkpis: any = [
    ['c104','e104','f104','g104','h104','c105','e105','f105','g105','h105',], // Round 0
    ['c106','e106','f106','g106','h106','c107','e107','f107','g107','h107',], // Round 1
    ['c108','e108','f108','g108','h108','c109','e109','f109','g109','h109',], // Round 2
    ['c110','e110','f110','g110','h110','c111','e111','f111','g111','h111',], // Round 3
    ['c112','e112','f112','g112','h112','c113','e113','f113','g113','h113',], // Round 4
    ['c114','e114','f114','g114','h114','c115','e115','f115','g115','h115',], // Round 5

  ]
  
  resultString: string = '';
  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\n\nMarket Outlook" +
      "\n" + responseresultcm.c6 +
      "\n" + responseresultcm.c13 +
      "\n" + responseresultcm.c20 +
      "\n\n" + responseresultcm.l8 + " " + responseresultcm.p8 +
      "\n" + responseresultcm.l13 + " " + responseresultcm.p13 +
      "\n" + responseresultcm.l18 + " " + responseresultcm.p18 +
      "\n" + responseresultcm.l23 + " " + responseresultcm.p23 +
      "\n" + responseresultcm.l28 + " " + responseresultcm.p28 +
      "\n" + responseresultcm.l33 + " " + responseresultcm.p33 +
      "\n" + responseresultcm.l38 + " " + responseresultcm.p38 +
      "\n" + responseresultcm.l46 + " " + responseresultcm.p46 +
      "\n" + responseresultcm.l51 + " " + responseresultcm.p51 +
      "\n" + responseresultcm.l56 + " " + responseresultcm.p56 +
      "\n" + responseresultcm.l61 + " " + responseresultcm.p61 +
      "\n" + responseresultcm.l66 + " " + responseresultcm.p66 +
      "\n" + responseresultcm.l71 + " " + responseresultcm.p71 +
      "\n" + responseresultcm.l76 + " " + responseresultcm.p76 +
      "\n" + responseresultcm.l84 + " " + responseresultcm.p84 +
      "\n" + responseresultcm.l89 + " " + responseresultcm.p89 +
      "\n" + responseresultcm.l94 + " " + responseresultcm.p94 +
      "\n" + responseresultcm.l102 + " " + responseresultcm.p102 +
      "\n" + responseresultcm.l107 + " " + responseresultcm.p107 +
      "\n" + responseresultcm.l112 + " " + responseresultcm.p112 +
      "\n" + responseresultcm.l117 + " " + responseresultcm.p117 +
      "\n" + responseresultcm.l122 + " " + responseresultcm.p122 +
      "\n" + responseresultcm.l127 + " " + responseresultcm.p127 +
      "\n" + responseresultcm.l132 + " " + responseresultcm.p132 +
      "\n" + responseresultcm.l140 + " " + responseresultcm.p140 +
      "\n" + responseresultcm.l145 + " " + responseresultcm.p145 +
      "\n" + responseresultcm.l150 + " " + responseresultcm.p150 +
      "\n" + responseresultcm.l158 + " " + responseresultcm.p158 +
      "\n" + responseresultcm.l163 + " " + responseresultcm.p163 +
      "\n" + responseresultcm.l168 + " " + responseresultcm.p168 +
      "\n" + responseresultcm.l173 + " " + responseresultcm.p173 +
      "\n" + responseresultcm.l178 + " " + responseresultcm.p178 +
      "\n" + responseresultcm.l183 + " " + responseresultcm.p183 +
      "\n" + responseresultcm.l188 + " " + responseresultcm.p188 +
      "\n" + responseresultcm.l196 + " " + responseresultcm.p196 +
      "\n" + responseresultcm.l201 + " " + responseresultcm.p201 +
      "\n" + responseresultcm.l206 + " " + responseresultcm.p206 +
      "\n" + responseresultcm.l214 + " " + responseresultcm.p214 +
      "\n" + responseresultcm.l219 + " " + responseresultcm.p219 +
      "\n" + responseresultcm.l224 + " " + responseresultcm.p224 +
      "\n" + responseresultcm.l229 + " " + responseresultcm.p229 +
      "\n" + responseresultcm.l234 + " " + responseresultcm.p234 +
      "\n" + responseresultcm.l239 + " " + responseresultcm.p239 +
      "\n" + responseresultcm.l244 + " " + responseresultcm.p244 +
      "\n" + responseresultcm.l252 + " " + responseresultcm.p252 +
      "\n" + responseresultcm.l257 + " " + responseresultcm.p257 +
      "\n" + responseresultcm.l262 + " " + responseresultcm.p262 +
      "\n" + responseresultcm.l270 + " " + responseresultcm.p270 +
      "\n" + responseresultcm.l277 + " " + responseresultcm.p277 +


      "\n\nInput Decisions" +
      "\n\nTalent Acquisition, Sales" +
      "\n" + "Channel Mix 1, Top Management" + " " + result[0] +
      "\n" + "Channel Mix 2, Top Management" + " " + result[1] +
      "\n" + "Channel Mix 3, Top Management" + " " + result[2] +
      "\n" + "Channel Mix 1, Senior Management" + " " + result[3] +
      "\n" + "Channel Mix 2, Senior Management" + " " + result[4] +
      "\n" + "Channel Mix 3, Senior Management" + " " + result[5] +
      "\n" + "Channel Mix 1, Junior Management" + " " + result[6] +
      "\n" + "Channel Mix 2, Junior Management" + " " + result[7] +
      "\n" + "Channel Mix 3, Junior Management" + " " + result[8] +
      "\n" + "Number of hiring Top Management, units" + " " + result[9] +
      "\n" + "Number of hiring Senior Management, units" + " " + result[10] +
      "\n" + "Number of hiring Junior Management, units" + " " + result[11] +
      "\n" + "Number of hiring for Bench Junior Management, units" + " " + result[12] +
      "\n" + "Number of Firing Junior Management, units" + " " + result[13] +
      "\n" + "Number of Firing Senior Management, units" + " " + result[14] +
      "\n" + "Number of Firing Top Management, units" + " " + result[15] +
      "\n" + "Vendor Hiring, Top & Senior Management" + " " + result[16] +
      "\n" + "Outsourcing, Junior Management" + " " + result[17] +
      "\nTalent Acquisition, Product & Engineering" +
      "\n" + "Channel Mix 1, Top Management" + " " + result[18] +
      "\n" + "Channel Mix 2, Top Management" + " " + result[19] +
      "\n" + "Channel Mix 3, Top Management" + " " + result[20] +
      "\n" + "Channel Mix 1, Senior Management" + " " + result[21] +
      "\n" + "Channel Mix 2, Senior Management" + " " + result[22] +
      "\n" + "Channel Mix 3, Senior Management" + " " + result[23] +
      "\n" + "Channel Mix 1, Junior Management" + " " + result[24] +
      "\n" + "Channel Mix 2, Junior Management" + " " + result[25] +
      "\n" + "Channel Mix 3, Junior Management" + " " + result[26] +
      "\n" + "Number of hiring Top Management, units" + " " + result[27] +
      "\n" + "Number of hiring Senior Management, units" + " " + result[28] +
      "\n" + "Number of hiring Junior Management, units" + " " + result[29] +
      "\n" + "Number of hiring for Bench Junior Management, units" + " " + result[30] +
      "\n" + "Number of Firing Junior Management, units" + " " + result[31] +
      "\n" + "Number of Firing Senior Management, units" + " " + result[32] +
      "\n" + "Number of Firing Top Management, units" + " " + result[33] +
      "\n" + "Vendor Hiring, Top & Senior Management" + " " + result[34] +
      "\n" + "Outsourcing, Junior Management" + " " + result[35] +
      "\nTalent Acquisition, Customer Support" +
      "\n" + "Channel Mix 1, Top Management" + " " + result[36] +
      "\n" + "Channel Mix 2, Top Management" + " " + result[37] +
      "\n" + "Channel Mix 3, Top Management" + " " + result[38] +
      "\n" + "Channel Mix 1, Senior Management" + " " + result[39] +
      "\n" + "Channel Mix 2, Senior Management" + " " + result[40] +
      "\n" + "Channel Mix 3, Senior Management" + " " + result[41] +
      "\n" + "Channel Mix 1, Junior Management" + " " + result[42] +
      "\n" + "Channel Mix 2, Junior Management" + " " + result[43] +
      "\n" + "Channel Mix 3, Junior Management" + " " + result[44] +
      "\n" + "Number of hiring Top Management, units" + " " + result[45] +
      "\n" + "Number of hiring Senior Management, units" + " " + result[46] +
      "\n" + "Number of hiring Junior Management, units" + " " + result[47] +
      "\n" + "Number of hiring for Bench Junior Management, units" + " " + result[48] +
      "\n" + "Number of Firing Junior Management, units" + " " + result[49] +
      "\n" + "Number of Firing Senior Management, units" + " " + result[50] +
      "\n" + "Number of Firing Top Management, units" + " " + result[51] +
      "\n" + "Vendor Hiring, Top & Senior Management" + " " + result[52] +
      "\n" + "Outsourcing, Junior Management" + " " + result[53] +
      "\nTalent Acquisition, Design & Communication" +
      "\n" + "Channel Mix 1, Top Management" + " " + result[54] +
      "\n" + "Channel Mix 2, Top Management" + " " + result[55] +
      "\n" + "Channel Mix 3, Top Management" + " " + result[56] +
      "\n" + "Channel Mix 1, Senior Management" + " " + result[57] +
      "\n" + "Channel Mix 2, Senior Management" + " " + result[58] +
      "\n" + "Channel Mix 3, Senior Management" + " " + result[59] +
      "\n" + "Channel Mix 1, Junior Management" + " " + result[60] +
      "\n" + "Channel Mix 2, Junior Management" + " " + result[61] +
      "\n" + "Channel Mix 3, Junior Management" + " " + result[62] +
      "\n" + "Number of hiring Top Management, units" + " " + result[63] +
      "\n" + "Number of hiring Senior Management, units" + " " + result[64] +
      "\n" + "Number of hiring Junior Management, units" + " " + result[65] +
      "\n" + "Number of hiring for Bench Junior Management, units" + " " + result[66] +
      "\n" + "Number of Firing Junior Management, units" + " " + result[67] +
      "\n" + "Number of Firing Senior Management, units" + " " + result[68] +
      "\n" + "Number of Firing Top Management, units" + " " + result[69] +
      "\n" + "Vendor Hiring, Top & Senior Management" + " " + result[70] +
      "\n" + "Outsourcing, Junior Management" + " " + result[71] +
      "\nTalent Management, Sales" +
      "\n" + "5 Star Compensation, % of employee, Top Management" + " " + result[72] +
      "\n" + "4 Star Compensation, % of employee, Top Management" + " " + result[73] +
      "\n" + "3 Star Compensation, % of employee, Top Management" + " " + result[74] +
      "\n" + "2 Star Compensation, % of employee, Top Management" + " " + result[75] +
      "\n" + "5 Star Compensation, % of employee, Senior Management" + " " + result[76] +
      "\n" + "4 Star Compensation, % of employee, Senior Management" + " " + result[77] +
      "\n" + "3 Star Compensation, % of employee, Senior Management" + " " + result[78] +
      "\n" + "2 Star Compensation, % of employee, Senior Management" + " " + result[79] +
      "\n" + "5 Star Compensation, % of employee, Junior Management" + " " + result[80] +
      "\n" + "4 Star Compensation, % of employee, Junior Management" + " " + result[81] +
      "\n" + "3 Star Compensation, % of employee, Junior Management" + " " + result[82] +
      "\n" + "2 Star Compensation, % of employee, Junior Management" + " " + result[83] +
      "\n" + "Incentive Policy, Senior Management" + " " + result[84] +
      "\n" + "Incentive Policy, Junior Management" + " " + result[85] +
      "\n" + "Paycut, Top Management" + " " + result[86] +
      "\n" + "Paycut, Senior Management" + " " + result[87] +
      "\n" + "Paycut, Junior Management" + " " + result[88] +
      "\n" + "Training, Top Management" + " " + result[89] +
      "\n" + "Training, Senior Management" + " " + result[90] +
      "\n" + "Training, Junior Management" + " " + result[91] +
      "\n" + "Leadership Programme, Senior Management" + " " + result[92] +
      "\n" + "Leadership Programme, Junior Management" + " " + result[93] +
      "\nTalent Management, Product & Engineering" +
      "\n" + "5 Star Compensation, % of employee, Top Management" + " " + result[94] +
      "\n" + "4 Star Compensation, % of employee, Top Management" + " " + result[95] +
      "\n" + "3 Star Compensation, % of employee, Top Management" + " " + result[96] +
      "\n" + "2 Star Compensation, % of employee, Top Management" + " " + result[97] +
      "\n" + "5 Star Compensation, % of employee, Senior Management" + " " + result[98] +
      "\n" + "4 Star Compensation, % of employee, Senior Management" + " " + result[99] +
      "\n" + "3 Star Compensation, % of employee, Senior Management" + " " + result[100] +
      "\n" + "2 Star Compensation, % of employee, Senior Management" + " " + result[101] +
      "\n" + "5 Star Compensation, % of employee, Junior Management" + " " + result[102] +
      "\n" + "4 Star Compensation, % of employee, Junior Management" + " " + result[103] +
      "\n" + "3 Star Compensation, % of employee, Junior Management" + " " + result[104] +
      "\n" + "2 Star Compensation, % of employee, Junior Management" + " " + result[105] +
      "\n" + "Incentive Policy, Senior Management" + " " + result[106] +
      "\n" + "Incentive Policy, Junior Management" + " " + result[107] +
      "\n" + "Paycut, Top Management" + " " + result[108] +
      "\n" + "Paycut, Senior Management" + " " + result[109] +
      "\n" + "Paycut, Junior Management" + " " + result[110] +
      "\n" + "Training, Top Management" + " " + result[111] +
      "\n" + "Training, Senior Management" + " " + result[112] +
      "\n" + "Training, Junior Management" + " " + result[113] +
      "\n" + "Leadership Programme, Senior Management" + " " + result[114] +
      "\n" + "Leadership Programme, Junior Management" + " " + result[115] +
      "\nTalent Management, Customer Support" +
      "\n" + "5 Star Compensation, % of employee, Top Management" + " " + result[116] +
      "\n" + "4 Star Compensation, % of employee, Top Management" + " " + result[117] +
      "\n" + "3 Star Compensation, % of employee, Top Management" + " " + result[117] +
      "\n" + "2 Star Compensation, % of employee, Top Management" + " " + result[118] +
      "\n" + "5 Star Compensation, % of employee, Senior Management" + " " + result[119] +
      "\n" + "4 Star Compensation, % of employee, Senior Management" + " " + result[120] +
      "\n" + "3 Star Compensation, % of employee, Senior Management" + " " + result[121] +
      "\n" + "2 Star Compensation, % of employee, Senior Management" + " " + result[122] +
      "\n" + "5 Star Compensation, % of employee, Junior Management" + " " + result[123] +
      "\n" + "4 Star Compensation, % of employee, Junior Management" + " " + result[124] +
      "\n" + "3 Star Compensation, % of employee, Junior Management" + " " + result[125] +
      "\n" + "2 Star Compensation, % of employee, Junior Management" + " " + result[126] +
      "\n" + "Incentive Policy, Senior Management" + " " + result[127] +
      "\n" + "Incentive Policy, Junior Management" + " " + result[128] +
      "\n" + "Paycut, Top Management" + " " + result[129] +
      "\n" + "Paycut, Senior Management" + " " + result[130] +
      "\n" + "Paycut, Junior Management" + " " + result[131] +
      "\n" + "Training, Top Management" + " " + result[132] +
      "\n" + "Training, Senior Management" + " " + result[133] +
      "\n" + "Training, Junior Management" + " " + result[134] +
      "\n" + "Leadership Programme, Senior Management" + " " + result[135] +
      "\n" + "Leadership Programme, Junior Management" + " " + result[136] +
      "\nTalent Management, Design & Communication" +
      "\n" + "5 Star Compensation, % of employee, Top Management" + " " + result[137] +
      "\n" + "4 Star Compensation, % of employee, Top Management" + " " + result[138] +
      "\n" + "3 Star Compensation, % of employee, Top Management" + " " + result[139] +
      "\n" + "2 Star Compensation, % of employee, Top Management" + " " + result[140] +
      "\n" + "5 Star Compensation, % of employee, Senior Management" + " " + result[141] +
      "\n" + "4 Star Compensation, % of employee, Senior Management" + " " + result[142] +
      "\n" + "3 Star Compensation, % of employee, Senior Management" + " " + result[143] +
      "\n" + "2 Star Compensation, % of employee, Senior Management" + " " + result[144] +
      "\n" + "5 Star Compensation, % of employee, Junior Management" + " " + result[145] +
      "\n" + "4 Star Compensation, % of employee, Junior Management" + " " + result[146] +
      "\n" + "3 Star Compensation, % of employee, Junior Management" + " " + result[147] +
      "\n" + "2 Star Compensation, % of employee, Junior Management" + " " + result[148] +
      "\n" + "Incentive Policy, Senior Management" + " " + result[149] +
      "\n" + "Incentive Policy, Junior Management" + " " + result[150] +
      "\n" + "Paycut, Top Management" + " " + result[151] +
      "\n" + "Paycut, Senior Management" + " " + result[152] +
      "\n" + "Paycut, Junior Management" + " " + result[153] +
      "\n" + "Training, Top Management" + " " + result[154] +
      "\n" + "Training, Senior Management" + " " + result[156] +
      "\n" + "Training, Junior Management" + " " + result[157] +
      "\n" + "Leadership Programme, Senior Management" + " " + result[158] +
      "\n" + "Leadership Programme, Junior Management" + " " + result[159] +
      "\nPolicy" +
      "\n" + "Division Policy 1" + " " + result[160] +
      "\n" + "Division Policy 2" + " " + result[161] +
      "\n" + "Division Policy 3" + " " + result[162] +
      "\n" + "Division Policy 4" + " " + result[163] +
      "\n" + "Division Policy 5" + " " + result[164] +
      "\n" + "Division Policy 6" + " " + result[165] +
      "\n" + "Division Policy 7" + " " + result[166] +
      "\n" + "Division Policy 8" + " " + result[167] +
      "\n" + "Division Policy 9" + " " + result[168] +
      "\n" + "Division Policy 10" + " " + result[169] +
      "\n" + "Diversity Inclusion Policy 1" + " " + result[170] +
      "\n" + "Diversity Inclusion Policy 2" + " " + result[171] +
      "\n" + "Diversity Inclusion Policy 3" + " " + result[172] +
      "\n" + "Diversity Inclusion Policy 4" + " " + result[173] +
      "\n" + "Diversity Inclusion Policy 5" + " " + result[174] +
      "\n" + "Diversity Inclusion Policy 6" + " " + result[175] +
      "\n" + "Diversity Inclusion Policy 7" + " " + result[176] +
      "\n" + "Diversity Inclusion Policy 8" + " " + result[177] +
      "\n" + "Diversity Inclusion Policy 9" + " " + result[178] +
      "\n" + "Diversity Inclusion Policy 10" + " " + result[179] +
      "\n" + "Towhall Programme 1" + " " + result[180] +
      "\n" + "Towhall Programme 2" + " " + result[181] +
      "\n" + "Towhall Programme 3" + " " + result[182] +
      "\nOrganizational & Budgets" +
      "\n" + "Performance & Goal Tool, Level" + " " + result[183] +
      "\n" + "Recruitment Analytics Tool, Level" + " " + result[184] +
      "\n" + "Workforce Analytics Tool, Level" + " " + result[185] +
      "\n" + "Process Content Guidance Tool, Level" + " " + result[186] +
      "\n" + "Conflict" + " " + result[187] +


      "\n\nOutput" +
      "\n\nOrganization & Budget" +
      "\n\n" + "Cost" +
      "\n" + [this.orgReportcost[this.attempt][0]] + " " + [this.orgReportcost[this.attempt][1]] +
      "\n" + [this.orgReportcost[this.attempt][2]] + " " + [this.orgReportcost[this.attempt][3]] +
      "\n" + [this.orgReportcost[this.attempt][4]] + " " + [this.orgReportcost[this.attempt][5]] +
      "\n" + [this.orgReportcost[this.attempt][6]] + " " + [this.orgReportcost[this.attempt][7]] +
      "\n" + [this.orgReportcost[this.attempt][8]] + " " + [this.orgReportcost[this.attempt][9]] +
      "\n" + "Increase in Effectiveness" +
      "\n" + [this.orgReportincineffect[this.attempt][0]] + " " + [this.orgReportincineffect[this.attempt][1]] +
      "\n" + [this.orgReportincineffect[this.attempt][2]] + " " + [this.orgReportincineffect[this.attempt][3]] +
      "\n" + [this.orgReportincineffect[this.attempt][4]] + " " + [this.orgReportincineffect[this.attempt][5]] +
      "\n" + [this.orgReportincineffect[this.attempt][6]] + " " + [this.orgReportincineffect[this.attempt][7]] +
      // "\n" + [this.orgReportincineffect[this.attempt][8]] + " " + [this.orgReportincineffect[this.attempt][9]] +
      "\n" + "Effectiveness Level" + " " +
      "\n" + [this.orgReporteffectlevel[this.attempt][0]] + " " + [this.orgReporteffectlevel[this.attempt][1]] +
      // "\n" + [this.orgReporteffectlevel[this.attempt][2]] + " " + [this.orgReporteffectlevel[this.attempt][3]] +
      // "\n" + [this.orgReporteffectlevel[this.attempt][4]] + " " + [this.orgReporteffectlevel[this.attempt][5]] +
      // "\n" + [this.orgReporteffectlevel[this.attempt][6]] + " " + [this.orgReporteffectlevel[this.attempt][7]] +
      // "\n" + [this.orgReporteffectlevel[this.attempt][8]] + " " + [this.orgReporteffectlevel[this.attempt][9]] +
      "\n\n" + "Talent Acquisition" +
      "\n" + " " + " " + "Sales" + " " + "Product & Engineering" + " " + "Customer Success" + " " + "Design & Communication" +
      "\n" + "Employer Branding Effect" +
      "\n" + [this.talentManagementReportemployeebrand[this.attempt][0]] + " " + [this.talentManagementReportemployeebrand[this.attempt][1]] + " " + [this.talentManagementReportemployeebrand[this.attempt][2]] + " " + [this.talentManagementReportemployeebrand[this.attempt][3]] + " " + [this.talentManagementReportemployeebrand[this.attempt][4]] +
      "\n" + [this.talentManagementReportemployeebrand[this.attempt][5]] + " " + [this.talentManagementReportemployeebrand[this.attempt][6]] + " " + [this.talentManagementReportemployeebrand[this.attempt][7]] + " " + [this.talentManagementReportemployeebrand[this.attempt][8]] + " " + [this.talentManagementReportemployeebrand[this.attempt][9]] +
      // "\n" + [this.talentManagementReportemployeebrand[this.attempt][10]] + " " + [this.talentManagementReportemployeebrand[this.attempt][11]] + " " + [this.talentManagementReportemployeebrand[this.attempt][12]] + " " + [this.talentManagementReportemployeebrand[this.attempt][13]] + " " + [this.talentManagementReportemployeebrand[this.attempt][14]] +
      // "\n" + [this.talentManagementReportemployeebrand[this.attempt][15]] + " " + [this.talentManagementReportemployeebrand[this.attempt][16]] + " " + [this.talentManagementReportemployeebrand[this.attempt][17]] + " " + [this.talentManagementReportemployeebrand[this.attempt][18]] + " " + [this.talentManagementReportemployeebrand[this.attempt][19]] +
      // "\n" + [this.talentManagementReportemployeebrand[this.attempt][20]] + " " + [this.talentManagementReportemployeebrand[this.attempt][21]] + " " + [this.talentManagementReportemployeebrand[this.attempt][22]] + " " + [this.talentManagementReportemployeebrand[this.attempt][23]] + " " + [this.talentManagementReportemployeebrand[this.attempt][24]] +
      "\n" + "Number of Employees" +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][0]] + " " + [this.talentManagementReportnoemployee[this.attempt][1]] + " " + [this.talentManagementReportnoemployee[this.attempt][2]] + " " + [this.talentManagementReportnoemployee[this.attempt][3]] + " " + [this.talentManagementReportnoemployee[this.attempt][4]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][5]] + " " + [this.talentManagementReportnoemployee[this.attempt][6]] + " " + [this.talentManagementReportnoemployee[this.attempt][7]] + " " + [this.talentManagementReportnoemployee[this.attempt][8]] + " " + [this.talentManagementReportnoemployee[this.attempt][9]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][10]] + " " + [this.talentManagementReportnoemployee[this.attempt][11]] + " " + [this.talentManagementReportnoemployee[this.attempt][12]] + " " + [this.talentManagementReportnoemployee[this.attempt][13]] + " " + [this.talentManagementReportnoemployee[this.attempt][14]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][15]] + " " + [this.talentManagementReportnoemployee[this.attempt][16]] + " " + [this.talentManagementReportnoemployee[this.attempt][17]] + " " + [this.talentManagementReportnoemployee[this.attempt][18]] + " " + [this.talentManagementReportnoemployee[this.attempt][19]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][20]] + " " + [this.talentManagementReportnoemployee[this.attempt][21]] + " " + [this.talentManagementReportnoemployee[this.attempt][22]] + " " + [this.talentManagementReportnoemployee[this.attempt][23]] + " " + [this.talentManagementReportnoemployee[this.attempt][24]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][25]] + " " + [this.talentManagementReportnoemployee[this.attempt][26]] + " " + [this.talentManagementReportnoemployee[this.attempt][27]] + " " + [this.talentManagementReportnoemployee[this.attempt][28]] + " " + [this.talentManagementReportnoemployee[this.attempt][29]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][30]] + " " + [this.talentManagementReportnoemployee[this.attempt][31]] + " " + [this.talentManagementReportnoemployee[this.attempt][32]] + " " + [this.talentManagementReportnoemployee[this.attempt][33]] + " " + [this.talentManagementReportnoemployee[this.attempt][34]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][35]] + " " + [this.talentManagementReportnoemployee[this.attempt][36]] + " " + [this.talentManagementReportnoemployee[this.attempt][37]] + " " + [this.talentManagementReportnoemployee[this.attempt][38]] + " " + [this.talentManagementReportnoemployee[this.attempt][39]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][40]] + " " + [this.talentManagementReportnoemployee[this.attempt][41]] + " " + [this.talentManagementReportnoemployee[this.attempt][42]] + " " + [this.talentManagementReportnoemployee[this.attempt][43]] + " " + [this.talentManagementReportnoemployee[this.attempt][44]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][45]] + " " + [this.talentManagementReportnoemployee[this.attempt][46]] + " " + [this.talentManagementReportnoemployee[this.attempt][47]] + " " + [this.talentManagementReportnoemployee[this.attempt][48]] + " " + [this.talentManagementReportnoemployee[this.attempt][49]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][50]] + " " + [this.talentManagementReportnoemployee[this.attempt][51]] + " " + [this.talentManagementReportnoemployee[this.attempt][52]] + " " + [this.talentManagementReportnoemployee[this.attempt][53]] + " " + [this.talentManagementReportnoemployee[this.attempt][54]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][55]] + " " + [this.talentManagementReportnoemployee[this.attempt][56]] + " " + [this.talentManagementReportnoemployee[this.attempt][57]] + " " + [this.talentManagementReportnoemployee[this.attempt][58]] + " " + [this.talentManagementReportnoemployee[this.attempt][59]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][60]] + " " + [this.talentManagementReportnoemployee[this.attempt][61]] + " " + [this.talentManagementReportnoemployee[this.attempt][62]] + " " + [this.talentManagementReportnoemployee[this.attempt][63]] + " " + [this.talentManagementReportnoemployee[this.attempt][64]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][65]] + " " + [this.talentManagementReportnoemployee[this.attempt][66]] + " " + [this.talentManagementReportnoemployee[this.attempt][67]] + " " + [this.talentManagementReportnoemployee[this.attempt][68]] + " " + [this.talentManagementReportnoemployee[this.attempt][69]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][70]] + " " + [this.talentManagementReportnoemployee[this.attempt][71]] + " " + [this.talentManagementReportnoemployee[this.attempt][72]] + " " + [this.talentManagementReportnoemployee[this.attempt][73]] + " " + [this.talentManagementReportnoemployee[this.attempt][74]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][75]] + " " + [this.talentManagementReportnoemployee[this.attempt][76]] + " " + [this.talentManagementReportnoemployee[this.attempt][77]] + " " + [this.talentManagementReportnoemployee[this.attempt][78]] + " " + [this.talentManagementReportnoemployee[this.attempt][79]] +
      "\n" + [this.talentManagementReportnoemployee[this.attempt][80]] + " " + [this.talentManagementReportnoemployee[this.attempt][81]] + " " + [this.talentManagementReportnoemployee[this.attempt][82]] + " " + [this.talentManagementReportnoemployee[this.attempt][83]] + " " + [this.talentManagementReportnoemployee[this.attempt][84]] +
     "\n" + "Gender Diversity Ratio % of Total Employees" +
      "\n" + [this.talentManagementReportgendivtottalemp[this.attempt][0]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][1]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][2]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][3]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][4]] +
      "\n" + [this.talentManagementReportgendivtottalemp[this.attempt][5]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][6]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][7]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][8]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][9]] +
      "\n" + [this.talentManagementReportgendivtottalemp[this.attempt][10]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][11]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][12]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][13]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][14]] +
      // "\n" + [this.talentManagementReportgendivtottalemp[this.attempt][15]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][16]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][17]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][18]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][19]] +
      // "\n" + [this.talentManagementReportgendivtottalemp[this.attempt][20]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][21]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][22]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][23]] + " " + [this.talentManagementReportgendivtottalemp[this.attempt][24]] +
      "\n" + "Cost of Recruitment, k INR" +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][0]] + " " + [this.talentManagementReportcostofrec[this.attempt][1]] + " " + [this.talentManagementReportcostofrec[this.attempt][2]] + " " + [this.talentManagementReportcostofrec[this.attempt][3]] + " " + [this.talentManagementReportcostofrec[this.attempt][4]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][5]] + " " + [this.talentManagementReportcostofrec[this.attempt][6]] + " " + [this.talentManagementReportcostofrec[this.attempt][7]] + " " + [this.talentManagementReportcostofrec[this.attempt][8]] + " " + [this.talentManagementReportcostofrec[this.attempt][9]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][10]] + " " + [this.talentManagementReportcostofrec[this.attempt][11]] + " " + [this.talentManagementReportcostofrec[this.attempt][12]] + " " + [this.talentManagementReportcostofrec[this.attempt][13]] + " " + [this.talentManagementReportcostofrec[this.attempt][14]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][15]] + " " + [this.talentManagementReportcostofrec[this.attempt][16]] + " " + [this.talentManagementReportcostofrec[this.attempt][17]] + " " + [this.talentManagementReportcostofrec[this.attempt][18]] + " " + [this.talentManagementReportcostofrec[this.attempt][19]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][20]] + " " + [this.talentManagementReportcostofrec[this.attempt][21]] + " " + [this.talentManagementReportcostofrec[this.attempt][22]] + " " + [this.talentManagementReportcostofrec[this.attempt][23]] + " " + [this.talentManagementReportcostofrec[this.attempt][24]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][25]] + " " + [this.talentManagementReportcostofrec[this.attempt][26]] + " " + [this.talentManagementReportcostofrec[this.attempt][27]] + " " + [this.talentManagementReportcostofrec[this.attempt][28]] + " " + [this.talentManagementReportcostofrec[this.attempt][29]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][30]] + " " + [this.talentManagementReportcostofrec[this.attempt][31]] + " " + [this.talentManagementReportcostofrec[this.attempt][32]] + " " + [this.talentManagementReportcostofrec[this.attempt][33]] + " " + [this.talentManagementReportcostofrec[this.attempt][34]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][35]] + " " + [this.talentManagementReportcostofrec[this.attempt][36]] + " " + [this.talentManagementReportcostofrec[this.attempt][37]] + " " + [this.talentManagementReportcostofrec[this.attempt][38]] + " " + [this.talentManagementReportcostofrec[this.attempt][39]] +
      "\n" + [this.talentManagementReportcostofrec[this.attempt][40]] + " " + [this.talentManagementReportcostofrec[this.attempt][41]] + " " + [this.talentManagementReportcostofrec[this.attempt][42]] + " " + [this.talentManagementReportcostofrec[this.attempt][43]] + " " + [this.talentManagementReportcostofrec[this.attempt][44]] +      
      "\n" + "Recruitment Metrics" +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][0]] + " " + [this.talentManagementReportrecmatrix[this.attempt][1]] + " " + [this.talentManagementReportrecmatrix[this.attempt][2]] + " " + [this.talentManagementReportrecmatrix[this.attempt][3]] + " " + [this.talentManagementReportrecmatrix[this.attempt][4]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][5]] + " " + [this.talentManagementReportrecmatrix[this.attempt][6]] + " " + [this.talentManagementReportrecmatrix[this.attempt][7]] + " " + [this.talentManagementReportrecmatrix[this.attempt][8]] + " " + [this.talentManagementReportrecmatrix[this.attempt][9]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][10]] + " " + [this.talentManagementReportrecmatrix[this.attempt][11]] + " " + [this.talentManagementReportrecmatrix[this.attempt][12]] + " " + [this.talentManagementReportrecmatrix[this.attempt][13]] + " " + [this.talentManagementReportrecmatrix[this.attempt][14]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][15]] + " " + [this.talentManagementReportrecmatrix[this.attempt][16]] + " " + [this.talentManagementReportrecmatrix[this.attempt][17]] + " " + [this.talentManagementReportrecmatrix[this.attempt][18]] + " " + [this.talentManagementReportrecmatrix[this.attempt][19]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][20]] + " " + [this.talentManagementReportrecmatrix[this.attempt][21]] + " " + [this.talentManagementReportrecmatrix[this.attempt][22]] + " " + [this.talentManagementReportrecmatrix[this.attempt][23]] + " " + [this.talentManagementReportrecmatrix[this.attempt][24]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][25]] + " " + [this.talentManagementReportrecmatrix[this.attempt][26]] + " " + [this.talentManagementReportrecmatrix[this.attempt][27]] + " " + [this.talentManagementReportrecmatrix[this.attempt][28]] + " " + [this.talentManagementReportrecmatrix[this.attempt][29]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][30]] + " " + [this.talentManagementReportrecmatrix[this.attempt][31]] + " " + [this.talentManagementReportrecmatrix[this.attempt][32]] + " " + [this.talentManagementReportrecmatrix[this.attempt][33]] + " " + [this.talentManagementReportrecmatrix[this.attempt][34]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][35]] + " " + [this.talentManagementReportrecmatrix[this.attempt][36]] + " " + [this.talentManagementReportrecmatrix[this.attempt][37]] + " " + [this.talentManagementReportrecmatrix[this.attempt][38]] + " " + [this.talentManagementReportrecmatrix[this.attempt][39]] +
      "\n" + [this.talentManagementReportrecmatrix[this.attempt][40]] + " " + [this.talentManagementReportrecmatrix[this.attempt][41]] + " " + [this.talentManagementReportrecmatrix[this.attempt][42]] + " " + [this.talentManagementReportrecmatrix[this.attempt][43]] + " " + [this.talentManagementReportrecmatrix[this.attempt][44]] +      
      "\n\n" + "Talent Management" +
      "\n" + " " + " " + "Sales" + " " + "Product & Engineering" + " " + "Customer Success" + " " + "Design & Communication" +
      "\n" + "Awareness Level %" +
      "\n" + [this.talentManagementReportawarnesslevel[this.attempt][0]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][1]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][2]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][3]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][4]] +
      "\n" + [this.talentManagementReportawarnesslevel[this.attempt][5]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][6]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][7]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][8]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][9]] +
      "\n" + [this.talentManagementReportawarnesslevel[this.attempt][10]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][11]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][12]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][13]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][14]] +
      // "\n" + [this.talentManagementReportawarnesslevel[this.attempt][15]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][16]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][17]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][18]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][19]] +
      // "\n" + [this.talentManagementReportawarnesslevel[this.attempt][20]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][21]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][22]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][23]] + " " + [this.talentManagementReportawarnesslevel[this.attempt][24]] +
      "\n" + "Commitment Level %" +
      "\n" + [this.talentManagementReportcommitmentlevel[this.attempt][0]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][1]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][2]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][3]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][4]] +
      "\n" + [this.talentManagementReportcommitmentlevel[this.attempt][5]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][6]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][7]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][8]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][9]] +
      "\n" + [this.talentManagementReportcommitmentlevel[this.attempt][10]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][11]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][12]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][13]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][14]] +
      // "\n" + [this.talentManagementReportcommitmentlevel[this.attempt][15]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][16]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][17]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][18]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][19]] +
      // "\n" + [this.talentManagementReportcommitmentlevel[this.attempt][20]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][21]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][22]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][23]] + " " + [this.talentManagementReportcommitmentlevel[this.attempt][24]] +
      "\n" + "Employee Engagement Score, Max 5" +
      "\n" + [this.talentManagementReportempengscorelevel[this.attempt][0]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][1]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][2]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][3]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][4]] +
      "\n" + [this.talentManagementReportempengscorelevel[this.attempt][5]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][6]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][7]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][8]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][9]] +
      "\n" + [this.talentManagementReportempengscorelevel[this.attempt][10]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][11]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][12]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][13]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][14]] +
      // "\n" + [this.talentManagementReportempengscorelevel[this.attempt][15]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][16]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][17]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][18]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][19]] +
      // "\n" + [this.talentManagementReportempengscorelevel[this.attempt][20]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][21]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][22]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][23]] + " " + [this.talentManagementReportempengscorelevel[this.attempt][24]] +
      "\n" + "Cost of Learning & Management, k INR" +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][0]] + " " + [this.talentManagementReportcostoflearning[this.attempt][1]] + " " + [this.talentManagementReportcostoflearning[this.attempt][2]] + " " + [this.talentManagementReportcostoflearning[this.attempt][3]] + " " + [this.talentManagementReportcostoflearning[this.attempt][4]] +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][5]] + " " + [this.talentManagementReportcostoflearning[this.attempt][6]] + " " + [this.talentManagementReportcostoflearning[this.attempt][7]] + " " + [this.talentManagementReportcostoflearning[this.attempt][8]] + " " + [this.talentManagementReportcostoflearning[this.attempt][9]] +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][10]] + " " + [this.talentManagementReportcostoflearning[this.attempt][11]] + " " + [this.talentManagementReportcostoflearning[this.attempt][12]] + " " + [this.talentManagementReportcostoflearning[this.attempt][13]] + " " + [this.talentManagementReportcostoflearning[this.attempt][14]] +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][15]] + " " + [this.talentManagementReportcostoflearning[this.attempt][16]] + " " + [this.talentManagementReportcostoflearning[this.attempt][17]] + " " + [this.talentManagementReportcostoflearning[this.attempt][18]] + " " + [this.talentManagementReportcostoflearning[this.attempt][19]] +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][20]] + " " + [this.talentManagementReportcostoflearning[this.attempt][21]] + " " + [this.talentManagementReportcostoflearning[this.attempt][22]] + " " + [this.talentManagementReportcostoflearning[this.attempt][23]] + " " + [this.talentManagementReportcostoflearning[this.attempt][24]] +
      "\n" + [this.talentManagementReportcostoflearning[this.attempt][25]] + " " + [this.talentManagementReportcostoflearning[this.attempt][26]] + " " + [this.talentManagementReportcostoflearning[this.attempt][27]] + " " + [this.talentManagementReportcostoflearning[this.attempt][28]] + " " + [this.talentManagementReportcostoflearning[this.attempt][29]] +

      "\n" + "Learning Index %" +
      "\n" + [this.talentManagementReportlearningindex1[this.attempt][0]] + " " + [this.talentManagementReportlearningindex1[this.attempt][1]] + " " + [this.talentManagementReportlearningindex1[this.attempt][2]] + " " + [this.talentManagementReportlearningindex1[this.attempt][3]] + " " + [this.talentManagementReportlearningindex1[this.attempt][4]] +
      "\n" + [this.talentManagementReportlearningindex1[this.attempt][5]] + " " + [this.talentManagementReportlearningindex1[this.attempt][6]] + " " + [this.talentManagementReportlearningindex1[this.attempt][7]] + " " + [this.talentManagementReportlearningindex1[this.attempt][8]] + " " + [this.talentManagementReportlearningindex1[this.attempt][9]] +
      // "\n" + [this.talentManagementReportlearningindex1[this.attempt][10]] + " " + [this.talentManagementReportlearningindex1[this.attempt][11]] + " " + [this.talentManagementReportlearningindex1[this.attempt][12]] + " " + [this.talentManagementReportlearningindex1[this.attempt][13]] + " " + [this.talentManagementReportlearningindex1[this.attempt][14]] +
      // "\n" + [this.talentManagementReportlearningindex1[this.attempt][15]] + " " + [this.talentManagementReportlearningindex1[this.attempt][16]] + " " + [this.talentManagementReportlearningindex1[this.attempt][17]] + " " + [this.talentManagementReportlearningindex1[this.attempt][18]] + " " + [this.talentManagementReportlearningindex1[this.attempt][19]] +
      // "\n" + [this.talentManagementReportlearningindex1[this.attempt][20]] + " " + [this.talentManagementReportlearningindex1[this.attempt][21]] + " " + [this.talentManagementReportlearningindex1[this.attempt][22]] + " " + [this.talentManagementReportlearningindex1[this.attempt][23]] + " " + [this.talentManagementReportlearningindex1[this.attempt][24]] +
      // "\n" + "Learning Index %" +
      // "\n" + [this.talentManagementReportlearningindex2[this.attempt][0]] + " " + [this.talentManagementReportlearningindex2[this.attempt][1]] + " " + [this.talentManagementReportlearningindex2[this.attempt][2]] + " " + [this.talentManagementReportlearningindex2[this.attempt][3]] + " " + [this.talentManagementReportlearningindex2[this.attempt][4]] +
      // "\n" + [this.talentManagementReportlearningindex2[this.attempt][5]] + " " + [this.talentManagementReportlearningindex2[this.attempt][6]] + " " + [this.talentManagementReportlearningindex2[this.attempt][7]] + " " + [this.talentManagementReportlearningindex2[this.attempt][8]] + " " + [this.talentManagementReportlearningindex2[this.attempt][9]] +
      // "\n" + [this.talentManagementReportlearningindex2[this.attempt][10]] + " " + [this.talentManagementReportlearningindex2[this.attempt][11]] + " " + [this.talentManagementReportlearningindex2[this.attempt][12]] + " " + [this.talentManagementReportlearningindex2[this.attempt][13]] + " " + [this.talentManagementReportlearningindex2[this.attempt][14]] +
      // "\n" + [this.talentManagementReportlearningindex2[this.attempt][15]] + " " + [this.talentManagementReportlearningindex2[this.attempt][16]] + " " + [this.talentManagementReportlearningindex2[this.attempt][17]] + " " + [this.talentManagementReportlearningindex2[this.attempt][18]] + " " + [this.talentManagementReportlearningindex2[this.attempt][19]] +
      // "\n" + [this.talentManagementReportlearningindex2[this.attempt][20]] + " " + [this.talentManagementReportlearningindex2[this.attempt][21]] + " " + [this.talentManagementReportlearningindex2[this.attempt][22]] + " " + [this.talentManagementReportlearningindex2[this.attempt][23]] + " " + [this.talentManagementReportlearningindex2[this.attempt][24]] +
      "\n\n" + "KPI" +
      "\n" + " " + " " + "Sales" + " " + "Product & Engineering" + " " + "Customer Success" + " " + "Design & Communication" +
      "\n" + "Performance Level Incremental, %" +
      "\n" + [this.talentManagementKpiReportperforlevinc[this.attempt][0]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][1]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][2]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][3]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][4]] +
      "\n" + [this.talentManagementKpiReportperforlevinc[this.attempt][5]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][6]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][7]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][8]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][9]] +
      "\n" + [this.talentManagementKpiReportperforlevinc[this.attempt][10]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][11]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][12]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][13]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][14]] +
      // "\n" + [this.talentManagementKpiReportperforlevinc[this.attempt][15]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][16]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][17]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][18]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][19]] +
      // "\n" + [this.talentManagementKpiReportperforlevinc[this.attempt][20]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][21]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][22]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][23]] + " " + [this.talentManagementKpiReportperforlevinc[this.attempt][24]] +
      "\n" + "Productivity Level %" +
      "\n" + [this.talentManagementKpiReportprodlev[this.attempt][0]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][1]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][2]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][3]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][4]] +
      "\n" + [this.talentManagementKpiReportprodlev[this.attempt][5]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][6]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][7]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][8]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][9]] +
      "\n" + [this.talentManagementKpiReportprodlev[this.attempt][10]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][11]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][12]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][13]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][14]] +
      // "\n" + [this.talentManagementKpiReportprodlev[this.attempt][15]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][16]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][17]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][18]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][19]] +
      // "\n" + [this.talentManagementKpiReportprodlev[this.attempt][20]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][21]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][22]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][23]] + " " + [this.talentManagementKpiReportprodlev[this.attempt][24]] +
      "\n" + "Stress Level %" +
      "\n" + [this.talentManagementKpiReportstresslev[this.attempt][0]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][1]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][2]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][3]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][4]] +
      "\n" + [this.talentManagementKpiReportstresslev[this.attempt][5]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][6]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][7]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][8]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][9]] +
      "\n" + [this.talentManagementKpiReportstresslev[this.attempt][10]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][11]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][12]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][13]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][14]] +
      // "\n" + [this.talentManagementKpiReportstresslev[this.attempt][15]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][16]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][17]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][18]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][19]] +
      // "\n" + [this.talentManagementKpiReportstresslev[this.attempt][20]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][21]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][22]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][23]] + " " + [this.talentManagementKpiReportstresslev[this.attempt][24]] +
      "\n" + "Budget & Cost, k INR" +
      "\n" + [this.talentManagementKpiReportbudgetandcost[this.attempt][0]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][1]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][2]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][3]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][4]] +
      "\n" + [this.talentManagementKpiReportbudgetandcost[this.attempt][5]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][6]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][7]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][8]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][9]] +
      "\n" + [this.talentManagementKpiReportbudgetandcost[this.attempt][10]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][11]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][12]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][13]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][14]] +
      "\n" + [this.talentManagementKpiReportbudgetandcost[this.attempt][15]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][16]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][17]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][18]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][19]] +
      // "\n" + [this.talentManagementKpiReportbudgetandcost[this.attempt][20]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][21]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][22]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][23]] + " " + [this.talentManagementKpiReportbudgetandcost[this.attempt][24]] +
      "\n" + "KPI's" +
      "\n" + [this.talentManagementKpiReportkpis[this.attempt][0]] + " " + [this.talentManagementKpiReportkpis[this.attempt][1]] + " " + [this.talentManagementKpiReportkpis[this.attempt][2]] + " " + [this.talentManagementKpiReportkpis[this.attempt][3]] + " " + [this.talentManagementKpiReportkpis[this.attempt][4]] +
      "\n" + [this.talentManagementKpiReportkpis[this.attempt][5]] + " " + [this.talentManagementKpiReportkpis[this.attempt][6]] + " " + [this.talentManagementKpiReportkpis[this.attempt][7]] + " " + [this.talentManagementKpiReportkpis[this.attempt][8]] + " " + [this.talentManagementKpiReportkpis[this.attempt][9]];
      // "\n" + [this.talentManagementKpiReportkpis[this.attempt][10]] + " " + [this.talentManagementKpiReportkpis[this.attempt][11]] + " " + [this.talentManagementKpiReportkpis[this.attempt][12]] + " " + [this.talentManagementKpiReportkpis[this.attempt][13]] + " " + [this.talentManagementKpiReportkpis[this.attempt][14]] +
      // "\n" + [this.talentManagementKpiReportkpis[this.attempt][15]] + " " + [this.talentManagementKpiReportkpis[this.attempt][16]] + " " + [this.talentManagementKpiReportkpis[this.attempt][17]] + " " + [this.talentManagementKpiReportkpis[this.attempt][18]] + " " + [this.talentManagementKpiReportkpis[this.attempt][19]] +
      // "\n" + [this.talentManagementKpiReportkpis[this.attempt][20]] + " " + [this.talentManagementKpiReportkpis[this.attempt][21]] + " " + [this.talentManagementKpiReportkpis[this.attempt][22]] + " " + [this.talentManagementKpiReportkpis[this.attempt][23]] + " " + [this.talentManagementKpiReportkpis[this.attempt][24]] ;
      
    return assesment;
  }
}
