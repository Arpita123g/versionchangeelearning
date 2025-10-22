import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogisticsassesmentserviceService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm.c5 +
      "\n\nParameters" +
      "\n" + "  " + "This Period" +
      "\nOrder, metric tonnes" +
      "\n" + responseresultcm.c10 + "  " + responseresultcm.d10 +
      "\n" + responseresultcm.c11 + "  " + responseresultcm.d11 +
      "\n" + responseresultcm.c12 + "  " + responseresultcm.d12 +
      "\n" + responseresultcm.c13 + "  " + responseresultcm.d13 +
      "\n\nContractual TAT, days" +
      "\n" + responseresultcm.c16 + "  " + responseresultcm.d16 +
      "\n" + responseresultcm.c17 + "  " + responseresultcm.d17 +
      "\n" + responseresultcm.c18 + "  " + responseresultcm.d18 +
      "\n" + responseresultcm.c19 + "  " + responseresultcm.d19 +
      "\n\nWorkforce" +
      "\n" + responseresultcm.c22 + "  " + responseresultcm.d22 +
      "\n" + responseresultcm.c23 + "  " + responseresultcm.d23 +
      "\n" + responseresultcm.c24 + "  " + responseresultcm.d24 +
      "\n" + responseresultcm.c25 + "  " + responseresultcm.d25 +
      "\n" + responseresultcm.c26 + "  " + responseresultcm.d26 +
      "\n" + responseresultcm.c27 + "  " + responseresultcm.d27 +
      "\n" + responseresultcm.c28 + "  " + responseresultcm.d28 +
      "\n" + responseresultcm.c29 + "  " + Number(responseresultcm.d29) * 100 + "%" +
      "\n\nFragility Contract" +
      "\n" + responseresultcm.c32 + "  " + responseresultcm.d32 +
      "\n" + responseresultcm.c33 + "  " + responseresultcm.d33 +
      "\n" + responseresultcm.c34 + "  " + responseresultcm.d34 +
      "\n" + responseresultcm.c35 + "  " + responseresultcm.d35 +
      "\n\nInbound" +
      "\n\nMax load capacity, metric tonnes" +
      "\n" + responseresultcm.f7 + "  " + responseresultcm.g7 +
      "\n" + responseresultcm.f8 + "  " + responseresultcm.g8 +
      "\n" + responseresultcm.f9 + "  " + responseresultcm.g9 +
      "\n\n" + responseresultcm.f11 + "  " + responseresultcm.g11 +
      "\n\nMileage, kmpl" +
      "\n" + responseresultcm.f14 + "  " + responseresultcm.g14 +
      "\n" + responseresultcm.f15 + "  " + responseresultcm.g15 +
      "\n" + responseresultcm.f16 + "  " + responseresultcm.g16 +
      "\n\n" + responseresultcm.f18 + "  " + responseresultcm.g18 +
      "\n\n" + responseresultcm.f20 + "  " + responseresultcm.g20 +
      "\n\n" + responseresultcm.f22 + "  " + responseresultcm.g22 +
      "\n\nAverage Speed, kmph" +
      "\n" + responseresultcm.f25 + "  " + responseresultcm.g25 +
      "\n" + responseresultcm.f26 + "  " + responseresultcm.g26 +
      "\n" + responseresultcm.f27 + "  " + responseresultcm.g27 +
      "\n\nDamage Chances" +
      "\n" + responseresultcm.f30 + "  " + responseresultcm.g30 +
      "\n" + responseresultcm.f31 + "  " + responseresultcm.g31 +
      "\n" + responseresultcm.f32 + "  " + responseresultcm.g32 +
      "\n\nEmissions, trucks" +
      "\n" + responseresultcm.f35 + "  " + Number(responseresultcm.g35).toFixed(2) +
      "\n" + responseresultcm.f36 + "  " + Number(responseresultcm.g36).toFixed(2) +
      "\n" + responseresultcm.f37 + "  " + Number(responseresultcm.g37).toFixed(2) +
      "\n\nNumber of Trucks" + "  " + "Min" +
      "\n" + responseresultcm.f40 + "  " + responseresultcm.g40 +
      "\n" + responseresultcm.f41 + "  " + responseresultcm.g41 +
      "\n" + responseresultcm.f42 + "  " + responseresultcm.g42 +
      "\n\nWarehouse" +
      "\n\n" + responseresultcm.i6 + "  " + responseresultcm.j6 + "  " + responseresultcm.k6 + "  " + responseresultcm.l6 + "  " + responseresultcm.m6 +
      "\n" + responseresultcm.i7 + "  " + responseresultcm.j7 + "  " + responseresultcm.k7 + "  " + responseresultcm.l7 + "  " + responseresultcm.m7 +
      "\n" + responseresultcm.i8 + "  " + responseresultcm.j8 + "  " + responseresultcm.k8 + "  " + responseresultcm.l8 + "  " + responseresultcm.m8 +
      "\n\nWarehouse Upgrade" +
      "\n" + "  " + responseresultcm.k11 + "  " + responseresultcm.l11 + "  " + responseresultcm.m11 + "  " + responseresultcm.n11 + "  " + responseresultcm.o11 +
      "\n" + responseresultcm.i12 + "  " + responseresultcm.k12 + "  " + responseresultcm.l12 + "  " + responseresultcm.m12 + "  " + responseresultcm.n12 + "  " + responseresultcm.o12 +
      "\n" + responseresultcm.i13 + "  " + responseresultcm.k13 + "  " + responseresultcm.l13 + "  " + responseresultcm.m13 + "  " + responseresultcm.n13 + "  " + responseresultcm.o13 +
      "\n" + responseresultcm.i14 + "  " + responseresultcm.k14 + "  " + responseresultcm.l14 + "  " + responseresultcm.m14 + "  " + responseresultcm.n14 + "  " + responseresultcm.o14 +
      "\n" + responseresultcm.i15 + "  " + responseresultcm.k15 + "  " + responseresultcm.l15 + "  " + responseresultcm.m15 + "  " + responseresultcm.n15 + "  " + responseresultcm.o15 +
      "\n" + responseresultcm.i16 + "  " + responseresultcm.k16 + "  " + responseresultcm.l16 + "  " + responseresultcm.m16 + "  " + responseresultcm.n16 + "  " + responseresultcm.o16 +
      "\n" + responseresultcm.i17 + "  " + responseresultcm.k17 + "  " + responseresultcm.l17 + "  " + responseresultcm.m17 + "  " + responseresultcm.n17 + "  " + responseresultcm.o17 +

      "\n\n" + responseresultcm.i19 + "  " + responseresultcm.j19 +
      "\n\n" + responseresultcm.i21 + "  " + responseresultcm.j21 +
      "\n\n" + responseresultcm.i23 + "  " + responseresultcm.j23 +
      "\n\n" + responseresultcm.i25 + "  " + responseresultcm.j25 +
      "\n\n" + responseresultcm.i27 + "  " + responseresultcm.j27 +
      "\n\nEmission rate, lb/GWH" +
      "\n" + responseresultcm.i30 + "  " + responseresultcm.j30 +
      "\n" + responseresultcm.i31 + "  " + responseresultcm.j31 +
      "\n" + responseresultcm.i32 + "  " + responseresultcm.j32 +
      "\n\n" + responseresultcm.i34 + "  " + responseresultcm.j34 +
      "\n\nRoutes & Technology" +
      "\n\nRoute" +
      "\n" + "  " + responseresultcm.r7 + "  " + responseresultcm.s7 + "  " + responseresultcm.t7 + "  " + responseresultcm.u7 + "  " + responseresultcm.v7 + "  " + responseresultcm.w7 + "  " + responseresultcm.x7 + "  " + responseresultcm.y7 + "  " + responseresultcm.z7 + "  " + responseresultcm.aa7 +
      "\n" + responseresultcm.q8 + "  " + responseresultcm.r8 + "  " + responseresultcm.s8 + "  " + responseresultcm.t8 + "  " + responseresultcm.u8 + "  " + responseresultcm.v8 + "  " + responseresultcm.w8 + "  " + responseresultcm.x8 + "  " + responseresultcm.y8 + "  " + responseresultcm.z8 + "  " + responseresultcm.aa8 +
      "\n" + responseresultcm.q9 + "  " + responseresultcm.r9 + "  " + responseresultcm.s9 + "  " + responseresultcm.t9 + "  " + responseresultcm.u9 + "  " + responseresultcm.v9 + "  " + responseresultcm.w9 + "  " + responseresultcm.x9 + "  " + responseresultcm.y9 + "  " + responseresultcm.z9 + "  " + responseresultcm.aa9 +
      "\n" + responseresultcm.q10 + "  " + responseresultcm.r10 + "  " + responseresultcm.s10 + "  " + responseresultcm.t10 + "  " + responseresultcm.u10 + "  " + responseresultcm.v10 + "  " + responseresultcm.w10 + "  " + responseresultcm.x10 + "  " + responseresultcm.y10 + "  " + responseresultcm.z10 + "  " + responseresultcm.aa10 +
      "\n\n" + responseresultcm.q12 + "  " + responseresultcm.r12 +
      "\n\nTrucking Technology" +
      "\n" + "  " + responseresultcm.s15 + "  " + responseresultcm.t15 + "  " + responseresultcm.u15 + "  " + responseresultcm.v15 + "  " + responseresultcm.w15 + "  " + responseresultcm.x15 +
      "\n" + responseresultcm.q16 + "  " + responseresultcm.s16 + "  " + responseresultcm.t16 + "  " + responseresultcm.u16 + "  " + responseresultcm.v16 + "  " + responseresultcm.w16 + "  " + responseresultcm.x16 +
      "\n" + responseresultcm.q17 + "  " + responseresultcm.s17 + "  " + responseresultcm.t17 + "  " + responseresultcm.u17 + "  " + responseresultcm.v17 + "  " + responseresultcm.w17 + "  " + responseresultcm.x17 +
      "\n" + responseresultcm.q18 + "  " + responseresultcm.s18 + "  " + responseresultcm.t18 + "  " + responseresultcm.u18 + "  " + responseresultcm.v18 + "  " + responseresultcm.w18 + "  " + responseresultcm.x18 +
      "\n" + responseresultcm.q19 + "  " + responseresultcm.s19 + "  " + responseresultcm.t19 + "  " + responseresultcm.u19 + "  " + responseresultcm.v19 + "  " + responseresultcm.w19 + "  " + responseresultcm.x19 +
      "\n" + responseresultcm.q20 + "  " + responseresultcm.s20 + "  " + responseresultcm.t20 + "  " + responseresultcm.u20 + "  " + responseresultcm.v20 + "  " + responseresultcm.w20 + "  " + responseresultcm.x20 +
      "\n" + responseresultcm.q21 + "  " + responseresultcm.s21 + "  " + responseresultcm.t21 + "  " + responseresultcm.u21 + "  " + responseresultcm.v21 + "  " + responseresultcm.w21 + "  " + responseresultcm.x21 +
      "\n" + responseresultcm.q22 + "  " + responseresultcm.s22 + "  " + responseresultcm.t22 + "  " + responseresultcm.u22 + "  " + responseresultcm.v22 + "  " + responseresultcm.w22 + "  " + responseresultcm.x22 +
      "\n\nOutbound" +
      "\n\nMax Load Capacity trucks, metric tonnes" +
      "\n" + responseresultcm.ad7 + "  " + responseresultcm.ae7 +
      "\n" + responseresultcm.ad8 + "  " + responseresultcm.ae8 +
      "\n" + responseresultcm.ad9 + "  " + responseresultcm.ae9 +
      "\n\nAverage speed of trucks, kmph" +
      "\n" + responseresultcm.ad12 + "  " + responseresultcm.ae12 +
      "\n" + responseresultcm.ad13 + "  " + responseresultcm.ae13 +
      "\n" + responseresultcm.ad14 + "  " + responseresultcm.ae14 +
      "\n\nMilegae trucks, kmpl" +
      "\n" + responseresultcm.ad17 + "  " + responseresultcm.ae17 +
      "\n" + responseresultcm.ad18 + "  " + responseresultcm.ae18 +
      "\n" + responseresultcm.ad19 + "  " + responseresultcm.ae19 +
      "\n\nFragility Chances trucks" +
      "\n" + responseresultcm.ad22 + "  " + responseresultcm.ae22 +
      "\n" + responseresultcm.ad23 + "  " + responseresultcm.ae23 +
      "\n" + responseresultcm.ad24 + "  " + responseresultcm.ae24 +
      "\n\nPrice per mt-km trucks" +
      "\n" + responseresultcm.ad27 + "  " + responseresultcm.ae27 +
      "\n" + responseresultcm.ad28 + "  " + responseresultcm.ae28 +
      "\n" + responseresultcm.ad29 + "  " + responseresultcm.ae29 +
      "\n\nPrice per mt-km other modes" +
      "\n" + responseresultcm.ad32 + "  " + responseresultcm.ae32 +
      "\n" + responseresultcm.ad33 + "  " + responseresultcm.ae33 +
      "\n\nAverage speed kmph other modes" +
      "\n" + responseresultcm.ad36 + "  " + responseresultcm.ae36 +
      "\n" + responseresultcm.ad37 + "  " + responseresultcm.ae37 +
      "\n\nMaximum load capacity per trip other modes, metric tonnes" +
      "\n" + responseresultcm.ad40 + "  " + responseresultcm.ae40 +
      "\n" + responseresultcm.ad41 + "  " + responseresultcm.ae41 +
      "\n\nDamage chances other modes" +
      "\n" + responseresultcm.ad44 + "  " + responseresultcm.ae44 +
      "\n" + responseresultcm.ad45 + "  " + responseresultcm.ae45 +
      "\n\n" + responseresultcm.ad47 + "  " + responseresultcm.ae47 +
      "\n\n" + responseresultcm.ad49 + "  " + responseresultcm.ae49 +
      "\n\nEmission, other modes" +
      "\n" + responseresultcm.ad52 + "  " + responseresultcm.ae52 +
      "\n" + responseresultcm.ad53 + "  " + responseresultcm.ae53 +
      "\n" + responseresultcm.ad54 + "  " + responseresultcm.ae54 +
      "\n" + responseresultcm.ad55 + "  " + responseresultcm.ae55 +
      "\n" + responseresultcm.ad56 + "  " + responseresultcm.ae56 +
      "\n" + responseresultcm.ad57 + "  " + responseresultcm.ae57 +
      "\n\nNumber of Trucks" + "  " + "Min" + "  " + "Max" +
      "\n" + responseresultcm.ad60 + "  " + responseresultcm.ae60 + "  " + responseresultcm.af60 +
      "\n" + responseresultcm.ad61 + "  " + responseresultcm.ae61 + "  " + responseresultcm.af61 +
      "\n" + responseresultcm.ad62 + "  " + responseresultcm.ae62 + "  " + responseresultcm.af62 +
      "\n\nNumber of Trips" + "  " + "Min" + "  " + "Max" +
      "\n" + responseresultcm.ad65 + "  " + responseresultcm.ae65 + "  " + responseresultcm.af65 +
      "\n" + responseresultcm.ad66 + "  " + responseresultcm.ae66 + "  " + responseresultcm.af66 +

      "\n\nInput - Player decision" + "\n" +
      "\n" + "Parameters" + "  " + "Input" +
      "\nInbound " +
      "\n" + "Truck 1" + "  " + result[0] +
      "\n" + "Truck 2" + "  " + result[1] +
      "\n" + "Truck 3" + "  " + result[2] +
      "\n" + "Truck 1, Optimization" + "  " + result[3] +
      "\n" + "Truck 2, Optimization" + "  " + result[4] +
      "\n" + "Truck 3, Optimization" + "  " + result[5] +
      "\nWarehouse Management" +
      "\n" + "Unison Limited" + "  " + result[6] +
      "\n" + "Promton Incorporation" + "  " + result[7] +
      "\n" + "Fix Corporate" + "  " + result[8] +
      "\n" + "eCom Limited" + "  " + result[9] +
      "\n" + "Unison Limited, docks" + "  " + result[25] +
      "\n" + "Promton Incorporation, docks" + "  " + result[26] +
      "\n" + "Fix Corporate, docks" + "  " + result[27] +
      "\n" + "eCom Limited, docks" + "  " + result[28] +
      "\n" + "Warehouse Upgrade 1" + "  " + result[10] +
      "\n" + "Warehouse Upgrade 2" + "  " + result[11] +
      "\nRoutes & Technology" +
      "\n" + "Route" + "  " + result[12] +
      "\n" + "Technology 1" + "  " + result[13] +
      "\n" + "Technology 2" + "  " + result[14] +
      "\nOutbound" +
      "\n" + "Small Trucks" + "  " + result[15] +
      "\n" + "Open Body Trucks" + "  " + result[16] +
      "\n" + "Covered Container" + "  " + result[17] +
      "\n" + "Rail Trips" + "  " + result[18] +
      "\n" + "Air Trips" + "  " + result[19] +
      "\n" + "Small Trucks, Optimization" + "  " + result[20] +
      "\n" + "Open Body Trucks, Optimization" + "  " + result[21] +
      "\n" + "Covered Container, Optimization" + "  " + result[22] +
      "\n" + "Rail, Optimization" + "  " + result[23] +
      "\n" + "Air, Optimization" + "  " + result[24] +

      "\n\nOutput - System Calculated" + "\n" +
      "\n" + "KPI" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Logistics Cost, INR" + "  " + responseresultdatabase.j107 +
      "\n" + "Revenue, INR" + "  " + responseresultdatabase.j108 +
      "\n" + "Effectiveness" + "  " + (Number(responseresultdatabase.j109) * 100).toFixed(0) + "%" +
      "\n" + "TAT obligation met" + "  " + responseresultdatabase.j110 +
      "\n\n" + "Revenue" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Trucks" + "  " + responseresultdatabase.c85 +
      "\n" + "Rail" + "  " + responseresultdatabase.c86 +
      "\n" + "Air" + "  " + responseresultdatabase.c87 +
      "\n\n" + "Turnaround Time, days" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Unison Limited" + "  " + responseresultdatabase.j102 +
      "\n" + "Promton Incorporation" + "  " + responseresultdatabase.j103 +
      "\n" + "Fix Corporate" + "  " + responseresultdatabase.j104 +
      "\n" + "eCom Limited" + "  " + responseresultdatabase.j105 +
      "\n\n" + "Inbound Logistics Cost, INR" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Fuel Cost" + "  " + responseresultdatabase.c28 +
      "\n" + "Fleet Wages Cost" + "  " + responseresultdatabase.c29 +
      "\n" + "Contract Wages Cost" + "  " + responseresultdatabase.c30 +
      "\n" + "Warehouse Technology Cost" + "  " + responseresultdatabase.c31 +
      "\n" + "Under Utilization Opportunity Cost" + "  " + responseresultdatabase.c32 +
      "\n" + "Other costs" + "  " + responseresultdatabase.c33 +
      "\n\n" + "Outbound Logistics Cost, INR" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Fuel Cost" + "  " + responseresultdatabase.c90 +
      "\n" + "Fleet Wages Cost" + "  " + responseresultdatabase.c91 +
      "\n" + "Contract Wages Cost" + "  " + responseresultdatabase.c92 +
      "\n" + "Technology Cost" + "  " + responseresultdatabase.c93 +
      "\n" + "Other costs" + "  " + responseresultdatabase.c94 +
      "\n" + "Total Cost" + "  " + responseresultdatabase.c95 +
      "\n" + "Total Emission" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "CO2 Emission (kg)" + "  " + responseresultdatabase.p90 +
      "\n" + "CH4 Emission (g)" + "  " + responseresultdatabase.p91 +
      "\n" + "N2O EmisEffectivenesssion (g)" + "  " + responseresultdatabase.p92 +
      "\n\n" + "Goal to be optimized" +
      "\n" + "Effectiveness (logistics cost as a percentage of revenue) " + "  " + responseresultcm.ae73;

    return assesment;

  }
}
