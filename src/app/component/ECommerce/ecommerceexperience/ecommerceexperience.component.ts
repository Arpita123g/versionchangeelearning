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

@Component({
  selector: 'app-ecommerceexperience',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule, MatIconModule, TippyDirective],
  templateUrl: './ecommerceexperience.component.html',
  styleUrls: ['./ecommerceexperience.component.scss']
})
export class EcommerceexperienceComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  showAll: boolean[] = [false, false, false, false, false, false];

  selectedCardIndex: number | null = null;
  selectedCard1Index: number | null = null;
  selectedCard2Index: number | null = null;
  selectedCardId1: string = '';
  selectedCardId2: string = '';
  selectedCardId3: string = '';
  selectedCardId4: string = '';
  selectedCardId5: string = '';


  databasecellname: any = [
    'aq107', 'aq108', 'aq109',//2
    'aq112', 'aq113', 'aq114', 'aq115', 'aq116', //7
    'aq119', 'aq120',//9
    'aq123', 'aq124', 'aq125',//12
    'aq128', 'aq129', 'aq130',//15
  ];

  periodcellname: any = [
    'ai8', 'aj8', 'ai33', 'aj33', 'ak33',//4
    'ai9', 'aj9', 'ai10', 'aj10', 'ai11', 'aj11',//10
    'ai15', 'ai16', 'ai17', 'ai18', 'ai19',//15
    'ai23', 'ai24', //17
    'ai34', 'aj34', 'ak34', 'ai35', 'aj35', 'ak35', 'ai36', 'aj36', 'ak36',//26
    'ag9', 'ag10', 'ag11',//29
    'ag15', 'ag16', 'ag17', 'ag18', 'ag19',//34
    'ag23', 'ag24',//36
    'ag28', 'ag29', 'ag30',//39
    'ag34', 'ag35', 'ag36' //42
  ];

  // textLines: string[] = [
  //   "This design features a clean, uncluttered layout with a lot of white space, simple navigation, and high-quality images of products. The user experience on this site emphasizes ease of use and elegance, catering to users who appreciate a straightforward, visually relaxing shopping experience without overwhelming elements. It’s perfect for showcasing the quality and simplicity of the products.",
  //   "This website incorporates interactive elements such as hover effects, video backgrounds, and dynamic product grids. The interactive design is meant to engage users by making the browsing experience engaging and visually appealing. This design suits users who enjoy exploring content interactively and appreciate a modern, tech-forward approach to shopping.",
  //   "Focused on storytelling, this design uses a vertical scrolling layout that narrates the brand’s mission and the sustainable journey of its products. It features rich imagery, embedded videos, and interactive timelines. This approach is ideal for users interested in the backstory and impact of their purchases, offering an immersive experience that educates while it entertains.",
  //   "Display a low stock warning on product pages to create a sense of urgency (e.g., “Only 3 left in stock!”). This can increase the conversion rate by encouraging customers to make a purchase decision more quickly.",
  //   "Show a progress bar during the checkout process to indicate how far the customer is from completion. This helps in reducing cart abandonment by keeping users informed and motivated through a clear, visual process, potentially increasing completion rates.",
  //   "Introduce an exit-intent pop-up that triggers when users are about to leave the site, offering them a discount or reminding them of items in their cart. This can enhance conversion rates by capturing potentially lost sales and increasing customer retention.",
  //   "Use personalized recommendations based on user browsing and purchase history to suggest relevant products. This nudge can significantly improve cross-selling and up-selling, boosting average order values and enhancing user experience by making shopping more tailored and convenient.",
  //   "Implement notifications that show when someone buys a product, such as “Someone in New Delhi just purchased this item 5 minutes ago.” Builds trust and credibility, encouraging others to make a purchase by leveraging the bandwagon effect.",
  //   "This design streamlines the entire checkout process onto a single page. Customers can view their cart, enter shipping information, choose delivery options, and make payment all from one page. This method reduces the number of steps required to complete a purchase, aiming to minimize cart abandonment. Features: Collapsible sections for shipping, billing, and payment; real-time validation; and a summary of items on the side Pros: Fast and convenient, particularly for returning customers who can use saved information Cons: Can appear cluttered if not well-designed, potentially overwhelming first-time users.",
  //   "This approach breaks down the checkout process into several steps or pages, guiding the user through a sequence of actions, typically starting with cart review, followed by shipping information, billing details, and finally, the payment section. Features: Progress indicator, option to go back and edit previous steps without losing data, and a review page before finalizing the order Pros: Organized and clear, especially for new customers who may appreciate a more guided experience Cons: Potentially higher abandonment rates due to the longer process.",
  //   "This method allows returning customers to bypass the checkout process by using saved payment and shipping information to complete purchases with just one click. It’s highly efficient for encouraging impulse buys and increasing conversion rates among repeat shoppers.",
  //   "Allows customers to make purchases without creating an account. This can speed up the process for first-time users or those who prefer not to store their information but might reduce the ability to track customer behavior and preferences for future marketing.",
  //   "This integrates the checkout process directly within social media platforms where the customer interacts with your product ads. For example, shopping features on Instagram or Facebook allow users to complete purchases without leaving the social media site.",
  //   "Phone-based support handling inquiries, complaints, returns, and assistance with orders. Can also provide support via emails and basic live chat.",
  //   "24/7 support through chatbots on the website and mobile app, handling standard queries like tracking orders, basic troubleshooting, and providing product information. Can escalate complex issues to human agents.",
  //   "High-touch, personalized customer service provided by dedicated account managers. This includes handling all aspects of the customer experience, from order placement to after-sales support, and custom solutions.",
  // ]
  textLines: any[] = [
    "This design features a clean, uncluttered layout with a lot of white space, simple navigation, and high-quality images of products. The user experience on this site emphasizes ease of use and elegance, catering to users who appreciate a straightforward, visually relaxing shopping experience without overwhelming elements. It’s perfect for showcasing the quality and simplicity of the products.",
    "This website incorporates interactive elements such as hover effects, video backgrounds, and dynamic product grids. The interactive design is meant to engage users by making the browsing experience engaging and visually appealing. This design suits users who enjoy exploring content interactively and appreciate a modern, tech-forward approach to shopping.",
    "Focused on storytelling, this design uses a vertical scrolling layout that narrates the brand’s mission and the sustainable journey of its products. It features rich imagery, embedded videos, and interactive timelines. This approach is ideal for users interested in the backstory and impact of their purchases, offering an immersive experience that educates while it entertains.",
    "Display a low stock warning on product pages to create a sense of urgency (e.g., “Only 3 left in stock!”). This can increase the conversion rate by encouraging customers to make a purchase decision more quickly.",
    "Show a progress bar during the checkout process to indicate how far the customer is from completion. This helps in reducing cart abandonment by keeping users informed and motivated through a clear, visual process, potentially increasing completion rates.",
    "Introduce an exit-intent pop-up that triggers when users are about to leave the site, offering them a discount or reminding them of items in their cart. This can enhance conversion rates by capturing potentially lost sales and increasing customer retention.",
    "Use personalized recommendations based on user browsing and purchase history to suggest relevant products. This nudge can significantly improve cross-selling and up-selling, boosting average order values and enhancing user experience by making shopping more tailored and convenient.",
    "Implement notifications that show when someone buys a product, such as “Someone in New Delhi just purchased this item 5 minutes ago.” Builds trust and credibility, encouraging others to make a purchase by leveraging the bandwagon effect.",
    
    
    "This design streamlines the entire checkout process onto a single page. Customers can view their cart, enter shipping information, choose delivery options, and make payment all from one page. This method reduces the number of steps required to complete a purchase, aiming to minimize cart abandonment.",
    "This approach breaks down the checkout process into several steps or pages, guiding the user through a sequence of actions, typically starting with cart review, followed by shipping information, billing details, and finally, the payment section.",
    
    "This method allows returning customers to bypass the checkout process by using saved payment and shipping information to complete purchases with just one click. It’s highly efficient for encouraging impulse buys and increasing conversion rates among repeat shoppers.",
    "Allows customers to make purchases without creating an account. This can speed up the process for first-time users or those who prefer not to store their information but might reduce the ability to track customer behavior and preferences for future marketing.",
    "This integrates the checkout process directly within social media platforms where the customer interacts with your product ads. For example, shopping features on Instagram or Facebook allow users to complete purchases without leaving the social media site.",
    "Phone-based support handling inquiries, complaints, returns, and assistance with orders. Can also provide support via emails and basic live chat.",
    "24/7 support through chatbots on the website and mobile app, handling standard queries like tracking orders, basic troubleshooting, and providing product information. Can escalate complex issues to human agents.",
    "High-touch, personalized customer service provided by dedicated account managers. This includes handling all aspects of the customer experience, from order placement to after-sales support, and custom solutions.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));


  cardData = [
    {
      id: 'card1',
      title: 'ag9',
      img: "assets/images/ecommerce/minimalistdesign.svg",
      databasecellname: "aq107",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
        // textname: 'Development Cost, INR',
        textname: 'ai8',
        cellvalue: 'ai9',
        // textmonth: 'Maintenance and Database Cost per month, INR',
        textmonth: 'aj8',
        cellvalue1: 'aj9',

      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ag10',
      img: "assets/images/ecommerce/intractivedessign.jpg",
      databasecellname: "aq108",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
        // textname: 'Development Cost, INR',
        textname: 'ai8',

        cellvalue: 'ai10',
        // textmonth: 'Maintenance and Database Cost per month, INR',
        textmonth: 'aj8',

        cellvalue1: 'aj10',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ag11',
      img: "assets/images/ecommerce/storytellingdesign.svg",
      databasecellname: "aq109",
      ischecked: false,
      description: {
        text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
        // textname: 'Development Cost, INR',
        textname: 'ai8',
        cellvalue: 'ai11',
        // textmonth: 'Maintenance and Database Cost per month, INR',
        textmonth: 'aj8',
        cellvalue1: 'aj11',
      },
      turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 'ag15',
      img: "assets/images/ecommerce/secuirityindicator.svg",
      databasecellname: "aq112",
      ischecked: false,
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai15',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ag16',
      img: "assets/images/ecommerce/progressbarcheckout.svg",
      databasecellname: "aq113",
      ischecked: false,
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai16',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ag17',
      img: "assets/images/ecommerce/dynamicexitintentpopup.svg",
      databasecellname: "aq114",
      ischecked: false,
      description: {
        text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai17',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'ag18',
      img: "assets/images/ecommerce/personaliserecommodation.svg",
      databasecellname: "aq115",
      ischecked: false,
      description: {
        text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai18',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'ag19',
      img: "assets/images/ecommerce/socialproofnotificaion.jpg",
      databasecellname: "aq116",
      ischecked: false,
      description: {
        text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai19',
      },
      turncatedtext: '',
    },
  ];

  // cardData2 = [
  //   {
  //     id: 'card1',
  //     title: 'ag23',
  //     img: "assets/images/ecommerce/singlepagecheckout.svg",
  //     databasecellname: "aq119",
  //     ischecked: false,
  //     description: {
  //       text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll,
  //       textname: 'Cost, INR',
  //       cellvalue: 'ai23',
  //     },
  //     turncatedtext: '',
  //   },
  //   {
  //     id: 'card2',
  //     title: 'ag24',
  //     img: "assets/images/ecommerce/multistepcheckout.svg",
  //     databasecellname: "aq120",
  //     ischecked: false,
  //     description: {
  //       text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll,
  //       textname: 'Cost, INR',
  //       cellvalue: 'ai24',
  //     },
  //     turncatedtext: '',
  //   },
  // ];

  cardData2 = [
    {
      id: 'card1',
      title: 'ag23',
      img: "assets/images/ecommerce/singlepagecheckout.svg",
      databasecellname: "aq119",
      ischecked: false,
      description: {
        text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll,
        feature:"Collapsible sections for shipping, billing, and payment; real-time validation; and a summary of items on the side.",
        pros:"Fast and convenient, particularly for returning customers who can use saved information.",
        cons:"Can appear cluttered if not well-designed, potentially overwhelming first-time users.",
        textname: 'Cost, INR',
        cellvalue: 'ai23',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ag24',
      img: "assets/images/ecommerce/multistepcheckout.svg",
      databasecellname: "aq120",
      ischecked: false,
      description: {
        text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll,
        feature:"Progress indicator, option to go back and edit previous steps without losing data, and a review page before finalizing the order.",
        pros:"Organized and clear, especially for new customers who may appreciate a more guided experience.",
        cons:"Potentially higher abandonment rates due to the longer process.",
        textname: 'Cost, INR',
        cellvalue: 'ai24',
      },
      turncatedtext: '',
    },
  ];
  cardData3 = [
    {
      id: 'card1',
      title: 'ag28',
      img: "assets/images/ecommerce/oneclickcheckout.svg",
      databasecellname: "aq123",
      ischecked: false,
      description: {
        text: this.textLines[10], truncatedText: this.truncatedText[10], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai28',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ag29',
      img: "assets/images/ecommerce/guestcheckout.svg",
      databasecellname: "aq124",
      ischecked: false,
      description: {
        text: this.textLines[11], truncatedText: this.truncatedText[11], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai29',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ag30',
      img: "assets/images/ecommerce/socialmediacheckout.svg",
      databasecellname: "aq125",
      ischecked: false,
      description: {
        text: this.textLines[12], truncatedText: this.truncatedText[12], showAll: this.showAll,
        textname: 'Cost, INR',
        cellvalue: 'ai30',
      },
      turncatedtext: '',
    },
  ];

  cardData4 = [
    {
      id: 'card1',
      title: 'ag34',
      img: "assets/images/ecommerce/traditionalcallcenter.svg",
      databasecellname: "aq128",
      ischecked: false,
      description: {
        text: this.textLines[13], truncatedText: this.truncatedText[13], showAll: this.showAll,
        textname: 'ai33',
        cellvalue: 'ai34',
        textname1: 'aj33',
        cellvalue1: 'aj34',
        textname2: 'ak33',
        cellvalue2: 'ak34',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ag35',
      img: "assets/images/ecommerce/aipowerchatbaot.svg",
      databasecellname: "aq129",
      ischecked: false,
      description: {
        text: this.textLines[14], truncatedText: this.truncatedText[14], showAll: this.showAll,
        // textname: 'Manpower, man days',
        textname: 'ai33',

        cellvalue: 'ai35',
        textname1: 'aj33',
        cellvalue1: 'aj35',
        textname2: 'ak33',
        cellvalue2: 'ak35',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ag36',
      img: "assets/images/ecommerce/dedicatedaccountmanager.svg",
      databasecellname: "aq130",
      ischecked: false,
      description: {
        text: this.textLines[15], truncatedText: this.truncatedText[15], showAll: this.showAll,
        textname: 'ai33',
        cellvalue: 'ai36',
        textname1: 'aj33',
        cellvalue1: 'aj36',
        textname2: 'ak33',
        cellvalue2: 'ak36',
      },
      turncatedtext: '',
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

          if(this.result.ecommercegamedata){
            this.inputDisabled = this.result.ecommercegamedata.aq168 === 'yes' || this.timefinished;
          }
          

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }


  writeecommercevalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string, length: number) {
    let apiname = "/ecommercegame/singleinputecommercegame";
    let ecommerceinputData: any = {}
    if (inputtype == 'radio') {
      if (length == 3) {
        ecommerceinputData = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        };
      } else {
        ecommerceinputData = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        };
      }

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
