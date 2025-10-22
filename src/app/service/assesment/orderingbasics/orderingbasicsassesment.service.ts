import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderingbasicsassesmentService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMarket Outlook" +
      "\n" + responseresultcm.b5 +
      "\n\nPhase 1" +
      "\n\n" + responseresultcm.d6 +
      "\n\n" + "In a stable economic scenario, our raw material cost is fixed at INR 100 per unit and our holding " +
      "cost is 20% of the raw material cost. Your role includes developing efficient reorder and order quantity " +
      "strategies based on sales trends and customer demand. Our research team offers extrapolated data for 52 " +
      "weeks and key metrics after negotiation like ordering cost, holding cost, stockout cost, and back ordering " +
      "cost to guide decision-making." + " " + responseresultcm.e7 +
      "\n\nCost Parameters" +
      "\n" + responseresultcm.d10 + "  " + responseresultcm.e10 +
      "\n" + responseresultcm.d11 + "  " + responseresultcm.e11 +
      "\n" + responseresultcm.d12 + "  " + responseresultcm.e12 +
      "\n" + responseresultcm.d13 + "  " + responseresultcm.e13 +
      "\n" + responseresultcm.d14 + "  " + (Number(responseresultcm.e14) * 100).toFixed(0) + "%" +
      "\n\nDemand Table" +
      "\n" + responseresultcm.d17 + "  " + responseresultcm.e17 + "  " + responseresultcm.f17 + "  " + responseresultcm.g17 +
      "\n" + responseresultcm.d18 + "  " + responseresultcm.e18 + "  " + responseresultcm.f18 + "  " + responseresultcm.g18 +
      "\n" + responseresultcm.d19 + "  " + responseresultcm.e19 + "  " + responseresultcm.f19 + "  " + responseresultcm.g19 +
      "\n" + responseresultcm.d20 + "  " + responseresultcm.e20 + "  " + responseresultcm.f20 + "  " + responseresultcm.g20 +
      "\n" + responseresultcm.d21 + "  " + responseresultcm.e21 + "  " + responseresultcm.f21 + "  " + responseresultcm.g21 +
      "\n" + responseresultcm.d22 + "  " + responseresultcm.e22 + "  " + responseresultcm.f22 + "  " + responseresultcm.g22 +
      "\n" + responseresultcm.d23 + "  " + responseresultcm.e23 + "  " + responseresultcm.f23 + "  " + responseresultcm.g23 +
      "\n" + responseresultcm.d24 + "  " + responseresultcm.e24 + "  " + responseresultcm.f24 + "  " + responseresultcm.g24 +
      "\n\nLead Table" +
      "\n" + responseresultcm.d27 + "  " + responseresultcm.e27 + "  " + responseresultcm.f27 + "  " + responseresultcm.g27 +
      "\n" + responseresultcm.d28 + "  " + responseresultcm.e28 + "  " + responseresultcm.f28 + "  " + responseresultcm.g28 +
      "\n" + responseresultcm.d29 + "  " + responseresultcm.e29 + "  " + responseresultcm.f29 + "  " + responseresultcm.g29 +
      "\n" + responseresultcm.d30 + "  " + responseresultcm.e30 + "  " + responseresultcm.f30 + "  " + responseresultcm.g30 +
      "\n" + responseresultcm.d31 + "  " + responseresultcm.e31 + "  " + responseresultcm.f31 + "  " + responseresultcm.g31 +
      "\n" + responseresultcm.d32 + "  " + responseresultcm.e32 + "  " + responseresultcm.f32 + "  " + responseresultcm.g32 +
      "\n" + responseresultcm.d33 + "  " + responseresultcm.e33 + "  " + responseresultcm.f33 + "  " + responseresultcm.g33 +
      "\n\n" + responseresultcm.d35 + "  " + responseresultcm.e35 +
      "\n\n" + responseresultcm.d37 + "  " + responseresultcm.e37 +
      "\n\nPhase 2" +
      "\n\n" + responseresultcm.i6 +
      "\n" + "The company have prioritized cost optimization for business, securing quantity discounts from " +
      "suppliers to cut raw material expenses. These discounts offer rates of Rs. 90 for orders of 250 or less, " +
      "Rs. 85 for 251 to 350, and Rs. 80 for orders above 350. Additionally, anticipating a 20% rise in demand " +
      "for our planter product, our supplier has agreed to shorten lead times by two weeks. This positions us " +
      "well to meet increased demand promptly. With these opportunities in mind, we urge thoughtful decision-making " +
      "to align with our business goals." + " " + responseresultcm.j7 +
      "\n\nCost Metrics" +
      "\n" + responseresultcm.i10 + "  " + responseresultcm.j10 +
      "\n" + responseresultcm.i11 + "  " + responseresultcm.j11 +
      "\n" + responseresultcm.i12 + "  " + responseresultcm.j12 +
      "\n\nRaw Material Cost" +
      "\n" + responseresultcm.i15 + " " + responseresultcm.j15 + " " + responseresultcm.k15 +
      "\n" + responseresultcm.i16 + " " + responseresultcm.j16 + " " + responseresultcm.k16 +
      "\n" + responseresultcm.i17 + " " + responseresultcm.j17 + " " + responseresultcm.k17 +
      "\n" + responseresultcm.i18 + " " + responseresultcm.j18 + " " + responseresultcm.k18 +
      "\n\nDemand Table" +
      "\n" + responseresultcm.i21 + " " + responseresultcm.j21 + " " + responseresultcm.k21 + " " + responseresultcm.l21 +
      "\n" + responseresultcm.i22 + " " + responseresultcm.j22 + " " + responseresultcm.k22 + " " + responseresultcm.l22 +
      "\n" + responseresultcm.i23 + " " + responseresultcm.j23 + " " + responseresultcm.k23 + " " + responseresultcm.l23 +
      "\n" + responseresultcm.i24 + " " + responseresultcm.j24 + " " + responseresultcm.k24 + " " + responseresultcm.l24 +
      "\n" + responseresultcm.i25 + " " + responseresultcm.j25 + " " + responseresultcm.k25 + " " + responseresultcm.l25 +
      "\n" + responseresultcm.i26 + " " + responseresultcm.j26 + " " + responseresultcm.k26 + " " + responseresultcm.l26 +
      "\n" + responseresultcm.i27 + " " + responseresultcm.j27 + " " + responseresultcm.k27 + " " + responseresultcm.l27 +
      "\n" + responseresultcm.i28 + " " + responseresultcm.j28 + " " + responseresultcm.k28 + " " + responseresultcm.l28 +
      "\n\nLead Table" +
      "\n" + responseresultcm.i31 + " " + responseresultcm.j31 + " " + responseresultcm.k31 + " " + responseresultcm.l31 +
      "\n" + responseresultcm.i32 + " " + responseresultcm.j32 + " " + responseresultcm.k32 + " " + responseresultcm.l32 +
      "\n" + responseresultcm.i33 + " " + responseresultcm.j33 + " " + responseresultcm.k33 + " " + responseresultcm.l33 +
      "\n" + responseresultcm.i34 + " " + responseresultcm.j34 + " " + responseresultcm.k34 + " " + responseresultcm.l34 +
      "\n" + responseresultcm.i35 + " " + responseresultcm.j35 + " " + responseresultcm.k35 + " " + responseresultcm.l35 +
      "\n\n" + (Number(responseresultcm.i37) * 100).toFixed(0) + "%" + "  " + responseresultcm.j37 +
      "\n\n" + responseresultcm.i39 + "  " + responseresultcm.j39 +
      "\n\n" + responseresultcm.i41 + "  " + responseresultcm.j41 +
      "\n\n" + "The number assigned to each of the week in 52-weeks to assign demand and lead time based on " +
      "demand table and lead table of respective phases" +
      "\n\nNumbers Assigned" +
      "\n\n " + "  " + responseresultcm.o6 + "  " + responseresultcm.p6 +
      "\n" + responseresultcm.n7 + " " + responseresultcm.o7 + " " + responseresultcm.p7 +
      "\n" + responseresultcm.n8 + " " + responseresultcm.o8 + " " + responseresultcm.p8 +
      "\n" + responseresultcm.n9 + " " + responseresultcm.o9 + " " + responseresultcm.p9 +
      "\n" + responseresultcm.n10 + " " + responseresultcm.o10 + " " + responseresultcm.p10 +
      "\n" + responseresultcm.n11 + " " + responseresultcm.o11 + " " + responseresultcm.p11 +
      "\n" + responseresultcm.n12 + " " + responseresultcm.o12 + " " + responseresultcm.p12 +
      "\n" + responseresultcm.n13 + " " + responseresultcm.o13 + " " + responseresultcm.p13 +
      "\n" + responseresultcm.n14 + " " + responseresultcm.o14 + " " + responseresultcm.p14 +
      "\n" + responseresultcm.n15 + " " + responseresultcm.o15 + " " + responseresultcm.p15 +
      "\n" + responseresultcm.n16 + " " + responseresultcm.o16 + " " + responseresultcm.p16 +
      "\n" + responseresultcm.n17 + " " + responseresultcm.o17 + " " + responseresultcm.p17 +
      "\n" + responseresultcm.n18 + " " + responseresultcm.o18 + " " + responseresultcm.p18 +
      "\n" + responseresultcm.n19 + " " + responseresultcm.o19 + " " + responseresultcm.p19 +
      "\n" + responseresultcm.n20 + " " + responseresultcm.o20 + " " + responseresultcm.p20 +
      "\n" + responseresultcm.n21 + " " + responseresultcm.o21 + " " + responseresultcm.p21 +
      "\n" + responseresultcm.n22 + " " + responseresultcm.o22 + " " + responseresultcm.p22 +
      "\n" + responseresultcm.n23 + " " + responseresultcm.o23 + " " + responseresultcm.p23 +
      "\n" + responseresultcm.n24 + " " + responseresultcm.o24 + " " + responseresultcm.p24 +
      "\n" + responseresultcm.n25 + " " + responseresultcm.o25 + " " + responseresultcm.p25 +
      "\n" + responseresultcm.n26 + " " + responseresultcm.o26 + " " + responseresultcm.p26 +
      "\n" + responseresultcm.n27 + " " + responseresultcm.o27 + " " + responseresultcm.p27 +
      "\n" + responseresultcm.n28 + " " + responseresultcm.o28 + " " + responseresultcm.p28 +
      "\n" + responseresultcm.n29 + " " + responseresultcm.o29 + " " + responseresultcm.p29 +
      "\n" + responseresultcm.n30 + " " + responseresultcm.o30 + " " + responseresultcm.p30 +
      "\n" + responseresultcm.n31 + " " + responseresultcm.o31 + " " + responseresultcm.p31 +
      "\n" + responseresultcm.n32 + " " + responseresultcm.o32 + " " + responseresultcm.p32 +
      "\n" + responseresultcm.n33 + " " + responseresultcm.o33 + " " + responseresultcm.p33 +
      "\n" + responseresultcm.n34 + " " + responseresultcm.o34 + " " + responseresultcm.p34 +
      "\n" + responseresultcm.n35 + " " + responseresultcm.o35 + " " + responseresultcm.p35 +
      "\n" + responseresultcm.n36 + " " + responseresultcm.o36 + " " + responseresultcm.p36 +
      "\n" + responseresultcm.n37 + " " + responseresultcm.o37 + " " + responseresultcm.p37 +
      "\n" + responseresultcm.n38 + " " + responseresultcm.o38 + " " + responseresultcm.p38 +
      "\n" + responseresultcm.n39 + " " + responseresultcm.o39 + " " + responseresultcm.p39 +
      "\n" + responseresultcm.n40 + " " + responseresultcm.o40 + " " + responseresultcm.p40 +
      "\n" + responseresultcm.n41 + " " + responseresultcm.o41 + " " + responseresultcm.p41 +
      "\n" + responseresultcm.n42 + " " + responseresultcm.o42 + " " + responseresultcm.p42 +
      "\n" + responseresultcm.n43 + " " + responseresultcm.o43 + " " + responseresultcm.p43 +
      "\n" + responseresultcm.n44 + " " + responseresultcm.o44 + " " + responseresultcm.p44 +
      "\n" + responseresultcm.n45 + " " + responseresultcm.o45 + " " + responseresultcm.p45 +
      "\n" + responseresultcm.n46 + " " + responseresultcm.o46 + " " + responseresultcm.p46 +
      "\n" + responseresultcm.n47 + " " + responseresultcm.o47 + " " + responseresultcm.p47 +
      "\n" + responseresultcm.n48 + " " + responseresultcm.o48 + " " + responseresultcm.p48 +
      "\n" + responseresultcm.n49 + " " + responseresultcm.o49 + " " + responseresultcm.p49 +
      "\n" + responseresultcm.n50 + " " + responseresultcm.o50 + " " + responseresultcm.p50 +
      "\n" + responseresultcm.n51 + " " + responseresultcm.o51 + " " + responseresultcm.p51 +
      "\n" + responseresultcm.n52 + " " + responseresultcm.o52 + " " + responseresultcm.p52 +
      "\n" + responseresultcm.n53 + " " + responseresultcm.o53 + " " + responseresultcm.p53 +
      "\n" + responseresultcm.n54 + " " + responseresultcm.o54 + " " + responseresultcm.p54 +
      "\n" + responseresultcm.n55 + " " + responseresultcm.o55 + " " + responseresultcm.p55 +
      "\n" + responseresultcm.n56 + " " + responseresultcm.o56 + " " + responseresultcm.p56 +
      "\n" + responseresultcm.n57 + " " + responseresultcm.o57 + " " + responseresultcm.p57 +
      "\n" + responseresultcm.n58 + " " + responseresultcm.o58 + " " + responseresultcm.p58 +


      "\n\nPlayer's Input Decision" +
      "\n\nParameters" + "  " + "Input" +
      "\nPhase 1" +
      "\nOrder Quantity, units  " + result[0] +
      "\nReorder Level, units  " + result[1] +
      "\nPhase 2" +
      "\nOrder Quantity, units  " + result[2] +
      "\nReorder Level, units  " + result[3] +

      "\n\nGenerated Output based on player's input" +
      "\n\nQuantity, units" +
      "\nParameters" + "  " + "Phase 1" + "  " + "Phase 2" +
      "\nDemand  " + responseresultdatabase.j63 + " " + responseresultdatabase.w63 +
      "\nStockout  " + responseresultdatabase.j64 + " " + responseresultdatabase.w64 +
      "\nBack order  " + responseresultdatabase.j65 + " " + responseresultdatabase.w65 +
      "\n\nCost, INR" +
      "\nParameters" + "  " + "Phase 1" + "  " + "Phase 2" +
      "\nOrdering  " + responseresultdatabase.m63 + " " + responseresultdatabase.z63 +
      "\nHolding  " + responseresultdatabase.m64 + " " + responseresultdatabase.z64 +
      "\nStockout  " + responseresultdatabase.m65 + " " + responseresultdatabase.z65 +
      "\nBack ordering  " + responseresultdatabase.m66 + " " + responseresultdatabase.z66 +
      "\n\nKPI" +
      "\nParameters" + "  " + "Phase 1" + "  " + "Phase 2" +
      "\nService level  " + (Number(responseresultdatabase.j67) * 100).toFixed(0) + "%" + " " + (Number(responseresultdatabase.w68) * 100).toFixed(0) + "%" +
      "\nCost, INR  " + responseresultdatabase.m67 + " " + responseresultdatabase.z67 +

      "\n\nService level phase 1  " + responseresultcm.o61 +
      "\nService level phase 2  " + responseresultcm.o62 +
      "\nCost, INR phase 1  " + responseresultcm.o63 +
      "\nCost, INR phase 2  " + responseresultcm.o64;

    return assesment;
  }
}
