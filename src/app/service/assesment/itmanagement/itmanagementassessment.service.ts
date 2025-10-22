import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItmanagementassessmentService {

  constructor() { }

  resultString: string = '';
  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {

    let assesment = "\n\nFixed Data" +
      "\n\nMarket Outlook" +
      "\n" + responseresultcm.b5 +
      "\n\nParameters" +
      "\n" + responseresultcm.b8 + "  " + responseresultcm.c8 +
      "\n" + responseresultcm.b9 + "  " + responseresultcm.c9 +
      "\n" + responseresultcm.b10 + "  " + responseresultcm.c10 +
      "\n" + responseresultcm.b11 + "  " + responseresultcm.c11 +
      "\n\nSystem Architecture" +
      "\n\nServers" +
      "\nName" + "  " + "Description" +
      "\n" + responseresultcm.e8 + "  " + "Cloud servers are virtualized servers hosted and managed by a third-party " +
      "Cloud service provider. They offer scalability, flexibility, and cost-effectiveness, allowing organizations " +
      "to quickly provision resources on-demand and pay only for what They use. With Cloud servers, businesses can " +
      "access a wide range of services and features, such as automated backups, security monitoring, and global " +
      "scalability, without the need for upfront investments in hardware or infrastructure maintenance." +
      "  " + responseresultcm.g8 +
      "\n" + responseresultcm.e9 + "  " + "On-premise servers are physical servers that are owned, operated, " +
      "and maintained by the organization within their own facilities, such as data centers or server rooms. " +
      "They provide full control over infrastructure and data, ensuring compliance with regulatory requirements and " +
      "data sovereignty concerns. On-premise servers offer high performance and low latency, making them suitable for " +
      "applications with stringent performance requirements or sensitive data processing needs. However, they require " +
      "upfront investments in hardware, maintenance, and operational overhead." + "  " + responseresultcm.g9 +
      "\n\nOn-Premise Servers" + "  " + "User Handling, daily transactions" + "  " + "Uptime" + "  " + "Yearly Cost, INR" +
      "  " + "Maintenance Cost, yearly" + "  " + "Renewal Period, year" +
      "\n" + responseresultcm.e12 + "  " + responseresultcm.g12 + "  " + responseresultcm.h12 + "  " + responseresultcm.i12 + "  " + responseresultcm.j12 + "  " + responseresultcm.k12 +
      "\n" + responseresultcm.e13 + "  " + responseresultcm.g13 + "  " + responseresultcm.h13 + "  " + responseresultcm.i13 + "  " + responseresultcm.j13 + "  " + responseresultcm.k13 +
      "\n" + responseresultcm.e14 + "  " + responseresultcm.g14 + "  " + responseresultcm.h14 + "  " + responseresultcm.i14 + "  " + responseresultcm.j14 + "  " + responseresultcm.k14 +
      "\n" + responseresultcm.e15 + "  " + responseresultcm.g15 + "  " + responseresultcm.h15 + "  " + responseresultcm.i15 + "  " + responseresultcm.j15 + "  " + responseresultcm.k15 +
      "\n\nCloud Servers" + "  " + "User Handling, daily transactions" + "  " + "Uptime" + "  " + "One-time Cost, INR" +
      "  " + "Maintenance Cost, yearly" + "  " + "Renewal Period, year" +
      "\n" + responseresultcm.e18 + "  " + responseresultcm.g18 + "  " + responseresultcm.h18 + "  " + responseresultcm.i18 + "  " + responseresultcm.j18 + "  " + responseresultcm.k18 +
      "\n" + responseresultcm.e19 + "  " + responseresultcm.g19 + "  " + responseresultcm.h19 + "  " + responseresultcm.i19 + "  " + responseresultcm.j19 + "  " + responseresultcm.k19 +
      "\n" + responseresultcm.e20 + "  " + responseresultcm.g20 + "  " + responseresultcm.h20 + "  " + responseresultcm.i20 + "  " + responseresultcm.j20 + "  " + responseresultcm.k20 +
      "\n" + responseresultcm.e21 + "  " + responseresultcm.g21 + "  " + responseresultcm.h21 + "  " + responseresultcm.i21 + "  " + responseresultcm.j21 + "  " + responseresultcm.k21 +
      "\n\nNetwork" +
      "\n\nOn-Premise Servers" + "  " + "Cost, INR" + "  " + "Performance Enhancement" + "  " + "Security Enchancement" +
      "  " + "Maintenance Cost, yearly" + "  " + "Renewal Period, year" +
      "\n" + responseresultcm.e26 + "  " + responseresultcm.g26 + "  " + responseresultcm.h26 + "  " + responseresultcm.i26 + "  " + responseresultcm.j26 + "  " + responseresultcm.k26 +
      "\n" + responseresultcm.e27 + "  " + responseresultcm.g27 + "  " + responseresultcm.h27 + "  " + responseresultcm.i27 + "  " + responseresultcm.j27 + "  " + responseresultcm.k27 +
      "\n" + responseresultcm.e28 + "  " + responseresultcm.g28 + "  " + responseresultcm.h28 + "  " + responseresultcm.i28 + "  " + responseresultcm.j28 + "  " + responseresultcm.k28 +
      "\n\nCloud Servers" + "  " + "Cost, INR" + "  " + "Performance Enhancement" + "  " + "Security Enchancement" +
      "  " + "Maintenance Cost, yearly" + "  " + "Renewal Period, year" +
      "\n" + responseresultcm.e31 + "  " + responseresultcm.g31 + "  " + responseresultcm.h31 + "  " + responseresultcm.i31 + "  " + responseresultcm.j31 + "  " + responseresultcm.k31 +
      "\n" + responseresultcm.e32 + "  " + responseresultcm.g32 + "  " + responseresultcm.h32 + "  " + responseresultcm.i32 + "  " + responseresultcm.j32 + "  " + responseresultcm.k32 +
      "\n" + responseresultcm.e33 + "  " + responseresultcm.g33 + "  " + responseresultcm.h33 + "  " + responseresultcm.i33 + "  " + responseresultcm.j33 + "  " + responseresultcm.k33 +
      "\n\nDatabase" +
      "\n\n" + responseresultcm.e37 + "  " + responseresultcm.f37 +
      "\n\nCloud Servers" + "  " + "Cost per GB, INR" + "  " + "Maintenance Cost, yearly" + "  " + "Performance Enchancement" +
      "  " + "Security Enhancement" + "  " + "Renewal Period dummy" +
      "\n" + responseresultcm.e40 + "  " + responseresultcm.g40 + "  " + responseresultcm.h40 + "  " + responseresultcm.i40 + "  " + responseresultcm.j40 + "  " + responseresultcm.k40 +
      "\n" + responseresultcm.e41 + "  " + responseresultcm.g41 + "  " + responseresultcm.h41 + "  " + responseresultcm.i41 + "  " + responseresultcm.j41 + "  " + responseresultcm.k41 +
      "\n" + responseresultcm.e42 + "  " + responseresultcm.g42 + "  " + responseresultcm.h42 + "  " + responseresultcm.i42 + "  " + responseresultcm.j42 + "  " + responseresultcm.k42 +
      "\n\nOn-Premise Servers" + "  " + "Cost per GB, INR" + "  " + "Maintenance Cost, yearly" + "  " + "Performance Enchancement" +
      "  " + "Security Enhancement" + "  " + "Renewal Period dummy" +
      "\n" + responseresultcm.e45 + "  " + responseresultcm.g45 + "  " + responseresultcm.h45 + "  " + responseresultcm.i45 + "  " + responseresultcm.j45 + "  " + responseresultcm.k45 +
      "\n" + responseresultcm.e46 + "  " + responseresultcm.g46 + "  " + responseresultcm.h46 + "  " + responseresultcm.i46 + "  " + responseresultcm.j46 + "  " + responseresultcm.k46 +
      "\n" + responseresultcm.e47 + "  " + responseresultcm.g47 + "  " + responseresultcm.h47 + "  " + responseresultcm.i47 + "  " + responseresultcm.j47 + "  " + responseresultcm.k47 +
      "\n\nScalability & Performance Optimization" +
      "\n\nNames" + "  " + "Expected Cost, INR" + "  " + "Performance Optimization" +
      "\n" + responseresultcm.e52 + "  " + responseresultcm.g52 + "  " + responseresultcm.h52 +
      "\n" + responseresultcm.e53 + "  " + responseresultcm.g53 + "  " + responseresultcm.h53 +
      "\n" + responseresultcm.e54 + "  " + responseresultcm.g54 + "  " + responseresultcm.h54 +
      "\n" + responseresultcm.e55 + "  " + responseresultcm.g55 + "  " + responseresultcm.h55 +
      "\n\n" + responseresultcm.e57 + "  " + responseresultcm.f57 +
      "\n\nSoftware Development" +
      "\n\nDecision Factor" + "  " + "Custom Platform" + "  " + "Off-the-Shelf Platform" +
      "\n" + responseresultcm.m7 + "  " + responseresultcm.n7 + "  " + responseresultcm.o7 +
      "\n" + responseresultcm.m8 + "  " + responseresultcm.n8 + "  " + responseresultcm.o8 +
      "\n" + responseresultcm.m9 + "  " + responseresultcm.n9 + "  " + responseresultcm.o9 +
      "\n" + responseresultcm.m10 + "  " + responseresultcm.n10 + "  " + responseresultcm.o10 +
      "\n" + responseresultcm.m11 + "  " + responseresultcm.n11 + "  " + responseresultcm.o11 +
      "\n" + responseresultcm.m12 + "  " + responseresultcm.n12 + "  " + responseresultcm.o12 +
      "\n" + responseresultcm.m13 + "  " + responseresultcm.n13 + "  " + responseresultcm.o13 +
      "\n" + responseresultcm.m14 + "  " + responseresultcm.n14 + "  " + responseresultcm.o14 +
      "\n" + responseresultcm.m15 + "  " + responseresultcm.n15 + "  " + responseresultcm.o15 +
      "\n\nMethods" +
      "\n\nName" + "  " + "Time Uncertainty" + "  " + "Risk Uncertainty" + "  " + "Time Uncertainty" + "  " + "Risk Uncertainty" +
      "\n" + responseresultcm.m20 + "  " + responseresultcm.o20 + "  " + responseresultcm.p20 + "  " + responseresultcm.q20 + "  " + responseresultcm.r20 +
      "\n" + responseresultcm.m21 + "  " + responseresultcm.o21 + "  " + responseresultcm.p21 + "  " + responseresultcm.q21 + "  " + responseresultcm.r21 +
      "\n" + responseresultcm.m22 + "  " + responseresultcm.o22 + "  " + responseresultcm.p22 + "  " + responseresultcm.q22 + "  " + responseresultcm.r22 +
      "\n\nVersion Control" +
      "\n\nName" + "  " + "Performance" +
      "\n" + responseresultcm.m27 + "  " + responseresultcm.o27 +
      "\n" + responseresultcm.m28 + "  " + responseresultcm.o28 +
      "\n" + responseresultcm.m29 + "  " + responseresultcm.o29 +
      "\n\nSecurity" +
      "\n\nCompliances" +
      "\n\nName" + "  " + "Cost, INR" + "  " + "Time, months" + "  " + "Effectiveness" + "  " + "Risk" +
      "\n" + responseresultcm.t9 + "  " + responseresultcm.v9 + "  " + responseresultcm.w9 + "  " + responseresultcm.x9 + "  " + responseresultcm.y9 +
      "\n" + responseresultcm.t10 + "  " + responseresultcm.v10 + "  " + responseresultcm.w10 + "  " + responseresultcm.x10 + "  " + responseresultcm.y10 +
      "\n" + responseresultcm.t11 + "  " + responseresultcm.v11 + "  " + responseresultcm.w11 + "  " + responseresultcm.x11 + "  " + responseresultcm.y11 +
      "\n" + responseresultcm.t12 + "  " + responseresultcm.v12 + "  " + responseresultcm.w12 + "  " + responseresultcm.x12 + "  " + responseresultcm.y12 +
      "\n" + responseresultcm.t13 + "  " + responseresultcm.v13 + "  " + responseresultcm.w13 + "  " + responseresultcm.x13 + "  " + responseresultcm.y13 +
      "\n\nSystems" +
      "\n\nName" + "  " + "Cost, INR" + "  " + "Effectiveness" + "  " + "Risk" + "  " + "Time, months" +
      "\n" + responseresultcm.t18 + "  " + responseresultcm.v18 + "  " + responseresultcm.w18 + "  " + responseresultcm.x18 + "  " + responseresultcm.y18 +
      "\n" + responseresultcm.t19 + "  " + responseresultcm.v19 + "  " + responseresultcm.w19 + "  " + responseresultcm.x19 + "  " + responseresultcm.y19 +
      "\n" + responseresultcm.t20 + "  " + responseresultcm.v20 + "  " + responseresultcm.w20 + "  " + responseresultcm.x20 + "  " + responseresultcm.y20 +
      "\n" + responseresultcm.t21 + "  " + responseresultcm.v21 + "  " + responseresultcm.w21 + "  " + responseresultcm.x21 + "  " + responseresultcm.y21 +
      "\n" + responseresultcm.t22 + "  " + responseresultcm.v22 + "  " + responseresultcm.w22 + "  " + responseresultcm.x22 + "  " + responseresultcm.y22 +
      "\n\nInnovation" +
      "\n\nRoadmap" +
      "\n\nName" + "  " + "R&D Cost, INR" + "  " + "Development Time, months" + "  " + "Feasibility" + "  " + "Effectiveness" +
      "\n" + responseresultcm.aa9 + "  " + responseresultcm.ac9 + "  " + responseresultcm.ad9 + "  " + responseresultcm.ae9 + "  " + responseresultcm.af9 +
      "\n" + responseresultcm.aa10 + "  " + responseresultcm.ac10 + "  " + responseresultcm.ad10 + "  " + responseresultcm.ae10 + "  " + responseresultcm.af10 +
      "\n" + responseresultcm.aa11 + "  " + responseresultcm.ac11 + "  " + responseresultcm.ad11 + "  " + responseresultcm.ae11 + "  " + responseresultcm.af11 +
      "\n" + responseresultcm.aa12 + "  " + responseresultcm.ac12 + "  " + responseresultcm.ad12 + "  " + responseresultcm.ae12 + "  " + responseresultcm.af12 +
      "\n" + responseresultcm.aa13 + "  " + responseresultcm.ac13 + "  " + responseresultcm.ad13 + "  " + responseresultcm.ae13 + "  " + responseresultcm.af13 +
      "\n\nPilot Projects" +
      "\n\nName" + "  " + "Cost, INR" + "  " + "Development Time, months" + "  " + "Effectiveness" +
      "\n" + responseresultcm.aa18 + "  " + responseresultcm.ac18 + "  " + responseresultcm.ad18 + "  " + responseresultcm.ae18 +
      "\n" + responseresultcm.aa19 + "  " + responseresultcm.ac19 + "  " + responseresultcm.ad19 + "  " + responseresultcm.ae19 +
      "\n" + responseresultcm.aa20 + "  " + responseresultcm.ac20 + "  " + responseresultcm.ad20 + "  " + responseresultcm.ae20 +
      "\n\nContinous Improvements" +
      "\n\nName" + "  " + "Cost, INR" + "  " + "Effectiveness" +
      "\n" + responseresultcm.aa25 + "  " + responseresultcm.ac25 + "  " + responseresultcm.ad25 +
      "\n" + responseresultcm.aa26 + "  " + responseresultcm.ac26 + "  " + responseresultcm.ad26 +
      "\n" + responseresultcm.aa27 + "  " + responseresultcm.ac27 + "  " + responseresultcm.ad27 +
      "\n" + responseresultcm.aa28 + "  " + responseresultcm.ac28 + "  " + responseresultcm.ad28 +
      "\n\nTraining & Development" +
      "\n\nName" + "  " + "Cost, INR" + "  " + "Effectiveness" +
      "\n" + responseresultcm.aa33 + "  " + responseresultcm.ac33 + "  " + responseresultcm.ad33 +
      "\n" + responseresultcm.aa34 + "  " + responseresultcm.ac34 + "  " + responseresultcm.ad34 +
      "\n" + responseresultcm.aa34 + "  " + responseresultcm.ac35 + "  " + responseresultcm.ad35 +
      "\n\n" + responseresultcm.aa37 + "  " + responseresultcm.ab37 +
      "\n" + responseresultcm.aa38 + "  " + responseresultcm.ab38 +


      "\n\nPlayer's Input Decision Making" +
      "\n\nParameter" + "  " + "Input" +
      "\n" + "Server Type" + "  " + result[0] +
      "\n" + "Server Selection" + "  " + result[1] +
      "\n" + "Network Management" + "  " + result[2] +
      "\n" + "Data Storage Capacity, GB" + "  " + result[3] +
      "\n" + "Data Management" + "  " + result[4] +
      "\n" + result[5] + "  " + (result[6] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[7] + "  " + (result[8] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[9] + "  " + (result[10] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[11] + "  " + (result[12] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + "Development Model" + "  " + result[13] +
      "\n" + "Method & Lifecycle Management" + "  " + result[14] +
      "\n" + "Version Control" + "  " + result[15] +
      "\n" + result[16] + "  " + (result[17] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[18] + "  " + (result[19] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[20] + "  " + (result[21] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[22] + "  " + (result[23] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[24] + "  " + (result[25] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[26] + "  " + (result[27] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[28] + "  " + (result[29] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[30] + "  " + (result[31] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[32] + "  " + (result[33] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[34] + "  " + (result[35] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + "Roadmap" + "  " + result[36] +
      "\n" + result[37] + "  " + (result[38] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[39] + "  " + (result[40] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[41] + "  " + (result[42] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + "Continous Improvements" + "  " + result[43] +
      "\n" + result[44] + "  " + (result[45] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[46] + "  " + (result[47] === 1 ? "Implemented" : "Not Implemented") +
      "\n" + result[48] + "  " + (result[49] === 1 ? "Implemented" : "Not Implemented") +


      "\n\nOutput System Generated based on Player's Input" +
      "\n\nSystem Architecture Cost, INR" +
      "\n" + "Parameter" + "  " + "Y1" + "  " + "Y2 (P)" + "  " + "Y3 (P)" +
      "\n" + "Server" + "  " + responseresultdatabase.n15 + "  " + responseresultdatabase.o15 + "  " + responseresultdatabase.p15 +
      "\n" + "Network Equipment" + "  " + responseresultdatabase.n16 + "  " + responseresultdatabase.o16 + "  " + responseresultdatabase.p16 +
      "\n" + "Database" + "  " + responseresultdatabase.n17 + "  " + responseresultdatabase.o17 + "  " + Number(responseresultdatabase.p17).toFixed(0) +
      "\n" + "Total Cost" + "  " + responseresultdatabase.n18 + "  " + responseresultdatabase.o18 + "  " + Number(responseresultdatabase.p18).toFixed(0) +
      "\n\nData Storage Capacity" +
      "\n" + "Parameter" + "  " + "Y1" + "  " + "Y2 (P)" + "  " + "Y3 (P)" +
      "\n" + "Daily Transaction" + "  " + responseresultdatabase.m4 + "  " + responseresultdatabase.n4 + "  " + responseresultdatabase.o4 +
      "\n" + "Required Capacity, GB" + "  " + responseresultdatabase.m7 + "  " + responseresultdatabase.n7 + "  " + Number(responseresultdatabase.o7).toFixed(0) +
      "\n\nDevelopment & Other Cost, INR" +
      "\n" + "Parameter" + "  " + "Y1" + "  " +
      "\n" + responseresultdatabase.l21 + "  " + responseresultdatabase.m21 +
      "\n" + responseresultdatabase.l22 + "  " + responseresultdatabase.m22 +
      "\n" + responseresultdatabase.l23 + "  " + responseresultdatabase.m23 +
      "\n" + responseresultdatabase.l24 + "  " + responseresultdatabase.m24 +
      "\n" + responseresultdatabase.l25 + "  " + responseresultdatabase.m25 +
      "\n" + responseresultdatabase.l26 + "  " + responseresultdatabase.m26 +
      "\n" + responseresultdatabase.l27 + "  " + responseresultdatabase.m27 +
      "\n" + responseresultdatabase.l28 + "  " + responseresultdatabase.m28 +
      "\n" + "Total Cost" + "  " + responseresultdatabase.m29 +
      "\n\nProjected Value Earned, INR" +
      "\n" + "Parameter" + "  " + "Y1" + "  " + "Y2 (P)" + "  " + "Y3 (P)" +
      "\n" + "Value Earned, INR" + "  " + responseresultdatabase.m60 + "  " + responseresultdatabase.n60 + "  " + responseresultdatabase.o60 +
      "\n" + "Tech Cost, INR" + "  " + responseresultdatabase.m61 + "  " + Number(responseresultdatabase.n61).toFixed(0) + "  " + Number(responseresultdatabase.o61).toFixed(0) +
      "\n\nKPI" +
      "\n" + "Parameter" + "  " + "Output" +
      "\n" + "Uptime %" + "  " + (Number(responseresultdatabase.m30) * 100).toFixed(0) + "%" +
      "\n" + "Daily transaction handling capacity" + "  " + responseresultdatabase.m31 +
      "\n" + "Compliance timeline, months" + "  " + responseresultdatabase.q45 +
      "\n" + "Minimum development time, months" + "  " + Number(responseresultdatabase.q43).toFixed(0) +
      "\n" + "Maximum development time, months" + "  " + Number(responseresultdatabase.q42).toFixed(0) +
      "\n" + "Performance %" + "  " + (Number(responseresultdatabase.m56) * 100).toFixed(0) + "%" +
      "\n" + "Security %" + "  " + (Number(responseresultdatabase.n56) * 100).toFixed(0) + "%"+
      "\n\n" +
      "Goal to be optimized" +
      "\n"+"Uptime" + " " + responseresultcm.ab41  +
      "\n"+"Security" + " " + responseresultcm.ab42 +
      "\n"+"Performance" + " " + responseresultcm.ab43;
    return assesment;
  }
}
