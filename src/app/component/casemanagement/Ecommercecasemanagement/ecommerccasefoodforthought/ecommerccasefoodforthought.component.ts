import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-ecommerccasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],  
  templateUrl: './ecommerccasefoodforthought.component.html',
  styleUrls: ['./ecommerccasefoodforthought.component.scss']
})
export class EcommerccasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought: any = [
    {
      question: ["When selecting products to launch from your catalog based on market data, which of the following would be the most critical factor to consider?"],

      option: [["Color variations available", "Market demand trends and customer preferences", "Number of images available for each product"]],

      feedback: [["While color variations are important for appealing to diverse customer preferences, they are not the most critical factor when considering the launch of new products. Color choices should complement, not drive, product selection based on broader market demands.",
        "This is the most critical factor because understanding market demand and customer preferences ensures that the products chosen are likely to sell well. Aligning product selection with these trends can significantly impact the success of the launch.",
        "Although having multiple images is beneficial for online sales as it enhances the product presentation, it is not a primary factor in deciding which products to launch. Product selection should be driven by demand and potential profitability rather than the availability of marketing materials."]],

      score: [["ba8", "ba9", "ba10"], ["ba8", "ba9", "ba10"]],

      rigor: [["bb8", "bb9", "bb10"], ["bb8", "bb9", "bb10"]],

      structuring: [["bc8", "bc9", "bc10"], ["bc8", "bc9", "bc10"]],

      synthesis: [["bd8", "bd9", "bd10"], ["bd8", "bd9", "bd10"]],

      business: [["be8", "be9", "be10"], ["be8", "be9", "be10"]],
    },
    {
      question: ["What is the primary benefit of choosing a supplier with a high sustainability rating for an eco-friendly fashion brand?"],

      option: [["Lower shipping costs", "Increased product durability", "Enhancement of brand reputation and alignment with customer values "]],

      feedback: [["While lower shipping costs are beneficial, they are not directly linked to a supplier’s sustainability rating. Cost efficiency in logistics is important but secondary to sustainability concerns for eco-friendly brands.",
        "Although product durability is crucial, it is not specifically related to a supplier’s sustainability rating. Durability must be considered, but it does not directly correlate with how sustainably a supplier operates.",
        "Choosing suppliers with high sustainability ratings directly supports an eco-friendly brand’s mission, enhancing its reputation among consumers who value environmental responsibility. This alignment is essential for maintaining brand integrity and customer trust."]],

      score: [["ba11", "ba12", "ba13"], ["ba11", "ba12", "ba13"]],

      rigor: [["bb11", "bb12", "bb13"], ["bb11", "bb12", "bb13"]],

      structuring: [["bc11", "bc12", "bc13"], ["bc11", "bc12", "bc13"]],

      synthesis: [["bd11", "bd12", "bd13"], ["bd11", "bd12", "bd13"]],

      business: [["be11", "be12", "be13"], ["be11", "be12", "be13"]],

    },
    {
      question: ["In determining your product markup, which strategy aligns best with aiming to capture a higher market share in a competitive market?"],

      option: [["Setting prices significantly above competitors", "Aligning prices closely with market averages while ensuring quality", "Frequently changing prices based on short-term market trends"]],

      feedback: [["This approach is risky as it can alienate potential customers, especially in a competitive market where price sensitivity may be high. It could position the products as premium but might reduce overall market share.",
        "This strategy is effective in competitive markets as it helps maintain competitiveness while also ensuring that the product quality justifies the price point, attracting a broader customer base.",
        "While responsive pricing can capitalize on trends, it may confuse and frustrate customers if done too frequently. Stability in pricing helps build customer trust and predictability in budgeting for purchases."]],

      score: [["ba14", "ba15", "ba16"], ["ba14", "ba15", "ba16"]],

      rigor: [["bb14", "bb15", "bb16"], ["bb14", "bb15", "bb16"]],

      structuring: [["bc14", "bc15", "bc16"], ["bc14", "bc15", "bc16"]],

      synthesis: [["bd14", "bd15", "bd16"], ["bd14", "bd15", "bd16"]],

      business: [["be14", "be15", "be16"], ["be14", "be15", "be16"]],

    },
    {
      question: ["What does a high buffering coefficient in your inventory strategy indicate?"],

      option: [["A focus on minimizing carrying costs", "Greater readiness to manage unexpected demand", "Higher risk of inventory obsolescence"]],

      feedback: [["Contrary to minimizing carrying costs, a high buffering coefficient usually means increased carrying costs because you are holding more inventory to buffer against supply chain uncertainties.",
        "A high buffering coefficient is indeed indicative of preparedness to handle sudden increases in demand or supply chain disruptions, ensuring that stock-outs are minimized and customer demand is met consistently.",
        "While higher inventory levels do carry a risk of obsolescence, the primary intention behind a high buffering coefficient is to guard against supply variability, not necessarily to hold inventory long enough for it to become obsolete."]],

      score: [["ba17", "ba18", "ba19"], ["ba17", "ba18", "ba19"]],

      rigor: [["bb17", "bb18", "bb19"], ["bb17", "bb18", "bb19"]],

      structuring: [["bc17", "bc18", "bc19"], ["bc17", "bc18", "bc19"]],

      synthesis: [["bd17", "bd18", "bd19"], ["bd17", "bd18", "bd19"]],

      business: [["be17", "be18", "be19"], ["be17", "be18", "be19"]],

    },
    {
      question: ["Why would a business choose to conduct A/B testing for a new Facebook campaign?"],

      option: [["To decrease the overall cost of the campaign", "To test the effectiveness of different ad designs and optimize the campaign’s ROI", "To increase the campaign’s reach by using varied content"]],

      feedback: [["A/B testing doesn’t directly decrease the cost; rather, it involves additional expenses upfront. However, it can lead to cost efficiency over time by identifying more effective advertising approaches that provide a higher return on investment.",
        "A/B testing allows businesses to compare different versions of ads to see which performs better. This effective method improves campaign ROI by tailoring efforts to the most responsive audience behaviors and preferences.",
        "While using varied content can potentially increase reach, A/B testing’s primary goal is not to expand reach per se, but to understand which content variation achieves better engagement and conversion among the existing audience."]],

      score: [["ba20", "ba21", "ba22"], ["ba20", "ba21", "ba22"]],

      rigor: [["bb20", "bb21", "bb22"], ["bb20", "bb21", "bb22"]],

      structuring: [["bc20", "bc21", "bc22"], ["bc20", "bc21", "bc22"]],

      synthesis: [["bd20", "bd21", "bd22"], ["bd20", "bd21", "bd22"]],

      business: [["be20", "be21", "be22"], ["be20", "be21", "be22"]],

    },
    {
      question: ["What feature of an email tool would be most beneficial for a business that frequently sends offers to its customer base?"],

      option: [["Integration with social media platforms", "Ability to schedule emails according to festivals and holidays", "Automatic translation of emails into multiple languages"]],

      feedback: [["While integration with social media can enhance promotional efforts, it’s not specifically beneficial for targeting offers to an audience, especially when the focus is on email campaigns.",
        "Scheduling tools that accommodate the timing of festivals and holidays can greatly enhance the relevance and timeliness of email campaigns, directly impacting their effectiveness and engagement.",
        "Useful for businesses with a diverse linguistic customer base, this feature is not specific to the needs of business offers unless the customer base is linguistically diverse."]],

      score: [["ba23", "ba24", "ba25"], ["ba23", "ba24", "ba25"]],

      rigor: [["bb23", "bb24", "bb25"], ["bb23", "bb24", "bb25"]],

      structuring: [["bc23", "bc24", "bc25"], ["bc23", "bc24", "bc25"]],

      synthesis: [["bd23", "bd24", "bd25"], ["bd23", "bd24", "bd25"]],

      business: [["be23", "be24", "be25"], ["be23", "be24", "be25"]],

    },
    {
      question: ["What should be the priority when sending an initial welcome email to new subscribers?"],

      option: [["Presenting a comprehensive product catalog", "Establishing brand values and building a connection", "Offering a significant discount on first purchase"]],

      feedback: [["While showcasing products is important, overwhelming new subscribers with too much information upfront might detract from a focused introduction to the brand.",
        "A welcome email is a crucial touchpoint for establishing a relationship. Focusing on brand values and a personal connection can help foster long-term engagement and loyalty, setting the stage for future communications.",
        "Although discounts can incentivize purchases, they should not overshadow the introduction of brand values and engagement in a welcome email, which is key to building a deeper brand connection."]],

      score: [["ba26", "ba27", "ba28"], ["ba26", "ba27", "ba28"]],

      rigor: [["bb26", "bb27", "bb28"], ["bb26", "bb27", "bb28"]],

      structuring: [["bc26", "bc27", "bc28"], ["bc26", "bc27", "bc28"]],

      synthesis: [["bd26", "bd27", "bd28"], ["bd26", "bd27", "bd28"]],

      business: [["be26", "be27", "be28"], ["be26", "be27", "be28"]],

    },
    {
      question: ["Which online branding campaign would likely yield the highest engagement for a new eco-friendly product launch?"],

      option: [["A campaign featuring a well-known influencer who embodies sustainability", "A generic banner ad campaign across multiple platforms", "A pay-per-click campaign targeting broad keywords"]],

      feedback: [["Leveraging an influencer who aligns with sustainability can significantly amplify a campaign’s reach and credibility, tapping into the influencer’s established audience and enhancing engagement through trusted endorsements.",
        "While banner ads can increase visibility, they typically have lower engagement rates compared to more personalized and targeted influencer campaigns.",
        "PPC campaigns are effective for reach but may not engage users as deeply without targeted, niche keywords and compelling content that resonates with the eco-friendly ethos."]],

      score: [["ba29", "ba30", "ba31"], ["ba29", "ba30", "ba31"]],

      rigor: [["bb29", "bb30", "bb31"], ["bb29", "bb30", "bb31"]],

      structuring: [["bc29", "bc30", "bc31"], ["bc29", "bc30", "bc31"]],

      synthesis: [["bd29", "bd30", "bd31"], ["bd29", "bd30", "bd31"]],

      business: [["be29", "be30", "be31"], ["be29", "be30", "be31"]],

    },
    {
      question: ["How does a minimalist website design benefit an e-commerce business primarily?"],

      option: [["By reducing the amount of textual content", "By enhancing the user experience and focusing on ease of navigation", "By incorporating multiple interactive elements"]],

      feedback: [["Reducing text can declutter the site, but the primary benefit of minimalism isn’t just about less text; it’s about more effective communication and usability.",
        "Minimalist design streamlines the navigation and improves the user experience by removing unnecessary elements that can distract or confuse users, making the site more intuitive and user-friendly.",
        "Minimalist design typically avoids excessive use of interactive elements to keep the focus on content and functionality, ensuring a clean and simple user interface."]],

      score: [["ba32", "ba33", "ba34"], ["ba32", "ba33", "ba34"]],

      rigor: [["bb32", "bb33", "bb34"], ["bb32", "bb33", "bb34"]],

      structuring: [["bc32", "bc33", "bc34"], ["bc32", "bc33", "bc34"]],

      synthesis: [["bd32", "bd33", "bd34"], ["bd32", "bd33", "bd34"]],

      business: [["be32", "be33", "be34"], ["be32", "be33", "be34"]],

    },
    {
      question: ["Which nudge would most effectively reduce the drop rate at checkout?"],

      option: [["Displaying limited-time discount offers at checkout", "Showing recently viewed products", "A pop-up survey asking about the shopping experience"]],

      feedback: [["This nudge is effective in creating a sense of urgency. A countdown timer can motivate customers to complete their purchases quickly before the items in their cart expire. This tactic leverages the psychological principle of scarcity, prompting faster decision-making.",
        "Displaying recently viewed products can be highly effective in reducing the drop rate at checkout by reminding customers of items they considered but did not add to the cart. This can encourage additional purchases or replacements, enhancing user engagement and potentially increasing overall cart value.",
        "While gathering feedback is crucial for long-term improvements, a pop-up asking for feedback during the checkout process could interrupt the shopping experience and might increase the drop rate rather than decrease it. This method could distract customers at a critical moment when the focus should be on completing the transaction."]],

      score: [["ba35", "ba36", "ba37"], ["ba35", "ba36", "ba37"]],

      rigor: [["bb35", "bb36", "bb37"], ["bb35", "bb36", "bb37"]],

      structuring: [["bc35", "bc36", "bc37"], ["bc35", "bc36", "bc37"]],

      synthesis: [["bd35", "bd36", "bd37"], ["bd35", "bd36", "bd37"]],

      business: [["be35", "be36", "be37"], ["be35", "be36", "be37"]],

    },
    {
      question: ["What is the main advantage of using a multi-step checkout process?"],

      option: [["It simplifies the user interface", "It provides detailed information at each step, reducing errors and improving customer satisfaction", "It speeds up the checkout process"]],

      feedback: [["Actually, multi-step checkouts complicate the user interface by breaking the process into several stages, which could be seen as less simple compared to a single-page checkout.",
        "By dividing the checkout process into clear, manageable parts, multi-step checkouts can reduce confusion and help customers feel more in control, potentially reducing errors and increasing satisfaction.",
        "This is incorrect as multi-step checkouts generally take longer to complete than single-step versions, potentially slowing down the overall process."]],

      score: [["ba38", "ba39", "ba40"], ["ba38", "ba39", "ba40"]],

      rigor: [["bb38", "bb39", "bb40"], ["bb38", "bb39", "bb40"]],

      structuring: [["bc38", "bc39", "bc40"], ["bc38", "bc39", "bc40"]],

      synthesis: [["bd38", "bd39", "bd40"], ["bd38", "bd39", "bd40"]],

      business: [["be38", "be39", "be40"], ["be38", "be39", "be40"]]
    },
    {
      question: ["Which feature would most likely improve customer experience in an e-commerce checkout page?"],

      option: [["Option to save cart items for later purchase", "Real-time currency conversion", "High-resolution product images in checkout"]],

      feedback: [["This feature can improve user convenience by allowing customers to return to their carts at a later time, it address immediate needs during quick transaction.",
        "This is not essential for meeting the diverse financial habits and preferences of the Indian market, especially till the products aren't sold to international markets.",
        "While high-resolution images may enhance the attractiveness of the product display, they do not directly influence the functionality of the checkout process."]],

      score: [["ba41", "ba42", "ba43"], ["ba41", "ba42", "ba43"]],

      rigor: [["bb41", "bb42", "bb43"], ["bb41", "bb42", "bb43"]],

      structuring: [["bc41", "bc42", "bc43"], ["bc41", "bc42", "bc43"]],

      synthesis: [["bd41", "bd42", "bd43"], ["bd41", "bd42", "bd43"]],

      business: [["be41", "be42", "be43"], ["be41", "be42", "be43"]],
    },
    {
      question: ["Which type of customer service system is best suited for handling complex customer issues in real-time?"],

      option: [["AI-powered chatbots", "Traditional call center", "Automated email responses"]],

      feedback: [["While AI chatbots are effective for handling basic inquiries quickly, they may not be the best choice for complex issues that require nuanced understanding and personalized assistance.",
        "Traditional call centers, staffed by human agents, are better equipped to handle complex and sensitive issues through real-time, personalized interaction, providing the nuanced support that AI systems may not be capable of delivering.",
        "Automated emails can provide immediate acknowledgments and generic solutions but lack the ability to engage deeply with complex customer problems in real-time."]],

      score: [["ba44", "ba45", "ba46"], ["ba44", "ba45", "ba46"]],

      rigor: [["bb44", "bb45", "bb46"], ["bb44", "bb45", "bb46"]],

      structuring: [["bc44", "bc45", "bc46"], ["bc44", "bc45", "bc46"]],

      synthesis: [["bd44", "bd45", "bd46"], ["bd44", "bd45", "bd46"]],

      business: [["be44", "be45", "be46"], ["be44", "be45", "be46"]],
    },
    {
      question: ["What is the most significant advantage of using biodegradable plastic packaging for an eco-friendly fashion brand?"],

      option: [["It is cheaper than traditional plastic", "It reduces environmental impact and aligns with brand sustainability goals", "It extends the shelf life of products"]],

      feedback: [["Biodegradable plastics are typically more expensive than traditional plastics due to the specialized materials and technology required to produce them.",
        "Biodegradable plastics offer a significant environmental benefit by breaking down more quickly than traditional plastics, reducing long-term pollution and supporting the brand’s commitment to sustainability.",
        "There is no evidence that biodegradable plastic packaging extends the shelf life of products more effectively than traditional packaging materials."]],

      score: [["ba47", "ba48", "ba49"], ["ba47", "ba48", "ba49"]],

      rigor: [["bb47", "bb48", "bb49"], ["bb47", "bb48", "bb49"]],

      structuring: [["bc47", "bc48", "bc49"], ["bc47", "bc48", "bc49"]],

      synthesis: [["bd47", "bd48", "bd49"], ["bd47", "bd48", "bd49"]],

      business: [["be47", "be48", "be49"], ["be47", "be48", "be49"]],
    },
    {
      question: ["Why might a business choose a logistics partner with a higher cost but better sustainability practices?"],

      option: [["To reduce delivery speeds", "To align with the brand’s environmental values and appeal to eco-conscious customers", "To utilize more extensive warehousing facilities"]],

      feedback: [["Higher costs associated with sustainable practices are generally not aimed at reducing delivery speeds but may often result in slower processes due to adherence to environmental standards.",
        "Choosing a logistics partner with strong sustainability practices, despite higher costs, demonstrates a commitment to environmental responsibility, aligning with the brand values and attracting customers who prioritize eco-friendliness.",
        "The use of more extensive warehousing facilities does not directly correlate with sustainability practices; rather, it’s more about the scale of operations."]],

      score: [["ba50", "ba51", "ba52"], ["ba50", "ba51", "ba52"]],

      rigor: [["bb50", "bb51", "bb52"], ["bb50", "bb51", "bb52"]],

      structuring: [["bc50", "bc51", "bc52"], ["bc50", "bc51", "bc52"]],

      synthesis: [["bd50", "bd51", "bd52"], ["bd50", "bd51", "bd52"]],

      business: [["be50", "be51", "be52"], ["be50", "be51", "be52"]],
    },
    {
      question: ["What is a primary benefit of implementing advanced inventory management software in streamlining operations?"],

      option: [["It eliminates the need for customer feedback", " It simplifies the website design", "It improves stock level accuracy and reduces carrying costs"]],

      feedback: [["Higher costs associated with sustainable practices are generally not aimed at reducing delivery speeds but may often result in slower processes due to adherence to environmental standards.",
        "Choosing a logistics partner with strong sustainability practices, despite higher costs, demonstrates a commitment to environmental responsibility, aligning with the brand values and attracting customers who prioritize eco-friendliness.",
        "The use of more extensive warehousing facilities does not directly correlate with sustainability practices; rather, it’s more about the scale of operations."]],

      score: [["ba53", "ba54", "ba55"], ["ba53", "ba54", "ba55"]],

      rigor: [["bb53", "bb54", "bb55"], ["bb53", "bb54", "bb55"]],

      structuring: [["bc53", "bc54", "bc55"], ["bc53", "bc54", "bc55"]],

      synthesis: [["bd53", "bd54", "bd55"], ["bd53", "bd54", "bd55"]],

      business: [["be53", "be54", "be55"], ["be53", "be54", "be55"]],
    },
  ];
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
  }
  getFetchData() {
    //***********it will be uncommitted*******************/

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/ecommercegamemaster/fetchecommercegamemaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                }
                for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                }
                for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                  this.foodforthought[i].score[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].business[0][j]];
                }
              }
            }
          }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/ecommercegamecm/fetchecommercegamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].ecommercegameperioddata[this.foodforthought[i].business[0][j]];
                  }
                }
              }
            }

          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }




  }

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/ecommercegamecm/updateecommercegamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'ecommercegamecm', body, {}, apiname, 'ecommercegamecmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }
}
