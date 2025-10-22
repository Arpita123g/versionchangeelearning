import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricingassesmentserviceService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm.b5 +
      "\n\n" +
      "Duration" +
      "\n" + responseresultcm.b8 + " " + responseresultcm.c8 +
      "\n" + responseresultcm.b9 + " " + responseresultcm.c9 +
      "\n" + responseresultcm.b10 + " " + responseresultcm.c10 +
      "\n\n" +
      "Initiate" +
      "\n" + responseresultcm.e6 + " " + responseresultcm.f6 +
      "\n" + responseresultcm.e7 + " " + responseresultcm.f7 +
      "\n\n" +
      "Seats Arrangements" + " " + "Seats Distribution" + " " + "Kumar Airlines" + " " + "Jupiter Airlines" +
      "\n" + responseresultcm.e10 + "   " + responseresultcm.g10 + " " + responseresultcm.h10 +
      "\n" + responseresultcm.e11 + " " + (Number(responseresultcm.f11) * 100).toFixed(0) + " " + responseresultcm.g11 + " " + responseresultcm.h11 +
      "\n" + responseresultcm.e12 + " " + (Number(responseresultcm.f12) * 100).toFixed(0) + " " + responseresultcm.g12 + " " + responseresultcm.h12 +
      "\n" + responseresultcm.e13 + " " + (Number(responseresultcm.f13) * 100).toFixed(0) + " " + responseresultcm.g13 + " " + responseresultcm.h13 +
      "\n\n" + responseresultcm.e15 + " " + responseresultcm.f15 +
      "\n" + responseresultcm.e16 + " " + responseresultcm.f16 +
      "\n" + responseresultcm.e17 + " " + responseresultcm.f17 +
      "\n" + responseresultcm.e18 + " " + responseresultcm.f18 +
      "\n" + responseresultcm.e19 + " " + "Meet Aarav Sharma, a 30-year-old marketing professional from Mumbai who " +
      "loves leisure travel. With a middle-income budget, Aarav values experiences and explores destinations two to three " +
      "times a year. He plans well in advance using online platforms, appreciates flight comfort, and is willing to pay " +
      "extra for convenience. Aarav's priorities include excellent customer service, flexible booking, and additional " +
      "services like convenient baggage options. Airlines can enhance the travel experience for leisure travellers like " +
      "Aarav by understanding and addressing these key preferences." +
      "\n" + responseresultcm.e20 + " " + responseresultcm.f20 +
      "\n\nLeisure" +
      "\n" + responseresultcm.e23 + " " + (Number(responseresultcm.f23) * 100).toFixed(0) +
      "\n" + responseresultcm.e24 + " " + (Number(responseresultcm.f24) * 100).toFixed(0) +
      "\n" + responseresultcm.e25 + " " + (Number(responseresultcm.f25) * 100).toFixed(0) +
      "\n" + responseresultcm.e26 + " " + (Number(responseresultcm.f26) * 100).toFixed(0) +
      "\n" + responseresultcm.e27 + " " + (Number(responseresultcm.f27) * 100).toFixed(0) +
      "\n" + responseresultcm.e28 + " " + (Number(responseresultcm.f28) * 100).toFixed(0) +
      "\n" + responseresultcm.e29 + " " + (Number(responseresultcm.f29) * 100).toFixed(0) +
      "\n" + responseresultcm.e30 + " " + (Number(responseresultcm.f30) * 100).toFixed(0) +
      "\n\n" + responseresultcm.e32 + " " + responseresultcm.f32 +
      "\n\n" + responseresultcm.e34 + " " + responseresultcm.f34 +
      "\n" + responseresultcm.e35 + " " + responseresultcm.f35 +
      "\n\n" + "   " + responseresultcm.f37 + " " + responseresultcm.g37 +
      "\n" + responseresultcm.e38 + " " + responseresultcm.f38 + " " + responseresultcm.g38 +
      "\n" + responseresultcm.e39 + " " + responseresultcm.f39 + " " + responseresultcm.g39 +
      "\n\n" + responseresultcm.e41 + " " + responseresultcm.f41 + " " + responseresultcm.g41 +
      "\n" + responseresultcm.e42 + " " + (Number(responseresultcm.f42) * 100).toFixed(0) + " " + (Number(responseresultcm.g42) * 100).toFixed(0) +
      "\n" + responseresultcm.e43 + " " + (Number(responseresultcm.f43) * 100).toFixed(0) + " " + (Number(responseresultcm.g43) * 100).toFixed(0) +
      "\n" + responseresultcm.e44 + " " + (Number(responseresultcm.f44) * 100).toFixed(0) + " " + (Number(responseresultcm.g44) * 100).toFixed(0) +
      "\n" + responseresultcm.e45 + " " + (Number(responseresultcm.f45) * 100).toFixed(0) + " " + (Number(responseresultcm.g45) * 100).toFixed(0) +
      "\n" + responseresultcm.e46 + " " + (Number(responseresultcm.f46) * 100).toFixed(0) + " " + (Number(responseresultcm.g46) * 100).toFixed(0) +
      "\n" + responseresultcm.e47 + " " + (Number(responseresultcm.f47) * 100).toFixed(0) + " " + (Number(responseresultcm.g47) * 100).toFixed(0) +
      "\n" + responseresultcm.e48 + " " + (Number(responseresultcm.f48) * 100).toFixed(0) + " " + (Number(responseresultcm.g48) * 100).toFixed(0) +
      "\n\nInnovate" +
      "\n\n" + responseresultcm.j6 + " " + responseresultcm.k6 + " " + responseresultcm.l6 + " " + responseresultcm.m6 + " " + responseresultcm.n6 +
      "\n" + responseresultcm.j7 + " " + responseresultcm.k7 + " " + responseresultcm.l7 + " " + "Elevate" +
      "your in-flight experience with our delectable sandwich meal, carefully crafted to tantalize your taste buds. " +
      "A consumer enjoys a gourmet treat that adds a touch of culinary delight to their journey, attracting passengers " +
      "seeking an enhanced and satisfying travel experience." + " " + (Number(responseresultcm.n7) * 100).toFixed(0) +
      "\n" + responseresultcm.j8 + " " + responseresultcm.k8 + " " + responseresultcm.l8 + " " + "Provide " +
      "control of travel plans with our flexible booking option. This service caters to passengers who value the freedom " +
      "to make changes without the hassle, appealing to those seeking peace of mind and adaptability in their journey " +
      "arrangements." + " " + (Number(responseresultcm.n8) * 100).toFixed(0) +
      "\n" + responseresultcm.j9 + " " + responseresultcm.k9 + " " + responseresultcm.l9 + " " + "A reason" +
      "for consumers to pack without worries and bring more on board with our additional baggage service. Ideal for" +
      "passengers who prioritize convenience and want the flexibility to carry extra belongings, this service enhances" +
      "the travel experience for those with specific luggage needs." + " " + (Number(responseresultcm.n9 * 100).toFixed(0)) +
      "\n\n" + responseresultcm.j11 + " " + responseresultcm.k11 +
      "\n\nAdapt" +
      "\nLeisure + Business" +
      "\n" + responseresultcm.p7 + " " + (Number(responseresultcm.q7) * 100).toFixed(0) +
      "\n" + responseresultcm.p8 + " " + (Number(responseresultcm.q8) * 100).toFixed(0) +
      "\n" + responseresultcm.p9 + " " + (Number(responseresultcm.q9) * 100).toFixed(0) +
      "\n" + responseresultcm.p10 + " " + (Number(responseresultcm.q10) * 100).toFixed(0) +
      "\n" + responseresultcm.p11 + " " + (Number(responseresultcm.q11) * 100).toFixed(0) +
      "\n" + responseresultcm.p12 + " " + (Number(responseresultcm.q12) * 100).toFixed(0) +
      "\n" + responseresultcm.p13 + " " + (Number(responseresultcm.q13) * 100).toFixed(0) +
      "\n" + responseresultcm.p14 + " " + (Number(responseresultcm.q14) * 100).toFixed(0) +
      "\n\n" + responseresultcm.p16 + " " + responseresultcm.q16 + " " + responseresultcm.r16 + " " + responseresultcm.s16 +
      "\n" + responseresultcm.p17 + " " + responseresultcm.q17 + " " + responseresultcm.r17 + " " + "SkyVista " +
      "Airways is set to roll out an enticing Fare Sales and Discounts campaign, offering passengers limited-time " +
      "discounts on this route. This initiative aims to capture attention through strategic marketing and create a sense " +
      "of urgency, attracting budget-conscious travellers looking for cost-effective options. By providing accessible " +
      "pricing for a short period, SkyVista seeks to stimulate demand and entice a diverse range of passengers to " +
      "choose their airline for their next journey." +
      "\n" + responseresultcm.p18 + " " + responseresultcm.q18 + " " + responseresultcm.r18 + " " + "In a " +
      "bid to enhance passenger loyalty, SkyVista Airways is introducing a comprehensive Frequent Flyer Program. " +
      "Passengers enrolling in this program will accumulate points with each flight, redeemable for future travel or " +
      "exclusive perks. This initiative targets travellers seeking long-term benefits, and establishing a lasting " +
      "connection with the airline. By offering a rewarding system, SkyVista aims to attract and retain a loyal " +
      "customer base, encouraging repeat business and fostering a sense of brand affinity." +
      "\n" + responseresultcm.p19 + " " + responseresultcm.q19 + " " + responseresultcm.r19 + " " + "SkyVista " +
      "Airways is strategically forming Partnerships and Alliances with leading hotels, car rental companies, and " +
      "service providers. Through these collaborations, passengers will enjoy exclusive benefits, bundled deals, and " +
      "a seamless travel experience. This initiative is designed to broaden the airline's appeal, attracting consumers " +
      "who value-added convenience and a comprehensive travel package. By offering a range of integrated services, " +
      "SkyVista aims to stand out in the market and create a compelling value proposition for its passengers." +
      "\n\n" + responseresultcm.p21 + " " + responseresultcm.q21 +


      "\n\nPlayer's Input based on the information" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Initiate" +
      "\n" + "Price per seat, INR" + " " + result[0] +
      "\n" + "Innovate" +
      "\n" + "Price per seat, INR" + " " + result[1] +
      "\n" + "Service offered to flyer" + " " + result[2] +
      "\n" + "Adapt" +
      "\n" + "Price per seat, INR" + " " + result[3] +
      "\n" + "Service offered to flyer" + " " + result[4] +
      "\n" + "Promotion offered" + " " + result[5] +


      "\n\n" + "System generated output based on player's input" +
      "\nPrice across period, INR" +
      "\n" + "Parameter" + " " + "SkyVista" + " " + "Jupiter" +
      "\n" + "Initiate" + " " + responseresultdatabase.c12 + " " + responseresultdatabase.d12 +
      "\n" + "Innovate" + " " + responseresultdatabase.c26 + " " + responseresultdatabase.d26 +
      "\n" + "Adapt" + " " + responseresultdatabase.c49 + " " + responseresultdatabase.d49 +
      "\n" + "Average pricing" + " " + responseresultdatabase.c63 + " " + responseresultdatabase.d63 +
      "\n\n" + "Sales across period" +
      "\n" + "Parameter" + " " + "SkyVista" + " " + "Jupiter" +
      "\n" + "Initiate" + " " + responseresultdatabase.g53 + " " + responseresultdatabase.h53 +
      "\n" + "Innovate" + " " + responseresultdatabase.g58 + " " + responseresultdatabase.h58 +
      "\n" + "Adapt" + " " + responseresultdatabase.g63 + " " + responseresultdatabase.h63 +
      "\n" + "Total sales" + " " + responseresultdatabase.g65 + " " + responseresultdatabase.h65 +
      "\n\n" + "Income Statement, INR" +
      "\n" + "Parameter" + " " + "SkyVista" + " " + "Jupiter" +
      "\n" + "Revenue" + " " + responseresultdatabase.c67 + " " + responseresultdatabase.d67 +
      "\n" + "Variable cost" + " " + responseresultdatabase.c68 + " " + responseresultdatabase.d68 +
      "\n" + "Gross profit" + " " + responseresultdatabase.c69 + " " + responseresultdatabase.d69 +
      "\n" + "Fixed cost" + " " + responseresultdatabase.c70 + " " + responseresultdatabase.d70 +
      "\n" + "Promotion cost" + " " + responseresultdatabase.c71 + " " + responseresultdatabase.d71 +
      "\n" + "Operating Profit/Loss" + " " + responseresultdatabase.c72 + " " + responseresultdatabase.d72 +
      "\n\n" + "KPI" +
      "\n" + "Parameter" + " " + "SkyVista" + " " + "Jupiter" +
      "\n" + "Unutilized capacity %" + " " + (Number(responseresultdatabase.c74) * 100).toFixed(0) + "%" + " " + (Number(responseresultdatabase.d74) * 100).toFixed(0) + "%" +
      "\n" + "Margin %" + " " + (Number(responseresultdatabase.c75) * 100).toFixed(0) + "%" + " " + (Number(responseresultdatabase.d75) * 100).toFixed(0) + "%" +
      "\n" + "Cancellation Rate %" + " " + (Number(responseresultdatabase.g66) * 100).toFixed(0) + "%" + " " + (Number(responseresultdatabase.h66) * 100).toFixed(0) + "%";

    return assesment;
  }
}
