import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hrmfintech-market',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,MatIconModule],
  templateUrl: './hrmfintech-market.component.html',
  styleUrls: ['./hrmfintech-market.component.scss']
})
export class HrmfintechMarketComponent extends AbstractComponent {
  @Output() newEvent = new EventEmitter<any>();
  foodforthought: boolean = true;
  result: any = [];
  periodcellvalue: any = [];
  numberofattempts: number = 1;
  statusMapping: any = {
    'productengstatus': 2,
    'customersuccessstatus': 3,
    'designcommunicationstatus': 4
  };
  optionalCase: any = ['productengstatus', 'customersuccessstatus', 'designcommunicationstatus']

  marketdata = [
    {
      round: 1,
      description: [
        "Nify Tech is poised to capitalize on the anticipated boom in increasing online payments in the Indian economy. With a robust pipeline stemming from strong sales in the previous period, the company anticipates a 10% increase in its client base. Despite encountering challenges on multiple fronts which led to an overrun in the budgets, Nify Tech remained resilient. Thanks to the dedication of its various departments and agile methodology the company effectively managed to navigate these obstacles while maintaining its performance on the sales front.",
        "The employee's performance level were not up to the mark and the potential reason could be the stress level of employees, dissatisfaction with policies, long recruitment cycle, and expected compensation levels. In the current market, the demand for skill-based talent is increasing at a higher pace and if the company is not able to retain and recruit new talents it has to depend on vendors or outsource its requirement. This would affect client satisfaction inversely.",
        "This period, management has increased the department budget from last period by 8.3% and has also provided a nod to using tools to manage recruitment, performance and process guidance. The tools would automate the repetitive task and provide insights to the company on how to utilize the resources at best. If the tools are used effectively and combined with the recruitment, learning and management policies, it would help the department to turn around performance this period."
      ],
    },
    {
      round: 2,
      description: [
        "The payment infrastructure and smart collect products are expecting a boom in the current period, the pipeline of the company seems to be strong and we are expecting to add a few more clients this period. In the current board discussion, the management has decided to slightly increase the budget of the department as compared to last period. The workload is expected to increase for the product and engineering division as the company can establish a stronghold in the market.",
        "As the job market becomes competitive there is an expectation of higher salary hikes among employees. The market is observing a phenomenon where fintech companies are fighting for good resources, especially in the engineering division. The management of the company expects that the organisation will be affected by this ongoing trend and hence the department should try their best to retain employees.",
        "Work ethics and a recent sexual harassment case filed by an employee are some of the pressing issues in the upcoming discussion of the executives. The company's last few periods have not performed well on its policies which is affecting its reputation to attract diverse talent. The management has decided to include the performance on diversity inclusion and work policy in their annual financial report. The CHRO has called an urgent meeting and informed the department to work on the same lines."
      ],
    },
    {
      round: 3,
      description: [
        "In the shocking news, Israel has started a war against Palestine, the market is expecting a slowdown. The Middle East is expected to be hit strongest by the ongoing war, the supply of raw material through the Suez Canal, and shared territory are major concerns on the political and economic front. The management is expecting a slowdown in the current business from the Middle East and the USA. The sales team has already indicated a few clients dropping. The Indian market is expected to be affected by the war as it is one of the large importers of goods through the Suez Canal.",
        "In the latest meetings, the management has issued guidelines over the rising concern on the business level and hence decided to keep the budget of the department tight in the current financial period. The company has no intention of firing any employees. The employee's motivation is expected to be hit with ongoing events. The department has to find ways to make employees committed to the company's cause so that customer satisfaction is not adversely impacted.",
        "The compliance issues are rapidly increasing, grapevine control is important for the organisation to stop spreading false rumours. Town hall meetings, strong policies and management programs should help to keep the employee motivation & ethics level at par. The balance between cross functions becomes of utmost importance in uncertain times."
      ],
    },
    {
      round: 4,
      description: [
        "The talks between war-affected countries are not going as expected. The Chinese market has registered a downfall in the economy, the USA has recorded the highest level of inflation to date even worse than the 2008 financial crisis. The European market has been hit badly by the ongoing events. The Indian market is performing well compared to other countries but recession fear is emerging. The company's business has taken a hit and the sales team has provided the sign of more clients dropping from the Middle East.",
        "The management has decided to cut the budgets of every function for the current financial period. The department budget has been reduced by the least amount as the company maintains its stance on employees' well-being. The strange phenomenon is seen in the voluntary attrition rate which is not reducing, the industry has realized that the gig-based economy is a driving force behind it. The department has an important role in keeping employees' motivation and performance levels up.",
        "The company is yet to decide on a hiring freeze this period. The vendor management cost is rising for the top management recruits due to the shrinking availability of the talent pool while for other management levels, the cost has significantly gone down."
      ],
    },
    {
      round: 5,
      description: [
        "The situation is under control with treaties in place, and inflation in the USA started to reduce showing signs of normalcy. The RBI's tightened policy helped the Indian market to quickly recover on the inflation front. The currency rate of the dollar has started to reduce compared to the Indian rupee. The Middle East is still suffering from supply-led inflation. The company is expecting that the recession tides have passed and business will again start ticking up.",
        "With business coming back to normalcy the sales team is expecting increasing demand for customized payment infrastructure and gateway. The management has cleared its intention of keeping customer satisfaction as its highest priority. The CHRO has written a note describing the importance of stakeholders' satisfaction and keeping employee satisfaction at its peak. The voluntary attrition rate has seen no changes though the vendor management cost has reduced from last period.",
        "The 'Annual Conference' is going to be held this period and everyone is excited about it. At the 'Annual Conference,' top executives from the industry will visit and have a look at all the best practices around the company. The event is even more important this period as the company is expecting the CEO of the three biggest Indian conglomerates to visit."
      ],
    }
  ];


