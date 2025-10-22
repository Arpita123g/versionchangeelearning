import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-promotionsigmentnewfoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodforthoughtComponent],
  templateUrl: './promotionsigmentnewfoodforthought.component.html',
  styleUrls: ['./promotionsigmentnewfoodforthought.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class PromotionsigmentnewfoodforthoughtComponent {
  gamename = "promotions"

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["The proper approach is to identify market gaps and opportunities for differentiation. The goal is to stand out, not replicate.",
        "Analyzing competitor data helps in recognizing opportunities for your product to stand out and fill market gaps. This sets the stage for a unique and compelling brand positioning.",
        "The approach is to identify market gaps and opportunities for differentiation. The goal is not to mimic spending but to strategically position your product."],
      question: ["What is the primary objective of analyzing competitor data in Market Research?"],
      option: ["To copy their strategies and replicate success.",
        "To identify market gaps and opportunities for differentiation.",
        "To match competitor spend exactly for a level playing field."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad6', 'ad7', 'ad8']

    },

    {
      feedbackvalue: '',
      feedback: ["The right approach is to prioritize platforms with the highest user base and engagement. This maximizes impact.",
        "Prioritizing platforms based on user base and engagement maximizes the impact of your promotional efforts, ensuring a more significant reach and effectiveness.",
        "The approach is to prioritize platforms with the highest user base and engagement. Random allocation might not maximize impact."],
      question: ["Why is it crucial for participants to carefully allocate budgets among different platforms?"],
      option: [" Equal distribution ensures fairness and unbiased promotion.",
        "To prioritize platforms with the highest user base and engagement.",
        "Random allocation allows for flexibility and adaptability."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad9', 'ad10', 'ad11']

    },

    {
      feedbackvalue: '',
      feedback: ["It might lead to suboptimal results. The correct choice is to allocate based on the target audience's preferences and behavior.",
        "Allocating based on audience behavior ensures your promotional efforts are optimized for where the target audience is most active, enhancing overall campaign performance.",
        "The optimal choice is to allocate based on the target audience's preferences and behavior. Uniform distribution might not align with audience engagement."],
      question: ["When dividing the budget within different social media channels, what should participants consider?"],
      option: ["Allocating the highest budget to the newest social media platform.",
        " Allocating based on the target audience's preferences and behavior.",
        " Keeping the budget distribution uniform across all channels."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad12', 'ad13', 'ad14']

    },

    {
      feedbackvalue: '',
      feedback: ["This indicates a partial understanding. The correct decision is to choose campaigns aligned with the overall brand message and audience.",
        "Excellent choice! Campaigns should resonate with the brand message and target audience for consistency and effectiveness. Keep aligning your campaigns with your brand identity and audience preferences.",
        "The correct decision is to choose campaigns aligned with the overall brand message and audience. Cost-effectiveness alone might compromise effectiveness."],
      question: ["How should participants choose website campaigns for promotion?"],
      option: ["Opt for campaigns with the most visually appealing graphics.",
        "Select campaigns aligned with the overall message and audience.",
        "Choose campaigns solely based on cost-effectiveness."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad15', 'ad16', 'ad17']

    },

    {
      feedbackvalue: '',
      feedback: ["It's a common misconception. The correct choice is to align campaigns with the unique features of each social media platform",
        "Aligning campaigns with the unique features of each social media platform ensures that your promotional efforts leverage the strengths of each channel.",
        "The optimal choice is to align campaigns with the unique features of each social media platform. Random selection may not resonate with the audience."],
      question: ["What's a key consideration when selecting social commerce campaigns?"],
      option: ["Choosing campaigns solely based on industry trends.",
        "Aligning campaigns with the unique features of each social media platform.",
        "Selecting campaigns randomly to keep the audience surprised."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad18', 'ad19', 'ad20']

    },

    {
      feedbackvalue: '',
      feedback: ["This may not optimize campaigns. The correct decision is to acknowledge that different settings may have unique customer demographics and preferences. ",
        "Great choice! Recognizing that different settings may have unique customer demographics and preferences is essential for tailoring effective campaigns.",
        "The right decision is to acknowledge that different settings may have unique customer demographics and preferences. Tailoring is crucial for effectiveness."],
      question: [" Why is it important to tailor campaigns for Modern Trade settings?"],
      option: [" All modern trade settings have similar customer preferences.",
        "Different settings may have unique customer demographics and preferences.",
        " Modern Trade settings do not impact campaign effectiveness."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad21', 'ad22', 'ad23']

    },

    {
      feedbackvalue: '',
      feedback: ["Cost is important but we can't overlook another important considerations. The correct choice is to consider the retailer's target audience and the local market. ",
        "Considering the retailer's target audience and the local market is crucial for effective campaigns and resonating with the audience.",
        "The right choice is to consider the retailer's target audience and the local market. Ignoring preferences might not align with local strategies."],
      question: ["What's a critical factor when deciding campaigns for retailers?"],
      option: [" Focusing solely on campaigns with the lowest cost.",
        "Considering the retailer's target audience and the local market.",
        "Ignoring the retailer's preferences for a consistent brand message."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad24', 'ad25', 'ad26']

    },

    {
      feedbackvalue: '',
      feedback: ["if reflects a misunderstanding. The propoer approach is to use A/B Testing to optimize campaigns based on real-time performance data",
        "Excellent decision! A/B Testing is valuable for optimizing campaigns based on real-time performance data, ensuring continuous improvement.",
        "The proper approach is to use A/B Testing to optimize campaigns based on real-time performance data. A/B Testing is crucial for refining strategies."],
      question: ["Why is A/B Testing valuable in promotion strategies?"],
      option: [" To randomly experiment without any specific goals.",
        "To optimize campaigns based on real-time performance data.",
        " A/B Testing is unnecessary and doesn't impact results."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad27', 'ad28', 'ad29']

    },

    {
      feedbackvalue: '',
      feedback: ["Not optimal. The right decision is to consider the relationship factor and avoid making channel partners unhappy",
        "Well done! Considering the relationship factor and avoiding making channel partners unhappy is essential for maintaining positive partnerships",
        "The right decision is to consider the relationship factor and avoid making channel partners unhappy. Ignoring concerns could strain relationships."],
      question: [" What should be the primary consideration when deciding margins for channels?"],
      option: ["Setting the highest possible margins to maximize profits.",
        " Considering the relationship factor and avoiding making channel partners unhappy.",
        " Ignoring channel partner concerns for a stronger bottom line."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad30', 'ad31', 'ad32']

    },

    {
      feedbackvalue: '',
      feedback: ["It might lead to less effective strategies. The proper choice is to align promotion efforts with the most profitable and popular products",
        "Perfect choice! Aligning promotion efforts with the most profitable and popular products ensures a strategic focus that maximizes returns.",
        "The proper choice is to align promotion efforts with the most profitable and popular products (Option B). Focusing on high manufacturing cost alone may not maximize returns."],
      question: ["Why is it essential for participants to decide on product focus based on margin and volumes?"],
      option: [" Randomly choosing products ensures diversity in promotion.",
        "To align promotion efforts with the most profitable and popular products.",
        " Focusing on products with the highest manufacturing cost."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad33', 'ad34', 'ad35']

    },
    {
      feedbackvalue: '',
      feedback: ["It might lead to less effective strategies. The proper choice is to align promotion efforts with the most profitable and popular products",
        "Perfect choice! Aligning promotion efforts with the most profitable and popular products ensures a strategic focus that maximizes returns.",
        "The proper choice is to align promotion efforts with the most profitable and popular products (Option B). Focusing on high manufacturing cost alone may not maximize returns."],
      question: ["Why is it essential for participants to decide on product focus based on margin and volumes?"],
      option: [" Randomly choosing products ensures diversity in promotion.",
        "To align promotion efforts with the most profitable and popular products.",
        " Focusing on products with the highest manufacturing cost."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ad33', 'ad34', 'ad35']

    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
