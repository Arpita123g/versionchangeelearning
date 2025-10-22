import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-consumercaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumercaseheader.component.html',
  styleUrls: ['./consumercaseheader.component.scss']
})
export class ConsumercaseheaderComponent implements OnInit {

  constructor(private _router: Router, private _api: ApiService) { }
  getSelectTab: any
  ngOnInit(): void {
    this.getSelectTab = localStorage.getItem('selectedTab');

  }
  activeTab = 'informationsearch';
  search(activeTab: any) {
    this.activeTab = activeTab;
  }
  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }
  GoBack() {
    this._api.GoBack();
  }
  // languagebody: any = [
  //   {
  //     heading: "b333",
  //     body: [
  //       { english: "b7", others: "b7" },
  //       { english: "Market", others: "b8" },
  //       { english: "Information Search", others: "b9" },
  //       { english: "Target", others: "b10" },
  //       { english: "Conceptualizing", others: "b11" },
  //       { english: "Crafting", others: "b12" },
  //       { english: "Reports", others: "b13" },
  //       { english: "The gaming world is evolving, and you must identify emerging needs. Dive into market reports to discern the crucial gaps in the market. Amidst varying trends and demands, decide on a specific genre or demographic to focus on.", others: "b14" },
  //       { english: "Armed with information about the market, you must embark on a fact-finding mission. But beware! Information can sometimes be misleading or contradictory, requiring you to judiciously discern key gamer desires.", others: "b15" },
  //       { english: "With insights in hand, decide the demographics, and who would be the main user of your game. The demographics have be to as detailed as possible taking into account the language, gender, and income.", others: "b16" },
  //       { english: "It's time to brainstorm game concepts. Weigh the pros and cons of different genres, situational elements, cultural elements, and lifestyle elements. The choices made here will set the stage for the game's potential success or failure.", others: "b17" },
  //       { english: "Dive deep into the game launch process. Decide which channels you want to use to promote the game. You must choose a partner to publish the game or do it by your own. Create your revenue model.", others: "b18" },
  //       { english: "The game hits the market, and it's time for a post-mortem. Analyze based on your decision-making how much market share you are able to achieve and how many paying customers.", others: "b19" },
  //     ]
  //   },
  //   {
  //     heading: "Market",
  //     body: [
  //       { english: "In the dynamic realm of electronic gaming, the industry's revenue now surpasses that of the film industry, establishing itself as a prominent global leisure activity. Categorized into online and mobile games, console and PC gaming, internet-delivered games, and serious games, the diversity in preferences highlights the importance of understanding the factors influencing gamers' choices.\n\nWith the widespread use of smartphones transforming gaming experiences, Nero Gaming, a passionate developer, is poised to enter the burgeoning Indian market with its debut mobile game. The company aims to grasp the intricacies of Indian mobile gamers' behavior, encompassing both play and payment patterns. To achieve this, the responsibility of exploring consumer behavior models and providing valuable insights has been assigned.\n\nNavigating the intricate gaming ecosystem involving developers,publishers, and ad networks, Nero adopts a distinctive strategy in the competitive market. With an ambitious goal of capturing a market share exceeding 7% in the initial year, they aim to redefine the gaming landscape for their audience. Backed by substantial commitment, including a revenue of USD 240K, an 8 to 12-month game development timeline, and a significant marketing budget of USD 100K, Nero remains undeterred in its pursuit of making a substantial impact in the Indian mobile gaming market, despite the typical 2 to 5-year journey to breakeven.", others: "b20" },
  //     ]
  //   },
  //   {
  //     heading: "Information Search",
  //     body: [
  //       { english: "Outlook", others: "b21" },
  //       { english: "India embraces mobile gaming fervently, boasting 360 million enthusiasts. Three in four gamers prefer mobile, propelling India into the top five global mobile gaming contenders. Players dedicate over an hour daily, adopting an omni-channel approach. Evenings witness homes transforming into gaming sanctuaries, accommodating versatile gamers with a penchant for experimentation. Surprisingly, 45% of gamers are female, including 58% of mothers. Gaming captivates a mature audience, with a third aged 35 and above. In the entertainment realm, gaming dominates, with 40% investing over an hour daily, surpassing OTT platform engagement.", others: "b22" },
  //       { english: "Genre Preference", others: "b23" },
  //       { english: "The x-axis represents gender while the y-axis represents the gamer's choice among the five popular genres.", others: "b32" },
  //       { english: "The x-axis represents age cohorts while the y-axis represents the gamer's choice among the five popular genres.", others: "b35" },
  //       { english: "The x-axis represents five popular genres while the y-axis represents the gamer's choice among the five popular genres belonging to different income classes.", others: "b37" },
  //       { english: "Communication Channels", others: "b38" },
  //       { english: "Social media, Shopping and Entertainment (Audio/ Video streaming) are the most popular activities undertaken by Males. Online banking and payments, News, Sports, and Food orders are not so popular for teens, but this category has much higher relevance for older age groups. Metro consists of 56% gamers with more time spent than non-metro.", others: "b48" },
  //       { english: "Social media, online shopping and listening to music are the popular activities done online by female gamers across age cohorts. Women in the age group of 20-34 years access online banking/wallets and watch Movies / TV shows as well on a large scale. Metro consists of 52% gamers with more time spent than non-metro.", others: "b50" },
  //       { english: "Monetization", others: "b51" },
  //       { english: "The mobile gaming sector predominantly garners its revenue through advertisements, with the current average earnings standing at Rs. 400 per thousand impressions. A variety of ad formats have found favour in this landscape, encompassing static and banner ads, rewarded video ads, interstitial video ads, and more engaging interactive ads. It's noteworthy that a significant 69% of gamers commit to watching ads in their entirety when lured by rewards. Supplementing this main revenue stream are in-app purchases, collaborations that offer exclusive rewards, and ad networks, the latter acting as mediators to optimize ad visibility. When exploring the game type hierarchy, we find free games at the base, followed by the more monetizable freemium games and pay-to-play games. Gamers inclined towards the latter two categories exhibit a spending range of Rs. 50 to 150 for their gaming experiences, with a clear trend indicating that older gamers have a heightened willingness to spend. A deeper dive into player preferences reveals an inclination towards personalized ads tailored to the game they're engaged with. Contextual ads that offer relevant content and interactive opportunities tend to resonate more, enhancing the overall user experience and, by extension, the monetization potential.", others: "b52" },
  //       { english: "The x-axis represents the year, whereas Y1 represents the latest, and the y-axis represents the number of mobile gamers in the country.", others: "b54" },
  //       { english: "The x-axis represents the year, whereas Y1 represents the latest, and the y-axis represents the amount of money spent by the consumer interacting through in-game advertisement.", others: "b56" },
  //       { english: "The x-axis represents the year, whereas Y1 represents the latest, and the y-axis represents the amount of money earned by the gaming companies through all revenue sources.", others: "b58" },
  //       { english: "15-19 yrs", others: "b303" },
  //       { english: "20-24 yrs", others: "b304" },
  //       { english: "25-34 yrs", others: "b305" },
  //       { english: "Y1", others: "b306" },
  //       { english: "Y2", others: "b307" },
  //       { english: "Y3", others: "b308" },
  //       { english: "Y4", others: "b309" },
  //       { english: "Y5", others: "b310" },
  //       { english: "Y6", others: "b311" },
  //       { english: "Y7", others: "b312" },
  //       { english: "Browsing", others: "b335" },
  //       { english: "Banking/Wallet", others: "b336" },

  //     ]
  //   },
  //   {
  //     heading: "Information Search (graph)",
  //     body: [
  //       { english: "Game Genre Preference", others: "b24" },
  //       { english: "Action/Adventure", others: "b25" },
  //       { english: "Racing/Sports", others: "b26" },
  //       { english: "Puzzle/Quiz/Words", others: "b27" },
  //       { english: "Strategy/Role Playing", others: "b28" },
  //       { english: "Casino/Card/Betting", others: "b29" },
  //       { english: "Male", others: "b30" },
  //       { english: "Female", others: "b31" },
  //       { english: "Male Gamers Preference, Cohort wise", others: "b33" },
  //       { english: "Female Gamers Preference, Cohort wise", others: "b34" },
  //       { english: "NCCS Household Genre Preference", others: "b36" },
  //       { english: "Male Gamers Activity", others: "b39" },
  //       { english: "Social Media", others: "b40" },
  //       { english: "Shopping", others: "b41" },
  //       { english: "Movies/TV Shows", others: "b42" },
  //       { english: "Music", others: "b43" },
  //       { english: "Food Ordering", others: "b44" },
  //       { english: "Messaging Apps", others: "b45" },
  //       { english: "News", others: "b46" },
  //       { english: "Sports", others: "b47" },
  //       { english: "Female Gamers Activity", others: "b49" },
  //       { english: "Mobile Gamers, Mn", others: "b53" },
  //       { english: "Mobile Ads Spends, INR mn", others: "b55" },
  //       { english: "Mobile Gaming Revenue, USD mn", others: "b57" },

  //     ]
  //   },
  //   {
  //     heading: "Target",
  //     body: [
  //       { english: "Demographic", others: "b59" },
  //       { english: "Metro", others: "b63" },
  //       { english: "Non Metro", others: "b64" },
  //       { english: "Language", others: "b65" },
  //       { english: "Hindi", others: "b67" },
  //       { english: "English", others: "b68" },
  //       { english: "Bengali", others: "b69" },
  //       { english: "Telugu", others: "b70" },
  //       { english: "Marathi", others: "b71" },
  //       { english: "Tamil", others: "b72" },
  //       { english: "Gujarati", others: "b73" },
  //       { english: "Kannada", others: "b74" },
  //       { english: "Malayalam", others: "b75" },
  //       { english: "Odia", others: "b76" },
  //       { english: "Punjabi", others: "b77" },
  //       { english: "Others", others: "b78" },
  //       { english: "Income", others: "b79" },
  //       { english: "NCCS A", others: "b80" },
  //       { english: "NCCS B", others: "b81" },
  //       { english: "NCCS C/D/E", others: "b82" },
  //       { english: "Affluent urban consumers with luxury products, high disposable incomes, and a likelihood of in-app purchases or upfront game payments.", others: "b84" },
  //       { english: "Moderate disposable income, diverse consumer durables, limited luxury ownership. Value-conscious, willing to pay for perceived high value.", others: "b85" },
  //       { english: "Limited income, few consumer durables. Basic appliances like fans or TVs. Prefer free games, more time on apps.", others: "b86" },
  //       { english: "15-24 yrs", others: "b298" },
  //       { english: "25-34 yrs", others: "b299" },
  //       { english: "35+ yrs", others: "b300" },
  //       { english: "Yes", others: "b301" },
  //       { english: "Both", others: "b302" },
  //       { english: "0-14 yrs", others: "b329" },

  //     ]
  //   },
  //   {
  //     heading: "Target (graph)",
  //     body: [
  //       { english: "Total Population (%)", others: "b60" },
  //       { english: "Gamers Population", others: "b61" },
  //       { english: "Population Division", others: "b62" },
  //       { english: "% Language Speaking Population", others: "b66" },
  //       { english: "% of Population", others: "b83" },
  //       { english: "Age Distribution of Gamers", others: "b344" },

  //     ]
  //   },
  //   {
  //     heading: "Conceptualizing",
  //     body: [
  //       { english: "Genre", others: "b87" },
  //       { english: "Dynamic action/adventure games, favored by youth, show a male preference. Interest declines with age, notably in the 35+ group.", others: "b88" },
  //       { english: "Emphasizing speed and skill, are popular among males. Interest peaks at 20-24, gradually declining with age, with a notable peak among females in the same age group.", others: "b89" },
  //       { english: "Testing intelligence and knowledge, strongly appeal to females. Male interest grows with age, peaking at 35+, while females consistently prefer these games, declining slightly with age.", others: "b90" },
  //       { english: "Strategy/Role Playing games, with tactical gameplay, see even gender preference. Young females (20-24) show higher interest; males' preference remains somewhat consistent.", others: "b91" },
  //       { english: "Casino/Card/Betting games simulate gambling. Females slightly surpass males in preference, with males peaking at 25-34 and females at 20-24.", others: "b92" },
  //       { english: "Situational Elements", others: "b94" },
  //       { english: "Playfulness", others: "b95" },
  //       { english: "Cultural Norms", others: "b96" },
  //       { english: "Ease of use", others: "b97" },
  //       { english: "Continuance Intention", others: "b98" },
  //       { english: "Playfulness in a game is about the sheer joy it offers, detached from objectives. A highly playful game captivates users with pure enjoyment, not external rewards.", others: "b99" },
  //       { english: "Cultural norms integrate societal values into games, fostering familiarity and connection. Embedding cultural elements enhances relatability and attracts specific audiences.", others: "b100" },
  //       { english: "Game ease of use and intuitiveness matter. A smooth experience without barriers or frustrations enhances player satisfaction and retention.", others: "b101" },
  //       { english: "Continuance intention gauges a game's power to keep users returning, be it through storylines or updates. Success lies in long-term player retention.", others: "b102" },
  //       { english: "Social Elements", others: "b105" },
  //       { english: "Chat Functionality", others: "b106" },
  //       { english: "Leaderboards & Activity Feeds", others: "b107" },
  //       { english: "User Trading", others: "b108" },
  //       { english: "Push Notification", others: "b109" },
  //       { english: "Community", others: "b110" },
  //       { english: "Social Media Integration", others: "b111" },
  //       { english: "Chat function enables real-time player communication, fostering camaraderie and healthy competition. Direct chatting enhances social experience, appealing in collaborative gaming.", others: "b112" },
  //       { english: "Leaderboards rank players by achievements; activity feeds display recent milestones. Both fuel gamers' competitive spirit and desire for community updates.", others: "b113" },
  //       { english: "User trading enhances the game economy and fosters collaboration. A dynamic feature, it engages players deeply by adding excitement and appeal to the game.", others: "b114" },
  //       { english: "Push notifications alert about in-game updates, events, or messages, encouraging revisits. While less immersive, timely notifications drive effective engagement.", others: "b115" },
  //       { english: "Communities, forums, or groups within games foster discussion and connection. A vibrant community enhances a game's appeal, offering a space for players to share, learn, and socialize.", others: "b116" },
  //       { english: "Linking game profiles to social media boosts connectivity. Sharing achievements, inviting friends, and playing against contacts elevate the game's presence and appeal in today's interconnected world.", others: "b117" },
  //       { english: "Lifestyle Elements", others: "b118" },
  //       { english: "Active", others: "b119" },
  //       { english: "Healthy", others: "b120" },
  //       { english: "Solo", others: "b121" },
  //       { english: "Rural", others: "b122" },
  //       { english: "Urban", others: "b123" },
  //       { english: "Nomadic", others: "b124" },
  //       { english: "Bohemian", others: "b125" },
  //       { english: "Digital", others: "b126" },
  //       { english: "Themed in vibrant energy, the game features outgoing characters and a positive UI/UX, offering an engaging environment for users seeking positivity in gaming.", others: "b127" },
  //       { english: "Embodying wellness, characters exude health and vitality. The interface promotes an active, wholesome ambiance, appealing to wellness-conscious gamers for a rejuvenating experience.", others: "b128" },
  //       { english: "This theme mirrors solo adventurers' life, emphasizing freedom and discipline. Tailored for those seeking independence, it might lack the vibrancy of other themes.", others: "b129" },
  //       { english: "Immerse in a rustic, nature-inspired setting for a serene gameplay escape. Ideal for those craving an unadulterated, grounded gaming experience away from the hustle.", others: "b130" },
  //       { english: "Capturing city life's rhythm, this theme embodies high-speed, goal-driven urban existence. Ideal for city-paced users, it may slightly trail other themes in universal appeal.", others: "b131" },
  //       { english: "Guided by wanderlust, this theme propels players on a dynamic journey, embracing the thrill of exploration and the nomadic life's risks and rewards. Ideal for adventurous souls seeking the thrill of the unknown.", others: "b132" },
  //       { english: "Infused with art and spirituality, this theme offers a unique, rhythmic journey. Ideal for artistic souls, it merges gameplay with spiritual exploration, resonating deeply.", others: "b133" },
  //       { english: "Reflecting the tech-driven era, this theme captures contemporary life's fast-paced nature and glimpses into the future. While relevant, it may lack the appeal of themes offering an escape from routine digital lives.", others: "b134" },
  //       { english: "Competitive Landscape", others: "b345" },

  //     ]
  //   },
  //   {
  //     heading: "Conceptualizing (graph)",
  //     body: [
  //       { english: "% of Gaming Apps Competitor", others: "b93" },
  //       { english: "Immersion Level", others: "b103" },
  //       { english: "Emotional Resonance", others: "b104" },
  //       { english: "Higher % indicates higher competition", others: "b332" },

  //     ]
  //   },
  //   {
  //     heading: "Crafting",
  //     body: [
  //       { english: "Communication", others: "b135" },
  //       { english: "Stress Buster", others: "b136" },
  //       { english: "Kills Boredom", others: "b137" },
  //       { english: "Popularity of a game", others: "b138" },
  //       { english: "Competing with others", others: "b139" },
  //       { english: "Part of daily schedule", others: "b140" },
  //       { english: "Social Interaction", others: "b141" },
  //       { english: "Dive into a tranquil poolside escape. As you immerse in the game, worldly concerns fade, providing a brief, magical respite from reality.", others: "b142" },
  //       { english: "Experience the racetrack's rush, wind in your hair, thrill of speed—from your living room. Transform any moment into an adrenaline-fueled adventure with our game, escaping the mundane world outside.", others: "b143" },
  //       { english: "Enter the game, see your city light up in admiration. You're not just a player; you're the talked-about star. Play now, embrace virtual stardom's fame.", others: "b144" },
  //       { english: "Lead troops, strategize, and triumph! In our intense game, each battle tests your mettle, every win propels you toward legendary status.", others: "b145" },
  //       { english: "More than fun, our game provides daily cognitive rejuvenation. Sharpen your mind, boost strategic thinking, and evolve into a more brilliant you with every session.", others: "b146" },
  //       { english: "Enter a world where conquering challenges gains allies, and completing missions amplifies fame. Navigate this vibrant virtual realm, forge connections, and rise as the gaming sensation everyone wants to know.", others: "b147" },
  //       { english: "Gaming Triggers", others: "b148" },
  //       { english: "Channel Mix", others: "b149" },
  //       { english: "Publishing", others: "b150" },
  //       { english: "Self Play Store/App Store", others: "b151" },
  //       { english: "ZiptoLab", others: "b152" },
  //       { english: "Dueberry Labs", others: "b153" },
  //       { english: "Playfun Games", others: "b154" },
  //       { english: "Game House", others: "b155" },
  //       { english: "Social Media", others: "b156" },
  //       { english: "In self-publishing, juggle roles from idea to marketing. As captain, navigate monetization, advertising, PR, and support. Granting autonomy, it's a tough journey, especially for novices, with hurdles and learning.", others: "b157" },
  //       { english: "Partner with ZiptoLab, a global gaming giant with a record of 50 million downloads. While promising exposure, consider the 45% revenue-sharing agreement for your game's limelight.", others: "b158" },
  //       { english: "Collaborate with Dueberry Labs, Finnish experts in strategy games with 50-100 million downloads. While a 50% revenue share is substantial, it's a golden ticket for the strategy genre, given their expertise and impressive download counts.", others: "b159" },
  //       { english: "Partner with Playfun Games, a thriving gaming community with significant iOS and Android success. With a 40% revenue split, their diverse portfolio and supportive community offer a solid launchpad for your game.", others: "b160" },
  //       { english: "Join forces with Game House, devoted to the joy of gaming, specializing in puzzles and cards. Their 45% revenue share aligns with industry standards. If puzzles and cards are your niche, Game House's dedication could spell success.", others: "b161" },
  //       { english: "Tap into a 900-million-strong social media community eager for new gaming content. A 30% revenue share and vast user base offer unmatched potential, though relying solely on social media may pose challenges.", others: "b162" },
  //       { english: "Monetization", others: "b164" },
  //       { english: "Free Games", others: "b165" },
  //       { english: "Freemium Games", others: "b166" },
  //       { english: "Pay to Play Games", others: "b167" },
  //       { english: "Free games, as the name suggests, are accessible at no cost, leading to high download rates. Revenue is generated through in-game advertising, from banners to immersive native ads.", others: "b168" },
  //       { english: "Freemium games offer free basics, with extra features accessible for a fee. Players opt for in-app purchases, enhancing their experience and driving revenue.", others: "b169" },
  //       { english: "Pay-to-play games require an upfront purchase, offering a polished, ad-free experience. Revenue comes from direct sales, with possible downloadable content at extra cost.", others: "b170" },
  //       { english: "In-Game Advertising", others: "b175" },
  //       { english: "Ads Network", others: "b176" },
  //       { english: "Banner Ads", others: "b177" },
  //       { english: "Rewarded Ads", others: "b178" },
  //       { english: "Interstitial Ads", others: "b179" },
  //       { english: "Interactive Ads", others: "b180" },
  //       { english: "A mediator between advertisers and developers, it streamlines ad integration. The network optimizes ad types, effectiveness hinging on diversity and content tailoring to user preferences.", others: "b181" },
  //       { english: "Banner ads are small, appearing at the game's top or bottom without disrupting gameplay. Their visibility persists, but players may not find them compelling enough to click.", others: "b182" },
  //       { english: "Rewarded ads offer in-game rewards for watching videos or engaging with specific content. Optional and enticing, players willingly interact for direct rewards.", others: "b183" },
  //       { english: "Interstitial ads, fullscreen between game levels, may be intrusive. Players can watch or close them, with some preferring a quick closure to resume gameplay.", others: "b184" },
  //       { english: "Interactive ads involve players with elements like mini-games or polls, turning the ad experience into an engaging, less passive mini gameplay session.", others: "b185" },
  //       { english: "Play Store", others: "b313" },
  //       { english: "Friends/Family", others: "b314" },
  //       { english: "Ads on Gaming apps", others: "b315" },
  //       { english: "Ads on Non gaming apps", others: "b316" },
  //       { english: "Gaming forums", others: "b317" },



  //     ]
  //   },
  //   {
  //     heading: "Crafting (graph)",
  //     body: [
  //       { english: "Discovering Channel", others: "b163" },
  //       { english: "Users Preference %", others: "b171" },
  //       { english: "Free", others: "b172" },
  //       { english: "Freemium", others: "b173" },
  //       { english: "Pay to Play", others: "b174" },
  //       { english: "Players Reaction to Ads, %", others: "b186" },
  //       { english: "Watch Ads for Rewards", others: "b187" },
  //       { english: "Ignore Ad", others: "b188" },
  //       { english: "Close Ad", others: "b189" },

  //     ]
  //   },
  //   {
  //     heading: "Decision Checklist",
  //     body: [
  //       { english: "Age", others: "b190" },
  //       { english: "Location", others: "b191" },
  //       { english: "Gender", others: "b192" },
  //       { english: "Income Class", others: "b193" },
  //       { english: "Language 1", others: "b194" },
  //       { english: "Language 2", others: "b195" },
  //       { english: "Language 3", others: "b196" },
  //       { english: "Language 4", others: "b197" },
  //       { english: "Situational Element 1", others: "b198" },
  //       { english: "Situational Element 2", others: "b199" },
  //       { english: "Social Element 1", others: "b200" },
  //       { english: "Social Element 2", others: "b201" },
  //       { english: "Social Element 3", others: "b202" },
  //       { english: "Channel 1", others: "b203" },
  //       { english: "Channel 2", others: "b204" },
  //       { english: "Channel 3", others: "b205" },
  //       { english: "Describe your thought process behind the decision-making in 100 words…", others: "b206" },
  //       { english: "Submit", others: "b343" },

  //     ]
  //   },
  //   {
  //     heading: "Report",
  //     body: [
  //       { english: "Report", others: "b207" },
  //       { english: "Elements at conceptualization", others: "b208" },
  //       { english: "Market Share", others: "b209" },
  //       { english: "Paying Customers", others: "b210" },
  //       { english: "Excellent work. You have completed research on making the game user-friendly and attractive to target consumers. In this exercise every decision you have taken shows your skills in dimensions like rigor, synthesis, structuring and business judgement.", others: "b211" },
  //       { english: "Rigor", others: "b212" },
  //       { english: "Structuring", others: "b213" },
  //       { english: "Synthesis", others: "b214" },
  //       { english: "Business Jugement", others: "b215" },
  //       { english: "Consistency throughout the decision-making and recommendation.", others: "b216" },
  //       { english: "A logical approach to gathering and analyzing information.", others: "b217" },
  //       { english: "Approach towards interpreting all the information and making informed decisions.", others: "b218" },
  //       { english: "Ability to evaluate facts and consider risks and possible implications when making decisions.", others: "b219" },
  //       { english: "Number of users, mn", others: "b337" },
  //       { english: "Number of paying customers, mn", others: "b338" },
  //       { english: "You", others: "b339" },
  //       { english: "Percentile", others: "b340" },
  //       { english: "Average", others: "b341" },
  //       { english: "Target Demographics", others: "b346" },
  //     ]
  //   },
  //   {
  //     heading: "Synopsis",
  //     body: [
  //       { english: "Synopsis", others: "b220" },
  //       { english: "Parameters", others: "b221" },
  //       { english: "Input", others: "b222" },
  //       { english: "Output", others: "b223" },
  //       { english: "Market %", others: "b224" },
  //       { english: "Market Units", others: "b225" },
  //       { english: "Thinking Ability", others: "b226" },
  //       { english: "Decisions", others: "b347" },
  //     ]
  //   },
  //   {
  //     heading: "Hints",
  //     body: [
  //       { english: "Which cohort is your target market? Will they spend sufficient time on the app?", others: "b227" },
  //       { english: "Where will your primary users belong from? Which gender will spend more time on game?", others: "b228" },
  //       { english: "Which income class will spend more time on app? Will they pay upfront for the game?", others: "b229" },
  //       { english: "How will the revenue model align with the game? What are the trade-offs with different income classes?", others: "b230" },
  //       { english: "Is target market huge or narrow? How comfortable target market will be with localization?", others: "b231" },
  //       { english: "What is the trade-off in selecting the multiple languages from provided options?", others: "b232" },
  //       { english: "Are there enough users for that genre? What about the competition present?", others: "b233" },
  //       { english: "How preference of genre connects with the income class and target market?", others: "b234" },
  //       { english: "How interactive and easy will the user's life be after incorporating this element?", others: "b235" },
  //       { english: "What kind of effect this element will leave on game? What are trade-offs between provided option?", others: "b236" },
  //       { english: "What would be the major motivation for a user using this element?", others: "b237" },
  //       { english: "How much will it impact the time spent by the user on the game?", others: "b238" },
  //       { english: "How does your target market thinks? Do they want a fantasy world or usual life with happening elements?", others: "b239" },
  //       { english: "What would be the different trade-off with selecting the element? How effective it will be on the user?", others: "b240" },
  //       { english: "Why your target market play the games? What motivates them?", others: "b241" },
  //       { english: "How effective is communication strategy? Will the target market relate to it?", others: "b242" },
  //       { english: "What activities does target users do in a daily time? On which platform they spend most time?", others: "b243" },
  //       { english: "What will be a right mix of channels to target and re-target the users?", others: "b244" },
  //       { english: "What is more important control, users, reach or revenue?", others: "b245" },
  //       { english: "How the balance between control, reach and revenue be achieved?", others: "b246" },
  //       { english: "Which game type would be the one target market will be attracted towards?", others: "b247" },
  //       { english: "How will you generate the revenues for present & future? Will it be enough for breakeven?", others: "b248" },
  //       { english: "What would be the first reaction of users when they see the ads?", others: "b249" },
  //       { english: "Which type of ads will annoy them the least? Will they interact with the ads?", others: "b250" },
  //       { english: "What does your analysis of report inform? How will you change the strategy going ahead?", others: "b251" },
  //       { english: "With your decisions what worked while what didn't in your favour?", others: "b252" },
  //     ]
  //   },
  //   {
  //     heading: "Food for Thought",
  //     body: [
  //       { english: "Food for Thought", others: "b253" },
  //       { english: "When planning a launch for a new mobile game, which of the following parameters would be most crucial in determining the ideal cohort for your target market?", others: "b254" },
  //       { english: "Before deciding which socio-economic class to target for your new mobile game, which of the following parameters should be the primary consideration?", others: "b255" },
  //       { english: "Before finalizing the languages to incorporate into your new mobile game, which of the following parameters should be your primary consideration?", others: "b256" },
  //       { english: "As you conceptualize your new mobile game, which of the following parameters should be the primary consideration when deciding on its genre?", others: "b257" },
  //       { english: "In the intricate process of game development, when pinpointing which situational element to incorporate into your mobile game, which of the following parameters should be of utmost importance?", others: "b258" },
  //       { english: "When you're at the crossroads of game development, aiming to integrate a social element into your mobile game, which of the following parameters should guide your decision",others: "b259" },
  //       { english: "In the intricate process of game development, when pinpointing which situational element to incorporate into your mobile game, which of the following parameters should be of utmost importance?", others: "b260" },
  //       { english: "In the maze of game marketing, when selecting the right communication method to promote your mobile game, which guiding parameter should be your beacon?", others: "b261" },
  //       { english: "In the strategy labyrinth of game promotion, when pinpointing the optimal channels for communication and promotion of your mobile game, which guiding principle should be paramount?", others: "b262" },
  //       { english: "Navigating the multifaceted world of game development, when determining the ideal publisher for your mobile game, which primary metric should inform your decision?", others: "b263" },
  //       { english: "Amid the intricate landscape of game development, when pinpointing the perfect monetization strategy for your mobile game, which guiding framework should be at the forefront?", others: "b264" },
  //       { english: "In the realm of game development and monetization, when choosing the ideal combination of ads for your mobile game, which guiding consideration should dominate your decision-making?", others: "b265" },
  //       { english: "While understanding user traffic times can help in scheduling marketing campaigns more effectively, it does not directly aid in defining the core target audience or cohort.", others: "b266" },
  //       { english: "This is a strong approach! Segmenting potential users based on these demographic details will allow for a targeted and efficient strategy tailored to the characteristics and preferences of the selected cohort.", others: "b267" },
  //       { english: "While aesthetics and UI/UX design are important for user retention and satisfaction, color preferences might not be the most decisive parameter when identifying a target market for a new game.", others: "b268" },
  //       { english: "While the visual appeal of a game is essential, it's secondary to understanding the fundamental socio-economic characteristics of the target audience. Aesthetic preferences may vary within each class, making it a less definitive parameter for this decision.", others: "b269" },
  //       { english: "Correct choice! Recognizing the financial capacity, access to digital platforms, and general lifestyle preferences of each socio-economic class is paramount. It gives insight into their potential to purchase or engage with the game, ensuring the marketing strategy aligns with the audience's capabilities and inclinations.", others: "b270" },
  //       { english: "While influencers can play a role in promoting a game, solely relying on their number within a class isn't a comprehensive approach. The broader socio-economic factors of each class will have a more direct impact on the game's success.", others: "b271" },
  //       { english: "This is the correct approach. By understanding the linguistic preferences and dominant languages of your primary target market, you can ensure the game is accessible and user-friendly for the majority of your potential players, leading to increased engagement and retention.", others: "b272" },
  //       { english: "This approach might not be effective. While music's popularity can indicate cultural trends, it does not necessarily correlate with the linguistic needs or preferences of potential gamers. It's essential to base language decisions on the specific audience you're targeting rather than broader entertainment trends.", others: "b273" },
  //       { english: "While a passionate development team can bring great energy to a project, relying solely on personal preferences may not resonate with the broader audience. It's essential to balance passion with market demand to ensure the game's success.", others: "b274" },
  //       { english: "While entertainment trends can influence game success, they can be fleeting. Relying solely on the popularity of current movies or TV shows might not ensure long-term engagement or success for a game, especially if those trends change.", others: "b275" },
  //       { english: "This is the ideal approach. Understanding what players are currently engaging with, and where market demand lies, can guide your genre choice, ensuring your game has a higher likelihood of success and broad appeal.", others: "b276" },
  //       { english: "While topical relevance can provide an initial surge of interest, relying heavily on current events might render the game dated in a rapidly changing news cycle. It's essential to ensure the situational elements have a lasting appeal beyond the immediate headlines.", others: "b277" },
  //       { english: "This is the ideal approach. Direct understanding of players needs, combined with observations on immersion and emotional engagement, provides invaluable insights. This data-driven approach ensures that the chosen situational elements enhance the player's experience and long-term engagement with the game", others: "b278" },
  //       { english: "While literary themes might offer rich narratives, translating them directly into game situational elements might not always resonate with the gaming audience. The mediums have different engagement dynamics, and what works for one might not directly apply to the other.", others: "b279" },
  //       { english: "This is the more informed approach. A seamless and organic incorporation of social elements that align with the game's core mechanics and story ensures player engagement and satisfaction", others: "b280" },
  //       { english: "While integrating trendy features can provide an initial appeal, it's crucial to remember that trends can be fleeting. Mirroring transient social media features might not provide a lasting or immersive experience for gamers, and there's a risk the game might feel outdated once those trends fade.", others: "b281" },
  //       { english: "While such an approach might capture initial attention due to the movie's popularity, it might not ensure sustained engagement. Games and movies engage audiences differently, and a direct transplantation might feel out of place or forced within the game's environment.", others: "b282" },
  //       { english: "This approach is ideal. Ensuring that the chosen lifestyle element seamlessly integrates with the game's mechanics and storyline is crucial. Moreover, understanding players needs can provide invaluable insights, ensuring that the lifestyle element enriches the gaming experience.", others: "b283" },
  //       { english: "While tapping into popular discussions can lend relevance, games need a deeper integration than just mirroring current trends. What's popular on blogging platforms might not translate effectively into an immersive game element.", others: "b284" },
  //       { english: "While award-winning campaigns can be inspiring and innovative, they might not always be pertinent to your game or its target audience. Using a communication method just because it was successful for another brand or product might not guarantee similar results for your game.", others: "b285" },
  //       { english: "This approach stands out as the most informed. Tailoring communication to echo the game's essence, resonate with the target audience, increasing the likelihood of a successful campaign.", others: "b286" },
  //       { english: "Chasing virality can be tempting, but what works for one industry or product might not work for another. Furthermore, viral campaigns from unrelated sectors might not align with the gaming audience's expectations or interests.", others: "b287" },
  //       { english: "While staying updated with trending channels can offer innovative ways to reach an audience, relying solely on what's \"in vogue\" might not ensure a targeted reach. Trends can be fleeting, and a channel's general popularity does not guarantee it's the right fit for a specific game's audience.", others: "b288" },
  //       { english: "This approach is more comprehensive. By examining how well a channel has engaged with your specific target demographic in the past, understanding its alignment with your game's essence, and observing competitors' successes and pitfalls, you're more likely to select channels that effectively resonate with potential players.", others: "b289" },
  //       { english: "Quantity doesn't necessarily equate to quality. Just because a publisher has released many games doesn't guarantee they have the expertise or resources to successfully launch and market your specific game.", others: "b290" },
  //       { english: "This approach is the most holistic. By examining the publisher's success with similar genres, understanding their market penetration, and ensuring their terms align with your goals, you're optimizing for both game success and a fruitful partnership.", others: "b291" },
  //       { english: "While visibility in the industry can be an indicator of a publisher's reputation and influence, it shouldn't be the sole factor. Public speaking engagements don't necessarily reflect a publisher's ability to successfully launch and promote a game.", others: "b292" },
  //       { english: "While it might seem tempting to follow current trends, what works for one game doesn't guarantee success for another. A strategy's success in top-grossing games might be contingent on factors specific to those games, such as their genre, target audience, or gameplay mechanics.", others: "b293" },
  //       { english: "This approach stands out as the most judicious. It ensures the monetization method complements the player's in-game experience, rather than disrupts it. By aligning monetization with gameplay and user preferences, you're more likely to maintain player satisfaction and long-term retention, optimizing revenue generation.", others: "b294" },
  //       { english: "While other entertainment sectors might offer monetization insights, games interact with audiences differently. Transplanting a model from another industry might not resonate with or be effective for a gaming audience.", others: "b295" },
  //       { english: "While high average rates can be enticing, this approach may not always be in the best interest of the game's user experience. Ads that disrupt gameplay or don't align with the game's ethos can deter players, potentially leading to decreased user retention and overall revenue.", others: "b296" },
  //       { english: "This is the more balanced approach. Ensuring ads do not intrude upon or deter from the gameplay experience is vital. Utilizing data helps determine which ad formats are most palatable to players, ultimately aiding in maintaining a positive gaming experience while also generating revenue.", others: "b297" },
  //       { english: "Analyzing the highest user traffic times on gaming platform", others: "b348" },
  //       { english: "Understanding & Segmenting the audience based on age, gender, and geographical location", others: "b349" },
  //       { english: "Assessing the color preferences in-game interfaces among users", others: "b350" },
  //       { english: "The aesthetic appeal and color scheme of the game interface", others: "b351" },
  //       { english: "The purchasing power, digital accessibility, and lifestyle preferences of each class.", others: "b352" },
  //       { english: "The number of gaming influencers popular in each class.", others: "b353" },
  //       { english: "Analyzing the demographic distribution and primary languages spoken by the largest user base in your target market regions.", others: "b354" },
  //       { english: "Choosing languages based on the recent popularity of international music charts.", others: "b355" },
  //       { english: "Selecting a genre based on the personal preferences of your development team.", others: "b356" },
  //       { english: "Choosing a genre that aligns with the most popular movies or TV shows currently airing.", others: "b357" },
  //       { english: "Analyzing current market trends, user engagement data, and the genres of competitor games in your target market.", others: "b358" },
  //       { english: "Aligning the situational elements with the most prevalent current events or news headlines.", others: "b359" },
  //       { english: "Evaluating the immersion level, emotional resonance, and player needs on different situational elements.", others: "b360" },
  //       { english: "Incorporating elements that parallel the themes of top-selling books in the current year.", others: "b361" },
  //       { english: "Assessing the organic integration potential of the social element into the game's narrative and mechanics", others: "b362" },
  //       { english: "Selecting the social element that mirrors features from the top three social media platforms of the month", others: "b363" },
  //       { english: "Adopting a lifestyle element that mirrors the protagonist's lifestyle in the current highest-grossing movie.", others: "b364" },
  //       { english: "Evaluating the lifestyle element's synergy with the game's user preference, narrative arc, and other elements.", others: "b365" },
  //       { english: "Incorporating the lifestyle element based on the most discussed lifestyle trends on major lifestyle blogging platforms.", others: "b366" },
  //       { english: "Choosing communication methods that have been prominently featured in recent marketing award shows.", others: "b367" },
  //       { english: "Evaluating the communication's resonance with the game's core narrative, its target audience preferences, and its elements.", others: "b368" },
  //       { english: "Opting for communication strategies based on the most viral advertising campaigns from unrelated industries in the past quarter.", others: "b369" },
  //       { english: "Opting for channels that are trending and frequently mentioned in top marketing and tech magazines.", others: "b370" },
  //       { english: "Assessing channels based on their historical engagement rates with your target audience, and the fit with your game's genre.", others: "b371" },
  //       { english: "Choosing a publisher based on the sheer volume of games they've published in the past year.", others: "b372" },
  //       { english: "Evaluating the publisher's track record in successfully launching games of similar genres, their market reach, and the compatibility of their terms with your game's objectives.", others: "b373" },
  //       { english: "Opting for a publisher whose executive team frequently gives talks at leading game development conferences.", others: "b374" },
  //       { english: "Selecting the monetization strategy that is most prevalent in the top-grossing games of the month.", others: "b375" },
  //       { english: "Evaluating the strategy's alignment with your game's core gameplay elements, user preferences, and trends", others: "b376" },
  //       { english: "Choosing a monetization approach based on the most successful financial models in other entertainment industries, like music or film", others: "b377" },
  //       { english: "Incorporating the ad formats that boast the highest average rates in the current ad industry", others: "b378" },
  //       { english: "Evaluating the compatibility of ad formats with the game's user experience, and interruption minimization", others: "b379" },




  //     ]
  //   },
  //   {
  //     heading: "General",
  //     body: [
  //       { english: "Game Arena", others: "b3" },
  //       { english: "Readings", others: "b4" },
  //       { english: "Forum", others: "b5" },
  //       { english: "Leaderboard", others: "b6" },
  //       { english: "Show Less", others: "b330" },
  //       { english: "Show More", others: "b331" },
  //       { english: "Select a option", others: "b319" },
  //       { english: "Select Round", others: "b342" },

  //     ]
  //   },
  //   {
  //     heading: "Tab",
  //     body: [
  //       { english: "Introduction", others: "b333" },
  //       { english: "Decision Checklist", others: "b334" },
  //     ]
  //   },
  // ];

  selectedLanguage = 'english';

  languagebody: any = [
    {
      heading: "b333",
      body: ['b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19']
    },
    {
      heading: "b8",
      body: ['b20']
    },
    {
      heading: "b9",
      body: ['b21', 'b22', 'b23', 'b32', 'b35', 'b37', 'b38', 'b48', 'b50', 'b51', 'b52', 'b54', 'b56', 'b58', 'b303',
        'b304', 'b305', 'b306', 'b307', 'b308', 'b309', 'b310', 'b311', 'b312', 'b335', 'b336'
      ]
    },
    {
      heading: "b382",
      body: ['b24', 'b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b33', 'b34', 'b36', 'b39', 'b40', 'b41', 'b42',
        'b43', 'b44', 'b45', 'b46', 'b47', 'b49', 'b53', 'b55', 'b57'
      ]
    },
    {
      heading: "b10",
      body: ['b59', 'b63', 'b64', 'b65', 'b67', 'b68', 'b69', 'b70', 'b71', 'b72', 'b73', 'b74', 'b75', 'b76', 'b77', 'b78',
        'b79', 'b80', 'b81', 'b82', 'b84', 'b85', 'b86', 'b298', 'b299', 'b300', 'b301', 'b302', 'b329'
      ]
    },
    {
      heading: "b383",
      body: ['b60', 'b61', 'b62', 'b66', 'b83', 'b344']
    },
    {
      heading: "b11",
      body: ['b87', 'b88', 'b89', 'b90', 'b91', 'b92', 'b94', 'b95', 'b96', 'b97', 'b98', 'b99', 'b100', 'b101', 'b102', 'b105',
        'b106', 'b107', 'b108', 'b109', 'b110', 'b111', 'b112', 'b113', 'b114', 'b115', 'b116', 'b117', 'b118', 'b119', 'b120', 'b121', 'b122',
        'b123', 'b124', 'b125', 'b126', 'b127', 'b128', 'b129', 'b130', 'b131', 'b132', 'b133', 'b134', 'b345',]
    },
    {
      heading: "b384",
      body: ['b93', 'b103', 'b104', 'b332']
    },
    {
      heading: "b12",
      body: ['b135', 'b136', 'b137', 'b138', 'b139', 'b140', 'b141', 'b142', 'b143', 'b144', 'b145', 'b146', 'b147', 'b148', 'b149',
        'b150', 'b151', 'b152', 'b153', 'b154', 'b155', 'b156', 'b157', 'b158', 'b159', 'b160', 'b161', 'b162', 'b164', 'b165', 'b166', 'b167',
        'b168', 'b169', 'b170', 'b175', 'b176', 'b177', 'b178', 'b179', 'b180', 'b181', 'b182', 'b183', 'b184', 'b185', 'b313', 'b314', 'b315', 'b316', 'b317',
      ]
    },
    {
      heading: "b385",
      body: ['b163', 'b171', 'b172', 'b173', 'b174', 'b186', 'b187', 'b188', 'b189',
      ]
    },
    {
      heading: "b334",
      body: ['b190', 'b191', 'b192', 'b193', 'b194', 'b195', 'b196', 'b197', 'b198', 'b199', 'b200', 'b201', 'b202', 'b203', 'b204',
        'b205', 'b206', 'b343',]
    },
    {
      heading: "b13",
      body: ['b207', 'b208', 'b209', 'b210', 'b211', 'b212', 'b213', 'b214', 'b215', 'b216', 'b217', 'b218', 'b219', 'b337', 'b338',
        'b339', 'b340', 'b341', 'b346', "b380"]
    },
    {
      heading: "b220",
      body: ['b220', 'b221', 'b222', 'b223', 'b224', 'b225', 'b226', 'b347',
      ]
    },
    {
      heading: "b386",
      body: ['b227', 'b228', 'b229', 'b230', 'b231', 'b232', 'b233', 'b234', 'b235', 'b236', 'b237', 'b238', 'b239', 'b240',
        'b241', 'b242', 'b243', 'b244', 'b245', 'b246', 'b247', 'b248', 'b249', 'b250', 'b251', 'b252',
      ]
    },
    {
      heading: "b253",
      body: ["b253", 'b254', 'b255', 'b256', 'b257', 'b258', 'b259', 'b260', 'b261', 'b262', 'b263', 'b264', 'b265', 'b266', 'b267', 'b268',
        'b269', 'b270', 'b271', 'b272', 'b273', 'b274', 'b275', 'b276', 'b277', 'b278', 'b279', 'b280', 'b281', 'b282', 'b283', 'b284', 'b285',
        'b286', 'b287', 'b288', 'b289', 'b290', 'b291', 'b292', 'b293', 'b294', 'b295', 'b296', 'b297', 'b348', 'b349', 'b350', 'b351', 'b352',
        'b353', 'b354', 'b355', 'b356', 'b357', 'b358', 'b359', 'b360', 'b361', 'b362', 'b363', 'b364', 'b365', 'b366', 'b367', 'b368', 'b369', 'b370',
        'b371', 'b372', 'b373', 'b374', 'b375', 'b376', 'b377', 'b378', 'b379',
      ]
    },
    {
      heading: "b387",
      body: ['b3', 'b4', 'b5', 'b6', 'b330', 'b331', 'b319', 'b342', 'b333', 'b334', 'b381','b388','b389','b390',
        'b391','b392','b393','b394','b395','b396','b397','b398','b399','b400','b401','b402','b403'
      ]
    }
  ]
}