  tableData = [
    {
      status: 'active',
      title: "Parameters",
      id: 'parameters',
      tabledata: [
        { name: "Budget, k INR.", value: 0, tabname: 'market', cell: ["", "p8", "p9", "p10", "p11", "p12"] },
        { name: "Sales division budget, k INR.", value: 0, tabname: 'market', cell: ["", "p13", "p14", "p15", "p16", "p17"] },
        { name: "Product & Engineering division budget, k INR.", value: 0, tabname: 'market', cell: ["", "p18", "p19", "p20", "p21", "p22"] },
        { name: "Customer Success division budget, k INR.", value: 0, tabname: 'market', cell: ["", "p23", "p24", "p25", "p26", "p27"] },
        { name: "Design & Communication division budget, k INR", value: 0, tabname: 'market', cell: ["", "p28", "p29", "p30", "p31", "p32"] },
        { name: "Work capacity projected, hours", value: 0, tabname: 'market', cell: ["", "p33", "p34", "p35", "p36", "p37"] },
        { name: "Work capacity available, hours", value: 0, tabname: 'market', cell: ["", "p38", "p39", "p40", "p41", "p42"] }
      ],
    },
    {
      status: 'active',
      title: "Sales",
      id: 'sales',
      tabledata: [
        { name: "Work capacity projected, hours", value: 0, tabname: 'market', cell: ["", "p46", "p47", "p48", "p49", "p50"] },
        { name: "Work capacity available, hours", value: 0, tabname: 'market', cell: ["", "p51", "p52", "p53", "p54", "p55"] },
        { name: "Span ratio of junior to senior management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p56", "p57", "p58", "p59", "p60"] },
        { name: "Span ratio of senior to top management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p61", "p62", "p63", "p64", "p65"] },
        { name: "Retrenchment cost as % of wages, Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p66", "p67", "p68", "p69", "p70"] },
        { name: "Retrenchment cost as % of wages, Senior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p71", "p72", "p73", "p74", "p75"] },
        { name: "Retrenchment cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p76", "p77", "p78", "p79", "p80"] },
        { name: "Paycut of top management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p81", "p81", "p81", "p81", "p81"] },
        { name: "Paycut of senior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p82", "p82", "p82", "p82", "p82"] },
        { name: "Paycut of junior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p83", "p83", "p83", "p83", "p83"] },
        { name: "Projected voluntary attrition rate %", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p84", "p85", "p86", "p87", "p88"] },
        { name: "Recruitment agency cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p89", "p90", "p91", "p92", "p93"] },
        { name: "Recruitment agency cost as % of wages, Senior and Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p94", "p95", "p96", "p97", "p98"] }
      ]
    },
    {
      status: 'active',
      title: "Product & Engineering",
      id: 'productengg',
      tabledata: [
        { name: "Work capacity projected, hours", value: 0, tabname: 'market', cell: ["", "p102", "p103", "p104", "p105", "p106"] },
        { name: "Work capacity available, hours", value: 0, tabname: 'market', cell: ["", "p107", "p108", "p109", "p110", "p111"] },
        { name: "Span ratio of junior to senior management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p112", "p113", "p114", "p115", "p116"] },
        { name: "Span ratio of senior to top management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p117", "p118", "p119", "p120", "p121"] },
        { name: "Retrenchment cost as % of wages, Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p122", "p123", "p124", "p125", "p126"] },
        { name: "Retrenchment cost as % of wages, Senior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p127", "p128", "p129", "p130", "p131"] },
        { name: "Retrenchment cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p132", "p133", "p134", "p135", "p136"] },
        { name: "Paycut of top management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p137", "p137", "p137", "p137", "p137"] },
        { name: "Paycut of senior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p138", "p138", "p138", "p138", "p138"] },
        { name: "Paycut of junior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p139", "p139", "p139", "p139", "p139"] },
        { name: "Projected voluntary attrition rate %", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p140", "p141", "p142", "p143", "p144"] },
        { name: "Recruitment agency cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p145", "p146", "p147", "p148", "p149"] },
        { name: "Recruitment agency cost as % of wages, Senior and Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p150", "p151", "p152", "p153", "p154"] }
      ]
    },
    {
      status: 'active',
      title: "Customer Success",
      id: 'customersuccess',
      tabledata: [
        { name: "Work capacity projected, hours", value: 0, tabname: 'market', cell: ["", "p158", "p159", "p160", "p161", "p162"] },
        { name: "Work capacity available, hours", value: 0, tabname: 'market', cell: ["", "p163", "p164", "p165", "p166", "p167"] },
        { name: "Span ratio of junior to senior management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p168", "p169", "p170", "p171", "p172"] },
        { name: "Span ratio of senior to top management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p173", "p174", "p175", "p176", "p177"] },
        { name: "Retrenchment cost as % of wages, Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p178", "p179", "p180", "p181", "p182"] },
        { name: "Retrenchment cost as % of wages, Senior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p183", "p184", "p185", "p186", "p187"] },
        { name: "Retrenchment cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p188", "p189", "p190", "p191", "p192"] },
        { name: "Paycut of top management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p193", "p193", "p193", "p193", "p193"] },
        { name: "Paycut of senior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p194", "p194", "p194", "p194", "p194"] },
        { name: "Paycut of junior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p195", "p195", "p195", "p195", "p195"] },
        { name: "Projected voluntary attrition rate %", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p196", "p197", "p198", "p199", "p200"] },
        { name: "Recruitment agency cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p201", "p202", "p203", "p204", "p205"] },
        { name: "Recruitment agency cost as % of wages, Senior and Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p206", "p207", "p208", "p209", "p210"] }
      ]
    },
    {
      status: 'active',
      title: "Design & Communication",
      id: 'designcomm',
      tabledata: [
        { name: "Work capacity projected, hours", value: 0, tabname: 'market', cell: ["", "p214", "p215", "p216", "p217", "p218"] },
        { name: "Work capacity available, hours", value: 0, tabname: 'market', cell: ["", "p219", "p220", "p221", "p222", "p223"] },
        { name: "Span ratio of junior to senior management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p224", "p225", "p226", "p227", "p228"] },
        { name: "Span ratio of senior to top management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p229", "p230", "p231", "p232", "p233"] },
        { name: "Retrenchment cost as % of wages, Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p234", "p235", "p236", "p237", "p238"] },
        { name: "Retrenchment cost as % of wages, Senior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p239", "p240", "p241", "p242", "p243"] },
        { name: "Retrenchment cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p244", "p245", "p246", "p247", "p248"] },
        { name: "Paycut of top management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p249", "p249", "p249", "p249", "p249"] },
        { name: "Paycut of senior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p250", "p250", "p250", "p250", "p250"] },
        { name: "Paycut of junior management as % of wages", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p251", "p251", "p251", "p251", "p251"] },
        { name: "Projected voluntary attrition rate %", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p252", "p253", "p254", "p255", "p256"] },
        { name: "Recruitment agency cost as % of wages, Top Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p257", "p258", "p259", "p260", "p261"] },
        { name: "Recruitment agency cost as % of wages, Senior and Junior Management", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p262", "p263", "p264", "p265", "p266"] }
      ]
    },
    {
      status: 'active',
      title: "General Information",
      id: 'generalinfo',
      tabledata: [
        { name: "Rate hike of new recruit over the average wages, %", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p270", "p271", "p272", "p273", "p274"] },
        { name: "Maintainance cost of tool as % of investment", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p275", "p275", "p275", "p275", "p275"] },
        { name: "Number of hours an employee work in a period", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p276", "p276", "p276", "p276", "p276"] },
        { name: "Budget carry forward penalty as % of budget run - over", value: 0, tabname: 'hrmgameperioddata', cell: ["", "p277", "p278", "p279", "p280", "p281"] }
      ]
    }
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private cdr: ChangeDetectorRef) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);
              this.result = data.resultList[0].market;
              if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].hrmGameCM.hrmgameperioddata[this.periodcellvalue[i]];
              }
              this.numberofattempts = data.resultList[0].attempt;

              for (let i = 0; i < this.optionalCase.length; i++) {
                const caseStatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[this.optionalCase[i]];
                const index = this.statusMapping[this.optionalCase[i]];
                if (index !== undefined) {
                  this.tableData[index].status = (caseStatus === 'active') ? 'active' : 'inactive';
                }
              }
              // Find the `parameters` object
              const parameters = this.tableData.find(item => item.id === 'parameters');

              if (parameters) {
                const statusRowMap = {
                  productengstatus: 'Product & Engineering division budget, k INR.',
                  customersuccessstatus: 'Customer Success division budget, k INR.',
                  designcommunicationstatus: 'Design & Communication division budget, k INR'
                };

                Object.entries(statusRowMap).forEach(([statusKey, rowName]) => {
                  if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[statusKey] === 'inactive') {
                    const indexToRemove = parameters.tabledata.findIndex(row => row.name === rowName);
                    if (indexToRemove !== -1) {
                      parameters.tabledata.splice(indexToRemove, 1);
                    }
                  }
                });
              }


              // Trigger change detection to update activeItems
              this.cdr.detectChanges();

              this.checkloading = false;

            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  get activeItems() {
    return this.tableData.filter(item => item.status !== 'inactive');
  }

  containsPercentage(inputString: string): boolean {
    return inputString.includes('%');
  }



  openDialog(): void {
    this.dialog.open(HrmfintechFoodforthoughtComponent, {
      data: {},
    });
  }

}

