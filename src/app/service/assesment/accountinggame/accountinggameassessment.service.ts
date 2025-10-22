import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountinggameassessmentService {
  // let resultStr = '';
  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMemo" +
      "\n" + responseresultcm.b5 +
      "\n\n" +
      "Information" +
      "\n\n" +
      "Establishment" +
      "\n" + "Mr. Raj, fueled by a passion for sustainability, set out to launch a paper manufacturing company. To raise funds, he issued 200,000 ordinary shares, embraced by his supportive family. Seeking further capital, he secured a Rs. 300,000 loan from the local bank. With financial backing and unwavering determination, Mr. Raj's dream of creating eco-friendly paper products was set in motion, promising a brighter, greener future." +
      "\n\n" +
      "Investment" +
      "\n" + "With the company's financial foundation secure, Mr. Raj wasted no time in expanding his paper manufacturing venture. He invested in a prime piece of land for Rs. 60,000, laying the groundwork for future growth. Additionally, he purchased process machinery worth Rs. 200,000, immediately recording the first depreciation, ensuring efficiency in production. To drive innovation and sustainability, Mr. Raj acquired a patent for Rs. 50,000, promising to reduce waste in the production process, with the first depreciation also recorded. With each investment, Mr. Raj's vision of creating a greener, more sustainable future for his company and the environment grew closer to realization." +
      "\n\n" +
      "Operations" +
      "\n" + "Mr. Raj's paper manufacturing venture surged forward with strategic moves. He purchased raw materials worth Rs. 100,000 on credit, fueling production. Salaries of Rs. 40,000 were swiftly paid to production staff, ensuring smooth operations. The first batch of 100 units was completed, with variable costs meticulously recorded." +
      "\n" + "With products ready, Mr. Raj invested Rs. 50,000 in a dedicated sales team, swiftly securing buyers for his eco-friendly paper products. Eight customers eagerly purchased 80 units at Rs. 5,000 each, with one paying in cash and seven opting for credit." +
      "\n" + "Amidst successes, challenges emerged. Mr. Raj received an unexpected electricity bill of Rs. 15,000, promptly settling it to keep operations running smoothly. He then fulfilled his financial obligations by paying off the debt for the raw materials bought on credit." +
      "\n" + "However, one customer's declaration of bankruptcy posed a setback. Undeterred, Mr. Raj navigated the situation gracefully, learning and adapting as he continued to grow his business. Finally, he ensured financial stability by paying 8% interest on the loan obtained earlier, further solidifying his commitment to success in the sustainable paper manufacturing industry." +
      "\n" + "As the fiscal year drew to a close, Mr. Raj diligently calculated and paid the taxes owed to the government. With a tax rate of 20%, his contribution reflected both his commitment to compliance and his growing success as an entrepreneur in the paper manufacturing sector." +
      "\n\n" +
      "Correct Accounts" +
      "\n\n" +
      "Balance Sheet" +
      "\n" +
      "Assets" +
      "\n" +
      "Current assets" +
      "\n" + responseresultcm.f9 + " " + responseresultcm.g9 +
      "\n" + responseresultcm.f10 + " " + responseresultcm.g10 +
      "\n" + responseresultcm.f11 + " " + responseresultcm.g11 +
      "\n" + responseresultcm.f12 + " " + responseresultcm.g12 +
      "\n" + responseresultcm.f13 + " " + responseresultcm.g13 +
      "\n\n" +
      "Fixed assets" +
      "\n" + responseresultcm.f16 + " " + responseresultcm.g16 +
      "\n" + responseresultcm.f17 + " " + responseresultcm.g17 +
      "\n" + responseresultcm.f18 + " " + responseresultcm.g18 +
      "\n" + responseresultcm.f19 + " " + responseresultcm.g19 +
      "\n" + responseresultcm.f20 + " " + responseresultcm.g20 +
      "\n\n" +
      "Other assets" +
      "\n" + responseresultcm.f23 + " " + responseresultcm.g23 +
      "\n" + responseresultcm.f24 + " " + responseresultcm.g24 +
      "\n" + responseresultcm.f25 + " " + responseresultcm.g25 +
      "\n" + responseresultcm.f26 + " " + responseresultcm.g26 +
      "\n\n" +
      "Liabilities" +
      "\n" +
      "Current liabilities" +
      "\n" + responseresultcm.f30 + " " + responseresultcm.g30 +
      "\n" + responseresultcm.f31 + " " + responseresultcm.g31 +
      "\n" + responseresultcm.f32 + " " + responseresultcm.g32 +
      "\n" + responseresultcm.f33 + " " + responseresultcm.g33 +
      "\n" + responseresultcm.f34 + " " + responseresultcm.g34 +
      "\n\n" +
      "Long-term debt" +
      "\n" + responseresultcm.f37 + " " + responseresultcm.g37 +
      "\n" + responseresultcm.f38 + " " + responseresultcm.g38 +
      "\n" + responseresultcm.f39 + " " + responseresultcm.g39 +
      "\n" + responseresultcm.f40 + " " + responseresultcm.g40 +
      "\n\n" +
      "Shareholder's Equity" +
      "\n" +
      "Other assets" +
      "\n" + responseresultcm.f44 + " " + responseresultcm.g44 +
      "\n" + responseresultcm.f45 + " " + responseresultcm.g45 +
      "\n" + responseresultcm.f46 + " " + responseresultcm.g46 +
      "\n\n" +
      "Income Statement" +
      "\n" +
      "\n" + responseresultcm.f50 + " " + responseresultcm.g50 +
      "\n" + responseresultcm.f51 + " " + responseresultcm.g51 +
      "\n" + responseresultcm.f52 + " " + responseresultcm.g52 +
      "\n" + responseresultcm.f53 + " " + responseresultcm.g53 +
      "\n" + responseresultcm.f54 + " " + responseresultcm.g54 +
      "\n" + responseresultcm.f55 + " " + responseresultcm.g55 +
      "\n" + responseresultcm.f56 + " " + responseresultcm.g56 +
      "\n" + responseresultcm.f57 + " " + responseresultcm.g57 +
      "\n\n" +
      "Cash Flow Statement" +
      "\n" +
      "\n" + responseresultcm.f61 + " " + responseresultcm.g61 +
      "\n\n" +
      "Cash flow from operations" +
      "\n" + responseresultcm.f64 + " " + responseresultcm.g64 +
      "\n" + responseresultcm.f65 + " " + responseresultcm.g65 +
      "\n\n" +
    "Cash flow from investment" +
      "\n" + responseresultcm.f68 + " " + responseresultcm.g68 +
      "\n" + responseresultcm.f69 + " " + responseresultcm.g69 +
      "\n\n" +
      "Cash flow from financing" +
      "\n" + responseresultcm.f72 + " " + responseresultcm.g72 +
      "\n" + responseresultcm.f73 + " " + responseresultcm.g73 +
      "\n\n" +
      "Evaluation" +
      "\n" + "Type" + " " + "Name" + " " + "Decsription" + " " + "Benefits" + " " + "Cost" + " " + "Approval" + " " + "Reason" + " " + "Risk Probability Year 1" + " " + " Risk Probability Year 2" + " " + " Risk Probability Year 3" +
    "\n" + responseresultcm.i7 + " " + responseresultcm.j7 + " " + responseresultcm.k7 + " " + responseresultcm.l7 + " " + responseresultcm.m7 + " " + responseresultcm.n7 + " " + responseresultcm.o7 + " " + responseresultcm.p7 + " " + responseresultcm.q7 + " " + responseresultcm.r7 +
      "\n" + responseresultcm.i8 + " " + responseresultcm.j8 + " " + responseresultcm.k8 + " " + responseresultcm.l8 + " " + responseresultcm.m8 + " " + responseresultcm.n8 + " " + responseresultcm.o8 + " " + responseresultcm.p8 + " " + responseresultcm.q8 + " " + responseresultcm.r8 +
      "\n" + responseresultcm.i9 + " " + responseresultcm.j9 + " " + responseresultcm.k9 + " " + responseresultcm.l9 + " " + responseresultcm.m9 + " " + responseresultcm.n9 + " " + responseresultcm.o9 + " " + responseresultcm.p9 + " " + responseresultcm.q9 + " " + responseresultcm.r9 +
      "\n" + responseresultcm.i10 + " " + responseresultcm.j10 + " " + responseresultcm.k10 + " " + responseresultcm.l10 + " " + responseresultcm.m10 + " " + responseresultcm.n10 + " " + responseresultcm.o10 + " " + responseresultcm.p10 + " " + responseresultcm.q10 + " " + responseresultcm.r10 +
      "\n" + responseresultcm.i11 + " " + responseresultcm.j11 + " " + responseresultcm.k11 + " " + responseresultcm.l11 + " " + responseresultcm.m11 + " " + responseresultcm.n11 + " " + responseresultcm.o11 + " " + responseresultcm.p11 + " " + responseresultcm.q11 + " " + responseresultcm.r11 +
      "\n" + responseresultcm.i12 + " " + responseresultcm.j12 + " " + responseresultcm.k12 + " " + responseresultcm.l12 + " " + responseresultcm.m12 + " " + responseresultcm.n12 + " " + responseresultcm.o12 + " " + responseresultcm.p12 + " " + responseresultcm.q12 + " " + responseresultcm.r12 +
      "\n" + responseresultcm.i13 + " " + responseresultcm.j13 + " " + responseresultcm.k13 + " " + responseresultcm.l13 + " " + responseresultcm.m13 + " " + responseresultcm.n13 + " " + responseresultcm.o13 + " " + responseresultcm.p13 + " " + responseresultcm.q13 + " " + responseresultcm.r13 +
      "\n" + responseresultcm.i14 + " " + responseresultcm.j14 + " " + responseresultcm.k14 + " " + responseresultcm.l14 + " " + responseresultcm.m14 + " " + responseresultcm.n14 + " " + responseresultcm.o14 + " " + responseresultcm.p14 + " " + responseresultcm.q14 + " " + responseresultcm.r14 +
      "\n" + responseresultcm.i15 + " " + responseresultcm.j15 + " " + responseresultcm.k15 + " " + responseresultcm.l15 + " " + responseresultcm.m15 + " " + responseresultcm.n15 + " " + responseresultcm.o15 + " " + responseresultcm.p15 + " " + responseresultcm.q15 + " " + responseresultcm.r15 +
      "\n\n" +
      "Players Input based on the information" +
      "\n" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" +
      "Balance Sheet" +
      "\n" + "Cash" + " " + result[0] +
      "\n" + "Accounts receivable" + " " + result[1] +
      "\n" + "Inventory" + " " + result[2] +
      "\n" + "Prepaid expenses" + " " + result[3] +
      "\n" + "Other current assets" + " " + result[4] +
      "\n" + "Machinery & equipment" + " " + result[5] +
      "\n" + "Furniture & fixtures" + " " + result[6] +
      "\n" + "Leasehold improvements" + " " + result[7] +
      "\n" + "Land & buildings" + " " + result[8] +
      "\n" + "Other fixed assets" + " " + result[9] +
      "\n" + "Intangible assets " + " " + result[10] +
      "\n" + "Goodwill " + " " + result[11] +
      "\n" + "Deposits " + " " + result[12] +
      "\n" + "Other assets " + " " + result[13] +
      "\n" + "Accounts payable" + " " + result[14] +
      "\n" + "Accrued expenses" + " " + result[15] +
      "\n" + "Unearned revenue" + " " + result[16] +
      "\n" + "Notes, short-term" + " " + result[17] +
      "\n" + "Current part of long-term debt" + " " + result[18] +
      "\n" + "Bank loans payable" + " " + result[19] +
      "\n" + "Notes payable to stockholders" + " " + result[20] +
      "\n" + "LESS: Short-term portion" + " " + result[21] +
      "\n" + "Other long term debt" + " " + result[22] +
      "\n" + "Invested capital" + " " + result[23] +
      "\n" + "Retained earnings - beginning" + " " + result[24] +
      "\n" + "Retained earnings - current" + " " + result[25] +
      "\n" +
      "Income Statement, INR" +
      "\n" + "Revenue" + " " + result[26] +
      "\n" + "Cost of good sold" + " " + result[27] +
      "\n" + "Sales cost" + " " + result[28] +
      "\n" + "Administration cost" + " " + result[29] +
      "\n" + "Bad debts" + " " + result[30] +
      "\n" + "Depreciation & Amortization" + " " + result[31] +
      "\n" + "Interest Expense" + " " + result[32] +
      "\n" + "Tax" + " " + result[33] +
      "\n" +
      " Cash Flow Statement, INR " +
      "\n" + "Opening balance" + " " + result[34] +
      "\n" + "Operations, Cash In" + " " + result[35] +
      "\n" + "Operations, Cash Out" + " " + result[36] +
      "\n" + "Investment, Cash In" + " " + result[37] +
      "\n" + "Investment, Cash Out" + " " + result[38] +
      "\n" + "Financing, Cash In" + " " + result[39] +
      "\n" + "Financing, Cash Out" + " " + result[40] +
      "\n" +
      "Opportunities" +
      "\n" + "Investment in Research and Development" + " " + result[41] +
      "\n" + "Expansion of Manufacturing Facilities" + " " + result[42] +
      "\n" + "Debt Restructuring" + " " + result[43] +
      "\n" + "Cost Reduction Initiatives" + " " + result[44] +
      "\n" + "Introduction of Premium Product Line" + " " + result[45] +
      "\n" + "Employee Training and Development" + " " + result[46] +
      "\n" + "Working Capital Optimization" + " " + result[47] +
      "\n" + "Equipment Lease Financing" + " " + result[48] +
      "\n" + "Exploring Export Opportunities" + " " + result[49] +
      "\n\n" +
      "Output Generated based on player's input" +
      "\n\n" +
      "Correct Accounts Score" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Balance Sheet" + " " + Number(responseresultdatabase.k5) * 100 + "%" +
      "\n" + "Income Statement" + " " + Number(responseresultdatabase.k6) * 100 + "%" +
      "\n" + "Cash Flow Statement" + " " + Number(responseresultdatabase.k7) * 100 + "%" +
    "\n\n" +
      "Investment Suggestions based on opportunities" +
      "\n" +
      "Parameter" + " " + " Approval Likelihood" + " " + "1-Year Value Creation" + " " + "3-Year Value Creation"+
    "\n" + "" + " " + responseresultdatabase.k25 + " " + responseresultdatabase.l25 + " " + responseresultdatabase.m25 +
      "\n" + "" + " " + responseresultdatabase.k26 + " " + responseresultdatabase.l26 + " " + responseresultdatabase.m26 +
      "\n" + "" + " " + responseresultdatabase.k26 + " " + responseresultdatabase.l27 + " " + responseresultdatabase.m27 +
    "\n\n" +
      "KPI" +
      "\n" + "Parameters" + " " + "Input" +
      "\n"+"Total Score" + " " + Number(responseresultdatabase.l8) * 100 + "%" +
      "\n"+"1-Year Value Creation " + " " + responseresultdatabase.l28 +
      "\n"+"1-Year Value Creation " + " " + responseresultdatabase.m28+
      "\n\n" +
      "Goal to be optimized" +
      "\n"+"Total Score" + " " + Number(responseresultcm.j25)  + "%" +
      "\n"+"1-Year Value" + " " + responseresultcm.j26 +
      "\n"+"3-Year Value" + " " + responseresultcm.j27;

    return assesment;
  }
}
