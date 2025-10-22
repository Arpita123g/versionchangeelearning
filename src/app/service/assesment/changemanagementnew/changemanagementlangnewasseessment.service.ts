import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangemanagementlangnewasseessmentService {

  constructor() { }

   useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any,language:any): string {
    let assesment = "\n\nFixed Data" +
      "\nMemo" +
      "\n" + language.b16 +
      "\n\n" + language.b5 +
      "\n" + language.b17 +
      "\n" + "Name" + "  " + "Position" + "  " + "Profile" +
      "\n" + language.b20 + "  " + language.b281 + "  " + language.b21 + "  " + "1" +
      "\n\n" + language.b22 + "  " + language.b282 + "  " + language.b23 + "  " + "1" +
      "\n\n" + language.b24 + "  " + language.b283 + "  " + language.b25 + "  " + "1" +
      "\n\n" + language.b26 + "  " + language.b284 + "  " + language.b27 + "  " + "1" +
      "\n\n" + language.b28 + "  " + language.b285 + "  " + language.b29 + "  " + "1" +
      "\n\n" + language.b30 + "  " + language.b285 + "  " + language.b31 + "  " + "1" +
      "\n\nWorking Relationship at start ( 1 is positive, -1 is negative and 0 indicates neutral)" +
      "\n" +
      "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 +
      "\n" + language.b34 + "  " + responseresultcm.e18 + "  " + responseresultcm.f18 + "  " + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + responseresultcm.i18 + "  " + responseresultcm.j18 +
      "\n" + language.b35 + "  " + responseresultcm.e19 + "  " + responseresultcm.f19 + "  " + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + responseresultcm.i19 + "  " + responseresultcm.j19 +
      "\n" + language.b36 + "  " + responseresultcm.e20 + "  " + responseresultcm.f20 + "  " + responseresultcm.g20 + "  " + responseresultcm.h20 + "  " + responseresultcm.i20 + "  " + responseresultcm.j20 +
      "\n" + language.b37 + "  " + responseresultcm.e21 + "  " + responseresultcm.f21 + "  " + responseresultcm.g21 + "  " + responseresultcm.h21 + "  " + responseresultcm.i21 + "  " + responseresultcm.j21 +
      "\n" + language.b38 + "  " + responseresultcm.e22 + "  " + responseresultcm.f22 + "  " + responseresultcm.g22 + "  " + responseresultcm.h22 + "  " + responseresultcm.i22 + "  " + responseresultcm.j22 +
      "\n" + language.b39 + "  " + responseresultcm.e23 + "  " + responseresultcm.f23 + "  " + responseresultcm.g23 + "  " + responseresultcm.h23 + "  " + responseresultcm.i23 + "  " + responseresultcm.j23 +
      "\n\nTime, Minutes\n" +
      "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 +
      "\n" + "Total Time Available, minutes" + "  " + Number(responseresultcm.e28).toFixed(0) + "  " + Number(responseresultcm.f28).toFixed(0) + "  " + Number(responseresultcm.g28).toFixed(0) + "  " + Number(responseresultcm.h28).toFixed(0) + "  " + Number(responseresultcm.i28).toFixed(0) + "  " + Number(responseresultcm.j28).toFixed(0) +
      "\n\n " + "Max Score" + "  " + Number(responseresultcm.e30).toFixed(0) +
      "\n\nPerformance Weights" +
      "\n" + language.b41 + "  " + Number(responseresultcm.e33).toFixed(1) +
      "\n" + language.b86 + "  " + responseresultcm.e34 +
      "\n" + language.b88 + "  " + responseresultcm.e35 +
      "\n\n" + "Budget" + "  " + Number(responseresultcm.e37).toFixed(0) +
      "\n\n" + "The starting level in each of awareness, motivation and commitment of person suggests their know how " +
      "of the situation. Each activity consists of some intervention which has effect on employee awareness, motivation " +
      "and commitment levels. This activity also have an impact on employees time and budget, in case of no time or budget " +
      "available the intervention have no effect and it impacts inversely." +
      "\n\n" + language.b41 +
      "\n\nStarting Level" +
      "\n" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 +
      "\n" + "Awareness Starting" + "  " + Number(responseresultcm.m8).toFixed(0) + "  " + Number(responseresultcm.n8).toFixed(0) + "  " + Number(responseresultcm.o8).toFixed(1) + "  " + Number(responseresultcm.p8).toFixed(1) + "  " + Number(responseresultcm.q8).toFixed(1) + "  " + Number(responseresultcm.r8).toFixed(1) +
      "\n\n" + "Organisation Wide" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b46 + "  " + responseresultcm.m11 + "  " + responseresultcm.n11 + "  " + responseresultcm.o11 + "  " + responseresultcm.p11 + "  " + responseresultcm.q11 + "  " + responseresultcm.r11 + "  " + Number(responseresultcm.t11).toFixed(0) + "  " + Number(responseresultcm.u11).toFixed(0) +
      "\n" + language.b47 + "  " + responseresultcm.m12 + "  " + responseresultcm.n12 + "  " + responseresultcm.o12 + "  " + responseresultcm.p12 + "  " + responseresultcm.q12 + "  " + responseresultcm.r12 + "  " + Number(responseresultcm.t12).toFixed(0) + "  " + Number(responseresultcm.u12).toFixed(0) +
      "\n" + language.b48 + "  " + responseresultcm.m13 + "  " + responseresultcm.n13 + "  " + responseresultcm.o13 + "  " + responseresultcm.p13 + "  " + responseresultcm.q13 + "  " + responseresultcm.r13 + "  " + Number(responseresultcm.t13).toFixed(0) + "  " + Number(responseresultcm.u13).toFixed(0) +
      "\n" + language.b49 + "  " + responseresultcm.m14 + "  " + responseresultcm.n14 + "  " + responseresultcm.o14 + "  " + responseresultcm.p14 + "  " + responseresultcm.q14 + "  " + responseresultcm.r14 + "  " + Number(responseresultcm.t14).toFixed(0) + "  " + Number(responseresultcm.u14).toFixed(0) +
      "\n" + language.b50 + "  " + responseresultcm.m15 + "  " + responseresultcm.n15 + "  " + responseresultcm.o15 + "  " + responseresultcm.p15 + "  " + responseresultcm.q15 + "  " + responseresultcm.r15 + "  " + Number(responseresultcm.t15).toFixed(0) + "  " + Number(responseresultcm.u15).toFixed(0) +
      "\n" + language.b51 + "  " + responseresultcm.m16 + "  " + responseresultcm.n16 + "  " + responseresultcm.o16 + "  " + responseresultcm.p16 + "  " + responseresultcm.q16 + "  " + responseresultcm.r16 + "  " + Number(responseresultcm.t16).toFixed(0) + "  " + Number(responseresultcm.u16).toFixed(0) +
      "\n\n" + "Individual Activity" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b61 + "  " + responseresultcm.m19 + "  " + responseresultcm.n19 + "  " + responseresultcm.o19 + "  " + responseresultcm.p19 + "  " + responseresultcm.q19 + "  " + responseresultcm.r19 + "  " + responseresultcm.t19 + "  " + responseresultcm.u19 +
      "\n" + language.b62 + "  " + responseresultcm.m20 + "  " + responseresultcm.n20 + "  " + responseresultcm.o20 + "  " + responseresultcm.p20 + "  " + responseresultcm.q20 + "  " + responseresultcm.r20 + "  " + responseresultcm.t20 + "  " + responseresultcm.u20 +
      "\n" + language.b63 + "  " + responseresultcm.m21 + "  " + responseresultcm.n21 + "  " + responseresultcm.o21 + "  " + responseresultcm.p21 + "  " + responseresultcm.q21 + "  " + responseresultcm.r21 + "  " + responseresultcm.t21 + "  " + responseresultcm.u21 +
      "\n" + language.b64 + "  " + responseresultcm.m22 + "  " + responseresultcm.n22 + "  " + responseresultcm.o22 + "  " + responseresultcm.p22 + "  " + responseresultcm.q22 + "  " + responseresultcm.r22 + "  " + responseresultcm.t22 + "  " + responseresultcm.u22 +
      "\n" + language.b65 + "  " + responseresultcm.m23 + "  " + responseresultcm.n23 + "  " + responseresultcm.o23 + "  " + responseresultcm.p23 + "  " + responseresultcm.q23 + "  " + responseresultcm.r23 + "  " + responseresultcm.t23 + "  " + responseresultcm.u23 +
      "\n" + language.b66 + "  " + responseresultcm.m24 + "  " + responseresultcm.n24 + "  " + responseresultcm.o24 + "  " + responseresultcm.p24 + "  " + responseresultcm.q24 + "  " + responseresultcm.r24 + "  " + responseresultcm.t24 + "  " + responseresultcm.u24 +
      "\n\n" + "Group Activity" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b74 + "  " + responseresultcm.m27 + "  " + responseresultcm.n27 + "  " + responseresultcm.o27 + "  " + responseresultcm.p27 + "  " + responseresultcm.q27 + "  " + responseresultcm.r27 + "  " + responseresultcm.t27 + "  " + responseresultcm.u27 +
      "\n" + language.b75 + "  " + responseresultcm.m28 + "  " + responseresultcm.n28 + "  " + responseresultcm.o28 + "  " + responseresultcm.p28 + "  " + responseresultcm.q28 + "  " + responseresultcm.r28 + "  " + responseresultcm.t28 + "  " + responseresultcm.u28 +
      "\n" + language.b76 + "  " + responseresultcm.m29 + "  " + responseresultcm.n29 + "  " + responseresultcm.o29 + "  " + responseresultcm.p29 + "  " + responseresultcm.q29 + "  " + responseresultcm.r29 + "  " + responseresultcm.t29 + "  " + responseresultcm.u29 +
      "\n" + language.b77 + "  " + responseresultcm.m30 + "  " + responseresultcm.n30 + "  " + responseresultcm.o30 + "  " + responseresultcm.p30 + "  " + responseresultcm.q30 + "  " + responseresultcm.r30 + "  " + responseresultcm.t30 + "  " + responseresultcm.u30 +
      "\n" + language.b78 + "  " + responseresultcm.m31 + "  " + responseresultcm.n31 + "  " + responseresultcm.o31 + "  " + responseresultcm.p31 + "  " + responseresultcm.q31 + "  " + responseresultcm.r31 + "  " + responseresultcm.t31 + "  " + responseresultcm.u31 +
      "\n" + language.b79 + "  " + responseresultcm.m32 + "  " + responseresultcm.n32 + "  " + responseresultcm.o32 + "  " + responseresultcm.p32 + "  " + responseresultcm.q32 + "  " + responseresultcm.r32 + "  " + responseresultcm.t32 + "  " + responseresultcm.u32 +
      "\n\n" + "Penalty of No Intervention" + "  " + responseresultcm.m34 +
      "\n\n" + "Penalty of forcing intervention without time" + "  " + responseresultcm.m36 +
      "\n\n" + "Relationship Effect" + "  " + responseresultcm.m38 +
      "\n\n" + language.b86 +
      "\nStarting Level" +
      "\n" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + 
      "\n" + "Motivation Starting" + "  " +  responseresultcm.x8 + "  " + responseresultcm.y8 + "  " + responseresultcm.z8 + "  " + responseresultcm.aa8 + "  " + responseresultcm.ab8 + "  " + responseresultcm.ac8 +
      "\n\n" + "Organisation Wide" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b46 + "  " + responseresultcm.x11 + "  " + responseresultcm.y11 + "  " + responseresultcm.z11 + "  " + responseresultcm.aa11 + "  " + responseresultcm.ab11 + "  " + responseresultcm.ac11 + "  " + responseresultcm.ae11 + "  " + responseresultcm.af11 +
      "\n" + language.b47 + "  " + responseresultcm.x12 + "  " + responseresultcm.y12 + "  " + responseresultcm.z12 + "  " + responseresultcm.aa12 + "  " + responseresultcm.ab12 + "  " + responseresultcm.ac12 + "  " + responseresultcm.ae12 + "  " + responseresultcm.af12 +
      "\n" + language.b48 + "  " + responseresultcm.x13 + "  " + responseresultcm.y13 + "  " + responseresultcm.z13 + "  " + responseresultcm.aa13 + "  " + responseresultcm.ab13 + "  " + responseresultcm.ac13 + "  " + responseresultcm.ae13 + "  " + responseresultcm.af13 +
      "\n" + language.b49 + "  " + responseresultcm.x14 + "  " + responseresultcm.y14 + "  " + responseresultcm.z14 + "  " + responseresultcm.aa14 + "  " + responseresultcm.ab14 + "  " + responseresultcm.ac14 + "  " + responseresultcm.ae14 + "  " + responseresultcm.af14 +
      "\n" + language.b50 + "  " + responseresultcm.x15 + "  " + responseresultcm.y15 + "  " + responseresultcm.z15 + "  " + responseresultcm.aa15 + "  " + responseresultcm.ab15 + "  " + responseresultcm.ac15 + "  " + responseresultcm.ae15 + "  " + responseresultcm.af15 +
      "\n" + language.b51 + "  " + responseresultcm.x16 + "  " + responseresultcm.y16 + "  " + responseresultcm.z16 + "  " + responseresultcm.aa16 + "  " + responseresultcm.ab16 + "  " + responseresultcm.ac16 + "  " + responseresultcm.ae16 + "  " + responseresultcm.af16 +
      "\n\n" + "Individual Activity" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b61 + "  " + responseresultcm.x19 + "  " + responseresultcm.y19 + "  " + responseresultcm.z19 + "  " + responseresultcm.aa19 + "  " + responseresultcm.ab19 + "  " + responseresultcm.ac19 + "  " + responseresultcm.ae19 + "  " + responseresultcm.af19 +
      "\n" + language.b62 + "  " + responseresultcm.x20 + "  " + responseresultcm.y20 + "  " + responseresultcm.z20 + "  " + responseresultcm.aa20 + "  " + responseresultcm.ab20 + "  " + responseresultcm.ac20 + "  " + responseresultcm.ae20 + "  " + responseresultcm.af20 +
      "\n" + language.b63 + "  " + responseresultcm.x21 + "  " + responseresultcm.y21 + "  " + responseresultcm.z21 + "  " + responseresultcm.aa21 + "  " + responseresultcm.ab21 + "  " + responseresultcm.ac21 + "  " + responseresultcm.ae21 + "  " + responseresultcm.af21 +
      "\n" + language.b64 + "  " + responseresultcm.x22 + "  " + responseresultcm.y22 + "  " + responseresultcm.z22 + "  " + responseresultcm.aa22 + "  " + responseresultcm.ab22 + "  " + responseresultcm.ac22 + "  " + responseresultcm.ae22 + "  " + responseresultcm.af22 +
      "\n" + language.b65 + "  " + responseresultcm.x23 + "  " + responseresultcm.y23 + "  " + responseresultcm.z23 + "  " + responseresultcm.aa23 + "  " + responseresultcm.ab23 + "  " + responseresultcm.ac23 + "  " + responseresultcm.ae23 + "  " + responseresultcm.af23 +
      "\n" + language.b66 + "  " + responseresultcm.x24 + "  " + responseresultcm.y24 + "  " + responseresultcm.z24 + "  " + responseresultcm.aa24 + "  " + responseresultcm.ab24 + "  " + responseresultcm.ac24 + "  " + responseresultcm.ae24 + "  " + responseresultcm.af24 +
      "\n\n" + "Group Activity" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b74 + "  " + responseresultcm.x27 + "  " + responseresultcm.y27 + "  " + responseresultcm.z27 + "  " + responseresultcm.aa27 + "  " + responseresultcm.ab27 + "  " + responseresultcm.ac27 + "  " + responseresultcm.ae27 + "  " + responseresultcm.af27 +
      "\n" + language.b75 + "  " + responseresultcm.x28 + "  " + responseresultcm.y28 + "  " + responseresultcm.z28 + "  " + responseresultcm.aa28 + "  " + responseresultcm.ab28 + "  " + responseresultcm.ac28 + "  " + responseresultcm.ae28 + "  " + responseresultcm.af28 +
      "\n" + language.b76 + "  " + responseresultcm.x29 + "  " + responseresultcm.y29 + "  " + responseresultcm.z29 + "  " + responseresultcm.aa29 + "  " + responseresultcm.ab29 + "  " + responseresultcm.ac29 + "  " + responseresultcm.ae29 + "  " + responseresultcm.af29 +
      "\n" + language.b77 + "  " + responseresultcm.x30 + "  " + responseresultcm.y30 + "  " + responseresultcm.z30 + "  " + responseresultcm.aa30 + "  " + responseresultcm.ab30 + "  " + responseresultcm.ac23 + "  " + responseresultcm.ae30 + "  " + responseresultcm.af30 +
      "\n" + language.b78 + "  " + responseresultcm.x31 + "  " + responseresultcm.y31 + "  " + responseresultcm.z31 + "  " + responseresultcm.aa31 + "  " + responseresultcm.ab31 + "  " + responseresultcm.ac31 + "  " + responseresultcm.ae31 + "  " + responseresultcm.af31 +
      "\n" + language.b79 + "  " + responseresultcm.x32 + "  " + responseresultcm.y32 + "  " + responseresultcm.z32 + "  " + responseresultcm.aa32 + "  " + responseresultcm.ab32 + "  " + responseresultcm.ac32 + "  " + responseresultcm.ae32 + "  " + responseresultcm.af32 +
      "\n\n" + "Penalty of No Intervention" + "  " + responseresultcm.x34 +
      "\n\n" + "Penalty of forcing intervention without time" + "  " + responseresultcm.x36 +
      "\n\n" + "Relationship Effect" + "  " + responseresultcm.x38 +
      "\n\n" + language.b88 +
      "\nStarting Level" +
      "\n" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 +
      "\n" + "Commitment Starting" + "  " + responseresultcm.ai8 + "  " + responseresultcm.aj8 + "  " + responseresultcm.ak8 + "  " + responseresultcm.al8 + "  " + responseresultcm.am8 + "  " + responseresultcm.an8 +

      "\n\n" + "Organisation Wide" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b46 + "  " + responseresultcm.ai11 + "  " + responseresultcm.aj11 + "  " + responseresultcm.ak11 + "  " + responseresultcm.al11 + "  " + responseresultcm.am11 + "  " + responseresultcm.an11 + "  " + responseresultcm.ap11 + "  " + responseresultcm.aq11 +
      "\n" + language.b47 + "  " + responseresultcm.ai12 + "  " + responseresultcm.aj12 + "  " + responseresultcm.ak12 + "  " + responseresultcm.al12 + "  " + responseresultcm.am12 + "  " + responseresultcm.an12 + "  " + responseresultcm.ap12 + "  " + responseresultcm.aq12 +
      "\n" + language.b48 + "  " + responseresultcm.ai13 + "  " + responseresultcm.aj13 + "  " + responseresultcm.ak13 + "  " + responseresultcm.al13 + "  " + responseresultcm.am13 + "  " + responseresultcm.an13 + "  " + responseresultcm.ap13 + "  " + responseresultcm.aq13 +
      "\n" + language.b49 + "  " + responseresultcm.ai14 + "  " + responseresultcm.aj14 + "  " + responseresultcm.ak14 + "  " + responseresultcm.al14 + "  " + responseresultcm.am14 + "  " + responseresultcm.an14 + "  " + responseresultcm.ap14 + "  " + responseresultcm.aq14 +
      "\n" + language.b50 + "  " + responseresultcm.ai15 + "  " + responseresultcm.aj15 + "  " + responseresultcm.ak15 + "  " + responseresultcm.al15 + "  " + responseresultcm.am15 + "  " + responseresultcm.an15 + "  " + responseresultcm.ap15 + "  " + responseresultcm.aq15 +
      "\n" + language.b51 + "  " + responseresultcm.ai16 + "  " + responseresultcm.aj16 + "  " + responseresultcm.ak16 + "  " + responseresultcm.al16 + "  " + responseresultcm.am16 + "  " + responseresultcm.an16 + "  " + responseresultcm.ap16 + "  " + responseresultcm.aq16 +
      "\n\n" + "Individual Activity" + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b61 + "  " + responseresultcm.ai19 + "  " + responseresultcm.aj19 + "  " + responseresultcm.ak19 + "  " + responseresultcm.al19 + "  " + responseresultcm.am19 + "  " + responseresultcm.an19 + "  " + responseresultcm.ap19 + "  " + responseresultcm.aq19 +
      "\n" + language.b62 + "  " + responseresultcm.ai20 + "  " + responseresultcm.aj20 + "  " + responseresultcm.ak20 + "  " + responseresultcm.al20 + "  " + responseresultcm.am20 + "  " + responseresultcm.an20 + "  " + responseresultcm.ap20 + "  " + responseresultcm.aq20 +
      "\n" + language.b63 + "  " + responseresultcm.ai21 + "  " + responseresultcm.aj21 + "  " + responseresultcm.ak21 + "  " + responseresultcm.al21 + "  " + responseresultcm.am21 + "  " + responseresultcm.an21 + "  " + responseresultcm.ap21 + "  " + responseresultcm.aq21 +
      "\n" + language.b64 + "  " + responseresultcm.ai22 + "  " + responseresultcm.aj22 + "  " + responseresultcm.ak22 + "  " + responseresultcm.al22 + "  " + responseresultcm.am22 + "  " + responseresultcm.an22 + "  " + responseresultcm.ap22 + "  " + responseresultcm.aq22 +
      "\n" + language.b65 + "  " + responseresultcm.ai23 + "  " + responseresultcm.aj23 + "  " + responseresultcm.ak23 + "  " + responseresultcm.al23 + "  " + responseresultcm.am23 + "  " + responseresultcm.an23 + "  " + responseresultcm.ap23 + "  " + responseresultcm.aq23 +
      "\n" + language.b66 + "  " + responseresultcm.ai24 + "  " + responseresultcm.aj24 + "  " + responseresultcm.ak24 + "  " + responseresultcm.al24 + "  " + responseresultcm.am24 + "  " + responseresultcm.an24 + "  " + responseresultcm.ap24 + "  " + responseresultcm.aq24 +
      "\n\n" + "Group Activity" + "  " + "  " + language.b34 + "  " + language.b35 + "  " + language.b36 + "  " + language.b37 + "  " + language.b38 + "  " + language.b39 + "  " + language.b215 + "  " + language.b59 +
      "\n" + language.b74 + "  " + responseresultcm.ai27 + "  " + responseresultcm.aj27 + "  " + responseresultcm.ak27 + "  " + responseresultcm.al27 + "  " + responseresultcm.am27 + "  " + responseresultcm.an27 + "  " + responseresultcm.ap27 + "  " + responseresultcm.aq27 +
      "\n" + language.b75 + "  " + responseresultcm.ai28 + "  " + responseresultcm.aj28 + "  " + responseresultcm.ak28 + "  " + responseresultcm.al28 + "  " + responseresultcm.am28 + "  " + responseresultcm.an28 + "  " + responseresultcm.ap28 + "  " + responseresultcm.aq28 +
      "\n" + language.b76 + "  " + responseresultcm.ai29 + "  " + responseresultcm.aj29 + "  " + responseresultcm.ak29 + "  " + responseresultcm.al29 + "  " + responseresultcm.am29 + "  " + responseresultcm.an29 + "  " + responseresultcm.ap29 + "  " + responseresultcm.aq29 +
      "\n" + language.b77 + "  " + responseresultcm.ai30 + "  " + responseresultcm.aj30 + "  " + responseresultcm.ak30 + "  " + responseresultcm.al30 + "  " + responseresultcm.am30 + "  " + responseresultcm.an30 + "  " + responseresultcm.ap30 + "  " + responseresultcm.aq30 +
      "\n" + language.b78 + "  " + responseresultcm.ai31 + "  " + responseresultcm.aj31 + "  " + responseresultcm.ak31 + "  " + responseresultcm.al31 + "  " + responseresultcm.am31 + "  " + responseresultcm.an31 + "  " + responseresultcm.ap31 + "  " + responseresultcm.aq31 +
      "\n" + language.b79 + "  " + responseresultcm.ai32 + "  " + responseresultcm.aj32 + "  " + responseresultcm.ak32 + "  " + responseresultcm.al32 + "  " + responseresultcm.am32 + "  " + responseresultcm.an32 + "  " + responseresultcm.ap32 + "  " + responseresultcm.aq32 +
      "\n\n" + "Penalty of No Intervention" + "  " + responseresultcm.ai34 +
      "\n\n" + "Penalty of forcing intervention without time" + "  " + responseresultcm.ai36 +
      "\n\n" + "Relationship Effect" + "  " + responseresultcm.ai38 +


      "\n\nInput - Player's Section\nParameters  Input" +
      "\nAwareness  " +
      "\nOrganization Wide Intervention  " + result[0] +
      "\nIndividual Activity Intervention  " + result[1] +
      "\nIndividual Actvity, Kabir  " + result[2]  +
      "\nIndividual Actvity, Anne  " + result[3]  +
      "\nIndividual Actvity, Rajas  " + result[4]  +
      "\nIndividual Actvity, Priya  " + result[5]  +
      "\nIndividual Actvity, Neha  " + result[6]  +
      "\nIndividual Actvity, Rajat  " + result[7]  +
      "\nGroup Activity Intervention  " + result[8] +
      "\nGroup Actvity, Kabir  " + result[9]  +
      "\nGroup Actvity, Anne  " + result[10]  +
      "\nGroup Actvity, Rajas  " + result[11]  +
      "\nGroup Actvity, Priya  " + result[12]  +
      "\nGroup Actvity, Neha  " + result[13]  +
      "\nGroup Actvity, Rajat  " + result[14]  +
      "\nMotivation " +
      "\nOrganization Wide Intervention  " + result[15] +
      "\nIndividual Activity Intervention  " + result[16] +
      "\nIndividual Actvity, Kabir  " + result[17]  +
      "\nIndividual Actvity, Anne  " + result[18]  +
      "\nIndividual Actvity, Rajas  " + result[19]  +
      "\nIndividual Actvity, Priya  " + result[20]  +
      "\nIndividual Actvity, Neha  " + result[21]  +
      "\nIndividual Actvity, Rajat  " + result[22]  +
      "\nGroup Activity Intervention  " + result[23] +
      "\nGroup Actvity, Kabir  " + result[24]  +
      "\nGroup Actvity, Anne  " + result[25]  +
      "\nGroup Actvity, Rajas  " + result[26]  +
      "\nGroup Actvity, Priya  " + result[27]  +
      "\nGroup Actvity, Neha  " + result[28]  +
      "\nGroup Actvity, Rajat  " + result[29]  +
      "\nCommitment " +
      "\nOrganization Wide Intervention  " + result[30] +
      "\nIndividual Activity Intervention  " + result[31] +
      "\nIndividual Actvity, Kabir  " + result[32]  +
      "\nIndividual Actvity, Anne  " + result[33]  +
      "\nIndividual Actvity, Rajas  " + result[34]  +
      "\nIndividual Actvity, Priya  " + result[35]  +
      "\nIndividual Actvity, Neha  " + result[36]  +
      "\nIndividual Actvity, Rajat  " + result[37]  +
      "\nGroup Activity Intervention  " + result[38] +
      "\nGroup Actvity, Kabir  " + result[39]  +
      "\nGroup Actvity, Anne  " + result[40]  +
      "\nGroup Actvity, Rajas  " + result[41]  +
      "\nGroup Actvity, Anne  " + result[40]  +
      "\nGroup Actvity, Rajas  " + result[41]  +
      "\nGroup Actvity, Priya  " + result[42]  +
      "\nGroup Actvity, Neha  " + result[43]  +
      "\nGroup Actvity, Rajat  " + result[44]  +
      "\n\nOutput - System Generated" +
      "\nEmployee Performance Level" +
      "\nParameter  Awareness Level %  Motivation Level %  Commitment Level %  Performance Level %" +
      "\nKabir " + Number(responseresultdatabase.x34) *100 + "  " + Number(responseresultdatabase.y34)*100 + "  " + Number(responseresultdatabase.z34)*100 + "  " + (Number(responseresultdatabase.aa34)*100).toFixed(0) +
      "\nAnne  " + Number(responseresultdatabase.x35) *100 + "  " + Number(responseresultdatabase.y35)*100 + "  " + Number(responseresultdatabase.z35)*100 + "  " + (Number(responseresultdatabase.aa35)*100).toFixed(0) +
      "\nRajas " + (Number(responseresultdatabase.x36) *100).toFixed(0) + "  " + Number(responseresultdatabase.y36)*100 + "  " + (Number(responseresultdatabase.z36)*100).toFixed(0) + "  " + (Number(responseresultdatabase.aa36)*100).toFixed(0) +
      "\nPriya " + (Number(responseresultdatabase.x37) *100).toFixed(0) + "  " + Number(responseresultdatabase.y37)*100 + "  " + Number(responseresultdatabase.z37)*100 + "  " + (Number(responseresultdatabase.aa37)*100).toFixed(0) +
      "\nNeha  " + Number(responseresultdatabase.x38) *100 + "  " + Number(responseresultdatabase.y38)*100 + "  " + (Number(responseresultdatabase.z38)*100).toFixed(0) + "  " + Number(responseresultdatabase.aa38)*100 +
      "\nRajat " + Number(responseresultdatabase.x39) *100 + "  " + Number(responseresultdatabase.y39)*100 + "  " + Number(responseresultdatabase.z39)*100 + "  " + Number(responseresultdatabase.aa39)*100 +
      "\n\nGroup KPI" +
      "\nParameter  Output" +
      "\nAwareness Level %   " + (Number(responseresultdatabase.x40)*100).toFixed(0) +
      "\nMotivation Level %  " + Number(responseresultdatabase.y40)*100 +
      "\nCommitment Level %  " + Number(responseresultdatabase.z40)*100 +
      "\nPerformance Level % " + Number(responseresultdatabase.aa40)*100 +
      "\n\nUnutilized Time of Employees, minutes" +
      "\nParameter  Output" +
      "\nKabir  " + responseresultdatabase.ak20 +
      "\nAnne  " + responseresultdatabase.al20 +
      "\nRajas  " + responseresultdatabase.am20 +
      "\nPriya  " + responseresultdatabase.an20 +
      "\nNeha  " + responseresultdatabase.ao20 +
      "\nRajat  " + responseresultdatabase.ap20 +
      "\n\nBudget, INR" +
      "\nParameter  Output" +
      "\nBudget Allocated  " + responseresultdatabase.o40 +
      "\nRemaining budget, Awareness stage  " + responseresultdatabase.o44 +
      "\nRemaining budget, Motivation stage  " + responseresultdatabase.o48 +
      "\nRemaining budget, Commitment stage  " + responseresultdatabase.o52 +
      "\n\nEmployee Working Relationship" + "  " + responseresultdatabase.ak23 + "  " + responseresultdatabase.al23 + "  " + responseresultdatabase.am23 + "  " + responseresultdatabase.an23 + "  " + responseresultdatabase.ao23 + "  " + responseresultdatabase.ap23 +
      "\n" + responseresultdatabase.aj24 + "  " + "" + "  " + responseresultdatabase.al24 + "  " + responseresultdatabase.am24 + "  " + responseresultdatabase.an24 + "  " + responseresultdatabase.ao24 + "  " + responseresultdatabase.ap24 +
      "\n" + responseresultdatabase.aj25 + "  " + responseresultdatabase.ak25 + "  " + "" + "  " + responseresultdatabase.am25 + "  " + responseresultdatabase.an25 + "  " + responseresultdatabase.ao25 + "  " + responseresultdatabase.ap25 +
      "\n" + responseresultdatabase.aj26 + "  " + responseresultdatabase.ak26 + "  " + responseresultdatabase.al26 + "  " + "" + "  " + responseresultdatabase.an26 + "  " + responseresultdatabase.ao26 + "  " + responseresultdatabase.ap26 +
      "\n" + responseresultdatabase.aj27 + "  " + responseresultdatabase.ak27 + "  " + responseresultdatabase.al27 + "  " + responseresultdatabase.am27 + "  " + "" + "  " + responseresultdatabase.ao27 + "  " + responseresultdatabase.ap27 +
      "\n" + responseresultdatabase.aj28 + "  " + responseresultdatabase.ak28 + "  " + responseresultdatabase.al28 + "  " + responseresultdatabase.am28 + "  " + responseresultdatabase.an28 + "  " + "" + "  " + responseresultdatabase.ap28 +
      "\n" + responseresultdatabase.aj29 + "  " + responseresultdatabase.ak29 + "  " + responseresultdatabase.al29 + "  " + responseresultdatabase.am29 + "  " + responseresultdatabase.an29 + "  " + responseresultdatabase.ao29 + "  " + "" +
      "\n\nGoal to be optimized" +
      "\nPerformance level in group KPI  " + responseresultcm.ai41 ;
    return assesment;
  }
}
