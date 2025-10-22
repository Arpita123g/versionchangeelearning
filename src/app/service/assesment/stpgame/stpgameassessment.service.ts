import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StpgameassessmentService {
  // let resultStr = '';
  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any, responseresultcmb5: any): string {
    let assesment = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + responseresultcmb5.b5 +
      "\n(TC is the user of game company while other companies are competitor in the market)" +
      "\nInformation Search" +
      "\n\nProduct Attributes" +
      "\n\n" + responseresultcm.D8;
    for (let i = 9; i <= 12; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D14;
    for (let i = 15; i <= 18; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D20;
    assesment += "\n  " + responseresultcm?.E21 + "  " + responseresultcm?.F21 + "  " + responseresultcm?.G21;
    for (let i = 22; i <= 25; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D27;
    assesment += "\n  " +
      responseresultcm?.E28 + "  " +
      responseresultcm?.F28 + "  " +
      responseresultcm?.G28 + "  " +
      responseresultcm?.H28 + "  " +
      responseresultcm?.I28;
    for (let i = 29; i <= 32; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`] + "  " +
        responseresultcm?.[`H${i}`] + "  " +
        responseresultcm?.[`I${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D34;
    assesment += "\n  " +
      responseresultcm?.E35 + "  " +
      responseresultcm?.F35 + "  " +
      responseresultcm?.G35;
    for (let i = 36; i <= 39; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D41;
    assesment += "\n  " +
      responseresultcm?.E42 + "  " +
      responseresultcm?.F42 + "  " +
      responseresultcm?.G42;
    for (let i = 43; i <= 46; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D48;
    assesment += "\n  " +
      responseresultcm?.E49 + "  " +
      responseresultcm?.F49 + "  " +
      responseresultcm?.G49 + "  " +
      responseresultcm?.H49;
    for (let i = 50; i <= 53; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`] + "  " +
        responseresultcm?.[`H${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D55;
    assesment += "\n  " +
      responseresultcm?.E56 + "  " +
      responseresultcm?.F56 + "  " +
      responseresultcm?.G56 + "  " +
      responseresultcm?.H56;
    for (let i = 57; i <= 63; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`] + "  " +
        responseresultcm?.[`H${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D65;
    assesment += "\n  " +
      responseresultcm?.E66 + "  " +
      responseresultcm?.F66 + "  " +
      responseresultcm?.G66 + "  " +
      responseresultcm?.H66;
    for (let i = 67; i <= 73; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`] + "  " +
        responseresultcm?.[`H${i}`];
    }


    assesment += "\n\n" + responseresultcm?.D75;
    assesment += "\n  " +
      responseresultcm?.E76 + "  " +
      responseresultcm?.F76 + "  " +
      responseresultcm?.G76;
    for (let i = 77; i <= 80; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`] + "  " +
        responseresultcm?.[`F${i}`] + "  " +
        responseresultcm?.[`G${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D82;
    assesment += "\n  " + responseresultcm?.E83;
    for (let i = 84; i <= 87; i++) {
      assesment += "\n" +
        responseresultcm?.[`D${i}`] + "  " +
        responseresultcm?.[`E${i}`];
    }

    assesment += "\n\n" + responseresultcm?.D89;
    assesment += "\nThe market research has found results from surveys on product attributes affecting purchase decisions. " +
      "These attributes include performance, battery life, design, features, repairability & software support, " +
      "packaging, and recycling." +
      "\n\nIncluded are consumer preference analyses for different levels of each attribute. The higher number represents " +
      "more value to the consumer and hence can be related to higher demand. For example, number 8 in the performance " +
      "preference of trendy consumers indicates that 8 out of 10 consumers value the mobile performance of the segment.";
    assesment += "  " + responseresultcm?.E90;

    assesment += "\n\n" + responseresultcm?.D92;
    assesment += "\nThe late adopters and price-conscious segments are likely to prefer a basic product at reasonable prices whereas " +
      "the enthusiasts and tech-savvy segments are opting for interesting features and performance. Socially conscious " +
      "consumers are motivated by ideals and as such are quite receptive to environmentally sustainable and safe products. " +
      "Trendy consumers on the other hand consider smartphones as an important part of their self-expression and " +
      "are drawn in by appealing designs and packaging.";
    assesment += "  " + responseresultcm?.E93;

    assesment += "\n\n" + responseresultcm?.K4;
    assesment += "\n\n" + responseresultcm?.K6;
    assesment += "\n As the global economy rebounds, the mobile phone market in India shows signs of improvement. Despite the " +
      "anticipated recovery, companies are cautious due to slim profit margins, and excessive marketing expenditure " +
      "could quickly erode profitability. The tech-savvy segment takes the lead, fueled by their technological interest, " +
      "growing disposable income, and regional advancements in mobile technology. The trendy segment will experience modest " +
      "growth as mobile phones become status symbols in popular culture. The price-conscious and socially conscious " +
      "segments are expected to experience smaller growth rates due to lingering economic concerns and an emphasis on " +
      "ethical considerations, respectively.";
    assesment += "  " + responseresultcm?.L7;

    assesment += "\n\n" + responseresultcm?.K9;
    for (let i of [10, 11, 12, 13, 15, 16, 17]) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`];
      if (i === 13) {
        assesment += "\n";
      }
    }

    assesment += "\n\n" + responseresultcm?.K19;
    assesment += "\n  " +
      responseresultcm?.L20 + "  " +
      responseresultcm?.M20 + "  " +
      responseresultcm?.N20 + "  " +
      responseresultcm?.O20 + "  " +
      responseresultcm?.P20 + "  " +
      responseresultcm?.Q20 + "  " +
      responseresultcm?.R20 + "  " +
      responseresultcm?.S20 + "  " +
      responseresultcm?.T20;
    for (let i = 21; i <= 29; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`] + "  " +
        responseresultcm?.[`M${i}`] + "  " +
        responseresultcm?.[`N${i}`] + "  " +
        responseresultcm?.[`O${i}`] + "  " +
        responseresultcm?.[`P${i}`] + "  " +
        responseresultcm?.[`Q${i}`] + "  " +
        responseresultcm?.[`R${i}`] + "  " +
        responseresultcm?.[`S${i}`] + "  " +
        responseresultcm?.[`T${i}`];
    }

    assesment += "\n\n" + responseresultcm?.K31;
    assesment += "\n  " +
      responseresultcm?.L32 + "  " +
      responseresultcm?.M32 + "  " +
      responseresultcm?.N32 + "  " +
      responseresultcm?.O32 + "  " +
      responseresultcm?.P32;
    for (let i = 33; i <= 39; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`] + "  " +
        responseresultcm?.[`M${i}`] + "  " +
        responseresultcm?.[`N${i}`] + "  " +
        responseresultcm?.[`O${i}`] + "  " +
        responseresultcm?.[`P${i}`];
    }

    assesment += "\n\n" + responseresultcm?.K41 + "  " + responseresultcm?.L41;

    assesment += "\n\n" +
      responseresultcm?.K43 + "  " +
      responseresultcm?.L43 + "  " +
      responseresultcm?.M43;
    for (let i = 44; i <= 48; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`] + "  " +
        responseresultcm?.[`M${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.K50 + "  " +
      responseresultcm?.L50 + "  " +
      responseresultcm?.M50;
    for (let i = 51; i <= 55; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`] + "  " +
        responseresultcm?.[`M${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.K57 + "  " +
      responseresultcm?.L57;
    for (let i = 58; i <= 62; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.K64 + "  ";
    assesment += "Description " +
      responseresultcm?.M64;
    assesment += "\n" + responseresultcm?.K65 + "  " + "The packaging of your products changes dynamically with the current trends, trying to appeal to the trend-savvy customer segments." + "  " + responseresultcm?.M65;
    assesment += "\n" + responseresultcm?.K66 + "  " + "Each product in your portfolio will have a slightly different packaging, emphasizing the main features and qualities of each product." + "  " + responseresultcm?.M66;
    assesment += "\n" + responseresultcm?.K67 + "  " + "Each product in your portfolio will have similar packaging. This is the most environmentally friendly packaging policy, but some customer segments might not find similar packaging across the product portfolio very appealing." + "  " + responseresultcm?.M67;

    assesment += "\n\n" +
      responseresultcm?.K69 + "  ";
    assesment += "Description " +
      responseresultcm?.M69;
    assesment += "\n" + responseresultcm?.K70 + "  " + "In this service level, repairability and software support are minimal. Repairs are outsourced to third-party service centers, and software updates will be infrequent or unsupported after a short period." + "  " + responseresultcm?.M70;
    assesment += "\n" + responseresultcm?.K71 + "  " + "This service level offers moderate repairability and software support. The company provides repair services through authorized service centers, and software updates will be available for a reasonable duration after the product's release." + "  " + responseresultcm?.M71;
    assesment += "\n" + responseresultcm?.K72 + "  " + "This service level prioritizes repairability and software support. The company ensures that repairs are readily available through authorized service centers, and software updates are regularly provided for an extended period to enhance the user experience and address potential issues." + "  " + responseresultcm?.M72;

    assesment += "\n\n" +
      responseresultcm?.K74 + "  ";
    assesment += "Description " +
      responseresultcm?.M74;
    assesment += "\n" + responseresultcm?.K75 + "  " + "The company does not implement any specific recycling program for its products. End-of-life devices may be disposed of through regular waste channels, potentially contributing to environmental pollution." + "  " + responseresultcm?.M75;
    assesment += "\n" + responseresultcm?.K76 + "  " + "The company establishes its own recycling facilities to responsibly manage end-of-life products. Materials are sorted, processed, and recycled in an environmentally friendly manner, reducing waste and promoting sustainability." + "  " + responseresultcm?.M76;
    assesment += "\n" + responseresultcm?.K77 + "  " + "The company collaborates with third-party recycling partners to handle end-of-life products. These partners specialize in recycling electronic waste and ensure that materials are processed in compliance with environmental regulations." + "  " + responseresultcm?.M77;
    assesment += "\n" + responseresultcm?.K78 + "  " + "The company incentivizes customers to recycle by offering to recycle a device for every new purchase made. This encourages responsible disposal of old devices and promotes circular economy principles." + "  " + responseresultcm?.M78;

    assesment += "\n\n" +
      responseresultcm?.K80 + "  ";
    assesment += "Description " +
      responseresultcm?.M80;
    assesment += "\n" + responseresultcm?.K81 + "  " + "Retail channels include physical stores where customers can directly purchase smartphones. This includes multi-brand outlets, brand-owned stores, and franchise stores." + "  " + responseresultcm?.M81;
    assesment += "\n" + responseresultcm?.K82 + "  " + "Online channels involve selling smartphones through e-commerce platforms and company websites. This allows for direct-to-consumer sales and reaches a wider audience." + "  " + responseresultcm?.M82;
    assesment += "\n" + responseresultcm?.K83 + "  " + "Specialist stores cater to specific customer segments or offer specialized services. Examples include tech-focused stores, flagship experience centers, or stores targeting environmentally conscious consumers." + "  " + responseresultcm?.M83;

    assesment += "\n\n" +
      responseresultcm?.K85 + "  " +
      responseresultcm?.L85;
    for (let i = 86; i <= 88; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.K90 + "  " +
      responseresultcm?.L90 + "  " +
      responseresultcm?.M90 + "  " +
      responseresultcm?.N90 + "  " +
      responseresultcm?.O90;

    for (let i = 91; i <= 96; i++) {
      assesment += "\n" +
        responseresultcm?.[`K${i}`] + "  " +
        responseresultcm?.[`L${i}`] + "  " +
        responseresultcm?.[`M${i}`] + "  " +
        responseresultcm?.[`N${i}`] + "  " +
        responseresultcm?.[`O${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V4;
    assesment += "\n\n" + responseresultcm?.V6;

    assesment += "\nVarious market studies are revealing an increasing appreciation for premium camera features across segments, " +
      "especially in the trendy segment. Premium camera technologies enable high-quality photo shooting even with mediocre " +
      "skills and the demand for advanced photo/video features is blossoming. A consumer advocacy group recently released " +
      "a report on smartphone sustainability, emphasizing the importance of sustainability in evaluating the environmental " +
      "impact of devices. The report also heavily criticized the unnecessary waste generated by packaging, which is believed " +
      "to shift consumer preferences towards more sustainable packaging. The trendy segments in both markets, however, are " +
      "still believed to be strongly attracted by dynamic packaging. Battery life was the third main point of the report, " +
      "naming battery problems as the number one reason for smartphones to go out of usage. Consumers are now more " +
      "interested in devices with longer battery life, as this not only provides greater convenience but also helps " +
      "reduce electronic waste by prolonging the device's lifespan. The costs of Extra memory and Durable screen features are " +
      "increasing slightly due to a disruption in the supply chain of components used in manufacturing the said features.";
    assesment += "  " + responseresultcm?.W7;

    assesment += "\n\n" + responseresultcm?.V9;
    assesment += "\n" +
      responseresultcm?.V10 + "  " +
      responseresultcm?.W10;
    for (let i = 11; i <= 13; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.V15 + "  " +
      responseresultcm?.W15;
    for (let i = 16; i <= 18; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V20;
    for (let i = 21; i <= 24; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V26;
    for (let i = 27; i <= 31; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V33;
    for (let i = 34; i <= 36; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V38;
    for (let i = 39; i <= 42; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V44;
    assesment += "\n" + "  " + "  " +
      responseresultcm?.W45 + "  " +
      responseresultcm?.X45 + "  " +
      responseresultcm?.Y45 + "  " +
      responseresultcm?.Z45 + "  " +
      responseresultcm?.AA45 + "  " +
      responseresultcm?.AB45 + "  " +
      responseresultcm?.AC45 + "  " +
      responseresultcm?.AD45 + "  " +
      responseresultcm?.AE45;
    for (let i = 46; i <= 54; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`] + "  " +
        responseresultcm?.[`X${i}`] + "  " +
        responseresultcm?.[`Y${i}`] + "  " +
        responseresultcm?.[`Z${i}`] + "  " +
        responseresultcm?.[`AA${i}`] + "  " +
        responseresultcm?.[`AB${i}`] + "  " +
        responseresultcm?.[`AC${i}`] + "  " +
        responseresultcm?.[`AD${i}`] + "  " +
        responseresultcm?.[`AE${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V56;
    assesment += "\n" + "  " + "  " +
      responseresultcm?.W57 + "  " +
      responseresultcm?.X57 + "  " +
      responseresultcm?.Y57 + "  " +
      responseresultcm?.Z57 + "  " +
      responseresultcm?.AA57;
    for (let i = 58; i <= 64; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`] + "  " +
        responseresultcm?.[`X${i}`] + "  " +
        responseresultcm?.[`Y${i}`] + "  " +
        responseresultcm?.[`Z${i}`] + "  " +
        responseresultcm?.[`AA${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V66 + "  " + responseresultcm?.W66;

    assesment += "\n\n" +
      responseresultcm?.V68 + "  " +
      responseresultcm?.W68 + "  " +
      responseresultcm?.X68;
    for (let i = 69; i <= 73; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`] + "  " +
        responseresultcm?.[`X${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.V75 + "  " +
      responseresultcm?.W75 + "  " +
      responseresultcm?.X75;
    for (let i = 76; i <= 80; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`] + "  " +
        responseresultcm?.[`X${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.V82 + "  " +
      responseresultcm?.W82;
    for (let i = 83; i <= 87; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.V89 + "  " +
      responseresultcm?.W89;
    for (let i = 90; i <= 92; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V94 + "  " + responseresultcm?.W94;
    for (let i = 95; i <= 97; i++) {
      assesment += "\n" + responseresultcm?.[`V${i}`] + "  " + responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V99 + "  " + responseresultcm?.W99;
    for (let i = 100; i <= 103; i++) {
      assesment += "\n" + responseresultcm?.[`V${i}`] + "  " + responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V105 + "  " + responseresultcm?.W105;
    for (let i = 106; i <= 108; i++) {
      assesment += "\n" + responseresultcm?.[`V${i}`] + "  " + responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V110 + "  " + responseresultcm?.W110;
    for (let i = 111; i <= 113; i++) {
      assesment += "\n" + responseresultcm?.[`V${i}`] + "  " + responseresultcm?.[`W${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.V115 + "  " +
      responseresultcm?.W115 + "  " +
      responseresultcm?.X115 + "  " +
      responseresultcm?.Y115 + "  " +
      responseresultcm?.Z115;
    for (let i = 116; i <= 121; i++) {
      assesment += "\n" +
        responseresultcm?.[`V${i}`] + "  " +
        responseresultcm?.[`W${i}`] + "  " +
        responseresultcm?.[`X${i}`] + "  " +
        responseresultcm?.[`Y${i}`] + "  " +
        responseresultcm?.[`Z${i}`];
    }

    assesment += "\n\n" + responseresultcm?.V123 + "  " + responseresultcm?.W123;

    "\n\nPhase 3" +
      "\n\nOutlook" +
      "\n" + "Various market studies are revealing an increasing appreciation for premium camera features across segments, " +
      "especially in the trendy segment. Premium camera technologies enable high-quality photo shooting even with mediocre " +
      "skills and the demand for advanced photo/video features is blossoming. A consumer advocacy group recently released " +
      "a report on smartphone sustainability, emphasizing the importance of sustainability in evaluating the environmental " +
      "impact of devices. The report also heavily criticized the unnecessary waste generated by packaging, which is believed " +
      "to shift consumer preferences towards more sustainable packaging. The trendy segments in both markets, however, are still " +
      "believed to be strongly attracted by dynamic packaging. Battery life was the third main point of the report, naming battery " +
      "problems as the number one reason for smartphones to go out of usage. Consumers are now more interested in devices with longer " +
      "battery life, as this not only provides greater convenience but also helps reduce electronic waste by prolonging the device's lifespan. " +
      "The costs of Extra memory and Durable screen features are increasing slightly due to a disruption in the supply chain of components used in manufacturing the said features. " + responseresultcm.AH7 +
      "\n\n" + responseresultcm.AG9;
    for (let i = 10; i <= 13; i++) {
      assesment += "\n" + responseresultcm?.[`AG${i}`] + "  " + responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" + responseresultcm?.AG15 + "  " + responseresultcm?.AH15;
    for (let i = 16; i <= 18; i++) {
      assesment += "\n" + responseresultcm?.[`AG${i}`] + "  " + responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" + responseresultcm?.AG20;
    for (let i = 21; i <= 25; i++) {
      assesment += "\n" + responseresultcm?.[`AG${i}`] + "  " + responseresultcm?.[`AH${i}`];
    }

    "\n\n" + responseresultcm.AG27 + "  " + responseresultcm.AH27;

    assesment += "\n\n" + responseresultcm?.AG29;
    for (let i = 30; i <= 32; i++) {
      assesment += "\n" + responseresultcm?.[`AG${i}`] + "  " + responseresultcm?.[`AH${i}`];
    }


    "\n\n" + responseresultcm.AG34 + "  " + responseresultcm.AH34;
    "\n\n" + responseresultcm.AG36;

    assesment += "\n" + "  " +
      responseresultcm?.AH37 + "  " +
      responseresultcm?.AI37 + "  " +
      responseresultcm?.AJ37 + "  " +
      responseresultcm?.AK37 + "  " +
      responseresultcm?.AL37 + "  " +
      responseresultcm?.AM37 + "  " +
      responseresultcm?.AN37 + "  " +
      responseresultcm?.AO37 + "  " +
      responseresultcm?.AP37;

    for (let i = 38; i <= 46; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`] + "  " +
        responseresultcm?.[`AI${i}`] + "  " +
        responseresultcm?.[`AJ${i}`] + "  " +
        responseresultcm?.[`AK${i}`] + "  " +
        responseresultcm?.[`AL${i}`] + "  " +
        responseresultcm?.[`AM${i}`] + "  " +
        responseresultcm?.[`AN${i}`] + "  " +
        responseresultcm?.[`AO${i}`] + "  " +
        responseresultcm?.[`AP${i}`];
    }


    "\n\n" + responseresultcm.AG48;

    assesment += "\n" +
      "  " + responseresultcm?.AH49 + "  " +
      responseresultcm?.AI49 + "  " +
      responseresultcm?.AJ49 + "  " +
      responseresultcm?.AK49 + "  " +
      responseresultcm?.AL49;
    for (let i = 50; i <= 56; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`] + "  " +
        responseresultcm?.[`AI${i}`] + "  " +
        responseresultcm?.[`AJ${i}`] + "  " +
        responseresultcm?.[`AK${i}`] + "  " +
        responseresultcm?.[`AL${i}`];
    }

    "\n\n" + responseresultcm.AG58 + "  " + responseresultcm.AH58;

    assesment += "\n\n" +
      responseresultcm?.AG60 + "  " +
      responseresultcm?.AH60 + "  " +
      responseresultcm?.AI60;
    for (let i = 61; i <= 65; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`] + "  " +
        responseresultcm?.[`AI${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG67 + "  " +
      responseresultcm?.AH67 + "  " +
      responseresultcm?.AI67;
    for (let i = 68; i <= 72; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`] + "  " +
        responseresultcm?.[`AI${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG74 + "  " +
      responseresultcm?.AH74;
    for (let i = 75; i <= 79; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG81 + "  " +
      responseresultcm?.AH81;
    for (let i = 82; i <= 84; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG86 + "  " +
      responseresultcm?.AH86;
    for (let i = 87; i <= 89; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG91 + "  " +
      responseresultcm?.AH91;
    for (let i = 92; i <= 95; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG97 + "  " +
      responseresultcm?.AH97;
    for (let i = 98; i <= 100; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG102 + "  " +
      responseresultcm?.AH102;
    for (let i = 103; i <= 105; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`];
    }

    assesment += "\n\n" +
      responseresultcm?.AG107 + "  " +
      responseresultcm?.AH107 + "  " +
      responseresultcm?.AI107 + "  " +
      responseresultcm?.AJ107 + "  " +
      responseresultcm?.AK107;
    for (let i = 108; i <= 113; i++) {
      assesment += "\n" +
        responseresultcm?.[`AG${i}`] + "  " +
        responseresultcm?.[`AH${i}`] + "  " +
        responseresultcm?.[`AI${i}`] + "  " +
        responseresultcm?.[`AJ${i}`] + "  " +
        responseresultcm?.[`AK${i}`];
    }


    "\n\n" + responseresultcm.AG115 + "  " + responseresultcm.AH115 +

      "\n\n" + " Player's Input based on Fixed data" +
      "\n\Parameters" + "  " + "Input" +
      "\nPhase 1" +
      "\nProduct 1 Launch " + "  " + result[0] +
      "\nDesign " + "  " + result[1] +
      "\nPerformance " + "  " + result[2] +
      "\nBattery Life " + "  " + result[3] +
      "\nPremium Camera " + "  " + result[4] +
      "\nExtra Memory " + "  " + result[5] +
      "\nPremium Display " + "  " + result[6] +
      "\nDurable Screen " + "  " + result[7] +
      "\nSecurity " + "  " + result[8] +
      "\nProjected Sales, Mn units " + "  " + result[9] +
      "\nPrice, INR " + "  " + result[10] +
      "\nProduct 2 Launch " + "  " + result[11] +
      "\nDesign " + "  " + result[12] +
      "\nPerformance " + "  " + result[13] +
      "\nBattery Life " + "  " + result[14] +
      "\nPremium Camera " + "  " + result[15] +
      "\nExtra Memory " + "  " + result[16] +
      "\nPremium Display " + "  " + result[17] +
      "\nDurable Screen " + "  " + result[18] +
      "\nSecurity " + "  " + result[19] +
      "\nProjected Sales, Mn units " + "  " + result[20] +
      "\nPrice, INR " + "  " + result[21] +
      "\nPromotion, Mn INR " + "  " + result[22] +
      "\nPackaging " + "  " + result[23] +
      "\nRepairability & Services " + "  " + result[24] +
      "\nRecycling " + "  " + result[25] +
      "\nRetail " + "  " + result[26] +
      "\nOnline " + "  " + result[27] +
      "\nSpecialist Stores " + "  " + result[28] +
      "\nPhase 2" +
      "\nProduct 1 Launch " + "  " + result[29] +
      "\nDesign " + "  " + result[30] +
      "\nPerformance " + "  " + result[31] +
      "\nBattery Life " + "  " + result[32] +
      "\nPremium Camera " + "  " + result[33] +
      "\nExtra Memory " + "  " + result[34] +
      "\nPremium Display " + "  " + result[35] +
      "\nDurable Screen " + "  " + result[36] +
      "\nSecurity " + "  " + result[37] +
      "\nProjected Sales, Mn units " + "  " + result[38] +
      "\nPrice, INR " + "  " + result[39] +
      "\nProduct 2 Launch " + "  " + result[40] +
      "\nDesign " + "  " + result[41] +
      "\nPerformance " + "  " + result[42] +
      "\nBattery Life " + "  " + result[43] +
      "\nPremium Camera " + "  " + result[44] +
      "\nExtra Memory " + "  " + result[45] +
      "\nPremium Display " + "  " + result[46] +
      "\nDurable Screen " + "  " + result[47] +
      "\nSecurity " + "  " + result[48] +
      "\nProjected Sales, Mn units " + "  " + result[49] +
      "\nPrice, INR " + "  " + result[50] +
      "\nPromotion, Mn INR " + "  " + result[51] +
      "\nPackaging " + "  " + result[52] +
      "\nRepairability & Services " + "  " + result[53] +
      "\nRecycling " + "  " + result[54] +
      "\nRetail " + "  " + result[55] +
      "\nOnline " + "  " + result[56] +
      "\nSpecialist Stores " + "  " + result[57] +
      "\nPhase 3" +
      "\nProduct 1 Launch " + "  " + result[58] +
      "\nDesign " + "  " + result[59] +
      "\nPerformance " + "  " + result[60] +
      "\nBattery Life " + "  " + result[61] +
      "\nPremium Camera " + "  " + result[62] +
      "\nExtra Memory " + "  " + result[63] +
      "\nPremium Display " + "  " + result[64] +
      "\nDurable Screen " + "  " + result[65] +
      "\nSecurity " + "  " + result[66] +
      "\nProjected Sales, Mn units " + "  " + result[67] +
      "\nPrice, INR " + "  " + result[68] +
      "\nProduct 2 Launch " + "  " + result[69] +
      "\nDesign " + "  " + result[70] +
      "\nPerformance " + "  " + result[71] +
      "\nBattery Life " + "  " + result[72] +
      "\nPremium Camera " + "  " + result[73] +
      "\nExtra Memory " + "  " + result[74] +
      "\nPremium Display " + "  " + result[75] +
      "\nDurable Screen " + "  " + result[76] +
      "\nSecurity " + "  " + result[77] +
      "\nProjected Sales, Mn units " + "  " + result[78] +
      "\nPrice, INR " + "  " + result[79] +
      "\nPromotion, Mn INR " + "  " + result[80] +
      "\nPackaging " + "  " + result[81] +
      "\nRepairability & Services " + "  " + result[82] +
      "\nRecycling " + "  " + result[83] +
      "\nRetail " + "  " + result[84] +
      "\nOnline " + "  " + result[85] +
      "\nSpecialist Stores " + "  " + result[86];


    assesment += "\n\nOutput generated by system based on input & fixed data" +
      "\n\nCompany Sales & Market Share, Phase 3" +
      "\nParameter" + "  " + "Sales, Mn units" + "  " + "Market Share";
    assesment +=
      "\n" + responseresultdatabase?.AW135 + "  " + Number(responseresultdatabase?.AW136).toFixed(2) + "  " + (Number(responseresultdatabase?.AW137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase?.AX143 + "  " + Number(responseresultdatabase?.AX136).toFixed(2) + "  " + (Number(responseresultdatabase?.AX137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase?.AY143 + "  " + Number(responseresultdatabase?.AY136).toFixed(2) + "  " + (Number(responseresultdatabase?.AY137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase?.AZ143 + "  " + Number(responseresultdatabase?.AZ136).toFixed(2) + "  " + (Number(responseresultdatabase?.AZ137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase?.BA143 + "  " + Number(responseresultdatabase?.BA136).toFixed(2) + "  " + (Number(responseresultdatabase?.BA137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase?.BB143 + "  " + Number(responseresultdatabase?.BB136).toFixed(2) + "  " + (Number(responseresultdatabase?.BB137) * 100).toFixed(0) + "%";

    assesment +=
      "\n\nCompany Market Share, Phase 1 to 3" +
      "\nParameter" + "  " + "Phase 1" + "  " + "Phase 2" + "  " + "Phase 3";
    assesment +=
      "\n" + responseresultdatabase.AW135 + "  " + (Number(responseresultdatabase.C137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.W137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AW137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.D135 + "  " + (Number(responseresultdatabase.D137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.X137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AX137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.E135 + "  " + (Number(responseresultdatabase.E137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Y137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AY137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.F135 + "  " + (Number(responseresultdatabase.F137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Z137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AZ137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.G135 + "  " + (Number(responseresultdatabase.G137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AA137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BA137) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.H135 + "  " + (Number(responseresultdatabase.H137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AB137) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BB137) * 100).toFixed(0) + "%";

    assesment +=
      "\n\nProduct Market Share, Phase 1 to 3" +
      "\nParameter" + "  " + "Phase 1" + "  " + "Phase 2" + "  " + "Phase 3";
    assesment +=
      "\n" + responseresultdatabase.AW9 + "  " + (Number(responseresultdatabase.C133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.W133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AW133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.AX9 + "  " + (Number(responseresultdatabase.D133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.X133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AX133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.AY9 + "  " + (Number(responseresultdatabase.E133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Y133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AY133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.AZ9 + "  " + (Number(responseresultdatabase.F133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Z133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AZ133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BA9 + "  " + (Number(responseresultdatabase.G133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AA133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BA133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BB9 + "  " + (Number(responseresultdatabase.H133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AB133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BB133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BC9 + "  " + (Number(responseresultdatabase.I133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AC133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BC133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BD9 + "  " + (Number(responseresultdatabase.J133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AD133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BD133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BE9 + "  " + (Number(responseresultdatabase.K133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AE133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BE133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BF9 + "  " + (Number(responseresultdatabase.L133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AF133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BF133) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.BG9 + "  " + (Number(responseresultdatabase.M133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AG133) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BG133) * 100).toFixed(0) + "%";

    assesment += "\n\nCompany Operating Margins, Phase 1 to 3" +
      "\nParameter" + "  " + "Phase 1" + "  " + "Phase 2" + "  " + "Phase 3";
    assesment += "\n" + responseresultdatabase.AW135 + "  " + (Number(responseresultdatabase.C156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.W156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AW156) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.D135 + "  " + (Number(responseresultdatabase.D156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.X156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AX156) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.E135 + "  " + (Number(responseresultdatabase.E156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Y156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AY156) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.F135 + "  " + (Number(responseresultdatabase.F156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.Z156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AZ156) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.G135 + "  " + (Number(responseresultdatabase.G156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AA156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BA156) * 100).toFixed(0) + "%" +
      "\n" + responseresultdatabase.H135 + "  " + (Number(responseresultdatabase.H156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.AB156) * 100).toFixed(0) + "%" + "  " + (Number(responseresultdatabase.BB156) * 100).toFixed(0) + "%";

    let financialRows = [
      ["Parameter", 143],
      ["Revenue", 144],
      ["Variable Cost", 145],
      ["Gross Profit", 146],
      ["Production Line Cost + Update Cost", 147],
      ["Administration Cost", 148],
      ["Market Research Cost", 149],
      ["Promotion Cost", 150],
      ["Channel Cost", 151],
      ["Packaging Cost", 152],
      ["Recycling Cost", 153],
      ["Repairability Cost", 154],
      ["Operating Profit/Loss", 155]
    ];

    assesment += "\n\nFinancial Statement, Mn INR, Phase 3";
    financialRows.forEach(([label, row]) => {
      assesment += "\n" + label + " " +
        responseresultdatabase["AW" + row] + "  " +
        responseresultdatabase["AX" + row] + "  " +
        responseresultdatabase["AY" + row] + "  " +
        responseresultdatabase["AZ" + row] + "  " +
        responseresultdatabase["BA" + row] + "  " +
        responseresultdatabase["BB" + row];
    });

    let phase2Cols = ["W", "X", "Y", "Z", "AA", "AB"];
    let financialRows1 = [
      ["Parameter", 143],
      ["Revenue", 144],
      ["Variable Cost", 145],
      ["Gross Profit", 146],
      ["Production Line Cost + Update Cost", 147],
      ["Administration Cost", 148],
      ["Market Research Cost", 149],
      ["Promotion Cost", 150],
      ["Channel Cost", 151],
      ["Packaging Cost", 152],
      ["Recycling Cost", 153], // fixed spelling
      ["Repairability Cost", 154],
      ["Operating Profit/Loss", 155]
    ];

    assesment += "\n\nFinancial Statements, Mn INR, Phase 2";
    financialRows1.forEach(([label, row]) => {
      assesment += "\n" + label + " " +
        phase2Cols.map(col => responseresultdatabase[col + row]).join("  ");
    });
    let phase1Cols = ["C", "D", "E", "F", "G", "H"];
    let financialRows2 = [
      ["Parameter", 143],
      ["Revenue", 144],
      ["Variable Cost", 145],
      ["Gross Profit", 146],
      ["Production Line Cost + Update Cost", 147],
      ["Administration Cost", 148],
      ["Market Research Cost", 149],
      ["Promotion Cost", 150],
      ["Channel Cost", 151],
      ["Packaging Cost", 152],
      ["Recycling Cost", 153], // fixed spelling
      ["Repairability Cost", 154],
      ["Operating Profit/Loss", 155]
    ];

    assesment += "\n\nFinancial Statements, Mn INR, Phase 1";
    financialRows2.forEach(([label, row]) => {
      assesment += "\n" + label + " " +
        phase1Cols.map(col => responseresultdatabase[col + row]).join("  ");
    });

    let kpiTCRows = [
      ["Market Share", 195],
      ["Revenue, Mn INR", 196],
      ["Operating Profit/Loss, Mn INR", 197],
      ["Operating Margin", 198]
    ];

    assesment += "\n\nKPI TC" +
      "\nParameter  Output";

    kpiTCRows.forEach(([label, row]) => {
      assesment += "\n" + label + "  " + responseresultdatabase["AW" + row];
    });

    let goalRows = [
      ["Market Share", 118],
      ["Operating Margin", 119]
    ];

    assesment += "\n\nGoal to be optimized";

    goalRows.forEach(([label, row]) => {
      assesment += "\n" + label + "  " + responseresultcm["AH" + row];
    });


    return assesment;
  }
}
