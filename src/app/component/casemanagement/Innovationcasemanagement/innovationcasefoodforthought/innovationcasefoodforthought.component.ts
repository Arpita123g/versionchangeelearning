import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-innovationcasefoodforthought',
  standalone:true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './innovationcasefoodforthought.component.html',
  styleUrls: ['./innovationcasefoodforthought.component.scss']
})
export class InnovationcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      question: ["What should be a crucial factor when deciding which product to launch?", "What should be a crucial factor when deciding which product to launch?"],

      option: [["Market size and potential revenue.", "Personal preference of the team.", "Availability of resources."],
      ["Market size and potential revenue.", "Personal preference of the team.", "Availability of resources."]],

      feedback: [["Choosing the right product involves assessing the market size and potential revenue to ensure profitability and scalability. Understanding the market dynamics and demand is crucial for long-term success.", "Personal preferences may not always align with market demand. It's essential to base decisions on objective market research and analysis rather than individual preferences to maximize success.", "While resources are important, basing product decisions solely on resource availability may limit growth opportunities. It's crucial to prioritize market potential and customer needs when selecting a product."],
      ["Choosing the right product involves assessing the market size and potential revenue to ensure profitability and scalability. Understanding the market dynamics and demand is crucial for long-term success.", "Personal preferences may not always align with market demand. It's essential to base decisions on objective market research and analysis rather than individual preferences to maximize success.", "While resources are important, basing product decisions solely on resource availability may limit growth opportunities. It's crucial to prioritize market potential and customer needs when selecting a product."]],

      score: [["af7", "af8", "af9"], ["af7", "af8", "af9"]],

      rigor: [["ag7", "ag8", "ag9"], ["ag7", "ag8", "ag9"]],

      structuring: [["ah7", "ah8", "ah9"], ["ah7", "ah8", "ah9"]],

      synthesis: [["ai7", "ai8", "ai9"], ["ai7", "ai8", "ai9"]],

      business: [["aj7", "aj8", "aj9"], ["aj7", "aj8", "aj9"]],

    },
    {
      question: [" What should a company consider while identifying its target market?"],

      option: [["Demographics, needs, and preferences of potential customers.", "Competition in the market.", "Price of the product."],
      ["Demographics, needs, and preferences of potential customers.", "Competition in the market.", "Price of the product."],
      ],

      feedback: [["Identifying the target market involves considering various factors such as demographics, needs, and preferences of potential customers. Understanding the characteristics and behaviors of the target audience helps companies tailor their products, marketing strategies, and messaging to effectively meet customer demands.", "While competition in the market is an important consideration, it is not the primary factor in identifying the target market. By focusing on meeting the needs of a specific target audience, companies can differentiate themselves from competitors and carve out a unique market position.", "While pricing strategy is an important aspect of marketing, it is not the sole consideration in identifying the target market. By focusing on meeting the needs of a specific target audience, companies can develop products and marketing strategies that resonate with their target market, regardless of pricing considerations."],
      ["Identifying the target market involves considering various factors such as demographics, needs, and preferences of potential customers. Understanding the characteristics and behaviors of the target audience helps companies tailor their products, marketing strategies, and messaging to effectively meet customer demands.", "While competition in the market is an important consideration, it is not the primary factor in identifying the target market. By focusing on meeting the needs of a specific target audience, companies can differentiate themselves from competitors and carve out a unique market position.", "While pricing strategy is an important aspect of marketing, it is not the sole consideration in identifying the target market. By focusing on meeting the needs of a specific target audience, companies can develop products and marketing strategies that resonate with their target market, regardless of pricing considerations."]],

      score: [["af10", "af11", "af12"], ["af10", "af11", "af12"]],

      rigor: [["ag10", "ag11", "ag12"], ["ag10", "ag11", "ag12"]],

      structuring: [["ah10", "ah11", "ah12"], ["ah10", "ah11", "ah12"]],

      synthesis: [["ai10", "ai11", "ai12"], ["ai10", "ai11", "ai12"]],

      business: [["aj10", "aj11", "aj12"], ["aj10", "aj11", "aj12"]],
    },
    {
      question: [" What can compliance ensure for a company in the long term?"],

      option: [["Security and trust among customers.", "Higher marketing budget.", "Faster product development."],
      ["Security and trust among customers.", "Higher marketing budget.", "Faster product development."],],

      feedback: [["Compliance ensures security and builds trust among customers by demonstrating the company's commitment to legal and ethical standards. Adhering to regulatory requirements and industry standards instills confidence in customers, enhances brand reputation, and reduces the risk of legal and financial penalties. Long-term compliance efforts contribute to sustained customer relationships and business success.", "Compliance efforts do not directly result in a higher marketing budget. While compliance enhances brand reputation and customer trust, leading to potential revenue growth, the allocation of marketing budget depends on various factors such as business objectives, market dynamics, and competitive landscape. ", "Compliance does not directly impact the speed of product development. While compliance ensures that products meet regulatory standards and legal requirements, product development timelines are influenced by factors such as project scope, resource availability, and technical complexities. "],
      ["Compliance ensures security and builds trust among customers by demonstrating the company's commitment to legal and ethical standards. Adhering to regulatory requirements and industry standards instills confidence in customers, enhances brand reputation, and reduces the risk of legal and financial penalties. Long-term compliance efforts contribute to sustained customer relationships and business success.", "Compliance efforts do not directly result in a higher marketing budget. While compliance enhances brand reputation and customer trust, leading to potential revenue growth, the allocation of marketing budget depends on various factors such as business objectives, market dynamics, and competitive landscape. ", "Compliance does not directly impact the speed of product development. While compliance ensures that products meet regulatory standards and legal requirements, product development timelines are influenced by factors such as project scope, resource availability, and technical complexities. "]],

      score: [["af13", "af14", "af15"], ["af13", "af14", "af15"]],

      rigor: [["ag13", "ag14", "ag15"], ["ag13", "ag14", "ag15"]],

      structuring: [["ah13", "ah14", "ah15"], ["ah13", "ah14", "ah15"]],

      synthesis: [["ai13", "ai14", "ai15"], ["ai13", "ai14", "ai15"]],

      business: [["aj13", "aj14", "aj15"], ["aj13", "aj14", "aj15"]],
    },
    {
      question: ["Why is it crucial to allocate resources strategically when launching a product?"],

      option: [["To maximize efficiency and effectiveness.", "To have excess resources for emergencies.", "Resources allocation is not important."],
      ["To maximize efficiency and effectiveness.", "To have excess resources for emergencies.", "Resources allocation is not important."],],

      feedback: [["Strategic allocation of resources when launching a product is crucial to maximize efficiency and effectiveness. By carefully allocating resources based on project requirements, companies can optimize utilization, minimize waste, and ensure that resources are deployed where they are most needed. ", "While having excess resources for emergencies is prudent, strategic resource allocation goes beyond this consideration. Allocating resources strategically involves assessing project needs, prioritizing resource allocation based on critical requirements, and optimizing resource utilization to achieve project objectives efficiently.", "Strategic resource allocation is essential for successful project execution and achieving desired outcomes. Allocating resources effectively ensures that project requirements are met, timelines are adhered to, and project goals are achieved within budget constraints."],
      ["Strategic allocation of resources when launching a product is crucial to maximize efficiency and effectiveness. By carefully allocating resources based on project requirements, companies can optimize utilization, minimize waste, and ensure that resources are deployed where they are most needed. ", "While having excess resources for emergencies is prudent, strategic resource allocation goes beyond this consideration. Allocating resources strategically involves assessing project needs, prioritizing resource allocation based on critical requirements, and optimizing resource utilization to achieve project objectives efficiently.", "Strategic resource allocation is essential for successful project execution and achieving desired outcomes. Allocating resources effectively ensures that project requirements are met, timelines are adhered to, and project goals are achieved within budget constraints."]],

      score: [["af16", "af17", "af18"], ["af16", "af17", "af18"]],

      rigor: [["ag16", "ag17", "ag18"], ["ag16", "ag17", "ag18"]],

      structuring: [["ah16", "ah17", "ah18"], ["ah16", "ah17", "ah18"]],

      synthesis: [["ai16", "ai17", "ai18"], ["ai16", "ai17", "ai18"]],

      business: [["aj16", "aj17", "aj18"], ["aj16", "aj17", "aj18"]],
    },
    {
      question: ["How should a company balance development time and feature attractiveness?"],

      option: [["Prioritize features that can be developed quickly.", "Invest time in developing features with higher user appeal.", "Ignore development time and focus solely on feature attractiveness."],
      ["Prioritize features that can be developed quickly.", "Invest time in developing features with higher user appeal.", "Ignore development time and focus solely on feature attractiveness."]],

      feedback: [["Prioritizing features solely based on development time may overlook their importance and user appeal. While speed is important, it's crucial to also consider feature attractiveness to ensure customer satisfaction and competitive differentiation.", "Investing time in developing features with higher user appeal can enhance customer satisfaction and competitiveness. While development time is a consideration, prioritizing feature attractiveness ensures that the product meets user expectations and stands out in the market. ", "This option is not advisable as it neglects the importance of timely product delivery and resource optimization. Ignoring development time may lead to delays, increased costs, and missed market opportunities."],
      ["Prioritizing features solely based on development time may overlook their importance and user appeal. While speed is important, it's crucial to also consider feature attractiveness to ensure customer satisfaction and competitive differentiation.", "Investing time in developing features with higher user appeal can enhance customer satisfaction and competitiveness. While development time is a consideration, prioritizing feature attractiveness ensures that the product meets user expectations and stands out in the market. ", "This option is not advisable as it neglects the importance of timely product delivery and resource optimization. Ignoring development time may lead to delays, increased costs, and missed market opportunities."]],

      score: [["af19", "af20", "af21"], ["af19", "af20", "af21"]],

      rigor: [["ag19", "ag20", "ag21"], ["ag19", "ag20", "ag21"]],

      structuring: [["ah19", "ah20", "ah21"], ["ah19", "ah20", "ah21"]],

      synthesis: [["ai19", "ai20", "ai21"], ["ai19", "ai20", "ai21"]],

      business: [["aj19", "aj20", "aj21"], ["aj19", "aj20", "aj21"]],
    },
    {
      question: ["What factors should a company consider in pricing its SAAS model?"],

      option: [["Value provided to customers and competitive pricing.", "Cost of production and profit margin.", "Pricing at a low rate to attract more customers."],
      ["Value provided to customers and competitive pricing.", "Cost of production and profit margin.", "Pricing at a low rate to attract more customers."],],

      feedback: [["Pricing should reflect the value provided to customers while remaining competitive in the market. Understanding customer perceptions of value and competitor pricing strategies is essential for setting optimal prices.", "While cost and profit margin are important considerations, pricing should primarily be based on customer value and market dynamics. Focusing solely on production costs may lead to pricing that does not reflect the product's value.", "While attracting customers is important, pricing too low may devalue the product and affect long-term profitability. Pricing should be based on the value delivered to customers and the company's strategic objectives."],
      ["Pricing should reflect the value provided to customers while remaining competitive in the market. Understanding customer perceptions of value and competitor pricing strategies is essential for setting optimal prices.", "While cost and profit margin are important considerations, pricing should primarily be based on customer value and market dynamics. Focusing solely on production costs may lead to pricing that does not reflect the product's value.", "While attracting customers is important, pricing too low may devalue the product and affect long-term profitability. Pricing should be based on the value delivered to customers and the company's strategic objectives."]],

      score: [["af22", "af23", "af24"], ["af22", "af23", "af24"]],

      rigor: [["ag22", "ag23", "ag24"], ["ag22", "ag23", "ag24"]],

      structuring: [["ah22", "ah23", "ah24"], ["ah22", "ah23", "ah24"]],

      synthesis: [["ai22", "ai23", "ai24"], ["ai22", "ai23", "ai24"]],

      business: [["aj22", "aj23", "aj24"], ["aj22", "aj23", "aj24"]],
    },
    {
      question: ["Why is it important to offer different features in each package?"],

      option: [["To cater to different customer needs and budgets.", "To increase overall revenue.", "All packages should have the same features."],
      ["To cater to different customer needs and budgets.", "To increase overall revenue.", "All packages should have the same features."]],

      feedback: [["Offering different features in each package is crucial to cater to diverse customer needs and budgets. By providing options tailored to varying preferences and financial constraints, companies can attract a wider customer base and enhance customer satisfaction.", "While offering different features in each package may contribute to revenue growth, the primary objective is to meet customer needs effectively. Ultimately, prioritizing customer satisfaction leads to sustainable revenue growth.", "This option overlooks the importance of customization and differentiation in meeting diverse customer needs. Offering identical features in all packages limits customer choice and fails to address varying preferences and budgets."],
      ["Offering different features in each package is crucial to cater to diverse customer needs and budgets. By providing options tailored to varying preferences and financial constraints, companies can attract a wider customer base and enhance customer satisfaction.", "While offering different features in each package may contribute to revenue growth, the primary objective is to meet customer needs effectively. Ultimately, prioritizing customer satisfaction leads to sustainable revenue growth.", "This option overlooks the importance of customization and differentiation in meeting diverse customer needs. Offering identical features in all packages limits customer choice and fails to address varying preferences and budgets."]],

      score: [["af25", "af26", "af27"], ["af25", "af26", "af27"]],

      rigor: [["ag25", "ag26", "ag27"], ["ag25", "ag26", "ag27"]],

      structuring: [["ah25", "ah26", "ah27"], ["ah25", "ah26", "ah27"]],

      synthesis: [["ai25", "ai26", "ai27"], ["ai25", "ai26", "ai27"]],

      business: [["aj25", "aj26", "aj27"], ["aj25", "aj26", "aj27"]],
    },
    {
      question: ["How should a company decide on its promotion budget?"],

      option: [["Balancing between creating awareness and maintaining profitability.", "Spending as much as possible to ensure success.", "Avoiding promotion altogether."],
      ["Balancing between creating awareness and maintaining profitability.", "Spending as much as possible to ensure success.", "Avoiding promotion altogether."]],

      feedback: [["Balancing promotion budget is crucial to ensure optimal awareness without overspending. It's essential to allocate resources effectively to maximize the impact of promotional activities while maintaining profitability.", "While promotion is important, overspending may not guarantee success. It's important to allocate budget wisely and focus on strategies that deliver the best return on investment.", "Promotion is essential for raising awareness and attracting customers. Avoiding promotion altogether may result in low visibility and limited market reach, hindering the success of the product."],
      ["Balancing promotion budget is crucial to ensure optimal awareness without overspending. It's essential to allocate resources effectively to maximize the impact of promotional activities while maintaining profitability.", "While promotion is important, overspending may not guarantee success. It's important to allocate budget wisely and focus on strategies that deliver the best return on investment.", "Promotion is essential for raising awareness and attracting customers. Avoiding promotion altogether may result in low visibility and limited market reach, hindering the success of the product."]],

      score: [["af28", "af29", "af30"], ["af28", "af29", "af30"]],

      rigor: [["ag28", "ag29", "ag30"], ["ag28", "ag29", "ag30"]],

      structuring: [["ah28", "ah29", "ah30"], ["ah28", "ah29", "ah30"]],

      synthesis: [["ai28", "ai29", "ai30"], ["ai28", "ai29", "ai30"]],

      business: [["aj28", "aj29", "aj30"], ["aj28", "aj29", "aj30"]],
    },
    {
      question: ["What should a company consider when deciding where to distribute its product?"],

      option: [["Balancing cost and reach to maximize market penetration.", "Choosing the distribution channel with the lowest cost.", "Distributing only to high-end retailers."],
      ["Balancing cost and reach to maximize market penetration.", "Choosing the distribution channel with the lowest cost.", "Distributing only to high-end retailers."]],

      feedback: [["When deciding where to distribute its product, a company should consider balancing cost and reach to maximize market penetration. This involves evaluating the cost-effectiveness of different distribution channels while ensuring widespread access to target customers.", "While cost is an important factor, choosing the distribution channel solely based on the lowest cost may not effectively reach the target market. Companies should consider factors such as reach, efficiency, and alignment with target customer preferences.", "Restricting distribution to high-end retailers may limit market reach and accessibility. While targeting specific market segments can be strategic, exclusive distribution may exclude potential customers and restrict market growth."],
      ["When deciding where to distribute its product, a company should consider balancing cost and reach to maximize market penetration. This involves evaluating the cost-effectiveness of different distribution channels while ensuring widespread access to target customers.", "While cost is an important factor, choosing the distribution channel solely based on the lowest cost may not effectively reach the target market. Companies should consider factors such as reach, efficiency, and alignment with target customer preferences.", "Restricting distribution to high-end retailers may limit market reach and accessibility. While targeting specific market segments can be strategic, exclusive distribution may exclude potential customers and restrict market growth."]],

      score: [["af31", "af32", "af33"], ["af31", "af32", "af33"]],

      rigor: [["ag31", "ag32", "ag33"], ["ag31", "ag32", "ag33"]],

      structuring: [["ah31", "ah32", "ah33"], ["ah31", "ah32", "ah33"]],

      synthesis: [["ai31", "ai32", "ai33"], ["ai31", "ai32", "ai33"]],

      business: [["aj31", "aj32", "aj33"], ["aj31", "aj32", "aj33"]],
    },
    {
      question: [" Why is it essential to weigh the trade-off between reach and cost in collaboration decisions?"],

      option: [["To ensure strategic partnerships that maximize benefits.", "Cost is the only factor that matters in collaborations.", "Collaboration decisions are not influenced by cost."],
      ["To ensure strategic partnerships that maximize benefits.", "Cost is the only factor that matters in collaborations.", "Collaboration decisions are not influenced by cost."]],

      feedback: [["Collaborating with partners can provide access to new markets, resources, and expertise, contributing to business growth and competitiveness. It's important to choose collaborations that align with strategic objectives and offer mutual benefits.", "While cost is a consideration, collaboration decisions should also consider factors such as reach, expertise, and mutual benefits. Prioritizing cost over other factors may result in missed opportunities for strategic partnerships and growth.", "Cost is an important factor in collaboration decisions, as it affects profitability and resource allocation. Ignoring cost considerations may lead to overspending and inefficiencies in collaboration efforts."],
      ["Collaborating with partners can provide access to new markets, resources, and expertise, contributing to business growth and competitiveness. It's important to choose collaborations that align with strategic objectives and offer mutual benefits.", "While cost is a consideration, collaboration decisions should also consider factors such as reach, expertise, and mutual benefits. Prioritizing cost over other factors may result in missed opportunities for strategic partnerships and growth.", "Cost is an important factor in collaboration decisions, as it affects profitability and resource allocation. Ignoring cost considerations may lead to overspending and inefficiencies in collaboration efforts."]],

      score: [["af34", "af35", "af36"], ["af34", "af35", "af36"]],

      rigor: [["ag34", "ag35", "ag36"], ["ag34", "ag35", "ag36"]],

      structuring: [["ah34", "ah35", "ah36"], ["ah34", "ah35", "ah36"]],

      synthesis: [["ai34", "ai35", "ai36"], ["ai34", "ai35", "ai36"]],

      business: [["aj34", "aj35", "aj36"], ["aj34", "aj35", "aj36"]],
    },
    {
      question: ["What should be considered when deciding where a company wants to be in the technology curve?"],

      option: [["Balancing relevance and cost.", "Adopting all new technologies regardless of cost.", "Ignoring technology trends."],
      ["Balancing relevance and cost.", "Adopting all new technologies regardless of cost.", "Ignoring technology trends."]],

      feedback: [["When deciding where to be in the technology curve, it's crucial to balance relevance and cost. This involves assessing the importance of adopting new technologies to meet business objectives while considering the financial implications.", "While staying abreast of new technologies is important for innovation, adopting every new technology without considering cost-effectiveness can lead to unnecessary expenses and inefficiencies.", "Ignoring technology trends can be detrimental to a company's competitiveness and growth. Disregarding advancements in technology may result in missed opportunities for innovation, efficiency improvements, and market relevance."],
      ["When deciding where to be in the technology curve, it's crucial to balance relevance and cost. This involves assessing the importance of adopting new technologies to meet business objectives while considering the financial implications.", "While staying abreast of new technologies is important for innovation, adopting every new technology without considering cost-effectiveness can lead to unnecessary expenses and inefficiencies.", "Ignoring technology trends can be detrimental to a company's competitiveness and growth. Disregarding advancements in technology may result in missed opportunities for innovation, efficiency improvements, and market relevance."]],

      score: [["af37", "af38", "af39"], ["af37", "af38", "af39"]],

      rigor: [["ag37", "ag38", "ag39"], ["ag37", "ag38", "ag39"]],

      structuring: [["ah37", "ah38", "ah39"], ["ah37", "ah38", "ah39"]],

      synthesis: [["ai37", "ai38", "ai39"], ["ai37", "ai38", "ai39"]],

      business: [["aj37", "aj38", "aj39"], ["aj37", "aj38", "aj39"]],
    },
    {
      question: [" How does being ahead in the curve of continuous improvement benefit a company?"],

      option: [["By delivering innovative solutions and maintaining a competitive edge.", "It does not provide any benefits.", "By reducing costs and maximizing profits."],
      ["By delivering innovative solutions and maintaining a competitive edge.", "It does not provide any benefits.", "By reducing costs and maximizing profits."]],

      feedback: [["Being ahead in continuous improvement enables companies to pioneer innovative solutions, staying ahead of competitors, and securing a competitive advantage in the market.", "Continuous improvement is paramount for business success, driving innovation, efficiency, and adaptability. Neglecting continuous improvement risks stagnation, hindering a company's ability to compete and thrive in dynamic markets.", "While continuous improvement can lead to cost reductions and increased profits, its primary benefit lies in driving innovation and maintaining competitiveness. "],
      ["Being ahead in continuous improvement enables companies to pioneer innovative solutions, staying ahead of competitors, and securing a competitive advantage in the market.", "Continuous improvement is paramount for business success, driving innovation, efficiency, and adaptability. Neglecting continuous improvement risks stagnation, hindering a company's ability to compete and thrive in dynamic markets.", "While continuous improvement can lead to cost reductions and increased profits, its primary benefit lies in driving innovation and maintaining competitiveness. "]],

      score: [["af40", "af41", "af42"], ["af40", "af41", "af42"]],

      rigor: [["ag40", "ag41", "ag42"], ["ag40", "ag41", "ag42"]],

      structuring: [["ah40", "ah41", "ah42"], ["ah40", "ah41", "ah42"]],

      synthesis: [["ai40", "ai41", "ai42"], ["ai40", "ai41", "ai42"]],

      business: [["aj40", "aj41", "aj42"], ["aj40", "aj41", "aj42"]],
    }

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
      let apiname = "/innovationgamemaster/fetchinnovationgamemaster"
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
                  this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
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
      let apiname = "/innovationgamecm/fetchinnovationgamecm"
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
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
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
    let apiname = '/innovationgamecm/updateinnovationgamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'innovationgamecm', body, {}, apiname, 'innovationgamecmActiveStatus').subscribe(
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
