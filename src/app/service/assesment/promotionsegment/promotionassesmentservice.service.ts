import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionsassesmentserviceService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\n" +
      "Market Research" +
      "\n\nC1 to C8 represents competitor historical data and U presents player company historical data" +
      "\n\nGoogle Ad Spend " +
      "\n" + " " + " " + "Google Ad Spend " +
      "\n" + responseresultcm.d14 + " " + responseresultcm.e14 +
      "\n" + responseresultcm.d15 + " " + responseresultcm.e15 +
      "\n" + responseresultcm.d16 + " " + responseresultcm.e16 +
      "\n" + responseresultcm.d17 + " " + responseresultcm.e17 +
      "\n" + responseresultcm.d18 + " " + responseresultcm.e18 +
      "\n" + responseresultcm.d19 + " " + responseresultcm.e19 +
      "\n" + responseresultcm.d20 + " " + responseresultcm.e20 +
      "\n" + responseresultcm.d21 + " " + responseresultcm.e21 +
      "\n" + responseresultcm.d22 + " " + responseresultcm.e22 +
      "\n\n" + responseresultcm.d24 +
      "\n" + " " + responseresultcm.e25 + " " + responseresultcm.f25 + " " + responseresultcm.g25 + " " + responseresultcm.h25 +
      "\n" + responseresultcm.d26 + " " + responseresultcm.e26 + " " + responseresultcm.f26 + " " + responseresultcm.g26 + " " + responseresultcm.h26 +
      "\n" + responseresultcm.d27 + " " + responseresultcm.e27 + " " + responseresultcm.f27 + " " + responseresultcm.g27 + " " + responseresultcm.h27 +
      "\n" + responseresultcm.d28 + " " + responseresultcm.e28 + " " + responseresultcm.f28 + " " + responseresultcm.g28 + " " + responseresultcm.h28 +
      "\n" + responseresultcm.d29 + " " + responseresultcm.e29 + " " + responseresultcm.f29 + " " + responseresultcm.g29 + " " + responseresultcm.h29 +
      "\n" + responseresultcm.d30 + " " + responseresultcm.e30 + " " + responseresultcm.f30 + " " + responseresultcm.g30 + " " + responseresultcm.h30 +
      "\n" + responseresultcm.d31 + " " + responseresultcm.e31 + " " + responseresultcm.f31 + " " + responseresultcm.g31 + " " + responseresultcm.h31 +
      "\n" + responseresultcm.d32 + " " + responseresultcm.e32 + " " + responseresultcm.f32 + " " + responseresultcm.g32 + " " + responseresultcm.h32 +
      "\n" + responseresultcm.d33 + " " + responseresultcm.e33 + " " + responseresultcm.f33 + " " + responseresultcm.g33 + " " + responseresultcm.h33 +
      "\n" + responseresultcm.d34 + " " + responseresultcm.e34 + " " + responseresultcm.f34 + " " + responseresultcm.g34 + " " + responseresultcm.h34 +
      "\n\n" + responseresultcm.d36 +
      "\n" + " " + responseresultcm.e37 + " " + responseresultcm.f37 + " " + responseresultcm.g37 + " " + responseresultcm.h37 +
      "\n" + responseresultcm.d38 + " " + responseresultcm.e38 + " " + responseresultcm.f38 + " " + responseresultcm.g38 + " " + responseresultcm.h38 +
      "\n" + responseresultcm.d39 + " " + responseresultcm.e39 + " " + responseresultcm.f39 + " " + responseresultcm.g39 + " " + responseresultcm.h39 +
      "\n" + responseresultcm.d40 + " " + responseresultcm.e40 + " " + responseresultcm.f40 + " " + responseresultcm.g40 + " " + responseresultcm.h40 +
      "\n" + responseresultcm.d41 + " " + responseresultcm.e41 + " " + responseresultcm.f41 + " " + responseresultcm.g41 + " " + responseresultcm.h41 +
      "\n" + responseresultcm.d42 + " " + responseresultcm.e42 + " " + responseresultcm.f42 + " " + responseresultcm.g42 + " " + responseresultcm.h42 +
      "\n" + responseresultcm.d43 + " " + responseresultcm.e43 + " " + responseresultcm.f43 + " " + responseresultcm.g43 + " " + responseresultcm.h43 +
      "\n" + responseresultcm.d44 + " " + responseresultcm.e44 + " " + responseresultcm.f44 + " " + responseresultcm.g44 + " " + responseresultcm.h44 +
      "\n" + responseresultcm.d45 + " " + responseresultcm.e45 + " " + responseresultcm.f45 + " " + responseresultcm.g45 + " " + responseresultcm.h45 +
      "\n" + responseresultcm.d46 + " " + responseresultcm.e46 + " " + responseresultcm.f46 + " " + responseresultcm.g46 + " " + responseresultcm.h46 +
      "\n\n" + responseresultcm.d48 +
      "\n" + " " + responseresultcm.e49 + " " + responseresultcm.f49 +
      "\n" + responseresultcm.d50 + " " + responseresultcm.e50 + " " + responseresultcm.f50 +
      "\n" + responseresultcm.d51 + " " + responseresultcm.e51 + " " + responseresultcm.f51 +
      "\n" + responseresultcm.d52 + " " + responseresultcm.e52 + " " + responseresultcm.f52 +
      "\n" + responseresultcm.d53 + " " + responseresultcm.e53 + " " + responseresultcm.f53 +
      "\n\n" + responseresultcm.d55 +
      "\n" + " " + responseresultcm.e56 + " " + responseresultcm.f56 +
      "\n" + responseresultcm.d57 + " " + responseresultcm.e57 + " " + responseresultcm.f57 +
      "\n" + responseresultcm.d58 + " " + responseresultcm.e58 + " " + responseresultcm.f58 +
      "\n" + responseresultcm.d59 + " " + responseresultcm.e59 + " " + responseresultcm.f59 +
      "\n" + responseresultcm.d60 + " " + responseresultcm.e60 + " " + responseresultcm.f60 +
      "\n\n" + responseresultcm.d62 +
      "\n" + " " + " " + responseresultcm.e63 + " " + responseresultcm.f63 + " " + responseresultcm.g63 + " " + responseresultcm.h63 +
      "\n" + responseresultcm.d64 + " " + responseresultcm.e64 + " " + responseresultcm.f64 + " " + responseresultcm.g64 + " " + responseresultcm.h64 +
      "\n" + responseresultcm.d65 + " " + responseresultcm.e65 + " " + responseresultcm.f65 + " " + responseresultcm.g65 + " " + responseresultcm.h65 +
      "\n" + responseresultcm.d66 + " " + responseresultcm.e66 + " " + responseresultcm.f66 + " " + responseresultcm.g66 + " " + responseresultcm.h66 +
      "\n" + responseresultcm.d67 + " " + responseresultcm.e67 + " " + responseresultcm.f67 + " " + responseresultcm.g67 + " " + responseresultcm.h67 +
      "\n" + responseresultcm.d68 + " " + responseresultcm.e68 + " " + responseresultcm.f68 + " " + responseresultcm.g68 + " " + responseresultcm.h68 +
      "\n" + responseresultcm.d69 + " " + responseresultcm.e69 + " " + responseresultcm.f69 + " " + responseresultcm.g69 + " " + responseresultcm.h69 +
      "\n" + responseresultcm.d70 + " " + responseresultcm.e70 + " " + responseresultcm.f70 + " " + responseresultcm.g70 + " " + responseresultcm.h70 +
      "\n" + responseresultcm.d71 + " " + responseresultcm.e71 + " " + responseresultcm.f71 + " " + responseresultcm.g71 + " " + responseresultcm.h71 +
      "\n\n" + responseresultcm.d73 +
      "\n" + responseresultcm.d74 + " " + responseresultcm.e74 +
      "\n" + responseresultcm.d75 + " " + responseresultcm.e75 +
      "\n" + responseresultcm.d76 + " " + responseresultcm.e76 +
      "\n" + responseresultcm.d77 + " " + responseresultcm.e77 +
      "\n" + responseresultcm.d78 + " " + responseresultcm.e78 +
      "\n" + responseresultcm.d79 + " " + responseresultcm.e79 +
      "\n" + responseresultcm.d80 + " " + responseresultcm.e80 +
      "\n" + responseresultcm.d81 + " " + responseresultcm.e81 +
      "\n" + responseresultcm.d82 + " " + responseresultcm.e82 +
      "\n\n" + responseresultcm.d84 +
      "\n" + " " + " " + responseresultcm.e85 + " " + responseresultcm.f85 +
      "\n" + responseresultcm.d86 + " " + responseresultcm.e86 + " " + responseresultcm.f86 +
      "\n" + responseresultcm.d87 + " " + responseresultcm.e87 + " " + responseresultcm.f87 +
      "\n" + responseresultcm.d88 + " " + responseresultcm.e88 + " " + responseresultcm.f88 +
      "\n" + responseresultcm.d89 + " " + responseresultcm.e89 + " " + responseresultcm.f89 +

      "\n\n" + responseresultcm.j4 + "\n" +
      "\n" + responseresultcm.j6 + " " + responseresultcm.k6 + "\n" +
      "\n" + responseresultcm.j21 +
      "\n" + responseresultcm.j22 + " " + responseresultcm.k22 + " " + responseresultcm.l22 + " " + responseresultcm.m22 +
      "\n" + responseresultcm.j23 + " " + responseresultcm.k23 + " " + responseresultcm.l23 + " " + responseresultcm.m23 +
      "\n" + responseresultcm.j24 + " " + responseresultcm.k24 + " " + responseresultcm.l24 + " " + responseresultcm.m24 +
      "\n" + responseresultcm.j25 + " " + responseresultcm.k25 + " " + responseresultcm.l25 + " " + responseresultcm.m25 +
      "\n\n" + responseresultcm.j27 + "\n" +
      "\n" + responseresultcm.j28 + " " + responseresultcm.k28 + " " + responseresultcm.l28 + " " + responseresultcm.m28 +
      "\n" + responseresultcm.j29 + " " + responseresultcm.k29 + " " + responseresultcm.l29 + " " + responseresultcm.m29 +
      "\n" + responseresultcm.j30 + " " + responseresultcm.k30 + " " + responseresultcm.l30 + " " + responseresultcm.m30 +
      "\n" + responseresultcm.j31 + " " + responseresultcm.k31 + " " + responseresultcm.l31 + " " + responseresultcm.m31 +
      "\n\n" + responseresultcm.j33 +
      "\n" + responseresultcm.j34 + " " + responseresultcm.k34 + " " + responseresultcm.l34 + " " + responseresultcm.m34 +
      "\n" + responseresultcm.j35 + " " + responseresultcm.k35 + " " + responseresultcm.l35 + " " + responseresultcm.m35 +
      "\n" + responseresultcm.j36 + " " + responseresultcm.k36 + " " + responseresultcm.l36 + " " + responseresultcm.m36 +
      "\n" + responseresultcm.j37 + " " + responseresultcm.k37 + " " + responseresultcm.l37 + " " + responseresultcm.m37 +
      "\n\n" + responseresultcm.j39 +
      "\n" + responseresultcm.j40 + " " + responseresultcm.k40 + " " + responseresultcm.l40 + " " + responseresultcm.m40 +
      "\n" + responseresultcm.j41 + " " + responseresultcm.k41 + " " + responseresultcm.l41 + " " + responseresultcm.m41 +
      "\n" + responseresultcm.j42 + " " + responseresultcm.k42 + " " + responseresultcm.l42 + " " + responseresultcm.m42 +
      "\n" + responseresultcm.j43 + " " + responseresultcm.k43 + " " + responseresultcm.l43 + " " + responseresultcm.m43 +
      "\n\n" + responseresultcm.j45 +
      "\n" + responseresultcm.j46 + " " + responseresultcm.k46 + " " + responseresultcm.l46 + " " + responseresultcm.m46 +
      "\n" + responseresultcm.j47 + " " + responseresultcm.k47 + " " + responseresultcm.l47 + " " + responseresultcm.m47 +
      "\n" + responseresultcm.j48 + " " + responseresultcm.k48 + " " + responseresultcm.l48 + " " + responseresultcm.m48 +
      "\n" + responseresultcm.j49 + " " + responseresultcm.k49 + " " + responseresultcm.l49 + " " + responseresultcm.m49 +
      "\n\n" + responseresultcm.j51 +
      "\n" + responseresultcm.j52 + " " + responseresultcm.k52 + " " + responseresultcm.l52 + " " + responseresultcm.m52 +
      "\n" + responseresultcm.j53 + " " + responseresultcm.k53 + " " + responseresultcm.l53 + " " + responseresultcm.m53 +
      "\n" + responseresultcm.j54 + " " + responseresultcm.k54 + " " + responseresultcm.l54 + " " + responseresultcm.m54 +
      "\n" + responseresultcm.j55 + " " + responseresultcm.k55 + " " + responseresultcm.l55 + " " + responseresultcm.m55 +
      "\n\n" + responseresultcm.j57 +
      "\n" + responseresultcm.j58 + " " + responseresultcm.k58 + " " + responseresultcm.l58 + " " + responseresultcm.m58 +
      "\n" + responseresultcm.j59 + " " + responseresultcm.k59 + " " + responseresultcm.l59 + " " + responseresultcm.m59 +
      "\n" + responseresultcm.j60 + " " + responseresultcm.k60 + " " + responseresultcm.l60 + " " + responseresultcm.m60 +
      "\n" + responseresultcm.j61 + " " + responseresultcm.k61 + " " + responseresultcm.l61 + " " + responseresultcm.m61 +
      "\n\n" + responseresultcm.j57 +
      "\n" + responseresultcm.j58 + " " + responseresultcm.k58 + " " + responseresultcm.l58 + " " + responseresultcm.m58 +
      "\n" + responseresultcm.j59 + " " + responseresultcm.k59 + " " + responseresultcm.l59 + " " + responseresultcm.m59 +
      "\n" + responseresultcm.j60 + " " + responseresultcm.k60 + " " + responseresultcm.l60 + " " + responseresultcm.m60 +
      "\n" + responseresultcm.j61 + " " + responseresultcm.k61 + " " + responseresultcm.l61 + " " + responseresultcm.m61 +
      "\n\n" + responseresultcm.j63 +
      "\n" + responseresultcm.j64 + " " + responseresultcm.k64 + " " + responseresultcm.l64 + " " + responseresultcm.m64 +
      "\n" + responseresultcm.j65 + " " + responseresultcm.k65 + " " + responseresultcm.l65 + " " + responseresultcm.m65 +
      "\n" + responseresultcm.j66 + " " + responseresultcm.k66 + " " + responseresultcm.l66 + " " + responseresultcm.m66 +
      "\n" + responseresultcm.j67 + " " + responseresultcm.k67 + " " + responseresultcm.l67 + " " + responseresultcm.m67 +
      "\n\n" + responseresultcm.o4 + "\n" +
      "\n" + responseresultcm.o7 + " " + responseresultcm.q7 + " " + responseresultcm.r7 + " " + responseresultcm.s7 + " " + responseresultcm.t7 +
      "\n" + responseresultcm.o8 + " " + responseresultcm.q8 + " " + responseresultcm.r8 + " " + responseresultcm.s8 + " " + responseresultcm.t8 +
      "\n" + responseresultcm.o9 + " " + responseresultcm.q9 + " " + responseresultcm.r9 + " " + responseresultcm.s9 + " " + responseresultcm.t9 +
      "\n" + responseresultcm.o10 + " " + responseresultcm.q10 + " " + responseresultcm.r10 + " " + responseresultcm.s10 + " " + responseresultcm.t10 +
      "\n\n" + responseresultcm.o12 +
      "\n" + responseresultcm.o13 + " " + responseresultcm.q13 + " " + responseresultcm.r13 + " " + responseresultcm.s13 + " " + responseresultcm.t13 +
      "\n" + responseresultcm.o14 + " " + responseresultcm.q14 + " " + responseresultcm.r14 + " " + responseresultcm.s14 + " " + responseresultcm.t14 +
      "\n" + responseresultcm.o15 + " " + responseresultcm.q15 + " " + responseresultcm.r15 + " " + responseresultcm.s15 + " " + responseresultcm.t15 +
      "\n" + responseresultcm.o16 + " " + responseresultcm.q16 + " " + responseresultcm.r16 + " " + responseresultcm.s16 + " " + responseresultcm.t16 +
      "\n" + responseresultcm.o17 + " " + responseresultcm.q17 + " " + responseresultcm.r17 + " " + responseresultcm.s17 + " " + responseresultcm.t17 +
      "\n" + responseresultcm.o18 + " " + responseresultcm.q18 + " " + responseresultcm.r18 + " " + responseresultcm.s18 + " " + responseresultcm.t18 +
      "\n\n" + responseresultcm.o20 +
      "\n" + responseresultcm.o21 + " " + responseresultcm.q21 + " " + responseresultcm.r21 + " " + responseresultcm.s21 + " " + responseresultcm.t21 +
      "\n" + responseresultcm.o22 + " " + responseresultcm.q22 + " " + responseresultcm.r22 + " " + responseresultcm.s22 + " " + responseresultcm.t22 +
      "\n" + responseresultcm.o23 + " " + responseresultcm.q23 + " " + responseresultcm.r23 + " " + responseresultcm.s23 + " " + responseresultcm.t23 +
      "\n" + responseresultcm.o24 + " " + responseresultcm.q24 + " " + responseresultcm.r24 + " " + responseresultcm.s24 + " " + responseresultcm.t24 +
      "\n\n" + responseresultcm.o26 +
      "\n" + responseresultcm.o27 + " " + responseresultcm.q27 + " " + responseresultcm.r27 + " " + responseresultcm.s27 + " " + responseresultcm.t27 +
      "\n" + responseresultcm.o28 + " " + responseresultcm.q28 + " " + responseresultcm.r28 + " " + responseresultcm.s28 + " " + responseresultcm.t28 +
      "\n" + responseresultcm.o29 + " " + responseresultcm.q29 + " " + responseresultcm.r29 + " " + responseresultcm.s29 + " " + responseresultcm.t29 +
      "\n" + responseresultcm.o30 + " " + responseresultcm.q30 + " " + responseresultcm.r30 + " " + responseresultcm.s30 + " " + responseresultcm.t30 +
      "\n\n" + responseresultcm.v4 +
      "\n\n" + responseresultcm.v6 +
      "\n" + responseresultcm.v7 + " " + responseresultcm.x7 + " " + responseresultcm.y7 +
      "\n" + responseresultcm.v8 + " " + responseresultcm.x8 + " " + responseresultcm.y8 +
      "\n" + responseresultcm.v9 + " " + responseresultcm.x9 + " " + responseresultcm.y9 +
      "\n" + responseresultcm.v10 + " " + responseresultcm.x10 + " " + responseresultcm.y10 +
      "\n\n" + responseresultcm.v18 +
      "\n" + responseresultcm.v19 + " " + responseresultcm.w19 + " " + responseresultcm.x19 +
      "\n" + responseresultcm.v20 + " " + responseresultcm.w20 + " " + responseresultcm.x20 +
      "\n" + responseresultcm.v21 + " " + responseresultcm.w21 + " " + responseresultcm.x21 +
      "\n" + responseresultcm.v22 + " " + responseresultcm.w22 + " " + responseresultcm.x22 +
      "\n\n" + responseresultcm.v24 +
      "\n" + responseresultcm.v25 + " " + responseresultcm.w25 + " " + responseresultcm.x25 +
      "\n" + responseresultcm.v26 + " " + responseresultcm.w26 + " " + responseresultcm.x26 +
      "\n" + responseresultcm.v27 + " " + responseresultcm.w27 + " " + responseresultcm.x27 +
      "\n" + responseresultcm.v28 + " " + responseresultcm.w28 + " " + responseresultcm.x28 +
      "\n\n" + responseresultcm.v30 +
      "\n" + responseresultcm.v31 + " " + responseresultcm.w31 + " " + responseresultcm.x31 +
      "\n" + responseresultcm.v32 + " " + responseresultcm.w32 + " " + responseresultcm.x32 +
      "\n" + responseresultcm.v33 + " " + responseresultcm.w33 + " " + responseresultcm.x33 +
      "\n" + responseresultcm.v34 + " " + responseresultcm.w34 + " " + responseresultcm.x34 +
      "\n" + responseresultcm.v36 + " " + responseresultcm.w36 + " " + responseresultcm.x36 + " " + responseresultcm.y36 +
      "\n" + responseresultcm.v37 + " " + responseresultcm.w37 + " " + responseresultcm.x37 + " " + responseresultcm.y37 +
      "\n" + responseresultcm.v38 + " " + responseresultcm.w38 + " " + responseresultcm.x38 + " " + responseresultcm.y38 +
      "\n\nPlayer's Input" + "/n" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Website, Budgeting" + " " + result[0] +
      "\n" + "Social Commerce, Budgeting" + " " + result[1] +
      "\n" + "Modern Trade, Budgeting" + " " + result[2] +
      "\n" + "Retailers, Budgeting" + " " + result[3] +
      "\n" + "Facebook, Budgeting" + " " + result[4] +
      "\n" + "Instagram, Budgeting" + " " + result[5] +
      "\n" + "Twitter, Budgeting" + " " + result[6] +
      "\n" + "LinkedIn, Budgeting" + " " + result[7] +
      "\n" + "YouTube, Budgeting" + " " + result[8] +
      "\n" + "Website" + " " + +
      "\n" + "Social Commerce, Community Engagement Series" + " " + result[10] +
      "\n" + "Social Commerce, Flash Sales and Trending Topics" + " " + result[11] +
      "\n" + "Social Commerce, Visual Storytelling and Influencer Collaborations" + " " + result[12] +
      "\n" + "Social Commerce, Expert Insights and Premium Skincare Journey" + " " + result[13] +
      "\n" + "Social Commerce, Tutorial Series and Influencer Reviews" + " " + result[14] +
      "\n" + "Modern Trade" + " " + result[15] +
      "\n" + "Retailers" + " " + result[16] +
      "\n" + "Website, A/B Testing" + " " + result[17] +
      "\n" + "Social Commerce, A/B Testing" + " " + result[18] +
      "\n" + "Modern Trade & Retailers, A/B Testing" + " " + result[19] +
      "\n" + "Online Channel, Margin" + " " + result[20] +
      "\n" + "Modern Trade Channel, Margin" + " " + result[21] +
      "\n" + "Retailers Channel, Margin" + " " + result[22] +
      "\n" + "Product Focus, Acne Face Cream" + " " + result[23] +
      "\n" + "Product Focus, Apple Cider Face Wash" + " " + result[24] +
      "\n\nSystem Generated Output based on player input" + "\n" +
      "\n" + "Product sales input" +
      "\n" + "Parameter" + "Acne Face Cream" + "Apple cider face wash" +
      "\n" + responseresultdatabase.r6 + " " + responseresultdatabase.s6 + " " + responseresultdatabase.t6 +
      "\n" + responseresultdatabase.r7 + " " + responseresultdatabase.s7 + " " + responseresultdatabase.t7 +
      "\n" + responseresultdatabase.r8 + " " + responseresultdatabase.s8 + " " + responseresultdatabase.t8 +
      "\n" + responseresultdatabase.r9 + " " + responseresultdatabase.s9 + " " + responseresultdatabase.t9 +
      "\n" + "Platform sales input" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + responseresultdatabase.r6 + " " + responseresultdatabase.u6 +
      "\n" + responseresultdatabase.r7 + " " + responseresultdatabase.u7 +
      "\n" + responseresultdatabase.r8 + " " + responseresultdatabase.u8 +
      "\n" + responseresultdatabase.r9 + " " + responseresultdatabase.u9 +
      "\n" + "Segment sales input" +
      "\n" + responseresultdatabase.s17 + " " + responseresultdatabase.t17 + " " +
      "\n" + responseresultdatabase.r18 + " " + responseresultdatabase.s18 + " " + responseresultdatabase.t18 +
      "\n" + responseresultdatabase.r19 + " " + responseresultdatabase.s19 + " " + responseresultdatabase.t19 +
      "\n" + responseresultdatabase.r20 + " " + responseresultdatabase.s20 + " " + responseresultdatabase.t20 +
      "\n" + responseresultdatabase.r21 + " " + responseresultdatabase.s21 + " " + responseresultdatabase.t21 +
      "\n" + "Promotion Cost, INR" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Communication Mix Cost" + " " + responseresultdatabase.s27 +
      "\n" + "Campaign Creation Cost" + " " + responseresultdatabase.s28 +
      "\n" + "A/B Testing Cost" + " " + responseresultdatabase.s29 +
      "\n" + "Channel Cost" + " " + responseresultdatabase.s30 +
      "\n" + "Total Cost" + " " + responseresultdatabase.s31 +
      "\n" + "Operating Income, INR" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Revenue" + " " + responseresultdatabase.s24 +
      "\n" + "Variable Cost" + " " + responseresultdatabase.s25 +
      "\n" + "Gross Profit" + " " + responseresultdatabase.s26 +
      "\n" + "Promotion Cost" + " " + responseresultdatabase.s31 +
      "\n" + "Operating Profit/Loss" + " " + responseresultdatabase.s32 +
      "\n" + "KPI" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Operating Margin" + " " + Number(responseresultdatabase.s33) * 100 + "%"
    "\n" + "ROAS" + " " + Number(responseresultdatabase.s38) * 100 + "%"


    return assesment;

  }
}
