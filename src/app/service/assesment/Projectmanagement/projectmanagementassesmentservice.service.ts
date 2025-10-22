import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagementassesmentserviceService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\nParameters" +
      "\n" + responseresultcm.d5 + "  " + responseresultcm.e5 +
      "\n" + responseresultcm.d6 + "  " + responseresultcm.e6 +
      "\n" + responseresultcm.d7 + "  " + responseresultcm.e7 +
      "\n\nProject Map" +
      "\n\n" + responseresultcm.g6 + "  " + responseresultcm.h6 + "  " + responseresultcm.i6 + "  " + responseresultcm.j6 + "  " + responseresultcm.k6 +
      "\n" + responseresultcm.g7 + "  " + responseresultcm.h7 + "  " + responseresultcm.i7 + "  " + responseresultcm.j7 + "  " + responseresultcm.k7 +
      "\n" + responseresultcm.g8 + "  " + responseresultcm.h8 + "  " + responseresultcm.i8 + "  " + responseresultcm.j8 + "  " + responseresultcm.k8 +
      "\n" + responseresultcm.g9 + "  " + responseresultcm.h9 + "  " + responseresultcm.i9 + "  " + responseresultcm.j9 + "  " + responseresultcm.k9 +
      "\n" + responseresultcm.g10 + "  " + responseresultcm.h10 + "  " + responseresultcm.i10 + "  " + responseresultcm.j10 + "  " + responseresultcm.k10 +
      "\n" + responseresultcm.g11 + "  " + responseresultcm.h11 + "  " + responseresultcm.i11 + "  " + responseresultcm.j11 + "  " + responseresultcm.k11 +
      "\n" + responseresultcm.g12 + "  " + responseresultcm.h12 + "  " + responseresultcm.i12 + "  " + responseresultcm.j12 + "  " + responseresultcm.k12 +
      "\n" + responseresultcm.g13 + "  " + responseresultcm.h13 + "  " + responseresultcm.i13 + "  " + responseresultcm.j13 + "  " + responseresultcm.k13 +
      "\n" + responseresultcm.g14 + "  " + responseresultcm.h14 + "  " + responseresultcm.i14 + "  " + responseresultcm.j14 + "  " + responseresultcm.k14 +
      "\n" + responseresultcm.g15 + "  " + responseresultcm.h15 + "  " + responseresultcm.i15 + "  " + responseresultcm.j15 + "  " + responseresultcm.k15 +
      "\n" + responseresultcm.g16 + "  " + responseresultcm.h16 + "  " + responseresultcm.i16 + "  " + responseresultcm.j16 + "  " + responseresultcm.k16 +
      "\n" + responseresultcm.g17 + "  " + responseresultcm.h17 + "  " + responseresultcm.i17 + "  " + responseresultcm.j17 + "  " + responseresultcm.k17 +
      "\n" + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + responseresultcm.i18 + "  " + responseresultcm.j18 + "  " + responseresultcm.k18 +
      "\n" + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + responseresultcm.i19 + "  " + responseresultcm.j19 + "  " + responseresultcm.k19 +
      "\n" + responseresultcm.g20 + "  " + responseresultcm.h20 + "  " + responseresultcm.i20 + "  " + responseresultcm.j20 + "  " + responseresultcm.k20 +
      "\n" + responseresultcm.g21 + "  " + responseresultcm.h21 + "  " + responseresultcm.i21 + "  " + responseresultcm.j21 + "  " + responseresultcm.k21 +
      "\n" + responseresultcm.g22 + "  " + responseresultcm.h22 + "  " + responseresultcm.i22 + "  " + responseresultcm.j22 + "  " + responseresultcm.k22 +
      "\n" + responseresultcm.g23 + "  " + responseresultcm.h23 + "  " + responseresultcm.i23 + "  " + responseresultcm.j23 + "  " + responseresultcm.k23 +
      "\n" + responseresultcm.g24 + "  " + responseresultcm.h24 + "  " + responseresultcm.i24 + "  " + responseresultcm.j24 + "  " + responseresultcm.k24 +
      "\n" + responseresultcm.g25 + "  " + responseresultcm.h25 + "  " + responseresultcm.i25 + "  " + responseresultcm.j25 + "  " + responseresultcm.k25 +
      "\n" + responseresultcm.g26 + "  " + responseresultcm.h26 + "  " + responseresultcm.i26 + "  " + responseresultcm.j26 + "  " + responseresultcm.k26 +
      "\n\n" + responseresultcm.g28 + "  " + responseresultcm.h28 + "  " + responseresultcm.i28 +
      "\n" + responseresultcm.g29 + "  " + responseresultcm.h29 + "  " + responseresultcm.i29 +
      "\n" + responseresultcm.g30 + "  " + responseresultcm.h30 + "  " + responseresultcm.i30 +
      "\n" + responseresultcm.g31 + "  " + responseresultcm.h31 + "  " + responseresultcm.i31 +
      "\n" + responseresultcm.g32 + "  " + responseresultcm.h32 + "  " + responseresultcm.i32 +
      "\n" + responseresultcm.g33 + "  " + responseresultcm.h33 + "  " + responseresultcm.i33 +
      "\n" + responseresultcm.g34 + "  " + responseresultcm.h34 + "  " + responseresultcm.i34 +
      "\n" + responseresultcm.g35 + "  " + responseresultcm.h35 + "  " + responseresultcm.i35 +
      "\n" + responseresultcm.g36 + "  " + responseresultcm.h36 + "  " + responseresultcm.i36 +
      "\n" + responseresultcm.g37 + "  " + responseresultcm.h37 + "  " + responseresultcm.i37 +
      "\n" + responseresultcm.g38 + "  " + responseresultcm.h38 + "  " + responseresultcm.i38 +
      "\n" + responseresultcm.g39 + "  " + responseresultcm.h39 + "  " + responseresultcm.i39 +
      "\n" + responseresultcm.g40 + "  " + responseresultcm.h40 + "  " + responseresultcm.i40 +
      "\n" + responseresultcm.g41 + "  " + responseresultcm.h41 + "  " + responseresultcm.i41 +
      "\n" + responseresultcm.g42 + "  " + responseresultcm.h42 + "  " + responseresultcm.i42 +
      "\n" + responseresultcm.g43 + "  " + responseresultcm.h43 + "  " + responseresultcm.i43 +
      "\n" + responseresultcm.g44 + "  " + responseresultcm.h44 + "  " + responseresultcm.i44 +
      "\n" + responseresultcm.g45 + "  " + responseresultcm.h45 + "  " + responseresultcm.i45 +
      "\n" + responseresultcm.g46 + "  " + responseresultcm.h46 + "  " + responseresultcm.i46 +
      "\n" + responseresultcm.g47 + "  " + responseresultcm.h47 + "  " + responseresultcm.i47 +
      "\n" + responseresultcm.g48 + "  " + responseresultcm.h48 + "  " + responseresultcm.i48 +
      "\n\n" + responseresultcm.m6 + "  " + responseresultcm.n6 + "  " + responseresultcm.o6 + "  " + responseresultcm.p6 +
      "\n" + responseresultcm.m7 + "  " + responseresultcm.n7 + "  " + responseresultcm.o7 + "  " + responseresultcm.p7 +
      "\n" + responseresultcm.m8 + "  " + responseresultcm.n8 + "  " + responseresultcm.o8 + "  " + responseresultcm.p8 +
      "\n" + responseresultcm.m9 + "  " + responseresultcm.n9 + "  " + responseresultcm.o9 + "  " + responseresultcm.p9 +
      "\n" + responseresultcm.m10 + "  " + responseresultcm.n10 + "  " + responseresultcm.o10 + "  " + responseresultcm.p10 +
      "\n" + responseresultcm.m11 + "  " + responseresultcm.n11 + "  " + responseresultcm.o11 + "  " + responseresultcm.p11 +
      "\n" + responseresultcm.m12 + "  " + responseresultcm.n12 + "  " + responseresultcm.o12 + "  " + responseresultcm.p12 +
      "\n" + responseresultcm.m13 + "  " + responseresultcm.n13 + "  " + responseresultcm.o13 + "  " + responseresultcm.p13 +
      "\n\n" + responseresultcm.m15 + "  " + responseresultcm.n15 + "  " + responseresultcm.o15 + "  " + responseresultcm.p15 +
      "\n" + responseresultcm.m16 + "  " + responseresultcm.n16 + "  " + responseresultcm.o16 + "  " + responseresultcm.p16 +
      "\n" + responseresultcm.m17 + "  " + responseresultcm.n17 + "  " + responseresultcm.o17 + "  " + responseresultcm.p17 +
      "\n" + responseresultcm.m18 + "  " + responseresultcm.n18 + "  " + responseresultcm.o18 + "  " + responseresultcm.p18 +
      "\n" + responseresultcm.m19 + "  " + responseresultcm.n19 + "  " + responseresultcm.o19 + "  " + responseresultcm.p19 +
      "\n" + responseresultcm.m20 + "  " + responseresultcm.n20 + "  " + responseresultcm.o20 + "  " + responseresultcm.p20 +
      "\n" + responseresultcm.m21 + "  " + responseresultcm.n21 + "  " + responseresultcm.o21 + "  " + responseresultcm.p21 +
      "\n" + responseresultcm.m22 + "  " + responseresultcm.n22 + "  " + responseresultcm.o22 + "  " + responseresultcm.p22 +
      "\n" + responseresultcm.m23 + "  " + responseresultcm.n23 + "  " + responseresultcm.o23 + "  " + responseresultcm.p23 +
      "\n" + responseresultcm.m24 + "  " + responseresultcm.n24 + "  " + responseresultcm.o24 + "  " + responseresultcm.p24 +
      "\n" + responseresultcm.m25 + "  " + responseresultcm.n25 + "  " + responseresultcm.o25 + "  " + responseresultcm.p25 +
      "\n" + responseresultcm.m26 + "  " + responseresultcm.n26 + "  " + responseresultcm.o26 + "  " + responseresultcm.p26 +
      "\n" + responseresultcm.m27 + "  " + responseresultcm.n27 + "  " + responseresultcm.o27 + "  " + responseresultcm.p27 +
      "\n" + responseresultcm.m28 + "  " + responseresultcm.n28 + "  " + responseresultcm.o28 + "  " + responseresultcm.p28 +
      "\n" + responseresultcm.m29 + "  " + responseresultcm.n29 + "  " + responseresultcm.o29 + "  " + responseresultcm.p29 +
      "\n" + responseresultcm.m30 + "  " + responseresultcm.n30 + "  " + responseresultcm.o30 + "  " + responseresultcm.p30 +
      "\n" + responseresultcm.m31 + "  " + responseresultcm.n31 + "  " + responseresultcm.o31 + "  " + responseresultcm.p31 +
      "\n" + responseresultcm.m32 + "  " + responseresultcm.n32 + "  " + responseresultcm.o32 + "  " + responseresultcm.p32 +
      "\n" + responseresultcm.m33 + "  " + responseresultcm.n33 + "  " + responseresultcm.o33 + "  " + responseresultcm.p33 +
      "\n" + responseresultcm.m34 + "  " + responseresultcm.n34 + "  " + responseresultcm.o34 + "  " + responseresultcm.p34 +
      "\n" + responseresultcm.m35 + "  " + responseresultcm.n35 + "  " + responseresultcm.o35 + "  " + responseresultcm.p35 +
      "\n\n" + "   " + "  " + responseresultcm.n37 + "  " + responseresultcm.o37 + "  " + responseresultcm.p37 +
      "\n" + responseresultcm.m38 + "  " + responseresultcm.n38 + "  " + responseresultcm.o38 + "  " + responseresultcm.p38 +
      "\n" + responseresultcm.m39 + "  " + responseresultcm.n39 + "  " + responseresultcm.o39 + "  " + responseresultcm.p39 +
      "\n" + responseresultcm.m40 + "  " + responseresultcm.n40 + "  " + responseresultcm.o40 + "  " + responseresultcm.p40 +
      "\n" + responseresultcm.m41 + "  " + responseresultcm.n41 + "  " + responseresultcm.o41 + "  " + responseresultcm.p41 +
      "\n" + responseresultcm.m42 + "  " + responseresultcm.n42 + "  " + responseresultcm.o42 + "  " + responseresultcm.p42 +
      "\n\n" + responseresultcm.m44 + "  " + responseresultcm.n44 + "  " + responseresultcm.o44 + "  " + responseresultcm.p44 + "  " + responseresultcm.q44 +
      "\n" + responseresultcm.m45 + "  " + responseresultcm.n45 + "  " + responseresultcm.o45 + "  " + responseresultcm.p45 + "  " + responseresultcm.q45 +
      "\n" + responseresultcm.m46 + "  " + responseresultcm.n46 + "  " + responseresultcm.o46 + "  " + responseresultcm.p46 + "  " + responseresultcm.q46 +
      "\n" + responseresultcm.m47 + "  " + responseresultcm.n47 + "  " + responseresultcm.o47 + "  " + responseresultcm.p47 + "  " + responseresultcm.q47 +
      "\n\nCriteria" +
      "\n" + responseresultcm.s6 + "  " + responseresultcm.t6 +
      "\n" + responseresultcm.s7 + "  " + responseresultcm.t7 +
      "\n" + responseresultcm.s8 + "  " + responseresultcm.t8 +


      "\n\nInput Data" +
      "\n" + "Parameters" + "  " + "Input" +
      "\n" + "Overtime days, Priya Sharma" + "  " + result[0] +
      "\n" + "Overtime days, Rohan Kapoor" + "  " + result[1] +
      "\n" + "Overtime days, Aisha Khan" + "  " + result[2] +
      "\n" + responseresultcm.m45 + "  " + result[3] +
      "\n" + responseresultcm.m46 + "  " + result[4] +
      "\n" + responseresultcm.m47 + "  " + result[5] +
      "\n" + "Task 1" + "  " + result[6] +
      "\n" + "Task 2" + "  " + result[7] +
      "\n" + "Task 3" + "  " + result[8] +
      "\n" + "Task 4" + "  " + result[9] +
      "\n" + "Task 5" + "  " + result[10] +
      "\n" + "Task 6" + "  " + result[11] +
      "\n" + "Task 6" + "  " + result[12] +
      "\n" + "Task 8" + "  " + result[13] +
      "\n" + "Task 9" + "  " + result[14] +
      "\n" + "Task 10" + "  " + result[15] +
      "\n" + "Task 11" + "  " + result[16] +
      "\n" + "Task 12" + "  " + result[17] +
      "\n" + "Task 13" + "  " + result[18] +
      "\n" + "Task 14" + "  " + result[19] +
      "\n" + "Task 15" + "  " + result[20] +
      "\n" + "Task 16" + "  " + result[21] +
      "\n" + "Task 17" + "  " + result[22] +
      "\n" + "Task 18" + "  " + result[23] +
      "\n" + "Task 19" + "  " + result[24] +
      "\n" + "Task 20" + "  " + result[25] +


      "\n\nSystem generated output based on input and fixed data" +
      "\n\nProject Tracking" +
      "\nParameter " + "  " + "Planned Duration, days" + "  " + "Actual Duration, days" + "  " + "Completion Status" +
      "\n" + responseresultdatabase.b56 + "  " + responseresultdatabase.e56 + "  " + responseresultdatabase.f56 + "  " + responseresultdatabase.h56 +
      "\n" + responseresultdatabase.b57 + "  " + responseresultdatabase.e57 + "  " + responseresultdatabase.f57 + "  " + responseresultdatabase.h57 +
      "\n" + responseresultdatabase.b58 + "  " + responseresultdatabase.e58 + "  " + responseresultdatabase.f58 + "  " + responseresultdatabase.h58 +
      "\n" + responseresultdatabase.b59 + "  " + responseresultdatabase.e59 + "  " + responseresultdatabase.f59 + "  " + responseresultdatabase.h59 +
      "\n" + responseresultdatabase.b60 + "  " + responseresultdatabase.e60 + "  " + responseresultdatabase.f60 + "  " + responseresultdatabase.h60 +
      "\n" + responseresultdatabase.b61 + "  " + responseresultdatabase.e61 + "  " + responseresultdatabase.f61 + "  " + responseresultdatabase.h61 +
      "\n" + responseresultdatabase.b62 + "  " + responseresultdatabase.e62 + "  " + responseresultdatabase.f62 + "  " + responseresultdatabase.h62 +
      "\n" + responseresultdatabase.b63 + "  " + responseresultdatabase.e63 + "  " + responseresultdatabase.f63 + "  " + responseresultdatabase.h63 +
      "\n" + responseresultdatabase.b64 + "  " + responseresultdatabase.e64 + "  " + responseresultdatabase.f64 + "  " + responseresultdatabase.h64 +
      "\n" + responseresultdatabase.b65 + "  " + responseresultdatabase.e65 + "  " + responseresultdatabase.f65 + "  " + responseresultdatabase.h65 +
      "\n" + responseresultdatabase.b66 + "  " + responseresultdatabase.e66 + "  " + responseresultdatabase.f66 + "  " + responseresultdatabase.h66 +
      "\n" + responseresultdatabase.b67 + "  " + responseresultdatabase.e67 + "  " + responseresultdatabase.f67 + "  " + responseresultdatabase.h67 +
      "\n" + responseresultdatabase.b68 + "  " + responseresultdatabase.e68 + "  " + responseresultdatabase.f68 + "  " + responseresultdatabase.h68 +
      "\n" + responseresultdatabase.b69 + "  " + responseresultdatabase.e69 + "  " + responseresultdatabase.f69 + "  " + responseresultdatabase.h69 +
      "\n" + responseresultdatabase.b70 + "  " + responseresultdatabase.e70 + "  " + responseresultdatabase.f70 + "  " + responseresultdatabase.h70 +
      "\n" + responseresultdatabase.b71 + "  " + responseresultdatabase.e71 + "  " + responseresultdatabase.f71 + "  " + responseresultdatabase.h71 +
      "\n" + responseresultdatabase.b72 + "  " + responseresultdatabase.e72 + "  " + responseresultdatabase.f72 + "  " + responseresultdatabase.h72 +
      "\n" + responseresultdatabase.b73 + "  " + responseresultdatabase.e73 + "  " + responseresultdatabase.f73 + "  " + responseresultdatabase.h73 +
      "\n" + responseresultdatabase.b74 + "  " + responseresultdatabase.e74 + "  " + responseresultdatabase.f74 + "  " + responseresultdatabase.h74 +
      "\n" + responseresultdatabase.b75 + "  " + responseresultdatabase.e75 + "  " + responseresultdatabase.f75 + "  " + responseresultdatabase.h75 +
      "\n\nValue Creation" +
      "\nParameter " + "  " + "Output" +
      "\n" + responseresultdatabase.m56 + "  " + responseresultdatabase.n56 +
      "\n" + responseresultdatabase.m57 + "  " + responseresultdatabase.n57 +
      "\n" + responseresultdatabase.m58 + "  " + responseresultdatabase.n58 +
      "\n" + responseresultdatabase.m60 + "  " + responseresultdatabase.n60 +
      "\n" + responseresultdatabase.m61 + "  " + responseresultdatabase.n61 +
      "\n" + responseresultdatabase.m62 + "  " + responseresultdatabase.n62 +
      "\n" + responseresultdatabase.m63 + "  " + responseresultdatabase.n63 +
      "\n" + responseresultdatabase.m64 + "  " + responseresultdatabase.n64 +
      "\n" + responseresultdatabase.m65 + "  " + responseresultdatabase.n65 +
      "\n" + responseresultdatabase.m66 + "  " + responseresultdatabase.n66 +
      "\n" + responseresultdatabase.m67 + "  " + responseresultdatabase.n67 +
      "\n" + responseresultdatabase.m68 + "  " + responseresultdatabase.n68 +
      "\n\nKPI " +
      "\nParameter " + "  " + "Output" +
      "\n" + "Completion level " + "  " + responseresultdatabase.n75 +
      "\n" + "Optimization level %" + "  " + (Number(responseresultdatabase.n73) * 100).toFixed(0) + "%" +
      "\n" + "Cost Performance Index " + "  " + responseresultdatabase.n74 +
      "\n" + "Number of task completed " + "  " + responseresultdatabase.n71 +
      "\n" + "Number of task remaining " + "  " + responseresultdatabase.n72 +
      "\n" + "Project Status " + "  " + responseresultdatabase.n76;

    return assesment;

  }
}
