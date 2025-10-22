import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangemanagementassesmentService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMemo" +
      "\n" + responseresultcm.b5 +
      "\n\nHuman Dynamics" +
      "\nOrganization Heirarchy" +
      "\n" + responseresultcm.d7 + "  " + responseresultcm.e7 + "  " + responseresultcm.f7 +
      "\n" + responseresultcm.d8 + "  " + responseresultcm.e8 + "  " +
      "Mr. Thappar boasts an impressive 25-year track record in the industry," +
      "having successfully managed multimillion-dollar projects. His association" +
      "with Via spans the last 15 years, during which he has navigated various departments" +
      "and, for the past 5 years, reported directly to the CEO. Known for his pacesetting leadership style," +
      "he encourages immediate action and is punctual with deadlines.Outside of work, Mr.Thappar is a family man," +
      "with two children pursuing their bachelor's degrees in the USA." +
      "\nWorking Preference: Yes, I prefer working in a team, but it must be a punctual and deadline - driven team." +
      "I thrive in smart, efficient teams that value both collaboration and precision." +
      "\nPassions: I am passionate about building a large organization that creates significant value for people." +
      "The challenge and satisfaction of contributing to organizational growth drive my professional aspirations." +
      "\nStrengths and Weaknesses: People management is a significant strength of mine; however, I acknowledge that" +
      "my relentless pursuitof perfection can sometimes be a weakness." + "  " +
      "1" +
      "\n" + responseresultcm.d9 + "  " + responseresultcm.e9 + "  " +
      "A graduate of the Wharton School at Penn State, Mrs Barclay has been an integral part" +
      "of Via since her arrival in India in 2014. With prior experience in asset management at Blackstone," +
      "she is poised to take on the role of Vice president of Asset Management soon. Known for her process-oriented" +
      "approach, she prefers succinct meetings adhering to schedules. Mrs Barclay is a proud parent with a school-going child." +
      "\n Working Preference: Absolutely, I prefer working in a team, especially with young minds focused on the future." +
      "Interacting with diverse perspectives in a collaborative setting energizes me." +
      "\nPassions: My health is a top priority, and I eagerly look forward to the holidays." +
      "Balancing a successful career with personal well - being is essential to me." +
      "\n Strengths and Weaknesses: A strong work focus is one of my strengths, but I admit that I can" +
      "be sensitive to criticism, making it a potential weakness." + "  " +
      "1" +
      "\n" + responseresultcm.d10 + "  " + responseresultcm.e10 + "  " +
      "Mr Roy, a cheerful Chartered Accountant with 15 years of industry experience, joined Eco three years" +
      "before the acquisition. His career includes a stint as a Tax consultant with the Big 4, where he earned" +
      "the nickname 'problem solver.' A people person, he enjoys building relationships and frequently hosts weekend" +
      "parties. Despite not being a stickler for processes, Mr. Roy possesses a sharp and keen mind. He is a divorcee." +
      "\nWorking Preference: Yes, I prefer working in a team.Building wealth, and involving friends and family," +
      "is more fulfilling and enjoyable within a collaborative setting." +
      "\nPassions: I am passionate about creating wealth and ensuring the prosperity of my close ones." +
      "Building strong relationships is a key part of this journey." +
      "\nStrengths and Weaknesses: Building relationships is undoubtedly a strength, but my fear of not solving" +
      "a problem can be a hindrance at times." + "  " +
      "1" +
      "\n" + responseresultcm.d11 + "  " + responseresultcm.e11 + "  " +
      "With 25 years of experience and an Ivy League education, Miss Mehta brings a wealth of operational" +
      "expertise from her tenure in major consulting firms. A Sigma black belt and former member of General" +
      "Electric's operations team, she joined Eco five years before the acquisition. Highly process-oriented" +
      "and organized, she values punctuality and has a short temper. In addition to her professional" +
      "achievements,Miss Mehta has adopted two children, both enrolled in a top sports academy." +
      "\nWorking Preference: Initially a solo runner, I've recognized the importance of people management" +
      "in leadership and have started working in teams to enhance this aspect." +
      "\nPassions: Working towards goals that contribute to a larger vision is a professional passion." +
      "In my personal life, guiding my kids toward successful sports careers brings me immense joy." +
      "\nStrengths and Weaknesses: My strength lies in number crunching, but I acknowledge that asking" +
      "for help when needed can be a weakness." + "  " +
      "1" +
      "\n" + responseresultcm.d12 + "  " + responseresultcm.e12 + "  " +
      "Mrs Pratap, with five years in the real estate industry, made significant contributions at Eco" +
      "after her tenure with Black Olives Venture. Described as a boon by her reporting manager," +
      "she graduated from Mumbai University and recently got married. A social and jolly individual," +
      "Mrs Pratap values her friendship with Anne and appreciates the structured approach to work." +
      "Her husband is aspiring to build his startup." +
      "\nWorking Preference: I am a team player, but the nature of my job role often requires solo performance." +
      "It's a dynamic balance that I navigate based on the task’s demands." +
      "\nPassions: Project financing and valuation excite me.I am passionate about building a successful" +
      "career in this direction and contributing to impactful projects." +
      "\nStrengths and Weaknesses: Understanding people is one of my strengths, while organizational" +
      "skills are areas where I continue to develop." + "  " +
      "1" +
      "\n" + responseresultcm.d13 + "  " + responseresultcm.e13 + "  " +
      "A recent graduate from an Ivy League college, Mr. Saxena joined Eco with a penchant for technology" +
      "and a keen interest in projects involving complex tech. Known for his mathematical modelling approach" +
      "to real estate project valuation, he strikes a balance between socializing on weekends and fully focusing" +
      "on work during the week. An ambivert, he enjoys exploring diverse cuisines, often joining Mr. Roy in their" +
      "quest for the best biryanis." +
      "\nWorking Preference: It depends on whom I am working with.I adapt my approach based on the team dynamics" +
      "or the individual project requirements." +
      "Passions: I am passionate about software and technology that transforms the real estate valuation process." +
      "Embracing innovation in this field excites me." +
      "Strengths and Weaknesses: My go - getter attitude is a strength, but I recognize that overworking" +
      "can be a potential weakness that I need to manage effectively." + "  " +
      "1" +
      "\n\nWorking Relationship at start ( 1 is positive, -1 is negative and 0 indicates neutral)" +
      "\n" +
      "  " + responseresultcm.e17 + "  " + responseresultcm.f17 + "  " + responseresultcm.g17 + "  " + responseresultcm.h17 + "  " + responseresultcm.i17 + "  " + responseresultcm.j17 +
      "\n" + responseresultcm.d18 + "  " + responseresultcm.e18 + "  " + responseresultcm.f18 + "  " + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + responseresultcm.i18 + "  " + responseresultcm.j18 +
      "\n" + responseresultcm.d19 + "  " + responseresultcm.e19 + "  " + responseresultcm.f19 + "  " + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + responseresultcm.i19 + "  " + responseresultcm.j19 +
      "\n" + responseresultcm.d20 + "  " + responseresultcm.e20 + "  " + responseresultcm.f20 + "  " + responseresultcm.g20 + "  " + responseresultcm.h20 + "  " + responseresultcm.i20 + "  " + responseresultcm.j20 +
      "\n" + responseresultcm.d21 + "  " + responseresultcm.e21 + "  " + responseresultcm.f21 + "  " + responseresultcm.g21 + "  " + responseresultcm.h21 + "  " + responseresultcm.i21 + "  " + responseresultcm.j21 +
      "\n" + responseresultcm.d22 + "  " + responseresultcm.e22 + "  " + responseresultcm.f22 + "  " + responseresultcm.g22 + "  " + responseresultcm.h22 + "  " + responseresultcm.i22 + "  " + responseresultcm.j22 +
      "\n" + responseresultcm.d23 + "  " + responseresultcm.e23 + "  " + responseresultcm.f23 + "  " + responseresultcm.g23 + "  " + responseresultcm.h23 + "  " + responseresultcm.i23 + "  " + responseresultcm.j23 +
      "\n\nTime, Minutes\n" +
      "  " + responseresultcm.e27 + "  " + responseresultcm.f27 + "  " + responseresultcm.g27 + "  " + responseresultcm.h27 + "  " + responseresultcm.i27 + "  " + responseresultcm.j27 +
      "\n" + responseresultcm.d28 + "  " + Number(responseresultcm.e28).toFixed(0) + "  " + Number(responseresultcm.f28).toFixed(0) + "  " + Number(responseresultcm.g28).toFixed(0) + "  " + Number(responseresultcm.h28).toFixed(0) + "  " + Number(responseresultcm.i28).toFixed(0) + "  " + Number(responseresultcm.j28).toFixed(0) +
      "\n\n " + responseresultcm.d30 + "  " + Number(responseresultcm.e30).toFixed(0) +
      "\n\nPerformance Weights" +
      "\n" + responseresultcm.d33 + "  " + Number(responseresultcm.e33).toFixed(1) +
      "\n" + responseresultcm.d34 + "  " + responseresultcm.e34 +
      "\n" + responseresultcm.d35 + "  " + responseresultcm.e35 +
      "\n\n" + responseresultcm.d37 + "  " + Number(responseresultcm.e37).toFixed(0) +
      "\n\n" + "The starting level in each of awareness, motivation and commitment of person suggests their know how " +
      "of the situation. Each activity consists of some intervention which has effect on employee awareness, motivation " +
      "and commitment levels. This activity also have an impact on employees time and budget, in case of no time or budget " +
      "available the intervention have no effect and it impacts inversely." +
      "\n\nAwareness" +
      "\n\nStarting Level" +
      "\n" + "  " + responseresultcm.m7 + "  " + responseresultcm.n7 + "  " + responseresultcm.o7 + responseresultcm.p7 + "  " + responseresultcm.q7 + "  " + responseresultcm.r7 +
      "\n" + responseresultcm.l8 + "  " + Number(responseresultcm.m8).toFixed(0) + "  " + Number(responseresultcm.n8).toFixed(0) + "  " + Number(responseresultcm.o8).toFixed(1) + "  " + Number(responseresultcm.p8).toFixed(1) + "  " + Number(responseresultcm.q8).toFixed(1) + "  " + Number(responseresultcm.r8).toFixed(1) +
      "\n\n" + responseresultcm.l10 + "  " + responseresultcm.m10 + "  " + responseresultcm.n10 + "  " + responseresultcm.o10 + "  " + responseresultcm.p10 + "  " + responseresultcm.q10 + "  " + responseresultcm.r10 + "  " + responseresultcm.t10 + "  " + responseresultcm.u10 +
      "\n" + responseresultcm.l11 + "  " + responseresultcm.m11 + "  " + responseresultcm.n11 + "  " + responseresultcm.o11 + "  " + responseresultcm.p11 + "  " + responseresultcm.q11 + "  " + responseresultcm.r11 + "  " + Number(responseresultcm.t11).toFixed(0) + "  " + Number(responseresultcm.u11).toFixed(0) +
      "\n" + responseresultcm.l12 + "  " + responseresultcm.m12 + "  " + responseresultcm.n12 + "  " + responseresultcm.o12 + "  " + responseresultcm.p12 + "  " + responseresultcm.q12 + "  " + responseresultcm.r12 + "  " + Number(responseresultcm.t12).toFixed(0) + "  " + Number(responseresultcm.u12).toFixed(0) +
      "\n" + responseresultcm.l13 + "  " + responseresultcm.m13 + "  " + responseresultcm.n13 + "  " + responseresultcm.o13 + "  " + responseresultcm.p13 + "  " + responseresultcm.q13 + "  " + responseresultcm.r13 + "  " + Number(responseresultcm.t13).toFixed(0) + "  " + Number(responseresultcm.u13).toFixed(0) +
      "\n" + responseresultcm.l14 + "  " + responseresultcm.m14 + "  " + responseresultcm.n14 + "  " + responseresultcm.o14 + "  " + responseresultcm.p14 + "  " + responseresultcm.q14 + "  " + responseresultcm.r14 + "  " + Number(responseresultcm.t14).toFixed(0) + "  " + Number(responseresultcm.u14).toFixed(0) +
      "\n" + responseresultcm.l15 + "  " + responseresultcm.m15 + "  " + responseresultcm.n15 + "  " + responseresultcm.o15 + "  " + responseresultcm.p15 + "  " + responseresultcm.q15 + "  " + responseresultcm.r15 + "  " + Number(responseresultcm.t15).toFixed(0) + "  " + Number(responseresultcm.u15).toFixed(0) +
      "\n" + responseresultcm.l16 + "  " + responseresultcm.m16 + "  " + responseresultcm.n16 + "  " + responseresultcm.o16 + "  " + responseresultcm.p16 + "  " + responseresultcm.q16 + "  " + responseresultcm.r16 + "  " + Number(responseresultcm.t16).toFixed(0) + "  " + Number(responseresultcm.u16).toFixed(0) +
      "\n\n" + responseresultcm.l18 + "  " + responseresultcm.m18 + "  " + responseresultcm.n18 + "  " + responseresultcm.o18 + "  " + responseresultcm.p18 + "  " + responseresultcm.q18 + "  " + responseresultcm.r18 + "  " + responseresultcm.t10 + "  " + responseresultcm.u10 +
      "\n" + responseresultcm.l19 + "  " + responseresultcm.m19 + "  " + responseresultcm.n19 + "  " + responseresultcm.o19 + "  " + responseresultcm.p19 + "  " + responseresultcm.q19 + "  " + responseresultcm.r19 + "  " + responseresultcm.t19 + "  " + responseresultcm.u19 +
      "\n" + responseresultcm.l20 + "  " + responseresultcm.m20 + "  " + responseresultcm.n20 + "  " + responseresultcm.o20 + "  " + responseresultcm.p20 + "  " + responseresultcm.q20 + "  " + responseresultcm.r20 + "  " + responseresultcm.t20 + "  " + responseresultcm.u20 +
      "\n" + responseresultcm.l21 + "  " + responseresultcm.m21 + "  " + responseresultcm.n21 + "  " + responseresultcm.o21 + "  " + responseresultcm.p21 + "  " + responseresultcm.q21 + "  " + responseresultcm.r21 + "  " + responseresultcm.t21 + "  " + responseresultcm.u21 +
      "\n" + responseresultcm.l22 + "  " + responseresultcm.m22 + "  " + responseresultcm.n22 + "  " + responseresultcm.o22 + "  " + responseresultcm.p22 + "  " + responseresultcm.q22 + "  " + responseresultcm.r22 + "  " + responseresultcm.t22 + "  " + responseresultcm.u22 +
      "\n" + responseresultcm.l23 + "  " + responseresultcm.m23 + "  " + responseresultcm.n23 + "  " + responseresultcm.o23 + "  " + responseresultcm.p23 + "  " + responseresultcm.q23 + "  " + responseresultcm.r23 + "  " + responseresultcm.t23 + "  " + responseresultcm.u23 +
      "\n" + responseresultcm.l24 + "  " + responseresultcm.m24 + "  " + responseresultcm.n24 + "  " + responseresultcm.o24 + "  " + responseresultcm.p24 + "  " + responseresultcm.q24 + "  " + responseresultcm.r24 + "  " + responseresultcm.t24 + "  " + responseresultcm.u24 +
      "\n\n" + responseresultcm.l26 + "  " + responseresultcm.m26 + "  " + responseresultcm.n26 + "  " + responseresultcm.o26 + "  " + responseresultcm.p26 + "  " + responseresultcm.q26 + "  " + responseresultcm.r26 + "  " + responseresultcm.t10 + "  " + responseresultcm.u10 +
      "\n" + responseresultcm.l27 + "  " + responseresultcm.m27 + "  " + responseresultcm.n27 + "  " + responseresultcm.o27 + "  " + responseresultcm.p27 + "  " + responseresultcm.q27 + "  " + responseresultcm.r27 + "  " + responseresultcm.t27 + "  " + responseresultcm.u27 +
      "\n" + responseresultcm.l28 + "  " + responseresultcm.m28 + "  " + responseresultcm.n28 + "  " + responseresultcm.o28 + "  " + responseresultcm.p28 + "  " + responseresultcm.q28 + "  " + responseresultcm.r28 + "  " + responseresultcm.t28 + "  " + responseresultcm.u28 +
      "\n" + responseresultcm.l29 + "  " + responseresultcm.m29 + "  " + responseresultcm.n29 + "  " + responseresultcm.o29 + "  " + responseresultcm.p29 + "  " + responseresultcm.q29 + "  " + responseresultcm.r29 + "  " + responseresultcm.t29 + "  " + responseresultcm.u29 +
      "\n" + responseresultcm.l30 + "  " + responseresultcm.m30 + "  " + responseresultcm.n30 + "  " + responseresultcm.o30 + "  " + responseresultcm.p30 + "  " + responseresultcm.q30 + "  " + responseresultcm.r30 + "  " + responseresultcm.t30 + "  " + responseresultcm.u30 +
      "\n" + responseresultcm.l31 + "  " + responseresultcm.m31 + "  " + responseresultcm.n31 + "  " + responseresultcm.o31 + "  " + responseresultcm.p31 + "  " + responseresultcm.q31 + "  " + responseresultcm.r31 + "  " + responseresultcm.t31 + "  " + responseresultcm.u31 +
      "\n" + responseresultcm.l32 + "  " + responseresultcm.m32 + "  " + responseresultcm.n32 + "  " + responseresultcm.o32 + "  " + responseresultcm.p32 + "  " + responseresultcm.q32 + "  " + responseresultcm.r32 + "  " + responseresultcm.t32 + "  " + responseresultcm.u32 +
      "\n\n" + responseresultcm.l34 + "  " + responseresultcm.m34 +
      "\n\n" + responseresultcm.l36 + "  " + responseresultcm.m36 +
      "\n\n" + responseresultcm.l38 + "  " + responseresultcm.m38 +
      "\n\nMotivation" +
      "\nStarting Level" +
      "\n" + "  " + responseresultcm.x7 + "  " + responseresultcm.y7 + "  " + responseresultcm.z7 + "  " + responseresultcm.aa7 + "  " + responseresultcm.ab7 + "  " + responseresultcm.ac7 +
      "\n" + responseresultcm.w8 + "  " +  responseresultcm.x8 + "  " + responseresultcm.y8 + "  " + responseresultcm.z8 + "  " + responseresultcm.aa8 + "  " + responseresultcm.ab8 + "  " + responseresultcm.ac8 +
      "\n\n" + responseresultcm.w10 + "  " + responseresultcm.x10 + "  " + responseresultcm.y10 + "  " + responseresultcm.z10 + "  " + responseresultcm.aa10 + "  " + responseresultcm.ab10 + "  " + responseresultcm.ac10 + "  " + responseresultcm.ae10 + "  " + responseresultcm.af10 +
      "\n" + responseresultcm.w11 + "  " + responseresultcm.x11 + "  " + responseresultcm.y11 + "  " + responseresultcm.z11 + "  " + responseresultcm.aa11 + "  " + responseresultcm.ab11 + "  " + responseresultcm.ac11 + "  " + responseresultcm.ae11 + "  " + responseresultcm.af11 +
      "\n" + responseresultcm.w12 + "  " + responseresultcm.x12 + "  " + responseresultcm.y12 + "  " + responseresultcm.z12 + "  " + responseresultcm.aa12 + "  " + responseresultcm.ab12 + "  " + responseresultcm.ac12 + "  " + responseresultcm.ae12 + "  " + responseresultcm.af12 +
      "\n" + responseresultcm.w13 + "  " + responseresultcm.x13 + "  " + responseresultcm.y13 + "  " + responseresultcm.z13 + "  " + responseresultcm.aa13 + "  " + responseresultcm.ab13 + "  " + responseresultcm.ac13 + "  " + responseresultcm.ae13 + "  " + responseresultcm.af13 +
      "\n" + responseresultcm.w14 + "  " + responseresultcm.x14 + "  " + responseresultcm.y14 + "  " + responseresultcm.z14 + "  " + responseresultcm.aa14 + "  " + responseresultcm.ab14 + "  " + responseresultcm.ac14 + "  " + responseresultcm.ae14 + "  " + responseresultcm.af14 +
      "\n" + responseresultcm.w15 + "  " + responseresultcm.x15 + "  " + responseresultcm.y15 + "  " + responseresultcm.z15 + "  " + responseresultcm.aa15 + "  " + responseresultcm.ab15 + "  " + responseresultcm.ac15 + "  " + responseresultcm.ae15 + "  " + responseresultcm.af15 +
      "\n" + responseresultcm.w16 + "  " + responseresultcm.x16 + "  " + responseresultcm.y16 + "  " + responseresultcm.z16 + "  " + responseresultcm.aa16 + "  " + responseresultcm.ab16 + "  " + responseresultcm.ac16 + "  " + responseresultcm.ae16 + "  " + responseresultcm.af16 +
      "\n\n" + responseresultcm.w18 + "  " + responseresultcm.x18 + "  " + responseresultcm.y18 + "  " + responseresultcm.z18 + "  " + responseresultcm.aa18 + "  " + responseresultcm.ab18 + "  " + responseresultcm.ac18 + "  " + "" +  "  " + "" +
      "\n" + responseresultcm.w19 + "  " + responseresultcm.x19 + "  " + responseresultcm.y19 + "  " + responseresultcm.z19 + "  " + responseresultcm.aa19 + "  " + responseresultcm.ab19 + "  " + responseresultcm.ac19 + "  " + responseresultcm.ae19 + "  " + responseresultcm.af19 +
      "\n" + responseresultcm.w20 + "  " + responseresultcm.x20 + "  " + responseresultcm.y20 + "  " + responseresultcm.z20 + "  " + responseresultcm.aa20 + "  " + responseresultcm.ab20 + "  " + responseresultcm.ac20 + "  " + responseresultcm.ae20 + "  " + responseresultcm.af20 +
      "\n" + responseresultcm.w21 + "  " + responseresultcm.x21 + "  " + responseresultcm.y21 + "  " + responseresultcm.z21 + "  " + responseresultcm.aa21 + "  " + responseresultcm.ab21 + "  " + responseresultcm.ac21 + "  " + responseresultcm.ae21 + "  " + responseresultcm.af21 +
      "\n" + responseresultcm.w22 + "  " + responseresultcm.x22 + "  " + responseresultcm.y22 + "  " + responseresultcm.z22 + "  " + responseresultcm.aa22 + "  " + responseresultcm.ab22 + "  " + responseresultcm.ac22 + "  " + responseresultcm.ae22 + "  " + responseresultcm.af22 +
      "\n" + responseresultcm.w23 + "  " + responseresultcm.x23 + "  " + responseresultcm.y23 + "  " + responseresultcm.z23 + "  " + responseresultcm.aa23 + "  " + responseresultcm.ab23 + "  " + responseresultcm.ac23 + "  " + responseresultcm.ae23 + "  " + responseresultcm.af23 +
      "\n" + responseresultcm.w24 + "  " + responseresultcm.x24 + "  " + responseresultcm.y24 + "  " + responseresultcm.z24 + "  " + responseresultcm.aa24 + "  " + responseresultcm.ab24 + "  " + responseresultcm.ac24 + "  " + responseresultcm.ae24 + "  " + responseresultcm.af24 +
      "\n\n" + responseresultcm.w26 + "  " + responseresultcm.x26 + "  " + responseresultcm.y26 + "  " + responseresultcm.z26 + "  " + responseresultcm.aa26 + "  " + responseresultcm.ab26 + "  " + responseresultcm.ac26 + "  " + "" + "  " + "" +
      "\n" + responseresultcm.w27 + "  " + responseresultcm.x27 + "  " + responseresultcm.y27 + "  " + responseresultcm.z27 + "  " + responseresultcm.aa27 + "  " + responseresultcm.ab27 + "  " + responseresultcm.ac27 + "  " + responseresultcm.ae27 + "  " + responseresultcm.af27 +
      "\n" + responseresultcm.w28 + "  " + responseresultcm.x28 + "  " + responseresultcm.y28 + "  " + responseresultcm.z28 + "  " + responseresultcm.aa28 + "  " + responseresultcm.ab28 + "  " + responseresultcm.ac28 + "  " + responseresultcm.ae28 + "  " + responseresultcm.af28 +
      "\n" + responseresultcm.w29 + "  " + responseresultcm.x29 + "  " + responseresultcm.y29 + "  " + responseresultcm.z29 + "  " + responseresultcm.aa29 + "  " + responseresultcm.ab29 + "  " + responseresultcm.ac29 + "  " + responseresultcm.ae29 + "  " + responseresultcm.af29 +
      "\n" + responseresultcm.w30 + "  " + responseresultcm.x30 + "  " + responseresultcm.y30 + "  " + responseresultcm.z30 + "  " + responseresultcm.aa30 + "  " + responseresultcm.ab30 + "  " + responseresultcm.ac23 + "  " + responseresultcm.ae30 + "  " + responseresultcm.af30 +
      "\n" + responseresultcm.w31 + "  " + responseresultcm.x31 + "  " + responseresultcm.y31 + "  " + responseresultcm.z31 + "  " + responseresultcm.aa31 + "  " + responseresultcm.ab31 + "  " + responseresultcm.ac31 + "  " + responseresultcm.ae31 + "  " + responseresultcm.af31 +
      "\n" + responseresultcm.w32 + "  " + responseresultcm.x32 + "  " + responseresultcm.y32 + "  " + responseresultcm.z32 + "  " + responseresultcm.aa32 + "  " + responseresultcm.ab32 + "  " + responseresultcm.ac32 + "  " + responseresultcm.ae32 + "  " + responseresultcm.af32 +
      "\n\n" + responseresultcm.w34 + "  " + responseresultcm.x34 +
      "\n\n" + responseresultcm.w36 + "  " + responseresultcm.x36 +
      "\n\n" + responseresultcm.w38 + "  " + responseresultcm.x38 +
      "\n\nCommitment" +
      "\nStarting Level" +
      "\n" + "  " + responseresultcm.ai7 + "  " + responseresultcm.aj7 + "  " + responseresultcm.ak7 +"  "+ responseresultcm.al7 + "  " + responseresultcm.am7 + "  " + responseresultcm.an7 +
      "\n" + responseresultcm.ah8 + "  " + responseresultcm.ai8 + "  " + responseresultcm.aj8 + "  " + responseresultcm.ak8 + "  " + responseresultcm.al8 + "  " + responseresultcm.am8 + "  " + responseresultcm.an8 +
      "\n\n" + responseresultcm.ah10 + "  " + responseresultcm.ai10 + "  " + responseresultcm.aj10 + "  " + responseresultcm.ak10 + "  " + responseresultcm.al10 + "  " + responseresultcm.am10 + "  " + responseresultcm.an10 + "  " + responseresultcm.ap10 + "  " + responseresultcm.aq10 +
      "\n" + responseresultcm.ah11 + "  " + responseresultcm.ai11 + "  " + responseresultcm.aj11 + "  " + responseresultcm.ak11 + "  " + responseresultcm.al11 + "  " + responseresultcm.am11 + "  " + responseresultcm.an11 + "  " + responseresultcm.ap11 + "  " + responseresultcm.aq11 +
      "\n" + responseresultcm.ah12 + "  " + responseresultcm.ai12 + "  " + responseresultcm.aj12 + "  " + responseresultcm.ak12 + "  " + responseresultcm.al12 + "  " + responseresultcm.am12 + "  " + responseresultcm.an12 + "  " + responseresultcm.ap12 + "  " + responseresultcm.aq12 +
      "\n" + responseresultcm.ah13 + "  " + responseresultcm.ai13 + "  " + responseresultcm.aj13 + "  " + responseresultcm.ak13 + "  " + responseresultcm.al13 + "  " + responseresultcm.am13 + "  " + responseresultcm.an13 + "  " + responseresultcm.ap13 + "  " + responseresultcm.aq13 +
      "\n" + responseresultcm.ah14 + "  " + responseresultcm.ai14 + "  " + responseresultcm.aj14 + "  " + responseresultcm.ak14 + "  " + responseresultcm.al14 + "  " + responseresultcm.am14 + "  " + responseresultcm.an14 + "  " + responseresultcm.ap14 + "  " + responseresultcm.aq14 +
      "\n" + responseresultcm.ah15 + "  " + responseresultcm.ai15 + "  " + responseresultcm.aj15 + "  " + responseresultcm.ak15 + "  " + responseresultcm.al15 + "  " + responseresultcm.am15 + "  " + responseresultcm.an15 + "  " + responseresultcm.ap15 + "  " + responseresultcm.aq15 +
      "\n" + responseresultcm.ah16 + "  " + responseresultcm.ai16 + "  " + responseresultcm.aj16 + "  " + responseresultcm.ak16 + "  " + responseresultcm.al16 + "  " + responseresultcm.am16 + "  " + responseresultcm.an16 + "  " + responseresultcm.ap16 + "  " + responseresultcm.aq16 +
      "\n\n" + responseresultcm.ah18 + "  " + responseresultcm.ai18 + "  " + responseresultcm.aj18 + "  " + responseresultcm.ak18 + "  " + responseresultcm.al18 + "  " + responseresultcm.am18 + "  " + responseresultcm.an18 + "  " + "" + "  " + "" +
      "\n" + responseresultcm.ah19 + "  " + responseresultcm.ai19 + "  " + responseresultcm.aj19 + "  " + responseresultcm.ak19 + "  " + responseresultcm.al19 + "  " + responseresultcm.am19 + "  " + responseresultcm.an19 + "  " + responseresultcm.ap19 + "  " + responseresultcm.aq19 +
      "\n" + responseresultcm.ah20 + "  " + responseresultcm.ai20 + "  " + responseresultcm.aj20 + "  " + responseresultcm.ak20 + "  " + responseresultcm.al20 + "  " + responseresultcm.am20 + "  " + responseresultcm.an20 + "  " + responseresultcm.ap20 + "  " + responseresultcm.aq20 +
      "\n" + responseresultcm.ah21 + "  " + responseresultcm.ai21 + "  " + responseresultcm.aj21 + "  " + responseresultcm.ak21 + "  " + responseresultcm.al21 + "  " + responseresultcm.am21 + "  " + responseresultcm.an21 + "  " + responseresultcm.ap21 + "  " + responseresultcm.aq21 +
      "\n" + responseresultcm.ah22 + "  " + responseresultcm.ai22 + "  " + responseresultcm.aj22 + "  " + responseresultcm.ak22 + "  " + responseresultcm.al22 + "  " + responseresultcm.am22 + "  " + responseresultcm.an22 + "  " + responseresultcm.ap22 + "  " + responseresultcm.aq22 +
      "\n" + responseresultcm.ah23 + "  " + responseresultcm.ai23 + "  " + responseresultcm.aj23 + "  " + responseresultcm.ak23 + "  " + responseresultcm.al23 + "  " + responseresultcm.am23 + "  " + responseresultcm.an23 + "  " + responseresultcm.ap23 + "  " + responseresultcm.aq23 +
      "\n" + responseresultcm.ah24 + "  " + responseresultcm.ai24 + "  " + responseresultcm.aj24 + "  " + responseresultcm.ak24 + "  " + responseresultcm.al24 + "  " + responseresultcm.am24 + "  " + responseresultcm.an24 + "  " + responseresultcm.ap24 + "  " + responseresultcm.aq24 +
      "\n\n" + responseresultcm.ah26 + "  " + "  " + responseresultcm.ai26 + "  " + responseresultcm.aj26 + "  " + responseresultcm.ak26 + "  " + responseresultcm.al26 + "  " + responseresultcm.am26 + "  " + responseresultcm.an26 + "  " + "" + "  " + "" +
      "\n" + responseresultcm.ah27 + "  " + responseresultcm.ai27 + "  " + responseresultcm.aj27 + "  " + responseresultcm.ak27 + "  " + responseresultcm.al27 + "  " + responseresultcm.am27 + "  " + responseresultcm.an27 + "  " + responseresultcm.ap27 + "  " + responseresultcm.aq27 +
      "\n" + responseresultcm.ah28 + "  " + responseresultcm.ai28 + "  " + responseresultcm.aj28 + "  " + responseresultcm.ak28 + "  " + responseresultcm.al28 + "  " + responseresultcm.am28 + "  " + responseresultcm.an28 + "  " + responseresultcm.ap28 + "  " + responseresultcm.aq28 +
      "\n" + responseresultcm.ah29 + "  " + responseresultcm.ai29 + "  " + responseresultcm.aj29 + "  " + responseresultcm.ak29 + "  " + responseresultcm.al29 + "  " + responseresultcm.am29 + "  " + responseresultcm.an29 + "  " + responseresultcm.ap29 + "  " + responseresultcm.aq29 +
      "\n" + responseresultcm.ah30 + "  " + responseresultcm.ai30 + "  " + responseresultcm.aj30 + "  " + responseresultcm.ak30 + "  " + responseresultcm.al30 + "  " + responseresultcm.am30 + "  " + responseresultcm.an30 + "  " + responseresultcm.ap30 + "  " + responseresultcm.aq30 +
      "\n" + responseresultcm.ah31 + "  " + responseresultcm.ai31 + "  " + responseresultcm.aj31 + "  " + responseresultcm.ak31 + "  " + responseresultcm.al31 + "  " + responseresultcm.am31 + "  " + responseresultcm.an31 + "  " + responseresultcm.ap31 + "  " + responseresultcm.aq31 +
      "\n" + responseresultcm.ah32 + "  " + responseresultcm.ai32 + "  " + responseresultcm.aj32 + "  " + responseresultcm.ak32 + "  " + responseresultcm.al32 + "  " + responseresultcm.am32 + "  " + responseresultcm.an32 + "  " + responseresultcm.ap32 + "  " + responseresultcm.aq32 +
      "\n\n" + responseresultcm.ah34 + "  " + responseresultcm.ai34 +
      "\n\n" + responseresultcm.ah36 + "  " + responseresultcm.ai36 +
      "\n\n" + responseresultcm.ah38 + "  " + responseresultcm.ai38 +


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
      "\n" + responseresultdatabase.aj24 + "  " + responseresultdatabase.ak24 + "  " + responseresultdatabase.al24 + "  " + responseresultdatabase.am24 + "  " + responseresultdatabase.an24 + "  " + responseresultdatabase.ao24 + "  " + responseresultdatabase.ap24 +
      "\n" + responseresultdatabase.aj25 + "  " + responseresultdatabase.ak25 + "  " + responseresultdatabase.al25 + "  " + responseresultdatabase.am25 + "  " + responseresultdatabase.an25 + "  " + responseresultdatabase.ao25 + "  " + responseresultdatabase.ap25 +
      "\n" + responseresultdatabase.aj26 + "  " + responseresultdatabase.ak26 + "  " + responseresultdatabase.al26 + "  " + responseresultdatabase.am26 + "  " + responseresultdatabase.an26 + "  " + responseresultdatabase.ao26 + "  " + responseresultdatabase.ap26 +
      "\n" + responseresultdatabase.aj27 + "  " + responseresultdatabase.ak27 + "  " + responseresultdatabase.al27 + "  " + responseresultdatabase.am27 + "  " + responseresultdatabase.an27 + "  " + responseresultdatabase.ao27 + "  " + responseresultdatabase.ap27 +
      "\n" + responseresultdatabase.aj28 + "  " + responseresultdatabase.ak28 + "  " + responseresultdatabase.al28 + "  " + responseresultdatabase.am28 + "  " + responseresultdatabase.an28 + "  " + responseresultdatabase.ao28 + "  " + responseresultdatabase.ap28 +
      "\n" + responseresultdatabase.aj29 + "  " + responseresultdatabase.ak29 + "  " + responseresultdatabase.al29 + "  " + responseresultdatabase.am29 + "  " + responseresultdatabase.an29 + "  " + responseresultdatabase.ao29 + "  " + responseresultdatabase.ap29 +
      "\n\nGoal to be optimized" +
      "\nPerformance level in group KPI  " + responseresultcm.ai41 ;
    return assesment;
  }
}