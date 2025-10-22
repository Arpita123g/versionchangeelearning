import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-salestargetfoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,FoodforthoughtComponent,MatIconModule,NgApexchartsModule],
  templateUrl: './salestargetfoodforthought.component.html',
  styleUrls: ['./salestargetfoodforthought.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SalestargetfoodforthoughtComponent  {
  gamename = "salestarget"

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ["Excellent choice! Considering past sales performance provides valuable insights into what has worked and areas for improvement.",
      "Market trends are important, but past sales performance offers concrete data for setting realistic and achievable targets.",
      "While employee preferences matter, setting sales targets is primarily data-driven and should focus on historical performance."
      ],
      question: ["What primary factor should be considered when setting sales targets for each channel?"],
      option: [" Historical data indicating previous market size, achievements and current period estimates.",
        "Present-day insights into consumer behaviors, preferences, and market dynamics.",
        "Individual inclinations and desires of the sales team members."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al5', 'al6', 'al7']

    },

    {
      feedbackvalue: '',
      feedback: ["While employee preferences matter, determining the optimal number is more about workload and historical data.",
        "Great choice! Historical sales data helps estimate workload and effectiveness.",
        "Market competition is a factor, but historical sales data provides a more concrete basis for determining team size."],
      question: ["How can you determine the optimal number of employees needed in each channel?"],
      option: [" Individual choices and inclinations of the channel heads.",
        "Previous data indicating the workload and effectiveness of the team.",
        "Analysis of the competitive landscape and the number of employees in rival firms."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al8', 'al9', 'al10']

    },

    {
      feedbackvalue: '',
      feedback: ["While location diversity is beneficial, the primary advantage is in addressing diverse consumer needs.",
        "Great choice! Diverse backgrounds help understand and cater to the unique needs of different consumer segments.",
        ],
      question: ["How can diversity in workforce backgrounds contribute to a successful sales team?"],
      option: ["Increases variety in the geographical locations of the sales team.",
        " Allows for a better understanding and catering to diverse consumer preferences.",
        ],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['al11', 'al12']

    },

    {
      feedbackvalue: '',
      feedback: ["While product preferences matter, the primary consideration is the workforce backgrounds of the team.",
        "Employee location may have an impact, but backgrounds play a more significant role in compensation decisions.",
        "Great choice! workforce backgrounds with hike on previous salary influence fair and motivating compensation structures."],
      question: ["What is a key consideration when deciding compensation structures for the sales team?"],
      option: ["Individual choices of the sales team related to the products they sell.",
        "The channel and manager reputation where the sales team operates.",
        "The educational and professional backgrounds of the sales team with previous salary database."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al13', 'al14', 'al15']

    },

    {
      feedbackvalue: '',
      feedback: ["While competition is healthy, the bonus system should primarily align with targets and motivation.",
        "Great choice! A well-structured bonus system should indeed align with targets and motivate the team.",
        "While simplification is good, the primary purpose is to align with targets and motivate employees."],
      question: ["What role does a well-structured bonus system play in sales effectiveness?"],
      option: [" Fosters rivalry among team members beyond healthy competition.",
        " Rewards achievement of set targets and boosts motivation.",
        " Streamlines the overall process of rewarding and incentivizing."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al16', 'al17', 'al18']

    },

    {
      feedbackvalue: '',
      feedback: ["Great choice! Distributing roles based on channel needs ensures strategic effectiveness.",
        "Individual preferences matter, but strategic alignment with channel needs is more crucial.",
       ],
      question: ["How should the sales force be distributed among sales representatives, key account managers, and territory managers?"],
      option: [" Distributes roles based on the specific requirements and characteristics of each channel.",
        "Considers individual choices and inclinations of the sales team.",
       ],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['al19', 'al20']

    },

    {
      feedbackvalue: '',
      feedback: ["While channel head personality matters, the crucial consideration is aligning sales styles with consumer segment preferences as well.",
        "Great choice! Distributing sales styles should indeed align with the preferences of target consumer segments.",
        "Historical performance is a factor, but the primary consideration is aligning with current consumer segment preferences and channel heads style."],
      question: ["What consideration is crucial when distributing sales styles across channels?"],
      option: [" Distributes sales styles based on the personality of channel heads.",
        " Considers the preferences of channel heads and behaviors of the target consumer segments.",
        "Takes into account the past performance of sales styles in each channel."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al21', 'al22', 'al23']

    },

    {
      feedbackvalue: '',
      feedback: ["Great choice! Leadership involvement is indeed crucial across areas of the sales process where strategic guidance and support is required.",
        "While training is important, leadership involvement should extend to various areas beyond training.",
        "While team members satisfaction is relevant, leadership involvement should cover a broader spectrum of the sales process."],
      question: ["In which areas of the sales process is leadership involvement crucial?"],
      option: ["Involves leadership in strategic aspect of the sales process.",
        " Limits leadership involvement to the training aspect of the sales process.",
        " Focuses leadership involvement on managing the preferences of team members."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al24', 'al25', 'al26']

    },

    {
      feedbackvalue: '',
      feedback: ["Great choice! Choosing recognition based on individual preferences ensures personalized acknowledgment.",
        "While standardization may simplify processes, recognition should be tailored to individual achievements and preferences.",
       ],
      question: ["What is an effective way to choose recognition strategies for sales achievements?"],
      option: [" Tailors recognition strategies to acknowledge individual choices and achievements.",
        "Applies a uniform recognition approach across all team members."],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['al27', 'al28']

    },

    {
      feedbackvalue: '',
      feedback: ["While short-term gains are important, sustained success requires a balance with long-term investments.",
        "Prioritizing long-term investments is valuable, but a balanced approach considering market targets and segments is optimal.",
        "Great choice! Striking a balance between short-term gains and long-term investments is key for sustained success."],
      question: [" How should long-term investments be balanced with short-term gains for sustained success?"],
      option: ["Emphasizes immediate gains without considering long-term sustainability.",
        "Gives precedence to sustained growth through strategic, long-term investments.",
        " Balances short-term gains with long-term investments, considering market targets and segments."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al29', 'al30', 'al31']

    },
    {
      feedbackvalue: '',
      feedback: ["While standardization may simplify processes, training should consider diverse needs and preferences.",
        "Great choice! Considering both employee preferences and market demands ensures a comprehensive and effective training program.",
        "While product knowledge is crucial, a well-rounded training program should address various aspects of sales."],
      question: ["How can sales training programs be selected to cater to the specific needs of the sales team?"],
      option: [" Applies a uniform training program across all team members.",
        "Tailors training programs to align with the diverse preferences and demands of the team and market.",
        "Concentrates training efforts solely on enhancing product knowledge."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['al32', 'al33', 'al34']

    },
    {
      feedbackvalue: '',
      feedback: [" Historical processes provide insight, but considering the unique characteristics of each segment is crucial for adapting to evolving preferences.",
        "Great choice! Considering the unique characteristics of each segment ensures the sales process is tailored to meet specific consumer preferences.",
      ],
      question: ["How should the sales process be tailored to accommodate the preferences of different consumer segments?"],
      option: [" Adheres to the sales process based on past performance.",
        "Tailors the sales process to address the specific needs and preferences of each consumer segment.",
       ],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['al35', 'al36']

    },
    {
      feedbackvalue: '',
      feedback: [" Historical processes provide insight, but considering the unique characteristics of each segment is crucial for adapting to evolving preferences.",
        "Great choice! Considering the unique characteristics of each segment ensures the sales process is tailored to meet specific consumer preferences.",
      ],
      question: ["How should the sales process be tailored to accommodate the preferences of different consumer segments?"],
      option: [" Adheres to the sales process based on past performance.",
        "Tailors the sales process to address the specific needs and preferences of each consumer segment.",
        ],
      disabled: false,
      questionchecked: [false, false],
      cellvalue: ['al35', 'al36']

    },
   

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
