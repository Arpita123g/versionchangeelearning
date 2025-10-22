import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-foodforthoughtportfoliomanagement',
  standalone: true,
  imports: [CommonModule, FormsModule,FoodforthoughtComponent],
  templateUrl: './foodforthoughtportfoliomanagement.component.html',
  styleUrls: ['./foodforthoughtportfoliomanagement.component.scss']
})
export class FoodforthoughtportfoliomanagementComponent implements OnInit {

  gamename = 'portfoliomanagement';

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['While increasing allocation to high-risk securities might offer potential for higher returns, it could also amplify losses during market downturns. Consider diversifying to mitigate risks.',
      'Diversifying investments across various securities is a prudent strategy to spread risk and reduce vulnerability to market fluctuations. Well done!',
        'Decreasing allocation to low-risk securities might limit potential losses but could also sacrifice opportunities for stable returns. Consider diversifying to balance risk and return.'],
      question: ["Considering a higher risk-free rate and a lower market return, how might this economic scenario impact your portfolio allocation?",],
      option: ["Increase allocation to high-risk, high-return securities to offset lower market returns.",
       " Diversify investments across various securities to mitigate risks associated with the economic scenario.", 
       "Decrease allocation to low-risk securities to capitalize on the higher risk-free rate."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab7', 'ab8', 'ab9']
    },
    {
      feedbackvalue: '',
      feedback: ["While increasing allocation to sectors with strong growth prospects may seem tempting, it's essential to assess potential risks and diversify across sectors to mitigate concentration risk.",
      'Diversifying across sectors is a prudent strategy to mitigate risks associated with sector-specific fluctuations and enhance portfolio stability. Well done!',
        'Reducing exposure to uncertain sectors might limit potential opportunities for growth. Consider diversifying to spread risk effectively.'],
      question: ["With an optimistic economic outlook projecting strong growth in specific sectors, how might you adjust your portfolio allocation?",],
      option: ["Increase allocation to sectors expected to experience robust growth.",
       " Diversify across sectors to mitigate risks associated with sector-specific fluctuations.", 
       "Reduce exposure to sectors with uncertain growth prospects to minimize potential losses."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab10', 'ab11', 'ab12']
    },
    {
      feedbackvalue: '',
      feedback: ["While allocating more capital to an outperforming security may seem logical, it's essential to assess the underlying factors driving performance differences and consider potential risks.",
      'Conducting further analysis to understand the reasons behind performance differences is crucial before making allocation decisions. Well done!',
        'Maintaining equal allocation without analyzing underlying factors might overlook opportunities for maximizing returns or mitigating risks.'],
      question: ["Analyzing historical return trends, if Security A consistently outperforms Security B over the years, what strategy might you adopt?",],
      option: [" Allocate more capital to Security A to maximize returns.",
       " Conduct further analysis to understand the underlying factors driving the performance difference.", 
       "Maintain equal allocation to both securities to balance risk exposure."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab13', 'ab14', 'ab15']
    },
    {
      feedbackvalue: '',
      feedback: ["Allocating more capital to a security with higher returns but higher volatility could increase portfolio volatility and susceptibility to losses. Consider balancing risk and return.",
      'Allocating more capital to a security with lower volatility can help minimize portfolio volatility and preserve capital during market downturns. Well done!',
      'Conducting further analysis to understand the factors contributing to differences in returns and volatility is crucial before making allocation decisions.'],
      question: ["Analyzing average annualized returns, if Security A has higher returns but higher volatility compared to Security B, what strategy might you adopt?",],
      option: [" Allocate more capital to Security A to maximize returns.",
       "Allocate more capital to Security B to minimize portfolio volatility.", 
       " Conduct further analysis to identify factors contributing to the difference in returns and volatility."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab16', 'ab17', 'ab18']
    },
    {
      feedbackvalue: '',
      feedback: ["While allocating more capital to positively correlated securities might seem beneficial during upward market movements, it could increase vulnerability to market downturns. Consider diversifying to hedge against potential losses.",
      'Diversifying across negatively correlated securities is an effective strategy to mitigate risks associated with market fluctuations. Well done!',
      'Avoiding both securities solely based on correlation might overlook potential opportunities for returns. Consider diversifying to spread risk effectively.'],
      question: ["Given a high positive correlation between Securities X and Y, how might this influence your portfolio allocation strategy?",],
      option: ["Allocate more capital to both securities to amplify returns during upward market movements.",
       " Diversify by investing in negatively correlated securities to hedge against potential losses.", 
       "Avoid investing in both securities to minimize concentration risk."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab19', 'ab20', 'ab21']
    },
    {
      feedbackvalue: '',
      feedback: ["While allocating more capital to negatively correlated securities might seem logical for hedging, it's essential to assess potential risks and ensure alignment with investment objectives.",
      'Diversifying across positively correlated securities can help capitalize on potential market gains and enhance portfolio stability. Well done!',
      'Adjusting exposure to balance risk and return is essential when considering correlation between securities.'],
      question: ["Given a negative correlation between Securities P and Q, how might you utilize this information in portfolio construction?",],
      option: ["Allocate more capital to both securities to hedge against market volatility.",
       " Diversify by investing in positively correlated securities to capitalize on potential market gains.", 
       "Increase exposure to one security while decreasing exposure to the other to balance risk and return."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab22', 'ab23', 'ab24']
    },
    {
      feedbackvalue: '',
      feedback: ["Increasing allocation to high-risk securities might exceed the client's risk tolerance and increase vulnerability to market volatility. Consider aligning the portfolio with the client's risk profile.",
      'Maintaining a balanced allocation across different risk profiles is a prudent approach to ensure diversification and manage overall portfolio risk. Well done!',
      "Decreasing exposure to high-risk securities might limit potential returns and overlook opportunities for growth. Consider balancing risk and return according to the client's risk tolerance."],
      question: ["When determining portfolio allocation, how might you adjust your strategy based on a client's high-risk tolerance?",],
      option: ["Increase allocation to high-risk securities to pursue higher returns.",
       "Maintain a balanced allocation across different risk profiles to ensure diversification.", 
       "Decrease exposure to high-risk securities to align with the client's risk tolerance."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab25', 'ab26', 'ab27']
    },
    {
      feedbackvalue: '',
      feedback: ["Increasing allocation to low-risk securities can help reduce portfolio volatility and preserve capital during market downturns. Well done!",
      'Maintaining a concentrated portfolio might expose the portfolio to higher levels of risk. Consider diversifying across asset classes and securities to spread risk effectively.',
      "Diversifying across various asset classes and securities is essential to spread risk and enhance long-term returns. Well done!"],
      question: [" When considering portfolio diversification, how might you adjust your allocation strategy to minimize overall portfolio risk?"],
      option: ["Increase allocation to low-risk securities to reduce overall portfolio volatility.",
       "Maintain a concentrated portfolio to capitalize on high-return opportunities.", 
       "Diversify across various asset classes and securities to spread risk and enhance long-term returns."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab28', 'ab29', 'ab30']
    },
    {
      feedbackvalue: '',
      feedback: ["Increasing allocation to low-risk securities can help reduce portfolio volatility and preserve capital during market downturns. Well done!",
      'Maintaining a concentrated portfolio might expose the portfolio to higher levels of risk. Consider diversifying across asset classes and securities to spread risk effectively.',
      "Diversifying across various asset classes and securities is essential to spread risk and enhance long-term returns. Well done!"],
      question: [" When considering portfolio diversification, how might you adjust your allocation strategy to minimize overall portfolio risk?",],
      option: ["Increase allocation to low-risk securities to reduce overall portfolio volatility.",
       "Maintain a concentrated portfolio to capitalize on high-return opportunities.", 
       "Diversify across various asset classes and securities to spread risk and enhance long-term returns."],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['ab28', 'ab29', 'ab30']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
}
