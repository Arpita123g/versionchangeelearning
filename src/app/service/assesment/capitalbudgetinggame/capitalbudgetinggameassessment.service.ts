import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalbudgetinggameassessmentService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\nIndustry" +
      "\n" + responseresultcm.d5 + "  " + responseresultcm.e5 +
      "\n" + responseresultcm.d6 + "  " + responseresultcm.e6 +
      "\n" + responseresultcm.d7 + "  " + responseresultcm.e7 +
      "\n" + responseresultcm.d8 + "  " + responseresultcm.e8 +
      "\n" + responseresultcm.d9 + "  " + responseresultcm.e9 +
      "\n\nCompany" +
      "\n" + responseresultcm.d12 + "  " + responseresultcm.e12 +
      "\n" + responseresultcm.d13 + "  " + responseresultcm.e13 +
      "\n" + responseresultcm.d14 + "  " + responseresultcm.e14 +
      "\n" + responseresultcm.d15 + "  " + responseresultcm.e15 +
      "\n\nProject Portfolio" +
      "\n" + responseresultcm.g5 + "  " + responseresultcm.h5 + "  " + responseresultcm.i5 + "  " + responseresultcm.j5 + "  " + responseresultcm.k5 + "  " + responseresultcm.l5 + "  " + responseresultcm.m5 +
      "\n" + responseresultcm.g6 + "  " + responseresultcm.h6 + "  " + responseresultcm.i6 + "  " + responseresultcm.j6 + "  " + responseresultcm.k6 + "  " + responseresultcm.l6 + "  " + responseresultcm.m6 +
      "\n" + responseresultcm.g7 + "  " + responseresultcm.h7 + "  " + responseresultcm.i7 + "  " + responseresultcm.j7 + "  " + responseresultcm.k7 + "  " + responseresultcm.l7 + "  " + responseresultcm.m7 +
      "\n" + responseresultcm.g8 + "  " + responseresultcm.h8 + "  " + responseresultcm.i8 + "  " + responseresultcm.j8 + "  " + responseresultcm.k8 + "  " + responseresultcm.l8 + "  " + responseresultcm.m8 +
      "\n" + responseresultcm.g9 + "  " + responseresultcm.h9 + "  " + responseresultcm.i9 + "  " + responseresultcm.j9 + "  " + responseresultcm.k9 + "  " + responseresultcm.l9 + "  " + responseresultcm.m9 +
      "\n" + responseresultcm.g10 + "  " + responseresultcm.h10 + "  " + responseresultcm.i10 + "  " + responseresultcm.j10 + "  " + responseresultcm.k10 + "  " + responseresultcm.l10 + "  " + responseresultcm.m10 +
      "\n" + responseresultcm.g11 + "  " + responseresultcm.h11 + "  " + responseresultcm.i11 + "  " + responseresultcm.j11 + "  " + responseresultcm.k11 + "  " + responseresultcm.l11 + "  " + responseresultcm.m11 +
      "\n" + responseresultcm.g12 + "  " + responseresultcm.h12 + "  " + responseresultcm.i12 + "  " + responseresultcm.j12 + "  " + responseresultcm.k12 + "  " + responseresultcm.l12 + "  " + responseresultcm.m12 +
      "\n" + responseresultcm.g13 + "  " + responseresultcm.h13 + "  " + responseresultcm.i13 + "  " + responseresultcm.j13 + "  " + responseresultcm.k13 + "  " + responseresultcm.l13 + "  " + responseresultcm.m13 +
      "\n" + responseresultcm.g14 + "  " + responseresultcm.h14 + "  " + responseresultcm.i14 + "  " + responseresultcm.j14 + "  " + responseresultcm.k14 + "  " + responseresultcm.l14 + "  " + responseresultcm.m14 +
      "\n" + responseresultcm.g15 + "  " + responseresultcm.h15 + "  " + responseresultcm.i15 + "  " + responseresultcm.j15 + "  " + responseresultcm.k15 + "  " + responseresultcm.l15 + "  " + responseresultcm.m15 +
      "\n" + responseresultcm.g16 + "  " + responseresultcm.h16 + "  " + responseresultcm.i16 + "  " + responseresultcm.j16 + "  " + responseresultcm.k16 + "  " + responseresultcm.l16 + "  " + responseresultcm.m16 +
      "\n" + responseresultcm.g17 + "  " + responseresultcm.h17 + "  " + responseresultcm.i17 + "  " + responseresultcm.j17 + "  " + responseresultcm.k17 + "  " + responseresultcm.l17 + "  " + responseresultcm.m17 +
      "\n" + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + responseresultcm.i18 + "  " + responseresultcm.j18 + "  " + responseresultcm.k18 + "  " + responseresultcm.l18 + "  " + responseresultcm.m18 +
      "\n" + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + responseresultcm.i19 + "  " + responseresultcm.j19 + "  " + responseresultcm.k19 + "  " + responseresultcm.l19 + "  " + responseresultcm.m19 +
      "\n\nGeneral Impact" +
      "\n" + responseresultcm.g22 + "  " + responseresultcm.h22 + "  " + responseresultcm.i22 +
      "\n" + responseresultcm.g23 + "  " + responseresultcm.h23 + "  " + responseresultcm.i23 +
      "\n" + responseresultcm.g24 + "  " + responseresultcm.h24 + "  " + responseresultcm.i24 +
      "\n" + responseresultcm.g25 + "  " + responseresultcm.h25 + "  " + responseresultcm.i25 +
      "\n" + responseresultcm.g26 + "  " + responseresultcm.h26 + "  " + responseresultcm.i26 +
      "\n" + responseresultcm.g27 + "  " + responseresultcm.h27 + "  " + responseresultcm.i27 +
      "\n\nCash Flow Multipliers" +
      "\n" + responseresultcm.g30 + "  " + responseresultcm.h30 + "  " + responseresultcm.i30 + "  " + responseresultcm.j30 + "  " + responseresultcm.k30 +
      "\n" + responseresultcm.g31 + "  " + responseresultcm.h31 + "  " + responseresultcm.i31 + "  " + responseresultcm.j31 + "  " + responseresultcm.k31 +
      "\n" + responseresultcm.g32 + "  " + responseresultcm.h32 + "  " + responseresultcm.i32 + "  " + responseresultcm.j32 + "  " + responseresultcm.k32 +
      "\n" + responseresultcm.g33 + "  " + responseresultcm.h33 + "  " + responseresultcm.i33 + "  " + responseresultcm.j33 + "  " + responseresultcm.k33 +
      "\n" + responseresultcm.g34 + "  " + responseresultcm.h34 + "  " + responseresultcm.i34 + "  " + responseresultcm.j34 + "  " + responseresultcm.k34 +
      "\n" + responseresultcm.g35 + "  " + responseresultcm.h35 + "  " + responseresultcm.i35 + "  " + responseresultcm.j35 + "  " + responseresultcm.k35 +
      "\n\nDiscount Rate Multipliers" +
      "\n" + responseresultcm.g38 + "  " + responseresultcm.h38 + "  " + responseresultcm.i38 + "  " + responseresultcm.j38 + "  " + responseresultcm.k38 +
      "\n" + responseresultcm.g39 + "  " + responseresultcm.h39 + "  " + responseresultcm.i39 + "  " + responseresultcm.j39 + "  " + responseresultcm.k39 +
      "\n" + responseresultcm.g40 + "  " + responseresultcm.h40 + "  " + responseresultcm.i40 + "  " + responseresultcm.j40 + "  " + responseresultcm.k40 +
      "\n" + responseresultcm.g41 + "  " + responseresultcm.h41 + "  " + responseresultcm.i41 + "  " + responseresultcm.j41 + "  " + responseresultcm.k41 +
      "\n" + responseresultcm.g41 + "  " + responseresultcm.h41 + "  " + responseresultcm.i41 + "  " + responseresultcm.j41 + "  " + responseresultcm.k41 +
      "\n\n" + responseresultcm.g45 + "  " + responseresultcm.h45 +


      "\n\nInput" +
      "\n" + "Project Portfolio Discount Rate" +
      "\n" + responseresultcm.g6 + "  " + responseresultcm.h6 + "  " + result[0] +
      "\n" + responseresultcm.g7 + "  " + responseresultcm.h7 + "  " + result[1] +
      "\n" + responseresultcm.g8 + "  " + responseresultcm.h8 + "  " + result[2] +
      "\n" + responseresultcm.g9 + "  " + responseresultcm.h9 + "  " + result[3] +
      "\n" + responseresultcm.g10 + "  " + responseresultcm.h10 + "  " + result[4] +
      "\n" + responseresultcm.g11 + "  " + responseresultcm.h11 + "  " + result[5] +
      "\n" + responseresultcm.g12 + "  " + responseresultcm.h12 + "  " + result[6] +
      "\n" + responseresultcm.g13 + "  " + responseresultcm.h13 + "  " + result[7] +
      "\n" + responseresultcm.g14 + "  " + responseresultcm.h14 + "  " + result[8] +
      "\n" + responseresultcm.g15 + "  " + responseresultcm.h15 + "  " + result[9] +
      "\n" + responseresultcm.g16 + "  " + responseresultcm.h16 + "  " + result[10] +
      "\n" + responseresultcm.g17 + "  " + responseresultcm.h17 + "  " + result[11] +
      "\n" + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + result[12] +
      "\n" + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + result[13] +
      "\n" + "Project Portfolio Selection" +
      "\n" + responseresultcm.g6 + "  " + responseresultcm.h6 + "  " + result[14] +
      "\n" + responseresultcm.g7 + "  " + responseresultcm.h7 + "  " + result[15] +
      "\n" + responseresultcm.g8 + "  " + responseresultcm.h8 + "  " + result[16] +
      "\n" + responseresultcm.g9 + "  " + responseresultcm.h9 + "  " + result[17] +
      "\n" + responseresultcm.g10 + "  " + responseresultcm.h10 + "  " + result[18] +
      "\n" + responseresultcm.g11 + "  " + responseresultcm.h11 + "  " + result[19] +
      "\n" + responseresultcm.g12 + "  " + responseresultcm.h12 + "  " + result[20] +
      "\n" + responseresultcm.g13 + "  " + responseresultcm.h13 + "  " + result[21] +
      "\n" + responseresultcm.g14 + "  " + responseresultcm.h14 + "  " + result[22] +
      "\n" + responseresultcm.g15 + "  " + responseresultcm.h15 + "  " + result[23] +
      "\n" + responseresultcm.g16 + "  " + responseresultcm.h16 + "  " + result[24] +
      "\n" + responseresultcm.g17 + "  " + responseresultcm.h17 + "  " + result[25] +
      "\n" + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + result[26] +
      "\n" + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + result[27] +


      "\n\nOutput" +
      "\nPresent Value of Cash Stream, INR million" +
      "\nParameter" + "  " + "Output" +
      "\n" + responseresultdatabase.b100 + "  " + responseresultdatabase.c100 +
      "\n" + responseresultdatabase.b101 + "  " + responseresultdatabase.c101 +
      "\n\nPresent Value of Divisonal Cash Stream, INR million" +
      "\nParameter" + "  " + "Output" +
      "\n" + responseresultdatabase.b106 + "  " + responseresultdatabase.c106 +
      "\n" + responseresultdatabase.b107 + "  " + responseresultdatabase.c107 +
      "\n" + responseresultdatabase.b108 + "  " + responseresultdatabase.c108 +
      "\n" + responseresultdatabase.b109 + "  " + responseresultdatabase.c109 +
      "\n\nBudget, INR million" +
      "\nParameter" + "  " + "Output" +
      "\n" + responseresultdatabase.b112 + "  " + responseresultdatabase.c112 +
      "\n" + responseresultdatabase.b113 + "  " + responseresultdatabase.c113 +
      "\n\nProjects" +
      "\nArea" + "  " + "Projects" + "  " + responseresultdatabase.d115 + "  " + responseresultdatabase.e115 + "  " + responseresultdatabase.f115 + "  " + responseresultdatabase.g115 + "  " + responseresultdatabase.h115 + "  " + responseresultdatabase.i115 + "  " + responseresultdatabase.j115 +
      "\n" + responseresultdatabase.b116 + "  " + responseresultdatabase.c116 + "  " + responseresultdatabase.d116 + "  " + responseresultdatabase.e116 + "  " + responseresultdatabase.f116 + "  " + (Number(responseresultdatabase.g116) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h116 + "  " + responseresultdatabase.i116 + "  " + responseresultdatabase.j116 +
      "\n" + responseresultdatabase.b117 + "  " + responseresultdatabase.c117 + "  " + responseresultdatabase.d117 + "  " + responseresultdatabase.e117 + "  " + responseresultdatabase.f117 + "  " + (Number(responseresultdatabase.g117) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h117 + "  " + responseresultdatabase.i117 + "  " + responseresultdatabase.j117 +
      "\n" + responseresultdatabase.b118 + "  " + responseresultdatabase.c118 + "  " + responseresultdatabase.d118 + "  " + responseresultdatabase.e118 + "  " + responseresultdatabase.f118 + "  " + (Number(responseresultdatabase.g118) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h118 + "  " + responseresultdatabase.i118 + "  " + responseresultdatabase.j118 +
      "\n" + responseresultdatabase.b119 + "  " + responseresultdatabase.c119 + "  " + responseresultdatabase.d119 + "  " + responseresultdatabase.e119 + "  " + responseresultdatabase.f119 + "  " + (Number(responseresultdatabase.g119) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h119 + "  " + responseresultdatabase.i119 + "  " + responseresultdatabase.j119 +
      "\n" + responseresultdatabase.b120 + "  " + responseresultdatabase.c120 + "  " + responseresultdatabase.d120 + "  " + responseresultdatabase.e120 + "  " + responseresultdatabase.f120 + "  " + (Number(responseresultdatabase.g120) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h120 + "  " + responseresultdatabase.i120 + "  " + responseresultdatabase.j120 +
      "\n" + responseresultdatabase.b121 + "  " + responseresultdatabase.c121 + "  " + responseresultdatabase.d121 + "  " + responseresultdatabase.e121 + "  " + responseresultdatabase.f121 + "  " + (Number(responseresultdatabase.g121) * 100).toFixed(0) + "%" + "  " + responseresultdatabase.h121 + "  " + responseresultdatabase.i121 + "  " + responseresultdatabase.j121 +
      "\n\nKPI " +
      "\nParameter" + "  " + "Output" +
      "\n" + "Average discount rate across projects, % " + "  " + (Number(responseresultdatabase.c99) * 100).toFixed(2) + "%" +
      "\n" + "Present value of cash Stream, INR million " + "  " + responseresultdatabase.c103 +
      "\n" + "Net present value of cash stream, INR million " + "  " + responseresultdatabase.c124;

    return assesment;

  }
}
