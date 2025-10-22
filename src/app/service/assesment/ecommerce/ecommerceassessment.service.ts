import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommerceassessmentService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + responseresultcm?.b5 +
      "\n\n" + responseresultcm?.b7 + "  " + responseresultcm?.c7 +
      "\n\nCatalog";

    // Catalog rows (e6-t36)
    for (let i = 6; i <= 36; i++) {
      const tValue = Number(responseresultcm?.[`t${i}`]);
      const tFormatted = isNaN(tValue) ? '' : (tValue * 100).toFixed(0) + '%';
      assesment += "\n" +
        responseresultcm?.[`e${i}`] + "  " +
        responseresultcm?.[`f${i}`] + "  " +
        responseresultcm?.[`k${i}`] + "  " +
        responseresultcm?.[`l${i}`] + "  " +
        responseresultcm?.[`m${i}`] + "  " +
        responseresultcm?.[`n${i}`] + "  " +
        responseresultcm?.[`s${i}`] + "  " +
        tFormatted;

    }

    // Supplier section (e39-j44)
    assesment += "\n\nSupplier";
    for (let i = 39; i <= 44; i++) {
      assesment += "\n" +
        responseresultcm?.[`e${i}`] + "  " +
        responseresultcm?.[`f${i}`] + "  " +
        responseresultcm?.[`g${i}`] + "  " +
        responseresultcm?.[`h${i}`] + "  " +
        responseresultcm?.[`i${i}`] + "  " +
        responseresultcm?.[`j${i}`];
    }

    // Price Elasticity (e47-f77)
    assesment += "\n\nPrice Elasticity";
    for (let i = 47; i <= 77; i++) {
      assesment += "\n" +
        responseresultcm?.[`e${i}`] + "  " +
        responseresultcm?.[`f${i}`];
    }

    // Weight of Purchase Basket (e80-g110)
    assesment += "\n\nWeight of Purchase Basket";
    for (let i = 80; i <= 110; i++) {
      assesment += "\n" +
        responseresultcm?.[`e${i}`] + "  " +
        responseresultcm?.[`f${i}`] + "  " +
        responseresultcm?.[`g${i}`];
    }

    // Marketing Campaigns - Facebook (v9-y12)
    assesment += "\n\nMarketing\nCampaigns\nFacebook";
    for (let i = 9; i <= 12; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`];
    }
    // Instagram (v15-y18)
    assesment += "\n\nInstagram";
    for (let i = 15; i <= 18; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`];
    }
    // YouTube (v21-y24)
    assesment += "\n\nYouTube";
    for (let i = 21; i <= 24; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`];
    }

    // Sales Effect (v27-ae57)
    assesment += "\n\nSales Effect \nProduct Name  Eco-Chic Fashion Week  Green Thread Initiative  Seamseco Sustainable Challenge  Seamseco Style Stories  Seamseco Runway Reels  Eco-Influencer Challenge  Green Fabric Diaries  Seamseco Style Challenges  Eco-Innovator Interviews";
    for (let i = 28; i <= 57; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +  // v column: no formatting
        (Number(responseresultcm?.[`w${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`x${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`y${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`z${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`aa${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`ab${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`ac${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`ad${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`ae${i}`]) * 100).toFixed(0);
    }


    assesment += "\n\n" + responseresultcm?.v59 + "  " + responseresultcm?.w59;

    // Email Campaigns (v63-y66)
    assesment += "\n\nEmail Campaigns\n";
    for (let i = 63; i <= 66; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`];
    }

    // v68-z73
    assesment += "\n";
    for (let i = 68; i <= 73; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`] + "  " +
        responseresultcm?.[`z${i}`];
    }
    assesment += "\n\n" + responseresultcm?.v75 + "  " + responseresultcm?.w75;
    assesment += "\n\n" + responseresultcm?.v77 + "  " + responseresultcm?.w77;

    // Subscribers (v80-w81)
    assesment += "\n\nSusbcribers";
    for (let i = 80; i <= 81; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`w${i}`];
    }

    // Branding (v85-y90)
    assesment += "\n\nBranding\n";
    for (let i = 85; i <= 90; i++) {
      assesment += "\n" +
        responseresultcm?.[`v${i}`] + "  " +
        responseresultcm?.[`x${i}`] + "  " +
        responseresultcm?.[`y${i}`];
    }
    assesment += "\n\n" + responseresultcm?.v92 + "  " + responseresultcm?.w92;

    // Experience Website (ag8-al11)
    assesment += "\n\nExperience\nWebsite";
    for (let i = 8; i <= 11; i++) {
      assesment += "\n" +
        responseresultcm?.[`ag${i}`] + "  " +
        responseresultcm?.[`ai${i}`] + "  " +
        responseresultcm?.[`aj${i}`] + "  " +
        responseresultcm?.[`ak${i}`] + "  " +
        responseresultcm?.[`al${i}`];
    }

    // Nudges (ag14-ak19)
    assesment += "\n\nNudges";
    for (let i = 14; i <= 19; i++) {
      assesment += "\n" +
        responseresultcm?.[`ag${i}`] + "  " +
        responseresultcm?.[`ai${i}`] + "  " +
        responseresultcm?.[`aj${i}`] + "  " +
        responseresultcm?.[`ak${i}`];
    }

    // Check Out Pages (ag22-ak24)
    assesment += "\n\nCheck Out Pages";
    for (let i = 22; i <= 24; i++) {
      assesment += "\n" +
        responseresultcm?.[`ag${i}`] + "  " +
        responseresultcm?.[`ai${i}`] + "  " +
        responseresultcm?.[`aj${i}`] + "  " +
        responseresultcm?.[`ak${i}`];
    }

    // Check out features (ag27-ak30)
    assesment += "\n\nCheck out features";
    for (let i = 27; i <= 30; i++) {
      assesment += "\n" +
        responseresultcm?.[`ag${i}`] + "  " +
        responseresultcm?.[`ai${i}`] + "  " +
        responseresultcm?.[`aj${i}`] + "  " +
        responseresultcm?.[`ak${i}`];
    }

    // Customer Service System (ag33-am36)
    assesment += "\n\nCustomer Service System";
    for (let i = 33; i <= 36; i++) {
      assesment += "\n" +
        responseresultcm?.[`ag${i}`] + "  " +
        responseresultcm?.[`ai${i}`] + "  " +
        responseresultcm?.[`aj${i}`] + "  " +
        responseresultcm?.[`ak${i}`] + "  " +
        responseresultcm?.[`al${i}`] + "  " +
        responseresultcm?.[`am${i}`];
    }
    assesment += "\n\n" + responseresultcm?.ag38 + "  " + responseresultcm?.ah38;

    // Operations Packaging (ao8-at11)
    assesment += "\n\nOperations\nPackaging";
    for (let i = 8; i <= 11; i++) {
      assesment += "\n" +
        responseresultcm?.[`ao${i}`] + "  " +
        responseresultcm?.[`aq${i}`] + "  " +
        responseresultcm?.[`ar${i}`] + "  " +
        responseresultcm?.[`as${i}`] + "  " +
        responseresultcm?.[`at${i}`];
    }

    // Logistics (ao15-au18)
    assesment += "\n\nLogistics";
    for (let i = 15; i <= 18; i++) {
      assesment += "\n" +
        responseresultcm?.[`ao${i}`] + "  " +
        responseresultcm?.[`aq${i}`] + "  " +
        responseresultcm?.[`ar${i}`] + "  " +
        responseresultcm?.[`as${i}`] + "  " +
        responseresultcm?.[`at${i}`] + "  " +
        responseresultcm?.[`au${i}`];
    }

    // Streamlining Process (ao22-as27)
    assesment += "\n\nStreamlining Process";
    for (let i = 22; i <= 27; i++) {
      assesment += "\n" +
        responseresultcm?.[`ao${i}`] + "  " +
        responseresultcm?.[`aq${i}`] + "  " +
        responseresultcm?.[`ar${i}`] + "  " +
        responseresultcm?.[`as${i}`];
    }
    assesment += "\n\n" + responseresultcm?.ao29 + "  " + responseresultcm?.ap29;

    // Package Controlled (ao32-ap39)
    assesment += "\n\nPackage Controlled \nCustomer Satisfaction   Rate";
    for (let i = 33; i <= 39; i++) {
      assesment += "\n" +
        (Number(responseresultcm?.[`ao${i}`]) * 100).toFixed(0) + "%" + "  " +
        (Number(responseresultcm?.[`ap${i}`]) * 100).toFixed(0) + "%";
    }

    //newkpi value
    assesment += "\n\nOperating Margin   " + responseresultcm?.ap42;


    // Player's Input based on Fixed Data
    assesment += "\n\nPlayer's Input based on Fixed Data" +
      "\nParameters  Input" +
      "\nCatalog";
    for (let i = 0; i < 10; i++) {
      assesment += `\nProduct ${i + 1}   ${result[i] ?? ''}`;
    }
    // Markups
    for (let i = 10; i < 20; i++) {
      assesment += `\nMarkups %, Product ${i - 9}   ${(result[i] ?? 0) * 100}%`;
    }
    // Estimated Market Share
    for (let i = 20; i < 30; i++) {
      assesment += `\nEstimated Market Share %, Product ${i - 19}   ${(result[i] ?? 0) * 100}%`;
    }
    // Buffer Coefficient
    for (let i = 30; i < 40; i++) {
      assesment += `\nBuffer Coefficient, Product ${i - 29}   ${result[i] ?? ''}`;
    }
    // Marketing
    assesment += "\nMarketing";
    const marketingIndexes = [40, 41, 42];
    for (let idx of marketingIndexes) {
      const label = responseresultcm?.[`v${10 + idx - 40}`];
      const status = result[idx] == 1 ? 'Implemented' : 'Not Implemented';
      assesment += `\n${label}  ${status}`;
    }
    const marketingIndexes1 = [43, 44, 45];
    for (let idx of marketingIndexes1) {
      const label = responseresultcm?.[`v${13 + idx - 40}`];
      const status = result[idx] == 1 ? 'Implemented' : 'Not Implemented';
      assesment += `\n${label}  ${status}`;
    }
    const marketingIndexes2 = [46, 47, 48];
    for (let idx of marketingIndexes2) {
      const label = responseresultcm?.[`v${16 + idx - 40}`];
      const status = result[idx] == 1 ? 'Implemented' : 'Not Implemented';
      assesment += `\n${label}  ${status}`;
    }

    assesment += `\nEmail Tool   ${result[49] ?? ''}`;
    assesment += `\nWelcome Email Priority   ${result[50] ?? ''}`;
    assesment += `\nProduct Highlight Email Priority   ${result[51] ?? ''}`;
    assesment += `\nEducational Content Email Priority   ${result[52] ?? ''}`;
    assesment += `\nExclusive Offers Email Priority   ${result[53] ?? ''}`;
    assesment += `\nFeedback and Engagement Email Priority   ${result[54] ?? ''}`;
    assesment += `\nWelcome Email Leads Type   ${result[55] ?? ''}`;
    assesment += `\nProduct Highlight Email Leads Type   ${result[56] ?? ''}`;
    assesment += `\nEducational Content Leads Type   ${result[57] ?? ''}`;
    assesment += `\nExclusive Offers Leads Type   ${result[58] ?? ''}`;
    assesment += `\nFeedback and Engagement Leads Type   ${result[59] ?? ''}`;
    assesment += `\n${responseresultcm?.v86}  ${result[60] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.v87}  ${result[61] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.v88}  ${result[62] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.v89}  ${result[63] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.v90}  ${result[64] === 1 ? 'Implemented' : 'Not Implemented'}`;

    assesment += "\nExperience";
    assesment += `\nWebsite Design   ${result[65] ?? ''}`;
    assesment += `\n${responseresultcm?.ag15}  ${result[66] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.ag16}  ${result[67] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.ag17}  ${result[68] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.ag18}  ${result[69] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultcm?.ag19}  ${result[70] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\nCheckout Page   ${result[71] ?? ''}`;
    assesment += `\n${responseresultdatabase?.c116}  ${result[72] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c117}  ${result[73] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c118}  ${result[74] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\nCustomer Service System   ${result[75] ?? ''}`;
    assesment += "\nOperations";
    assesment += `\nPackaging   ${result[76] ?? ''}`;
    assesment += `\nLogistics   ${result[77] ?? ''}`;
    assesment += `\n${responseresultdatabase?.c134}  ${result[78] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c135}  ${result[79] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c136}  ${result[80] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c137}  ${result[81] === 1 ? 'Implemented' : 'Not Implemented'}`;
    assesment += `\n${responseresultdatabase?.c138}  ${result[82] === 1 ? 'Implemented' : 'Not Implemented'}`;


    // System generated output based on input of player's
    assesment += "\n\nSystem generated output based on input of player's ";

    // Sales, units
    assesment += "\n\nSales, units ";
    assesment += "\nProducts   Sales   Opportunity Loss   Inventory";
    for (let i = 8; i <= 17; i++) {
      const col = String.fromCharCode(110 + (i - 8)); // 'n' to 'w'
      const product = responseresultdatabase?.[`j${i}`];
      const sales = Number(responseresultdatabase?.[`${col}86`]).toFixed(0);
      const oppLoss = Number(responseresultdatabase?.[`${col}87`]).toFixed(0);
      const inventory = Number(responseresultdatabase?.[`${col}88`]).toFixed(0);
      assesment += `\n${product}   ${sales}   ${oppLoss}   ${inventory}`;

    }

    // Product Margins
    assesment += "\n\nProduct Margins ";
    assesment += "\nProducts   Pricing, INR   Margin %";
    for (let i = 8; i <= 17; i++) {
      const product = responseresultdatabase?.[`j${i}`]; // assuming you still want product
      const pricing = Number(responseresultdatabase?.[`m${i}`]).toFixed(0);
      const marginKey = String.fromCharCode(110 + (i - 8)) + '95'; // n95, o95, ...
      const margin = (Number(responseresultdatabase?.[marginKey]) * 100).toFixed(0) + '%';
      assesment += `\n${product}   ${pricing}   ${margin}`;
    }



    // Promotion Distribution
    assesment += "\n\nPromotion Distribution ";
    assesment += "\nParameters   Visits   Distribution";
    assesment += `\nSocial Media   ${Number(responseresultdatabase?.q57).toFixed(0)}   ${(Number(responseresultdatabase?.r57) * 100).toFixed(0)}%`;
    assesment += `\nCampaigns   ${Number(responseresultdatabase?.q58).toFixed(0)}   ${(Number(responseresultdatabase?.r58) * 100).toFixed(0)}%`;
    assesment += `\nOrganic   ${Number(responseresultdatabase?.q59).toFixed(0)}   ${(Number(responseresultdatabase?.r59) * 100).toFixed(0)}%`;
    assesment += `\nEmail   ${Number(responseresultdatabase?.q60).toFixed(0)}   ${(Number(responseresultdatabase?.r60) * 100).toFixed(0)}%`;

    // Website Experience
    assesment += "\n\nWebsite Experience ";
    assesment += "\nParameters   Output";
    assesment += `\nBounce Rate   ${(Number(responseresultdatabase?.n78) * 100).toFixed(0)}%`;
    assesment += `\nEngagement Rate   ${(Number(responseresultdatabase?.n79) * 100).toFixed(0)}%`;
    assesment += `\nCustomer Satisfaction   ${(Number(responseresultdatabase?.n80) * 100).toFixed(0)}%`;

    // Income Statement
    assesment += "\n\nIncome Statement, k INR ";
    assesment += "\nParameters   Output";
    assesment += `\nRevenue   ${Number(responseresultdatabase?.o97).toFixed(0)}`;
    assesment += `\nCost   ${Number(responseresultdatabase?.o98).toFixed(0)}`;
    assesment += `\nGross Profit/Loss   ${Number(responseresultdatabase?.o99).toFixed(0)}`;
    assesment += `\nPromotion cost   ${Number(responseresultdatabase?.o101).toFixed(0)}`;
    assesment += `\nWebsite cost   ${Number(responseresultdatabase?.o102).toFixed(0)}`;
    assesment += `\nPersonnel & Service cost   ${Number(responseresultdatabase?.o103).toFixed(0)}`;
    assesment += `\nPackaging cost   ${Number(responseresultdatabase?.o104).toFixed(0)}`;
    assesment += `\nLogistics and Inventory cost   ${Number(responseresultdatabase?.o105).toFixed(0)}`;
    assesment += `\nProcess Improvement cost   ${Number(responseresultdatabase?.o106).toFixed(0)}`;
    assesment += `\nOperating expense   ${Number(responseresultdatabase?.o107).toFixed(0)}`;
    assesment += `\nEBITDA   ${Number(responseresultdatabase?.o108).toFixed(0)}`;

    // KPI
    assesment += "\n\nKPI ";
    assesment += "\nParameter   Output";
    assesment += `\nAverage Order Value, INR   ${Number(responseresultdatabase?.r97).toFixed(0)}`;
    assesment += `\nSales Performance Indication   ${Number(responseresultdatabase?.r99).toFixed(0)}%`;
    assesment += `\nProduct Return   ${(Number(responseresultdatabase?.r100) * 100).toFixed(0)}%`;
    assesment += `\nROAS   ${Number(responseresultdatabase?.r99).toFixed(0)}`;
    assesment += `\nOperating Margin   ${(Number(responseresultdatabase?.n109) * 100).toFixed(0)}%`;
    assesment += "\n\nGoal to be optimized";
    assesment += `\nOperating Margin   ${Number(responseresultcm?.ap42).toFixed(0)}`;
    

    return assesment;

  }
}
