import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrpassesmentserviceService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\n" +
      "Demand Forecast" +
      "\n" + "Market Presence" + "  " + "Cities" +
      "\n" + responseresultcm.d7 + "  " + responseresultcm.e7 +
      "\n" + responseresultcm.d8 + "  " + responseresultcm.e8 +
      "\n" + responseresultcm.d9 + "  " + responseresultcm.e9 +
      "\n" + responseresultcm.d10 + "  " + responseresultcm.e10 +
      "\n\n" + "  " + "Production Lines" +
      "\n" + responseresultcm.d13 + "  " + responseresultcm.e13 +
      "\n" + responseresultcm.d14 + "  " + responseresultcm.e14 +
      "\n\n" + "  " + "Months" +
      "\n" + responseresultcm.d17 + "  " + responseresultcm.e17 +
      "\n\n" + "  " + "Customer Satisfaction Rate" +
      "\n" + responseresultcm.d20 + "  " + Number(responseresultcm.e20) * 100 + "%" +
      "\n" + responseresultcm.d21 + "  " + Number(responseresultcm.e21) * 100 + "%" +
      "\n\n" + "Teams" + "  " + "Previous Staff" + "  " + "Efficiency" +
      "\n" + responseresultcm.d24 + "  " + responseresultcm.e24 + "  " + Number(responseresultcm.f24) * 100 + "%" +
      "\n" + responseresultcm.d25 + "  " + responseresultcm.e25 + "  " + Number(responseresultcm.f25) * 100 + "%" +
      "\n" + responseresultcm.d26 + "  " + responseresultcm.e26 + "  " + Number(responseresultcm.f26) * 100 + "%" +
      "\n" + responseresultcm.d27 + "  " + responseresultcm.e27 + "  " + Number(responseresultcm.f27) * 100 + "%" +
      "\n" + responseresultcm.d28 + "  " + responseresultcm.e28 + "  " + Number(responseresultcm.f28) * 100 + "%" +
      "\n" + responseresultcm.d29 + "  " + responseresultcm.e29 + "  " + Number(responseresultcm.f29) * 100 + "%" +
      "\n\n" + responseresultcm.d31 + "  " + responseresultcm.e31 +
      "\n" + responseresultcm.d32 + "  " + responseresultcm.e32 +
      "\n" + responseresultcm.d33 + "  " + responseresultcm.e33 +
      "\n\n" + "  " + "Minimum Requirement at Current Efficiency" +
      "\n" + responseresultcm.d36 + "  " + responseresultcm.e36 +
      "\n" + responseresultcm.d37 + "  " + responseresultcm.e37 +
      "\n" + responseresultcm.d38 + "  " + responseresultcm.e38 +
      "\n" + responseresultcm.d39 + "  " + responseresultcm.e39 +
      "\n" + responseresultcm.d40 + "  " + responseresultcm.e40 +
      "\n\n" + responseresultcm.d42 + "  " + responseresultcm.e42 +
      "\n\n" + "Supply Forecast" +
      "\n" + responseresultcm.h6 + "  " + (Number(responseresultcm.i6) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.h7 + "  " + Number(responseresultcm.i7) * 100 + "%" +
      "\n" + responseresultcm.h8 + "  " + Number(responseresultcm.i8) * 100 + "%" +
      "\n" + responseresultcm.h9 + "  " + Number(responseresultcm.i9) * 100 + "%" +
      "\n" + responseresultcm.h10 + "  " + Number(responseresultcm.i10).toFixed(2) +
      "\n" + responseresultcm.h11 + "  " + responseresultcm.i11 +
      "\n" + responseresultcm.h12 + "  " + responseresultcm.i12 +
      "\n" + responseresultcm.h13 + "  " + Number(responseresultcm.i13) * 100 + "%" +
      "\n" + responseresultcm.h14 + "  " + responseresultcm.i14 +
      "\n" + responseresultcm.h15 + "  " + responseresultcm.i15 +
      "\n\n" + "Analysis & Planning" +
      "\n" + "  " + "Channel cost per hire, INR" + "  " + "Effectiveness" + "  " + "Filling Effectiveness" +
      "\n" + responseresultcm.k7 + "  " + responseresultcm.l7 + "  " + responseresultcm.m7 + "  " + responseresultcm.n7 +
      "\n" + responseresultcm.k8 + "  " + responseresultcm.l8 + "  " + responseresultcm.m8 + "  " + responseresultcm.n8 +
      "\n" + responseresultcm.k9 + "  " + responseresultcm.l9 + "  " + responseresultcm.m9 + "  " + responseresultcm.n9 +
      "\n" + responseresultcm.k10 + "  " + responseresultcm.l10 + "  " + responseresultcm.m10 + "  " + responseresultcm.n10 +
      "\n" + responseresultcm.k11 + "  " + responseresultcm.l11 + "  " + responseresultcm.m11 + "  " + responseresultcm.n11 +
      "\n\n" + "  " + "Previous Year Average Salary, INR" +
      "\n" + responseresultcm.k14 + "  " + responseresultcm.l14 +
      "\n" + responseresultcm.k15 + "  " + responseresultcm.l15 +
      "\n" + responseresultcm.k16 + "  " + responseresultcm.l16 +
      "\n" + responseresultcm.k17 + "  " + responseresultcm.l17 +
      "\n" + responseresultcm.k18 + "  " + responseresultcm.l18 +
      "\n" + responseresultcm.k19 + "  " + responseresultcm.l19 +
      "\n\n" + "  " + "Average Salary in Market, INR" +
      "\n" + responseresultcm.k22 + "  " + responseresultcm.l22 +
      "\n" + responseresultcm.k23 + "  " + responseresultcm.l23 +
      "\n" + responseresultcm.k24 + "  " + Number(responseresultcm.l24).toFixed(0) +
      "\n" + responseresultcm.k25 + "  " + responseresultcm.l25 +
      "\n" + responseresultcm.k26 + "  " + responseresultcm.l26 +
      "\n" + responseresultcm.k27 + "  " + responseresultcm.l27 +
      "\n\n" + "  " + "Average annual salary hike %" +
      "\n" + responseresultcm.k30 + "  " + (Number(responseresultcm.l30) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k31 + "  " + (Number(responseresultcm.l31) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k32 + "  " + (Number(responseresultcm.l32) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k33 + "  " + (Number(responseresultcm.l33) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k34 + "  " + (Number(responseresultcm.l34) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k35 + "  " + (Number(responseresultcm.l35) * 100).toFixed(0) + "%" +
      "\n\n" + responseresultcm.k37 + "  " + responseresultcm.l37 +
      "\n\n" + "Internal Salary hike effect" +
      "\n" + "Trend" + "  " + "Elasticity" +
      "\n" + Number(responseresultcm.k41) * 100 + "%" + "  " + responseresultcm.l41 +
      "\n" + (Number(responseresultcm.k42) * 100).toFixed(0) + "%" + "  " + responseresultcm.l42 +
      "\n" + Number(responseresultcm.k43) * 100 + "%" + "  " + responseresultcm.l43 +
      "\n" + Number(responseresultcm.k44) * 100 + "%" + "  " + responseresultcm.l44 +
      "\n" + Number(responseresultcm.k45) * 100 + "%" + "  " + responseresultcm.l45 +
      "\n" + Number(responseresultcm.k46) * 100 + "%" + "  " + responseresultcm.l46 +
      "\n\n" + "  " + "New Entrant Average Hike, %" +
      "\n" + responseresultcm.k49 + "  " + (Number(responseresultcm.l49) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k50 + "  " + (Number(responseresultcm.l50) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k51 + "  " + (Number(responseresultcm.l51) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k52 + "  " + (Number(responseresultcm.l52) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k53 + "  " + (Number(responseresultcm.l53) * 100).toFixed(0) + "%" +
      "\n" + responseresultcm.k54 + "  " + (Number(responseresultcm.l54) * 100).toFixed(0) + "%" +
      "\n\n" + responseresultcm.k56 + "  " + responseresultcm.l56 +
      "\n\n" + "Market New Entrant/job switch hike effect" +
      "\n" + "Trend" + "  " + "Elasticity" +
      "\n" + responseresultcm.k60 + "  " + responseresultcm.l60 +
      "\n" + responseresultcm.k61 + "  " + responseresultcm.l61 +
      "\n" + responseresultcm.k62 + "  " + responseresultcm.l62 +
      "\n" + responseresultcm.k63 + "  " + responseresultcm.l63 +
      "\n" + responseresultcm.k64 + "  " + responseresultcm.l64 +
      "\n\nImplementation" +
      "\n" + "Training Programs" + "  " + "Cost Per Employee, INR" + "  " + "Effectiveness" +
      "\n" + responseresultcm.q7 + "  " + responseresultcm.r7 + "  " + responseresultcm.t7 +
      "\n" + responseresultcm.q8 + "  " + responseresultcm.r8 + "  " + responseresultcm.t8 +
      "\n" + responseresultcm.q9 + "  " + responseresultcm.r9 + "  " + responseresultcm.t9 +
      "\n" + responseresultcm.q10 + "  " + responseresultcm.r10 + "  " + responseresultcm.t10 +
      "\n" + responseresultcm.q11 + "  " + responseresultcm.r11 + "  " + responseresultcm.t11 +
      "\n\n" + "Policies" + "  " + "Cost, INR" + "  " + "Effectiveness" +
      "\n" + responseresultcm.q14 + "  " + responseresultcm.r14 + "  " + responseresultcm.t14 +
      "\n" + responseresultcm.q15 + "  " + responseresultcm.r15 + "  " + responseresultcm.t15 +
      "\n" + responseresultcm.q16 + "  " + responseresultcm.r16 + "  " + responseresultcm.t16 +
      "\n" + responseresultcm.q17 + "  " + responseresultcm.r17 + "  " + responseresultcm.t17 +


      "\n\nPlayer's Input based on the fixed data" +
      "\n" + "Parameters" + "  " + "Input" +
      "\n" + "Sales & Marketing " + "  " + result[0] +
      "\n" + "Logistics & Supply Chain " + "  " + result[1] +
      "\n" + "Design & Production " + "  " + result[2] +
      "\n" + "Technical " + "  " + result[3] +
      "\n" + "Customer Experience " + "  " + result[4] +
      "\n" + "Administration " + "  " + result[5] +
      "\n" + "Online Job Portals " + "  " + result[6] +
      "\n" + "Campus Recruitment " + "  " + result[7] +
      "\n" + "Employee Referral Programs " + "  " + result[8] +
      "\n" + "Social Media and Company Website " + "  " + result[9] +
      "\n" + "Recruitment Agencies and Headhunters " + "  " + result[10] +
      "\n" + "Sales & Marketing, New Joinee Hike % " + "  " + result[11] * 100 + "%" +
      "\n" + "Logistics & Supply Chain, New Joinee Hike % " + "  " + result[12] * 100 + "%" +
      "\n" + "Design & Production, New Joinee Hike % " + "  " + result[13] * 100 + "%" +
      "\n" + "Technical, New Joinee Hike % " + "  " + result[14] * 100 + "%" +
      "\n" + "Customer Experience, New Joinee Hike % " + "  " + result[15] * 100 + "%" +
      "\n" + "Administration, New Joinee Hike % " + "  " + result[16] * 100 + "%" +
      "\n" + "Sales & Marketing, Existing Employee Hike % " + "  " + result[17] * 100 + "%" +
      "\n" + "Logistics & Supply Chain, Existing Employee Hike % " + "  " + result[18] * 100 + "%" +
      "\n" + "Design & Production, Existing Employee Hike % " + "  " + result[19] * 100 + "%" +
      "\n" + "Technical, Existing Employee Hike % " + "  " + result[20] * 100 + "%" +
      "\n" + "Customer Experience, Existing Employee Hike % " + "  " + result[21] * 100 + "%" +
      "\n" + "Administration, Existing Employee Hike % " + "  " + result[22] * 100 + "%" +
      "\n" + "Digital Marketing Mastery " + "  " + result[23] +
      "\n" + "Advanced E-commerce Analytics " + "  " + result[24] +
      "\n" + "Augmented Reality (AR) in Fashion E-commerce " + "  " + result[25] +
      "\n" + "Customer Service Excellence " + "  " + result[26] +
      "\n" + "Sustainable Fashion and Ethical Production " + "  " + result[27] +
      "\n" + "Remote Work Flexibility Policy " + "  " + result[28] +
      "\n" + "Continuous Learning and Development Policy " + "  " + result[29] +
      "\n" + "Comprehensive Health and Wellness Policy " + "  " + result[30] +
      "\n" + "Inclusive and Diverse Hiring Policy " + "  " + result[31] +


      "\n\nSystem generated output based on the player's input " +
      "\nEmployees Count " +
      "\n" + "  " + "  " + "Technical" + "  " + "Sales & Marketing" + "  " + "Logistics & Supply Chain" + "  " + "Design & Production" + "  " + "Customer Support" + "  " + "Administration" +
      "\n" + "Existing employees " + "  " + Number(responseresultdatabase.g73).toFixed(0) + "  " + Number(responseresultdatabase.g74).toFixed(0) + "  " + Number(responseresultdatabase.g75).toFixed(0) + "  " + Number(responseresultdatabase.g76).toFixed(0) + "  " + Number(responseresultdatabase.g77).toFixed(0) + "  " + Number(responseresultdatabase.g78).toFixed(0) +
      "\n" + "New joinees " + "  " + Number(responseresultdatabase.f81).toFixed(0) + "  " + Number(responseresultdatabase.f82).toFixed(0) + "  " + responseresultdatabase.f83 + "  " + Number(responseresultdatabase.f84).toFixed(0) + "  " + responseresultdatabase.f85 + "  " + responseresultdatabase.f86 +
      "\n" + "Contract employees " + "  " + Number(responseresultdatabase.e89).toFixed(0) + "  " + Number(responseresultdatabase.e90).toFixed(0) + "  " + responseresultdatabase.e91.toFixed(0) + "  " + responseresultdatabase.e92.toFixed(0) + "  " + responseresultdatabase.e93.toFixed(0) + "  " + responseresultdatabase.e94.toFixed(0) +
      "\n" + "Total employees " + "  " + responseresultdatabase.h89 + "  " + responseresultdatabase.h90 + "  " + responseresultdatabase.h91 + "  " + responseresultdatabase.h92 + "  " + responseresultdatabase.h93 + "  " + responseresultdatabase.h94 +
      "\n\nCost, K INR " +
      "\nParameter" + "  " + "Output" +
      "\n" + "Incremental salary, existing employees" + "  " + (Number(responseresultdatabase.c114) / 1000).toFixed(0) +
      "\n" + "New hires, salary" + "  " + (Number(responseresultdatabase.c115) / 1000).toFixed(0) +
      "\n" + "Contract employees" + "  " + (Number(responseresultdatabase.c116) / 1000).toFixed(0) +
      "\n" + "Branding " + "  " + (Number(responseresultdatabase.c117) / 1000).toFixed(0) +
      "\n" + "Training " + "  " + (Number(responseresultdatabase.c118) / 1000).toFixed(0) +
      "\n" + "Policies " + "  " + (Number(responseresultdatabase.c119) / 1000).toFixed(0) +
      "\n" + "Total " + "  " + (Number(responseresultdatabase.c120) / 1000).toFixed(0) +
      "\n\nKPI " +
      "\nParameter" + "  " + "Output" +
      "\n" + "Employee Satisfaction Score " + "  " + Number(responseresultdatabase.c99).toFixed(2) +
      "\n" + "Average time to fill position, days " + "  " + Number(responseresultdatabase.c103).toFixed(0) +
      "\n" + "Average efficiency across organization " + "  " + (Number(responseresultdatabase.c124) * 100).toFixed(0) + "%" +
      "\n" + "Employees participation in training  " + "  " + (Number(responseresultdatabase.c112) * 100).toFixed(0) + "%" +
      "\n" + "Cost per employee, k INR " + "  " + Number(responseresultdatabase.c122).toFixed(0) +
      "\n" + "Recruitment metrics  " + "  " + (Number(responseresultdatabase.c128) * 100).toFixed(0) + "%";

    return assesment;

  }

}
