import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { EcommercefoodforthoughtComponent } from '../ecommercefoodforthought/ecommercefoodforthought.component';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecommercemarketing',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,
     MatButtonModule, MatIconModule, TippyDirective,FormsModule],
  templateUrl: './ecommercemarketing.component.html',
  styleUrls: ['./ecommercemarketing.component.scss']
})
export class EcommercemarketingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  showAll: boolean[] = [false, false, false, false, false, false];
  databasecellname: any;
  periodcellname: any;

  selectedOption: number[] = [];
  options: any = [1, 2, 3, 4, 5];
  campaigncardOption: string[] = [];
  campaigncard: string[] = ["Mass", "Product-Specific"];
  selectedRadio: number | null = null;

  // textLines: string[] = [
  //   "The campaign, centered on storytelling, will use posts and short videos to detail the creation of an eco-friendly garment, emphasizing its environmental benefits. It targets environmentally conscious consumers aged 20-40, active in sustainability movements, and curious about product origins. The focus is on urban centers in India like Delhi, Mumbai, Bangalore, and Hyderabad, where educated young professionals are concentrated",
  //   "Average reach: 1 million users Engagement rate: 3.5% with 25,000 interactions Sales Conversion: 3.2% increase in sales during the campaign week New Followers: 30,000 new followers on social media The campaign is a virtual fashion show that unveils Seamseco’s latest sustainable collections via live-streamed events and interactive designer talks. Aimed at fashion-savvy consumers aged 25-45, particularly women, the campaign targets major metropolitan areas in India such as Delhi, Mumbai, Bangalore, and Hyderabad. These cities are chosen for their large populations of fashion-conscious professionals and high engagement with digital fashion content.",
  //   "Reach: 500,000 users Engagement: 10,000 posts under campaign hashtag Follower Growth: 20,000 new followers during the campaign month Engagement Rate: 7% overall interaction rate It invites participants to exclusively wear sustainable fashion for a month, sharing their experiences through posts tagged with the campaign’s hashtags. Targeting young adults, especially university students and early career professionals, this campaign focuses on major university cities across India like Pune, Bangalore, and Delhi, where environmental awareness and active social media use are prevalent.",
  //   "Reach: Target to reach 1,000,000 users. Engagement Rate: Aim for a 10% engagement rate, with interactions in the form of likes, comments, and shares. Story Views: Expect around 500,000 views per story. User-Generated Posts: Encourage at least 2,000 users to post their own Seamseco outfits with a designated hashtag. It harnesses the power of Instagram Stories to feature daily showcases of customers wearing Seamseco garments. This series encourages users to engage by sharing their own eco-fashion moments using a specific hashtag. The campaign is designed for eco-conscious consumers aged 18-34 who enjoy showcasing their personal style and sustainability efforts.",
  //   "Reach: Aim to reach over 800,000 users. Engagement Rate: Target a 12% engagement rate on each Reel. Views: Strive for over 600,000 views per Reel. Followers Gained: Gain at least 15,000 new followers over the campaign period. The campaign features dynamic, reel-based virtual runway shows displaying the latest in eco-friendly fashion. Aimed at fashion-savvy women aged 20-40, this initiative captures the vibrancy of Seamseco’s collections, engaging an audience that values both style and sustainability.",
  //   "Reach: Expected to reach 2,000,000 users. Engagement Rate: Aim for a 15% engagement rate from posts and stories. Participation Rate: Encourage at least 5,000 posts from users participating in the challenge. Influencer Engagement: Each influencer should achieve at least 100,000 views and 10,000 likes per post. It partners with key Instagram influencers who challenge their followers to create sustainable outfits featuring Seamseco’s products. Targeted at 18-35-year-old eco-aware individuals, this campaign leverages influencer reach to enhance brand engagement and visibility.",
  //   "Views: 300,000 per episode Watch Time: 5 minutes average per viewer Subscribers Gained: 10,000 across the series Engagement: 15,000 likes and 2,000 comments per episode This documentary series delves into the lifecycle of sustainable garments, showcasing the sourcing, production, and impacts of Seamseco’s eco-friendly fashion. It targets viewers who value transparency and the stories behind their clothing.",
  //   "Views: 500,000 per challenge video Engagement: 10,000 likes and 1,000 comments per video Subscriber Growth: 5% increase during the campaign Conversion Rate: 3% click-through to purchases Influential YouTubers take on fashion challenges using Seamseco’s products, engaging a young audience with interactive and practical displays of sustainable fashion.",
  //   "Views: 200,000 per interview Engagement: 5,000 likes and active comment sections Subscribers: 3,000 new subscribers from the series Watch Time: 7 minutes average per viewer Interviews with key figures in the eco-fashion industry provide insights into the innovations driving sustainable fashion, aimed at professionals and enthusiasts in the sustainability sector.",
  //   "Drag-and-Drop Email Builder: Easy-to-use interface for crafting custom email designs without needing coding skills. Segmentation Tools: Advanced options for segmenting your audience based on behavior, purchase history, and engagement levels. Automated Campaigns: Set up triggers for specific customer actions like cart abandonment or browsing history. A/B Testing: Test different versions of your emails to see which performs best. Analytics and Reporting: Detailed reports on open rates, click-through rates, conversions, and more. Plan: Up to30000 subscribers and emails, including custom integrations and dedicated support.",
  //   "Template Library: A vast library of pre-designed templates suitable for various industries and occasions. Multi-channel Marketing: Coordinate email campaigns with SMS and social media posts. Customer Journey Mapping: Visual tools to create and manage customer journeys based on interactions with your brand. Personalization Engine: Dynamic content features to personalize emails based on user data. Compliance and Security: Ensures compliance with GDPR and other privacy regulations. Plan: Up to 25,000 subscribers, full journey mapping, and advanced analytics tools.",
  //   "Interactive Emails: Create interactive emails with embedded videos and widgets. Real-Time Analytics: Monitor email campaign performance in real time. Custom Domain: Use your custom domain for sending emails, enhancing brand visibility. API Access: Integrate with other tools and platforms with a robust API. 24/7 Support: Round-the-clock customer support for all plan subscribers. Plan: Supports up to 12,000 subscribers, adds API access and custom domain usage.",
  //   "Subject Line: Welcome to Seamseco – Join Our Green Journey! Email Content: This email introduces new subscribers to the Seamseco brand, highlighting the company’s commitment to sustainable fashion and what subscribers can expect from future communications. It will include a brief introduction to the brand’s mission, an invitation to explore the product range, and a special discount code for first-time purchases.",
  //   "Subject Line: Discover the Stories Behind Our Sustainable Styles Email Content: Focus on featuring specific products or collections, detailing the sustainable materials used and the ethical production processes. Each email can spotlight a different item, providing backstory and styling tips.",
  //   "Subject Line: Why Sustainable Fashion Matters – A Seamseco Insight Email Content: Educate subscribers about the impact of sustainable fashion on the environment compared to conventional fashion practices. This series can include infographics, impact statistics, and stories from the fashion industry.",
  //   "Subject Line: A Special Thank You from Seamseco – Exclusive Offer Inside! Email Content: Send exclusive promotions, discounts, or access to limited-edition products as a token of appreciation to loyal customers or to incentivize first-time purchases.",
  //   "Subject Line: We Value Your Voice – Help Us Grow! Email Content: Encourage customers to provide feedback on a survey about their shopping experience. This could include a small incentive like a discount code or entry into a giveaway for completing the survey.",
  //   "Forecasted Metrics: Website Traffic Increase: 20% Engagement Rate: 15% increase across social media platforms SEO Rankings: Improvement in keyword rankings related to sustainable fashion Develop a series of engaging content pieces that highlight Seamseco’s commitment to sustainability. This could include blog posts, infographics, and videos discussing the impact of sustainable fashion, behind-the-scenes insights into ethical manufacturing, and profiles of the materials used.",
  //   "Forecasted Metrics: Reach: 500,000 to 1,000,000 impressions per campaign Follower Growth: 5-10% increase in social media followers per campaign Sales Increase: 10-15% during and immediately following the campaign Partner with eco-conscious fashion influencers who align with Seamseco’s values. These influencers would wear and promote Seamseco products, share discount codes, and create content that educates their followers about the brand’s sustainable practices.",
  //   "Forecasted Metrics: Brand Awareness: Significant boost in local areas where events are held Direct Sales: 20-30% increase in sales during event days Customer Acquisition: 100-200 new customers per event Host pop-up shops in high-footfall urban areas and at eco-friendly events, allowing customers to physically interact with and purchase Seamseco products. These events can also include workshops or talks on sustainability.",
  //   "Forecasted Metrics: Customer Retention Rate: Increase by 15% Repeat Purchase Rate: Increase by 25% Overall Customer Lifetime Value: Increase by 20% Implement a loyalty program where customers earn points for each purchase, which can be redeemed for discounts on future purchases. This program would also reward behaviors that promote sustainability, such as recycling old clothes.",
  //   "Forecasted Metrics: Conversion Rate: 5-7% from ads ROI: 4:1 return on ad spend Customer Engagement: 10-12% click-through rate on ads Launch targeted digital advertising campaigns using platforms like Google Ads and Facebook Ads to reach potential customers who have shown interest in eco-friendly products or who match the demographic profile of current customers.",
  // ]
  textLines: string[] = [
    "The campaign, centered on storytelling, will use posts and short videos to detail the creation of an eco-friendly garment, emphasizing its environmental benefits. It targets environmentally conscious consumers aged 20-40, active in sustainability movements, and curious about product origins. The focus is on urban centers in India like Delhi, Mumbai, Bangalore, and Hyderabad, where educated young professionals are concentrated.",
    "The campaign is a virtual fashion show that unveils Seamseco’s latest sustainable collections via live-streamed events and interactive designer talks. Aimed at fashion-savvy consumers aged 25-45, particularly women, the campaign targets major metropolitan areas in India such as Delhi, Mumbai, Bangalore, and Hyderabad. These cities are chosen for their large populations of fashion-conscious professionals and high engagement with digital fashion content.",
    "It invites participants to exclusively wear sustainable fashion for a month, sharing their experiences through posts tagged with the campaign’s hashtags. Targeting young adults, especially university students and early career professionals, this campaign focuses on major university cities across India like Pune, Bangalore, and Delhi, where environmental awareness and active social media use are prevalent.",
    "It harnesses the power of Instagram Stories to feature daily showcases of customers wearing Seamseco garments. This series encourages users to engage by sharing their own eco-fashion moments using a specific hashtag. The campaign is designed for eco-conscious consumers aged 18-34 who enjoy showcasing their personal style and sustainability efforts.",
    "The campaign features dynamic, reel-based virtual runway shows displaying the latest in eco-friendly fashion. Aimed at fashion-savvy women aged 20-40, this initiative captures the vibrancy of Seamseco’s collections, engaging an audience that values both style and sustainability.",
    "It partners with key Instagram influencers who challenge their followers to create sustainable outfits featuring Seamseco’s products. Targeted at 18-35-year-old eco-aware individuals, this campaign leverages influencer reach to enhance brand engagement and visibility.",
    "This documentary series delves into the lifecycle of sustainable garments, showcasing the sourcing, production, and impacts of Seamseco’s eco-friendly fashion. It targets viewers who value transparency and the stories behind their clothing.",
    "Influential YouTubers take on fashion challenges using Seamseco’s products, engaging a young audience with interactive and practical displays of sustainable fashion.",
    "Interviews with key figures in the eco-fashion industry provide insights into the innovations driving sustainable fashion, aimed at professionals and enthusiasts in the sustainability sector.",
    "This email introduces new subscribers to the Seamseco brand, highlighting the company’s commitment to sustainable fashion and what subscribers can expect from future communications. It will include a brief introduction to the brand’s mission, an invitation to explore the product range, and a special discount code for first-time purchases.",
    "Focus on featuring specific products or collections, detailing the sustainable materials used and the ethical production processes. Each email can spotlight a different item, providing backstory and styling tips.",
    "Educate subscribers about the impact of sustainable fashion on the environment compared to conventional fashion practices. This series can include infographics, impact statistics, and stories from the fashion industry.",
    "Send exclusive promotions, discounts, or access to limited-edition products as a token of appreciation to loyal customers or to incentivize first-time purchases.",
    "Encourage customers to provide feedback on a survey about their shopping experience. This could include a small incentive like a discount code or entry into a giveaway for completing the survey.",
    "Develop a series of engaging content pieces that highlight Seamseco’s commitment to sustainability. This could include blog posts, infographics, and videos discussing the impact of sustainable fashion, behind-the-scenes insights into ethical manufacturing, and profiles of the materials used.",
    "Partner with eco-conscious fashion influencers who align with Seamseco’s values. These influencers would wear and promote Seamseco products, share discount codes, and create content that educates their followers about the brand’s sustainable practices.",
    "Host pop-up shops in high-footfall urban areas and at eco-friendly events, allowing customers to physically interact with and purchase Seamseco products. These events can also include workshops or talks on sustainability.",
    "Implement a loyalty program where customers earn points for each purchase, which can be redeemed for discounts on future purchases. This program would also reward behaviors that promote sustainability, such as recycling old clothes.",
    "Launch targeted digital advertising campaigns using platforms like Google Ads and Facebook Ads to reach potential customers who have shown interest in eco-friendly products or who match the demographic profile of current customers."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));

  textLines1 = [
    {
      heading: "v10",
      img: "assets/images/ecommerce/greenthreadini.svg",
      body: [
        { title: "Average reach: ", value: "800,000 users" },
        { title: "Engagement: ", value: "5% engagement rate with 15,000 likes and comments" },
        { title: "Conversion Rate: ", value: "2.5% with direct click-throughs to product pages" },
        { title: "Website Traffic: ", value: "20,000 visits" },
      ],
      ischecked: false,
      description: this.textLines[0],
      textname: 'A/B Testing',
      cellvalue: 'aq71',
      textmonth: 'Cost, INR',
      cellvalueno: 'g49',
      cellvalue1: 'ar71',
      truncatedText: this.truncatedText[0],
    },
    {
      heading: "v11",
      img: "assets/images/ecommerce/ecochikfasionweek.svg",
      body: [
        { title: "Average reach:", value: "1 million users" },
        { title: "Engagement rate:", value: "3.5% with 25,000 interactions" },
        { title: "Sales Conversion:", value: "3.2% increase in sales during the campaign week" },
        { title: "New Followers:", value: "30,000 new followers on social media" },
      ],
      ischecked: false,
      description: this.textLines[1],
      textname: 'A/B Testing',
      cellvalue: 'aq72',
      textmonth: 'Cost, INR',
      cellvalueno: 'g50',
      
      cellvalue1: 'ar72',
      truncatedText: this.truncatedText[1],
    },
    {
      heading: "v12",
      img: "assets/images/ecommerce/seamsecosunstanblechallange.svg",
      body: [
        { title: "Average reach:", value: "500,000 users" },
        { title: "Engagement:", value: "10,000 posts under campaign hashtag" },
        { title: "Follower Growth:", value: "20,000 new followers during the campaign month" },
        { title: "Engagement Rate:", value: "7% overall interaction rate" },
      ],
      ischecked: false,
      description: this.textLines[2],
      textname: 'A/B Testing',
      cellvalue: 'aq73',
      textmonth: 'Cost, INR',
      cellvalueno: 'g51',
      
      cellvalue1: 'ar73',
      truncatedText: this.truncatedText[2],
    },

  ];

  textLines2 = [
    {
      heading: "v16",
      img: "assets/images/ecommerce/seamsecostylestory.svg",
      body: [
        { title: "Reach: ", value: "Target to reach 1,000,000 users." },
        { title: "Engagement Rate: ", value: "Aim for a 10% engagement rate, with interactions in the form of likes, comments, and shares." },
        { title: "Story Views: ", value: " Expect around 500,000 views per story." },
        { title: "User-Generated Posts: ", value: " Encourage at least 2,000 users to post their own Seamseco outfits with a designated hashtag." },
      ],
      ischecked: false,
      description: this.textLines[3],
      textname: 'A/B Testing',
      cellvalue: 'aq76',
      textmonth: 'Cost, INR',
      cellvalueno: 'g55',
      
      costvalue: 'ar76',
      truncatedText: this.truncatedText[3],
    },
    {
      heading: "v17",
      img: "assets/images/ecommerce/seamsecorunwayreels.svg",
      body: [
        { title: "Reach: ", value: "Aim to reach over 800,000 users." },
        { title: "Engagement Rate: ", value: "Target a 12% engagement rate on each Reel." },
        { title: "Views: ", value: "Strive for over 600,000 views per Reel." },
        { title: "Followers Gained:", value: "Gain at least 15,000 new followers over the campaign period." },
      ],
      ischecked: false,
      description: this.textLines[4],
      textname: 'A/B Testing',
      cellvalue: 'aq77',
      textmonth: 'Cost, INR',
      cellvalueno: 'g56',
      
      costvalue: 'ar77',
      truncatedText: this.truncatedText[4],
    },
    {
      heading: "v18",
      img: "assets/images/ecommerce/ecoinfluencerchallange.svg",
      body: [
        { title: "Reach: ", value: "Expected to reach 2,000,000 users." },
        { title: "Engagement Rate: ", value: "Aim for a 15% engagement rate from posts and stories." },
        { title: "Participation Rate: ", value: "Encourage at least 5,000 posts from users participating in the challenge." },
        { title: "Influencer Engagement:", value: "Each influencer should achieve at least 100,000 views and 10,000 likes per post." },
      ],
      ischecked: false,
      description: this.textLines[5],
      textname: 'A/B Testing',
      cellvalue: 'aq78',
      textmonth: 'Cost, INR',
      cellvalueno: 'g57',
      
      costvalue: 'ar78',
      truncatedText: this.truncatedText[5],
    },

  ];

  textLines3 = [
    {
      heading: "v22",
      img: "assets/images/ecommerce/greenfibricdairies.svg",
      body: [
        { title: "Views: ", value: "300,000 per episode" },
        { title: "Watch Time: ", value: "5 minutes average per viewer" },
        { title: "Subscribers Gained: ", value: "10,000 across the series" },
        { title: "Engagement: ", value: "15,000 likes and 2,000 comments per episode" },
      ],
      ischecked: false,
      description: this.textLines[6],
      textname: 'A/B Testing',
      cellvalue: 'aq81',
      textmonth: 'Cost, INR',
      cellvalueno: 'g61',
      
      costvalue: 'ar81',
      truncatedText: this.truncatedText[6],
    },
    {
      heading: "v23",
      img: "assets/images/ecommerce/seamsecostylechallange.svg",
      body: [
        { title: "Views: ", value: "500,000 per challenge video" },
        { title: "Engagement: ", value: "10,000 likes and 1,000 comments per video" },
        { title: "Subscribers Gained: ", value: "5% increase during the campaign" },
        { title: "Conversion Rate: ", value: "3% click-through to purchases" },
      ],
      ischecked: false,
      description: this.textLines[7],
      textname: 'A/B Testing',
      cellvalue: 'aq82',
      textmonth: 'Cost, INR',
      cellvalueno: 'g62',
      
      costvalue: 'ar82',
      truncatedText: this.truncatedText[7],
    },
    {
      heading: "v24",
      img: "assets/images/ecommerce/ecoinventerinterview.jpg",
      body: [
        { title: "Views: ", value: "200,000 per interview" },
        { title: "Engagement: ", value: "5,000 likes and active comment sections" },
        { title: "Subscribers Gained: ", value: "3,000 new subscribers from the series" },
        { title: "Conversion Rate: ", value: "7 minutes average per viewer" },
      ],
      ischecked: false,
      description: this.textLines[8],
      textname: 'A/B Testing',
      cellvalue: 'aq83',
      textmonth: 'Cost, INR',
      cellvalueno: 'g63',
      
      costvalue: 'ar83',
      truncatedText: this.truncatedText[8],
    },

  ];

  textLines4 = [
    {
      id: 'card1',
      heading: "v64",
      img: "assets/images/ecommerce/emailspark.svg",
      body: [
        { title: "Drag-and-Drop Email Builder: ", value: " Easy-to-use interface for crafting custom email designs without needing coding skills." },
        { title: "Segmentation Tools: ", value: "Advanced options for segmenting your audience based on behavior, purchase history, and engagement levels." },
        { title: "Automated Campaigns: ", value: "Set up triggers for specific customer actions like cart abandonment or browsing history." },
        { title: "A/B Testing: ", value: "Test different versions of your emails to see which performs best." },
        { title: "Analytics and Reporting:", value: "Detailed reports on open rates, click-through rates, conversions, and more." },
        { title: "Plan:", value: "Up to 30000 subscribers and emails, including custom integrations and dedicated support." }
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x64',
      
      costvalue: 'aq86',
    },
    {
      id: 'card2',
      heading: "v65",
      img: "assets/images/ecommerce/engagepulse.svg",
      body: [
        { title: "Template Library: ", value: "A vast library of pre-designed templates suitable for various industries and occasions." },
        { title: "Multi-channel Marketing: ", value: "Coordinate email campaigns with SMS and social media posts." },
        { title: "Customer Journey Mapping: ", value: "Visual tools to create and manage customer journeys based on interactions with your brand." },
        { title: "Personalization Engine: ", value: "Dynamic content features to personalize emails based on user data." },
        { title: "Compliance and Security:", value: "Ensures compliance with GDPR and other privacy regulations." },
        { title: "Plan:", value: "Up to 25,000 subscribers, full journey mapping, and advanced analytics tools." }
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x65',
      
      costvalue: 'aq87',
    },
    {
      id: 'card3',
      heading: "v66",
      img: "assets/images/ecommerce/inboxalliance.svg",
      body: [
        { title: "Interactive Emails: ", value: " Create interactive emails with embedded videos and widgets." },
        { title: "Real-Time Analytics: ", value: " Monitor email campaign performance in real time." },
        { title: "Custom Domain: ", value: " Use your custom domain for sending emails, enhancing brand visibility." },
        { title: "API Access: ", value: "Integrate with other tools and platforms with a robust API." },
        { title: "24/7 Support:", value: "Round-the-clock customer support for all plan subscribers." },
        { title: "Plan:", value: "Supports up to 12,000 subscribers, adds API access and custom domain usage." }
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x66',
      
      costvalue: 'aq88',
    },
  ];

  campaightext = [
    {
      heading: "v69",
      img: "assets/images/ecommerce/welcome.svg",
      body: [
        { title: "Subject Line: ", value: "Welcome to Seamseco – Join Our Green Journey!" },
      ],
      description: this.textLines[9],
      truncatedText: this.truncatedText[9],
      priority: "aq91",
      leads: "Leads",
      leadcell: "ar91",
      cellvalueno: 'h73',
      
    },
    {
      heading: "v70",
      img: "assets/images/ecommerce/producthighlight.svg",
      body: [
        { title: "Subject Line: ", value: "Discover the Stories Behind Our Sustainable Styles" },
      ],
      description: this.textLines[10],
      truncatedText: this.truncatedText[10],
      priority: "aq92",
      leads: "Leads",
      leadcell: "ar92",
      cellvalueno: 'h74',
      
    },
    {
      heading: "v71",
      img: "assets/images/ecommerce/educationalcontent.svg",
      body: [
        { title: "Subject Line: ", value: "Why Sustainable Fashion Matters – A Seamseco Insight" },
      ],
      description: this.textLines[11],
      truncatedText: this.truncatedText[11],
      priority: "aq93",
      leads: "Leads",
      leadcell: "ar93",
      cellvalueno: 'h75',
      
    },
    {
      heading: "v72",
      img: "assets/images/ecommerce/exclusiveoffer.svg",
      body: [
        { title: "Subject Line: ", value: "A Special Thank You from Seamseco – Exclusive Offer Inside!" },
      ],
      description: this.textLines[12],
      truncatedText: this.truncatedText[12],
      priority: "aq94",
      leads: "Leads",
      leadcell: "ar94",
      cellvalueno: 'h76',
      
    },
    {
      heading: "v73",
      img: "assets/images/ecommerce/feedbackandeng.svg",
      body: [
        { title: "Subject Line: ", value: "We Value Your Voice – Help Us Grow!" },
      ],
      description: this.textLines[12],
      truncatedText: this.truncatedText[12],
      priority: "aq95",
      leads: "Leads",
      leadcell: "ar95",
      cellvalueno: 'h77',
      
    },
  ];

  brandingText = [
    {
      heading: "v86",
      img: "assets/images/ecommerce/centriccontentmarket.svg",
      body: [
        { title: "Forecasted Metrics ", value: "" },
        { title: "Website Traffic Increase: ", value: "20%" },
        { title: "Engagement Rate:", value: "15% increase across social media platforms" },
        { title: "SEO Rankings: ", value: "Improvement in keyword rankings related to sustainable fashion" },
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x86',
      
      cellvalue: 'aq98',
      ischecked: false,
      description: this.textLines[14],
      truncatedText: this.truncatedText[14],
    },
    {
      heading: "v87",
      img: "assets/images/ecommerce/ifluencercollabration.svg",
      body: [
        { title: "Forecasted Metrics ", value: "" },
        { title: "Reach: ", value: "500,000 to 1,000,000 impressions per campaign" },
        { title: "Follower Growth:", value: "5-10% increase in social media followers per campaign" },
        { title: "Sales Increase: ", value: "10-15% during and immediately following the campaign" },
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x87',
      
      cellvalue: 'aq99',
      ischecked: false,
      description: this.textLines[15],
      truncatedText: this.truncatedText[15],
    },
    {
      heading: "v88",
      img: "assets/images/ecommerce/popupshop.svg",
      body: [
        { title: "Forecasted Metrics ", value: "" },
        { title: "Brand Awareness: ", value: "Significant boost in local areas where events are held" },
        { title: "Direct Sales:", value: "20-30% increase in sales during event days" },
        { title: "Customer Acquisition: ", value: "100-200 new customers per event" },
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x88',
      
      cellvalue: 'aq100',
      ischecked: false,
      description: this.textLines[16],
      truncatedText: this.truncatedText[16],
    },
    {
      heading: "v89",
      img: "assets/images/ecommerce/loylityprogram.svg",
      body: [
        { title: "Forecasted Metrics ", value: "" },
        { title: "Customer Retention Rate: ", value: "Increase by 15%" },
        { title: "Repeat Purchase Rate:", value: "Increase by 25%" },
        { title: "Overall Customer Lifetime Value: ", value: "Increase by 20%" },
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x89',
      
      cellvalue: 'aq101',
      ischecked: false,
      description: this.textLines[17],
      truncatedText: this.truncatedText[17],
    },
    {
      heading: "v90",
      img: "assets/images/ecommerce/targetadvcampus.svg",
      body: [
        { title: "Forecasted Metrics ", value: "" },
        { title: "Conversion Rate: ", value: "5-7% from ads" },
        { title: "ROI:", value: "4:1 return on ad spend" },
        { title: "Customer Engagement: ", value: "10-12% click-through rate on ads" },
      ],
      textcost: 'Cost per month, INR',
      cellvalueno: 'x90',
      
      cellvalue: 'aq102',
      ischecked: false,
      description: this.textLines[18],
      truncatedText: this.truncatedText[18],
    },
  ];


 
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }


  getFetchData() {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          this.checkloading = false;
          if (data.status !== "Success" || !data.resultList) return;

          this.result = data.resultList[0];
          this._global.casemanagementid.next(this.result.ecommercegameid);
          this.foodforthought = this.result.ecommerceGameCM.ecommerceGameCMActiveStatus.foodforthoughtstatus !== 'inactive';
          
          if (this.result.ecommercegamedata) {
            this.inputDisabled = this.result.ecommercegamedata.aq168 === 'yes' || this.timefinished;
            this.campaightext.forEach((item, index) => {
              this.selectedOption[index] = this.result.ecommercegamedata[item.priority] || '';
              this.campaigncardOption[index] = this.result.ecommercegamedata[item.leadcell] || '';
            });
          }

          


        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }


  writemarketingvalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string) {
    let apiname = "/ecommercegame/singleinputecommercegame";
    let ecommerceinputData: any = {}
    if (inputtype == 'radio') {

      ecommerceinputData = {
        [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
      };
    } else if (inputtype == 'select') {
      // For select input type, we directly use the selected value from ngModel binding
      ecommerceinputData = {
        [cellname]: event.target.value
      };

    } else {
      ecommerceinputData = {
        [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
      };

    }
   
    this._api.writeGameData("ecommercegame", 1,
      ecommerceinputData, apiname, 'ecommercegamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(EcommercefoodforthoughtComponent, {
      data: {},
    });
  }

}
