import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-pricingfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './pricingfoodforthought.component.html',
  styleUrls: ['./pricingfoodforthought.component.scss']
})
export class PricingfoodforthoughtComponent {
  gamename = 'pricinggame';

  constructor() { }

  ngOnInit(): void {
  }

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["It's important to consider competitor rates, but relying solely on them might lead to missing other crucial factors affecting pricing. Think about a comprehensive strategy that includes demand and external factors.",
        'While demand is crucial, ignoring external factors might result in an incomplete strategy. Consider incorporating a broader perspective that includes both internal and external factors.',
        'Excellent choice! A comprehensive strategy involves analyzing both internal and external factors, ensuring a well-informed pricing approach.'],
      question: ['What is a crucial consideration when determining your initial pricing strategy in 1st phase?',],
      option: [' Pricing solely based on competitor rates.',
        "Ignoring external factors and focusing only on demand.",
        "Considering demand, competition, and external factors for a comprehensive strategy."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n6', 'n7', 'n8']
    },
    {
      feedbackvalue: '',
      feedback: ["It's essential to adapt to competitive dynamics. Consider the concept of price elasticity and how adjusting prices strategically can impact market share.",
        'Good attempt! Think about how strategic adjustments, not just slight lowering, can impact your competitive positioning.',
        'Well done! Adjusting prices strategically based on competitor rates is a key consideration to aim for market share.'],
      question: ["Your competitor's pricing is known from previous phase. How should you adjust your pricing strategy?",],
      option: [" Maintain prices to avoid risk.",
        "Slightly lower prices to attract more customers.",
        " Adjust prices strategically based on competitor rates and aim for market share."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n9', 'n10', 'n11']
    },
    {
      feedbackvalue: '',
      feedback: ['Good attempt! However, enhancing the overall customer experience can differentiate your offering. Consider what services might complement your pricing strategy.',
        'Interesting choice! Loyalty programs can be effective, but think about other services directly related to the travel experience.',
        'Excellent choice! Introducing services that enhance the travel experience, like in-flight entertainment, can attract more customers.'],
      question: ["What could be an effective additional service to introduce in middle phase to attract more customers?",],
      option: ["No need for additional services, focus on price.",
        " Introduce a loyalty program.",
        "Provide an exclusive in-flight entertainment package."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n12', 'n13', 'n14']
    },
    {
      feedbackvalue: '',
      feedback: ['Good attempt! However, think about the psychology of urgency. Offering discounts with a short redemption period might create more urgency.',
        'Well done! A one-time flash sale can create a sense of urgency for last-minute bookings.',
        "It's essential to create a sense of urgency in Phase 3. Maintaining regular prices might not encourage last-minute bookings."],
      question: [" In final phase, what promotional activity creates urgency for last-minute bookings?",],
      option: ["Offering discounts with a long redemption period.",
        "Promoting a one-time flash sale.",
        " Maintaining regular prices until departure."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n15', 'n16', 'n17']
    },
    {
      feedbackvalue: '',
      feedback: ['Consider the additional value that services or perks can bring to your offer. Enhancing the travel experience can make your offer more attractive.',
        'Good attempt! However, introducing services related to travel might have a more direct impact on attractiveness.',
        'Excellent choice! Introducing perks or services that enhance the travel experience can indeed make your offer more attractive.'],
      question: [" How can you leverage additional services or perks in final phase  to make your offer more attractive?",],
      option: ["Stick to the initial pricing strategy without extras.",
        "Introduce a new service, but it's not related to travel.",
        "Introduce perks or services that enhance the travel experience."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n18', 'n19', 'n20']
    },
    {
      feedbackvalue: '',
      feedback: ['Consider the additional value that services or perks can bring to your offer. Enhancing the travel experience can make your offer more attractive.',
        'Good attempt! However, introducing services related to travel might have a more direct impact on attractiveness.',
        'Excellent choice! Introducing perks or services that enhance the travel experience can indeed make your offer more attractive.'],
      question: [" How can you leverage additional services or perks in final phase  to make your offer more attractive?",],
      option: ["Stick to the initial pricing strategy without extras.",
        "Introduce a new service, but it's not related to travel.",
        "Introduce perks or services that enhance the travel experience."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['n18', 'n19', 'n20']
    },

  ];

}
