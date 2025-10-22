import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductconsumerassesmentserviceService {

  constructor() { }


  
  useranalysisSubmit(responseresultcm: any,  result: any ,responseresultdatabase: any  ): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMarket Outlook" +
      "\n" + responseresultcm.b93 +
      "\n\nGame Genre Preference" +
      "\n\n" + " " + responseresultcm.e98 + " " + responseresultcm.f98 +
      "\n" + responseresultcm.d99 + " " + responseresultcm.e99 + " " + responseresultcm.f99 +
      "\n" + responseresultcm.d100 + " " + responseresultcm.e100 + " " + responseresultcm.f100 +
      "\n" + responseresultcm.d101 + " " + responseresultcm.e101 + " " + responseresultcm.f101 +
      "\n" + responseresultcm.d102 + " " + responseresultcm.e102 + " " + responseresultcm.f102 +
      "\n" + responseresultcm.d103 + " " + responseresultcm.e103 + " " + responseresultcm.f103 +
      "\n\nMale Gamers Preference" +
      "\n\n" + " " + responseresultcm.e106 + " " + responseresultcm.f106 + " " + responseresultcm.g106 + " " + responseresultcm.h106 +
      "\n" + responseresultcm.d107 + " " + responseresultcm.e107 + " " + responseresultcm.f107 + " " + responseresultcm.g107 + " " + responseresultcm.h107 +
      "\n" + responseresultcm.d108 + " " + responseresultcm.e108 + " " + responseresultcm.f108 + " " + responseresultcm.g108 + " " + responseresultcm.h108 +
      "\n" + responseresultcm.d109 + " " + responseresultcm.e109 + " " + responseresultcm.f109 + " " + responseresultcm.g109 + " " + responseresultcm.h109 +
      "\n" + responseresultcm.d110 + " " + responseresultcm.e110 + " " + responseresultcm.f110 + " " + responseresultcm.g110 + " " + responseresultcm.h110 +
      "\n" + responseresultcm.d111 + " " + responseresultcm.e111 + " " + responseresultcm.f111 + " " + responseresultcm.g111 + " " + responseresultcm.h111 +
      "\n\nFemale Gamers Preference" +
      "\n\n" + " " + responseresultcm.e114 + " " + responseresultcm.f114 + " " + responseresultcm.g114 + " " + responseresultcm.h114 +
      "\n" + responseresultcm.d115 + " " + responseresultcm.e115 + " " + responseresultcm.f115 + " " + responseresultcm.g115 + " " + responseresultcm.h115 +
      "\n" + responseresultcm.d116 + " " + responseresultcm.e116 + " " + responseresultcm.f116 + " " + responseresultcm.g116 + " " + responseresultcm.h116 +
      "\n" + responseresultcm.d117 + " " + responseresultcm.e117 + " " + responseresultcm.f117 + " " + responseresultcm.g117 + " " + responseresultcm.h117 +
      "\n" + responseresultcm.d118 + " " + responseresultcm.e118 + " " + responseresultcm.f118 + " " + responseresultcm.g118 + " " + responseresultcm.h118 +
      "\n" + responseresultcm.d119 + " " + responseresultcm.e119 + " " + responseresultcm.f119 + " " + responseresultcm.g119 + " " + responseresultcm.h119 +
      "\n\nNCCS Household" +
      "\n\n" + " " + responseresultcm.e122 + " " + responseresultcm.f122 + " " + responseresultcm.g122 +
      "\n" + responseresultcm.d123 + " " + responseresultcm.e123 + " " + responseresultcm.f123 + " " + responseresultcm.g123 +
      "\n" + responseresultcm.d124 + " " + responseresultcm.e124 + " " + responseresultcm.f124 + " " + responseresultcm.g124 +
      "\n" + responseresultcm.d125 + " " + responseresultcm.e125 + " " + responseresultcm.f125 + " " + responseresultcm.g125 +
      "\n" + responseresultcm.d126 + " " + responseresultcm.e126 + " " + responseresultcm.f126 + " " + responseresultcm.g126 +
      "\n" + responseresultcm.d127 + " " + responseresultcm.e127 + " " + responseresultcm.f127 + " " + responseresultcm.g127 +
      "\n\nCommunication Channel Male Gamers Activities" +
      "\n\n" + " " + responseresultcm.e130 + " " + responseresultcm.f130 + " " + responseresultcm.g130 + " " + responseresultcm.h130 +
      "\n" + responseresultcm.d131 + " " + responseresultcm.e131 + " " + responseresultcm.f131 + " " + responseresultcm.g131 + " " + responseresultcm.h131 +
      "\n" + responseresultcm.d132 + " " + responseresultcm.e132 + " " + responseresultcm.f132 + " " + responseresultcm.g132 + " " + responseresultcm.h132 +
      "\n" + responseresultcm.d133 + " " + responseresultcm.e133 + " " + responseresultcm.f133 + " " + responseresultcm.g133 + " " + responseresultcm.h133 +
      "\n" + responseresultcm.d134 + " " + responseresultcm.e134 + " " + responseresultcm.f134 + " " + responseresultcm.g134 + " " + responseresultcm.h134 +
      "\n" + responseresultcm.d135 + " " + responseresultcm.e135 + " " + responseresultcm.f135 + " " + responseresultcm.g135 + " " + responseresultcm.h135 +
      "\n" + responseresultcm.d136 + " " + responseresultcm.e136 + " " + responseresultcm.f136 + " " + responseresultcm.g136 + " " + responseresultcm.h136 +
      "\n" + responseresultcm.d137 + " " + responseresultcm.e137 + " " + responseresultcm.f137 + " " + responseresultcm.g137 + " " + responseresultcm.h137 +
      "\n" + responseresultcm.d138 + " " + responseresultcm.e138 + " " + responseresultcm.f138 + " " + responseresultcm.g138 + " " + responseresultcm.h138 +
      "\n" + responseresultcm.d139 + " " + responseresultcm.e139 + " " + responseresultcm.f139 + " " + responseresultcm.g139 + " " + responseresultcm.h139 +
      "\n" + responseresultcm.d140 + " " + responseresultcm.e140 + " " + responseresultcm.f140 + " " + responseresultcm.g140 + " " + responseresultcm.h140 +
      "\n\nFemale Gamers Activities" +
      "\n\n" + " " + responseresultcm.e146 + " " + responseresultcm.f146 + " " + responseresultcm.g146 + " " + responseresultcm.h146 +
      "\n" + responseresultcm.d147 + " " + responseresultcm.e147 + " " + responseresultcm.f147 + " " + responseresultcm.g147 + " " + responseresultcm.h147 +
      "\n" + responseresultcm.d148 + " " + responseresultcm.e148 + " " + responseresultcm.f148 + " " + responseresultcm.g148 + " " + responseresultcm.h148 +
      "\n" + responseresultcm.d149 + " " + responseresultcm.e149 + " " + responseresultcm.f149 + " " + responseresultcm.g149 + " " + responseresultcm.h149 +
      "\n" + responseresultcm.d150 + " " + responseresultcm.e150 + " " + responseresultcm.f150 + " " + responseresultcm.g150 + " " + responseresultcm.h150 +
      "\n" + responseresultcm.d151 + " " + responseresultcm.e151 + " " + responseresultcm.f151 + " " + responseresultcm.g151 + " " + responseresultcm.h151 +
      "\n" + responseresultcm.d152 + " " + responseresultcm.e152 + " " + responseresultcm.f152 + " " + responseresultcm.g152 + " " + responseresultcm.h152 +
      "\n" + responseresultcm.d153 + " " + responseresultcm.e153 + " " + responseresultcm.f153 + " " + responseresultcm.g153 + " " + responseresultcm.h153 +
      "\n" + responseresultcm.d154 + " " + responseresultcm.e154 + " " + responseresultcm.f154 + " " + responseresultcm.g154 + " " + responseresultcm.h154 +
      "\n" + responseresultcm.d155 + " " + responseresultcm.e155 + " " + responseresultcm.f155 + " " + responseresultcm.g155 + " " + responseresultcm.h155 +
      "\n" + responseresultcm.d156 + " " + responseresultcm.e156 + " " + responseresultcm.f156 + " " + responseresultcm.g156 + " " + responseresultcm.h156 +
      "\n\nTarget" +
      "\n\n" + " " + "Population Index Advantage" +
      "\n" + responseresultcm.j95 + " " + responseresultcm.k95 +
      "\n" + responseresultcm.j96 + " " + responseresultcm.k96 +
      "\n" + responseresultcm.j97 + " " + responseresultcm.k97 +
      "\n\n" + " " + "Metro Index" + " " + "Non-metro Index" + " " + "Both Index" +
      "\n" + responseresultcm.j100 + " " + responseresultcm.k100 + " " + responseresultcm.l100 + " " + responseresultcm.m100 +
      "\n" + responseresultcm.j101 + " " + responseresultcm.k101 + " " + responseresultcm.l101 + " " + responseresultcm.m101 +
      "\n" + responseresultcm.j102 + " " + responseresultcm.k102 + " " + responseresultcm.l102 + " " + responseresultcm.m102 +
      "\n\n" + " " + "Male Index" + " " + "Female Index" + " " + "Both Index" +
      "\n" + responseresultcm.j105 + " " + responseresultcm.k105 + " " + responseresultcm.l105 + " " + responseresultcm.m105 +
      "\n" + responseresultcm.j106 + " " + responseresultcm.k106 + " " + responseresultcm.l106 + " " + responseresultcm.m106 +
      "\n" + responseresultcm.j107 + " " + responseresultcm.k107 + " " + responseresultcm.l107 + " " + responseresultcm.m107 +
      "\n\n" + " " + "NCCS A Index" + " " + "NCCS B Index" + " " + "NCCS C/D/E Index" +
      "\n" + responseresultcm.j110 + " " + responseresultcm.k110 + " " + responseresultcm.l110 + " " + responseresultcm.m110 +
      "\n" + responseresultcm.j111 + " " + responseresultcm.k111 + " " + responseresultcm.l111 + " " + responseresultcm.m111 +
      "\n" + responseresultcm.j112 + " " + responseresultcm.k112 + " " + responseresultcm.l112 + " " + responseresultcm.m112 +
      "\n\nLanguage" +
      "\n" + " " + "Index Advantage" +
      "\n" + responseresultcm.j136 + " " + responseresultcm.l136 +
      "\n" + responseresultcm.j137 + " " + responseresultcm.l137 +
      "\n" + responseresultcm.j138 + " " + responseresultcm.l138 +
      "\n" + responseresultcm.j139 + " " + responseresultcm.l139 +
      "\n" + responseresultcm.j140 + " " + responseresultcm.l140 +
      "\n" + responseresultcm.j141 + " " + responseresultcm.l141 +
      "\n" + responseresultcm.j142 + " " + responseresultcm.l142 +
      "\n" + responseresultcm.j143 + " " + responseresultcm.l143 +
      "\n" + responseresultcm.j144 + " " + responseresultcm.l144 +
      "\n" + responseresultcm.j145 + " " + responseresultcm.l145 +
      "\n" + responseresultcm.j146 + " " + responseresultcm.l146 +
      "\n" + responseresultcm.j147 + " " + responseresultcm.l147 +
      "\n\nIncome" +
      "\n" + " " + "% of Population" + " " + "Paying Factor" +
      "\n" + responseresultcm.j151 + " " + responseresultcm.k151 + " " + responseresultcm.l151 +
      "\n" + responseresultcm.j152 + " " + responseresultcm.k152 + " " + responseresultcm.l152 +
      "\n" + responseresultcm.j153 + " " + responseresultcm.k153 + " " + responseresultcm.l153 +
      "\n\nConceptualizing" +
      "\n\n" + responseresultcm.p95 + " " + responseresultcm.q94 + " " + responseresultcm.r94 + " " + responseresultcm.s94 + " " + responseresultcm.t94 + " " + responseresultcm.u94 + " " + responseresultcm.v94 + " " + responseresultcm.w94 + " " + responseresultcm.x94 + " " + responseresultcm.y94 +
      "\n" + " " + responseresultcm.q95 + " " + responseresultcm.r95 + " " + responseresultcm.s95 + " " + responseresultcm.t95 + " " + responseresultcm.u95 + " " + responseresultcm.v95 + " " + responseresultcm.w95 +
      "\n" + " " + responseresultcm.p96 + " " + responseresultcm.q96 + " " + responseresultcm.r96 + " " + responseresultcm.s96 + " " + responseresultcm.t96 + " " + responseresultcm.u96 + " " + responseresultcm.v96 + " " + responseresultcm.w96 +
      "\n" + " " + responseresultcm.p97 + " " + responseresultcm.q97 + " " + responseresultcm.r97 + " " + responseresultcm.s97 + " " + responseresultcm.t97 + " " + responseresultcm.u97 + " " + responseresultcm.v97 + " " + responseresultcm.w97 +
      "\n" + " " + responseresultcm.p98 + " " + responseresultcm.q98 + " " + responseresultcm.r98 + " " + responseresultcm.s98 + " " + responseresultcm.t98 + " " + responseresultcm.u98 + " " + responseresultcm.v98 + " " + responseresultcm.w98 + 
      "\n" + " " + responseresultcm.p99 + " " + responseresultcm.q99 + " " + responseresultcm.r99 + " " + responseresultcm.s99 + " " + responseresultcm.t99 + " " + responseresultcm.u99 + " " + responseresultcm.v99 + " " + responseresultcm.w99 + 
      "\n" + " " + responseresultcm.p100 + " " + responseresultcm.q100 + " " + responseresultcm.r100 + " " + responseresultcm.s100 + " " + responseresultcm.t100 + " " + responseresultcm.u100 + " " + responseresultcm.v100 + " " + responseresultcm.w100 +
      "\n\n" + " " + "Situational Element" + " " + "Index" +
      "\n" + responseresultcm.p111 + " " + responseresultcm.q111 +
      "\n" + responseresultcm.p112 + " " + responseresultcm.q112 +
      "\n" + responseresultcm.p113 + " " + responseresultcm.q113 +
      "\n" + responseresultcm.p114 + " " + responseresultcm.q114 +
      "\n\nSocial Elements" +
      "\n" + " " + "Index" +
      "\n" + responseresultcm.p125 + " " + responseresultcm.q125 +
      "\n" + responseresultcm.p126 + " " + responseresultcm.q126 +
      "\n" + responseresultcm.p127 + " " + responseresultcm.q127 +
      "\n" + responseresultcm.p128 + " " + responseresultcm.q128 +
      "\n" + responseresultcm.p129 + " " + responseresultcm.q129 +
      "\n" + responseresultcm.p130 + " " + responseresultcm.q130 +
      "\n\nLifestyle Elements" +
      "\n" + " " + "Index" +
      "\n" + responseresultcm.p134 + " " + responseresultcm.q134 +
      "\n" + responseresultcm.p135 + " " + responseresultcm.q135 +
      "\n" + responseresultcm.p136 + " " + responseresultcm.q136 +
      "\n" + responseresultcm.p137 + " " + responseresultcm.q137 +
      "\n" + responseresultcm.p138 + " " + responseresultcm.q138 +
      "\n" + responseresultcm.p139 + " " + responseresultcm.q139 +
      "\n" + responseresultcm.p140 + " " + responseresultcm.q140 +
      "\n" + responseresultcm.p141 + " " + responseresultcm.q141 +
      "\n\nCrafting" +
      "\n\nCommunication" +
      "\n\n" + " " + "Activities" + " " + "Index" +
      "\n" + responseresultcm.aa97 + " " + responseresultcm.ac97 +
      "\n" + responseresultcm.aa98 + " " + responseresultcm.ac98 +
      "\n" + responseresultcm.aa99 + " " + responseresultcm.ac99 +
      "\n" + responseresultcm.aa100 + " " + responseresultcm.ac100 +
      "\n" + responseresultcm.aa101 + " " + responseresultcm.ac101 +
      "\n" + responseresultcm.aa102 + " " + responseresultcm.ac102 +
      "\n\nChannek Mix" +
      "\n" + " " + responseresultcm.ab105 + " " + responseresultcm.ac105 + " " + responseresultcm.ad105 + " " + responseresultcm.ae105 + " " + responseresultcm.af105 + " " + responseresultcm.ag105 + " " + responseresultcm.ah105 + " " + responseresultcm.ai105 + 
      "\n" + " " + responseresultcm.ab106 + " " + responseresultcm.ac106 + " " + responseresultcm.ad106 + " " + responseresultcm.ae106 + " " + responseresultcm.af106 + " " + responseresultcm.ag106 + " " + responseresultcm.ah106 + " " + responseresultcm.ai106 + 
      "\n" + responseresultcm.aa107 + " " + responseresultcm.ab107 + " " + responseresultcm.ac107 + " " + responseresultcm.ad107 + " " + responseresultcm.ae107 + " " + responseresultcm.af107 + " " + responseresultcm.ag107 + " " + responseresultcm.ah107 + " " + responseresultcm.ai107 + 
      "\n" + responseresultcm.aa108 + " " + responseresultcm.ab108 + " " + responseresultcm.ac108 + " " + responseresultcm.ad108 + " " + responseresultcm.ae108 + " " + responseresultcm.af108 + " " + responseresultcm.ag108 + " " + responseresultcm.ah108 + " " + responseresultcm.ai108 + 
      "\n" + responseresultcm.aa109 + " " + responseresultcm.ab109 + " " + responseresultcm.ac109 + " " + responseresultcm.ad109 + " " + responseresultcm.ae109 + " " + responseresultcm.af109 + " " + responseresultcm.ag109 + " " + responseresultcm.ah109 + " " + responseresultcm.ai109 + 
      "\n" + responseresultcm.aa110 + " " + responseresultcm.ab110 + " " + responseresultcm.ac110 + " " + responseresultcm.ad110 + " " + responseresultcm.ae110 + " " + responseresultcm.af110 + " " + responseresultcm.ag110 + " " + responseresultcm.ah110 + " " + responseresultcm.ai110 + 
      "\n" + responseresultcm.aa111 + " " + responseresultcm.ab111 + " " + responseresultcm.ac111 + " " + responseresultcm.ad111 + " " + responseresultcm.ae111 + " " + responseresultcm.af111 + " " + responseresultcm.ag111 + " " + responseresultcm.ah111 + " " + responseresultcm.ai111 + 
      "\n" + responseresultcm.aa112 + " " + responseresultcm.ab112 + " " + responseresultcm.ac112 + " " + responseresultcm.ad112 + " " + responseresultcm.ae112 + " " + responseresultcm.af112 + " " + responseresultcm.ag112 + " " + responseresultcm.ah112 + " " + responseresultcm.ai112 + 
      "\n" + responseresultcm.aa113 + " " + responseresultcm.ab113 + " " + responseresultcm.ac113 + " " + responseresultcm.ad113 + " " + responseresultcm.ae113 + " " + responseresultcm.af113 + " " + responseresultcm.ag113 + " " + responseresultcm.ah113 + " " + responseresultcm.ai113 + 
      "\n" + responseresultcm.aa114 + " " + responseresultcm.ab114 + " " + responseresultcm.ac114 + " " + responseresultcm.ad114 + " " + responseresultcm.ae114 + " " + responseresultcm.af114 + " " + responseresultcm.ag114 + " " + responseresultcm.ah114 + " " + responseresultcm.ai114 + 
      "\n\nPublishing" +
      "\n" + " " + "Index Points" +
      "\n" + responseresultcm.aa118 + " " + responseresultcm.ac118 +
      "\n" + responseresultcm.aa119 + " " + responseresultcm.ac119 +
      "\n" + responseresultcm.aa120 + " " + responseresultcm.ac120 +
      "\n" + responseresultcm.aa121 + " " + responseresultcm.ac121 +
      "\n" + responseresultcm.aa122 + " " + responseresultcm.ac122 +
      "\n" + responseresultcm.aa123 + " " + responseresultcm.ac123 +
      "\n\nMonetization - Download Factor" +
      "\n" + " " + "Download Factor" +
      "\n" + responseresultcm.aa136 + " " + responseresultcm.ab136 +
      "\n" + responseresultcm.aa137 + " " + responseresultcm.ab137 +
      "\n" + responseresultcm.aa138 + " " + responseresultcm.ab138 +
      "\n\nIn-Game Advertising" +
      "\n" + " " + "Pay Factor" +
      "\n" + responseresultcm.aa148 + " " + responseresultcm.ab148 +
      "\n" + responseresultcm.aa149 + " " + responseresultcm.ab149 +
      "\n" + responseresultcm.aa150 + " " + responseresultcm.ab150 +
      "\n" + responseresultcm.aa151 + " " + responseresultcm.ab151 +
      "\n" + responseresultcm.aa152 + " " + responseresultcm.ab152 +


      "\n\nPlayer's Input" + "/n" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Age" + " " + result[0] +
      "\n" + "Location" + " " + result[1] +
      "\n" + "Gender" + " " + result[2] +
      "\n" + "Income Class" + " " + result[3] +
      "\n" + "Language 1" + " " + result[4] +
      "\n" + "Language 2" + " " + result[5] +
      "\n" + "Language 3" + " " + result[6] +
      "\n" + "Language 4" + " " + result[7] +
      "\n" + "Genre" + " " + result[8] +
      "\n" + "Situational Element 1" + " " + result[9] +
      "\n" + "Situational Element 2" + " " + result[10] +
      "\n" + "Social Element 1" + " " + result[11] +
      "\n" + "Social Element 2" + " " + result[12] +
      "\n" + "Social Element 3" + " " + result[13] +
      "\n" + "Lifestyle Element" + " " + result[14] +
      "\n" + "Communication" + " " + result[15] +
      "\n" + "Channel 1" + " " + result[16] +
      "\n" + "Channel 2" + " " + result[17] +
      "\n" + "Channel 3" + " " + result[18] +
      "\n" + "Publishing" + " " + result[19] +
      "\n" + "Monetization" + " " + result[20] +
      "\n" + "Ads Network" + " " + result[21] +
      "\n" + "Banner Ads" + " " + result[22] +
      "\n" + "Rewarded Ads" + " " + result[23] +
      "\n" + "Interstitial Ads" + " " + result[24] +
      "\n" + "Interactive Ads" + " " + result[25] +

      "\n\nSystem Generated Output" + "\n" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Market Share" + " " + responseresultdatabase.p22 +
      "\n" + "Paying Customers" + " " + responseresultdatabase.p27 +
      "\n" + "Number of users" + " " + responseresultdatabase.p34+
      "\n" + "Number of paying customers" + " " + responseresultdatabase.p35;


    return assesment;
  }
}
