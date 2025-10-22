import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesassesmentserviceService {

  constructor() { }

  
  useranalysisSubmit(responseresultcm: any,  result: any ,responseresultdatabase: any  ): string {
    
    let assesment = "\n\nFixed Data" +
      "\nMarket Outlook" +
      "\n" + responseresultcm.b5 +
      "\n\nMarket Size, k INR" +
      "\n" + responseresultcm.d10 + " " + responseresultcm.e10 +
      "\n" + responseresultcm.d11 + " " + responseresultcm.e11 +
      "\n\nMarket Share, %" +
      "\n" + responseresultcm.d14 + " " + responseresultcm.e14 +
      "\n" + responseresultcm.d15 + " " + responseresultcm.e15 +
      "\n\nSegment sales, previous period," +
      "\n" + responseresultcm.d18 + " " + responseresultcm.e18 +
      "\n" + responseresultcm.d19 + " " + responseresultcm.e19 +
      "\n" + responseresultcm.d20 + " " + responseresultcm.e20 +
      "\n" + responseresultcm.d21 + " " + responseresultcm.e21 +
      "\n\nSegment Sales,Estimate limit current period" +
      "\n" + responseresultcm.d24 + " " + responseresultcm.e24 +
      "\n" + responseresultcm.d25 + " " + responseresultcm.e25 +
      "\n" + responseresultcm.d26 + " " + responseresultcm.e26 +
      "\n" + responseresultcm.d27 + " " + responseresultcm.e27 +
      "\n\nProduct" +
      "\n" + "Pablo, Inc. is currently selling four products in the non-carbonated " +
      "segment of the market. The following are the details of the products:" +
      "\n\n" + "Coffino: It’s for individuals looking for a light, coffee-flavoured " +
      "drink that's also diet-friendly. The marketing strategy is to emphasize the combination " +
      "of cocoa, milk, and coffee, highlighting its diet-conscious nature. The company is positioning " +
      "it as a guilt - free coffee indulgence. " +
      "\n\n" + "Nutty: It’s targeted towards consumers looking for health-conscious options who appreciate " +
      "premium products. The marketing strategy is promoting Nutty as a premium, healthy drink with nuts and berries. " +
      "The company usually highlight its nutritional value and the use of high-quality ingredients. " +
      "\n\n" + "Fruitful: It’s for organic and diet-conscious consumers who enjoy pomegranates and berries. " +
      "The marketing team highlights the organic nature of Fruitful and its light, diet-friendly profile. " +
      "It appeals to those seeking a refreshing and healthy beverage option." +
      "\n\n" + "Diblo: It’s targeted towards health enthusiasts and individuals who appreciate herbal drinks. " +
      "Diblo is positioned as a premium, herbal, and healthy drink. It is positioned in the market to highlight " +
      "the use of herbs and their potential health benefits." +
      "\n\nProduct Price Graph, INR" +
      "\n" + responseresultcm.d33 + " " + responseresultcm.e33 +
      "\n" + responseresultcm.d34 + " " + responseresultcm.e34 +
      "\n" + responseresultcm.d35 + " " + responseresultcm.e35 +
      "\n" + responseresultcm.d36 + " " + responseresultcm.e36 +
      "\n\nProduct wise Margins" +
      "\n" + responseresultcm.d39 + " " + responseresultcm.e39 +
      "\n" + responseresultcm.d40 + " " + responseresultcm.e40 +
      "\n" + responseresultcm.d41 + " " + responseresultcm.e41 +
      "\n" + responseresultcm.d42 + " " + responseresultcm.e42 +
      "\n\nProduct Share, Previous Period" +
      "\n" + responseresultcm.d45 + " " + responseresultcm.e45 +
      "\n" + responseresultcm.d46 + " " + responseresultcm.e46 +
      "\n" + responseresultcm.d47 + " " + responseresultcm.e47 +
      "\n" + responseresultcm.d48 + " " + responseresultcm.e48 +
      "\n\nConsumer Preference, scale of 10" +
      "\n" + " " + responseresultcm.e51 + " " + responseresultcm.f51 + " " + responseresultcm.g51 + " " + responseresultcm.h51 +
      "\n" + responseresultcm.d52 + " " + responseresultcm.e52 + " " + responseresultcm.f52 + " " + responseresultcm.g52 + " " + responseresultcm.h52 +
      "\n" + responseresultcm.d53 + " " + responseresultcm.e53 + " " + responseresultcm.f53 + " " + responseresultcm.g53 + " " + responseresultcm.h53 +
      "\n" + responseresultcm.d54 + " " + responseresultcm.e54 + " " + responseresultcm.f54 + " " + responseresultcm.g54 + " " + responseresultcm.h54 +
      "\n" + responseresultcm.d55 + " " + responseresultcm.e55 + " " + responseresultcm.f55 + " " + responseresultcm.g55 + " " + responseresultcm.h55 +
      "\n\nChannel Preference" +
      "\n" + " " + responseresultcm.e58 + " " + responseresultcm.f58 + responseresultcm.g58 +
      "\n" + responseresultcm.d59 + " " + responseresultcm.e59 + " " + responseresultcm.f59 + " " + responseresultcm.g59 +
      "\n" + responseresultcm.d60 + " " + responseresultcm.e60 + " " + responseresultcm.f60 + " " + responseresultcm.g60 +
      "\n" + responseresultcm.d61 + " " + responseresultcm.e61 + " " + responseresultcm.f61 + " " + responseresultcm.g61 +
      "\n" + responseresultcm.d62 + " " + responseresultcm.e62 + " " + responseresultcm.f62 + " " + responseresultcm.g62 +
      "\n\nChannel Distribution, previous year" +
    "\n" + responseresultcm.d65 + " " + responseresultcm.e65 +
      "\n" + responseresultcm.d66 + " " + responseresultcm.e66 +
      "\n" + responseresultcm.d67 + " " + responseresultcm.e67 +
      "\n\nElasticity Curve, Targets" +
      "\n" + responseresultcm.j7 + " " + responseresultcm.k7 +
      "\n" + responseresultcm.j8 + " " + responseresultcm.k8 +
      "\n" + responseresultcm.j9 + " " + responseresultcm.k9 +
      "\n" + responseresultcm.j10 + " " + responseresultcm.k10 +
      "\n\nNo. of Employee,Previous period" +
      "\n" + responseresultcm.j13 + " " + responseresultcm.k13 +
      "\n" + responseresultcm.j14 + " " + responseresultcm.k14 +
      "\n" + responseresultcm.j15 + " " + responseresultcm.k15 +
      "\n\n" + responseresultcm.j17 + " " + responseresultcm.k17 +
      "\n" + responseresultcm.j18 + " " + responseresultcm.k18 +
      "\n\nElasticity Curve, Personnel" +
      "\n" + responseresultcm.j21 + " " + responseresultcm.k21 +
      "\n" + responseresultcm.j22 + " " + responseresultcm.k22 +
      "\n" + responseresultcm.j23 + " " + responseresultcm.k23 +
      "\n" + responseresultcm.j24 + " " + responseresultcm.k24 +
      "\n\nWorkforce Background, previous period" +
      "\n" + " " + responseresultcm.k27 + " " + responseresultcm.l27 +
      "\n" + responseresultcm.j28 + " " + responseresultcm.k28 + " " + responseresultcm.l28 +
      "\n" + responseresultcm.j29 + " " + responseresultcm.k29 + " " + responseresultcm.l29 +
      "\n" + responseresultcm.j30 + " " + responseresultcm.k30 + " " + responseresultcm.l30 +
      "\n\nElasticity Curve, Business Personnel" +
      "\n" + responseresultcm.j33 + " " + responseresultcm.k33 +
      "\n" + responseresultcm.j34 + " " + responseresultcm.k34 +
      "\n" + responseresultcm.j35 + " " + responseresultcm.k35 +
      "\n" + responseresultcm.j36 + " " + responseresultcm.k36 +
      "\n\nElasticity Curve, Non business Personnel" +
      "\n" + responseresultcm.j39 + " " + responseresultcm.k39 +
      "\n" + responseresultcm.j40 + " " + responseresultcm.k40 +
      "\n" + responseresultcm.j41 + " " + responseresultcm.k41 +
      "\n" + responseresultcm.j42 + " " + responseresultcm.k42 +
      "\n\nWages, previous period" +
      "\n" + " " + responseresultcm.k45 + " " + responseresultcm.l45 +
      "\n" + responseresultcm.j46 + " " + responseresultcm.k46 + " " + responseresultcm.l46 +
      "\n" + responseresultcm.j47 + " " + responseresultcm.k47 + " " + responseresultcm.l47 +
      "\n" + responseresultcm.j48 + " " + responseresultcm.k48 + " " + responseresultcm.l48 +
      "\n\nBonus, previous period" +
      "\n" + " " + responseresultcm.k51 + " " + responseresultcm.l51 +
      "\n" + responseresultcm.j52 + " " + responseresultcm.k52 + " " + responseresultcm.l52 +
      "\n\nElasticity Curve, Wages business background" +
      "\n" + responseresultcm.j55 + " " + responseresultcm.k55 +
      "\n" + responseresultcm.j56 + " " + responseresultcm.k56 +
      "\n" + responseresultcm.j57 + " " + responseresultcm.k57 +
      "\n" + responseresultcm.j58 + " " + responseresultcm.k58 +
      "\n\nElasticity Curve, Wages Non business background" +
      "\n" + responseresultcm.j61 + " " + responseresultcm.k61 +
      "\n" + responseresultcm.j62 + " " + responseresultcm.k62 +
      "\n" + responseresultcm.j63 + " " + responseresultcm.k63 +
      "\n" + responseresultcm.j64 + " " + responseresultcm.k64 +
      "\n\nMarket Reference of Wages" +
      "\n" + " " + responseresultcm.k67 + " " + responseresultcm.l67 +
      "\n" + responseresultcm.j68 + " " + responseresultcm.k68 + " " + responseresultcm.l68 +
      "\n" + responseresultcm.j69 + " " + responseresultcm.k69 + " " + responseresultcm.l69 +
      "\n" + responseresultcm.j70 + " " + responseresultcm.k70 + " " + responseresultcm.l70 +
      "\n\n" + responseresultcm.j72 + " " + responseresultcm.k72 +
      "\n\nAttrition Rate, %, Previous Period" +
      "\n" + responseresultcm.j75 + " " + responseresultcm.k75 +
      "\n" + responseresultcm.j76 + " " + responseresultcm.k76 +
      "\n" + responseresultcm.j77 + " " + responseresultcm.k77 +
      "\n" + responseresultcm.j78 + " " + responseresultcm.k78 +
      "\n\n" + responseresultcm.j81 + " " + responseresultcm.k81 +
      "\n\nSales Representative Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n7 + " " + responseresultcm.o7 + " " + responseresultcm.p7 + " " + responseresultcm.q7 + " " + responseresultcm.r7 +
      "\n" + responseresultcm.n8 + " " + responseresultcm.o8 + " " + responseresultcm.p8 + " " + responseresultcm.q8 + " " + responseresultcm.r8 +
      "\n" + responseresultcm.n9 + " " + responseresultcm.o9 + " " + responseresultcm.p9 + " " + responseresultcm.q9 + " " + responseresultcm.r9 +
      "\n" + responseresultcm.n10 + " " + responseresultcm.o10 + " " + responseresultcm.p10 + " " + responseresultcm.q10 + " " + responseresultcm.r10 +
      "\n\nSales Representative Retail, Elasticity Curve" +
      "\n" + responseresultcm.n13 + " " + responseresultcm.o13 + " " + responseresultcm.p13 + " " + responseresultcm.q13 + " " + responseresultcm.r13 +
      "\n" + responseresultcm.n14 + " " + responseresultcm.o14 + " " + responseresultcm.p14 + " " + responseresultcm.q14 + " " + responseresultcm.r14 +
      "\n" + responseresultcm.n15 + " " + responseresultcm.o15 + " " + responseresultcm.p15 + " " + responseresultcm.q15 + " " + responseresultcm.r15 +
      "\n" + responseresultcm.n16 + " " + responseresultcm.o16 + " " + responseresultcm.p16 + " " + responseresultcm.q16 + " " + responseresultcm.r16 +
      "\n\nSales Representative HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n19 + " " + responseresultcm.o19 + " " + responseresultcm.p19 + " " + responseresultcm.q19 + " " + responseresultcm.r19 +
      "\n" + responseresultcm.n20 + " " + responseresultcm.o20 + " " + responseresultcm.p20 + " " + responseresultcm.q20 + " " + responseresultcm.r20 +
      "\n" + responseresultcm.n21 + " " + responseresultcm.o21 + " " + responseresultcm.p21 + " " + responseresultcm.q21 + " " + responseresultcm.r21 +
      "\n" + responseresultcm.n22 + " " + responseresultcm.o22 + " " + responseresultcm.p22 + " " + responseresultcm.q22 + " " + responseresultcm.r22 +
      "\n\nKAM Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n25 + " " + responseresultcm.o25 + " " + responseresultcm.p25 + " " + responseresultcm.q25 + " " + responseresultcm.r25 +
      "\n" + responseresultcm.n26 + " " + responseresultcm.o26 + " " + responseresultcm.p26 + " " + responseresultcm.q26 + " " + responseresultcm.r26 +
      "\n" + responseresultcm.n27 + " " + responseresultcm.o27 + " " + responseresultcm.p27 + " " + responseresultcm.q27 + " " + responseresultcm.r27 +
      "\n" + responseresultcm.n28 + " " + responseresultcm.o28 + " " + responseresultcm.p28 + " " + responseresultcm.q28 + " " + responseresultcm.r28 +
      "\n\nKAM Retail, Elasticity Curve" +
      "\n" + responseresultcm.n31 + " " + responseresultcm.o31 + " " + responseresultcm.p31 + " " + responseresultcm.q31 + " " + responseresultcm.r31 +
      "\n" + responseresultcm.n32 + " " + responseresultcm.o32 + " " + responseresultcm.p32 + " " + responseresultcm.q32 + " " + responseresultcm.r32 +
      "\n" + responseresultcm.n33 + " " + responseresultcm.o33 + " " + responseresultcm.p33 + " " + responseresultcm.q33 + " " + responseresultcm.r33 +
      "\n" + responseresultcm.n34 + " " + responseresultcm.o34 + " " + responseresultcm.p34 + " " + responseresultcm.q34 + " " + responseresultcm.r34 +
      "\n\nKAM HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n37 + " " + responseresultcm.o37 + " " + responseresultcm.p37 + " " + responseresultcm.q37 + " " + responseresultcm.r37 +
      "\n" + responseresultcm.n38 + " " + responseresultcm.o38 + " " + responseresultcm.p38 + " " + responseresultcm.q38 + " " + responseresultcm.r38 +
      "\n" + responseresultcm.n39 + " " + responseresultcm.o39 + " " + responseresultcm.p39 + " " + responseresultcm.q39 + " " + responseresultcm.r39 +
      "\n" + responseresultcm.n40 + " " + responseresultcm.o40 + " " + responseresultcm.p40 + " " + responseresultcm.q40 + " " + responseresultcm.r40 +
      "\n\nTSM Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n43 + " " + responseresultcm.o43 + " " + responseresultcm.p43 + " " + responseresultcm.q43 + " " + responseresultcm.r43 +
      "\n" + responseresultcm.n44 + " " + responseresultcm.o44 + " " + responseresultcm.p44 + " " + responseresultcm.q44 + " " + responseresultcm.r44 +
      "\n" + responseresultcm.n45 + " " + responseresultcm.o45 + " " + responseresultcm.p45 + " " + responseresultcm.q45 + " " + responseresultcm.r45 +
      "\n" + responseresultcm.n46 + " " + responseresultcm.o46 + " " + responseresultcm.p46 + " " + responseresultcm.q46 + " " + responseresultcm.r46 +
      "\n\nTSM Retail, Elasticity Curve" +
      "\n" + responseresultcm.n49 + " " + responseresultcm.o49 + " " + responseresultcm.p49 + " " + responseresultcm.q49 + " " + responseresultcm.r49 +
      "\n" + responseresultcm.n50 + " " + responseresultcm.o50 + " " + responseresultcm.p50 + " " + responseresultcm.q50 + " " + responseresultcm.r50 +
      "\n" + responseresultcm.n51 + " " + responseresultcm.o51 + " " + responseresultcm.p51 + " " + responseresultcm.q51 + " " + responseresultcm.r51 +
      "\n" + responseresultcm.n52 + " " + responseresultcm.o52 + " " + responseresultcm.p52 + " " + responseresultcm.q52 + " " + responseresultcm.r52 +
      "\n\nTSM HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n55 + " " + responseresultcm.o55 + " " + responseresultcm.p55 + " " + responseresultcm.q55 + " " + responseresultcm.r55 +
      "\n" + responseresultcm.n56 + " " + responseresultcm.o56 + " " + responseresultcm.p56 + " " + responseresultcm.q56 + " " + responseresultcm.r56 +
      "\n" + responseresultcm.n57 + " " + responseresultcm.o57 + " " + responseresultcm.p57 + " " + responseresultcm.q57 + " " + responseresultcm.r57 +
      "\n" + responseresultcm.n58 + " " + responseresultcm.o58 + " " + responseresultcm.p58 + " " + responseresultcm.q58 + " " + responseresultcm.r58 +
      "\n\nGung Ho Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n61 + " " + responseresultcm.o61 + " " + responseresultcm.p61 + " " + responseresultcm.q61 + " " + responseresultcm.r61 +
      "\n" + responseresultcm.n62 + " " + responseresultcm.o62 + " " + responseresultcm.p62 + " " + responseresultcm.q62 + " " + responseresultcm.r62 +
      "\n" + responseresultcm.n63 + " " + responseresultcm.o63 + " " + responseresultcm.p63 + " " + responseresultcm.q63 + " " + responseresultcm.r63 +
      "\n" + responseresultcm.n64 + " " + responseresultcm.o64 + " " + responseresultcm.p64 + " " + responseresultcm.q64 + " " + responseresultcm.r64 +
      "\n\nGung Ho Retail, Elasticity Curve" +
      "\n" + responseresultcm.n67 + " " + responseresultcm.o67 + " " + responseresultcm.p67 + " " + responseresultcm.q67 + " " + responseresultcm.r67 +
      "\n" + responseresultcm.n68 + " " + responseresultcm.o68 + " " + responseresultcm.p68 + " " + responseresultcm.q68 + " " + responseresultcm.r68 +
      "\n" + responseresultcm.n69 + " " + responseresultcm.o69 + " " + responseresultcm.p69 + " " + responseresultcm.q69 + " " + responseresultcm.r69 +
      "\n" + responseresultcm.n70 + " " + responseresultcm.o70 + " " + responseresultcm.p70 + " " + responseresultcm.q70 + " " + responseresultcm.r70 +
      "\n\nGung Ho HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n73 + " " + responseresultcm.o73 + " " + responseresultcm.p73 + " " + responseresultcm.q73 + " " + responseresultcm.r73 +
      "\n" + responseresultcm.n74 + " " + responseresultcm.o74 + " " + responseresultcm.p74 + " " + responseresultcm.q74 + " " + responseresultcm.r74 +
      "\n" + responseresultcm.n75 + " " + responseresultcm.o75 + " " + responseresultcm.p75 + " " + responseresultcm.q75 + " " + responseresultcm.r75 +
      "\n" + responseresultcm.n76 + " " + responseresultcm.o76 + " " + responseresultcm.p76 + " " + responseresultcm.q76 + " " + responseresultcm.r76 +
      "\n\nBuddy Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n79 + " " + responseresultcm.o79 + " " + responseresultcm.p79 + " " + responseresultcm.q79 + " " + responseresultcm.r79 +
      "\n" + responseresultcm.n80 + " " + responseresultcm.o80 + " " + responseresultcm.p80 + " " + responseresultcm.q80 + " " + responseresultcm.r80 +
      "\n" + responseresultcm.n81 + " " + responseresultcm.o81 + " " + responseresultcm.p81 + " " + responseresultcm.q81 + " " + responseresultcm.r81 +
      "\n" + responseresultcm.n82 + " " + responseresultcm.o82 + " " + responseresultcm.p82 + " " + responseresultcm.q82 + " " + responseresultcm.r82 +
      "\n\nBuddy Retail, Elasticity Curve" +
      "\n" + responseresultcm.n85 + " " + responseresultcm.o85 + " " + responseresultcm.p85 + " " + responseresultcm.q85 + " " + responseresultcm.r85 +
      "\n" + responseresultcm.n86 + " " + responseresultcm.o86 + " " + responseresultcm.p86 + " " + responseresultcm.q86 + " " + responseresultcm.r86 +
      "\n" + responseresultcm.n87 + " " + responseresultcm.o87 + " " + responseresultcm.p87 + " " + responseresultcm.q87 + " " + responseresultcm.r87 +
      "\n" + responseresultcm.n88 + " " + responseresultcm.o88 + " " + responseresultcm.p88 + " " + responseresultcm.q88 + " " + responseresultcm.r88 +
      "\n\nBuddy HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n91 + " " + responseresultcm.o91 + " " + responseresultcm.p91 + " " + responseresultcm.q91 + " " + responseresultcm.r91 +
      "\n" + responseresultcm.n92 + " " + responseresultcm.o92 + " " + responseresultcm.p92 + " " + responseresultcm.q92 + " " + responseresultcm.r92 +
      "\n" + responseresultcm.n93 + " " + responseresultcm.o93 + " " + responseresultcm.p93 + " " + responseresultcm.q93 + " " + responseresultcm.r93 +
      "\n" + responseresultcm.n94 + " " + responseresultcm.o94 + " " + responseresultcm.p94 + " " + responseresultcm.q94 + " " + responseresultcm.r94 +
      "\n\nConsultative Modern Trade, Elasticity Curve" +
      "\n" + responseresultcm.n97 + " " + responseresultcm.o97 + " " + responseresultcm.p97 + " " + responseresultcm.q97 + " " + responseresultcm.r97 +
      "\n" + responseresultcm.n98 + " " + responseresultcm.o98 + " " + responseresultcm.p98 + " " + responseresultcm.q98 + " " + responseresultcm.r98 +
      "\n" + responseresultcm.n99 + " " + responseresultcm.o99 + " " + responseresultcm.p99 + " " + responseresultcm.q99 + " " + responseresultcm.r99 +
      "\n" + responseresultcm.n100 + " " + responseresultcm.o100 + " " + responseresultcm.p100 + " " + responseresultcm.q100 + " " + responseresultcm.r100 +
      "\n\nConsultative Retail, Elasticity Curve" +
      "\n" + responseresultcm.n103 + " " + responseresultcm.o103 + " " + responseresultcm.p103 + " " + responseresultcm.q103 + " " + responseresultcm.r103 +
      "\n" + responseresultcm.n104 + " " + responseresultcm.o104 + " " + responseresultcm.p104 + " " + responseresultcm.q104 + " " + responseresultcm.r104 +
      "\n" + responseresultcm.n105 + " " + responseresultcm.o105 + " " + responseresultcm.p105 + " " + responseresultcm.q105 + " " + responseresultcm.r105 +
      "\n" + responseresultcm.n106 + " " + responseresultcm.o106 + " " + responseresultcm.p106 + " " + responseresultcm.q106 + " " + responseresultcm.r106 +
      "\n\nConsultative HORECA, Elasticity Curve" +
      "\n" + responseresultcm.n109 + " " + responseresultcm.o109 + " " + responseresultcm.p109 + " " + responseresultcm.q109 + " " + responseresultcm.r109 +
      "\n" + responseresultcm.n110 + " " + responseresultcm.o110 + " " + responseresultcm.p110 + " " + responseresultcm.q110 + " " + responseresultcm.r110 +
      "\n" + responseresultcm.n111 + " " + responseresultcm.o111 + " " + responseresultcm.p111 + " " + responseresultcm.q111 + " " + responseresultcm.r111 +
      "\n" + responseresultcm.n112 + " " + responseresultcm.o112 + " " + responseresultcm.p112 + " " + responseresultcm.q112 + " " + responseresultcm.r112 +
      "\n\n" + responseresultcm.n114 + " " + responseresultcm.o114 +
      "\n" + responseresultcm.n115 + " " + responseresultcm.o115 +
      "\n" + responseresultcm.n116 + " " + responseresultcm.o116 +
      "\n" + responseresultcm.n117 + " " + responseresultcm.o117 +
      "\n" + responseresultcm.n118 + " " + responseresultcm.o118 +
      "\n\n" + responseresultcm.n120 + " " + responseresultcm.o120 + " " + responseresultcm.p120 +
      "\n" + responseresultcm.n121 + " " + responseresultcm.o121 + " " + responseresultcm.p121 +
      "\n" + responseresultcm.n122 + " " + responseresultcm.o122 + " " + responseresultcm.p122 +
      "\n" + responseresultcm.n123 + " " + responseresultcm.o123 + " " + responseresultcm.p123 +
      "\n\nSales Development" +
      "\n\n" + responseresultcm.t6 + " " + responseresultcm.u6 + " " + responseresultcm.w6 + " " + responseresultcm.x6 + " " + responseresultcm.y6 + " " + responseresultcm.z6 +
      "\n" + responseresultcm.t7 + " " + responseresultcm.u7 + " " + responseresultcm.w7 + " " + responseresultcm.x7 + " " + responseresultcm.y7 + " " + responseresultcm.z7 +
      "\n" + responseresultcm.t8 + " " + responseresultcm.u8 + " " + responseresultcm.w8 + " " + responseresultcm.x8 + " " + responseresultcm.y8 + " " + responseresultcm.z8 +
      "\n" + responseresultcm.t9 + " " + responseresultcm.u9 + " " + responseresultcm.w9 + " " + responseresultcm.x9 + " " + responseresultcm.y9 + " " + responseresultcm.z9 +
      "\n" + responseresultcm.t10 + " " + responseresultcm.u10 + " " + responseresultcm.w10 + " " + responseresultcm.x10 + " " + responseresultcm.y10 + " " + responseresultcm.z10 +
      "\n" + responseresultcm.t11 + " " + responseresultcm.u11 + " " + responseresultcm.w11 + " " + responseresultcm.x11 + " " + responseresultcm.y11 + " " + responseresultcm.z11 +
      "\n" + responseresultcm.t12 + " " + responseresultcm.u12 + " " + responseresultcm.w12 + " " + responseresultcm.x12 + " " + responseresultcm.y12 + " " + responseresultcm.z12 +
      "\n\n" + responseresultcm.t14 + " " + responseresultcm.u14 + " " + responseresultcm.w14 + " " + responseresultcm.x14 + " " + responseresultcm.y14 + " " + responseresultcm.z14 +
      "\n" + responseresultcm.t15 + " " + responseresultcm.u15 + " " + responseresultcm.w15 + " " + responseresultcm.x15 + " " + responseresultcm.y15 + " " + responseresultcm.z15 +
      "\n" + responseresultcm.t16 + " " + responseresultcm.u16 + " " + responseresultcm.w16 + " " + responseresultcm.x16 + " " + responseresultcm.y16 + " " + responseresultcm.z16 +
      "\n" + responseresultcm.t17 + " " + responseresultcm.u17 + " " + responseresultcm.w17 + " " + responseresultcm.x17 + " " + responseresultcm.y17 + " " + responseresultcm.z17 +
      "\n" + responseresultcm.t18 + " " + responseresultcm.u18 + " " + responseresultcm.w18 + " " + responseresultcm.x18 + " " + responseresultcm.y18 + " " + responseresultcm.z18 +
      "\n\n" + responseresultcm.t20 + " " + responseresultcm.u20 + " " + responseresultcm.w20 + " " + responseresultcm.x20 + " " + responseresultcm.y20 + " " + responseresultcm.z20 +
      "\n" + responseresultcm.t21 + " " + responseresultcm.u21 + " " + responseresultcm.w21 + " " + responseresultcm.x21 + " " + responseresultcm.y21 + " " + responseresultcm.z21 +
      "\n" + responseresultcm.t22 + " " + responseresultcm.u22 + " " + responseresultcm.w22 + " " + responseresultcm.x22 + " " + responseresultcm.y22 + " " + responseresultcm.z22 +


      "\n\nPlayer's Input\nParameters  Input" +
      "\nSales Target, Modern Trade  " + result[0] +
      "\nSales Target, Retail  " + result[1] +
      "\nSales Target, HoReCa  " + result[2] +
      "\nPersonnel, Modern Trade  " + result[3] +
      "\nPersonnel, Retail  " + result[4] +
      "\nPersonnel, HoReCa  " + result[5] +
      "\nCompensation Modern Trade, Business background  " + result[6] +
      "\nCompensation Modern Trade, Non business background  " + result[7] +
      "\nCompensation Retail, Business background  " + result[8] +
      "\nCompensation Retail, Non business background  " + result[9] +
      "\nCompensation HoReCa, Business background  " + result[10] +
      "\nCompensation HoReCa, Non business background  " + result[11] +
      "\nBonus %, Business background  " + result[12] +
      "\nBonus %, Non business background  " + result[13] +
      "\nSales force Modern trade, Business background  " + result[14] +
      "\nSales force Retail, Business background  " + result[15] +
      "\nSales force HoReCa, Business background  " + result[16] +
      "\nSales Representative, Modern Trade %  " + result[17] +
      "\nSales Representative, Retail %  " + result[18] +
      "\nSales Representative, HoReCa %  " + result[19] +
      "\nKey Account Manager, Modern Trade %  " + result[20] +
      "\nKey Account Manager, Retail %  " + result[21] +
      "\nKey Account Manager, HoReCa %  " + result[22] +
      "\nTerritory Sales Manager, Modern Trade %  " + result[23] +
      "\nTerritory Sales Manager, Retail %  " + result[24] +
      "\nTerritory Sales Manager, HoReCa %  " + result[25] +
      "\nGung Ho, Modern Trade %  " + result[26] +
      "\nGung Ho, Retail %  " + result[27] +
      "\nGung Ho, HoReCa %  " + result[28] +
      "\nBuddy,  Modern Trade %  " + result[29] +
      "\nBuddy, Retail %  " + result[30] +
      "\nBuddy, HoReCa %  " + result[31] +
      "\nConsultative,  Modern Trade %  " + result[32] +
      "\nConsultative, Retail %  " + result[33] +
      "\nConsultative, HoReCa %  " + result[34] +
      "\nInvolvement in Customers  " + result[35] +
      "\nSales Strategy  " + result[36] +
      "\nSales and Marketing Integration  " + result[37] +
      "\nSales Personnel Support  " + result[38] +
      "\nBest individual performer  " + result[39] +
      "\nBest team effort  " + result[40] +
      "\nFriendliest Coworker  " + result[41] +
      "\nValue Based Sales Tactics  " + result[42] +
      "\nTrust Sales  " + result[43] +
      "\nProduct Management  " + result[44] +
      "\nAfter Sales Concept  " + result[45] +
      "\nRelationship Skills  " + result[46] +
      "\nKey Account Management  " + result[47] +
      "\nAdaptive Selling Style  " + result[48] +
      "\nNegotiation Style  " + result[49] +
      "\nClosing a Sale  " + result[50] +
      "\nEfficient Working Method  " + result[51] +
      "\nSales Process Innovation  " + result[52] +
      "\nProcess Management  " + result[53] +


      "\n\nSystem Generated Output" +
      "\nChannel Sales, K INR" +
      "\nParameter  Sales  Projections" +
      "\nModern Trade  " + responseresultdatabase.e55 + " " + responseresultdatabase.d13 +
      "\nInterior  " + responseresultdatabase.e56 + " " + responseresultdatabase.d14 +
      "\nEquipment  " + responseresultdatabase.e57 + " " + responseresultdatabase.d15 +
      "\n\nSegment Sales, K INR" +
      "\nParameter  Output" +
      "\nEasy Living  " + responseresultdatabase.m59 +
      "\nExperiencers  " + responseresultdatabase.n59 +
      "\nHeadonistic  " + responseresultdatabase.o59 +
      "\nThinkers  " + responseresultdatabase.p59 +
      "\n\nProduct Wise Sales, K INR" +
      "\nParameter  Output" +
      "\nCoffino  " + responseresultdatabase.s54 +
      "\nNutty  " + responseresultdatabase.t54 +
      "\nFruitful  " + responseresultdatabase.u54 +
      "\nDiblo  " + responseresultdatabase.v54 +
      "\n\nSales Cost, k INR" +
      "\nParameter  Output" +
      "\nWages Cost  " + responseresultdatabase.h61 +
      "\nHiring/Retrenchment Cost  " + responseresultdatabase.h62 +
      "\nRecognition Cost  " + responseresultdatabase.h63 +
      "\nSales Development Cost  " + responseresultdatabase.h64 +
      "\nSales Training Cost  " + responseresultdatabase.h65 +
      "\nSales Process Cost  " + responseresultdatabase.h66 +
      "\nTotal Sales Cost  " + responseresultdatabase.h67 +
      "\n\nIncome Statement, k INR" +
      "\nParameter  Output" +
      "\nRevenue  " + responseresultdatabase.e61 +
      "\nVariable Cost  " + responseresultdatabase.e62 +
      "\nGross Profit  " + responseresultdatabase.e63 +
      "\nSales & Channel Cost  " + responseresultdatabase.e64 +
      "\nOperating Profit/Loss  " + responseresultdatabase.e65 +
      "\n\nChannel Effectiveness" +
      "\nParameter  Output" +
      "\nModern Trade  " + responseresultdatabase.j50 +
      "\nRetail  " + responseresultdatabase.j51 +
      "\nHoReCa  " + responseresultdatabase.j52;

      return assesment;

   

  }
}
