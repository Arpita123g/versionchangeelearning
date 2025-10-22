import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrmassesmentserviceService {

  constructor() { }


  useranalysisSubmit(responseresultcm: any,  result: any ,responseresultdatabase: any  ): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\nInformation" +
      "\n" + "The P1, P2 and P3 indicates the past year where P3 represents the last year" +
      "\n\n" + responseresultcm.d6 +
      "\n" + "  " + responseresultcm.e7 +
      "\n" + responseresultcm.d8 + " " + responseresultcm.e8 +
      "\n" + responseresultcm.d9 + " " + responseresultcm.e9 +
      "\n" + responseresultcm.d10 + " " + responseresultcm.e10 +
      "\n\n" + "  " + responseresultcm.e12 +
      "\n" + responseresultcm.d13 + " " + responseresultcm.e13 +
      "\n" + responseresultcm.d14 + " " + responseresultcm.e14 +
      "\n" + responseresultcm.d15 + " " + responseresultcm.e15 +
      "\n\n" + "  " + responseresultcm.e17 +
      "\n" + responseresultcm.d18 + " " + responseresultcm.e18 +
      "\n" + responseresultcm.d19 + " " + responseresultcm.e19 +
      "\n" + responseresultcm.d20 + " " + responseresultcm.e20 +
      "\n\n" + "  " + responseresultcm.e22 +
      "\n" + responseresultcm.d23 + " " + responseresultcm.e23 +
      "\n" + responseresultcm.d24 + " " + responseresultcm.e24 +
      "\n" + responseresultcm.d25 + " " + responseresultcm.e25 +
      "\n\n" + "  " + responseresultcm.e27 +
      "\n" + responseresultcm.d28 + " " + responseresultcm.e28 +
      "\n" + responseresultcm.d29 + " " + responseresultcm.e29 +
      "\n" + responseresultcm.d30 + " " + responseresultcm.e30 +
      "\n\n" + "  " + responseresultcm.e32 +
      "\n" + responseresultcm.d33 + " " + responseresultcm.e33 +
      "\n" + responseresultcm.d34 + " " + responseresultcm.e34 +
      "\n" + responseresultcm.d35 + " " + responseresultcm.e35 +
      "\n\n" + "  " + responseresultcm.e37 +
      "\n" + responseresultcm.d38 + " " + responseresultcm.e38 +
      "\n" + responseresultcm.d39 + " " + responseresultcm.e39 +
      "\n" + responseresultcm.d40 + " " + responseresultcm.e40 +
      "\n\n" + "  " + responseresultcm.e42 +
      "\n" + responseresultcm.d43 + " " + responseresultcm.e43 +
      "\n" + responseresultcm.d44 + " " + responseresultcm.e44 +
      "\n" + responseresultcm.d45 + " " + responseresultcm.e45 +
      "\n\n" + "  " + responseresultcm.e47 +
      "\n" + responseresultcm.d48 + " " + responseresultcm.e48 +
      "\n" + responseresultcm.d49 + " " + responseresultcm.e49 +
      "\n" + responseresultcm.d50 + " " + responseresultcm.e50 +
      "\n\n" + "  " + responseresultcm.e52 +
      "\n" + responseresultcm.d53 + " " + responseresultcm.e53 +
      "\n" + responseresultcm.d54 + " " + responseresultcm.e54 +
      "\n" + responseresultcm.d55 + " " + responseresultcm.e55 +
      "\n\n" + "  " + responseresultcm.e57 +
      "\n" + responseresultcm.d58 + " " + responseresultcm.e58 +
      "\n" + responseresultcm.d59 + " " + responseresultcm.e59 +
      "\n" + responseresultcm.d60 + " " + responseresultcm.e60 +
      "\n\n" + "  " + responseresultcm.e62 +
      "\n" + responseresultcm.d63 + " " + responseresultcm.e63 +
      "\n" + responseresultcm.d64 + " " + responseresultcm.e64 +
      "\n" + responseresultcm.d65 + " " + responseresultcm.e65 +
      "\n\n" + "  " + responseresultcm.e67 +
      "\n" + responseresultcm.d68 + " " + responseresultcm.e68 +
      "\n" + responseresultcm.d69 + " " + responseresultcm.e69 +
      "\n" + responseresultcm.d70 + " " + responseresultcm.e70 +
      "\n\n" + "  " + responseresultcm.e72 +
      "\n" + responseresultcm.d73 + " " + responseresultcm.e73 +
      "\n" + responseresultcm.d74 + " " + responseresultcm.e74 +
      "\n" + responseresultcm.d75 + " " + responseresultcm.e75 +
      "\n\nLead" +
      "\n\n" + responseresultcm.h6 + " " + responseresultcm.i6 + " " + responseresultcm.j6 + " " + responseresultcm.k6 + " " + responseresultcm.l6 + " " + responseresultcm.m6 + " " + responseresultcm.n6 + " " + responseresultcm.o6 + " " + responseresultcm.p6 + " " + responseresultcm.q6 + " " + responseresultcm.r6 + " " + responseresultcm.s6 + " " + responseresultcm.t6 +
      "\n" + responseresultcm.h7 + " " + responseresultcm.i7 + " " + responseresultcm.j7 + " " + responseresultcm.k7 + " " + responseresultcm.l7 + " " + responseresultcm.m7 + " " + responseresultcm.n7 + " " + responseresultcm.o7 + " " + responseresultcm.p7 + " " + responseresultcm.q7 + " " + responseresultcm.r7 + " " + responseresultcm.s7 + " " + responseresultcm.t7 +
      "\n" + responseresultcm.h8 + " " + responseresultcm.i8 + " " + responseresultcm.j8 + " " + responseresultcm.k8 + " " + responseresultcm.l8 + " " + responseresultcm.m8 + " " + responseresultcm.n8 + " " + responseresultcm.o8 + " " + responseresultcm.p8 + " " + responseresultcm.q8 + " " + responseresultcm.r8 + " " + responseresultcm.s8 + " " + responseresultcm.t8 +
      "\n" + responseresultcm.h9 + " " + responseresultcm.i9 + " " + responseresultcm.j9 + " " + responseresultcm.k9 + " " + responseresultcm.l9 + " " + responseresultcm.m9 + " " + responseresultcm.n9 + " " + responseresultcm.o9 + " " + responseresultcm.p9 + " " + responseresultcm.q9 + " " + responseresultcm.r9 + " " + responseresultcm.s9 + " " + responseresultcm.t9 +
      "\n" + responseresultcm.h10 + " " + responseresultcm.i10 + " " + responseresultcm.j10 + " " + responseresultcm.k10 + " " + responseresultcm.l10 + " " + responseresultcm.m10 + " " + responseresultcm.n10 + " " + responseresultcm.o10 + " " + responseresultcm.p10 + " " + responseresultcm.q10 + " " + responseresultcm.r10 + " " + responseresultcm.s10 + " " + responseresultcm.t10 +
      "\n" + responseresultcm.h11 + " " + responseresultcm.i11 + " " + responseresultcm.j11 + " " + responseresultcm.k11 + " " + responseresultcm.l11 + " " + responseresultcm.m11 + " " + responseresultcm.n11 + " " + responseresultcm.o11 + " " + responseresultcm.p11 + " " + responseresultcm.q11 + " " + responseresultcm.r11 + " " + responseresultcm.s11 + " " + responseresultcm.t11 +
      "\n" + responseresultcm.h12 + " " + responseresultcm.i12 + " " + responseresultcm.j12 + " " + responseresultcm.k12 + " " + responseresultcm.l12 + " " + responseresultcm.m12 + " " + responseresultcm.n12 + " " + responseresultcm.o12 + " " + responseresultcm.p12 + " " + responseresultcm.q12 + " " + responseresultcm.r12 + " " + responseresultcm.s12 + " " + responseresultcm.t12 +
      "\n" + responseresultcm.h13 + " " + responseresultcm.i13 + " " + responseresultcm.j13 + " " + responseresultcm.k13 + " " + responseresultcm.l13 + " " + responseresultcm.m13 + " " + responseresultcm.n13 + " " + responseresultcm.o13 + " " + responseresultcm.p13 + " " + responseresultcm.q13 + " " + responseresultcm.r13 + " " + responseresultcm.s13 + " " + responseresultcm.t13 +
      "\n" + responseresultcm.h14 + " " + responseresultcm.i14 + " " + responseresultcm.j14 + " " + responseresultcm.k14 + " " + responseresultcm.l14 + " " + responseresultcm.m14 + " " + responseresultcm.n14 + " " + responseresultcm.o14 + " " + responseresultcm.p14 + " " + responseresultcm.q14 + " " + responseresultcm.r14 + " " + responseresultcm.s14 + " " + responseresultcm.t14 +
      "\n" + responseresultcm.h15 + " " + responseresultcm.i15 + " " + responseresultcm.j15 + " " + responseresultcm.k15 + " " + responseresultcm.l15 + " " + responseresultcm.m15 + " " + responseresultcm.n15 + " " + responseresultcm.o15 + " " + responseresultcm.p15 + " " + responseresultcm.q15 + " " + responseresultcm.r15 + " " + responseresultcm.s15 + " " + responseresultcm.t15 +
      "\n" + responseresultcm.h16 + " " + responseresultcm.i16 + " " + responseresultcm.j16 + " " + responseresultcm.k16 + " " + responseresultcm.l16 + " " + responseresultcm.m16 + " " + responseresultcm.n16 + " " + responseresultcm.o16 + " " + responseresultcm.p16 + " " + responseresultcm.q16 + " " + responseresultcm.r16 + " " + responseresultcm.s16 + " " + responseresultcm.t16 +
      "\n" + responseresultcm.h17 + " " + responseresultcm.i17 + " " + responseresultcm.j17 + " " + responseresultcm.k17 + " " + responseresultcm.l17 + " " + responseresultcm.m17 + " " + responseresultcm.n17 + " " + responseresultcm.o17 + " " + responseresultcm.p17 + " " + responseresultcm.q17 + " " + responseresultcm.r17 + " " + responseresultcm.s17 + " " + responseresultcm.t17 +
      "\n" + responseresultcm.h18 + " " + responseresultcm.i18 + " " + responseresultcm.j18 + " " + responseresultcm.k18 + " " + responseresultcm.l18 + " " + responseresultcm.m18 + " " + responseresultcm.n18 + " " + responseresultcm.o18 + " " + responseresultcm.p18 + " " + responseresultcm.q18 + " " + responseresultcm.r18 + " " + responseresultcm.s18 + " " + responseresultcm.t18 +
      "\n" + responseresultcm.h19 + " " + responseresultcm.i19 + " " + responseresultcm.j19 + " " + responseresultcm.k19 + " " + responseresultcm.l19 + " " + responseresultcm.m19 + " " + responseresultcm.n19 + " " + responseresultcm.o19 + " " + responseresultcm.p19 + " " + responseresultcm.q19 + " " + responseresultcm.r19 + " " + responseresultcm.s19 + " " + responseresultcm.t19 +
      "\n" + responseresultcm.h20 + " " + responseresultcm.i20 + " " + responseresultcm.j20 + " " + responseresultcm.k20 + " " + responseresultcm.l20 + " " + responseresultcm.m20 + " " + responseresultcm.n20 + " " + responseresultcm.o20 + " " + responseresultcm.p20 + " " + responseresultcm.q20 + " " + responseresultcm.r20 + " " + responseresultcm.s20 + " " + responseresultcm.t20 +
      "\n" + responseresultcm.h21 + " " + responseresultcm.i21 + " " + responseresultcm.j21 + " " + responseresultcm.k21 + " " + responseresultcm.l21 + " " + responseresultcm.m21 + " " + responseresultcm.n21 + " " + responseresultcm.o21 + " " + responseresultcm.p21 + " " + responseresultcm.q21 + " " + responseresultcm.r21 + " " + responseresultcm.s21 + " " + responseresultcm.t21 +
      "\n" + responseresultcm.h22 + " " + responseresultcm.i22 + " " + responseresultcm.j22 + " " + responseresultcm.k22 + " " + responseresultcm.l22 + " " + responseresultcm.m22 + " " + responseresultcm.n22 + " " + responseresultcm.o22 + " " + responseresultcm.p22 + " " + responseresultcm.q22 + " " + responseresultcm.r22 + " " + responseresultcm.s22 + " " + responseresultcm.t22 +
      "\n" + responseresultcm.h23 + " " + responseresultcm.i23 + " " + responseresultcm.j23 + " " + responseresultcm.k23 + " " + responseresultcm.l23 + " " + responseresultcm.m23 + " " + responseresultcm.n23 + " " + responseresultcm.o23 + " " + responseresultcm.p23 + " " + responseresultcm.q23 + " " + responseresultcm.r23 + " " + responseresultcm.s23 + " " + responseresultcm.t23 +
      "\n" + responseresultcm.h24 + " " + responseresultcm.i24 + " " + responseresultcm.j24 + " " + responseresultcm.k24 + " " + responseresultcm.l24 + " " + responseresultcm.m24 + " " + responseresultcm.n24 + " " + responseresultcm.o24 + " " + responseresultcm.p24 + " " + responseresultcm.q24 + " " + responseresultcm.r24 + " " + responseresultcm.s24 + " " + responseresultcm.t24 +
      "\n" + responseresultcm.h25 + " " + responseresultcm.i25 + " " + responseresultcm.j25 + " " + responseresultcm.k25 + " " + responseresultcm.l25 + " " + responseresultcm.m25 + " " + responseresultcm.n25 + " " + responseresultcm.o25 + " " + responseresultcm.p25 + " " + responseresultcm.q25 + " " + responseresultcm.r25 + " " + responseresultcm.s25 + " " + responseresultcm.t25 +
      "\n" + responseresultcm.h26 + " " + responseresultcm.i26 + " " + responseresultcm.j26 + " " + responseresultcm.k26 + " " + responseresultcm.l26 + " " + responseresultcm.m26 + " " + responseresultcm.n26 + " " + responseresultcm.o26 + " " + responseresultcm.p26 + " " + responseresultcm.q26 + " " + responseresultcm.r26 + " " + responseresultcm.s26 + " " + responseresultcm.t26 +
      "\n" + responseresultcm.h27 + " " + responseresultcm.i27 + " " + responseresultcm.j27 + " " + responseresultcm.k27 + " " + responseresultcm.l27 + " " + responseresultcm.m27 + " " + responseresultcm.n27 + " " + responseresultcm.o27 + " " + responseresultcm.p27 + " " + responseresultcm.q27 + " " + responseresultcm.r27 + " " + responseresultcm.s27 + " " + responseresultcm.t27 +
      "\n" + responseresultcm.h28 + " " + responseresultcm.i28 + " " + responseresultcm.j28 + " " + responseresultcm.k28 + " " + responseresultcm.l28 + " " + responseresultcm.m28 + " " + responseresultcm.n28 + " " + responseresultcm.o28 + " " + responseresultcm.p28 + " " + responseresultcm.q28 + " " + responseresultcm.r28 + " " + responseresultcm.s28 + " " + responseresultcm.t28 +
      "\n" + responseresultcm.h29 + " " + responseresultcm.i29 + " " + responseresultcm.j29 + " " + responseresultcm.k29 + " " + responseresultcm.l29 + " " + responseresultcm.m29 + " " + responseresultcm.n29 + " " + responseresultcm.o29 + " " + responseresultcm.p29 + " " + responseresultcm.q29 + " " + responseresultcm.r29 + " " + responseresultcm.s29 + " " + responseresultcm.t29 +
      "\n" + responseresultcm.h30 + " " + responseresultcm.i30 + " " + responseresultcm.j30 + " " + responseresultcm.k30 + " " + responseresultcm.l30 + " " + responseresultcm.m30 + " " + responseresultcm.n30 + " " + responseresultcm.o30 + " " + responseresultcm.p30 + " " + responseresultcm.q30 + " " + responseresultcm.r30 + " " + responseresultcm.s30 + " " + responseresultcm.t30 +
      "\n" + responseresultcm.h31 + " " + responseresultcm.i31 + " " + responseresultcm.j31 + " " + responseresultcm.k31 + " " + responseresultcm.l31 + " " + responseresultcm.m31 + " " + responseresultcm.n31 + " " + responseresultcm.o31 + " " + responseresultcm.p31 + " " + responseresultcm.q31 + " " + responseresultcm.r31 + " " + responseresultcm.s31 + " " + responseresultcm.t31 +
      "\n\nCommunication" +
      "\n\n" + responseresultcm.v6 + " " + responseresultcm.w6 + " " + responseresultcm.x6 + " " + responseresultcm.y6 +
      "\n" + responseresultcm.v7 + " " + responseresultcm.w7 + " " + responseresultcm.x7 + " " + responseresultcm.y7 +
      "\n" + responseresultcm.v8 + " " + responseresultcm.w8 + " " + responseresultcm.x8 + " " + responseresultcm.y8 +
      "\n" + responseresultcm.v9 + " " + responseresultcm.w9 + " " + responseresultcm.x9 + " " + responseresultcm.y9 +
      "\n" + responseresultcm.v10 + " " + responseresultcm.w10 + " " + responseresultcm.x10 + " " + responseresultcm.y10 +
      "\n" + responseresultcm.v11 + " " + responseresultcm.w11 + " " + responseresultcm.x11 + " " + responseresultcm.y11 +
      "\n" + responseresultcm.v12 + " " + responseresultcm.w12 + " " + responseresultcm.x12 + " " + responseresultcm.y12 +
      "\n" + responseresultcm.v13 + " " + responseresultcm.w13 + " " + responseresultcm.x13 + " " + responseresultcm.y13 +
      "\n" + responseresultcm.v14 + " " + responseresultcm.w14 + " " + responseresultcm.x14 + " " + responseresultcm.y14 +
      "\n" + responseresultcm.v15 + " " + responseresultcm.w15 + " " + responseresultcm.x15 + " " + responseresultcm.y15 +
      "\n\n" + responseresultcm.v17 + " " + responseresultcm.w17 + " " + responseresultcm.x17 + " " + responseresultcm.y17 +
      "\n" + responseresultcm.v18 + " " + responseresultcm.w18 + " " + responseresultcm.x18 + " " + responseresultcm.y18 +
      "\n" + responseresultcm.v19 + " " + responseresultcm.w19 + " " + responseresultcm.x19 + " " + responseresultcm.y19 +
      "\n" + responseresultcm.v20 + " " + responseresultcm.w20 + " " + responseresultcm.x20 + " " + responseresultcm.y20 +
      "\n" + responseresultcm.v21 + " " + responseresultcm.w21 + " " + responseresultcm.x21 + " " + responseresultcm.y21 +
      "\n" + responseresultcm.v22 + " " + responseresultcm.w22 + " " + responseresultcm.x22 + " " + responseresultcm.y22 +
      "\n" + responseresultcm.v23 + " " + responseresultcm.w23 + " " + responseresultcm.x23 + " " + responseresultcm.y23 +
      "\n" + responseresultcm.v24 + " " + responseresultcm.w24 + " " + responseresultcm.x24 + " " + responseresultcm.y24 +
      "\n" + responseresultcm.v25 + " " + responseresultcm.w25 + " " + responseresultcm.x25 + " " + responseresultcm.y25 +
      "\n" + responseresultcm.v26 + " " + responseresultcm.w26 + " " + responseresultcm.x26 + " " + responseresultcm.y26 +
      "\n" + responseresultcm.v27 + " " + responseresultcm.w27 + " " + responseresultcm.x27 + " " + responseresultcm.y27 +
      "\n\n" + responseresultcm.v29 + " " + responseresultcm.w29 + " " + responseresultcm.x29 + " " + responseresultcm.y29 +
      "\n" + responseresultcm.v30 + " " + responseresultcm.w30 + " " + responseresultcm.x30 + " " + responseresultcm.y30 +
      "\n" + responseresultcm.v31 + " " + responseresultcm.w31 + " " + responseresultcm.x31 + " " + responseresultcm.y31 +
      "\n" + responseresultcm.v32 + " " + responseresultcm.w32 + " " + responseresultcm.x32 + " " + responseresultcm.y32 +
      "\n" + responseresultcm.v33 + " " + responseresultcm.w33 + " " + responseresultcm.x33 + " " + responseresultcm.y33 +
      "\n" + responseresultcm.v34 + " " + responseresultcm.w34 + " " + responseresultcm.x34 + " " + responseresultcm.y34 +
      "\n" + responseresultcm.v35 + " " + responseresultcm.w35 + " " + responseresultcm.x35 + " " + responseresultcm.y35 +
      "\n" + responseresultcm.v36 + " " + responseresultcm.w36 + " " + responseresultcm.x36 + " " + responseresultcm.y36 +
      "\n" + responseresultcm.v37 + " " + responseresultcm.w37 + " " + responseresultcm.x37 + " " + responseresultcm.y37 +
      "\n\n" + responseresultcm.v39 + " " + responseresultcm.w39 +
      "\n" + responseresultcm.v40 + " " + responseresultcm.w40 +
      "\n" + responseresultcm.v41 + " " + responseresultcm.w41 +
      "\n" + responseresultcm.v42 + " " + responseresultcm.w42 +
      "\n" + responseresultcm.v43 + " " + responseresultcm.w43 +
      "\n" + responseresultcm.v44 + " " + responseresultcm.w44 +
      "\n\n" + responseresultcm.v46 + " " + responseresultcm.w46 + " " + responseresultcm.x46 + " " + responseresultcm.y46 + " " + responseresultcm.z46 + " " + responseresultcm.aa46 + " " + responseresultcm.ab46 + " " + responseresultcm.ac46 + " " + responseresultcm.ad46 + " " + responseresultcm.ae46 +
      "\n" + responseresultcm.v47 + " " + "Leads with active social media presence or engagement history " + " " +
      "Encourage leads to interact with the brand and share their experiences on social media " + " " +
      "Launch a social media challenge or contest encouraging leads to share their experiences, testimonials, " +
      "or user-generated content related to the brand or products" + " " + "Social media platforms " + " " +
      responseresultcm.aa47 + " " + "200 contest entries, 300 new followers " + " " +
      responseresultcm.ac47 + " " + responseresultcm.ad47 + " " + responseresultcm.ae47 +
      "\n" + responseresultcm.v48 + " " + "Leads who have shown interest in specific products or services " + " " +
      "Nurture leads and provide valuable content to maintain engagement " + " " +
      "Tailored content highlighting relevant industry news, product updates, and exclusive offers based " +
      "on lead preferences " + " " + "Email marketing " + " " +
      responseresultcm.aa48 + " " + "20% open rate, 5% conversion rate " + " " +
      responseresultcm.ac48 + " " + responseresultcm.ad48 + " " + responseresultcm.ae48 +
      "\n" + responseresultcm.v49 + " " + "Leads in the consideration stage who may benefit from in-depth educational content " + " " +
      "Educate and engage leads by offering valuable insights and knowledge " + " " +
      "Invite leads to participate in a series of educational webinars covering topics relevant to their interests " +
      "or pain points " + " " + "Email marketing and social media " + " " +
      responseresultcm.aa49 + " " + "300 registrations, 50% attendance rate " + " " +
      responseresultcm.ac49 + " " + responseresultcm.ad49 + " " + responseresultcm.ae49 +
      "\n" + responseresultcm.v50 + " " + "Leads who have shown interest in specific products but have not yet made a purchase decision " + " " +
      "Provide personalized product demonstrations to address lead-specific needs and objections " + " " +
      "Offer an exclusive opportunity for leads to schedule a personalized product demo tailored to their requirements " + " " +
      "Direct outreach via phone calls or personalized emails " + " " + responseresultcm.aa50 + " " + "10% response rate, 2% conversion rate " + " " +
      responseresultcm.ac50 + " " + responseresultcm.ad50 + " " + responseresultcm.ae50 +
      "\n\n" + responseresultcm.v52 + " " + responseresultcm.w52 +
      "\n" + responseresultcm.v53 + " " + responseresultcm.w53 +
      "\n" + responseresultcm.v54 + " " + responseresultcm.w54 +
      "\n" + responseresultcm.v55 + " " + responseresultcm.w55 +
      "\n" + responseresultcm.v56 + " " + responseresultcm.w56 +
      "\n" + responseresultcm.v57 + " " + responseresultcm.w57 +
      "\n\n" + "  " + responseresultcm.w59 + " " + responseresultcm.x59 +
      "\n" + responseresultcm.v60 + " " + responseresultcm.w60 + " " + responseresultcm.x60 +
      "\n\nResource" +
      "\n\n" + responseresultcm.ag6 + " " + responseresultcm.ah6 +
      "\n" + responseresultcm.ag7 + " " + responseresultcm.ah7 +
      "\n" + responseresultcm.ag8 + " " + responseresultcm.ah8 +
      "\n\n" + responseresultcm.ag10 + " " + responseresultcm.ah10 + " " + responseresultcm.ai10 + " " + responseresultcm.aj10 +
      "\n" + responseresultcm.ag11 + " " + "By offering extended onboarding sessions and personalized implementation " +
      "assistance, customer satisfaction can increase by up to 5%, leading to improved understanding and utilization of the " +
      "product." + " " + responseresultcm.ai11 + " " + responseresultcm.aj11 +
      "\n" + responseresultcm.ag12 + " " + "Strengthening technical support with faster response times and deeper " +
      "troubleshooting capabilities can boost customer satisfaction by 3%, fostering trust and confidence in the " +
      "company's products." + " " + responseresultcm.ai12 + " " + responseresultcm.aj12 +
      "\n" + responseresultcm.ag13 + " " + "Enhancing CRM efforts with more frequent check-ins, tailored " +
      "communication, and proactive problem-solving can elevate customer satisfaction by 4%, fostering loyalty and " +
      "increasing the likelihood of repeat purchases." + " " + responseresultcm.ai13 + " " +
      responseresultcm.aj13 +
      "\n" + responseresultcm.ag14 + " " + "Improving feedback collection processes and prioritizing product " +
      "improvements based on customer input can boost satisfaction by 2%, demonstrating responsiveness to customer " +
      "needs." + " " + responseresultcm.ai14 + " " + responseresultcm.aj14 +
      "\n" + responseresultcm.ag15 + " " + "Strengthening issue resolution capabilities with faster response times " +
      "and proactive communication can elevate satisfaction by 3%, instilling confidence in the company's support " +
      "infrastructure." + " " + responseresultcm.ai15 + " " + responseresultcm.aj15 +
      "\n\n" + responseresultcm.ag17 + " " + responseresultcm.ah17 + " " + responseresultcm.ai17 + " " + responseresultcm.aj17 +
      "\n" + responseresultcm.ag18 + " " + "By automating data entry and integrating CRM with other systems like " +
      "accounting or project management, the company can streamline workflows, improve data accuracy, and reduce " +
      "operational costs associated with manual data entry and reconciliation." + " " + responseresultcm.ai18 + " " +
      responseresultcm.aj18 +
      "\n" + responseresultcm.ag19 + " " + "Moving CRM to the cloud reduces upfront investment in hardware and " +
      "software, lowers maintenance costs, and enables the company  to adapt quickly to changing business needs without " +
      "incurring additional infrastructure expenses." + " " + responseresultcm.ai19 + " " +
      responseresultcm.aj19 +
      "\n" + responseresultcm.ag20 + " " + "By empowering customers to find answers to common queries, update their " +
      "information, or troubleshoot issues through a self-service portal, the company can decrease the volume of support " +
      "tickets and associated costs, while improving overall customer experience." + " " + responseresultcm.ai20 + " " +
      responseresultcm.aj20 +
      "\n" + responseresultcm.ag21 + " " + "By leveraging AI chatbots to handle routine customer queries 24/7, the " +
      "company can improve responsiveness, lower staffing costs, and enhance operational efficiency, while ensuring " +
      "consistent and timely support for customers." + " " + responseresultcm.ai21 + " " +
      responseresultcm.aj21 +
      "\n" + responseresultcm.ag22 + " " + "By documenting standardized CRM processes, the company can minimize " +
      "errors, increase productivity, and reduce training time for new employees, resulting in significant cost savings " +
      "and improved overall performance." + " " + responseresultcm.ai22 + " " +
      responseresultcm.aj22 +
      "\n\n" + responseresultcm.ag24 + " " + responseresultcm.ah24 +
      "\n" + responseresultcm.ag25 + " " + responseresultcm.ah25 +


      "\n\nPlayers Input" +
      "\n" + " " + "Input" +
      "\n" + "Lead Management " +
      "\n" + "Lead 1 " + " " + result[0] +
      "\n" + "Lead 2 " + " " + result[1] +
      "\n" + "Lead 3 " + " " + result[2] +
      "\n" + "Lead 4 " + " " + result[3] +
      "\n" + "Lead 5 " + " " + result[4] +
      "\n" + "Lead 6 " + " " + result[5] +
      "\n" + "Lead 7 " + " " + result[6] +
      "\n" + "Lead 8 " + " " + result[7] +
      "\n" + "Lead 9 " + " " + result[8] +
      "\n" + "Lead 10 " + " " + result[9] +
      "\n" + "Lead 11 " + " " + result[10] +
      "\n" + "Lead 12 " + " " + result[11] +
      "\n" + "Lead 13 " + " " + result[12] +
      "\n" + "Lead 14 " + " " + result[13] +
      "\n" + "Lead 15 " + " " + result[14] +
      "\n" + "Lead 16 " + " " + result[15] +
      "\n" + "Lead 17 " + " " + result[16] +
      "\n" + "Lead 18 " + " " + result[17] +
      "\n" + "Lead 19 " + " " + result[18] +
      "\n" + "Lead 20 " + " " + result[19] +
      "\n" + "Lead 21 " + " " + result[20] +
      "\n" + "Lead 22 " + " " + result[21] +
      "\n" + "Lead 23 " + " " + result[22] +
      "\n" + "Lead 24 " + " " + result[23] +
      "\n" + "Lead 25 " + " " + result[24] +
      "\n" + "Communication " +
      "\n" + "Phone Calls " + " " + result[25] +
      "\n" + "Personalized Email " + " " + result[26] +
      "\n" + "Targeted Content  " + " " + result[27] +
      "\n" + "Informative Content " + " " + result[28] +
      "\n" + "Case Studies " + " " + result[29] +
      "\n" + "Success Stories " + " " + result[30] +
      "\n" + "Educational Content " + " " + result[31] +
      "\n" + "Newsletter " + " " + result[32] +
      "\n" + "Occasional Check-ins " + " " + result[33] +
      "\n" + "High Priority, Follow-up Frequency, day " + " " + result[34] +
      "\n" + "High Priority, Follow-up Timeline, week " + " " + result[35] +
      "\n" + "Medium Priority, Follow-up Frequency, day " + " " + result[36] +
      "\n" + "Medium Priority, Follow-up Timeline, week " + " " + result[37] +
      "\n" + "Low Priority, Follow-up Frequency, day " + " " + result[38] +
      "\n" + "Low Priority, Follow-up Timeline, week " + " " + result[39] +
      "\n" + "Cross Selling & Upselling stage " + " " + result[40] +
      "\n" + "Social Media Engagement Challenge " + " " + result[41] +
      "\n" + "Personalized Email Newsletter " + " " + result[42] +
      "\n" + "Webinar Series Invitation " + " " + result[43] +
      "\n" + "Exclusive Product Demo " + " " + result[44] +
      "\n" + "Onboarding and Implementation Support " + " " + result[45] +
      "\n" + "Ongoing Technical Support " + " " + result[46] +
      "\n" + "Customer Relationship Management " + " " + result[47] +
      "\n" + "Feedback Collection and Product Improvement " + " " + result[48] +
      "\n" + "Issue Resolution and Escalation " + " " + result[49] +
      "\n" + "Allocated hours, Customer enhancement " + " " + result[50] +
      "\n" + "Allocated hours, Lead management " + " " + result[51] +
      "\n" + "Automated Data Entry and Integration " + " " + result[52] +
      "\n" + "Cloud-Based CRM Solution " + " " + result[53] +
      "\n" + "Self-Service Customer Portal " + " " + result[54] +
      "\n" + "AI-Powered Chatbots for Customer Support " + " " + result[55] +
      "\n" + "Process Standardization and Documentation " + " " + result[56] +


      "\n\nSystem Generated Output based on Input " +
      "\n\nLead Pipeline Count " +
      "\nParameter" + " " + "Output" +
      "\n" + "High Priority " + " " + responseresultdatabase.c8 +
      "\n" + "Medium Priority " + " " + responseresultdatabase.c9 +
      "\n" + "Low Priority " + " " + responseresultdatabase.c10 +
      "\n\nSales Conversion Chances " +
      "\nParameter" + " " + "Output" +
      "\n" + "High Priority " + " " + (Number(responseresultdatabase.n24) * 100).toFixed(0) + "%" +
      "\n" + "Medium Priority " + " " + (Number(responseresultdatabase.o24) * 100).toFixed(0) + "%" +
      "\n" + "Low Priority " + " " + (Number(responseresultdatabase.p24) * 100).toFixed(0) + "%" + 
      "\n\nResource Allocation, hours " +
      "\nParameter" + " " + "Sales" + " " + "Service" +
      "\n" + "Allocated " + " " + responseresultdatabase.s14 + " "  + responseresultdatabase.t14 +
      "\n" + "Required " + " " + responseresultdatabase.s22 + " "  + responseresultdatabase.t22 +
      "\n" + "Surplus (+)/Deficit (-) " + " " + responseresultdatabase.s24 + " "  + responseresultdatabase.t24 +
      "\n\nKPI Variation " +
      "\nIncreament (+)/Reduction (-) compared to last period P3" +
      "\n" + "Cross selling & upselling opportunities " + " " + (Number(responseresultdatabase.n32)* 100).toFixed(0) + "%"  +
      "\n" + "Customer service response rate " + " " + (Number(responseresultdatabase.n40)* 100).toFixed(0) + "%" +
      "\n" + "Average resolution time " + " " + (Number(responseresultdatabase.n43)* 100).toFixed(0) + "%" +
      "\n" + "Pipeline Velocity, days  " + " " + responseresultdatabase.n33  +
      "\n\nValue Creation, INR " +
      "\nParameter" + " " + "Output" +
      "\n" + "Previous Period CLV " + " " + responseresultdatabase.s33 +
      "\n" + "Expected New CLV " + " " + responseresultdatabase.s34 +
      "\n" + "Increment (+)/Reduction (-) CLV " + " " + responseresultdatabase.s35 + 
      "\n" + "Chances of achieving Increment (+)/Reduction (-) " + " " + responseresultdatabase.n27 +
      "\n" + "Expected New Value " + " " + responseresultdatabase.s36 +
      "\n" + "Resource Cost " + " " + responseresultdatabase.s27 +
      "\n" + "Streamlining Cost " + " " + responseresultdatabase.s28 +
      "\n" + "Total Cost " + " " + responseresultdatabase.s29 +
      "\n" + "Value Creation " + " " + responseresultdatabase.s31 ;
return assesment;
     
  }
}
