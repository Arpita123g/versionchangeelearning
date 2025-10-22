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
  selector: 'app-itcasemanagementfoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itcasemanagementfoodforthought.component.html',
  styleUrls: ['./itcasemanagementfoodforthought.component.scss']
})
export class ItcasemanagementfoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought: any = [
    {
      question: ["What factor should be prioritized when deciding between cloud and on-premise servers?"],

      option: [["Scalability benefits", "Long-term ownership cost", "Performance optimization"]],

      feedback: [["Choosing cloud servers for scalability benefits allows for rapid expansion and flexibility in resource allocation. However, it's essential to carefully assess security measures to mitigate potential risks associated with off-site data storage.",
        "Opting for on-premise servers may seem cost-effective in the long run due to predictable ownership costs. However, consider the limitations in scalability and the need for upfront investment in infrastructure and maintenance.",
        "While performance optimization is crucial, it's equally important to weigh scalability and security factors when making server decisions. Consider how each option aligns with business growth and data protection needs."]],

      score: [["al7", "al8", "al9"], ["al7", "al8", "al9"]],

      rigor: [["am7", "am8", "am9"], ["am7", "am8", "am9"]],

      structuring: [["an7", "an8", "an9"], ["an7", "an8", "an9"]],

      synthesis: [["ao7", "ao8", "ao9"], ["ao7", "ao8", "ao9"]],

      business: [["ap7", "ap8", "ap9"], ["ap7", "ap8", "ap9"]],
    },
    {
      question: ["Which server selection criterion is crucial for ensuring optimal performance and reliability?"],

      option: [["Cost-effectiveness", "Security features", "Renewal period"]],

      feedback: [["Prioritizing cost-effectiveness in server selection ensures efficient resource allocation. However, be mindful of potential trade-offs in performance and reliability to maintain optimal service delivery.",
        "Selecting a server with robust security features is paramount for safeguarding sensitive data and maintaining customer trust. Ensure that the chosen server meets industry standards and compliance requirements.",
        "Consider the renewal period of servers to plan for future upgrades and maintenance cycles. A longer renewal period may offer cost savings but evaluate the impact on technology obsolescence and scalability needs."]],

      score: [["al10", "al11", "al12"], ["al10", "al11", "al12"]],

      rigor: [["am10", "am11", "am12"], ["am10", "am11", "am12"]],

      structuring: [["an10", "an11", "an12"], ["an10", "an11", "an12"]],

      synthesis: [["ao10", "ao11", "ao12"], ["ao10", "ao11", "ao12"]],

      business: [["ap10", "ap11", "ap12"], ["ap10", "ap11", "ap12"]],
    },
    {
      question: ["What aspect should be considered when selecting network equipment for seamless operations?"],

      option: [["Cost-efficiency", "Maintenance requirements", "Security protocols"]],

      feedback: [["Choosing cost-efficient network equipment allows for optimal resource allocation and budget management. However, ensure that cost savings do not compromise performance or security requirements.",
        "Selecting network equipment with minimal maintenance needs simplifies ongoing management and reduces operational overhead. Consider the scalability and reliability of the chosen equipment to ensure long-term sustainability.",
        "Prioritizing network equipment with robust security protocols is essential for safeguarding against cyber threats and data breaches. Evaluate the effectiveness of security measures in mitigating risks and protecting sensitive information."]],

      score: [["al13", "al14", "al15"], ["al13", "al14", "al15"]],

      rigor: [["am13", "am14", "am15"], ["am13", "am14", "am15"]],

      structuring: [["an13", "an14", "an15"], ["an13", "an14", "an15"]],

      synthesis: [["ao13", "ao14", "ao15"], ["ao13", "ao14", "ao15"]],

      business: [["ap13", "ap14", "ap15"], ["ap13", "ap14", "ap15"]],
    },
    {
      question: ["Which factor should drive the selection of a database solution for future scalability?"],

      option: [["Deployment flexibility", "Initial cost", "Current storage capacity"]],

      feedback: [["Choosing a database solution with deployment flexibility allows for seamless integration into existing infrastructure and scalability for future growth. Consider how the chosen solution aligns with data management needs and architectural requirements.",
        "Assessing the initial cost of database options is crucial for budget planning and resource allocation. However, prioritize scalability and performance considerations to ensure long-term viability and return on investment.",
        "Consider the current storage capacity requirements when selecting a database solution to meet immediate data storage needs. However, anticipate future growth and scalability requirements to avoid potential limitations and data migration challenges."]],

      score: [["al16", "al17", "al18"], ["al16", "al17", "al18"]],

      rigor: [["am16", "am17", "am18"], ["am16", "am17", "am18"]],

      structuring: [["an16", "an17", "an18"], ["an16", "an17", "an18"]],

      synthesis: [["ao16", "ao17", "ao18"], ["ao16", "ao17", "ao18"]],

      business: [["ap16", "ap17", "ap18"], ["ap16", "ap17", "ap18"]],
    },
    {
      question: ["What optimization method should be prioritized to enhance system performance?"],

      option: [["Cost-effectiveness", "Scalability", "Security measures"]],

      feedback: [["Prioritizing cost-effective optimization methods allows for efficient resource allocation and budget management. However, consider the impact on performance and scalability to ensure optimal system functionality and user experience.",
        "Emphasizing scalability in optimization efforts ensures the system can accommodate future growth and increased user demand. However, balance scalability with performance considerations to maintain service reliability and responsiveness.",
        "Integrating security measures into performance optimization strategies is essential for safeguarding against cyber threats and maintaining data integrity. Consider how security measures impact system performance and user experience to strike the right balance."]],

      score: [["al19", "al20", "al21"], ["al19", "al20", "al21"]],

      rigor: [["am19", "am20", "am21"], ["am19", "am20", "am21"]],

      structuring: [["an19", "an20", "an21"], ["an19", "an20", "an21"]],

      synthesis: [["ao19", "ao20", "ao21"], ["ao19", "ao20", "ao21"]],

      business: [["ap19", "ap20", "ap21"], ["ap19", "ap20", "ap21"]],
    },
    {
      question: ["What consideration is crucial when deciding between custom and off-the-shelf solutions?"],

      option: [["Integration capabilities", "Initial development cost", "Client requirements"]],

      feedback: [["Selecting a development model based on integration capabilities ensures seamless interoperability with existing systems and technologies. However, consider the level of customization and flexibility required to meet unique business needs.",
        "Considering the initial development cost of custom and off-the-shelf solutions is crucial for budget planning and resource allocation. However, prioritize long-term scalability and support considerations to ensure sustainable growth and system maintenance.",
        "Aligning the development model with client requirements is essential for delivering tailored solutions that meet specific business needs. However, balance client demands with scalability, security, and support considerations to achieve optimal outcomes."]],

      score: [["al22", "al23", "al24"], ["al22", "al23", "al24"]],

      rigor: [["am22", "am23", "am24"], ["am22", "am23", "am24"]],

      structuring: [["an22", "an23", "an24"], ["an22", "an23", "an24"]],

      synthesis: [["ao22", "ao23", "ao24"], ["ao22", "ao23", "ao24"]],

      business: [["ap22", "ap23", "ap24"], ["ap22", "ap23", "ap24"]],
    },
    {
      question: ["Which development method is best suited for minimizing uncertainties in the development process?"],

      option: [["Agile methodology", "Waterfall approach", "Prototype development"]],

      feedback: [["Adopting an agile methodology minimizes uncertainties in the development process by allowing for iterative and adaptive planning. However, ensure adequate communication and collaboration to effectively manage project scope and deliverables.",
        "Following a waterfall approach provides a structured framework for sequential development phases and milestone delivery. However, consider potential challenges in accommodating changes and feedback late in the development lifecycle.",
        "Investing in prototype development allows for rapid validation of concepts and user feedback. However, prioritize clear objectives and requirements to avoid scope creep and ensure alignment with business goals."]],

      score: [["al25", "al26", "al27"], ["al25", "al26", "al27"]],

      rigor: [["am25", "am26", "am27"], ["am25", "am26", "am27"]],

      structuring: [["an25", "an26", "an27"], ["an25", "an26", "an27"]],

      synthesis: [["ao25", "ao26", "ao27"], ["ao25", "ao26", "ao27"]],

      business: [["ap25", "ap26", "ap27"], ["ap25", "ap26", "ap27"]],
    },
    {
      question: ["What factor should be considered when selecting a version control platform for efficient collaboration?"],

      option: [["Platform capabilities", "Cost-effectiveness", "User interface design"]],

      feedback: [["Selecting a version control system with robust platform capabilities enables efficient collaboration and version history management. However, consider scalability and ease of integration with existing tools and workflows.",
        "Prioritizing cost-effective version control solutions allows for efficient resource allocation and budget management. However, ensure that cost savings do not compromise platform reliability or performance.",
        "Choosing a version control system with an intuitive user interface simplifies adoption and usability. However, prioritize functionality and feature set to meet development and collaboration needs effectively."]],

      score: [["al28", "al29", "al30"], ["al28", "al29", "al30"]],

      rigor: [["am28", "am29", "am30"], ["am28", "am29", "am30"]],

      structuring: [["an28", "an29", "an30"], ["an28", "an29", "an30"]],

      synthesis: [["ao28", "ao29", "ao30"], ["ao28", "ao29", "ao30"]],

      business: [["ap28", "ap29", "ap30"], ["ap28", "ap29", "ap30"]],
    },
    {
      question: ["Which security feature is essential for mitigating potential risks in system architecture?"],

      option: [["Access control mechanisms", "Regular software updates", "Data encryption protocols"]],

      feedback: [["Implementing robust access control mechanisms is crucial for mitigating potential risks and safeguarding sensitive data. However, consider the complexity and maintenance overhead associated with managing user permissions and authentication.",
        "Prioritizing regular software updates ensures the system remains resilient against emerging threats and vulnerabilities. However, balance update frequency with system stability and compatibility to minimize disruptions to operations.",
        "Implementing strong data encryption protocols protects sensitive information from unauthorized access and data breaches. However, consider the computational overhead and performance impact of encryption on system operations and user experience."]],

      score: [["al31", "al32", "al33"], ["al31", "al32", "al33"]],

      rigor: [["am31", "am32", "am33"], ["am31", "am32", "am33"]],

      structuring: [["an31", "an32", "an33"], ["an31", "an32", "an33"]],

      synthesis: [["ao31", "ao32", "ao33"], ["ao31", "ao32", "ao33"]],

      business: [["ap31", "ap32", "ap33"], ["ap31", "ap32", "ap33"]],
    },
    {
      question: ["Which compliance measure is crucial for ensuring regulatory adherence in payment gateway development?"],

      option: [["GDPR compliance", "PCI DSS certification", "ISO 9001 compliance"]],

      feedback: [["Ensuring GDPR compliance demonstrates a commitment to data privacy and protection, enhancing customer trust and regulatory adherence. However, consider the complexities of compliance requirements and potential impacts on business operations.",
        "Attaining PCI DSS certification is essential for securely handling payment card data and maintaining compliance with industry standards. However, assess the costs and resource investments required to achieve and maintain certification.",
        "Achieving ISO 9001 compliance signifies a commitment to quality management practices and continuous improvement. However, consider the organizational changes and process optimizations necessary to meet certification requirements effectively."]],

      score: [["al34", "al35", "al36"], ["al34", "al35", "al36"]],

      rigor: [["am34", "am35", "am36"], ["am34", "am35", "am36"]],

      structuring: [["an34", "an35", "an36"], ["an34", "an35", "an36"]],

      synthesis: [["ao34", "ao35", "ao36"], ["ao34", "ao35", "ao36"]],

      business: [["ap34", "ap35", "ap36"], ["ap34", "ap35", "ap36"]],
    },
    {
      question: ["What should be the primary consideration when formulating a future technology roadmap for a payment gateway company?"],

      option: [["Market trends and opportunities", "Budget constraints", "Short-term goals"]],

      feedback: [["Aligning the technology roadmap with market trends and opportunities ensures strategic positioning and future relevance. However, anticipate uncertainties and risks associated with emerging technologies and shifting consumer preferences.",
        "Considering budget constraints when formulating the technology roadmap ensures realistic resource allocation and financial sustainability. However, prioritize investments based on potential ROI and strategic business objectives.",
        "Focusing on short-term goals in the technology roadmap enables incremental progress and milestone achievements. However, maintain a balance between short-term objectives and long-term vision to sustain growth and innovation."]],

      score: [["al37", "al38", "al39"], ["al37", "al38", "al39"]],

      rigor: [["am37", "am38", "am39"], ["am37", "am38", "am39"]],

      structuring: [["an37", "an38", "an39"], ["an37", "an38", "an39"]],

      synthesis: [["ao37", "ao38", "ao39"], ["ao37", "ao38", "ao39"]],

      business: [["ap37", "ap38", "ap39"], ["ap37", "ap38", "ap39"]],
    },
    {
      question: ["Which criterion should guide the selection of pilot projects for integration into future business strategies?"],

      option: [["Feasibility for development", "Immediate cost savings", "Alignment with current business model"]],

      feedback: [["Selecting pilot projects based on feasibility for development ensures realistic project goals and resource commitments. However, prioritize projects with high potential for scalability and impact on business objectives.",
        "Choosing pilot projects based on immediate cost savings opportunities may yield short-term benefits. However, consider the long-term strategic value and scalability of projects for sustainable growth and innovation.",
        "Prioritizing pilot projects that align with the current business model ensures seamless integration and strategic alignment. However, consider projects with potential to drive innovation and disrupt existing paradigms."]],

      score: [["al40", "al41", "al42"], ["al40", "al41", "al42"]],

      rigor: [["am40", "am41", "am42"], ["am40", "am41", "am42"]],

      structuring: [["an40", "an41", "an42"], ["an40", "an41", "an42"]],

      synthesis: [["ao40", "ao41", "ao42"], ["ao40", "ao41", "ao42"]],

      business: [["ap40", "ap41", "ap42"], ["ap40", "ap41", "ap42"]],
    },
    {
      question: ["What should be the main focus of continuous investments to stay ahead of competitors in technology and features?"],

      option: [["Cost reduction strategies", "Feedback mechanisms", "Short-term profitability"]],

      feedback: [["Focusing on cost reduction strategies for continuous improvements ensures efficient resource allocation and budget management. However, balance cost-saving measures with investments in innovation and technology upgrades to maintain competitiveness.",
        "Implementing effective feedback mechanisms enables continuous learning and adaptation to customer needs and market trends. However, prioritize actionable insights and data-driven decision-making to drive meaningful improvements.",
        "Emphasizing short-term profitability in continuous improvement initiatives may yield immediate financial gains. However, prioritize long-term investments in technology and infrastructure to sustain growth and competitiveness."]],

      score: [["al43", "al44", "al45"], ["al43", "al44", "al45"]],

      rigor: [["am43", "am44", "am45"], ["am43", "am44", "am45"]],

      structuring: [["an43", "an44", "an45"], ["an43", "an44", "an45"]],

      synthesis: [["ao43", "ao44", "ao45"], ["ao43", "ao44", "ao45"]],

      business: [["ap43", "ap44", "ap45"], ["ap43", "ap44", "ap45"]],
    },
    {
      question: ["Which training initiative is most likely to enhance employee effectiveness within budget constraints?"],

      option: [["Industry certifications", "Leadership development programs", "Technical skill workshops"]],

      feedback: [["Investing in industry certifications enhances employee skills and credentials, contributing to organizational competitiveness and customer confidence. However, balance certification costs with potential ROI and long-term career development.",
        "Implementing leadership development programs cultivates talent and fosters a culture of innovation and growth. However, prioritize programs that align with strategic objectives and address specific leadership competencies.",
        "Offering technical skill workshops provides employees with practical knowledge and expertise to tackle evolving challenges and opportunities. However, ensure workshops are tailored to business needs and complement existing skill sets effectively.."]],

      score: [["al46", "al47", "al48"], ["al46", "al47", "al48"]],

      rigor: [["am46", "am47", "am48"], ["am46", "am47", "am48"]],

      structuring: [["an46", "an47", "an48"], ["an46", "an47", "an48"]],

      synthesis: [["ao46", "ao47", "ao48"], ["ao46", "ao47", "ao48"]],

      business: [["ap46", "ap47", "ap48"], ["ap46", "ap47", "ap48"]],
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
      let apiname = "/itmanagementmaster/fetchitmanagementmaster"
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
                    this.foodforthought[i].score[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].business[0][j]];
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
      let apiname = "/itmanagementcm/fetchitmanagementcm"
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
                    this.foodforthought[i].score[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].itmanagementperioddata[this.foodforthought[i].business[0][j]];
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
    let apiname = '/itmanagementcm/updateitmanagementcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'itmanagementcm', body, {}, apiname, 'itmanagementcmactivestatus').subscribe(
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
