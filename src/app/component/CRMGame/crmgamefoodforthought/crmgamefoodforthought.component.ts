import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

@Component({
  selector: 'app-crmgamefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, FoodforthoughtComponent],
  templateUrl: './crmgamefoodforthought.component.html',
  styleUrls: ['./crmgamefoodforthought.component.scss']
})
export class CrmgamefoodforthoughtComponent implements OnInit {
  gamename = 'crmgame';

 

  questionanswerpaper: any = [
    {
      feedbackvalue: '',
      feedback: ['b316',
        "b317",
        'b318'],
      question: ['b280',],
      option: ['b289',
        "b290",
        "b291"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z7', 'z8', 'z9']
    },
    {
      feedbackvalue: '',
      feedback: ["b319",
        'b320',
        "b321"],
      question: ['b281',],
      option: ['b292',
        "b293",
        "b294"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z10', 'z11', 'z12']
    },
    {
      feedbackvalue: '',
      feedback: ['b322',
        "b323",
        "b324"],
         question: ['b282',],
      option: ['b295',
        "b296",
        "b297"],
    
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z13', 'z14', 'z15']
    },
    {
      feedbackvalue: '',
      feedback: ["b325",
        "b326",
        "b327"],
   question: ['b283',],
      option: ["b298",
        "b299",
        "b300"],     
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z16', 'z17', 'z18']
    },
    {
      feedbackvalue: '',
      feedback: ["b328",
        "b329",
        "b330"],
      question: ['b284',],
      option: ['b301',
        "b302",
        "b303"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z19', 'z20', 'z21']
    },
    {
      feedbackvalue: '',
      feedback: ['b331',
        "b332",
        "b333"],
      question: ['b285',],
      option: ["b304",
        "b305",
        "b306"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z22', 'z23', 'z24']
    },
    {
      feedbackvalue: '',
      feedback: ['b334',
        "b335",
        "b336"],
      question: ['b286',],
      option: ['b307',
        "b308",
       "b309"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z25', 'z26', 'z27']
    },
    {
      feedbackvalue: '',
      feedback: [
        'b337',
        "b338",
        "b339"],
      question: ['b287',],
      option: ['b310',
        "b311",
       "b312"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z28', 'z29', 'z30']
    },
    {
      feedbackvalue: '',
      feedback: [
        'b340',
        "b341",
        "b342"],
      question: ['b288',],
      option: ['b313',
        "b314",
        "b315"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z31', 'z32', 'z33']
    },
    {
      feedbackvalue: '',
      feedback: [
        'b340',
        "b341",
        "b342"],
      question: ['b288',],
      option: ['b313',
        "b314",
       "b315"],
      disabled: false,
      questionchecked: [false, false, false],
      cellvalue: ['z31', 'z32', 'z33']
    },
   
  ];


  // questionanswerpaper: any = [
  //   {
  //     feedbackvalue: '',
  //     feedback: ['b316',
  //       "b317",
  //       'b318'],
  //     question: ['b280',],
  //     option: [' b289',
  //       "b290",
  //       "b291"],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z7', 'z8', 'z9']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ["b319",
  //       'b320',
  //       "b321"],
  //     question: ['b281',],
  //     option: ['b292',
  //       "b293",
  //       "b294"],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z10', 'z11', 'z12']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['Communicating with leads at same pace may result in missed opportunities and decreased engagement. Tailoring communication frequency based on lead behavior and priority ensures timely engagement and increases the likelihood of conversion.',
  //       "Correct! Tailoring communication frequency based on lead priority and behavior ensures timely engagement and increases the effectiveness of communication efforts. This personalized approach fosters stronger relationships with leads and improves overall conversion rates.",
  //       "Sending mass emails daily may lead to email fatigue and decreased engagement among leads. It's important to tailor communication frequency based on individual lead preferences and behaviors to maximize engagement and effectiveness."],
  //     question: ['How can communication frequency be optimized for timely engagement?',],
  //     option: ['Communicate with every lead at same pace.',
  //       "Tailor communication based on lead priority and behavior.",
  //       "Send mass emails daily."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z13', 'z14', 'z15']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ["Introducing cross-selling and upselling opportunities after the sale may miss the chance to capitalize on additional revenue opportunities during the customer journey.",
  //       "Correct! Introducing cross-selling and upselling opportunities throughout the customer journey maximizes exposure to relevant offers and increases the likelihood of additional sales.",
  //       "Limiting cross-selling and upselling opportunities to the initial contact overlooks potential revenue opportunities later in the customer journey. Integrating cross-selling and upselling throughout the customer lifecycle ensures consistent engagement and maximizes revenue potential."],
  //     question: ["When is the best time to introduce cross-selling and upselling opportunities?",],
  //     option: ["After the sale.",
  //       " Throughout the customer journey.",
  //       "During the initial contact."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z16', 'z17', 'z18']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ["Generic campaigns may fail to resonate with leads as they lack personalization and relevance. Targeted campaigns aligned with lead preferences are more likely to capture attention and drive engagement.",
  //       "Correct! Targeted campaigns aligned with lead preferences resonate best as they cater to individual needs and interests. By delivering relevant content, these campaigns increase engagement and foster stronger relationships with leads.",
  //       "Campaigns with attractive content are likely to capture the interest of leads but may not be enough to increase engagement. It's important to deliver campaigns with tailored messaging that aligns with lead preferences to maximize effectiveness."],
  //     question: [' Which type of campaigns resonate best with leads in communication strategies?',],
  //     option: ['Mass campaigns talking about general problems and solution.',
  //       "Targeted campaigns aligned with lead preferences.",
  //       " Campaigns with attractive content."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z19', 'z20', 'z21']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['It will overlook valuable insights for enhancing the customer experience. Continuously improving service based on customer feedback is essential for meeting customer expectations and fostering loyalty.',
  //       "Correct! Continuously improving service based on customer feedback demonstrates a commitment to meeting customer needs and enhancing satisfaction. By actively listening to and addressing customer feedback, businesses can build stronger relationships and improve retention.",
  //       "Providing consistent service can lead to satisfaction but not improving it timely may negatively impact the customer experience. Consistency and enhancement in service delivery is key to building trust and loyalty with customers."],
  //     question: ['How can customer experience be enhanced?',],
  //     option: ["Customer service has to be only improved till certain point.",
  //       "Continuously improve service based on tracking data.",
  //       "Provide consistent service."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z22', 'z23', 'z24']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['Failing to allocate surplus hours may result in insufficient resources to effectively manage the customer experience. Allocating surplus hours ensures adequate support and responsiveness to customer needs.',
  //       "Limiting surplus hours may restrict resources and hinder efforts to deliver exceptional customer service. Allocating surplus hours allows for flexibility in managing customer inquiries and addressing issues promptly.",
  //       "Correct! Allocating surplus hours ensures adequate resources for optimal service delivery and responsiveness to customer needs. This proactive approach enhances the customer experience and fosters loyalty."],
  //     question: ['How can surplus hours be allocated to manage customer experience?',],
  //     option: ['None.',
  //       "Limited hours.",
  //       "Adequate hours for optimal service delivery."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z25', 'z26', 'z27']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['Increasing resource spending may lead to unnecessary expenses and hinder cost optimization efforts. Optimizing resource allocation for cost efficiency ensures effective use of resources and maximizes return on investment.',
  //       "Correct! Optimizing resource allocation for cost efficiency involves identifying areas for improvement and streamlining processes to reduce expenses. This strategic approach maximizes the value of resources and improves overall cost-effectiveness.",
  //       "Decreasing resource spending without considering the impact on service quality may compromise customer satisfaction and retention. It's important to optimize resource allocation while maintaining service standards to achieve cost efficiency."],
  //     question: ['What measures optimize the cost of resources in sales and service?',],
  //     option: ['Increase resource spending.',
  //       "Optimize resource allocation for cost efficiency.",
  //       "Decrease resource spending."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z28', 'z29', 'z30']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['Maintaining the status quo may lead to stagnation and missed opportunities for improvement. Identifying and addressing inefficiencies is essential for driving operational excellence and achieving long-term success.',
  //       "Implementing processes only reducing pipeline velocity can lead to duplication of effort and unnecessary complexity. It's important to streamline processes by removing all unnecessary steps and consolidating workflows to improve overall effectiveness.",
  //       "Correct! Identifying and eliminating inefficiencies is key to streamlining processes and improving operational efficiency for long-term cost reduction. By analyzing workflows and identifying areas for improvement, organizations can optimize resource allocation and enhance productivity."],
  //     question: ['How can processes be streamlined to improve operational efficiency?',],
  //     option: ['Maintain the status quo.',
  //       "Identify the process which increases pipeline velocity.",
  //       " Implement the process which makes process cost effective in long-term."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z31', 'z32', 'z33']
  //   },
  //   {
  //     feedbackvalue: '',
  //     feedback: ['Maintaining the status quo may lead to stagnation and missed opportunities for improvement. Identifying and addressing inefficiencies is essential for driving operational excellence and achieving long-term success.',
  //       "Implementing processes only reducing pipeline velocity can lead to duplication of effort and unnecessary complexity. It's important to streamline processes by removing all unnecessary steps and consolidating workflows to improve overall effectiveness.",
  //       "Correct! Identifying and eliminating inefficiencies is key to streamlining processes and improving operational efficiency for long-term cost reduction. By analyzing workflows and identifying areas for improvement, organizations can optimize resource allocation and enhance productivity."],
  //     question: ['How can processes be streamlined to improve operational efficiency?',],
  //     option: ['Maintain the status quo.',
  //       "Identify the process which increases pipeline velocity.",
  //       " Implement the process which makes process cost effective in long-term."],
  //     disabled: false,
  //     questionchecked: [false, false, false],
  //     cellvalue: ['z31', 'z32', 'z33']
  //   },
   
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
