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
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ecommerceoperations',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './ecommerceoperations.component.html',
  styleUrls: ['./ecommerceoperations.component.scss']
})
export class EcommerceoperationsComponent extends AbstractComponent {
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
  selectedCardId1: string = '';
  selectedCardId2: string = '';
  
  textLines: string[] = [
    "This option uses packaging made entirely from recycled cardboard. It includes minimalistic printing using soy-based inks, emphasizing the brand’s commitment to sustainability. The design is simple yet elegant, allowing the packaging itself to convey a message of environmental responsibility.",
    "This packaging is made from biodegradable plastics derived from plant sources, which can decompose naturally within a few months under the right conditions. It’s a more durable option that can be used for products requiring moisture resistance.",
    "These are made from organic cotton and can be reused by the customer in various ways, extending the lifecycle of the packaging beyond the product itself. The pouches can be branded with natural dyes, offering a premium, eco-chic packaging solution.",
    "Implement a comprehensive Vendor Management Software that facilitates better coordination, communication, and performance tracking with all suppliers. This platform can manage orders, track fulfillment, assess quality compliance, and rate vendor reliability.",
    "Establish a system for rigorous quality testing of raw materials at either third-party labs or at dedicated checkpoints before they enter the production cycle. This ensures only high-quality and compliant materials are used.",
    "Implement blockchain technology to create a transparent and immutable ledger for all goods from source to sale. This technology helps in tracking the origin and handling of every item, ensuring ethical practices and material authenticity.",
    "Utilize AI-driven tools to get insights of pricing based on supply levels, demand forecasts, and market trends. This tool also helps manage inventory more effectively, reducing overstock and stockouts.",
    "Enhance the current CRM system to integrate more deeply with customer feedback mechanisms, allowing for real-time responses and adjustments based on customer interactions and satisfaction metrics",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));


  cardData = [
    {
      id: 'card1',
      title: 'ao9',
      img: "assets/images/ecommerce/recyclecardboardpackaging.png",
      databasecellname: "aq134",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
        textname: 'as8',
        cellvalue: 'as9',
        textmonth: 'aq8',
        cellvalue1: 'aq9',
        textpack: 'ar8',
        cellvalue2: 'ar9',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ao10',
      img: "assets/images/ecommerce/biogradiabepackaging.svg",
      databasecellname: "aq135",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
        textname: 'as8',
        cellvalue: 'as10',
        textmonth: 'aq8',
        cellvalue1: 'aq10',
        textpack: 'ar8',
        cellvalue2: 'ar10',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ao11',
      img: "assets/images/ecommerce/reusblefibaricpack.svg",
      databasecellname: "aq136",
      ischecked: false,
      description: {
        text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
        textname: 'as8',
        cellvalue: 'as11',
        textmonth: 'aq8',
        cellvalue1: 'aq11',
        textpack: 'ar8',
        cellvalue2: 'ar11',
      },
      turncatedtext: '',
    },
  ];

  
  cardData1 = [
    {
      id: 'card1',
      title: 'ao16',
      img: "assets/images/ecommerce/greenlogix.svg",
      databasecellname: "aq139",
      ischecked: false,
      description: {
        // text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        storage: " Multi-tiered warehousing with energy-efficient systems and biodegradable packaging materials.",
        delivery: "Electric vehicles for urban last-mile delivery and biodiesel trucks for longer routes.",
        reach: "National, focusing on major metropolitan areas.",
        performance: "99% on-time delivery rate; automated inventory management.",
        dtime: "Within 48 hours for metropolitan areas; 3-5 days for other regions.",
        textname: 'aq15',
        cellvalue: 'aq16',
        textmonth: 'at15',
        cellvalue1: 'at16',
        textcost: 'ar15',
        cellvalue2: 'ar16',
        textdel: 'as15',
        cellvalue3: 'as16',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ao17',
      img: "assets/images/ecommerce/ecoshipsolutions.svg",
      databasecellname: "aq140",
      ischecked: false,
      description: {
        // text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        storage: "Decentralized warehousing close to major customer bases to reduce travel distances.",
        delivery: " Local courier partnerships using sustainable methods, plus cargo bikes for dense areas.",
        reach: " Tier 1 and tier 2 cities across India.",
        performance: " 30% reduction in carbon footprint; 95% customer satisfaction rate.",
        dtime: "Within 24 hours in cities; 3-4 days in smaller towns.",
        textname: 'aq15',
        cellvalue: 'aq17',
        textmonth: 'at15',
        cellvalue1: 'at17',
        textcost: 'ar15',
        cellvalue2: 'ar17',
        textdel: 'as15',
        cellvalue3: 'as17',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ao18',
      img: "assets/images/ecommerce/straemlinefrightend.svg",
      databasecellname: "aq141",
      ischecked: false,
      description: {
        // text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
        storage: "Automated systems with robotic sorting and AI-driven inventory management.",
        delivery: "Fuel-efficient vehicles and rail for long distances, optimized routes.",
        reach: "International, strong networks in Asia, Europe, and North America.",
        performance: "98% inventory accuracy; less than 1% damage rate.",
        dtime: "2-3 days domestically; 5-7 days internationally.",
        textname: 'aq15',
        cellvalue: 'aq18',
        textmonth: 'at15',
        cellvalue1: 'at18',
        textcost: 'ar15',
        cellvalue2: 'ar18',
        textdel: 'as15',
        cellvalue3: 'as18',
      },
      turncatedtext: '',
    },
  ];
 
  cardData2 = [
    {
      id: 'card1',
      title: 'ao23',
      img: "assets/images/ecommerce/vendormanagementsoftware.svg",
      databasecellname: "aq144",
      ischecked: false,
      pretext: ["Vendor On-Time Delivery Rate: Improves by 13%",
        "Supplier Compliance with Sustainability Standards: Increases compliance rate by 25%",
        "Efficiency in Procurement Cycle: Reduces time by 20%"],
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        textname: 'aq22',
        cellvalue: 'aq23',
        textmonth: 'ar22',
        cellvalue1: 'ar23',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'ao24',
      img: "assets/images/ecommerce/advmeterialqualitytesing.svg",
      databasecellname: "aq145",
      ischecked: false,
      pretext:[
        "Reduction in Material Defects: Decreases material defects by 30%.",
        "Improvement in Final Product Quality: Enhances product quality by 15%.",
        "Customer Return Rate: Lowers returns due to quality issues by 10%."
      ],
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        vendor: "",
        textname: 'aq22',
        cellvalue: 'aq24',
        textmonth: 'ar22',
        cellvalue1: 'ar24',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'ao25',
      img: "assets/images/ecommerce/blockchainforsupply.jpg",
      databasecellname: "aq146",
      ischecked: false,
      pretext:[
        "Increase in Consumer Trust: Consumer trust increases by 20%.",
        "Transparency in Supply Chain: Achieves 100% traceability.",
        "Enhancement in Brand Image: Improves brand image and loyalty by 15%."
      ],
      description: {
        text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll,
        textname: 'aq22',
        cellvalue: 'aq25',
        textmonth: 'ar22',
        cellvalue1: 'ar25',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'ao26',
      img: "assets/images/ecommerce/dynamicpricingandinven.svg",
      databasecellname: "aq147",
      ischecked: false,
      pretext:[
        "Inventory Carrying Costs: Reduces costs by 20%.",
        "Revenue Increase due to Optimal Pricing: Increases revenue by 5%.",
        "Reduction in Stockouts and Overstocks: Decreases by 25%."
      ],
      description: {
        text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll,
        textname: 'aq22',
        cellvalue: 'aq26',
        textmonth: 'ar22',
        cellvalue1: 'ar26',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'ao27',
      img: "assets/images/ecommerce/crmintegrtion.svg",
      databasecellname: "aq148",
      ischecked: false,
      pretext:[
        "Customer Satisfaction Score: Increases by 15%.",
        "Customer Retention Rate: Improves retention by 10%.",
        "Feedback Response Time: Reduces response time to customer inquiries by 30%."
      ],
      description: {
        text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll,
        textname: 'aq22',
        cellvalue: 'aq27',
        textmonth: 'ar22',
        cellvalue1: 'ar27',
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





  writeecommercevalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string) {
    const apiname = "/ecommercegame/singleinputecommercegame";
    let ecommerceinputData: any = {}
    if (inputtype == 'radio') {

      ecommerceinputData = {
        [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
      };


    } else {
      ecommerceinputData = {
        [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
      };

    }
   
    this._api.writeGameData("ecommercegame", 2,
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
