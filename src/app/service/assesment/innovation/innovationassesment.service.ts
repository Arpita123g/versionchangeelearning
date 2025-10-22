import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InnovationassesmentService {

  constructor() { }
  resultString :string = '';
  useranalysisSubmit(responseresultcm: any,  result: any ,responseresultdatabase: any  ): string {
    // for(let i=1; i<7; i++){
    //   result[i]==1?"Yes":" no"
    // }
    // for(let i=10; i<16; i++){
    //   result[i]==1?"Yes":" no"
    // }
    // for(let i=35; i<43; i++){
    //   result[i]==1?"Yes":" no"
    // }
    for (let i = 1; i <= 42; i++) {
      if ((i >= 1 && i < 7) || (i >= 10 && i < 16) || (i >= 35 && i < 43)) {
        result[i] = result[i] == 1 ? "Yes" : "No";
      }
    }
    

    let assesment = "\n\nFixed Data" +
        "\n\nMarket Outlook" +
        "\n" + responseresultcm.b5 +
        "\n\nParameters" +
        "\n" + responseresultcm.b8 + " " + responseresultcm.c8 +
        "\n" + responseresultcm.b9 + " " + responseresultcm.c9 +
        "\n" + responseresultcm.b10 + " " + responseresultcm.c10 +
        "\n" + responseresultcm.b11 + " " + responseresultcm.c11 +
        "\n" + responseresultcm.b12 + " " + responseresultcm.c12 +
        "\n" + responseresultcm.b13 + " " + responseresultcm.c13 +
      "\n\n" + responseresultcm.e4 + " " + responseresultcm.f5 +" " + responseresultcm.g5 + " " + responseresultcm.h5 +
        "\n" + responseresultcm.e6 + " " + responseresultcm.f6 +" " + responseresultcm.g6 + " " + responseresultcm.h6 +
        "\n" + responseresultcm.e7 + " " + responseresultcm.f7 + " " + responseresultcm.g7 + " " + responseresultcm.h7 +
        "\n" + responseresultcm.e8 + " " + responseresultcm.f8 + " " + responseresultcm.g8 + " " + responseresultcm.h8 +
        "\n" + responseresultcm.e9 + " " + responseresultcm.f9 + " " + responseresultcm.g9 + " " + responseresultcm.h9 +
        "\n" + responseresultcm.e10 + " " + responseresultcm.f10 + " " + responseresultcm.g10 + " " + responseresultcm.h10 +
        "\n" + responseresultcm.e11 + " " + responseresultcm.f11 + " " + responseresultcm.g11 + " " + responseresultcm.h11 +
        "\n" + responseresultcm.e12 + " " + responseresultcm.f12 + " " + responseresultcm.g12 + " " + responseresultcm.h12 +
        "\n" + responseresultcm.e13 + " " + responseresultcm.f13 + " " + responseresultcm.g13 + " " + responseresultcm.h13 +
        "\n" + responseresultcm.e14 + " " + responseresultcm.f14 + " " + responseresultcm.g14 + " " + responseresultcm.h14 +
        "\n" + responseresultcm.e15 + " " + responseresultcm.f15 + " " + responseresultcm.g15 + " " + responseresultcm.h15 +
        "\n" + responseresultcm.e16 + " " + responseresultcm.f16 + " " + responseresultcm.g16 + " " + responseresultcm.h16 +
      "n\n" + responseresultcm.e18 + " " + responseresultcm.f18 + " " + responseresultcm.g18 + " " + responseresultcm.h18 +
        "\n" + responseresultcm.e19 + " " + "Ensure all aspects of the product comply with local and international laws and regulations by hiring a legal firm to conduct regular audits"+" "+ "and establish clear terms of service and privacy policies." +" "+ "Without legal compliance, the startup risks facing lawsuits, fines, and reputational damage, which could hinder its growth and viability in the market." + " " + responseresultcm.g19 + " " + responseresultcm.h19 +
        "\n" + responseresultcm.e20 + " " + "Obtain necessary permits and licenses, stay updated on regulatory changes, and implement measures to address requirements related to data privacy,"+ " "+ "content moderation, and accessibility. Non-compliance with regulatory requirements can lead to legal penalties, operational disruptions," + " " +"and damage to the startup's reputation, affecting its ability to attract customers and investors." + " " + responseresultcm.g20 + " " + responseresultcm.h20 +
        "\n" + responseresultcm.e21 + " " + "Conduct trademark searches, file trademark applications, and implement copyright protection measures to safeguard brand assets and original content."+" "+"Without trademarks and copyrights, the startup risks potential infringement claims, loss of brand identity,"+" " + "and dilution of intellectual property rights, impacting its competitiveness and market positioning." + " " + responseresultcm.g21 + " " + responseresultcm.h21 +
        "\n" + responseresultcm.e22 + " " + "Conduct prior art searches, file patent applications, and collaborate with patent attorneys to protect innovative features or functionalities of the product." +" "+ "Without patent protection, the startup risks imitation and unauthorized use of its technology by competitors, diminishing its ability to differentiate itself in the market and secure market share." + " " + responseresultcm.g22 + " " + responseresultcm.h22 +
        "\n" + responseresultcm.e23 + " " + "Implement open source software license compliance processes, maintain an inventory of open source components,"+ " " + "and establish internal policies for managing open source usage. Failure to comply with open source licenses" + " "+ "can result in legal disputes, loss of goodwill within the open source community, and potential damage to the startup's reputation and partnerships" + " " + responseresultcm.g23 + " " + responseresultcm.h23 +
        "\n" + responseresultcm.e24 + " " +  "Adhere to industry standards and best practices for AR/VR development, participate in industry forums, and certify" + " " + "compliance with relevant standards to build trust with customers and partners. Non-compliance with industry" + " " + "standards can limit market acceptance, hinder interoperability with other products and services, and reduce the startup's competitiveness in the industry. " + responseresultcm.g24 + " " + responseresultcm.h24 +
      "\n\nArtisan Studio - Developers" +
        "\n" + responseresultcm.k7 + " " + responseresultcm.l7 + " " + responseresultcm.m7 + " " + responseresultcm.n7 +
        "\n" + responseresultcm.k8 + " " + responseresultcm.l8 + " " + responseresultcm.m8 + " " + responseresultcm.n8 +
        "\n" + responseresultcm.k9 + " " + responseresultcm.l9 + " " + responseresultcm.m9 + " " + responseresultcm.n9 +
        "\n" + responseresultcm.k10 + " " + responseresultcm.l10 + " " + responseresultcm.m10 + " " + responseresultcm.n10 +
        "\n" + responseresultcm.k11 + " " + responseresultcm.l11 + " " + responseresultcm.m11 + " " + responseresultcm.n11 +
        "\n" + responseresultcm.k12 + " " + responseresultcm.l12 + " " + responseresultcm.m12 + " " + responseresultcm.n12 +
        "\n" + responseresultcm.k13 + " " + responseresultcm.l13 + " " + responseresultcm.m13 + " " + responseresultcm.n13 +
        "\n" + responseresultcm.k14 + " " + responseresultcm.l14 + " " + responseresultcm.m14 + " " + responseresultcm.n14 +
        "\n" + responseresultcm.k15 + " " + responseresultcm.l15 + " " + responseresultcm.m15 + " " + responseresultcm.n15 +
        "\n" + responseresultcm.k16 + " " + responseresultcm.l16 + " " + responseresultcm.m16 + " " + responseresultcm.n16 +
        "\n" + responseresultcm.k17 + " " + responseresultcm.l17 + " " + responseresultcm.m17 + " " + responseresultcm.n17 +
      "\n\nVR Fitness Adventure - Developers" +
        "\n" + responseresultcm.k20 + " " + responseresultcm.l20 + " " + responseresultcm.m20 + " " + responseresultcm.n20 +
        "\n" + responseresultcm.k21 + " " + responseresultcm.l21 + " " + responseresultcm.m21 + " " + responseresultcm.n21 +
        "\n" + responseresultcm.k22 + " " + responseresultcm.l22 + " " + responseresultcm.m22 + " " + responseresultcm.n22 +
        "\n" + responseresultcm.k23 + " " + responseresultcm.l23 + " " + responseresultcm.m23 + " " + responseresultcm.n23 +
        "\n" + responseresultcm.k24 + " " + responseresultcm.l24 + " " + responseresultcm.m24 + " " + responseresultcm.n24 +
        "\n" + responseresultcm.k25 + " " + responseresultcm.l25 + " " + responseresultcm.m25 + " " + responseresultcm.n25 +
        "\n" + responseresultcm.k26 + " " + responseresultcm.l26 + " " + responseresultcm.m26 + " " + responseresultcm.n26 +
        "\n" + responseresultcm.k27 + " " + responseresultcm.l27 + " " + responseresultcm.m27 + " " + responseresultcm.n27 +
        "\n" + responseresultcm.k28 + " " + responseresultcm.l28 + " " + responseresultcm.m28 + " " + responseresultcm.n28 +
        "\n" + responseresultcm.k29 + " " + responseresultcm.l29 + " " + responseresultcm.m29 + " " + responseresultcm.n29 +
        "\n" + responseresultcm.k30 + " " + responseresultcm.l30 + " " + responseresultcm.m30 + " " + responseresultcm.n30 +
      "\n\nARcane Adventures - Developers" +
        "\n" + responseresultcm.k33 + " " + responseresultcm.l33 + " " + responseresultcm.m33 + " " + responseresultcm.n33 +
        "\n" + responseresultcm.k34 + " " + responseresultcm.l34 + " " + responseresultcm.m34 + " " + responseresultcm.n34 +
        "\n" + responseresultcm.k35 + " " + responseresultcm.l35 + " " + responseresultcm.m35 + " " + responseresultcm.n35 +
        "\n" + responseresultcm.k36 + " " + responseresultcm.l36 + " " + responseresultcm.m36 + " " + responseresultcm.n36 +
        "\n" + responseresultcm.k37 + " " + responseresultcm.l37 + " " + responseresultcm.m37 + " " + responseresultcm.n37 +
        "\n" + responseresultcm.k38 + " " + responseresultcm.l38 + " " + responseresultcm.m38 + " " + responseresultcm.n38 +
        "\n" + responseresultcm.k39 + " " + responseresultcm.l39 + " " + responseresultcm.m39 + " " + responseresultcm.n39 +
        "\n" + responseresultcm.k40 + " " + responseresultcm.l40 + " " + responseresultcm.m40 + " " + responseresultcm.n40 +
        "\n" + responseresultcm.k41 + " " + responseresultcm.l41 + " " + responseresultcm.m41 + " " + responseresultcm.n41 +
        "\n" + responseresultcm.k42 + " " + responseresultcm.l42 + " " + responseresultcm.m42 + " " + responseresultcm.n42 +
        "\n" + responseresultcm.k43 + " " + responseresultcm.l43 + " " + responseresultcm.m43 + " " + responseresultcm.n43 +
      "\n\nMarketing" +
        "\n" + responseresultcm.k46 + " " + responseresultcm.l46 + " " + responseresultcm.m46 +
        "\n" + responseresultcm.k47 + " " + responseresultcm.l47 + " " + responseresultcm.m47 +
        "\n" + responseresultcm.k48 + " " + responseresultcm.l48 + " " + responseresultcm.m48 +
        "\n" + responseresultcm.k49 + " " + responseresultcm.l49 + " " + responseresultcm.m49 +
        "\n" + responseresultcm.k50 + " " + responseresultcm.l50 + " " + responseresultcm.m50 +
        "\n" + responseresultcm.k51 + " " + responseresultcm.l51 + " " + responseresultcm.m51 +
        "\n" + responseresultcm.k52 + " " + responseresultcm.l52 + " " + responseresultcm.m52 +
        "\n" + responseresultcm.k53 + " " + responseresultcm.l53 + " " + responseresultcm.m53 +
        "\n" + responseresultcm.k54 + " " + responseresultcm.l54 + " " + responseresultcm.m54 +
        "\n" + responseresultcm.k55 + " " + responseresultcm.l55 + " " + responseresultcm.m55 +
        "\n" + responseresultcm.k56 + " " + responseresultcm.l56 + " " + responseresultcm.m56 +
      "\n\nIndustry Experts" +
        "\n" + responseresultcm.k59 + " " + responseresultcm.l59 + " " + responseresultcm.m59 +
        "\n" + responseresultcm.k60 + " " + responseresultcm.l60 + " " + responseresultcm.m60 +
        "\n" + responseresultcm.k61 + " " + responseresultcm.l61 + " " + responseresultcm.m61 +
        "\n" + responseresultcm.k62 + " " + responseresultcm.l62 + " " + responseresultcm.m62 +
        "\n" + responseresultcm.k63 + " " + responseresultcm.l63 + " " + responseresultcm.m63 +
        "\n" + responseresultcm.k64 + " " + responseresultcm.l64 + " " + responseresultcm.m64 +
        "\n" + responseresultcm.k65 + " " + responseresultcm.l65 + " " + responseresultcm.m65 +
        "\n" + responseresultcm.k66 + " " + responseresultcm.l66 + " " + responseresultcm.m66 +
        "\n" + responseresultcm.k67 + " " + responseresultcm.l67 + " " + responseresultcm.m67 +
        "\n" + responseresultcm.k68 + " " + responseresultcm.l68 + " " + responseresultcm.m68 +
        "\n" + responseresultcm.k69 + " " + responseresultcm.l69 + " " + responseresultcm.m69 +
      "\n\nARtisan Studio" +
        "\n" + responseresultcm.k72 + " " + responseresultcm.l72 + " " + responseresultcm.m72 + " " + responseresultcm.n72 + " " + responseresultcm.o72 +
        "\n" + responseresultcm.k73 + " " + responseresultcm.l73 + " " + "Empower users to create and manipulate 3D models in real-time, offering a hands-on approach to design and visualization." + " " + responseresultcm.n73 + " " + responseresultcm.o73 +
        "\n" + responseresultcm.k74 + " " + responseresultcm.l74 + " " + "Integrate AR technology to overlay virtual designs onto physical spaces, allowing clients to visualize proposed projects in their real-world environments." + " " + responseresultcm.n74 + " " + responseresultcm.o74 +
        "\n" + responseresultcm.k75 + " " + responseresultcm.l75 + " " + "Create a collaborative platform where multiple users can simultaneously work on design projects, share feedback, and make real-time revisions." + " " + responseresultcm.n75 + " " + responseresultcm.o75 +
        "\n" + responseresultcm.k76 + " " + responseresultcm.l76 + " " + "Generate virtual walkthroughs of architectural designs, allowing clients to explore spaces from different perspectives and interact with design elements." + " " + responseresultcm.n76 + " " + responseresultcm.o76 +
        "\n" + responseresultcm.k77 + " " + responseresultcm.l77 + " " + "Integrate project management tools and features within the platform to streamline workflow management, task assignment, and progress tracking." + " " + responseresultcm.n77 + " " + responseresultcm.o77 +
        "\n" + responseresultcm.k78 + " " + responseresultcm.l78 + " " + "Provide a library of customizable design templates and assets to accelerate the design process and inspire creativity." + " " + responseresultcm.n78 + " " + responseresultcm.o78 +
      "\n\nVR Fitness Adventure" +
        "\n" + responseresultcm.k81 + " " + responseresultcm.l81 + " " + responseresultcm.m81 + " " + responseresultcm.n81 + " " + responseresultcm.o81 +
        "\n" + responseresultcm.k82 + " " + responseresultcm.l82 + " " + "Offer virtual fitness classes led by certified instructors, providing users with guided workouts and personalized training sessions." + " " + responseresultcm.n82 + " " + responseresultcm.o82 +
        "\n" + responseresultcm.k83 + " " + responseresultcm.l83 + " " + "Gamify workout experiences with immersive challenges, rewards, and progress tracking, making exercise more engaging and enjoyable." + " " + responseresultcm.n83 + " " + responseresultcm.o83 +
        "\n" + responseresultcm.k84 + " " + responseresultcm.l84 + " " + "Organize virtual fitness competitions and challenges where users can compete against friends,"+" " + "family, or global participants, fostering friendly competition and motivation." + " " + responseresultcm.n84 + " " + responseresultcm.o84 +
        "\n" + responseresultcm.k85 + " " + responseresultcm.l85 + " " + "Generate personalized training plans based on users' fitness goals, preferences, and performance metrics, offering tailored guidance and support." + " " + responseresultcm.n85 + " " + responseresultcm.o85 +
        "\n" + responseresultcm.k86 + " " + responseresultcm.l86 + " " + "Create immersive VR environments inspired by real-world locations, such as beaches, forests,"+ " " + "or mountains, offering users a scenic backdrop for their workouts." + " " + responseresultcm.n86 + " " + responseresultcm.o86 +
        "\n" + responseresultcm.k87 + " " + responseresultcm.l87 + " " + "Integrate health and fitness tracking features to monitor users' progress, track calories burned," + " " + "and analyze workout data, empowering users to track their fitness journey." + " " + responseresultcm.n87 + " " + responseresultcm.o87 +
      "\n\nARcane Adventures" +
        "\n" + responseresultcm.k90 + " " + responseresultcm.l90 + " " + responseresultcm.m90 + " " + responseresultcm.n90 + " " + responseresultcm.o90 +
        "\n" + responseresultcm.k91 + " " + responseresultcm.l91 + " " + "Develop interactive educational modules and lessons covering various subjects, allowing users to learn through immersive experiences and hands-on activities." + " " + responseresultcm.n91 + " " + responseresultcm.o91 +
        "\n" + responseresultcm.k92 + " " + responseresultcm.l92 + " " + "Organize virtual field trips to historical sites, museums, and landmarks, enabling students to explore and learn about different cultures and historical periods." + " " + responseresultcm.n92 + " " + responseresultcm.o92 +
        "\n" + responseresultcm.k93 + " " + responseresultcm.l93 + " " + "Create language learning adventures set in immersive virtual environments, allowing users to practice"+ " "+ "and enhance their language skills through real-world scenarios" + " " + responseresultcm.n93 + " " + responseresultcm.o93 +
        "\n" + responseresultcm.k94 + " " + responseresultcm.l94 + " " + "Design virtual STEM exploration labs where students can conduct experiments, solve puzzles, and explore scientific concepts in a virtual setting." + " " + responseresultcm.n94 + " " + responseresultcm.o94 +
        "\n" + responseresultcm.k95 + " " + responseresultcm.l95 + " " + "Host creative storytelling workshops where users can create and share their own stories using virtual storytelling tools and multimedia elements." + " " + responseresultcm.n95 + " " + responseresultcm.o95 +
        "\n" + responseresultcm.k96 + " " + responseresultcm.l96 + " " + "Embark on historical time travel adventures where users can explore different time"+ " "+ "periods and historical events through immersive storytelling and gameplay." + " " + responseresultcm.n96 + " " + responseresultcm.o96;
        "\n\nCustomer Distribution Start" +
        "\n" + responseresultcm.q7 + " " + responseresultcm.r7 +
        "\n" + responseresultcm.q8 + " " + responseresultcm.r8 +
        "\n" + responseresultcm.q9 + " " + responseresultcm.r9 +
      "\n\n" + responseresultcm.q11 + " " + responseresultcm.r11 +
        "\n" + responseresultcm.q12 + " " + responseresultcm.r12 +
        "\n" + responseresultcm.q13 + " " + responseresultcm.r13 +
        "\n" + responseresultcm.q14 + " " + responseresultcm.r14 +
        "\n" + responseresultcm.q15 + " " + responseresultcm.r15 +
        "\n" + responseresultcm.q16 + " " + responseresultcm.r16 +
        "\n" + responseresultcm.q17 + " " + responseresultcm.r17 +
        "\n" + responseresultcm.q18 + " " + responseresultcm.r18 +
        "\n" + responseresultcm.q19 + " " + responseresultcm.r19 +
        "\n" + responseresultcm.q20 + " " + responseresultcm.r20 +
        "\n" + responseresultcm.q22 + " " + responseresultcm.r22 + " " + responseresultcm.s22 + " " + responseresultcm.t22 +
        "\n" + responseresultcm.q23 + " " + responseresultcm.r23 + " " + responseresultcm.s23 + " " + responseresultcm.t23 +
        "\n" + responseresultcm.q24 + " " + responseresultcm.r24 + " " + responseresultcm.s24 + " " + responseresultcm.t24 +
        "\n" + responseresultcm.q25 + " " + responseresultcm.r25 + " " + responseresultcm.s25 + " " + responseresultcm.t25 +
      "\n\nARtisan Studio" +
        "\n" + responseresultcm.q29 + " " + responseresultcm.r29 +
        "\n" + responseresultcm.q30 + " " + responseresultcm.r30 +
        "\n" + responseresultcm.q31 + " " + responseresultcm.r31 +
        "\n" + responseresultcm.q32 + " " + responseresultcm.r32 +
        "\n" + responseresultcm.q33 + " " + responseresultcm.r33 +
        "\n" + responseresultcm.q34 + " " + responseresultcm.r34 +
        "\n" + responseresultcm.q35 + " " + responseresultcm.r35 +
        "\n" + responseresultcm.q36 + " " + responseresultcm.r36 +
        "\n" + responseresultcm.q37 + " " + responseresultcm.r37 +
        "\n" + responseresultcm.q38 + " " + responseresultcm.r38 +
        "\n" + responseresultcm.q39 + " " + responseresultcm.r39 +
        "\n" + responseresultcm.q40 + " " + responseresultcm.r40 +
        "\n" + responseresultcm.q41 + " " + responseresultcm.r41 +
        "\n" + responseresultcm.q42 + " " + responseresultcm.r42 +
        "\n" + responseresultcm.q43 + " " + responseresultcm.r43 +
        "\n" + responseresultcm.q44 + " " + responseresultcm.r44 +
      "\n\nVR Fitness Adventure" +
        "\n" + responseresultcm.q47 + " " + responseresultcm.r47 +
        "\n" + responseresultcm.q48 + " " + responseresultcm.r48 +
        "\n" + responseresultcm.q49 + " " + responseresultcm.r49 +
        "\n" + responseresultcm.q50 + " " + responseresultcm.r50 +
        "\n" + responseresultcm.q51 + " " + responseresultcm.r51 +
        "\n" + responseresultcm.q52 + " " + responseresultcm.r52 +
        "\n" + responseresultcm.q53 + " " + responseresultcm.r53 +
        "\n" + responseresultcm.q54 + " " + responseresultcm.r54 +
        "\n" + responseresultcm.q55 + " " + responseresultcm.r55 +
        "\n" + responseresultcm.q56 + " " + responseresultcm.r56 +
        "\n" + responseresultcm.q57 + " " + responseresultcm.r57 +
        "\n" + responseresultcm.q58 + " " + responseresultcm.r58 +
        "\n" + responseresultcm.q59 + " " + responseresultcm.r59 +
        "\n" + responseresultcm.q60 + " " + responseresultcm.r60 +
        "\n" + responseresultcm.q61 + " " + responseresultcm.r61 +
        "\n" + responseresultcm.q62 + " " + responseresultcm.r62 +
        "\n" + responseresultcm.q63 + " " + responseresultcm.r63 +
      "\n\nARcane Adventures" +
        "\n" + responseresultcm.q66 + " " + responseresultcm.r66 +
        "\n" + responseresultcm.q67 + " " + responseresultcm.r67 +
        "\n" + responseresultcm.q68 + " " + responseresultcm.r68 +
        "\n" + responseresultcm.q69 + " " + responseresultcm.r69 +
        "\n" + responseresultcm.q70 + " " + responseresultcm.r70 +
        "\n" + responseresultcm.q71 + " " + responseresultcm.r71 +
        "\n" + responseresultcm.q72 + " " + responseresultcm.r72 +
        "\n" + responseresultcm.q73 + " " + responseresultcm.r73 +
        "\n" + responseresultcm.q74 + " " + responseresultcm.r74 +
        "\n" + responseresultcm.q75 + " " + responseresultcm.r75 +
        "\n" + responseresultcm.q76 + " " + responseresultcm.r76 +
        "\n" + responseresultcm.q77 + " " + responseresultcm.r77 +
        "\n" + responseresultcm.q78 + " " + responseresultcm.r78 +
        "\n" + responseresultcm.q79 + " " + responseresultcm.r79 +
        "\n" + responseresultcm.q80 + " " + responseresultcm.r80 +
        "\n" + responseresultcm.q81 + " " + responseresultcm.r81 +
        "\n" + responseresultcm.q82 + " " + responseresultcm.r82 +                                   
      "\n\nARtisan Studio" +
        "\n" + responseresultcm.q85 + " " + responseresultcm.r85 + " " + responseresultcm.s85 + " " + responseresultcm.t85 +
        "\n" + responseresultcm.q86 + " " + "Integrate the product into online marketplaces of specialized platforms for architectural and design software, leveraging their large user bases and existing customer traffic." + " " + responseresultcm.s86 + " " + responseresultcm.t86 +
        "\n" + responseresultcm.q87 + " " + "Employ a dedicated direct sales team to reach out to architecture firms, design studios, and construction companies directly, building"+ " "+ "relationships and offering personalized demonstrations and support." + " " + responseresultcm.s87 + " " + responseresultcm.t87 +
        "\n" + responseresultcm.q88 + " " + "Forge strategic partnerships with hardware retailers and distributors specializing in architectural tools and equipment, allowing the" + " "+ "product to be showcased and sold alongside complementary hardware products." + " " + responseresultcm.s88 + " " + responseresultcm.t88 +
      "\n\nVR Fitness Adventure" +
        "\n" + responseresultcm.q91 + " " + responseresultcm.r91 + " " + responseresultcm.s91 + " " + responseresultcm.t91 +
        "\n" + responseresultcm.q92 + " " + "Partner with fitness centers and gyms to offer VR fitness experiences as part of their membership packages, providing access to a"+ " "+ "captive audience of health-conscious individuals." + " " + responseresultcm.s92 + " " + responseresultcm.t92 +
        "\n" + responseresultcm.q93 + " " + "Collaborate with online subscription platforms focusing on fitness and wellness content, such as Cult.fit or Fittr, to promote and"+" "+ "distribute the product to their existing subscriber base." + " " + responseresultcm.s93 + " " + responseresultcm.t93 +
        "\n" + responseresultcm.q94 + " " + "Establish partnerships with VR arcades and gaming cafes to feature the product as part of their entertainment offerings, attracting"+" "+ "gamers and fitness enthusiasts looking for immersive experiences." + " " + responseresultcm.s94 + " " + responseresultcm.t94 +
      "\n\nARcane Adventures" +
        "\n" + responseresultcm.q97 + " " + responseresultcm.r97 + " " + responseresultcm.s97 + " " + responseresultcm.t97 +
        "\n" + responseresultcm.q98 + " " + "Form partnerships with schools, colleges, and educational institutions to integrate the product into their"+ " "+ "curriculum or offer it as a supplementary learning tool, tapping into the large student and educator market." + " " + responseresultcm.s98 + " " + responseresultcm.t98 +
        "\n" + responseresultcm.q99 + " " + "Collaborate with online educational platforms to feature the product as part of their digital learning offerings, leveraging their extensive reach and user engagement." + " " + responseresultcm.s99 + " " + responseresultcm.t99 +
        "\n" + responseresultcm.q100 + " " + "Distribute the product through retail bookstores and educational supply stores specializing in educational"+" "+ "materials and resources, making it accessible to students, parents, and educators." + " " + responseresultcm.s100 + " " + responseresultcm.t100 +
      "\n\n" + responseresultcm.q102 + " " + responseresultcm.r102 +
        "\n" + responseresultcm.q103 + " " + responseresultcm.r103 +
        "\n" + responseresultcm.q104 + " " + responseresultcm.r104 +
        "\n" + responseresultcm.q105 + " " + responseresultcm.r105 +
        "\n" + responseresultcm.q106 + " " + responseresultcm.r106 +
        "\n" + responseresultcm.q107 + " " + responseresultcm.r107 +
        "\n" + responseresultcm.q108 + " " + responseresultcm.r108 +
        "\n" + responseresultcm.q109 + " " + responseresultcm.r109 +
        "\n" + responseresultcm.q110 + " " + responseresultcm.r110 +
        "\n" + responseresultcm.q111 + " " + responseresultcm.r111 +
        "\n" + responseresultcm.q112 + " " + responseresultcm.r112 +
        "\n" + responseresultcm.q113 + " " + responseresultcm.r113 +
        "\n" + responseresultcm.q114 + " " + responseresultcm.r114 +
      "\n\n" + responseresultcm.q116 + " " + responseresultcm.r116 +
        "\n" + responseresultcm.q117 + " " + responseresultcm.r117 +
        "\n" + responseresultcm.q118 + " " + responseresultcm.r118 +
        "\n" + responseresultcm.q119 + " " + responseresultcm.r119 +
        "\n" + responseresultcm.q120 + " " + responseresultcm.r120 +
        "\n" + responseresultcm.q121 + " " + responseresultcm.r121 +
        "\n" + responseresultcm.q122 + " " + responseresultcm.r122 +
        "\n" + responseresultcm.q123 + " " + responseresultcm.r123 +
        "\n" + responseresultcm.q124 + " " + responseresultcm.r124 +
        "\n" + responseresultcm.q125 + " " + responseresultcm.r125 +
        "\n" + responseresultcm.q126 + " " + responseresultcm.r126 +
        "\n" + responseresultcm.q127 + " " + responseresultcm.r127 +
        "\n" + responseresultcm.q128 + " " + responseresultcm.r128 +
      "\n\n" + responseresultcm.q130 + " " + responseresultcm.r130 +
        "\n" + responseresultcm.q131 + " " + responseresultcm.r131 +
        "\n" + responseresultcm.q132 + " " + responseresultcm.r132 +
        "\n" + responseresultcm.q133 + " " + responseresultcm.r133 +
        "\n" + responseresultcm.q134 + " " + responseresultcm.r134 +
        "\n" + responseresultcm.q135 + " " + responseresultcm.r135 +
        "\n" + responseresultcm.q136 + " " + responseresultcm.r136 +
        "\n" + responseresultcm.q137 + " " + responseresultcm.r137 +
        "\n" + responseresultcm.q138 + " " + responseresultcm.r138 +
        "\n" + responseresultcm.q139 + " " + responseresultcm.r139 +
        "\n" + responseresultcm.q140 + " " + responseresultcm.r140 +
        "\n" + responseresultcm.q141 + " " + responseresultcm.r141 +
        "\n" + responseresultcm.q142 + " " + responseresultcm.r142 +
      "\n\nARtisan Studio" +
        "\n" + responseresultcm.v7 + " " + responseresultcm.w7 + " " + responseresultcm.x7 + " " + responseresultcm.y7 +
        "\n" + responseresultcm.v8 + " " + "Collaborate with leading architectural design software companies to integrate ARtisan Studio with their platforms, offering seamless interoperability and enhanced design capabilities." + " " + responseresultcm.x8 + " " + responseresultcm.y8 +
        "\n" + responseresultcm.v9 + " " + "Partner with established architectural firms to showcase ARtisan Studio in their projects, gaining exposure to their client base and receiving endorsements from industry experts." + " " + responseresultcm.x9 + " " + responseresultcm.y9 +
        "\n" + responseresultcm.v10 + " " + "Collaborate with universities and design schools to offer ARtisan Studio as part of their curriculum or conduct workshops and training sessions for students, fostering brand awareness and building a future user base." + " " + responseresultcm.x10 + " " + responseresultcm.y10 +
        "\n" + responseresultcm.v11 + " " + "Form strategic alliances with real estate developers to incorporate ARtisan Studio into their project planning and marketing efforts, enabling potential buyers to visualize properties in immersive detail." + " " + responseresultcm.x11 + " " + responseresultcm.y11 +
        "\n" + responseresultcm.v12 + " " + "Sponsor industry conferences, trade shows, and events organized by architecture and design associations to showcase ARtisan Studio, network with industry professionals, and gain credibility in the market." + " " + responseresultcm.x12 + " " + responseresultcm.y12 +
      "\n\nVR Fitness Adventure" +
        "\n" + responseresultcm.v15 + " " + responseresultcm.w15 + " " + responseresultcm.x15 + " " + responseresultcm.y15 +
        "\n" + responseresultcm.v16 + " " + "Collaborate with fitness equipment manufacturers to bundle VR Fitness Adventure with their products or develop custom VR fitness solutions, leveraging their distribution channels and brand recognition." + " " + responseresultcm.x16 + " " + responseresultcm.y16 +
        "\n" + responseresultcm.v17 + " " + "Partner with health and wellness influencers, fitness bloggers, and social media personalities to promote VR Fitness Adventure through sponsored content, reviews, and workout challenges." + " " + responseresultcm.x17 + " " + responseresultcm.y17 +
        "\n" + responseresultcm.v18 + " " + "Collaborate with corporate wellness programs to offer VR Fitness Adventure as part of employee wellness initiatives, promoting physical activity and stress relief in the workplace." + " " + responseresultcm.x18 + " " + responseresultcm.y18 +
        "\n" + responseresultcm.v19 + " " + "Partner with gaming studios or platforms to develop gamified VR fitness experiences, combining elements of entertainment and exercise to appeal to a broader audience of gamers and fitness enthusiasts." + " " + responseresultcm.x19 + " " + responseresultcm.y19 +
        "\n" + responseresultcm.v20 + " " + "Collaborate with popular fitness apps to integrate VR Fitness Adventure into their platforms, allowing users to track their VR workouts and synchronize fitness data with their existing health and activity profiles." + " " + responseresultcm.x20 + " " + responseresultcm.y20 +
      "\n\nARcane Adventures" +
        "\n" + responseresultcm.v23 + " " + responseresultcm.w23 + " " + responseresultcm.x23 + " " + responseresultcm.y23 +
        "\n" + responseresultcm.v24 + " " + "Collaborate with educational publishing houses to develop ARcane Adventures as part of interactive educational materials, textbooks, and digital learning resources for schools and students." + " " + responseresultcm.x24 + " " + responseresultcm.y24 +
        "\n" + responseresultcm.v25 + " " + "Partner with educational technology companies to integrate ARcane Adventures into their learning platforms, offering interactive storytelling and immersive educational experiences to students worldwide." + " " + responseresultcm.x25 + " " + responseresultcm.y25 +
        "\n" + responseresultcm.v26 + " " + "Collaborate with government educational initiatives and programs focused on digital literacy and innovation in education to promote ARcane Adventures in schools, colleges, and community learning centers." + " " + responseresultcm.x26 + " " + responseresultcm.y26 +
        "\n" + responseresultcm.v27 + " " + "Form alliances with edutainment content creators, YouTubers, and educational influencers to develop ARcane Adventures-themed educational content, tutorials, and interactive experiences for online platforms." + " " + responseresultcm.x27 + " " + responseresultcm.y27 +
        "\n" + responseresultcm.v28 + " " + "Sponsor nonprofit organizations and foundations dedicated to education and literacy to support their initiatives and promote ARcane Adventures as a tool for enhancing learning outcomes and engagement." + " " + responseresultcm.x28 + " " + responseresultcm.y28 +
      "\n\n" + responseresultcm.v30 + " " + responseresultcm.w30 + " " + responseresultcm.x30 + " " + responseresultcm.y30 +
        "\n" + responseresultcm.v31 + " " + "Embraces new and emerging technologies quickly, often serving as a trendsetter and influencer in the industry. Prioritizes innovation and experimentation to stay ahead of the competition." + " " + responseresultcm.x31 + " " + responseresultcm.y31 +
        "\n" + responseresultcm.v32 + " " + "Quick to adopt new technologies and innovations, seeking a competitive edge and differentiation in the market. Willing to take calculated risks to explore new opportunities." + " " + responseresultcm.x32 + " " + responseresultcm.y32 +
        "\n" + responseresultcm.v33 + " " + "Prefers to observe and assess new technologies before committing to adoption, prioritizing stability and proven track records. May wait for market validation and case studies before making decisions." + " " + responseresultcm.x33 + " " + responseresultcm.y33 +
        "\n" + responseresultcm.v34 + " " + "Resistant to change and innovation, preferring to stick with familiar and traditional technologies. Often adopts new technologies only when absolutely necessary or when forced by market pressures." + " " + responseresultcm.x34 + " " + responseresultcm.y34 +
      "\n\n" + responseresultcm.v36 + " " + responseresultcm.w36 + " " + responseresultcm.x36 + " " + responseresultcm.y36 +
        "\n" + responseresultcm.v37 + " " + "Invests heavily in ongoing research and development efforts to continuously enhance product features, performance, and user experience. Adopts agile development methodologies to iterate and release updates rapidly." + " " + responseresultcm.x37 + " " + responseresultcm.y37 +
        "\n" + responseresultcm.v38 + " " + "Actively participates in providing feedback and collaborating with the development team to shape the product roadmap. Prioritizes early access to new features and updates." + " " + responseresultcm.x38 + " " + responseresultcm.y38 +
        "\n" + responseresultcm.v39 + " " + "Takes a cautious approach to product updates, preferring stability over rapid changes. Focuses on incremental improvements and bug fixes rather than radical innovations." + " " + responseresultcm.x39 + " " + responseresultcm.y39 +
        "\n" + responseresultcm.v40 + " " + "Reluctant to invest in continuous improvement efforts, resulting in stagnation and outdated features. May prioritize cost-saving measures over product enhancements." + " " + responseresultcm.x40 + " " + responseresultcm.y40 +
       "\n\n" + responseresultcm.v42 + " " + responseresultcm.w42 +
        "\n" + responseresultcm.v43 + " " + responseresultcm.w43 +
        "\n" + responseresultcm.v44 + " " + responseresultcm.w44 +
        "\n" + responseresultcm.v45 + " " + responseresultcm.w45 +
        "\n" + responseresultcm.v46 + " " + responseresultcm.w46 +
        "\n" + responseresultcm.v47 + " " + responseresultcm.w47 +
        "\n" + responseresultcm.v48 + " " + responseresultcm.w48 +
        "\n" + responseresultcm.v49 + " " + responseresultcm.w49 +
        "\n" + responseresultcm.v50 + " " + responseresultcm.w50 +
        "\n" + responseresultcm.v51 + " " + responseresultcm.w51 +
        "\n" + responseresultcm.v52 + " " + responseresultcm.w52 +
        "\n" + responseresultcm.v53 + " " + responseresultcm.w53 +
      "\n\n" + responseresultcm.v55 + " " + responseresultcm.w55 +
        "\n" + responseresultcm.v56 + " " + responseresultcm.w56 +
        "\n" + responseresultcm.v57 + " " + responseresultcm.w57 +
        "\n" + responseresultcm.v58 + " " + responseresultcm.w58 +
        "\n" + responseresultcm.v59 + " " + responseresultcm.w59 +
      "\n\nExpenses growth y-o-y" + " " + responseresultcm.w61 +
      "\n\nPlayer's Decision - Input" +
      "\n\nParameter" + " " + "Input" +
        "\n" + "Product" + " " + result[0] +
        "\n" + responseresultcm.e19 + " " + result[1]+
        "\n" + responseresultcm.e20 + " " + result[2] +
        "\n" + responseresultcm.e21 + " " + result[3] +
        "\n" + responseresultcm.e22 + " " + result[4] +
        "\n" + responseresultcm.e23 + " " + result[5] +
        "\n" + responseresultcm.e24 + " " + result[6] +
        "\n" + "No. of Developers" + " " + result[7] +
        "\n" + "No. of Industry Expert" + " " + result[8] +
        "\n" + "No. of Marketeer" + " " + result[9] +
        "\n" + result[51] + " " + result[10] +
        "\n" + result[52] + " " + result[11] +
        "\n" + result[53] + " " + result[12] +
        "\n" + result[54] + " " + result[13] +
        "\n" + result[55] + " " + result[14] +
        "\n" + result[56] + " " + result[15] +
        "\n" + "In-App Guidance" + " " + result[16] +
        "\n" + "User Onboarding" + " " + result[17] +
        "\n" + "Interactive Help Cente" + " " + result[18] +
        "\n" + "Customizable User Profiles" + " " + result[19] +
        "\n" + "Community Forums" + " " + result[20] +
        "\n" + "Multi-Platform Compatibility" + " " + result[21] +
        "\n" + "Analytics and Reporting" + " " + result[22] +
        "\n" + "Customization Options" + " " + result[23] +
        "\n" + "Offline Access" + " " + result[24] +
        "\n" + result[45] + " " + result[25] +
        "\n" + result[46] + " " + result[26] +
        "\n" + result[47] + " " + result[27] +
        "\n" + result[48] + " " + result[28] +
        "\n" + result[49] + " " + result[29] +
        "\n" + result[50] + " " + result[30] +
        "\n" + "Basic package price per user per year, k INR" + " " + result[31] +
        "\n" + "Standard package price per user per year, k INR" + " " + result[32] +
        "\n" + "Premium package price per user per year, k INR" + " " + result[33] +
        "\n" + "Promotion, k INR" + " " + result[34] +
        "\n" + result[57] + " " + result[35] +
        "\n" + result[58] + " " + result[36] +
        "\n" + result[59] + " " + result[37] +
        "\n" + result[60] + " " + result[38] +
        "\n" + result[61] + " " + result[39] +
        "\n" + result[62] + " " + result[40] +
        "\n" + result[63] + " " + result[41] +
        "\n" + result[64] + " " + result[42] +
        "\n" + "Technology Adoption" + " " + result[43] +
        "\n" + "Continous Improvement" + " " + result[44] +
        "\n\nOutput - System Generated" +
        "\n\nSales units" +
        "\n" + "Parameter" + " " + "Year 1" + "year 3" +
        "\n" + "Basic Package" + " " + responseresultdatabase.j53 + " " + responseresultdatabase.k53 +
        "\n" + "Standard Package" + " " + responseresultdatabase.j54 + " " + responseresultdatabase.k54 +
        "\n" + "Premium Package" + " " + responseresultdatabase.j55 + " " + responseresultdatabase.k55 +
        "\n" + "Total Sales" + " " + responseresultdatabase.j52 + " " + responseresultdatabase.k52 +
        "\n\nCash balance, k INR" +
        "\n" + "Parameter" + " " + "Year 1" +
        "\n" + "Beginning cash" + " " + responseresultdatabase.o36 +
        "\n" + "Expenses" + " " + responseresultdatabase.o37 +
        "\n" + "Cash infusion" + " " + responseresultdatabase.o38 +
        "\n" + "Ending cash" + " " + responseresultdatabase.o39 +
        "\n\nIncome Statement, k INR" +
        "\n" + "Parameter" + " " + "Year 1" + "year 3" +
        "\n" + "Revenue" + " " + responseresultdatabase.j36 + " " + responseresultdatabase.k36 +
        "\n" + "Compliance" + " " + responseresultdatabase.j38 + " " + responseresultdatabase.k38 +
        "\n" + "Resource" + " " + responseresultdatabase.j39 + " " + responseresultdatabase.k39 +
        "\n" + "Promotion" + " " + responseresultdatabase.j40 + " " + responseresultdatabase.k40 +
        "\n" + "Distribution" + " " + responseresultdatabase.j41 + " " + responseresultdatabase.k41 +
        "\n" + "Collaboration" + " " + responseresultdatabase.j42 + " " + responseresultdatabase.k42 +
        "\n" + "Technology" + " " + responseresultdatabase.j43 + " " + responseresultdatabase.k43 +
        "\n" + "Total Cost" + " " + responseresultdatabase.j44 + " " + responseresultdatabase.k44 +
        "\n" + "Profit/Loss, k INR" + " " + responseresultdatabase.j45 + " " + responseresultdatabase.k45 +
        "\n\nKPI" +
        "\n" + "Parameter" + " " + "Output" +
        "\n" + "Product" + " " + responseresultdatabase.c8 +
        "\n" + "Development time, months" + " " + responseresultdatabase.j4 +
        "\n" + "Quality score %" + " " + (Number(responseresultdatabase.j5)*100).toFixed(0) + "%" +
        "\n" + "Average price, k INR" + " " + responseresultdatabase.j15 +
        "\n" + "Monthly burn, k INR" + " " + responseresultdatabase.j48 +
        "\n" + "Runaway, months" + " " + responseresultdatabase.j49;
      return assesment;
  }
}
