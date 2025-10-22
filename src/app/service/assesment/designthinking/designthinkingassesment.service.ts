import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignthinkingassesmentService {

  constructor() { }

  useranalysisSubmit(responseresultcm: any, result: any, responseresultdatabase: any): string {
    let assesment = "\n\nFixed Data" +
      "\n\nObserve" +
      "\n" + responseresultcm.b5 +
      "\n\nUser Personas" +
      "\n" + "Rohan" + " " + "Age : 28 " +
      "Occupation : Software Engineer " +
    //   "Location : Bengaluru" +
    //   "Tech - savvy, loves gadgets and is fitness conscious. " +
    //   "Goals : Stay updated with tech, improve his health, manage work - life balance. " +
    //   "Pain Points : Wants a longer battery life, expects a sleek design without compromising functionality." +
      "\n" + "Aarti" + " " + "Age : 34 " +
      "Occupation : School Teacher " +
    //   "Location : Mumbai " +
    //   "Not very tech-savvy but wants to track her steps and calories. Also loves to swim. " +
    //   "Goals : Stay fit, keep track of her schedule, ensure the watch is water-resistant. " +
    //   "Pain Points : Wants an easy user interface, needs localized language support." +
      "\n" + "Vikram" + " " + "Age : 22 " +
      "Occupation : College Student " +
    //   "Location : Pune " +
    //   "Into fashion, looking for affordable options with a good look. " +
    //   "Goals : Make a style statement, stay connected, manage his college schedule. " +
    //   "Pain Points : Affordability, wishes for customizable watch faces to match his style." +
      "\n\nUser Interviews" +
      "\n" + "Rohan" + " " + "I love tech, but I hate having to charge devices often. " +
      "I wish my smartwatch could last at least 4 days on a single charge. Also, I want it to sync seamlessly " +
      "with my phone and laptop." +
      "\n" + "Aarti" + " " + "I need something simple to understand. It would be a plus " +
      "if it can have features in Hindi. Also, I swim daily, so water resistance is a must." +
      "\n" + "Vikram" + " " + "For me, it's about style and functionality. I want something " +
      "that looks great on my wrist but doesn't burn a hole in my pocket." +
      "\n\nUsual Journey Map" +
      "\n" + "Journey Map 1" + " " + "Discovery : Reads about the new smartwatch on a tech blog. " +
      "Consideration : Checks reviews on YouTube and compares with other brands. " +
      "Purchase : Buys it online during a sale. " +
      "Usage : Wears it daily, syncs with his devices, occasionally uses fitness features. " +
      "Advocacy : Recommends to friends if he finds the feature satisfactory." +
      "\n" + "Journey Map 2" + " " + "Discovery : Hears about the watch from a colleague. " +
      "Consideration : Visits a retail store to try it on. " +
      "Purchase : Buys it from the store for the feel-good factor. " +
      "Usage : Uses it mainly for fitness tracking and schedule reminders. " +
      "Advocacy : Shares experience with other if it's easy to use and helps stay organized." +
      "\n\nSentiment Analysis" +
      "\nHistorical data based on users feedback" +
      "\n" + responseresultcm.d22 + " " + Number(responseresultcm.e22) * 100 + "%" +
      "\n" + responseresultcm.d23 + " " + Number(responseresultcm.e23) * 100 + "%" +
      "\n" + responseresultcm.d24 + " " + Number(responseresultcm.e24) * 100 + "%" +
      "\n\n" + responseresultcm.d26 + " " + responseresultcm.e26 + " " + responseresultcm.f26 + " " + responseresultcm.g26 + " " + responseresultcm.h26 + " " + responseresultcm.i26 + " " + responseresultcm.j26 +
      "\n" + responseresultcm.d27 + " " + Number(responseresultcm.e27) * 100 + "%" + " " + Number(responseresultcm.f27) * 100 + "%" + " " + Number(responseresultcm.g27) * 100 + "%" + " " + responseresultcm.h27 + " " + responseresultcm.i27 + " " + responseresultcm.j27 +
      "\n" + responseresultcm.d28 + " " + Number(responseresultcm.e28) * 100 + "%" + " " + Number(responseresultcm.f28) * 100 + "%" + " " + Number(responseresultcm.g28) * 100 + "%" + " " +
      "\n" + responseresultcm.d29 + " " + Number(responseresultcm.e29) * 100 + "%" + " " + Number(responseresultcm.f29) * 100 + "%" + " " + Number(responseresultcm.g29) * 100 + "%" + " " + responseresultcm.h29 + " " + responseresultcm.i29 + " " + responseresultcm.j29 +
      "\n" + responseresultcm.d30 + " " + Number(responseresultcm.e30) * 100 + "%" + " " + Number(responseresultcm.f30) * 100 + "%" + " " + Number(responseresultcm.g30) * 100 + "%" + " " + responseresultcm.h30 + " " + responseresultcm.i30 + " " + responseresultcm.j30 +
      "\n" + responseresultcm.d31 + " " + Number(responseresultcm.e31) * 100 + "%" + " " + Number(responseresultcm.f31) * 100 + "%" + " " + Number(responseresultcm.g31) * 100 + "%" + " " + responseresultcm.h31 + " " + responseresultcm.i31 + " " + responseresultcm.j31 +
      "\n" + responseresultcm.d32 + " " + Number(responseresultcm.e32) * 100 + "%" + " " + Number(responseresultcm.f32) * 100 + "%" + " " + Number(responseresultcm.g32) * 100 + "%" + " " +
      "\n" + responseresultcm.d33 + " " + Number(responseresultcm.e33) * 100 + "%" + " " + Number(responseresultcm.f33) * 100 + "%" + " " + Number(responseresultcm.g33) * 100 + "%" + " " + responseresultcm.h33 + " " + responseresultcm.i33 + " " + responseresultcm.j33 +
      "\n" + responseresultcm.d34 + " " + Number(responseresultcm.e34) * 100 + "%" + " " + Number(responseresultcm.f34) * 100 + "%" + " " + Number(responseresultcm.g34) * 100 + "%" + " " + responseresultcm.h34 + " " + responseresultcm.i34 + " " + responseresultcm.j34 +
      "\n" + responseresultcm.d35 + " " + Number(responseresultcm.e35) * 100 + "%" + " " + Number(responseresultcm.f35) * 100 + "%" + " " + Number(responseresultcm.g35) * 100 + "%" + " " + responseresultcm.h35 + " " + responseresultcm.i35 + " " + responseresultcm.j35 +
      "\n\nSWOT Analysis" +
      "\nStrength " + " " + " Market Experience: Already have a 20% market share with fitness trackers in urban India. " +
      "Location : Based in Bengaluru, a tech hub, providing access to talent and innovation. " +
      "Consumer Insight : Historical data and research insights from past products. " +
      "\nWeakness " + " " + "New Segment : No experience in the smartwatch sector. " +
      "Resource Constraints : Might be limited in terms of R&D budget compared to global giants. " +
      "Brand Recognition : Not as globally recognized as competitors like Apple or Samsung." +
      "\nOpportunities " + " " + "Growing Market : Indian smartwatch market witnessing a 30% YoY growth. " +
      "Localized Features : 50% of surveyed individuals desired features like local language support and Indian " +
      "payment gateways. " +
      "Health Consciousness : Rising fitness awareness among urban populations." +
      "\nThreats " + " " + "Competition : Presence of established brands with deep pockets. " +
      "Tech Evolution : Rapidly changing technology may require frequent updates and iterations. " +
      "Price Sensitivity: With brands like Noise and Boat offering affordable options, pricing the " +
      "product competitively is crucial." +
      "\n\nGap Analysis" +
      "\nPoint 1 " + " " + "Battery Life : 85% preference, but most brands offer only 1-2 days of battery life. " +
      "Gap : Extended battery life of 3-4 days." +
      "\nPoint 2 " + " " + "Affordability : 65% users prioritize this, but top-tier smartwatches are expensive. " +
      "Gap : A mid-range smartwatch with premium features." +
      "\nPoint 3 " + " " + "Localization: 60% showed preference, but few international brands cater specifically to " +
      "Indian preferences. Gap : Features like regional language support and local payment integration." +
      "\n\nConstraints" +
      "\nPoint 1 " + " " + "Budget : Limited R&D funds compared to global competitors." +
      "\nPoint 2 " + " " + "Manufacturing : Achieving a balance between quality and affordability in production." +
      "\nPoint 3 " + " " + "Time : Rapidly evolving market; delay in launch might result in outdated technology." +
      "\nPoint 4 " + " " + "Market Perception : Being perceived as a local brand might be a challenge when competing " +
      "against international giants." +
      "\n\n" + responseresultcm.l23 + " " + responseresultcm.m23 +
      "\n" + responseresultcm.l24 + " " + responseresultcm.m24 +
      "\n" + responseresultcm.l25 + " " + responseresultcm.m25 +
      "\n\n" + responseresultcm.l27 + " " + responseresultcm.m27 +
      "\n" + responseresultcm.l28 + " " + responseresultcm.m28 +
      "\n" + responseresultcm.l29 + " " + responseresultcm.m29 +
      "\n\n" + responseresultcm.l31 + " " + responseresultcm.m31 +
      "\n" + responseresultcm.l32 + " " + responseresultcm.m32 +
      "\n" + responseresultcm.l33 + " " + responseresultcm.m33 +
      "\n\n" + responseresultcm.o6 + " " + responseresultcm.p6 + " " + responseresultcm.q6 + " " + responseresultcm.r6 + " " + responseresultcm.s6 + " " + responseresultcm.t6 + " " + responseresultcm.u6 + " " + responseresultcm.v6 +
      "\n" + responseresultcm.o7 + " " + "Features : Advanced health metrics, Ayurvedic wellness insights, ECG, " +
      "regional health advisories. " +
      "Target Segment : Health-conscious adults, especially from urban areas like Bengaluru. " +
      "Closest Competitor : Apple Watch Series 6 (Market Share: 30%, Revenue: INR 15,000 Crore). " +
      "Context : Rising health consciousness among urban Indians." + " " +
      responseresultcm.q7 + " " + responseresultcm.r7 + " " + responseresultcm.s7 + " " + responseresultcm.t7 + " " + responseresultcm.u7 + " " +
      "'The wellness insights tailored to Indian health metrics are a refreshing change. However, the regional health " +
      "advisories could be more diverse, covering a broader range of health concerns. '" +
      "Future Want : 'It would be beneficial to have more local diet plans integrated and possibly partnerships " +
      "with local fitness trainers.'" +
      "\n" + responseresultcm.o8 + " " + "Features : Support for multiple Indian languages, instant translation, " +
      "cultural event reminders. " +
      "Target Segment : Multilingual professionals and seniors who prefer regional languages. " +
      "Closest Competitor : Garmin Venu (Market Share: 10%, Revenue: INR 3,500 Crore). " +
      "Context : 50% of users desired localized features." + " " +
      responseresultcm.q8 + " " + responseresultcm.r8 + " " + responseresultcm.s8 + " " + responseresultcm.t8 + " " + responseresultcm.u8 + " " +
      "'The instant translation feature is a lifesaver for those of us who travel within India frequently. " +
      "However, the cultural event reminders seem limited to a few major events. '" +
      "Future Want : 'More comprehensive coverage of regional festivals and events would be appreciated.'" +
      "\n" + responseresultcm.o9 + " " + "Features : Solar-powered, carbon footprint tracker, sustainability tips tailored for Indian users. " +
      "Target Segment : Environmentalists and the young urban population. " +
      "Closest Competitor : Garmin Fenix 6X Pro Solar (Market Share: 8%, Revenue: INR 2,800 Crore). " +
      "Context : Sustainability as a rising global and national trend." + " " +
      responseresultcm.q9 + " " + responseresultcm.r9 + " " + responseresultcm.s9 + " " + responseresultcm.t9 + " " + responseresultcm.u9 + " " +
      "'The carbon footprint tracker is a fantastic addition and makes me more mindful. However, the solar charging seems a bit slower than I anticipated. '" +
      "Future Want : 'Further optimizations for faster solar charging and maybe a tutorial on best practices for eco-friendly gadget usage.'" +
      "\n" + responseresultcm.o10 + " " + "Features : Collaborations with Indian designers, Diwali-themed watch faces, festive reminders. " +
      "Target Segment : Fashion-forward youth of metros. " +
      "Closest Competitor : Fossil Gen 5 (Market Share: 12%, Revenue: INR 4,500 Crore). " +
      "Context : Merging tech with Indian fashion." + " " +
      responseresultcm.q10 + " " + responseresultcm.r10 + " " + responseresultcm.s10 + " " + responseresultcm.t10 + " " + responseresultcm.u10 + " " +
      "'Absolutely adore the designs and the festive themes. Though, I wish there were more customizable options. '" +
      "Future Want : 'Collaborations with more Indian designers and perhaps some limited edition festive releases.'" +
      "\n" + responseresultcm.o11 + " " + "Features : Location tracking with Indian landmarks, educational apps tailored to the Indian curriculum. " +
      "Target Segment : School-going children and their parents. " +
      "Closest Competitor : Fitbit Ace 2 (Market Share: 15%, Revenue: INR 5,500 Crore). " +
      "Context : Safety and education in the Indian context." + " " +
      responseresultcm.q11 + " " + responseresultcm.r11 + " " + responseresultcm.s11 + " " + responseresultcm.t11 + " " + responseresultcm.u11 + " " +
      "'The educational apps are really insightful, and the location tracking offers peace of mind. Some more entertainment options for kids would be a bonus. '" +
      "Future Want : 'More diverse educational content and perhaps some games that are both fun and educational.'" +
      "\n" + responseresultcm.o12 + " " + "Features : Yoga and meditation tutorials, Indian spiritual calendar, temple locator. " +
      "Target Segment : Spiritually inclined users. " +
      "Closest Competitor : No direct competitor. " +
      "Context : Catering to India's rich spiritual heritage." + " " +
      responseresultcm.q12 + " " + responseresultcm.r12 + " " + responseresultcm.s12 + " " + responseresultcm.t12 + " " + responseresultcm.u12 + " " +
      "'As someone deeply rooted in spirituality, the features resonate well. I did expect more diverse content from various spiritual schools of thought. '" +
      "Future Want : 'Deeper teachings, guided meditation sessions, and more collaboration with spiritual gurus.'" +
      "\n" + responseresultcm.o13 + " " + "Features : Integration with UPI and other Indian payment systems, local shopping deals. " +
      "Target Segment : Urban shoppers and professionals. " +
      "Closest Competitor : Samsung Galaxy Watch 3 (Market Share: 20%, Revenue: INR 10,000 Crore with Samsung Pay). " +
      "Context : Growing digital payment trend in India." + " " +
      responseresultcm.q13 + " " + responseresultcm.r13 + " " + responseresultcm.s13 + " " + responseresultcm.t13 + " " + responseresultcm.u13 + " " +
      "'UPI integration is seamless, and the shopping deals are a great touch. More clarity on the security features would be reassuring. '" +
      "Future Want: 'Integration with more local payment gateways and a feature to track personal expenses and savings.'" +
      "\n" + responseresultcm.o14 + " " + "Features : Reminders for Indian academic schedules, study tools tailored to Indian syllabi. " +
      "Target Segment : Indian students. " +
      "Closest Competitor : Amazfit Bip U (Market Share: 7%, Revenue: INR 2,500 Crore). " +
      "Context : Digital learning and productivity for Indian students." + " " +
      responseresultcm.q14 + " " + responseresultcm.r14 + " " + responseresultcm.s14 + " " + responseresultcm.t14 + " " + responseresultcm.u14 + " " +
      "'It syncs well with academic schedules, which is very helpful. However, more tools and integration with popular online learning platforms would enhance its utility. '" +
      "Future Want : 'Study group features, collaborations with Indian ed-tech platforms, and perhaps a feature for parents to track their child's academic progress.'" +
      "\n" + responseresultcm.o15 + " " + "Features : Indian dance workout routines, Indian diet plans, local fitness challenges. " +
      "Target Segment : Fitness enthusiasts in India. " +
      "Closest Competitor : Fitbit Versa 3 (Market Share: 25%, Revenue: INR 12,000 Crore). " +
      "Context : Fitness tailored to Indian preferences." + " " +
      responseresultcm.q15 + " " + responseresultcm.r15 + " " + responseresultcm.s15 + " " + responseresultcm.t15 + " " + responseresultcm.u15 + " " +
      "'The dance workout routines are a fun way to stay fit. A wider variety of routines would keep it from becoming monotonous. '" +
      "Future Want : 'Integration with popular fitness platforms in India and perhaps live workout sessions tailored to Indian fitness preferences.'" +
      "\n" + responseresultcm.o16 + " " + "Features : Guides to Indian tourist spots, Indian festival alerts, local transport integration. " +
      "Target Segment : Indian and international travelers in India. " +
      "Closest Competitor : Suunto 7 (Market Share: 5%, Revenue: INR 1,500 Crore). " +
      "Context : Enhancing the travel experience within India. " + " " +
      responseresultcm.q16 + " " + responseresultcm.r16 + " " + responseresultcm.s16 + " " + responseresultcm.t16 + " " + responseresultcm.u16 + " " +
      "'It's the perfect companion for someone who travels frequently. Would love more in-depth guides and not just overviews. '" +
      "Future Want : 'Partnerships with local travel agencies for exclusive deals, and a feature to connect with fellow travelers.'" +
      "\n\n" + responseresultcm.x6 + " " + responseresultcm.y6 +
      "\n" + responseresultcm.x7 + " " + responseresultcm.y7 +
      "\n" + responseresultcm.x8 + " " + responseresultcm.y8 +
      "\n" + responseresultcm.x9 + " " + responseresultcm.y9 +
      "\n" + responseresultcm.x10 + " " + responseresultcm.y10 +
      "\n" + responseresultcm.x11 + " " + responseresultcm.y11 +
      "\n\n" + responseresultcm.x13 + " " + responseresultcm.y13 +
      "\n" + responseresultcm.x14 + " " + responseresultcm.y14 +
      "\n" + responseresultcm.x15 + " " + responseresultcm.y15 +
      "\n" + responseresultcm.x16 + " " + responseresultcm.y16 +
      "\n" + responseresultcm.x17 + " " + responseresultcm.y17 +
      "\n" + responseresultcm.x18 + " " + responseresultcm.y18 +
      "\n\n" + responseresultcm.x20 + " " + responseresultcm.y20 +
      "\n" + responseresultcm.x21 + " " + responseresultcm.y21 +
      "\n" + responseresultcm.x22 + " " + responseresultcm.y22 +
      "\n" + responseresultcm.x23 + " " + responseresultcm.y23 +
      "\n" + responseresultcm.x24 + " " + responseresultcm.y24 +
      "\n" + responseresultcm.x25 + " " + responseresultcm.y25 +
      "\n\n" + responseresultcm.x27 + " " + responseresultcm.y27 +
      "\n" + responseresultcm.x28 + " " + responseresultcm.y28 +
      "\n" + responseresultcm.x29 + " " + responseresultcm.y29 +
      "\n" + responseresultcm.x30 + " " + responseresultcm.y30 +
      "\n" + responseresultcm.x31 + " " + responseresultcm.y31 +
      "\n" + responseresultcm.x32 + " " + responseresultcm.y32 +
      "\n" + responseresultcm.x32 + " " + responseresultcm.y32 +
      "\n\n" + responseresultcm.x34 + " " + responseresultcm.y34 +
      "\n" + responseresultcm.x35 + " " + responseresultcm.y35 +
      "\n" + responseresultcm.x36 + " " + responseresultcm.y36 +
      "\n" + responseresultcm.x37 + " " + responseresultcm.y37 +
      "\n" + responseresultcm.x38 + " " + responseresultcm.y38 +
      "\n" + responseresultcm.x39 + " " + responseresultcm.y39 +
      "\n\n" + responseresultcm.x41 + " " + responseresultcm.y41 +
      "\n" + responseresultcm.x42 + " " + responseresultcm.y42 +
      "\n" + responseresultcm.x43 + " " + responseresultcm.y43 +
      "\n" + responseresultcm.x44 + " " + responseresultcm.y44 +
      "\n" + responseresultcm.x45 + " " + responseresultcm.y45 +
      "\n" + responseresultcm.x46 + " " + responseresultcm.y46 +
      "\n" + responseresultcm.x47 + " " + responseresultcm.y47 +
      "\n\n" + responseresultcm.aa6 +
      "\n" + responseresultcm.aa7 + " " + responseresultcm.ab7 +
      "\n" + responseresultcm.aa8 + " " + responseresultcm.ab8 +
      "\n" + responseresultcm.aa9 + " " + responseresultcm.ab9 +
      "\n\n" + responseresultcm.aa11 + " " + responseresultcm.ab11 +
      "\n" + responseresultcm.aa12 + " " + responseresultcm.ab12 +
      "\n" + responseresultcm.aa13 + " " + responseresultcm.ab13 +
      "\n" + responseresultcm.aa14 + " " + responseresultcm.ab14 +
      "\n\n" + responseresultcm.aa16 +
      "\n" + responseresultcm.aa17 + " " + responseresultcm.ab17 + " " + responseresultcm.ac17 + " " + responseresultcm.ad17 +
      "\n" + responseresultcm.aa18 + " " + responseresultcm.ab18 + " " + responseresultcm.ac18 + " " + responseresultcm.ad18 +
      "\n" + responseresultcm.aa19 + " " + responseresultcm.ab19 + " " + responseresultcm.ac19 + " " + responseresultcm.ad19 +
      "\n" + responseresultcm.aa20 + " " + responseresultcm.ab20 + " " + responseresultcm.ac20 + " " + responseresultcm.ad20 +
      "\n" + responseresultcm.aa21 + " " + responseresultcm.ab21 + " " + responseresultcm.ac21 + " " + responseresultcm.ad21 +
      "\n" + responseresultcm.aa22 + " " + responseresultcm.ab22 + " " + responseresultcm.ac22 + " " + responseresultcm.ad22 +
      "\n\n" + responseresultcm.aa24 +
      "\n" + responseresultcm.aa25 + " " + responseresultcm.ab25 +
      "\n" + responseresultcm.aa26 + " " + responseresultcm.ab26 +
      "\n" + responseresultcm.aa27 + " " + responseresultcm.ab27 +
      "\n" + responseresultcm.aa28 + " " + responseresultcm.ab28 +
      "\n" + responseresultcm.aa29 + " " + responseresultcm.ab29 +
      "\n" + responseresultcm.aa30 + " " + responseresultcm.ab30 +
      "\n" + responseresultcm.aa31 + " " + responseresultcm.ab31 +
      "\n\n" + responseresultcm.aa33 + " " + responseresultcm.ab33 + " " + responseresultcm.ac33 + " " + responseresultcm.ad33 +
      "\n" + responseresultcm.aa34 + " " + responseresultcm.ab34 + " " + responseresultcm.ac34 + " " + responseresultcm.ad34 +
      "\n" + responseresultcm.aa35 + " " + responseresultcm.ab35 + " " + responseresultcm.ac35 + " " + responseresultcm.ad35 +
      "\n" + responseresultcm.aa36 + " " + responseresultcm.ab36 + " " + responseresultcm.ac36 + " " + responseresultcm.ad36 +
      "\n" + responseresultcm.aa37 + " " + responseresultcm.ab37 + " " + responseresultcm.ac37 + " " + responseresultcm.ad37 +
      "\n" + responseresultcm.aa38 + " " + responseresultcm.ab38 + " " + responseresultcm.ac38 + " " + responseresultcm.ad38 +
      "\n" + responseresultcm.aa39 + " " + responseresultcm.ab39 + " " + responseresultcm.ac39 + " " + responseresultcm.ad39 +
      "\n\n" + responseresultcm.aa41 +
      "\n" + responseresultcm.aa42 + " " + responseresultcm.ab42 + " " + responseresultcm.ac42 + " " + responseresultcm.ad42 + " " + responseresultcm.ae42 +
      "\n" + responseresultcm.aa43 + " " + responseresultcm.ab43 + " " + responseresultcm.ac43 + " " + responseresultcm.ad43 + " " + responseresultcm.ae43 +
      "\n" + responseresultcm.aa44 + " " + responseresultcm.ab44 + " " + responseresultcm.ac44 + " " + responseresultcm.ad44 + " " + responseresultcm.ae44 +
      "\n" + responseresultcm.aa45 + " " + responseresultcm.ab45 + " " + responseresultcm.ac45 + " " + responseresultcm.ad45 + " " + responseresultcm.ae45 +
      "\n" + responseresultcm.aa46 + " " + responseresultcm.ab46 + " " + responseresultcm.ac46 + " " + responseresultcm.ad46 + " " + responseresultcm.ae46 +
      "\n" + responseresultcm.aa47 + " " + responseresultcm.ab47 + " " + responseresultcm.ac47 + " " + responseresultcm.ad47 + " " + responseresultcm.ae47 +
      "\n\n" + responseresultcm.aa49 + " " + responseresultcm.ab49 + " " + responseresultcm.ac49 + " " + responseresultcm.ad49 + " " + responseresultcm.ae49 +
      "\n" + responseresultcm.aa50 + " " + responseresultcm.ab50 + " " + responseresultcm.ac50 + " " + responseresultcm.ad50 + " " + responseresultcm.ae50 +
      "\n" + responseresultcm.aa51 + " " + responseresultcm.ab51 + " " + responseresultcm.ac51 + " " + responseresultcm.ad51 + " " + responseresultcm.ae51 +
      "\n" + responseresultcm.aa52 + " " + responseresultcm.ab52 + " " + responseresultcm.ac52 + " " + responseresultcm.ad52 + " " + responseresultcm.ae52 +
      "\n" + responseresultcm.aa53 + " " + responseresultcm.ab53 + " " + responseresultcm.ac53 + " " + responseresultcm.ad53 + " " + responseresultcm.ae53 +
      "\n" + responseresultcm.aa54 + " " + responseresultcm.ab54 + " " + responseresultcm.ac54 + " " + responseresultcm.ad54 + " " + responseresultcm.ae54 +
      "\n\n" + responseresultcm.aa56 +
      "\n" + responseresultcm.aa57 + " " + responseresultcm.ab57 +
      "\n" + responseresultcm.aa58 + " " + responseresultcm.ab58 + " " + "Extremely low market attractiveness. " +
      "The product is likely not resonating with the target audience at all. Complete re-evaluation is needed. " +
      "There might be a fundamental mismatch with user needs or a significant gap in product promotion and distribution." +
      "\n" + responseresultcm.aa59 + " " + responseresultcm.ab59 + " " + "Very low attractiveness. " +
      "Some segments of the audience is showing interest. Deep dive into market. What aspects are users finding slightly " +
      "appealing? Can these be amplified? Also, identify glaring issues and work on immediate remedies." +
      "\n" + responseresultcm.aa60 + " " + responseresultcm.ab60 + " " + "Low attractiveness. " +
      "Some features or promotional activities are generating interest, but the product is still falling short. Prioritize " +
      "refinement. Focus on user behaviour to understand user needs and preferences better." +
      "\n" + responseresultcm.aa61 + " " + responseresultcm.ab61 + " " + "Below average attractiveness. " +
      "The product may have decent features, but execution might be overshadowing it. Indentify in ideation. What are " +
      "the closest product and their revenue? Consider revamping marketing strategies or enhancing product features." +
      "\n" + responseresultcm.aa62 + " " + responseresultcm.ab62 + " " + "Moderate attractiveness. " +
      "The product is at the market's average level, indicating it's on the right track but needs differentiation. " +
      "Focus on unique selling propositions (USPs). What can set your product apart? Amplify that in promotions and possibly invest more in distribution channels." +
      "\n" + responseresultcm.aa63 + " " + responseresultcm.ab63 + " " + "Above average attractiveness. " +
      "The product is resonating with many, but there's room for improvement. Continuous refinement. " +
      "Identify areas of improvement, and keep an eye on user trends." +
      "\n" + responseresultcm.aa64 + " " + responseresultcm.ab64 + " " + "High attractiveness. " +
      "The product is popular, with many factors working in its favor. Scale up. Consider increasing production " +
      "in future, expanding to new regions, or amplifying promotional activities." +
      "\n" + responseresultcm.aa65 + " " + responseresultcm.ab65 + " " + "Very high attractiveness. " +
      "The product is a major player in the market, only overshadowed by top competitors or certain external factors. " +
      "The future path is to Innovate. Introduce new features, collaborate with popular brands, or offer exclusive deals to consolidate the market position." +
      "\n" + responseresultcm.aa66 + " " + responseresultcm.ab66 + " " + "Extremely high attractiveness. " +
      "The product is a on a way to market leader in its niche category, with just a few minor areas of improvement. " +
      "Maintain and grow. Ensure consistent quality, customer service, and continuous minor innovations to stay ahead." +
      "\n" + responseresultcm.aa67 + " " + responseresultcm.ab67 + " " + "Peak market attractiveness. " +
      "The product has a good start in the niche segment. Dominate and expand into future. Look into adjacent market " +
      "segments,feature expansion, or diversifying the product line to leverage the strong brand reputation." +


      "\n\nPlayer's Input based on the system information" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Target: Battery Life, Days " + " " + result[0] +
      "\n" + "Target: Affordability, INR " + " " + result[1] +
      "\n" + "Target: Localization, % " + " " + result[2] * 100 + "%" +
      "\n" + "Idea 1 " + " " + result[3] +
      "\n" + "Idea 2 " + " " + result[4] +
      "\n" + "Idea 3 " + " " + result[5] +
      "\n" + "Product 1 " + " " + result[6] +
      "\n" + "Battery Life " + " " + result[7] * 100 + "%" +
      "\n" + "Design & Aesthetics " + " " + result[8] +
      "\n" + "Localized Language Support " + " " + result[9] +
      "\n" + "Seamless Syncing " + " " + result[10] +
      "\n" + "Water Resistance " + " " + result[11] +
      "\n" + "Customizable Watch Faces " + " " + result[12] +
      "\n" + "Unique Health Features " + " " + result[13] +
      "\n" + "Indian Payment System Integration " + " " + result[14] +
      "\n" + "Product 2 " + " " + result[15] +
      "\n" + "Battery Life " + " " + result[16] * 100 + "%" +
      "\n" + "Design & Aesthetics " + " " + result[17] +
      "\n" + "Localized Language Support " + " " + result[18] +
      "\n" + "Seamless Syncing " + " " + result[19] +
      "\n" + "Water Resistance " + " " + result[20] +
      "\n" + "Customizable Watch Faces " + " " + result[21] +
      "\n" + "Unique Health Features " + " " + result[22] +
      "\n" + "Indian Payment System Integration " + " " + result[23] +
      "\n" + "Product 3 " + " " + result[24] +
      "\n" + "Battery Life " + " " + result[25] * 100 + "%" +
      "\n" + "Design & Aesthetics " + " " + result[26] +
      "\n" + "Localized Language Support " + " " + result[27] +
      "\n" + "Seamless Syncing " + " " + result[28] +
      "\n" + "Water Resistance " + " " + result[29] +
      "\n" + "Customizable Watch Faces " + " " + result[30] +
      "\n" + "Unique Health Features " + " " + result[31] +
      "\n" + "Indian Payment System Integration " + " " + result[32] +
      "\n" + "Product Launch " + " " + result[33] +
      "\n" + "Price, INR " + " " + result[34] +
      "\n" + "Advertising, INR Million " + " " + result[35] +
      "\n" + "Warranty Period " + " " + result[36] +
      "\n" + "Distributor/Wholesaler, INR Million " + " " + result[37] +
      "\n" + "E-commerce, INR Million " + " " + result[38] +
      "\n" + "Telecom Partnerships, INR Million " + " " + result[39] +
      "\n" + "Direct-to-consumer, INR Million " + " " + result[40] +


      "\n\nSystem Generated Output based on the user Input " +
      "\n" + "Parameter " + " " + "Output" +
      "\n" + "Revenue " + " " + responseresultdatabase.c74 +
      "\n" + "Variable Cost " + " " + responseresultdatabase.c75 +
      "\n" + "Gross Profit " + " " + responseresultdatabase.c76 +
      "\n" + "Production Line Cost " + " " + responseresultdatabase.c77 +
      "\n" + "Administration Cost " + " " + responseresultdatabase.c78 +
      "\n" + "Market Research Cost " + " " + responseresultdatabase.c79 +
      "\n" + "Advertising Cost" + " " + responseresultdatabase.c80 +
      "\n" + "Channel Investment Cost " + " " + responseresultdatabase.c81 +
      "\n" + "Total Fixed Cost " + " " + responseresultdatabase.c82 +
      "\n" + "Profit " + " " + responseresultdatabase.c83 +
      "\nParameter" + " " + "Output" +
      "\n" + "Attractiveness Score " + " " + responseresultdatabase.c71 +
      "\n" + "Market Share, % " + " " + Number(responseresultdatabase.c72) * 100 + "%" +
      "\n" + "Units Sold " + " " + responseresultdatabase.c73 +
      "\n" + "Margin, %  " + " " + Number(responseresultdatabase.c84) * 100 + "%"+
      "\n\n" +
      "Goal to be optimized" +
      "\n"+"Attractiveness" + " " + responseresultcm.ab70  +
      "\n"+"Operating Margin" + " " + responseresultcm.ab71 ;
    return assesment;
  }
}