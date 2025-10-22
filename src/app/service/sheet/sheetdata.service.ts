import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { environment as _env } from '../../../environments/environment';
import { LoginService } from '../auth/login.service';
import { ApiService } from '../backendgameapi/api.service';
@Injectable({
  providedIn: 'root'
})
export class SheetdataService {
  private _url = _env.apiUrl
  consumer_excel_heading = [["DEMOGRAPHICS"], ["OTHERS"], ["PUBLISHING"], ["COMMUNICATION"], ["MARKET SHARE"], ["PAYING CUSTOMER"]]


  reportValue: any = [];
  attemptreport: any = [];
  excelalldata: any = [];
  consumerexcelformat: any = [];
  greencellcolor: any = {}
  redcellcolor: any = {}
  yellowcellcolor: any = {}
  situational: any = {}
  social: any = {};
  channel: any = {};
  headingcrm: any = [];

  currentratio: number[] = [17.39, 14.25, 30.45];
  acidtestratio: number[] = [14.83, 11.11, 28.27];
  cellname = [
    'f9',
    'f10',
    'f11',
    'f12',
    'f13',
    'f14',
    'f15',
    'f16',
    'f17',
    'f18',
    'f19',
    'f20',
    'f21',
    'f22',
    'f23',
    'f24',
    'f25',
    'f26',
    'f27',
    'f28',
  ];
  // businessbasiccolname: any = [];
  // consumercolname:any = [];
  // logisticscolname:any = [];
  // changemanagementcolname:any = [];
  // fsacolname:any = [];
  excelformat: any = [];
  businessbasiccolname = ["Location", "Licensing & Regulation", "Demand Tea Cups per day",
    "Interior", "Licensing & Regulation", "Demand Tea Cups per day", "Product Mix", "Procurement Vendor",
    "Point of Sale", "Security", "Music & Wifi", "Price per cup of tea, INR", "Monthly Promotion Budget, INR",
    "Social Media Campaign", "Local Advertising Campaign", "Collaboration Campaign", "Service", "Revenue",
    "Operational Cost", "Depreciation", "Profit", "Rent", "Compliance", "Maintenance", "Raw Material Purchase",
    "Service", "Interest", "Promotion", "Total", "Initial Cash", "Interior", "Equipment", "Technology", "Cash Outflow",
    "Borrowings", "Margin, %", "Sales Forecasting Error, %", "Location, %", "Demand, %", "Investment, %", "Marketing, %"
  ]
  consumercolname = ["Age", "Location", "Gender", "Income Class", "Language 1", "Language 2", "Language 3",
    "Language 4", "Genre", "Social Element 1", "Social Element 2", "Social Element 3"
    , "Lifestyle Element", "Communication", "Channel 1", "Channel 2", "Channel 3",
    "Publishing", "Monetization", "Ads Network", "Banner Ads", "Rewarded Ads",
    "Interstitial Ads", "Interactive Ads", "Situational Element 1", "Situational Element 2",
    "Market Share", "Paying Customers", "Number of paying customers", "Number of users",
    "Target", "Conceptualizing", "Crafting"
  ]
  logisticscolname = ["Truck 1", "Truck 2", "Truck 3", "Truck 1, Optimization",
    "Truck 2, Optimization", "Truck 3, Optimization", "Unison Limited",
    "Promton Incorporation", "Fix Corporate", "eCom Limited", "Warehouse Upgrade 1",
    "Warehouse Upgrade 2", "Route", "Technology 1", "Technology 2",
    "Small Trucks", "Open Body Trucks", "Covered Container", "Rail Trips", "Air Trips",
    "Small Trucks, Optimization", "Open Body Trucks, Optimization", "Covered Container, Optimization",
    "Rail, Optimization", "Air, Optimization", "Trucks", "Rail", "Air", "Unison Limited", "Promton Incorporation",
    "Fix Corporate", "eCom Limited", "Unison Limited, docks", "Promton Incorporation, docks",
    "Fix Corporate, docks", "eCom Limited, docks", "Unison Limited", "Fuel Cost", "Fleet Wages Cost",
    "Contract Wage Cost", "Warehouse Technology Cost", "Under Utilization Opportunity Cost", "Total Cost",
    "Fuel Cost", "Fleet Wages Cost", "Contract Wages Cost", "Technology Cost", "Other Cost", "Other Costs", "Total Cost",
    "Logistics Cost, INR", "Revenue,INR", "Effectiveness", "TAT obligation met",
    "Inbound", "Warehouse", "Routes & Technology", "Outbound"
  ]
  changemanagementcolname = ["Organization Wide Intervention", "Individual Activity Intervention",
    "Individual Actvity, Kabir", "Individual Actvity, Anne", "Individual Actvity, Rajas",
    "Individual Actvity, Priya", "Individual Actvity, Neha", "Individual Actvity, Rajat",
    "Group Activity Intervention", "Group Actvity, Kabir", "Group Actvity, Anne", "Group Actvity, Rajas"
    , "Group Actvity, Priya", "Group Actvity, Neha", "Group Actvity, Rajat", "Kabir", "Anne",
    "Rajas", "Priya", "Neha", "Rajat", "Awareness Level %", "Motivation Level %",
    "Commitment Level %", "Performance Level %", "Budget Allocated", "Remaining budget, Awareness stage",
    "Remaining budget, Motivation stage", "Remaining budget, Commitment stage"
  ]

  promotioncolname = [
    "Website, Budgeting, %", "Social Commerce, Budgeting, %", "Modern Trade, Budgeting, %",

    "Retailers, Budgeting, %",
    "Facebook, Budgeting, %",
    "Instagram, Budgeting, %",
    "Twitter, Budgeting, %",
    "LinkedIn, Budgeting, %",
    "YouTube, Budgeting, %",
    "Website",
    "Social Commerce, Community Engagement Series",
    "Social Commerce, Flash Sales and Trending Topics",
    "Social Commerce, Visual Storytelling and Influencer Collaborations",
    "Social Commerce, Expert Insights and Premium Skincare Journey",
    "Social Commerce, Tutorial Series and Influencer Reviews",
    "Modern Trade",
    "Retailers",
    "Website, A/B Testing",
    "Social Commerce, A/B Testing",
    "Modern Trade & Retailers, A/B Testing",
    "Online Channel, Margin, %",
    "Modern Trade Channel, Margin, %",
    "Retailers Channel, Margin, %",
    "Product Focus, Acne Face Cream",
    "Product Focus, Apple Cider Face Wash",

    "Website",
    "Social Commerce",
    "Modern Trade",
    "Retailers",

    "Website",
    "Social Commerce",
    "Modern Trade",
    "Retailers",

    "Website",
    "Social Commerce",
    "Modern Trade",
    "Retailers",


    "Communication Mix Cost",
    "Campaign Creation Cost",
    "A/B Testing Cost",
    "Channel Cost",
    "Total Cost",


    "Revenue",
    "Variable Cost",
    "Gross Profit",
    "Promotion Cost",
    "Operating Profit/Loss",


    "Operating Margin, %",
    "ROAS, %",


    "Communication Mix, %",
    "Campaigns, %",
    "Channels, %",
  ]

  fsacolname = ["Current Ratio, Electra Motors", "Current Ratio, Titan Motors",
    "Current Ratio, GreenSpeed Technologies", "Acid-test Ratio, Electra Motors", "Acid-test Ratio, Titan Motors",
    "Acid-test Ratio, GreenSpeed Technologies", "Cash Ratio, Electra Motors", "Cash Ratio, Titan Motors",
    "Cash Ratio, GreenSpeed Technologies", "Debt-to-Equity Ratio, Electra Motors", "Debt-to-Equity Ratio, Titan Motors",
    "Debt-to-Equity Ratio, GreenSpeed Technologies", "Debt Ratio, Electra Motors",
    "Debt Ratio, Titan Motors", "Debt Ratio, GreenSpeed Technologies", "Interest Coverage Ratio, Electra Motors",
    "Interest Coverage Ratio, Titan Motors", "Interest Coverage Ratio, GreenSpeed Technologies",
    "Asset Turnover Ratio, Electra Motors", "Asset Turnover Ratio, Titan Motors", "Asset Turnover Ratio, GreenSpeed Technologies",
    "Inventory Turnover Ratio, Electra Motors",
    "Inventory Turnover Ratio, Titan Motors", "Inventory Turnover Ratio, GreenSpeed Technologies",
    "Days Sales in Inventory Ratio, Electra Motors", "Days Sales in Inventory Ratio, Titan Motors", "Days Sales in Inventory Ratio, GreenSpeed Technologies",
    "Gross Margin, Electra Motors", "Gross Margin, Titan Motors", "Gross Margin, GreenSpeed Technologies",
    "Operating Margin, Electra Motors", "Operating Margin, Titan Motors",
    "Operating Margin, GreenSpeed Technologies", "Return on Asset, Electra Motors",
    "Return on Asset, Titan Motors", "Return on Asset, GreenSpeed Technologies",
    "Return on Equity, Electra Motors", "Return on Equity, Titan Motors",
    "Return on Equity, GreenSpeed Technologies", "Book value per share, Electra Motors",
    "Book value per share, Titan Motors", "Book value per share, GreenSpeed Technologies",
    "Earnings per share, Electra Motors", "Earnings per share, Titan Motors",
    "Earnings per share, GreenSpeed Technologies", "Price-earning Ratio, Electra Motors",
    "Price-earning Ratio, Titan Motors", "Price-earning Ratio, GreenSpeed Technologies"
    , "Portfolio 1", "Portfolio 2", "Portfolio 3", "Portfolio 4", "Portfolio 5", "Portfolio 6",
    "Portfolio 7", "Portfolio 8", "Portfolio 9", "Portfolio 10",
    "Liquidity Ratio", "Leverage Ratio", "Efficiency Ratio", "Profitability Ratio",
    "Market Value Ratio", "Total Score",
    "Electra Motors, Potfolio Allocation INR", "Titan Motors, Potfolio Allocation INR",
    "GreenSpeed Technologies, Potfolio Allocation INR", "Electra Motors, Company Owned",
    "Titan Motors, Company Owned", "GreenSpeed Technologies, Company Owned",
    "Portfolio Name", "Stakeholder Views"
  ]
  salestargetcolname = ['Sales Target, Modern Trade', 'Sales Target, Retail', 'Sales Target, HoReCa',
    'Personnel, Modern Trade', 'Personnel, Retail', 'Personnel, HoReCa', 'Compensation Modern Trade, Business background',
    'Compensation Modern Trade, Non business background', 'Compensation Retail, Business background',
    'Compensation Retail, Non business background', 'Compensation HoReCa, Business background',
    'Compensation HoReCa, Non business background', 'Bonus %, Business background', 'Bonus %, Non business background',
    'Sales force Modern trade, Business background', 'Sales force Retail, Business background',
    'Sales force HoReCa, Business background', 'Sales Representative, Modern Trade %', 'Sales Representative, Retail %',
    'Sales Representative, HoReCa %', 'Key Account Manager, Modern Trade %', 'Key Account Manager, Retail %',
    'Key Account Manager, HoReCa %', 'Territory Sales Manager, Modern Trade %', 'Territory Sales Manager, Retail %',
    'Territory Sales Manager, HoReCa %', 'Gung Ho, Modern Trade %', 'Gung Ho, Retail %', 'Gung Ho, HoReCa %',
    'Buddy,  Modern Trade %', 'Buddy, Retail %', 'Buddy, HoReCa %', 'Consultative,  Modern Trade %', 'Consultative, Retail %',
    'Consultative, HoReCa %', 'Involvement in Customers', 'Sales Strategy', 'Sales and Marketing Integration',
    'Sales Personnel Support', 'Best individual performer', 'Best team effort', 'Friendliest Coworker',
    'Value Based Sales Tactics', 'Trust Sales', 'Product Management', 'After Sales Concept', 'Relationship Skills',
    'Key Account Management', 'Adaptive Selling Style', 'Negotiation Style', 'Closing a Sale', 'Efficient Working Method',
    'Sales Process Innovation', 'Process Management', 'Modern Trade', 'Retail', 'HoReCa', 'Easy Living',
    'Experiencers', 'Headonistic', 'Thinkers', 'Coffino', 'Nutty', 'Fruitful', 'Diblo', 'Wages Cost', 'Hiring/Retrenchment Cost',
    'Recognition Cost', 'Sales Development Cost', 'Sales Training Cost', 'Sales Process Cost', 'Total Sales Cost',
    'Revenue', 'Variable Cost', 'Gross Profit', 'Sales & Channel Cost', 'Operating Profit/Loss', 'Modern Trade',
    'Retail', 'HoReCa', 'Sales Planning', 'Sales Composition', 'Sales Development',];

  portfoliocolname = ["Phase 1 Allocation", "Indian Stocks", "Indian Commodity",
    "Hybrid Fund", "Corporate Bond", "PSU Bond", "US Stocks", "Cash Equivalents", "Phase 2 Allocation",
    "Phase 3 Allocation", "Portfolio Return", "Portfolio Risk", "Portfolio Beta", "Treynor Measure",
    "Sharpe Ratio", "Jenson's Alpha", "CAPM", "Fama Measure", "Security 1 - Indian Stocks ",
    "Security 2 - Commodities", "Security 3 - Hybrid Fund", "Security 4 - Corporate Bond",
    "Security 5 - PSU Bond", "Security 6 - US Stocks", "Security 7 - Cash Equivalents", "Start",
    "End", "Market Return", "Market Risk",
    "Return over (+)/below (-) market ", "Risk over (+)/below (-) market", "Portfolio Management"];

  valuechaincolname = ["Estimated Market Growth %", "Estimated Market Share %", "In-house Capacity Utilization %",
    "Outsourcing Capacity Utilization %", "Additional Machinery units", "Component Supplier 1", "Component Supplier 2",
    "Transporter 1", "Transporter 2", "Feature Index", "Promotion, mn INR", "Pricing, INR", "Online Channel Margin %",
    "Speciality Stores Channel Margin %", "Retail Channel Margin %", "Predictive Analytics", "Subsciption Based Services",
    "Blockchain Integration", "Remote Diagnosis", "AI-Powered Personalization", "Long-term Borrowings, mn INR",
    "Cash at start of the period", "Cash from operations", "Cash from investment", "Cash from financing", "Cash at end of the period",
    "Market Size", "Demand", "Actual Sales", "Capacity", "Closing Inventory", "Opportunity loss", "Revenue", "Variable Cost", "Gross Profit/Loss",
    "Component Cost", "Transportation & Inventory Cost", "Channel Cost", "Promotion Cost", "Services & Innovation Cost", "EBITDA",
    "Depreciation", "EBIT", "Interest Cost", "Profit before taxes", "Tax", "Profit/Loss", "Market Share %", "Margin %", "Emergency Borrowing, mn INR",
    "Demand", "Production", "Marketing", "Finance"
  ];
  cvpanalysiscolname = ["Jeans Demand, units", "Jeans Price, INR", "Jeans Advertising, mn INR", "Jeans Quality Control, mn INR",
    "Top Demand, units", "Top Price, INR", "Top Advertising, mn INR", "Top Quality Control, mn INR", "Number of Machinery",
    "Jeans Capacity Allocation, %", "Top Capacity Allocation, %", "Demand", "Sales", "Production", "Closing Inventory", "Stockout",
    "Price per unit", "Variable cost per unit", "Contribution per unit", "Breakeven sales, mn INR", "Breakeven sales, units",
    "Margin of safety, units", "Revenue", "Production cost", "Gross Profit/Loss", "Advertising", "Quality", "Inventory holding cost",
    "Administration", "EBITDA", "Depreciation", "Operating Profit/Loss", "Contribution Ratio, %", "Operating Margin, %", "Market Share, %",
    "Operating Margin", "Market Share", "Operating Profit/Loss, mn INR", "Marketing budge, %", "Production budget, %"

  ]
  accountingcolname = [
    "Balance Sheet", "Cash", "Accounts receivable", "Inventory", "Prepaid expenses", "Other current assets",
    "Machinery & equipment", "Furniture & fixtures", "Leasehold improvements", "Land & buildings", "Other fixed assets",
    "Intangible assets", "Goodwill", "Deposits", "Other assets", "Accounts payable", "Accrued expenses", "Unearned revenue",
    "Notes, short-term", "Current part of long-term debt", "Bank loans payable", "Notes payable to stockholders",
    "LESS: Short-term portion", "Other long term debt", "Invested capital", "Retained earnings - beginning",
    "Retained earnings - current", "Income Statement", "Revenue", "Cost of good sold", "Sales cost",
    "Administration cost", "Bad debts", "Depreciation & Amortization", "Interest Expense", "Tax", "Cash Flow Statement",
    "Opening balance", "Operations, Cash In", "Operations, Cash Out", "Investment, Cash In", "Investment, Cash Out",
    "Financing, Cash In", "Financing, Cash Out", "Opportunities", "Investment in Research and Development",
    "Expansion of Manufacturing Facilities", "Debt Restructuring", "Cost Reduction Initiatives",
    "Introduction of Premium Product Line", "Employee Training and Development", "Working Capital Optimization",
    "Equipment Lease Financing", "Exploring Export Opportunities", "Balance Sheet",
    "Income Statement", "Cash Flow Statement", "Investment ", "Total Score", "1-Year Value Creation",
    "3-Year Value Creation", "Accounts", "Exploring Export Opportunities", "Equipment Lease Financing",
    "Working Capital Optimization", "Employee Training and Development", "Introduction of Premium Product Line",
    "Cost Reduction Initiatives", "Debt Restructuring", "Expansion of Manufacturing Facilities",
    "Investment in Research and Development"

  ];
  accountingarabiccolname = [
    "Balance Sheet", "Cash", "Accounts receivable", "Inventory", "Prepaid expenses", "Other current assets",
    "Machinery & equipment", "Furniture & fixtures", "Leasehold improvements", "Land & buildings", "Other fixed assets",
    "Intangible assets", "Goodwill", "Deposits", "Other assets", "Accounts payable", "Accrued expenses", "Unearned revenue",
    "Notes, short-term", "Current part of long-term debt", "Bank loans payable", "Notes payable to stockholders",
    "LESS: Short-term portion", "Other long term debt", "Invested capital", "Retained earnings - beginning",
    "Retained earnings - current", "Income Statement", "Revenue", "Cost of good sold", "Sales cost",
    "Administration cost", "Bad debts", "Depreciation & Amortization", "Interest Expense", "Tax", "Cash Flow Statement",
    "Opening balance", "Operations, Cash In", "Operations, Cash Out", "Investment, Cash In", "Investment, Cash Out",
    "Financing, Cash In", "Financing, Cash Out", "Opportunities", "Investment in Research and Development",
    "Expansion of Manufacturing Facilities", "Debt Restructuring", "Cost Reduction Initiatives",
    "Introduction of Premium Product Line", "Employee Training and Development", "Working Capital Optimization",
    "Equipment Lease Financing", "Exploring Export Opportunities", "Balance Sheet",
    "Income Statement", "Cash Flow Statement", "Investment ", "Total Score", "1-Year Value Creation",
    "3-Year Value Creation", "Accounts", "Exploring Export Opportunities", "Equipment Lease Financing",
    "Working Capital Optimization", "Employee Training and Development", "Introduction of Premium Product Line",
    "Cost Reduction Initiatives", "Debt Restructuring", "Expansion of Manufacturing Facilities",
    "Investment in Research and Development"

  ];

  pricingcolname: any = ["Promotion offered", "Service offered to flyer", "Price per seat, INR",
    "Adapt", "Service offered to flyer", "Price per seat, INR ", "Innovate", "Initiate", "Total sales",
    "Average pricing", "Operating Profit/Loss", "Promotion cost", "Fixed cost", "Gross profit", "Variable cost",
    "Revenue", "Cancellation Rate %", "Margin %", "Unutilized capacity %", "Pricing"
  ];

  mergeracquisitioncolname: any = [
    "Target Firm", "Premium %, over current valuation", "Cash", "Loans", "Stock", "Profile", "Synergy Benefits", "Expected Financial Benefit",
    "Strategic Importance, Max 10", "Cultural Integration Ease, Max 10", "Cash, INR million", "Loan, INR million", "Stock, INR million",
    "Target Stake", "MAI Stake", "BID Price, INR million", "ASK - BID Spread, INR million", "Offer Status", "Comments", "Likelihood of Board Approval",
    "Assessment", "Negotiation", "Financing"
  ];

  Hrpcolname: any = [
    "Sales & Marketing", "Logistics & Supply Chain", "Design & Production", "Technical", "Customer Experience", "Administration", "Online Job Portals",
    "Campus Recruitment", "Employee Referral Programs", "Social Media and Company Website", "Recruitment Agencies and Headhunters", "Sales & Marketing, New Joinee Hike %",
    "Logistics & Supply Chain, New Joinee Hike %", "Design & Production, New Joinee Hike %", "Technical, New Joinee Hike %", "Customer Experience, New Joinee Hike %",
    "Administration, New Joinee Hike %", "Sales & Marketing, Existing Employee Hike %", "Logistics & Supply Chain, Existing Employee Hike %", "Design & Production, Existing Employee Hike %",
    "Technical, Existing Employee Hike %", "Customer Experience, Existing Employee Hike %", "Administration, Existing Employee Hike %", "Digital Marketing Mastery",
    "Advanced E-commerce Analytics", "Augmented Reality (AR) in Fashion E-commerce", "Customer Service Excellence", "Sustainable Fashion and Ethical Production", "Remote Work Flexibility Policy",
    "Continuous Learning and Development Policy", "Comprehensive Health and Wellness Policy", "Inclusive and Diverse Hiring Policy", "Existing employees", "New joinees", "Contract employees", "Total employees", "Incremental salary, existing employees",
    "New hires, salary", "Branding", "Training", "Policies", "Total", "Employee Satisfaction Score", "Average time to fill position, days", "Average efficiency across organization", "Employees participation in training", "Cost per employee, k INR",
    "Recruitment metrics, %", "Demand Forecasting", "Supply Forecasting", "Analysis & Planning", "Implementation",
  ]

  designThinkingcolname: string[] = [
    "Target: Battery Life, Days", "Target: Affordability, INR", "Target: Localization, %", "Idea 1", "Idea 2", "Idea 3", "Product 1",
    "Battery Life", "Design & Aesthetics", "Localized Language Support", "Seamless Syncing", "Water Resistance", "Customizable Watch Faces",
    "Unique Health Features", "Indian Payment System Integration", "Product 2", "Product 3", "Product Launch", "Price, INR", "Advertising, INR Million",
    "Warranty Period", "Distributor/Wholesaler, INR Million", "E-commerce, INR Million", "Telecom Partnerships, INR Million", "Direct-to-consumer, INR Million",
    "Revenue", "Variable Cost", "Gross Profit", "Production Line Cost", "Administration Cost", "Market Research Cost", "Advertising Cost", "Channel Investment Cost",
    "Total Fixed Cost", "Operating Profit/Loss", "Attractiveness Score", "Market Share, %", "Units Sold", "Operating Margin, %", "Design", "Execute"
  ];

  crmgamecolname: string[] = [
    "Lead 1", "Lead 2", "Lead 3", "Lead 4", "Lead 5", "Lead 6", "Lead 7", "Lead 8", "Lead 9", "Lead 10", "Lead 11", "Lead 12", "Lead 13", "Lead 14", "Lead 15",
    "Lead 16", "Lead 17", "Lead 18", "Lead 19", "Lead 20", "Lead 21", "Lead 22", "Lead 23", "Lead 24", "Lead 25", "Phone Calls", "Personalized Email", "Targeted Content",
    "Informative Content", "Case Studies", "Success Stories", "Educational Content", "Newsletter", "Occasional Check-ins",
    "High Priority, Follow-up Frequency, day", "High Priority, Follow-up Timeline, week", "Medium Priority, Follow-up Frequency, day", "Medium Priority, Follow-up Timeline, week",
    "Low Priority, Follow-up Frequency, day", "Low Priority, Follow-up Timeline, week", "Cross Selling & Upselling stage", "Social Media Engagement Challenge",
    "Personalized Email Newsletter", "Webinar Series Invitation", "Exclusive Product Demo", "Onboarding and Implementation Support",
    "Ongoing Technical Support", "Customer Relationship Management", "Feedback Collection and Product Improvement", "Issue Resolution and Escalation",
    "Allocated hours, Customer enhancement", "Allocated hours, Lead management", "Automated Data Entry and Integration", "Cloud-Based CRM Solution",
    "Self-Service Customer Portal", "AI-Powered Chatbots for Customer Support",
    "Process Standardization and Documentation", "High Priority", "Medium Priority", "Low Priority", "Allocated", "Required", "Surplus (+)/Deficit (-)",
    "Previous Period CLV", "Expected New CLV", "Increment (+)/Reduction (-) CLV", "Chances of achieving Increment (+)/Reduction (-)", "Expected New Value",
    "Resource Cost", "Streamlining Cost", "Total Cost", "Value Creation", "Cross selling & upselling opportunities", "Customer service response rate",
    "Average resolution time", "Pipeline Velocity, days", "Lead", "Communication", "Process"
  ];

  innovationgamecolname = [
    "Product", "Legal Compliance", "Regulatory Compliance", "Trademarks & Copyrights", "Technology Patent", "Open Source Compliance",
    "Industry Standards Compliance", "No. of Developers", "No. of Industry Expert", "No. of Marketeer", "Interactive Educational Modules",
    "Virtual Field Trips", "Language Learning Adventures", "STEM Exploration Labs", "Creative Storytelling Workshops", "Historical Time Travel Adventures",
    "In-App Guidance", "User Onboarding", "Interactive Help Center", "Customizable User Profiles", "Community Forums", "Multi-Platform Compatibility",
    "Analytics and Reporting", "Customization Options", "Offline Access", "Interactive Educational Modules", "Virtual Field Trips",
    "Language Learning Adventures", "STEM Exploration Labs", "-", "-", "Basic package price per user per year, k INR", "Standard package price per user per year, k INR",
    "Premium package price per user per year, k INR", "Promotion, k INR", "Educational Institutions Partnership", "Online Educational Platforms",
    "Retail Bookstores and Educational Supply Stores", "Publishing House Collaboration", "Educational Technology Company Partnership",
    "Government Educational Initiatives", "Edutainment Content Creator Alliance", "Nonprofit Organization Sponsorship", "Technology Adoption",
    "Continuous Improvement", "Basic Package", "Standard Package", "Premium Package", "Total Sales", "Beginning cash", "Expenses",
    "Cash infusion", "Ending cash", "Revenue", "Compliance", "Resource", "Promotion", "Distribution", "Collaboration", "Technology",
    "Total Cost", "Profit/Loss, k INR", "Product", "Development time, months", "Quality score %", "Average price, k INR", "Monthly burn, k INR",
    "Runaway, months", "Product", "Resources", "Marketing", "Collaboration", "Feature not selected", "Continous Improvement"
  ];

  orderingbasicscolname = [
    'Phase 1', 'Order Quantity, units', 'Reorder Level, units', 'Phase 2', 'Order Quantity, units', 'Reorder Level, units',
    'Demand', 'Stockout', 'Back order', 'Ordering', 'Holding', 'Stockout', 'Back ordering', 'Service level', 'Cost, INR', 'Ordering & Inventory'
  ];
  stpgamecolname = [
    "Phase 1", "Product 1 Launch", "Design", "Performance", "Battery Life", "Premium Camera", "Extra Memory",
    "Premium Display", "Durable Screen", "Security", "Projected Sales, Mn units", "Price, INR", "Product 2 Launch",
    "Promotion, Mn INR", "Packaging", "Repairability & Services", "Recycling", "Retail", "Online", "Specialist Stores",
    "Phase 2", "Phase 3", "TC", "TG", "IT", "NG", "ST", "EM", "TC P1", "TC P2", "TG Alpha", "TG Beta", "TG Gamma",
    "IT Delta", "IT Epsilon", "NG Zeta", "NG Theta", "ST Sigma", "EM Omega", "Revenue", "Variable Cost", "Gross Profit", "Production Line Cost + Update Cost",
    "Administration Cost", "Market Research Cost", "Promotion Cost", "Channel Cost", "Packaging Cost", "Recycling Cost",
    "Repairability Cost", "Operating Profit/Loss", "Market Share", "Revenue, Mn INR", "Operating Profit/Loss, Mn INR", "Operating Margin", "Positioning"
  ];





  constructor(private http: HttpClient,
    private _login: LoginService,
    private _api: ApiService) { }
  downloadReportforgame(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
    coursedetailsid: number) {
    let body =
    {
      email: email,
      caller: "student",
      usermode: "student",
      searchtype: "report",
      searchcontent: "",
      coursecode: coursecode,
      studentsectionid: studentsectionid,
      attempt: noofattempt,
      coursename: coursename,
      coursedetailsid: coursedetailsid

    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "businessbasic") {
            this.createExcelReportforBusinessbasic(data);

          } else if (gamename == "consumer") {
            this.createExcelReportforConsumernewversion(data);

          } else if (gamename == "logistics") {
            this.createExcelReportforLogisticsnewversion(data);

          } else if (gamename == "changemanagement") {
            this.createExcelReportforChangemanagement(data);

          } else if (gamename == "fsa") {
            this.createExcelReportforFinancialAnalysis(data);

          } else if (gamename == "promotion") {
            this.createExcelReportforPromotionssigment(data);

          } else if (gamename == "salestarget") {
            this.createExcelReportforSalestarget(data);

          }
          else if (gamename == "portfolio") {
            this.createExcelReportforPortfoliomanagement(data);

          }
          else if (gamename == "valuechain") {
            this.createExcelReportforvaluechain(data);

          }
          else if (gamename == "cvpanalysis") {
            this.createExcelReportforCvpanalysis(data);

          } else if (gamename == "accountinggame") {
            this.createExcelReportforAccounting(data);

          } else if (gamename == "accountingarabic") {
            this.createExcelReportforAccountingArabic(data);

          }
          else if (gamename == "pricinggame") {
            this.createExcelReportforPricing(data);

          }
          else if (gamename == "mergersacquisition") {
            this.createExcelReportformergersacquisition(data);

          }
          else if (gamename == "hrplanning") {
            this.createExcelReportforhrpplanning(data);
          }
          else if (gamename == "designthinking") {
            this.createExcelReportfordesignthinking(data);
          }
          // else if (gamename == "crmgame") {
          //   this.createExcelReportforcrm(data);
          // }
          else if (gamename == "innovation") {
            this.createExcelReportforinnovation(data);
          }
          else if (gamename == "orderingbasics") {
            this.createExcelReportfororderingbasics(data);
          }
          else if (gamename == "stpgame") {
            this.createExcelReportforstpGame(data);

          }
        }
      })

  }

 

  downloadReportfoVoiceBased(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string, coursename: string,
    coursedetailsid: number) {
    let body =
    {
      email: email,
      caller: "student",
      usermode: "student",
      searchtype: "report",
      searchcontent: "",
      coursecode: coursecode,
      studentsectionid: studentsectionid,
      attempt: noofattempt,
      coursename: coursename,
      coursedetailsid: coursedetailsid

    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "businessbasic") {
            this.createExcelReportforBusinessbasic(data);

          }
        }
      })

  }

  downloadReport(apiname: string, gamename: string, email: string, coursecode: string, studentsectionid: string, noofattempt: string) {
    let body =
    {
      email: email,
      caller: "student",
      usermode: "student",
      searchtype: "report",
      searchcontent: "",
      coursecode: coursecode,
      studentsectionid: studentsectionid,
      attempt: noofattempt,
    }

    this._api.fetchexceldata(apiname, body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (gamename == "Consumer") {
            this.createExcelReportforConsumer(data);
            // this.createExcelReportforBusinessbasic(data);

          }
          else if (gamename == "Logistics") {
            this.createExcelReportforLogistics(data);
          }


        }
      })
  }



  decimalvaluechoseForTAT(value: any) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return Number(value).toFixed(2);
    } else {
      return value;
    }
  }
  nodecimalvalueConvert(value: any) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return Number(value).toFixed(0);
    } else {
      return value;
    }
  }


  createExcelReportforConsumer(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.consumerexcelformat = [
        [],
        ["Attempt" + Number(i + 1)],
        [],
        ["", "DEMOGRAPHICS"],
        ['Age', data.resultList[i].w119],
        ['Target gender', data.resultList[i].w120],
        ["Language", data.resultList[i].w121, data.resultList[i].w122, data.resultList[i].w123, data.resultList[i].w124],
        [],
        ["", "OTHERS"],
        ["Income Group", data.resultList[i].w127],
        ["LifeStyle", data.resultList[i].w128],
        [],
        ["", "PUBLISHING"],
        ["Publisher", data.resultList[i].w131],
        ["Revenue", data.resultList[i].w133],
        ["Genre", data.resultList[i].w132],
        [],
        ["", "COMMUNICATION"],
        ["Messaging", data.resultList[i].w136],
        ["Channel", data.resultList[i].w137, data.resultList[i].w138, data.resultList[i].w139],
        [],
        ["", "MARKET"],
        ["Market Share", (Number(data.resultList[i].w103) * 100).toFixed(2) + "%"],
        ["Number of Customers downloaded", data.resultList[i].w115],
        ["Paying customers share", (Number(data.resultList[i].w108) * 100).toFixed(2) + "%"],
        ["Number of paying customers", data.resultList[i].w116]
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.createExcelSheetexceljs('consumerbehaviourreport', this.excelalldata, data.resultList.length);
  }

  createExcelReportforLogistics(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.consumerexcelformat = [
        [],
        ["Attempt" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["WAREHOUSE", ""],
        ["", "TAT"],
        ['Unison Ltd', this.decimalvaluechoseForTAT(data.resultList[i].v66)],
        ['Promton Inc', this.decimalvaluechoseForTAT(data.resultList[i].v67)],
        ["Fix Corporate", this.decimalvaluechoseForTAT(data.resultList[i].v68)],
        ["eCom Ltd.", this.decimalvaluechoseForTAT(data.resultList[i].v69)],
        [],
        ["Warehouse (WH)", "Cost, INR"],
        ["Fuel Cost", this.nodecimalvalueConvert(data.resultList[i].d73)],
        ["Fleet Wages Cost", this.nodecimalvalueConvert(data.resultList[i].d74)],
        ["Contract Wage Cost", this.nodecimalvalueConvert(data.resultList[i].d75)],
        ["Technology Cost", this.nodecimalvalueConvert(data.resultList[i].d76)],
        ["Under Utilization Opportunity Cost", this.nodecimalvalueConvert(data.resultList[i].d77)],
        ["Total Cost", this.nodecimalvalueConvert(data.resultList[i].d79)],
        [],
        ["Transportation", ""],
        [],
        ["Transportation (TP)", "Cost, INR"],
        ["Fuel Cost", this.nodecimalvalueConvert(data.resultList[i].d127)],
        ["Fleet Wages Cost", this.nodecimalvalueConvert(data.resultList[i].d128)],
        ["Contract Wage Cost", this.nodecimalvalueConvert(data.resultList[i].d129)],
        ["Technology Cost", this.nodecimalvalueConvert(data.resultList[i].d130)],
        ["Other Cost", this.nodecimalvalueConvert(data.resultList[i].d131)],
        ["Total Cost", this.nodecimalvalueConvert(data.resultList[i].d132)],
        [],
        ["Revenue, k INR ", ""],
        [],
        ["Trucks", this.nodecimalvalueConvert(data.resultList[i].d122)],
        ["Rail", this.nodecimalvalueConvert(data.resultList[i].d123)],
        ["Air", this.nodecimalvalueConvert(data.resultList[i].d124)],
        [],
        ["KPI", ""],
        [],
        ["Logistics Cost, k INR", this.nodecimalvalueConvert(data.resultList[i].c135)],
        ["Revenue, k INR", this.nodecimalvalueConvert(data.resultList[i].c136)],
        ["Effectiveness", (Number(data.resultList[i].c137) * 100).toFixed(0) + "%"],
        ["TAT (+ delay/ - early)", this.decimalvaluechoseForTAT(data.resultList[i].c138)],
        [],
        ["TAT", "", "", ""],
        [],
        ["", "Actual TAT", "Change", "Expected TAT"],
        ['Unison Ltd', this.decimalvaluechoseForTAT(data.resultList[i].k139), (Number(data.resultList[i].m139) * 100).toFixed(2) + "%", 8],
        ['Promton Inc', this.decimalvaluechoseForTAT(data.resultList[i].k140), (Number(data.resultList[i].m140) * 100).toFixed(2) + "%", 9],
        ["Fix Corporate", this.decimalvaluechoseForTAT(data.resultList[i].k141), (Number(data.resultList[i].m141) * 100).toFixed(2) + "%", 12],
        ["eCom Ltd.", this.decimalvaluechoseForTAT(data.resultList[i].k142), (Number(data.resultList[i].m142) * 100).toFixed(2) + "%", 5],

      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.createExcelSheetexceljs('logisticsreport', this.excelalldata, data.resultList.length);
  }

  createExcelSheetexceljs(gamename: string, exceldata: any, attempnumber: any) {
    //Create a workbook with a worksheet

    this.greencellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '90EE90' },
      bgColor: { argb: 'FF0000FF' }
    }
    this.redcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ff0000' },
      bgColor: { argb: 'FF0000FF' }
    }

    this.yellowcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' },
      bgColor: { argb: 'FF0000FF' }
    }

    let cellstyle = {
      name: 'Arial',
      size: 11,
      bold: true,
      bgColor: { argb: 'FF0000FF' }
    }

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('report');

    for (let i = 0; i < attempnumber; i++) {
      exceldata[i].forEach((d: any) => {
        let row = worksheet.addRow(d);

        // row.getCell(1).font = cellstyle;
        let sales = row.getCell(2);
        if ((sales.value == "DEMOGRAPHICS") || (sales.value == "OTHERS") || (sales.value == "PUBLISHING") ||
          (sales.value == "COMMUNICATION") || (sales.value == "MARKET") || (sales.value == "TAT") ||
          (sales.value == "Cost, INR") || (sales.value == "Actual TAT") || (sales.value == "Change") ||
          (sales.value == "Expected TAT") || (row.getCell(2).value == "Current Period")
        ) {
          row.font = cellstyle;
        }
        let logisvalue = row.getCell(1);
        if ((logisvalue.value == "WAREHOUSE") ||
          (logisvalue.value == "Transportation") || (logisvalue.value == "Revenue, k INR ") || (logisvalue.value == "KPI") ||
          (logisvalue.value == "TAT") ||
          (row.getCell(1).value == "Sales ") || (row.getCell(1).value == "Cost Indicators, INR ") ||
          (row.getCell(1).value == "Effectiveness, K INR ") || (row.getCell(1).value == "Personnel Turnover ") ||
          (row.getCell(1).value == "Attempt5") || (row.getCell(1).value == "Face Cream - Sales, k units ") || (row.getCell(1).value == "Face Wash - Sales, k units ") ||
          (row.getCell(1).value == "Email Campaign") || (row.getCell(1).value == "Subscribers") || (row.getCell(1).value == "ROAS") ||
          (row.getCell(1).value == "Cost, k INR")

        ) {
          row.font = cellstyle;
          row.eachCell((cell, number) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFFFFF00' },
              bgColor: { argb: 'FF0000FF' }
            }
          });
        }
        for (let i = 0; i < attempnumber; i++) {
          if ((row.getCell(1).value == "Attempt1") || (row.getCell(1).value == "Attempt2") ||
            (row.getCell(1).value == "Attempt3") || (row.getCell(1).value == "Attempt4") ||
            (row.getCell(1).value == "Attempt5") || (row.getCell(1).value == "Attempt6") ||
            (row.getCell(1).value == "Attempt7") ||
            (row.getCell(1).value == "Attempt8") || (row.getCell(1).value == "Attempt9") ||
            (row.getCell(1).value == "Attempt10")) {
            row.font = cellstyle;
            row.eachCell((cell, number) => {
              cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'D3D3D3' },
                bgColor: { argb: 'FF0000FF' }
              }
            });
          }

        }



      });
    }

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, gamename + '.xlsx');
    })
  }

  createExcelSheetexceljsForFSA(gamename: string, exceldata: any, attempnumber: any) {

    this.greencellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '90EE90' },
      bgColor: { argb: 'FF0000FF' }
    }
    this.redcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ff0000' },
      bgColor: { argb: 'FF0000FF' }
    }

    this.yellowcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' },
      bgColor: { argb: 'FF0000FF' }
    }

    let cellonename = ['Current Ratio', 'Acid-test Ratio', 'Cash Ratio', 'Debt to Equity Ratio', 'Debt Ratio',
      'Interest Coverage Ratio', 'Asset Turnover Ratio', 'Inventory Turnover Ratio', 'Days Sales in Inventory Ratio',
      'Gross Margin Ratio', 'Operating Margin Ratio', 'Return on Asset Ratio', 'Return on Equity Ratio',
      'Book value per share Ratio', 'Earnings per share Ratio', 'Price-earning Ratio']
    const value = [
      [17.39, 14.25, 30.45], [14.83, 11.11, 28.27], [13.52, 10.01, 26.88], [0.05, 0.07, 0.55],
      [0.05, 0.06, 0.36], [9.56, 2.39, 8.09], [1.78, 1.90, 0.91], [17.75, 8.38, 10.35],
      [20.56, 43.55, 35.27], ['24%', '9%', '28%'], ['20%', '4%', '19%'], ['29%', '9%', '16%'], ['30%', '9%', '25%'],
      [331.37, 137.06, 79.90], [99.35, 12.66, 19.61], [17.11, 30.80, 19.89]];

    const greentechaddress: any = []
    // acidtestratio: number[] = ;



    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('report');
    let businessname = '';
    let countgreentech = 0
    const greentecharray1st = [
      'Yes',
      'Yes',
      'No',
      'Yes',
      'Yes',
      'Yes']
    const greentecharray2nd = [
      'Yes',
      'Yes',
      'Yes',
      'No',]
    const armillaarray1st = [
      'Yes',
      'Yes',
      'Yes',
      'No',
      'Yes',
      'No',]
    const armillaarray2nd = [
      'Yes',
      'Yes',
      'Yes',
      'Yes',]

    for (let i = 0; i < attempnumber; i++) {
      exceldata[i].forEach((d: any) => {
        let row = worksheet.addRow(d);

        if (businessname == "greentech1st") {
          if (d[0] == greentecharray1st[countgreentech]) {
            row.getCell(1).fill = this.greencellcolor;
          } else {
            if (d[0] == "EMPTY") {
              row.getCell(1).fill = this.yellowcellcolor;
            } else {
              row.getCell(1).fill = this.redcellcolor;
            }
          }
          countgreentech = countgreentech + 1;
          if (countgreentech == 6) {
            businessname = '';
            countgreentech = 0;
          }
        }
        else if (businessname == "greentech2nd") {
          if (d[0] == greentecharray2nd[countgreentech]) {
            row.getCell(1).fill = this.greencellcolor;
          } else {
            if (d[0] == "EMPTY") {
              row.getCell(1).fill = this.yellowcellcolor;
            } else {
              row.getCell(1).fill = this.redcellcolor;
            }
          }
          countgreentech = countgreentech + 1;
          if (countgreentech == 4) {
            businessname = '';
            countgreentech = 0;
          }
        } else if (businessname == "armilla1st") {
          if (d[0] == armillaarray1st[countgreentech]) {
            row.getCell(1).fill = this.greencellcolor;
          } else {
            if (d[0] == "EMPTY") {
              row.getCell(1).fill = this.yellowcellcolor;
            } else {
              row.getCell(1).fill = this.redcellcolor;
            }
          }
          countgreentech = countgreentech + 1;
          if (countgreentech == 6) {
            businessname = '';
            countgreentech = 0;
          }
        }
        else if (businessname == "armilla2nd") {
          if (d[0] == armillaarray2nd[countgreentech]) {
            row.getCell(1).fill = this.greencellcolor;
          } else {
            if (d[0] == "EMPTY") {
              row.getCell(1).fill = this.yellowcellcolor;
            } else {
              row.getCell(1).fill = this.redcellcolor;
            }
          }
          countgreentech = countgreentech + 1;
          if (countgreentech == 4) {
            businessname = '';
            countgreentech = 0;
          }
        }
        //fsa
        for (let i = 0; i < 16; i++) {
          if (d[0] == cellonename[i]) {
            for (let index = 0; index < 3; index++) {
              if (row.getCell(index + 2).value == value[i][index]) {
                row.getCell(index + 2).fill = this.greencellcolor;
              } else {
                row.getCell(index + 2).fill = this.redcellcolor;
              }
            }
          }
        }


        if (d[0] == 'Q.1 What are the potential opportunities to turn around Green Tech’s business?') {
          businessname = 'greentech1st';
        }
        else if (d[0] == 'Q.2 Indicate the potential aspects on which more research is required before deciding to acquire Green Tech') {
          businessname = 'greentech2nd';
        }
        else if (d[0] == 'Q.1 What are the potential opportunities to turn around Armilla’s business?') {
          businessname = 'armilla1st';
        }
        else if (d[0] == 'Q.2 Indicate the potential aspects on which more research is required before deciding to acquire Armilla') {
          businessname = 'armilla2nd';
        }
        else if (d[0] == 'Investment Firm') {
          row.getCell(1).fill = this.yellowcellcolor;
          if (d[1] == "Eco Revolution") {
            row.getCell(2).fill = this.greencellcolor;
          } else {
            row.getCell(2).fill = this.redcellcolor;
          }
        }
        if ((d[0] == 'Ratio Analysis') || (d[0] == 'Green Tech ') || (d[0] == 'Armilla ') || (d[0] == 'Total Score (Max 73)')) {
          row.eachCell((cell, number) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFFFFF00' },
              bgColor: { argb: 'FF0000FF' }
            }
          });
        }
        if ((d[0] == "Attempt1") || (d[0] == "Attempt2") ||
          (d[0] == "Attempt3") || (d[0] == "Attempt4") ||
          (d[0] == "Attempt5") || (d[0] == "Attempt6") || (d[0] == "Attempt7") ||
          (d[0] == "Attempt8") || (d[0] == "Attempt9") ||
          (d[0] == "Attempt10")) {

          row.eachCell((cell, number) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'D3D3D3' },
              bgColor: { argb: 'FF0000FF' }
            }
          });
        }

      });
    }





    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, gamename + '.xlsx');
    })
  }

  createExcelReportforVoiceBased(data: any) {

    console.log(data.resultList);
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Location", data.resultList[i].c18],
        ["", "Licensing & Regulation", data.resultList[i].c26],
        ["", "Demand Tea Cups per day", data.resultList[i].c19],
        ["", "Interior", data.resultList[i].c20],
        ["", "Product Mix", data.resultList[i].c21],
        ["", "Procurement Vendor", data.resultList[i].c22],
        ["", "Point of Sale", data.resultList[i].c27],
        ["", "Security", data.resultList[i].c28],
        ["", "Music & Wifi", data.resultList[i].c29],
        ["", "Price per cup of tea, INR", data.resultList[i].c23],
        ["", "Monthly Promotion Budget, INR", data.resultList[i].c24],
        ["", "Social Media Campaign", data.resultList[i].c30],
        ["", "Local Advertising Campaign", data.resultList[i].c31],
        ["", "Collaboration Campaign", data.resultList[i].c32],
        ["", "Service", data.resultList[i].c25],
        [],
        ["", "Income Statement, INR", '', ''],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Revenue", Number(data.resultList[i].c76.toFixed(0))],
        ["", "Operational Cost", Number(data.resultList[i].c77.toFixed(0))],
        ["", "Depreciation", Number(data.resultList[i].c78.toFixed(0))],
        ["", "Profit", Number(data.resultList[i].c79.toFixed(0))],
        [],
        ["", "Operational Cost, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Rent", Number(data.resultList[i].c64.toFixed(0))],
        ["", "Compliance", Number(data.resultList[i].c65.toFixed(0))],
        ["", "Maintenance", Number((data.resultList[i].c66 + data.resultList[i].c67).toFixed(0))],
        ["", "Raw Material Purchase", Number((data.resultList[i].c68 + data.resultList[i].c69).toFixed(0))],
        ["", "Service", Number(data.resultList[i].c70.toFixed(0))],
        ["", "Interest", Number(data.resultList[i].c71.toFixed(0))],
        ["", "Promotion", Number(data.resultList[i].c72.toFixed(0))],
        ["", "Total", Number(data.resultList[i].c73.toFixed(0))],
        [],
        ["", "Cash Balance, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Initial Cash", Number(data.resultList[i].c50.toFixed(0))],
        ["", "Interior", Number(data.resultList[i].c51.toFixed(0))],
        ["", "Equipment", Number(data.resultList[i].c52.toFixed(0))],
        ["", "Technology", Number(data.resultList[i].c53.toFixed(0))],
        ["", "Cash Outflow", Number(data.resultList[i].c54.toFixed(0))],
        ["", "Borrowings", Number(data.resultList[i].c56.toFixed(0))],
        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Margin, %", Number((data.resultList[i].c82 * 100).toFixed(0))],
        ["", "Sales Forecasting Error, %", Number((data.resultList[i].c47 * 100).toFixed(0))],
        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score, Max 3'],
        ["", "Location, %", Number((data.resultList[i].r6 * 100).toFixed(0))],
        ["", "Demand, %", Number((data.resultList[i].r7 * 100).toFixed(0))],
        ["", "Investment, %", Number((data.resultList[i].r8 * 100).toFixed(0))],
        ["", "Marketing, %", Number((data.resultList[i].r9 * 100).toFixed(0))],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('business', 'businessbasics report', this.excelalldata, data.resultList.length);
  }

  createExcelReportforBusinessbasic(data: any) {

    console.log(data.resultList);
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Location", data.resultList[i].c18],
        ["", "Licensing & Regulation", data.resultList[i].c26],
        ["", "Demand Tea Cups per day", data.resultList[i].c19],
        ["", "Interior", data.resultList[i].c20],
        ["", "Product Mix", data.resultList[i].c21],
        ["", "Procurement Vendor", data.resultList[i].c22],
        ["", "Point of Sale", data.resultList[i].c27],
        ["", "Security", data.resultList[i].c28],
        ["", "Music & Wifi", data.resultList[i].c29],
        ["", "Price per cup of tea, INR", data.resultList[i].c23],
        ["", "Monthly Promotion Budget, INR", data.resultList[i].c24],
        ["", "Social Media Campaign", data.resultList[i].c30],
        ["", "Local Advertising Campaign", data.resultList[i].c31],
        ["", "Collaboration Campaign", data.resultList[i].c32],
        ["", "Service", data.resultList[i].c25],
        [],
        ["", "Income Statement, INR", '', ''],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Revenue", Number(data.resultList[i].c76.toFixed(0))],
        ["", "Operational Cost", Number(data.resultList[i].c77.toFixed(0))],
        ["", "Depreciation", Number(data.resultList[i].c78.toFixed(0))],
        ["", "Profit", Number(data.resultList[i].c79.toFixed(0))],
        [],
        ["", "Operational Cost, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Rent", Number(data.resultList[i].c64.toFixed(0))],
        ["", "Compliance", Number(data.resultList[i].c65.toFixed(0))],
        ["", "Maintenance", Number((data.resultList[i].c66 + data.resultList[i].c67).toFixed(0))],
        ["", "Raw Material Purchase", Number((data.resultList[i].c68 + data.resultList[i].c69).toFixed(0))],
        ["", "Service", Number(data.resultList[i].c70.toFixed(0))],
        ["", "Interest", Number(data.resultList[i].c71.toFixed(0))],
        ["", "Promotion", Number(data.resultList[i].c72.toFixed(0))],
        ["", "Total", Number(data.resultList[i].c73.toFixed(0))],
        [],
        ["", "Cash Balance, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Initial Cash", Number(data.resultList[i].c50.toFixed(0))],
        ["", "Interior", Number(data.resultList[i].c51.toFixed(0))],
        ["", "Equipment", Number(data.resultList[i].c52.toFixed(0))],
        ["", "Technology", Number(data.resultList[i].c53.toFixed(0))],
        ["", "Cash Outflow", Number(data.resultList[i].c54.toFixed(0))],
        ["", "Borrowings", Number(data.resultList[i].c56.toFixed(0))],
        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Margin, %", Number((data.resultList[i].c82 * 100).toFixed(0))],
        ["", "Sales Forecasting Error, %", Number((data.resultList[i].c47 * 100).toFixed(0))],
        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score, Max 3'],
        ["", "Location, %", Number((data.resultList[i].r6 * 100).toFixed(0))],
        ["", "Demand, %", Number((data.resultList[i].r7 * 100).toFixed(0))],
        ["", "Investment, %", Number((data.resultList[i].r8 * 100).toFixed(0))],
        ["", "Marketing, %", Number((data.resultList[i].r9 * 100).toFixed(0))],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('business', 'businessbasics report', this.excelalldata, data.resultList.length);
  }


  createExcelReportforFinancialAnalysis(data: any) {

    console.log(data.resultList);
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Current Ratio, Electra Motors", data.resultList[i].ak5],
        ["", "Current Ratio, Titan Motors", data.resultList[i].al5],
        ["", "Current Ratio, GreenSpeed Technologies", data.resultList[i].am5],
        ["", "Acid-test Ratio, Electra Motors", data.resultList[i].ak6],
        ["", "Acid-test Ratio, Titan Motors", data.resultList[i].al6],
        ["", "Acid-test Ratio, GreenSpeed Technologies", data.resultList[i].am6],
        ["", "Cash Ratio, Electra Motors", data.resultList[i].ak7],
        ["", "Cash Ratio, Titan Motors", data.resultList[i].al7],
        ["", "Cash Ratio, GreenSpeed Technologies", data.resultList[i].am7],
        ["", "Debt-to-Equity Ratio, Electra Motors", (Number(data.resultList[i].ak10) * 100).toFixed(0) + "%"],
        ["", "Debt-to-Equity Ratio, Titan Motors", (Number(data.resultList[i].al10) * 100).toFixed(0) + "%"],
        ["", "Debt-to-Equity Ratio, GreenSpeed Technologies", (Number(data.resultList[i].am10) * 100).toFixed(0) + "%"],
        ["", "Debt Ratio, Electra Motors", (Number(data.resultList[i].ak11) * 100).toFixed(0) + "%"],
        ["", "Debt Ratio, Titan Motors", (Number(data.resultList[i].al11) * 100).toFixed(0) + "%"],
        ["", "Debt Ratio, GreenSpeed Technologies", (Number(data.resultList[i].am11) * 100).toFixed(0) + "%"],

        ["", "Interest Coverage Ratio, Electra Motors", data.resultList[i].ak12],
        ["", "Interest Coverage Ratio, Titan Motors", data.resultList[i].al12],
        ["", "Interest Coverage Ratio, GreenSpeed Technologies", data.resultList[i].am12],
        ["", "Asset Turnover Ratio, Electra Motors", data.resultList[i].ak15],
        ["", "Asset Turnover Ratio, Titan Motors", data.resultList[i].al15],
        ["", "Asset Turnover Ratio, GreenSpeed Technologies", data.resultList[i].am15],
        ["", "Inventory Turnover Ratio, Electra Motors", data.resultList[i].ak16],
        ["", "Inventory Turnover Ratio, Titan Motors", data.resultList[i].al16],
        ["", "Inventory Turnover Ratio, GreenSpeed Technologies", data.resultList[i].am16],
        ["", "Days Sales in Inventory Ratio, Electra Motors", data.resultList[i].ak17],
        ["", "Days Sales in Inventory Ratio, Titan Motors", data.resultList[i].al17],
        ["", "Days Sales in Inventory Ratio, GreenSpeed Technologies", data.resultList[i].am17],
        ["", "Gross Margin, Electra Motors", (Number(data.resultList[i].ak20) * 100).toFixed(0) + "%"],
        ["", "Gross Margin, Titan Motors", (Number(data.resultList[i].al20) * 100).toFixed(0) + "%"],
        ["", "Gross Margin, GreenSpeed Technologies", (Number(data.resultList[i].am20) * 100).toFixed(0) + "%"],
        ["", "Operating Margin, Electra Motors", (Number(data.resultList[i].ak21) * 100).toFixed(0) + "%"],
        ["", "Operating Margin, Titan Motors", (Number(data.resultList[i].al21) * 100).toFixed(0) + "%"],
        ["", "Operating Margin, GreenSpeed Technologies", (Number(data.resultList[i].am21) * 100).toFixed(0) + "%"],
        ["", "Return on Asset, Electra Motors", (Number(data.resultList[i].ak22) * 100).toFixed(0) + "%"],
        ["", "Return on Asset, Titan Motors", (Number(data.resultList[i].al22) * 100).toFixed(0) + "%"],
        ["", "Return on Asset, GreenSpeed Technologies", (Number(data.resultList[i].am22) * 100).toFixed(0) + "%"],
        ["", "Return on Equity, Electra Motors", (Number(data.resultList[i].ak23) * 100).toFixed(0) + "%"],
        ["", "Return on Equity, Titan Motors", (Number(data.resultList[i].al23) * 100).toFixed(0) + "%"],
        ["", "Return on Equity, GreenSpeed Technologies", (Number(data.resultList[i].am23) * 100).toFixed(0) + "%"],

        ["", "Book value per share, Electra Motors", data.resultList[i].ak26],
        ["", "Book value per share, Titan Motors", data.resultList[i].al26],
        ["", "Book value per share, GreenSpeed Technologies", data.resultList[i].am26],
        ["", "Earnings per share, Electra Motors", data.resultList[i].ak27],
        ["", "Earnings per share, Titan Motors", data.resultList[i].al27],
        ["", "Earnings per share, GreenSpeed Technologies", data.resultList[i].am27],
        ["", "Price-earning Ratio, Electra Motors", data.resultList[i].ak28],
        ["", "Price-earning Ratio, Titan Motors", data.resultList[i].al28],
        ["", "Price-earning Ratio, GreenSpeed Technologies", data.resultList[i].am28],

        ["", "Portfolio 1", data.resultList[i].ak31 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 2", data.resultList[i].ak32 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 3", data.resultList[i].ak33 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 4", data.resultList[i].ak34 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 5", data.resultList[i].ak35 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 6", data.resultList[i].ak36 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 7", data.resultList[i].ak37 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 8", data.resultList[i].ak38 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 9", data.resultList[i].ak39 == 1 ? 'Yes' : 'No'],
        ["", "Portfolio 10", data.resultList[i].ak40 == 1 ? 'Yes' : 'No'],

        [],
        ["", "Ratio Analysis Score, %", '', ''],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Liquidity Ratio", (Number(data.resultList[i].s27) * 100).toFixed(0) + "%"],
        ["", "Leverage Ratio", (Number(data.resultList[i].s28) * 100).toFixed(0) + "%"],
        ["", "Efficiency Ratio", (Number(data.resultList[i].s29) * 100).toFixed(0) + "%"],
        ["", "Profitability Ratio", (Number(data.resultList[i].s30) * 100).toFixed(0) + "%"],
        ["", "Market Value Ratio", (Number(data.resultList[i].s31) * 100).toFixed(0) + "%"],
        ["", "Total Score", (Number(data.resultList[i].s32) * 100).toFixed(0) + "%"],

        [],
        ["", "Investment", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Electra Motors, Potfolio Allocation INR", Number(data.resultList[i].s19)],
        ["", "Titan Motors, Potfolio Allocation INR", Number(data.resultList[i].t19)],
        ["", "GreenSpeed Technologies, Potfolio Allocation INR", Number(data.resultList[i].u19)],
        ["", "Electra Motors, Company Owned", (Number(data.resultList[i].s21) * 100).toFixed(0) + "%"],
        ["", "Titan Motors, Company Owned", (Number(data.resultList[i].t21) * 100).toFixed(0) + "%"],
        ["", "GreenSpeed Technologies, Company Owned", (Number(data.resultList[i].u21) * 100).toFixed(0) + "%"],
        ["", "Portfolio Name", data.resultList[i].t23],
        ["", "Stakeholder Views", data.resultList[i].s23],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('fsa', 'Financial Analysis report', this.excelalldata, data.resultList.length);
  }

  createExcelReportforPromotionssigment(data: any) {


    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions", ""],
        [],
        ["", "Parameters", "Input"],
        ["", "Website, Budgeting, %", Number(Number(data.resultList[i].x20) * 100).toFixed(0)],
        ["", "Social Commerce, Budgeting, %", Number(Number(data.resultList[i].x21) * 100).toFixed(0)],
        ["", "Modern Trade, Budgeting, %", Number(Number(data.resultList[i].x22) * 100).toFixed(0)],
        ["", "Retailers, Budgeting, %", Number(Number(data.resultList[i].x23) * 100).toFixed(0)],
        ["", "Facebook, Budgeting, %", Number(Number(data.resultList[i].x24) * 100).toFixed(0)],
        ["", "Instagram, Budgeting, %", Number(Number(data.resultList[i].x25) * 100).toFixed(0)],
        ["", "Twitter, Budgeting, %", Number(Number(data.resultList[i].x26) * 100).toFixed(0)],
        ["", "LinkedIn, Budgeting, %", Number(Number(data.resultList[i].x27) * 100).toFixed(0)],
        ["", "YouTube, Budgeting, %", Number(Number(data.resultList[i].x28) * 100).toFixed(0)],

        ["", "Website", (data.resultList[i].z23)],
        ["", "Social Commerce, Community Engagement Series", data.resultList[i].x34 == 1 ? 'Yes' : 'No'],
        ["", "Social Commerce, Flash Sales and Trending Topics", data.resultList[i].x35 == 1 ? 'Yes' : 'No'],
        ["", "Social Commerce, Visual Storytelling and Influencer Collaborations", data.resultList[i].x36 == 1 ? 'Yes' : 'No'],
        ["", "Social Commerce, Expert Insights and Premium Skincare Journey", data.resultList[i].x37 == 1 ? 'Yes' : 'No'],
        ["", "Social Commerce, Tutorial Series and Influencer Reviews", data.resultList[i].x38 == 1 ? 'Yes' : 'No'],

        ["", "Modern Trade", data.resultList[i].z24],
        ["", "Retailers", data.resultList[i].z25],
        ["", "Website, A/B Testing", data.resultList[i].x47 == 1 ? 'Yes' : 'No'],
        ["", "Social Commerce, A/B Testing", data.resultList[i].x48 == 1 ? 'Yes' : 'No'],
        ["", "Modern Trade & Retailers, A/B Testing", data.resultList[i].x49 == 1 ? 'Yes' : 'No'],
        ["", "Online Channel, Margin, %", Number(Number(data.resultList[i].x50) * 100).toFixed(0)],
        ["", "Modern Trade Channel, Margin, %", Number(Number(data.resultList[i].x51) * 100).toFixed(0)],
        ["", "Retailers Channel, Margin, %", Number(Number(data.resultList[i].x52) * 100).toFixed(0)],
        ["", "Product Focus, Acne Face Cream", data.resultList[i].x53 == 1 ? 'Yes' : 'No'],
        ["", "Product Focus, Apple Cider Face Wash", data.resultList[i].x54 == 1 ? 'Yes' : 'No'],



        [],
        ["", "Product Sales, units", '', ''],
        [],
        ["", 'Parameter', 'Acne Face Cream', 'Apple Cider Face Wash'],
        ["", "Website ", Number(Number(data.resultList[i].s6)).toFixed(0), Number(Number(data.resultList[i].t6)).toFixed(0)],
        ["", "Social Commerce ", Number(Number(data.resultList[i].s7)).toFixed(0), Number(Number(data.resultList[i].t7)).toFixed(0)],
        ["", "Modern Trade ", Number(Number(data.resultList[i].s8)).toFixed(0), Number(Number(data.resultList[i].t8)).toFixed(0)],
        ["", "Retailers ", Number(Number(data.resultList[i].s9)).toFixed(0), Number(Number(data.resultList[i].t9)).toFixed(0)],


        [],
        ["", "Segment Sales, units", "", ""],
        [],
        ["", 'Parameter', 'Young & Leisure', 'High-end '],
        ["", "Website ", Number(Number(data.resultList[i].s18)).toFixed(0), Number(Number(data.resultList[i].t18)).toFixed(0)],
        ["", "Social Commerce ", Number(Number(data.resultList[i].s19)).toFixed(0), Number(Number(data.resultList[i].t19)).toFixed(0)],
        ["", "Modern Trade ", Number(Number(data.resultList[i].s20)).toFixed(0), Number(Number(data.resultList[i].t20)).toFixed(0)],
        ["", "Retailers ", Number(Number(data.resultList[i].s21)).toFixed(0), Number(Number(data.resultList[i].t21)).toFixed(0)],

        [],
        ["", "Platform Sales, units", "", ""],
        [],
        ["", 'Parameter', 'output'],
        ["", "Website", Number(Number(data.resultList[i].u6)).toFixed(0)],
        ["", "Social Commerce", Number(Number(data.resultList[i].u7)).toFixed(0)],
        ["", "Modern Trade", Number(Number(data.resultList[i].u8)).toFixed(0)],
        ["", "Retailers", Number(Number(data.resultList[i].u9)).toFixed(0)],

        [],
        ["", "Promotion Cost, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Communication Mix Cost", Number(Number(data.resultList[i].s27)).toFixed(0)],
        ["", "Campaign Creation Cost", Number(Number(data.resultList[i].s28)).toFixed(0)],
        ["", "A/B Testing Cost", Number(Number(data.resultList[i].s29)).toFixed(0)],
        ["", "Channel Cost", Number(Number(data.resultList[i].s30) * 100).toFixed(0)],
        ["", "Total Cost", Number(Number(data.resultList[i].s31) * 100).toFixed(0)],

        [],
        ["", "Operating Income, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Revenue", Number(Number(data.resultList[i].s24)).toFixed(0)],
        ["", "Variable Cost", Number(Number(data.resultList[i].s25)).toFixed(0)],
        ["", "Gross Profit", Number(Number(data.resultList[i].s26)).toFixed(0)],
        ["", "Promotion Cost", Number(Number(data.resultList[i].s31) * 100).toFixed(0)],
        ["", "Operating Profit/Loss", Number(Number(data.resultList[i].s32) * 100).toFixed(0)],

        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Operating Margin, %", Number(Number(data.resultList[i].s33) * 100).toFixed(0)],
        ["", "ROAS, %", Number(Number(data.resultList[i].s38) * 100).toFixed(0)],

        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Communication Mix, %", (Number(Number(data.resultList[i].z27) * 100).toFixed(0))],
        ["", "Campaigns, %", (Number(Number(data.resultList[i].z28) * 100).toFixed(0))],
        ["", "Channels, %", Number(Number(data.resultList[i].z29) * 100).toFixed(0)],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('promotion', 'Promotion report', this.excelalldata, data.resultList.length);
  }

  createExcelReportforPortfoliomanagement(data: any) {


    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions", "", "", ""],
        [],
        ["", "Parameters", "Input"],
        ["", "Phase 1 Allocation",],

        ["", "Indian Stocks", Number(Number(data.resultList[i].am8) * 100).toFixed(0) + "%"],
        ["", "Indian Commodity", Number(Number(data.resultList[i].am9) * 100).toFixed(0) + "%"],
        ["", "Hybrid Fund", Number(Number(data.resultList[i].am10) * 100).toFixed(0) + "%"],
        ["", "Corporate Bond", Number(Number(data.resultList[i].am11) * 100).toFixed(0) + "%"],
        ["", "PSU Bond", Number(Number(data.resultList[i].am12) * 100).toFixed(0) + "%"],
        ["", "US Stocks", Number(Number(data.resultList[i].am13) * 100).toFixed(0) + "%"],
        ["", "Cash Equivalents", Number(Number(data.resultList[i].am14) * 100).toFixed(0) + "%"],

        ["", "Phase 2 Allocation"],

        ["", "Indian Stocks", Number(Number(data.resultList[i].am17) * 100).toFixed(0) + "%"],
        ["", "Indian Commodity", Number(Number(data.resultList[i].am18) * 100).toFixed(0) + "%"],
        ["", "Hybrid Fund", Number(Number(data.resultList[i].am19) * 100).toFixed(0) + "%"],
        ["", "Corporate Bond", Number(Number(data.resultList[i].am20) * 100).toFixed(0) + "%"],
        ["", "PSU Bond", Number(Number(data.resultList[i].am21) * 100).toFixed(0) + "%"],
        ["", "US Stocks", Number(Number(data.resultList[i].am22) * 100).toFixed(0) + "%"],
        ["", "Cash Equivalents", Number(Number(data.resultList[i].am23) * 100).toFixed(0) + "%"],

        ["", "Phase 3 Allocation"],

        ["", "Indian Stocks", Number(Number(data.resultList[i].am26) * 100).toFixed(0) + "%"],
        ["", "Indian Commodity", Number(Number(data.resultList[i].am27) * 100).toFixed(0) + "%"],
        ["", "Hybrid Fund", Number(Number(data.resultList[i].am28) * 100).toFixed(0) + "%"],
        ["", "Corporate Bond", Number(Number(data.resultList[i].am29) * 100).toFixed(0) + "%"],
        ["", "PSU Bond", Number(Number(data.resultList[i].am30) * 100).toFixed(0) + "%"],
        ["", "US Stocks", Number(Number(data.resultList[i].am31) * 100).toFixed(0) + "%"],
        ["", "Cash Equivalents", Number(Number(data.resultList[i].am32) * 100).toFixed(0) + "%"],


        [],
        ["", "Phase Measures", "", "", ""],
        [],
        ["", 'Parameter', 'Phase 1', 'Phase 2', 'Phase 3'],
        ["", "Portfolio Return", Number(Number(data.resultList[i].c25) * 100).toFixed(2), Number(Number(data.resultList[i].c301) * 100).toFixed(2), Number(Number(data.resultList[i].c578) * 100).toFixed(2)],
        ["", "Portfolio Risk", Number(Number(data.resultList[i].c27) * 100).toFixed(2), Number(Number(data.resultList[i].c303) * 100).toFixed(2), Number(Number(data.resultList[i].c580) * 100).toFixed(2)],
        ["", "Portfolio Beta", Number(Number(data.resultList[i].c28)).toFixed(0), Number(Number(data.resultList[i].c304)).toFixed(0), Number(Number(data.resultList[i].c581)).toFixed(0)],
        ["", "Treynor Measure", Number(Number(data.resultList[i].f25)).toFixed(0), Number(Number(data.resultList[i].f301)).toFixed(0), Number(Number(data.resultList[i].f578)).toFixed(0)],
        ["", "Sharpe Ratio", Number(Number(data.resultList[i].f26)).toFixed(0), Number(Number(data.resultList[i].f302)).toFixed(0), Number(Number(data.resultList[i].f579)).toFixed(0)],
        ["", "Jenson's Alpha", Number(Number(data.resultList[i].h25) * 100).toFixed(2), Number(Number(data.resultList[i].h301) * 100).toFixed(2), Number(Number(data.resultList[i].h578) * 100).toFixed(2)],
        ["", "CAPM", Number(Number(data.resultList[i].f27) * 100).toFixed(2), Number(Number(data.resultList[i].f303) * 100).toFixed(2), Number(Number(data.resultList[i].f580) * 100).toFixed(2)],
        ["", "Fama Measure", Number(Number(data.resultList[i].h26) * 100).toFixed(2), Number(Number(data.resultList[i].h302) * 100).toFixed(2), Number(Number(data.resultList[i].h579) * 100).toFixed(2)],


        [],
        ["", "Capital Invested in Securities, k INR", "", "", ""],
        [],
        ["", 'Parameter', 'Phase 1', 'Phase 2', 'Phase 3'],
        ["", "Security 1 - Indian Stocks ", Number(Number(data.resultList[i].g12) / 1000).toFixed(0), Number(Number(data.resultList[i].g288) / 1000).toFixed(0), Number(Number(data.resultList[i].g565) / 1000).toFixed(0)],
        ["", "Security 2 - Commodities", Number(Number(data.resultList[i].g13) / 1000).toFixed(0), Number(Number(data.resultList[i].g289) / 1000).toFixed(0), Number(Number(data.resultList[i].g566) / 1000).toFixed(0)],
        ["", "Security 3 - Hybrid Fund", Number(Number(data.resultList[i].g14) / 1000).toFixed(0), Number(Number(data.resultList[i].g290) / 1000).toFixed(0), Number(Number(data.resultList[i].g567) / 1000).toFixed(0)],
        ["", "Security 4 - Corporate Bond", Number(Number(data.resultList[i].g15) / 1000).toFixed(0), Number(Number(data.resultList[i].g291) / 1000).toFixed(0), Number(Number(data.resultList[i].g568) / 1000).toFixed(0)],
        ["", "Security 5 - PSU Bond", Number(Number(data.resultList[i].g16) / 1000).toFixed(0), Number(Number(data.resultList[i].g292) / 1000).toFixed(0), Number(Number(data.resultList[i].g569) / 1000).toFixed(0)],
        ["", "Security 6 - US Stocks", Number(Number(data.resultList[i].g17) / 1000).toFixed(0), Number(Number(data.resultList[i].g293) / 1000).toFixed(0), Number(Number(data.resultList[i].g570) / 1000).toFixed(0)],
        ["", "Security 7 - Cash Equivalents", Number(Number(data.resultList[i].g18) / 1000).toFixed(0), Number(Number(data.resultList[i].g294) / 1000).toFixed(0), Number(Number(data.resultList[i].g571) / 1000).toFixed(0)],

        [],
        ["", "Capital, k INR", "", "", ""],
        [],
        ["", 'Parameter', 'Phase 1', 'Phase 2', 'Phase 3'],
        ["", "Start", Number(Number(data.resultList[i].c9) / 1000).toFixed(0), Number(Number(data.resultList[i].h27) / 1000).toFixed(0), Number(Number(data.resultList[i].h303) / 1000).toFixed(0)],
        ["", "End", Number(Number(data.resultList[i].h27) / 1000).toFixed(0), Number(Number(data.resultList[i].h303) / 1000).toFixed(0), Number(Number(data.resultList[i].h580) / 1000).toFixed(0)],

        [],
        ["", "Combined Measures", "", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Portfolio Return", Number(Number(data.resultList[i].c834) * 100).toFixed(2) + "%"],
        ["", "Portfolio Risk", Number(Number(data.resultList[i].c835) * 100).toFixed(2) + "%"],
        ["", "Portfolio Beta", Number(Number(data.resultList[i].c833) * 100).toFixed(2)],
        ["", "Market Return", Number(Number(data.resultList[i].f834) * 100).toFixed(2) + "%"],
        ["", "Market Risk", Number(Number(data.resultList[i].f835) * 100).toFixed(2) + "%"],

        [],
        ["", "KPI", "", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Return over (+)/below (-) market ", Number(Number(data.resultList[i].i834) * 100).toFixed(2) + "%"],
        ["", "Risk over (+)/below (-) market", Number(Number(data.resultList[i].i835) * 100).toFixed(2) + "%"],

        [],
        ["", "Thinking Ability, %", "", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Portfolio Management", (Number(Number(data.resultList[i].ap13) * 100).toFixed(0)) + "%"],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('portfolio', 'portfolio report', this.excelalldata, data.resultList.length);
  }

  createExcelReportforvaluechain(data: any) {


    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],

        [],
        ["", "Decisions", "",],
        [],
        ["", "Parameters", "Input"],
        ["", "Estimated Market Growth %", Number(data.resultList[i].z8)],
        ["", "Estimated Market Share %", Number(data.resultList[i].z10)],
        ["", "In-house Capacity Utilization %", Number(data.resultList[i].z14)],
        ["", "Outsourcing Capacity Utilization %", Number(data.resultList[i].z15)],
        ["", "Additional Machinery units", Number(data.resultList[i].z16)],
        ["", "Component Supplier 1", Number(data.resultList[i].z17) == 1 ? 'Yes' : 'No'],
        ["", "Component Supplier 2", Number(data.resultList[i].z18) == 1 ? 'Yes' : 'No'],
        ["", "Transporter 1", Number(data.resultList[i].z19) == 1 ? 'Yes' : 'No'],
        ["", "Transporter 2", Number(data.resultList[i].z20) == 1 ? 'Yes' : 'No'],
        ["", "Feature Index", Number(data.resultList[i].z24)],
        ["", "Promotion, mn INR", Number(data.resultList[i].z25)],
        ["", "Pricing, INR", Number(data.resultList[i].z26)],
        ["", "Online Channel Margin %", Number(data.resultList[i].z27)],
        ["", "Speciality Stores Channel Margin %", Number(data.resultList[i].z28)],
        ["", "Retail Channel Margin %", Number(data.resultList[i].z29)],
        ["", "Predictive Analytics", Number(data.resultList[i].z30) ? 'Yes' : 'No'],
        ["", "Subsciption Based Services", Number(data.resultList[i].z31) ? 'Yes' : 'No'],
        ["", "Blockchain Integration", Number(data.resultList[i].z32) ? 'Yes' : 'No'],
        ["", "Remote Diagnosis", Number(data.resultList[i].z33) ? 'Yes' : 'No'],
        ["", "AI-Powered Personalization", Number(data.resultList[i].z34) ? 'Yes' : 'No'],
        ["", "Long-term Borrowings, mn INR", Number(data.resultList[i].z37)],
        [],

        ["", "Cash Balance, mn INR", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Cash at start of the period", Number(data.resultList[i].i18).toFixed(0)],
        ["", "Cash from operations", Number(data.resultList[i].i25).toFixed(0)],
        ["", "Cash from investment", Number(data.resultList[i].i26).toFixed(0)],
        ["", "Cash from financing", (Number(data.resultList[i].i27) + Number(data.resultList[i].i29)).toFixed(0)],
        ["", "Cash at end of the period", Number(data.resultList[i].i30).toFixed(0)],

        [],
        ["", "Sales, mn units", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Market Size", Number(data.resultList[i].l17).toFixed(2)],
        ["", "Demand", Number(data.resultList[i].l34).toFixed(2)],
        ["", "Actual Sales", Number(data.resultList[i].l38).toFixed(2)],

        [],
        ["", "Production, mn units", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Capacity", Number(data.resultList[i].l35).toFixed(2)],
        ["", "Closing Inventory", Number(data.resultList[i].l36).toFixed(2)],
        ["", "Opportunity loss", Number(data.resultList[i].l37).toFixed(2)],

        [],
        ["", "Operating Income, INR", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Revenue", Number(data.resultList[i].l41).toFixed(0)],
        ["", "Variable Cost", Number(data.resultList[i].l42).toFixed(0)],
        ["", "Gross Profit/Loss", Number(data.resultList[i].l43).toFixed(0)],
        ["", "Component Cost", Number(data.resultList[i].l44).toFixed(0)],
        ["", "Transportation & Inventory Cost", Number(data.resultList[i].l45).toFixed(0)],
        ["", "Channel Cost", Number(data.resultList[i].l46).toFixed(0)],
        ["", "Promotion Cost", Number(data.resultList[i].l47).toFixed(0)],
        ["", "Services & Innovation Cost", Number(data.resultList[i].l48).toFixed(0)],
        ["", "EBITDA", Number(data.resultList[i].l49).toFixed(0)],
        ["", "Depreciation", Number(data.resultList[i].l50).toFixed(0)],
        ["", "EBIT", Number(data.resultList[i].l51).toFixed(0)],
        ["", "Interest Cost", Number(data.resultList[i].l52).toFixed(0)],
        ["", "Profit before taxes", Number(data.resultList[i].l53).toFixed(0)],
        ["", "Tax", Number(data.resultList[i].l54).toFixed(0)],
        ["", "Profit/Loss", Number(data.resultList[i].l55).toFixed(0)],

        [],
        ["", "KPI", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Market Share %", (Number(data.resultList[i].l39) * 100).toFixed(2)],
        ["", "Margin %", (Number(data.resultList[i].l56) * 100).toFixed(2)],
        ["", "Emergency Borrowing, mn INR", Number(data.resultList[i].i29).toFixed(0)],

        [],
        ["", "Thinking Ability, %", "",],
        [],
        ["", "Parameters", "Output"],
        ["", "Demand", (Number(data.resultList[i].z49) * 100).toFixed(0) + " %"],
        ["", "Production", (Number(data.resultList[i].z50) * 100).toFixed(0) + " %"],
        ["", "Marketing", (Number(data.resultList[i].z51) * 100).toFixed(0) + " %"],
        ["", "Finance", (Number(data.resultList[i].z52) * 100).toFixed(0) + " %"],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('valuechain', 'ValueChain report', this.excelalldata, data.resultList.length);
  }

  excelSheetDesignFunction(name: string, gamename: string, exceldata: any, attempnumber: any) {
    this.greencellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '90EE90' },
      bgColor: { argb: 'FF0000FF' }
    }
    this.redcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ff0000' },
      bgColor: { argb: 'FF0000FF' }
    }

    this.yellowcellcolor = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' },
      bgColor: { argb: 'FF0000FF' }
    }

    let cellstyle = {
      name: 'Arial',
      size: 11,
      bold: true,
      color: { argb: 'FFFFFF' }
    }
    let cellstyle1 = {
      name: 'Arial',
      size: 11,
      bold: true,
      color: { argb: '00000000' }
    }

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('report');

    for (let i = 0; i < attempnumber; i++) {
      exceldata[i].forEach((d: any) => {
        let row = worksheet.addRow(d);

        for (let colNumber = 1; colNumber <= 8; colNumber++) {
          const cell = row.getCell(colNumber);

          // Check the value in the cell and apply background color accordingly
          if (cell.value == 'P') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'C3F9C3 ' }, // Pink color
            };
          } else if (cell.value == 'Nu') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFD77E' }, // Green color
            };
          } else if (cell.value == 'N') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'f7cac9' }, // Yellow color
            };
          } else if (cell.value == ' Kabir') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Anne') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Rajas') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Priya') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Neha') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          } else if (cell.value == ' Rajat') {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' },
            };
          }
        }


        if (name == 'business') {
          if (this.businessbasiccolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'consumer') {
          if (this.consumercolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'logistics') {
          if (this.logisticscolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'changemanagement') {
          if (this.changemanagementcolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        } else if (name == 'promotion') {
          if ((d[1] == 'Website ') || (d[1] == 'Social Commerce ') || (d[1] == 'Modern Trade ') || (d[1] == 'Retailers ')) {
            this.fillcolorincolumnnameforpromotion(row);
          } else if (this.promotioncolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }

        } else if (name == 'portfolio') {
          if (
            this.portfoliocolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        }
        else if (name == 'valuechain') {
          if (
            this.valuechaincolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }

        }
        else if (name == 'cvpanalysis') {
          if (
            this.cvpanalysiscolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'accountinggame') {
          if (
            this.accountingcolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'accountingarabic') {
          if (
            this.accountingarabiccolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        }
        else if (name == 'pricinggame') {
          if (
            this.pricingcolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'mergersacquisition') {
          if (
            this.mergeracquisitioncolname.includes(d[1])) {
            this.fillcolorincolumnnameforpromotion(row);
          }

        } else if (name == 'hrplanning') {
          if (
            this.Hrpcolname.includes(d[1])) {
            this.fillcolorincolumnnameforHrp(row);
          }

        }
        else if (name == 'designthinking') {
          if (
            this.designThinkingcolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        }
        else if (name == 'crmgame') {
          if (
            this.crmgamecolname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
        } else if (name == 'innovation') {
          if (
            this.innovationgamecolname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
          if (
            this.headingcrm.includes(d[1])) {
            this.fillcoloringheadingamecrm(row);
          }
          
        }
        else if (name == 'orderingbasics') {
          if (
            this.orderingbasicscolname.includes(d[1])) {
            this.fillcolorincolumnnamecrm(row);
          }
        }
        else if (name == 'stpgame') {
          if (
            this.stpgamecolname.includes(d[1])) {
            this.fillcolorincolumnnameforHrp(row);
          }
        }
        else if (name == 'fsa') {
          if (this.fsacolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
            if ((row.getCell(2).value == "Decisions") || (row.getCell(2).value == "Investment") || (row.getCell(2).value == "Ratio Analysis Score, %")) {
              worksheet.mergeCells(`B${row.number}:C${row.number + 1}`);
              for (let cellNumber of [2, 3]) {
                row.getCell(cellNumber).fill = {
                  type: 'pattern',
                  pattern: 'solid',
                  fgColor: { argb: '00000000' }, // Yellow color
                  bgColor: { argb: 'FF0000FF' }
                };
              }
              row.font = cellstyle;
            }
          }
        } else if (name == 'salestarget') {
          if ((d[1] == 'Modern Trade') || (d[1] == 'Retail') || (d[1] == 'HoReCa')) {
            this.fillcolorincolumnnameforpromotion(row);
          } else if (this.salestargetcolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
          if (this.salestargetcolname.includes(d[1])) {
            this.fillcolorincolumnname(row);
          }
        }



        if ((d[1] == "Kabir ") || (d[1] == "Anne ") ||
          (d[1] == "Rajas ") || (d[1] == "Priya ") || (d[1] == "Neha ") || (d[1] == "Rajat ")
        ) {
          for (let colNumber = 2; colNumber <= 6; colNumber++) {
            const cell = row.getCell(colNumber);
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ADD8E6' }, // Light blue color
            };
          }
        }

        
        let logisvalue = row.getCell(2);
        if ((logisvalue.value == "Decisions") ||
          (logisvalue.value == "Income Statement, INR") || (logisvalue.value == "Operational Cost, INR") || (logisvalue.value == "Cash Balance, INR") ||
          (logisvalue.value == "Cash Balance, mn INR") || (logisvalue.value == "Sales, mn units") || (logisvalue.value == "Production, mn units") ||
          (logisvalue.value == "KPI") || (logisvalue.value == "accountingarabic") || (logisvalue.value == "Decisions") ||
          (logisvalue.value == "Market, %") || (logisvalue.value == "Market Units, Mn") || (logisvalue.value == "Thinking Ability, %")
          || (logisvalue.value == "Market %") || (logisvalue.value == "Revenue, INR") || (logisvalue.value == "Turnaround Time, days")
          || (logisvalue.value == "Inbound Logistics TAT, days") || (logisvalue.value == "Inbound Logistics Cost, INR") || (logisvalue.value == "Outbound Logistics Cost, INR")
          || (logisvalue.value == "Employee Performance Level") || (logisvalue.value == "Group KPI") || (logisvalue.value == "Unutilized Time of Employees, minutes")
          || (logisvalue.value == "Budget, INR") || (logisvalue.value == "Employee Working Relations")
          || (logisvalue.value == "Product Sales, units") || (logisvalue.value == "Segment Sales, units")
          || (logisvalue.value == "Platform Sales, units")
          || (logisvalue.value == "Operating Income, INR") || (logisvalue.value == "Promotion Cost, INR")
          || (logisvalue.value == "Ratio Analysis Score, %")
          || (logisvalue.value == "Channel Sales, k INR") || (logisvalue.value == "Segment Sales, K INR") || (logisvalue.value == "Product Wise Sales, K INR") || (logisvalue.value == "Sales Cost, k INR")
          || (logisvalue.value == "Income Statement, k INR") || (logisvalue.value == "Channel Effectiveness")
          || (logisvalue.value == "Phase Measures") || (logisvalue.value == "Capital Invested in Securities, k INR") || (logisvalue.value == "Capital, k INR")
          || (logisvalue.value == "Combined Measures")
          || (logisvalue.value == "KPI company-wide") || (logisvalue.value == "KPI product level") || (logisvalue.value == "Operating Income, mn INR")
          || (logisvalue.value == "Break even point") || (logisvalue.value == "CVP Analysis, INR") || (logisvalue.value == "Production, units")
          || (logisvalue.value == "Sales, units")
          || (logisvalue.value == "Scores") || (logisvalue.value == "Investment")
          || (logisvalue.value == "Price, INR") || (logisvalue.value == "Sales, seats") || (logisvalue.value == "Target") || (logisvalue.value == "Proposed Structure")
          || (logisvalue.value == "Earned Value") || (logisvalue.value == "Stakeholder view") || (logisvalue.value == "Cost, K INR")
          || (logisvalue.value == "Thinking Ability") || (logisvalue.value == "Employees Count") || (logisvalue.value == "Income Statement, INR Million") || (logisvalue.value == "Lead Pipeline Count")
          || (logisvalue.value == "Sales Conversion Chances") || (logisvalue.value == "Resource Allocation, hours") || (logisvalue.value == "Value Creation, INR") || (logisvalue.value == "KPI Variation")
          || (logisvalue.value == "Sales units") || (logisvalue.value == "Cash balance, k INR") || (logisvalue.value == "Income Statement, k INR")
          || (logisvalue.value == "Quantity, units") || (logisvalue.value == "Cost, INR  ") || (logisvalue.value == "Financial Statement, Mn INR, Phase 3") || (logisvalue.value == "Company Operating Margins, Phase 1 to 3")
          || (logisvalue.value == "Product Market Share, Phase 1 to 3") || (logisvalue.value == "Company Market Share, Phase 1 to 3") || (logisvalue.value == "Company Sales & Market Share, Phase 3")

        ) {
          worksheet.mergeCells(`B${row.number}:C${row.number + 1}}`);
          for (let cellNumber of [2, 3]) {
            row.getCell(cellNumber).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '00000000' }, // Yellow color
              bgColor: { argb: 'FF0000FF' }
            };
          }
          row.font = cellstyle;

        }

        if ((logisvalue.value == "Parameters") || (logisvalue.value == "Score") || (logisvalue.value == "Summary")) {
          for (let cellNumber of [2, 3]) {
            row.getCell(cellNumber).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '00000000' }, // Yellow color
              bgColor: { argb: 'FF0000FF' }
            };
            // 
          }
          row.font = cellstyle; // row.getCell(1).font = cellstyle;
        }
      


        for (let i = 0; i < attempnumber; i++) {
          if (
            (row.getCell(2).value == "Round1") || (row.getCell(2).value == "Round2") ||
            (row.getCell(2).value == "Round3") || (row.getCell(2).value == "Round4") ||
            (row.getCell(2).value == "Round5") || (row.getCell(2).value == "Round6") ||
            (row.getCell(2).value == "Round7") ||
            (row.getCell(2).value == "Round8") || (row.getCell(2).value == "Round9") ||
            (row.getCell(2).value == "Round10")
          ) {
            for (let cell of [2, 3, 4, 5, 6, 7, 8]) {
              row.getCell(cell).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'D3D3D3' },
                bgColor: { argb: 'FF0000FF' }
              };
            }
            row.font = cellstyle1;
          }
        }
      });
    }

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, gamename + '.xlsx');
    })
  }

  fillcolorincolumnnameforHrp(row: any) {

    for (let colNumber = 2; colNumber <= 9; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' },
      };
    }
  }


  fillcolorincolumnname(row: any) {
    for (let colNumber = 2; colNumber <= 3; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }


  fillcolorincolumnnamecrm(row: any) {
    for (let colNumber = 2; colNumber <= 4; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }

  fillcoloringheadingamecrm(row: any) {
    // worksheet.mergeCells(`B${row.number}:C${row.number + 1}}`);
    //       for (let cellNumber of [2, 3]) {
    //         row.getCell(cellNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '00000000' }, // Yellow color
    //           bgColor: { argb: 'FF0000FF' }
    //         };
    //       }
          // row.font = cellstyle;
  }

  fillcolorincolumnnameforpromotion(row: any) {

    for (let colNumber = 2; colNumber <= 5; colNumber++) {
      const cell = row.getCell(colNumber);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' }, // Light blue color
      };
    }
  }

  createExcelReportforConsumernewversion(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Age", data.resultList[i].w76 == "" ? '-' : data.resultList[i].w76],
        ["", "Location", data.resultList[i].w77 == "" ? '-' : data.resultList[i].w77],
        ["", "Gender", data.resultList[i].w78 == "" ? '-' : data.resultList[i].w78],
        ["", "Income Class", data.resultList[i].w79 == "" ? '-' : data.resultList[i].w79],
        ["", "Language 1", data.resultList[i].y11 == "" ? '-' : data.resultList[i].y11],
        ["", "Language 2", data.resultList[i].y12 == "" ? '-' : data.resultList[i].y12],
        ["", "Language 3", data.resultList[i].y13 == "" ? '-' : data.resultList[i].y13],
        ["", "Language 4", data.resultList[i].y14 == "" ? '-' : data.resultList[i].y14],
        ["", "Genre", data.resultList[i].w80 == "" ? '-' : data.resultList[i].w80],
        ["", "Situational Element 1", data.resultList[i].y37 == "" ? '-' : data.resultList[i].y37],
        ["", "Situational Element 2", data.resultList[i].y38 == "" ? '-' : data.resultList[i].y38],
        ["", "Social Element 1", data.resultList[i].y43 == "" ? '-' : data.resultList[i].y43],
        ["", "Social Element 2", data.resultList[i].y44 == "" ? '-' : data.resultList[i].y44],
        ["", "Social Element 3", data.resultList[i].y45 == "" ? '-' : data.resultList[i].y45],
        ["", "Lifestyle Element", data.resultList[i].w50 == "" ? '-' : data.resultList[i].w50],
        ["", "Communication", data.resultList[i].w52 == "" ? '-' : data.resultList[i].w52],
        ["", "Channel 1", data.resultList[i].y55 == "" ? '-' : data.resultList[i].y55],
        ["", "Channel 2", data.resultList[i].y56 == "" ? '-' : data.resultList[i].y56],
        ["", "Channel 3", data.resultList[i].y57 == "" ? '-' : data.resultList[i].y57],
        ["", "Publishing", data.resultList[i].w64 == "" ? '-' : data.resultList[i].w64],
        ["", "Monetization", data.resultList[i].w81 == "" ? '-' : data.resultList[i].w81],
        ["", "Ads Network", data.resultList[i].w70 == "" ? '-' : data.resultList[i].w70],
        ["", "Banner Ads", data.resultList[i].w71 == "" ? '-' : data.resultList[i].w71],
        ["", "Rewarded Ads", data.resultList[i].w72 == "" ? '-' : data.resultList[i].w72],
        ["", "Interstitial Ads", data.resultList[i].w73 == "" ? '-' : data.resultList[i].w73],
        ["", "Interactive Ads", data.resultList[i].w74 == "" ? '-' : data.resultList[i].w74],

        [],
        ["", "Market, %", '', ''],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Market Share", Number((Number(data.resultList[i].ac74) * 100).toFixed(2))],
        ["", "Paying Customers", Number((Number(data.resultList[i].ac75) * 100).toFixed(2))],

        [],
        ["", "Market Units, Mn", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Number of users", data.resultList[i].p34],
        ["", "Number of paying customers", data.resultList[i].p35],

        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Target", Number((Number(data.resultList[i].w86 * 100).toFixed(0)))],
        ["", "Conceptualizing", Number((Number(data.resultList[i].w87 * 100).toFixed(0)))],
        ["", "Crafting", Number((Number(data.resultList[i].w88 * 100).toFixed(0)))],

        [],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('consumer', 'consumer report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforLogisticsnewversion(data: any) {

    console.log('val', Number(Number(data.resultList[0].C85).toFixed(0)));
    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Truck 1", data.resultList[i].at4 == "" ? '-' : Number(data.resultList[i].at4)],

        ["", "Truck 2", data.resultList[i].at5 == "" ? '-' : Number(data.resultList[i].at5)],

        ["", "Truck 3", data.resultList[i].at6 == "" ? '-' : Number(data.resultList[i].at6)],

        ["", "Truck 1, Optimization", data.resultList[i].at53 == "" ? '-' : data.resultList[i].at53],

        ["", "Truck 2, Optimization", data.resultList[i].at54 == "" ? '-' : data.resultList[i].at54],

        ["", "Truck 3, Optimization", data.resultList[i].at55 == "" ? '-' : data.resultList[i].at55],

        ["", "Unison Limited", data.resultList[i].at56 == "" ? '-' : data.resultList[i].at56],
        ["", "Promton Incorporation", data.resultList[i].at57 == "" ? '-' : data.resultList[i].at57],

        ["", "Fix Corporate", data.resultList[i].at58 == "" ? '-' : data.resultList[i].at58],

        ["", "eCom Limited", data.resultList[i].at59 == "" ? '-' : data.resultList[i].at59],

        ["", "Unison Limited, docks", data.resultList[i].at17 == "" ? '-' : data.resultList[i].at17],
        ["", "Promton Incorporation, docks", data.resultList[i].au17 == "" ? '-' : data.resultList[i].au17],

        ["", "Fix Corporate, docks", data.resultList[i].av17 == "" ? '-' : data.resultList[i].av17],

        ["", "eCom Limited, docks", data.resultList[i].aw17 == "" ? '-' : data.resultList[i].aw17],

        ["", "Warehouse Upgrade 1", data.resultList[i].i7 == "" ? '-' : data.resultList[i].i7],

        ["", "Warehouse Upgrade 2", data.resultList[i].i8 == "" ? '-' : data.resultList[i].i8],

        ["", "Route", data.resultList[i].f66 == "" ? '-' : data.resultList[i].f66],

        ["", "Technology 1", data.resultList[i].g48 == "" ? '-' : data.resultList[i].g48],

        ["", "Technology 2", data.resultList[i].g49 == "" ? '-' : data.resultList[i].g49],

        ["", "Small Trucks", data.resultList[i].at36 == "" ? '-' : Number(data.resultList[i].at36)],

        ["", "Open Body Trucks", data.resultList[i].at37 == "" ? '-' : Number(data.resultList[i].at37)],

        ["", "Covered Container", data.resultList[i].at38 == "" ? '-' : Number(data.resultList[i].at38)],

        ["", "Rail Trips", data.resultList[i].at40 == "" ? '-' : Number(data.resultList[i].at40)],

        ["", "Air Trips", data.resultList[i].at41 == "" ? '-' : Number(data.resultList[i].at41)],

        ["", "Small Trucks, Optimization", data.resultList[i].at60 == "" ? '-' : data.resultList[i].at60],

        ["", "Open Body Trucks, Optimization", data.resultList[i].at61 == "" ? '-' : data.resultList[i].at61],

        ["", "Covered Container, Optimization", data.resultList[i].at62 == "" ? '-' : data.resultList[i].at62],

        ["", "Rail, Optimization", data.resultList[i].at63 == "" ? '-' : data.resultList[i].at63],

        ["", "Air, Optimization", data.resultList[i].at64 == "" ? '-' : data.resultList[i].at64],


        [],
        ["", "Revenue, INR", '', ''],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Trucks", Number(Number(data.resultList[0].c85).toFixed(0))],

        ["", "Rail", Number(Number(data.resultList[0].c86).toFixed(0))],

        ["", "Air", Number(Number(data.resultList[0].c87).toFixed(0))],



        [],
        ["", "Turnaround Time, days", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Unison Limited", Number(Number(data.resultList[0].j102).toFixed(1))],

        ["", "Promton Incorporation", Number(Number(data.resultList[0].j103).toFixed(1))],

        ["", "Fix Corporate", Number(Number(data.resultList[i].j104).toFixed(1))],

        ["", "eCom Limited", Number(Number(data.resultList[i].j105).toFixed(1))],



        [],
        ["", "Inbound Logistics TAT, days", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Unison Limited", Number(Number(data.resultList[i].v21).toFixed(1))],

        ["", "Promton Incorporation", Number(Number(data.resultList[i].v22).toFixed(1))],

        ["", "Fix Corporate", Number(Number(data.resultList[i].v23).toFixed(1))],

        ["", "eCom Limited", Number(Number(data.resultList[i].v24).toFixed(1))],



        [],
        ["", "Inbound Logistics Cost, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Fuel Cost", Number(Number(data.resultList[i].c28).toFixed(0))],

        ["", "Fleet Wages Cost", Number(Number(data.resultList[i].c29).toFixed(0))],

        ["", "Contract Wage Cost", Number(Number(data.resultList[i].c30).toFixed(0))],

        ["", "Warehouse Technology Cost", Number(Number(data.resultList[i].c31).toFixed(0))],

        ["", "Under Utilization Opportunity Cost", Number(Number(data.resultList[i].c32).toFixed(0))],
        ["", "Other Cost", Number(Number(data.resultList[i].c33).toFixed(0))],
        ["", "Total Cost", Number(Number(data.resultList[i].c34).toFixed(0))],

        [],
        ["", "Outbound Logistics Cost, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Fuel Cost", Number(Number(data.resultList[i].c90).toFixed(0))],

        ["", "Fleet Wages Cost", Number(Number(data.resultList[i].c91).toFixed(0))],

        ["", "Contract Wage Cost", Number(Number(data.resultList[i].c92).toFixed(0))],

        ["", "Warehouse Technology Cost", Number(Number(data.resultList[i].c93).toFixed(0))],

        ["", "Other Cost", Number(Number(data.resultList[i].c94).toFixed(0))],

        ["", "Total Cost", Number(Number(data.resultList[i].c95).toFixed(0))],


        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Logistics Cost, INR", Number(Number(data.resultList[i].j107).toFixed(0))],

        ["", "Revenue, INR", Number(Number(data.resultList[i].j108).toFixed(0))],
        ["", "Effectiveness", Number((data.resultList[i].j109 * 100).toFixed(0))],
        ["", "TAT obligation met", data.resultList[i].j110],
        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score'],
        ["", "Inbound", Number((Number(data.resultList[i].at65 * 100).toFixed(0)))],
        ["", "Warehouse", Number(Number(data.resultList[i].at66 * 100).toFixed(0))],
        ["", "Routes & Technology", Number(Number(data.resultList[i].at67 * 100).toFixed(0))],
        ["", "Outbound", Number(Number(data.resultList[i].at68 * 100).toFixed(0))],
        [],
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('logistics', 'logistics report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforChangemanagement(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {



      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Awareness"],
        ["", "Organization Wide Intervention", data.resultList[i].bk6 == "" ? '-' : data.resultList[i].bk6],

        ["", "Individual Activity Intervention", data.resultList[i].bk7 == "" ? '-' : data.resultList[i].bk7],

        ["", "Individual Actvity, Kabir", data.resultList[i].bk8 == "" ? '-' : data.resultList[i].bk8],

        ["", "Individual Actvity, Anne", data.resultList[i].bk9 == "" ? '-' : data.resultList[i].bk9],

        ["", "Individual Actvity, Rajas", data.resultList[i].bk10 == "" ? '-' : data.resultList[i].bk10],

        ["", "Individual Actvity, Priya", data.resultList[i].bk11 == "" ? '-' : data.resultList[i].bk11],

        ["", "Individual Actvity, Neha", data.resultList[i].bk12 == "" ? '-' : data.resultList[i].bk12],
        ["", "Individual Actvity, Rajat", data.resultList[i].bk13 == "" ? '-' : data.resultList[i].bk13],

        ["", "Group Activity Intervention", data.resultList[i].bk14 == "" ? '-' : data.resultList[i].bk14],

        ["", "Group Actvity, Kabir", data.resultList[i].bk15 == "" ? '-' : data.resultList[i].bk15],

        ["", "Group Actvity, Anne", data.resultList[i].bk16 == "" ? '-' : data.resultList[i].bk16],
        ["", "Group Actvity, Rajas", data.resultList[i].bk17 == "" ? '-' : data.resultList[i].bk17],

        ["", "Group Actvity, Priya", data.resultList[i].bk18 == "" ? '-' : data.resultList[i].bk18],

        ["", "Group Actvity, Neha", data.resultList[i].bk19 == "" ? '-' : data.resultList[i].bk19],

        ["", "Group Actvity, Rajat", data.resultList[i].bk20 == "" ? '-' : data.resultList[i].bk20],
        ["", "Motivation"],
        [],
        ["", "Organization Wide Intervention", data.resultList[i].bk22 == "" ? '-' : data.resultList[i].bk22],

        ["", "Individual Activity Intervention", data.resultList[i].bk23 == "" ? '-' : data.resultList[i].bk23],

        ["", "Individual Actvity, Kabir", data.resultList[i].bk24 == "" ? '-' : data.resultList[i].bk24],

        ["", "Individual Actvity, Anne", data.resultList[i].bk25 == "" ? '-' : data.resultList[i].bk25],

        ["", "Individual Actvity, Rajas", data.resultList[i].bk26 == "" ? '-' : data.resultList[i].bk26],

        ["", "Individual Actvity, Priya", data.resultList[i].bk27 == "" ? '-' : data.resultList[i].bk27],

        ["", "Individual Actvity, Neha", data.resultList[i].bk28 == "" ? '-' : data.resultList[i].bk28],
        ["", "Individual Actvity, Rajat", data.resultList[i].bk29 == "" ? '-' : data.resultList[i].bk29],

        ["", "Group Activity Intervention", data.resultList[i].bk30 == "" ? '-' : data.resultList[i].bk30],

        ["", "Group Actvity, Kabir", data.resultList[i].bk31 == "" ? '-' : data.resultList[i].bk31],

        ["", "Group Actvity, Anne", data.resultList[i].bk32 == "" ? '-' : data.resultList[i].bk32],
        ["", "Group Actvity, Rajas", data.resultList[i].bk33 == "" ? '-' : data.resultList[i].bk33],

        ["", "Group Actvity, Priya", data.resultList[i].bk34 == "" ? '-' : data.resultList[i].bk34],

        ["", "Group Actvity, Neha", data.resultList[i].bk35 == "" ? '-' : data.resultList[i].bk35],

        ["", "Group Actvity, Rajat", data.resultList[i].bk36 == "" ? '-' : data.resultList[i].bk36],
        ["", "Commitment"],

        [],
        ["", "Organization Wide Intervention", data.resultList[i].bk38 == "" ? '-' : data.resultList[i].bk38],

        ["", "Individual Activity Intervention", data.resultList[i].bk39 == "" ? '-' : data.resultList[i].bk39],

        ["", "Individual Actvity, Kabir", data.resultList[i].bk40 == "" ? '-' : data.resultList[i].bk40],

        ["", "Individual Actvity, Anne", data.resultList[i].bk41 == "" ? '-' : data.resultList[i].bk41],

        ["", "Individual Actvity, Rajas", data.resultList[i].bk42 == "" ? '-' : data.resultList[i].bk42],

        ["", "Individual Actvity, Priya", data.resultList[i].bk43 == "" ? '-' : data.resultList[i].bk43],

        ["", "Individual Actvity, Neha", data.resultList[i].bk44 == "" ? '-' : data.resultList[i].bk44],
        ["", "Individual Actvity, Rajat", data.resultList[i].bk45 == "" ? '-' : data.resultList[i].bk45],

        ["", "Group Activity Intervention", data.resultList[i].bk46 == "" ? '-' : data.resultList[i].bk46],

        ["", "Group Actvity, Kabir", data.resultList[i].bk47 == "" ? '-' : data.resultList[i].bk47],

        ["", "Group Actvity, Anne", data.resultList[i].bk48 == "" ? '-' : data.resultList[i].bk48],
        ["", "Group Actvity, Rajas", data.resultList[i].bk49 == "" ? '-' : data.resultList[i].bk49],

        ["", "Group Actvity, Priya", data.resultList[i].bk50 == "" ? '-' : data.resultList[i].bk50],

        ["", "Group Actvity, Neha", data.resultList[i].bk51 == "" ? '-' : data.resultList[i].bk51],

        ["", "Group Actvity, Rajat", data.resultList[i].bk52 == "" ? '-' : data.resultList[i].bk52],



        [],
        ["", "Employee Performance Level", "", ""],
        [],
        ["", 'Parameter', 'Awareness Level %', "Motivation Level %", "Commitment Level %", "Performance Level %"],
        ["", "Kabir ", Number((Number(data.resultList[i].x34 * 100).toFixed(0))), Number((Number(data.resultList[i].y34 * 100).toFixed(0))), Number((Number(data.resultList[i].z34 * 100).toFixed(0))), Number((Number(data.resultList[i].aa34 * 100).toFixed(0)))],

        ["", "Anne ", Number((Number(data.resultList[i].x35 * 100).toFixed(0))), Number((Number(data.resultList[i].y35 * 100).toFixed(0))), Number((Number(data.resultList[i].z35 * 100).toFixed(0))), Number((Number(data.resultList[i].aa35 * 100).toFixed(0)))],

        ["", "Rajas ", Number((Number(data.resultList[i].x36 * 100).toFixed(0))), Number((Number(data.resultList[i].y36 * 100).toFixed(0))), Number((Number(data.resultList[i].z36 * 100).toFixed(0))), Number((Number(data.resultList[i].aa36 * 100).toFixed(0)))],

        ["", "Priya ", Number((Number(data.resultList[i].x37 * 100).toFixed(0))), Number((Number(data.resultList[i].y37 * 100).toFixed(0))), Number((Number(data.resultList[i].z37 * 100).toFixed(0))), Number((Number(data.resultList[i].aa37 * 100).toFixed(0)))],
        ["", "Neha ", Number((Number(data.resultList[i].x38 * 100).toFixed(0))), Number((Number(data.resultList[i].y38 * 100).toFixed(0))), Number((Number(data.resultList[i].z38 * 100).toFixed(0))), Number((Number(data.resultList[i].aa38 * 100).toFixed(0)))],
        ["", "Rajat ", Number((Number(data.resultList[i].x39 * 100).toFixed(0))), Number((Number(data.resultList[i].y39 * 100).toFixed(0))), Number((Number(data.resultList[i].z39 * 100).toFixed(0))), Number((Number(data.resultList[i].aa39 * 100).toFixed(0)))],



        [],
        ["", "Group KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Awareness Level %", Number((Number(data.resultList[i].x40 * 100).toFixed(0)))],

        ["", "Motivation Level %", Number((Number(data.resultList[i].y40 * 100).toFixed(0)))],

        ["", "Commitment Level %", Number((Number(data.resultList[i].z40 * 100).toFixed(0)))],

        ["", "Performance Level %", Number((Number(data.resultList[i].aa40 * 100).toFixed(0)))],



        [],
        ["", "Unutilized Time of Employees, minutes", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Kabir", data.resultList[i].ak20 == "" ? '-' : Number(data.resultList[i].ak20)],

        ["", "Anne", data.resultList[i].al20 == "" ? '-' : Number(data.resultList[i].al20)],

        ["", "Rajas", data.resultList[i].am20 == "" ? '-' : Number(data.resultList[i].am20)],

        ["", "Priya", data.resultList[i].an20 == "" ? '-' : Number(data.resultList[i].an20)],

        ["", "Neha", data.resultList[i].ao20 == "" ? '-' : Number(data.resultList[i].ao20)],

        ["", "Rajat", data.resultList[i].ap20 == "" ? '-' : Number(data.resultList[i].ap20)],




        [],
        ["", "Budget, INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Budget Allocated", Number(Number(data.resultList[i].o40).toFixed(0))],

        ["", "Remaining budget, Awareness stage", Number(Number(data.resultList[i].o44).toFixed(0))],

        ["", "Remaining budget, Motivation stage", Number(Number(data.resultList[i].o48).toFixed(0))],

        ["", "Remaining budget, Commitment stage", Number(Number(data.resultList[i].o52).toFixed(0))],



        [],
        ["", "Employee Working Relations", "", ""],
        [],
        ["", '', 'Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
        ["", " Kabir", "", data.resultList[i].al32, data.resultList[i].am32, data.resultList[i].an32, data.resultList[i].ao32, data.resultList[i].ap32],

        ["", " Anne", data.resultList[i].ak33, "", data.resultList[i].am33, data.resultList[i].an33, data.resultList[i].ao33, data.resultList[i].ap33],
        ["", " Rajas", data.resultList[i].ak34, data.resultList[i].al34, "", data.resultList[i].an34, data.resultList[i].ao34, data.resultList[i].ap34],
        ["", " Priya", data.resultList[i].ak35, data.resultList[i].al35, data.resultList[i].am35, "", data.resultList[i].ao35, data.resultList[i].ap35],
        ["", " Neha", data.resultList[i].ak36, data.resultList[i].al36, data.resultList[i].am36, data.resultList[i].an36, "", data.resultList[i].ap36],
        ["", " Rajat", data.resultList[i].ak37, data.resultList[i].al37, data.resultList[i].am37, data.resultList[i].an37, data.resultList[i].ao37, ""],


        [],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('change', 'changemanagement report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforSalestarget(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Sales Target, Modern Trade", data.resultList[i].av7 == "" ? '-' : data.resultList[i].av7],

        ["", "Sales Target, Retail", data.resultList[i].aw7 == "" ? '-' : data.resultList[i].aw7],

        ["", "Sales Target, HoReCa", data.resultList[i].ax7 == "" ? '-' : data.resultList[i].ax7],

        ["", "Personnel, Modern Trade", data.resultList[i].av10 == "" ? '-' : data.resultList[i].av10],

        ["", "Personnel, Retail", data.resultList[i].av11 == "" ? '-' : data.resultList[i].av11],

        ["", "Personnel, HoReCa", data.resultList[i].av12 == "" ? '-' : data.resultList[i].av12],

        ["", "Compensation Modern Trade, Business background", data.resultList[i].av15 == "" ? '-' : data.resultList[i].av15],
        ["", "Compensation Modern Trade, Non business background", data.resultList[i].av16 == "" ? '-' : data.resultList[i].av16],

        ["", "Compensation Retail, Business background", data.resultList[i].aw15 == "" ? '-' : data.resultList[i].aw15],

        ["", "Compensation Retail, Non business background", data.resultList[i].aw16 == "" ? '-' : data.resultList[i].aw16],

        ["", "Compensation HoReCa, Business background", data.resultList[i].ax15 == "" ? '-' : data.resultList[i].ax15],
        ["", "Compensation HoReCa, Non business background", data.resultList[i].ax16 == "" ? '-' : data.resultList[i].ax16],

        ["", "Bonus %, Business background", data.resultList[i].av19 == "" ? '-' : Number(Number((data.resultList[i].av19) * 100).toFixed(1)) + '%'],

        ["", "Bonus %, Non business background", data.resultList[i].av20 == "" ? '-' : Number(Number((data.resultList[i].av20) * 100).toFixed(1)) + '%'],

        ["", "Sales force Modern trade, Business background", data.resultList[i].av23 == "" ? '-' : Number(Number((data.resultList[i].av23) * 100).toFixed(1)) + '%'],

        ["", "Sales force Retail, Business background", data.resultList[i].av24 == "" ? '-' : Number(Number((data.resultList[i].av24) * 100).toFixed(1)) + '%'],

        ["", "Sales force HoReCa, Business background", data.resultList[i].av25 == "" ? '-' : Number(Number((data.resultList[i].av25) * 100).toFixed(1)) + '%'],

        ["", "Sales Representative, Modern Trade %", data.resultList[i].av30 == "" ? '-' : Number(Number((data.resultList[i].av30) * 100).toFixed(1)) + '%'],

        ["", "Sales Representative, Retail %", data.resultList[i].aw30 == "" ? '-' : Number(Number((data.resultList[i].aw30) * 100).toFixed(1)) + '%'],

        ["", "Sales Representative, HoReCa %", data.resultList[i].ax30 == "" ? '-' : Number(Number((data.resultList[i].ax30) * 100).toFixed(1)) + '%'],

        ["", "Key Account Manager, Modern Trade %", data.resultList[i].av31 == "" ? '-' : Number(Number((data.resultList[i].av31) * 100).toFixed(1)) + '%'],

        ["", "Key Account Manager, Retail %", data.resultList[i].aw31 == "" ? '-' : Number(Number((data.resultList[i].aw31) * 100).toFixed(1)) + '%'],
        ["", "Key Account Manager, HoReCa %", data.resultList[i].ax31 == "" ? '-' : Number(Number((data.resultList[i].ax31) * 100).toFixed(1)) + '%'],

        ["", "Territory Sales Manager, Modern Trade %", data.resultList[i].av32 == "" ? '-' : Number(Number((data.resultList[i].av32) * 100).toFixed(1)) + '%'],

        ["", "Territory Sales Manager, Retail %", data.resultList[i].aw32 == "" ? '-' : Number(Number((data.resultList[i].aw32) * 100).toFixed(1)) + '%'],

        ["", "Territory Sales Manager, HoReCa %", data.resultList[i].ax32 == "" ? '-' : Number(Number((data.resultList[i].ax32) * 100).toFixed(1)) + '%'],
        ["", "Gung Ho, Modern Trade %", data.resultList[i].av35 == "" ? '-' : Number(Number((data.resultList[i].av35) * 100).toFixed(1)) + '%'],

        ["", "Gung Ho, Retail %", data.resultList[i].aw35 == "" ? '-' : Number(Number((data.resultList[i].aw35) * 100).toFixed(1)) + '%'],

        ["", "Gung Ho, HoReCa %", data.resultList[i].ax35 == "" ? '-' : Number(Number((data.resultList[i].ax35) * 100).toFixed(1)) + '%'],

        ["", "Buddy,  Modern Trade %", data.resultList[i].av36 == "" ? '-' : Number(Number((data.resultList[i].av36) * 100).toFixed(1)) + '%'],
        ["", "Buddy, Retail %", data.resultList[i].aw36 == "" ? '-' : Number(Number((data.resultList[i].aw36) * 100).toFixed(1)) + '%'],

        ["", "Buddy, HoReCa %", data.resultList[i].ax36 == "" ? '-' : Number(Number((data.resultList[i].ax36) * 100).toFixed(1)) + '%'],

        ["", "Consultative,  Modern Trade %", data.resultList[i].av37 == "" ? '-' : Number(Number((data.resultList[i].av37) * 100).toFixed(1)) + '%'],

        ["", "Consultative, Retail %", data.resultList[i].aw37 == "" ? '-' : Number(Number((data.resultList[i].aw37) * 100).toFixed(1)) + '%'],

        ["", "Consultative, HoReCa %", data.resultList[i].ax37 == "" ? '-' : Number(Number((data.resultList[i].ax37) * 100).toFixed(1)) + '%'],

        ["", "Involvement in Customers", data.resultList[i].av39 == 1 ? 'Yes' : 'No'],

        ["", "Sales Strategy", data.resultList[i].av40 == 1 ? 'Yes' : 'No'],
        ["", "Sales and Marketing Integration", data.resultList[i].av41 == 1 ? 'Yes' : 'No'],

        ["", "Sales Personnel Support", data.resultList[i].av42 == 1 ? 'Yes' : 'No'],

        ["", "Best individual performer", data.resultList[i].av44 == 1 ? 'Yes' : 'No'],

        ["", "Best team effort", data.resultList[i].av45 == 1 ? 'Yes' : 'No'],
        ["", "Friendliest Coworker", data.resultList[i].av46 == 1 ? 'Yes' : 'No'],

        ["", "Value Based Sales Tactics", data.resultList[i].av50 == 1 ? 'Yes' : 'No'],

        ["", "Trust Sales", data.resultList[i].av51 == 1 ? 'Yes' : 'No'],

        ["", "Product Management", data.resultList[i].av52 == 1 ? 'Yes' : 'No'],

        ["", "After Sales Concept", data.resultList[i].av53 == 1 ? 'Yes' : 'No'],
        ["", "Relationship Skills", data.resultList[i].av54 == 1 ? 'Yes' : 'No'],
        ["", "Key Account Management", data.resultList[i].av55 == 1 ? 'Yes' : 'No'],
        ["", "Adaptive Selling Style", data.resultList[i].av58 == 1 ? 'Yes' : 'No'],
        ["", "Negotiation Style", data.resultList[i].av59 == 1 ? 'Yes' : 'No'],
        ["", "Closing a Sale", data.resultList[i].av60 == 1 ? 'Yes' : 'No'],
        ["", "Efficient Working Method", data.resultList[i].av61 == 1 ? 'Yes' : 'No'],
        ["", "Sales Process Innovation", data.resultList[i].av64 == 1 ? 'Yes' : 'No'],
        ["", "Process Management", data.resultList[i].av65 == 1 ? 'Yes' : 'No'],


        [],
        ["", "Channel Sales, k INR", "", ""],
        [],
        ["", 'Parameter', 'Sales', "Projections"],
        ["", "Modern Trade", Number((Number(data.resultList[i].e55).toFixed(0))), Number((Number(data.resultList[i].d13).toFixed(0)))],

        ["", "Retail", Number((Number(data.resultList[i].e56).toFixed(0))), Number((Number(data.resultList[i].d14).toFixed(0)))],

        ["", "HoReCa", Number((Number(data.resultList[i].e57).toFixed(0))), Number((Number(data.resultList[i].d15).toFixed(0)))],




        [],
        ["", "Segment Sales, K INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Easy Living", Number((Number(data.resultList[i].m59).toFixed(0)))],

        ["", "Experiencers", Number((Number(data.resultList[i].n59).toFixed(0)))],

        ["", "Headonistic", Number((Number(data.resultList[i].o59).toFixed(0)))],

        ["", "Thinkers", Number((Number(data.resultList[i].p59).toFixed(0)))],



        [],
        ["", "Product Wise Sales, K INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Coffino", Number((Number(data.resultList[i].s54).toFixed(0)))],

        ["", "Nutty", Number((Number(data.resultList[i].t54).toFixed(0)))],

        ["", "Fruitful", Number((Number(data.resultList[i].u54).toFixed(0)))],

        ["", "Diblo", Number((Number(data.resultList[i].v54).toFixed(0)))],


        [],
        ["", "Sales Cost, k INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Wages Cost", Number(Number(data.resultList[i].h61).toFixed(0))],

        ["", "Hiring/Retrenchment Cost", Number(Number(data.resultList[i].h62).toFixed(0))],

        ["", "Recognition Cost", Number(Number(data.resultList[i].h63).toFixed(0))],

        ["", "Sales Development Cost", Number(Number(data.resultList[i].h64).toFixed(0))],
        ["", "Sales Training Cost", Number(Number(data.resultList[i].h65).toFixed(0))],
        ["", "Sales Process Cost", Number(Number(data.resultList[i].h66).toFixed(0))],
        ["", "Total Sales Cost", Number(Number(data.resultList[i].h67).toFixed(0))],


        [],
        ["", "Income Statement, k INR", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Revenue", Number(Number(data.resultList[i].e61).toFixed(0))],

        ["", "Variable Cost", Number(Number(data.resultList[i].e62).toFixed(0))],

        ["", "Gross Profit", Number(Number(data.resultList[i].e63).toFixed(0))],

        ["", "Sales & Channel Cost", Number(Number(data.resultList[i].e64).toFixed(0))],
        ["", "Operating Profit/Loss", Number(Number(data.resultList[i].e65).toFixed(0))],


        [],

        ["", "Channel Effectiveness", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Modern Trade", Number(Number((data.resultList[i].j50) * 100).toFixed(1))],

        ["", "Retail", Number(Number((data.resultList[i].j51) * 100).toFixed(1))],

        ["", "HoReCa", Number(Number((data.resultList[i].j52) * 100).toFixed(1))],
        [],

        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Sales Planning", Number(Number((data.resultList[i].bb17) * 100).toFixed(0))],

        ["", "Sales Composition", Number(Number((data.resultList[i].bb18) * 100).toFixed(0))],

        ["", "Sales Development", Number(Number((data.resultList[i].bb19) * 100).toFixed(0))],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('salestarget', 'salestarget report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforCvpanalysis(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],
        ["", "Jeans Demand, units", data.resultList[i].ae8 == "" ? '-' : data.resultList[i].ae8],

        ["", "Jeans Price, INR", data.resultList[i].ae9 == "" ? '-' : data.resultList[i].ae9],

        ["", "Jeans Advertising, mn INR", data.resultList[i].ae10 == "" ? '-' : data.resultList[i].ae10],

        ["", "Jeans Quality Control, mn INR", data.resultList[i].ae11 == "" ? '-' : data.resultList[i].ae11],

        ["", "Top Demand, units", data.resultList[i].af8 == "" ? '-' : data.resultList[i].af8],

        ["", "Top Price, INR", data.resultList[i].af9 == "" ? '-' : data.resultList[i].af9],

        ["", "Top Advertising, mn INR", data.resultList[i].af10 == "" ? '-' : data.resultList[i].af10],
        ["", "Top Quality Control, mn INR", data.resultList[i].af11 == "" ? '-' : data.resultList[i].af11],

        ["", "Number of Machinery", data.resultList[i].ae15 == "" ? '-' : data.resultList[i].ae15],

        ["", "Jeans Capacity Allocation, %", data.resultList[i].ae17 == "" ? '-' : Number((Number(data.resultList[i].ae17).toFixed(0)))],

        ["", "Top Capacity Allocation, %", data.resultList[i].af17 == "" ? '-' : Number((Number(data.resultList[i].af17).toFixed(0)))],



        [],
        ["", "Sales, units", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Demand", Number((Number(data.resultList[i].i23).toFixed(0))), Number((Number(data.resultList[i].j23).toFixed(0)))],

        ["", "Sales", Number((Number(data.resultList[i].i25).toFixed(0))), Number((Number(data.resultList[i].j25).toFixed(0)))],

        [],
        ["", "Production, units", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Production", Number((Number(data.resultList[i].i24).toFixed(0))), Number((Number(data.resultList[i].j24).toFixed(0)))],
        ["", "Closing Inventory", Number((Number(data.resultList[i].i26).toFixed(0))), Number((Number(data.resultList[i].j26).toFixed(0)))],
        ["", "Stockout", Number((Number(data.resultList[i].i27).toFixed(0))), Number((Number(data.resultList[i].j27).toFixed(0)))],


        [],
        ["", "CVP Analysis, INR", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Price per unit", Number((Number(data.resultList[i].i44).toFixed(0))), Number((Number(data.resultList[i].j44).toFixed(0)))],
        ["", "Variable cost per unit", Number((Number(data.resultList[i].m45).toFixed(0))), Number((Number(data.resultList[i].n45).toFixed(0)))],
        ["", "Contribution per unit", Number((Number(data.resultList[i].i48).toFixed(0))), Number((Number(data.resultList[i].j48).toFixed(0)))],

        [],
        ["", "Break even point", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Breakeven sales, mn INR", Number((Number(data.resultList[i].i52).toFixed(0))), Number((Number(data.resultList[i].j52).toFixed(0)))],
        ["", "Breakeven sales, units", Number((Number(data.resultList[i].i53).toFixed(0))), Number((Number(data.resultList[i].j53).toFixed(0)))],
        ["", "Margin of safety, units", Number((Number(data.resultList[i].i54).toFixed(0))), Number((Number(data.resultList[i].j54).toFixed(0)))],


        [],
        ["", "Operating Income, mn INR", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Revenue", Number((Number(data.resultList[i].i31).toFixed(0))), Number((Number(data.resultList[i].j31).toFixed(0)))],
        ["", "Production cost", Number((Number(data.resultList[i].i32).toFixed(0))), Number((Number(data.resultList[i].j32).toFixed(0)))],
        ["", "Gross Profit/Loss", Number((Number(data.resultList[i].i33).toFixed(0))), Number((Number(data.resultList[i].j33).toFixed(0)))],
        ["", "Advertising", Number((Number(data.resultList[i].i34).toFixed(0))), Number((Number(data.resultList[i].j34).toFixed(0)))],
        ["", "Quality", Number((Number(data.resultList[i].i35).toFixed(0))), Number((Number(data.resultList[i].j35).toFixed(0)))],
        ["", "Inventory holding cost", Number((Number(data.resultList[i].i36).toFixed(0))), Number((Number(data.resultList[i].j36).toFixed(0)))],
        ["", "Administration", Number((Number(data.resultList[i].i37).toFixed(0))), Number((Number(data.resultList[i].j37).toFixed(0)))],
        ["", "EBITDA", Number((Number(data.resultList[i].i38).toFixed(0))), Number((Number(data.resultList[i].j38).toFixed(0)))],
        ["", "Depreciation", Number((Number(data.resultList[i].i39).toFixed(0))), Number((Number(data.resultList[i].j39).toFixed(0)))],
        ["", "Operating Profit/Loss", Number((Number(data.resultList[i].i40).toFixed(0))), Number((Number(data.resultList[i].j40).toFixed(0)))],



        [],

        ["", "KPI product level", "", ""],
        [],
        ["", 'Parameter', 'Jeans', "Top"],
        ["", "Contribution Ratio, %", Number((Number((data.resultList[i].i49) * 100).toFixed(0))), Number((Number((data.resultList[i].j49) * 100).toFixed(0)))],
        ["", "Operating Margin, %", Number((Number((data.resultList[i].i41) * 100).toFixed(0))), Number((Number((data.resultList[i].j41) * 100).toFixed(0)))],
        ["", "Market Share, %", Number((Number((data.resultList[i].i19) * 100).toFixed(0))), Number((Number((data.resultList[i].m19) * 100).toFixed(0)))],

        [],

        ["", "KPI company-wide", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Operating Margin, %", Number(Number((data.resultList[i].k41) * 100).toFixed(0))],

        ["", "Market Share, %", Number(Number((data.resultList[i].m23) * 100).toFixed(0))],

        ["", "Operating Profit/Loss, mn INR", Number(Number((data.resultList[i].k40) * 100).toFixed(0))],
        [],

        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score'],
        ["", "Marketing budge, %", Number(Number((data.resultList[i].ai15) * 100).toFixed(0))],

        ["", "Production budget, %", Number(Number((data.resultList[i].ai16) * 100).toFixed(0))],


      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('cvpanalysis', 'cvpanalysis report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforAccounting(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],

        ["", "Balance Sheet",],
        ["", "Cash", data.resultList[i].ac9 == "" ? '-' : data.resultList[i].ac9],
        ["", "Accounts receivable", data.resultList[i].ac10 == "" ? '-' : data.resultList[i].ac10],
        ["", "Inventory", data.resultList[i].ac11 == "" ? '-' : data.resultList[i].ac11],
        ["", "Prepaid expenses", data.resultList[i].ac12 == "" ? '-' : data.resultList[i].ac12],
        ["", "Other current assets", data.resultList[i].ac13 == "" ? '-' : data.resultList[i].ac13],
        ["", "Machinery & equipment", data.resultList[i].ac17 == "" ? '-' : data.resultList[i].ac17],
        ["", "Furniture & fixtures", data.resultList[i].ac18 == "" ? '-' : data.resultList[i].ac18],
        ["", "Leasehold improvements", data.resultList[i].ac19 == "" ? '-' : data.resultList[i].ac19],
        ["", "Land & buildings", data.resultList[i].ac20 == "" ? '-' : Number((Number(data.resultList[i].ac20).toFixed(0)))],
        ["", "Other fixed assets", data.resultList[i].ac21 == "" ? '-' : Number((Number(data.resultList[i].ac21).toFixed(0)))],
        ["", "Intangible assets", data.resultList[i].ac25 == "" ? '-' : Number((Number(data.resultList[i].ac25).toFixed(0)))],
        ["", "Goodwill", data.resultList[i].ac26 == "" ? '-' : Number((Number(data.resultList[i].ac26).toFixed(0)))],
        ["", "Deposits", data.resultList[i].ac27 == "" ? '-' : Number((Number(data.resultList[i].ac27).toFixed(0)))],
        ["", "Other assets", data.resultList[i].ac28 == "" ? '-' : Number((Number(data.resultList[i].ac28).toFixed(0)))],
        ["", "Accounts payable", data.resultList[i].ac35 == "" ? '-' : Number((Number(data.resultList[i].ac35).toFixed(0)))],
        ["", "Accrued expenses", data.resultList[i].ac36 == "" ? '-' : Number((Number(data.resultList[i].ac36).toFixed(0)))],
        ["", "Unearned revenue", data.resultList[i].ac37 == "" ? '-' : Number((Number(data.resultList[i].ac37).toFixed(0)))],
        ["", "Notes, short-term", data.resultList[i].ac38 == "" ? '-' : Number((Number(data.resultList[i].ac38).toFixed(0)))],
        ["", "Current part of long-term debt", data.resultList[i].ac39 == "" ? '-' : Number((Number(data.resultList[i].ac39).toFixed(0)))],
        ["", "Bank loans payable", data.resultList[i].ac43 == "" ? '-' : Number((Number(data.resultList[i].ac43).toFixed(0)))],
        ["", "Notes payable to stockholders", data.resultList[i].ac44 == "" ? '-' : Number((Number(data.resultList[i].ac44).toFixed(0)))],
        ["", "LESS: Short-term portion", data.resultList[i].ac45 == "" ? '-' : Number((Number(data.resultList[i].ac45).toFixed(0)))],
        ["", "Other long term debt", data.resultList[i].ac46 == "" ? '-' : Number((Number(data.resultList[i].ac46).toFixed(0)))],
        ["", "Invested capital", data.resultList[i].ac52 == "" ? '-' : Number((Number(data.resultList[i].ac52).toFixed(0)))],
        ["", "Retained earnings - beginning", data.resultList[i].ac53 == "" ? '-' : Number((Number(data.resultList[i].ac53).toFixed(0)))],
        ["", "Retained earnings - current", data.resultList[i].ac54 == "" ? '-' : Number((Number(data.resultList[i].ac54).toFixed(0)))],

        ["", "Income Statement"],
        ["", "Revenue", data.resultList[i].ac61 == "" ? '-' : Number((Number(data.resultList[i].ac61).toFixed(0)))],
        ["", "Cost of good sold", data.resultList[i].ac62 == "" ? '-' : Number((Number(data.resultList[i].ac62).toFixed(0)))],
        ["", "Sales cost", data.resultList[i].ac66 == "" ? '-' : Number((Number(data.resultList[i].ac66).toFixed(0)))],
        ["", "Administration cost", data.resultList[i].ac67 == "" ? '-' : Number((Number(data.resultList[i].ac67).toFixed(0)))],
        ["", "Bad debts", data.resultList[i].ac68 == "" ? '-' : Number((Number(data.resultList[i].ac68).toFixed(0)))],
        ["", "Depreciation & Amortization", data.resultList[i].ac70 == "" ? '-' : Number((Number(data.resultList[i].ac70).toFixed(0)))],
        ["", "Interest Expense", data.resultList[i].ac73 == "" ? '-' : Number((Number(data.resultList[i].ac73).toFixed(0)))],
        ["", "Tax", data.resultList[i].ac76 == "" ? '-' : Number((Number(data.resultList[i].ac76).toFixed(0)))],

        ["", "Cash Flow Statement"],
        ["", "Opening balance", data.resultList[i].ac81 == "" ? '-' : Number((Number(data.resultList[i].ac81).toFixed(0)))],
        ["", "Operations, Cash In", data.resultList[i].ac84 == "" ? '-' : Number((Number(data.resultList[i].ac84).toFixed(0)))],
        ["", "Operations, Cash Out", data.resultList[i].ac85 == "" ? '-' : Number((Number(data.resultList[i].ac85).toFixed(0)))],
        ["", "Investment, Cash In", data.resultList[i].ac88 == "" ? '-' : Number((Number(data.resultList[i].ac88).toFixed(0)))],
        ["", "Investment, Cash Out", data.resultList[i].ac89 == "" ? '-' : Number((Number(data.resultList[i].ac89).toFixed(0)))],
        ["", "Financing, Cash In", data.resultList[i].ac92 == "" ? '-' : Number((Number(data.resultList[i].ac92).toFixed(0)))],
        ["", "Financing, Cash Out", data.resultList[i].ac93 == "" ? '-' : Number((Number(data.resultList[i].ac93).toFixed(0)))],
        ["", "Opportunities",],
        ["", "Investment in Research and Development", data.resultList[i].b25 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Expansion of Manufacturing Facilities", data.resultList[i].b26 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Debt Restructuring", data.resultList[i].b27 == 1 ? '"Suggested"' : "Not Suggested"],
        ["", "Cost Reduction Initiatives", data.resultList[i].b28 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Introduction of Premium Product Line", data.resultList[i].b29 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Employee Training and Development", data.resultList[i].b30 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Working Capital Optimization", data.resultList[i].b31 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Equipment Lease Financing", data.resultList[i].b32 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Exploring Export Opportunities", data.resultList[i].b33 == 1 ? "Suggested" : "Not Suggested"],




        [],
        ["", "Scores", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Balance Sheet", Number(((Number(data.resultList[i].k5) * 100).toFixed(0)))],
        ["", "Income Statement", Number(((Number(data.resultList[i].k6) * 100).toFixed(0)))],
        ["", "Cash Flow Statement", Number(((Number(data.resultList[i].k7) * 100).toFixed(0)))],

        [],
        ["", "Investment", "", ""],
        [],
        ["", 'Parameter', 'Approval Likelihood', '1-Year Value Creation', '3-Year Value Creation'],
        ["", data.resultList[i].j25, data.resultList[i].k25, Number((Number(data.resultList[i].l25).toFixed(0))), Number((Number(data.resultList[i].m25).toFixed(0)))],
        ["", data.resultList[i].j26, data.resultList[i].k26, Number((Number(data.resultList[i].l26).toFixed(0))), Number((Number(data.resultList[i].m26).toFixed(0)))],
        ["", data.resultList[i].j27, data.resultList[i].k27, Number((Number(data.resultList[i].l27).toFixed(0))), Number((Number(data.resultList[i].m27).toFixed(0)))],


        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Total Score", Number((Number((data.resultList[i].l8) * 100).toFixed(0))) + "%"],
        ["", "1-Year Value Creation", Number((Number(data.resultList[i].l28).toFixed(0)))],
        ["", "3-Year Value Creation", Number((Number(data.resultList[i].m28).toFixed(0)))],

        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score'],
        ["", "Accounts", Number(Number((data.resultList[i].ag16) * 100).toFixed(0)) + "%"],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('accountinggame', 'Accounting Report', this.excelalldata, data.resultList.length);

  }
  createExcelReportforAccountingArabic(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],

        ["", "Balance Sheet",],
        ["", "Cash", data.resultList[i].ac9 == "" ? '-' : data.resultList[i].ac9],
        ["", "Accounts receivable", data.resultList[i].ac10 == "" ? '-' : data.resultList[i].ac10],
        ["", "Inventory", data.resultList[i].ac11 == "" ? '-' : data.resultList[i].ac11],
        ["", "Prepaid expenses", data.resultList[i].ac12 == "" ? '-' : data.resultList[i].ac12],
        ["", "Other current assets", data.resultList[i].ac13 == "" ? '-' : data.resultList[i].ac13],
        ["", "Machinery & equipment", data.resultList[i].ac17 == "" ? '-' : data.resultList[i].ac17],
        ["", "Furniture & fixtures", data.resultList[i].ac18 == "" ? '-' : data.resultList[i].ac18],
        ["", "Leasehold improvements", data.resultList[i].ac19 == "" ? '-' : data.resultList[i].ac19],
        ["", "Land & buildings", data.resultList[i].ac20 == "" ? '-' : Number((Number(data.resultList[i].ac20).toFixed(0)))],
        ["", "Other fixed assets", data.resultList[i].ac21 == "" ? '-' : Number((Number(data.resultList[i].ac21).toFixed(0)))],
        ["", "Intangible assets", data.resultList[i].ac25 == "" ? '-' : Number((Number(data.resultList[i].ac25).toFixed(0)))],
        ["", "Goodwill", data.resultList[i].ac26 == "" ? '-' : Number((Number(data.resultList[i].ac26).toFixed(0)))],
        ["", "Deposits", data.resultList[i].ac27 == "" ? '-' : Number((Number(data.resultList[i].ac27).toFixed(0)))],
        ["", "Other assets", data.resultList[i].ac28 == "" ? '-' : Number((Number(data.resultList[i].ac28).toFixed(0)))],
        ["", "Accounts payable", data.resultList[i].ac35 == "" ? '-' : Number((Number(data.resultList[i].ac35).toFixed(0)))],
        ["", "Accrued expenses", data.resultList[i].ac36 == "" ? '-' : Number((Number(data.resultList[i].ac36).toFixed(0)))],
        ["", "Unearned revenue", data.resultList[i].ac37 == "" ? '-' : Number((Number(data.resultList[i].ac37).toFixed(0)))],
        ["", "Notes, short-term", data.resultList[i].ac38 == "" ? '-' : Number((Number(data.resultList[i].ac38).toFixed(0)))],
        ["", "Current part of long-term debt", data.resultList[i].ac39 == "" ? '-' : Number((Number(data.resultList[i].ac39).toFixed(0)))],
        ["", "Bank loans payable", data.resultList[i].ac43 == "" ? '-' : Number((Number(data.resultList[i].ac43).toFixed(0)))],
        ["", "Notes payable to stockholders", data.resultList[i].ac44 == "" ? '-' : Number((Number(data.resultList[i].ac44).toFixed(0)))],
        ["", "LESS: Short-term portion", data.resultList[i].ac45 == "" ? '-' : Number((Number(data.resultList[i].ac45).toFixed(0)))],
        ["", "Other long term debt", data.resultList[i].ac46 == "" ? '-' : Number((Number(data.resultList[i].ac46).toFixed(0)))],
        ["", "Invested capital", data.resultList[i].ac52 == "" ? '-' : Number((Number(data.resultList[i].ac52).toFixed(0)))],
        ["", "Retained earnings - beginning", data.resultList[i].ac53 == "" ? '-' : Number((Number(data.resultList[i].ac53).toFixed(0)))],
        ["", "Retained earnings - current", data.resultList[i].ac54 == "" ? '-' : Number((Number(data.resultList[i].ac54).toFixed(0)))],

        ["", "Income Statement"],
        ["", "Revenue", data.resultList[i].ac61 == "" ? '-' : Number((Number(data.resultList[i].ac61).toFixed(0)))],
        ["", "Cost of good sold", data.resultList[i].ac62 == "" ? '-' : Number((Number(data.resultList[i].ac62).toFixed(0)))],
        ["", "Sales cost", data.resultList[i].ac66 == "" ? '-' : Number((Number(data.resultList[i].ac66).toFixed(0)))],
        ["", "Administration cost", data.resultList[i].ac67 == "" ? '-' : Number((Number(data.resultList[i].ac67).toFixed(0)))],
        ["", "Bad debts", data.resultList[i].ac68 == "" ? '-' : Number((Number(data.resultList[i].ac68).toFixed(0)))],
        ["", "Depreciation & Amortization", data.resultList[i].ac70 == "" ? '-' : Number((Number(data.resultList[i].ac70).toFixed(0)))],
        ["", "Interest Expense", data.resultList[i].ac73 == "" ? '-' : Number((Number(data.resultList[i].ac73).toFixed(0)))],
        ["", "Tax", data.resultList[i].ac76 == "" ? '-' : Number((Number(data.resultList[i].ac76).toFixed(0)))],

        ["", "Cash Flow Statement"],
        ["", "Opening balance", data.resultList[i].ac81 == "" ? '-' : Number((Number(data.resultList[i].ac81).toFixed(0)))],
        ["", "Operations, Cash In", data.resultList[i].ac84 == "" ? '-' : Number((Number(data.resultList[i].ac84).toFixed(0)))],
        ["", "Operations, Cash Out", data.resultList[i].ac85 == "" ? '-' : Number((Number(data.resultList[i].ac85).toFixed(0)))],
        ["", "Investment, Cash In", data.resultList[i].ac88 == "" ? '-' : Number((Number(data.resultList[i].ac88).toFixed(0)))],
        ["", "Investment, Cash Out", data.resultList[i].ac89 == "" ? '-' : Number((Number(data.resultList[i].ac89).toFixed(0)))],
        ["", "Financing, Cash In", data.resultList[i].ac92 == "" ? '-' : Number((Number(data.resultList[i].ac92).toFixed(0)))],
        ["", "Financing, Cash Out", data.resultList[i].ac93 == "" ? '-' : Number((Number(data.resultList[i].ac93).toFixed(0)))],
        ["", "Opportunities",],
        ["", "Investment in Research and Development", data.resultList[i].b25 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Expansion of Manufacturing Facilities", data.resultList[i].b26 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Debt Restructuring", data.resultList[i].b27 == 1 ? '"Suggested"' : "Not Suggested"],
        ["", "Cost Reduction Initiatives", data.resultList[i].b28 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Introduction of Premium Product Line", data.resultList[i].b29 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Employee Training and Development", data.resultList[i].b30 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Working Capital Optimization", data.resultList[i].b31 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Equipment Lease Financing", data.resultList[i].b32 == 1 ? "Suggested" : "Not Suggested"],
        ["", "Exploring Export Opportunities", data.resultList[i].b33 == 1 ? "Suggested" : "Not Suggested"],




        [],
        ["", "Scores", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Balance Sheet", Number(((Number(data.resultList[i].k5) * 100).toFixed(0)))],
        ["", "Income Statement", Number(((Number(data.resultList[i].k6) * 100).toFixed(0)))],
        ["", "Cash Flow Statement", Number(((Number(data.resultList[i].k7) * 100).toFixed(0)))],

        [],
        ["", "Investment", "", ""],
        [],
        ["", 'Parameter', 'Approval Likelihood', '1-Year Value Creation', '3-Year Value Creation'],
        ["", data.resultList[i].j25, data.resultList[i].k25, Number((Number(data.resultList[i].l25).toFixed(0))), Number((Number(data.resultList[i].m25).toFixed(0)))],
        ["", data.resultList[i].j26, data.resultList[i].k26, Number((Number(data.resultList[i].l26).toFixed(0))), Number((Number(data.resultList[i].m26).toFixed(0)))],
        ["", data.resultList[i].j27, data.resultList[i].k27, Number((Number(data.resultList[i].l27).toFixed(0))), Number((Number(data.resultList[i].m27).toFixed(0)))],


        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'Output'],
        ["", "Total Score", Number((Number((data.resultList[i].l8) * 100).toFixed(0))) + "%"],
        ["", "1-Year Value Creation", Number((Number(data.resultList[i].l28).toFixed(0)))],
        ["", "3-Year Value Creation", Number((Number(data.resultList[i].m28).toFixed(0)))],

        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score'],
        ["", "Accounts", Number(Number((data.resultList[i].ag16) * 100).toFixed(0)) + "%"],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('accountingarabic', 'accountingarabic Report', this.excelalldata, data.resultList.length);

  }

  createExcelReportforPricing(data: any) {

    this.excelalldata = [];

    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameters", "Input"],

        ["", "Initiate",],
        ["", "Price per seat, INR", data.resultList[i].c12 == "" ? '-' : data.resultList[i].c12],
        ["", "Innovate",],
        ["", "Price per seat, INR", data.resultList[i].c26 == "" ? '-' : Number((Number(data.resultList[i].c26).toFixed(0)))],
        ["", "Service offered to flyer", data.resultList[i].c28 == "" ? '-' : data.resultList[i].c28],
        ["", "Adapt",],
        ["", "Price per seat, INR", data.resultList[i].c49 == "" ? '-' : Number((Number(data.resultList[i].c49).toFixed(0)))],
        ["", "Service offered to flyer", data.resultList[i].c51 == "" ? '-' : data.resultList[i].c51],
        ["", "Promotion offered", data.resultList[i].c54 == "" ? '-' : data.resultList[i].c54],


        [],
        ["", "Price, INR", "", ""],
        [],
        ["", 'Parameter', 'SkyVista', 'Jupiter'],
        ["", "Initiate", Number((Number(data.resultList[i].c12).toFixed(0))), Number((Number(data.resultList[i].d12).toFixed(0)))],
        ["", "Innovate", Number((Number(data.resultList[i].c26).toFixed(0))), Number((Number(data.resultList[i].d26).toFixed(0)))],
        ["", "Adapt", Number((Number(data.resultList[i].c49).toFixed(0))), Number((Number(data.resultList[i].d49).toFixed(0)))],
        ["", "Average pricing", Number((Number(data.resultList[i].c63).toFixed(0))), Number((Number(data.resultList[i].d63).toFixed(0)))],

        [],
        ["", "Sales, seats", "", ""],
        [],
        ["", 'Parameter', 'SkyVista', 'Jupiter'],
        ["", 'Initiate', Number((Number(data.resultList[i].g53).toFixed(0))), Number((Number(data.resultList[i].h53).toFixed(0)))],
        ["", 'Innovate', Number((Number(data.resultList[i].g58).toFixed(0))), Number((Number(data.resultList[i].h58).toFixed(0)))],
        ["", 'Adapt', Number((Number(data.resultList[i].g63).toFixed(0))), Number((Number(data.resultList[i].h63).toFixed(0)))],
        ["", 'Total sales', Number((Number(data.resultList[i].g65).toFixed(0))), Number((Number(data.resultList[i].h65).toFixed(0)))],

        [],
        ["", "Income Statement, INR", "", ""],
        [],
        ["", 'Parameter', 'SkyVista', 'Jupiter'],
        ["", 'Revenue', Number((Number(data.resultList[i].c67).toFixed(0))), Number((Number(data.resultList[i].d67).toFixed(0)))],
        ["", 'Variable cost', Number((Number(data.resultList[i].c68).toFixed(0))), Number((Number(data.resultList[i].d68).toFixed(0)))],
        ["", 'Gross profit', Number((Number(data.resultList[i].c69).toFixed(0))), Number((Number(data.resultList[i].d69).toFixed(0)))],
        ["", 'Fixed cost', Number((Number(data.resultList[i].c70).toFixed(0))), Number((Number(data.resultList[i].d70).toFixed(0)))],
        ["", 'Promotion cost', Number((Number(data.resultList[i].c71).toFixed(0))), Number((Number(data.resultList[i].d71).toFixed(0)))],
        ["", 'Operating Profit/Loss', Number((Number(data.resultList[i].c72).toFixed(0))), Number((Number(data.resultList[i].d72).toFixed(0)))],

        [],
        ["", "KPI", "", ""],
        [],
        ["", 'Parameter', 'SkyVista', 'Jupiter'],
        ["", "Unutilized capacity %", Number((Number((data.resultList[i].c74) * 100).toFixed(0))) + "%", Number((Number((data.resultList[i].d74) * 100).toFixed(0))) + "%",],
        ["", "Margin %", Number((Number((data.resultList[i].c75) * 100).toFixed(0))) + "%", Number((Number((data.resultList[i].d75) * 100).toFixed(0))) + "%"],
        ["", "Cancellation Rate %", Number((Number((data.resultList[i].g66) * 100).toFixed(0))) + "%", Number((Number((data.resultList[i].h66) * 100).toFixed(0))) + "%"],

        [],
        ["", "Thinking Ability, %", "", ""],
        [],
        ["", 'Parameter', 'Score'],
        ["", "Pricing", Number(Number((data.resultList[i].ab20) * 100).toFixed(0)) + "%"],

      ]


      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('pricinggame', 'Pricing Report', this.excelalldata, data.resultList.length);

  }

  createExcelReportformergersacquisition(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      let cleanedJ24 = data.resultList[i].j24
        .replace(/<\/?div>/g, ' ')
        .replace(/<br>/g, ' ')
        // .replace(/\s+/g, ' ') 
        .trim();

      let cleanedk24 = data.resultList[i].k24
        .replace(/<\/?(div|span)(\s+[^>]*)?>/g, ' ')
        .replace(/<br>/g, ' ')
        // .replace(/\s+/g, ' ')
        .trim();
      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Target Firm", data.resultList[i].b24 == "" ? '-' : data.resultList[i].b24],
        ["", "Premium %, over current valuation", data.resultList[i].ac23 == "" ? '-' : Number(data.resultList[i].ac23).toFixed(0)],
        ["", "Cash", data.resultList[i].ac26 == "" ? '-' : Number((Number(data.resultList[i].ac26) * 100).toFixed(0)) + "%"],
        ["", "Loans", data.resultList[i].a27 == "" ? '-' : Number((Number(data.resultList[i].ac27) * 100).toFixed(0)) + "%"],
        ["", "Stock", data.resultList[i].a28 == "" ? '-' : Number((Number(data.resultList[i].ac28) * 100).toFixed(0)) + "%"],
        [],
        ["", "Target", ""],
        [],
        ["", "Parameter", "Input"],
        // ["", "Profile", data.resultList[i].j24 == "" ? '-' : data.resultList[i].j24],
        ["", "Profile", cleanedJ24 === "" ? '-' : cleanedJ24],
        ["", "Synergy Benefits", data.resultList[i].f24 == "" ? '-' : data.resultList[i].f24],
        ["", "Expected Financial Benefit", data.resultList[i].h24 == "" ? '-' : data.resultList[i].h24],
        ["", "Strategic Importance, Max 10", data.resultList[i].g24 == "" ? '-' : data.resultList[i].g24],
        ["", "Cultural Integration Ease, Max 10", data.resultList[i].i24 == "" ? '-' : data.resultList[i].i24],
        [],
        ["", "Proposed Structure", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Cash, INR million", data.resultList[i].c35 == "" ? '-' : Number((Number(data.resultList[i].c35)))],
        ["", "Loan, INR million", data.resultList[i].c36 == "" ? '-' : Number((Number(data.resultList[i].c36)))],
        ["", "Stock, INR million", data.resultList[i].c37 == "" ? '-' : Number((Number(data.resultList[i].c37)))],
        ["", "Target Stake", data.resultList[i].f38 == "" ? '-' : Number((Number(data.resultList[i].f38) * 100).toFixed(0)) + "%"],
        ["", "MAI Stake", data.resultList[i].f39 == "" ? '-' : Number((Number(data.resultList[i].f39) * 100).toFixed(0)) + "%"],
        [],
        ["", "Earned Value", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "BID Price, INR million", data.resultList[i].c29 == "" ? '-' : Number((Number(data.resultList[i].c29)))],
        ["", "ASK - BID Spread, INR million", data.resultList[i].h29 == "" ? '-' : Number((Number(data.resultList[i].h29)))],
        ["", "Offer Status", data.resultList[i].g28 == "" ? '-' : (data.resultList[i].g28)],
        [],
        ["", "Stakeholder view", ""],
        [],
        ["", "Parameter", "Input"],
        // ["", "Comments", data.resultList[i].k24 == "" ? '-' : data.resultList[i].k24],
        ["", "Comments", cleanedk24 === "" ? '-' : cleanedk24],

        ["", "Likelihood of Board Approval", data.resultList[i].l24 == "" ? '-' : data.resultList[i].l24],
        [],
        ["", "Thinking Ability, %", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Assessment", Number(Number((data.resultList[i].ac37) * 100).toFixed(0)) + "%"],
        ["", "Negotiation", Number(Number((data.resultList[i].ac38) * 100).toFixed(0)) + "%"],
        ["", "Financing", Number(Number((data.resultList[i].ac39) * 100).toFixed(0)) + "%"],

      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('mergersacquisition', 'mergersacquisition report', this.excelalldata, data.resultList.length);


  }

  //HRP Planning Excel Sheet
  createExcelReportforhrpplanning(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Sales & Marketing", data.resultList[i].ae7 == "" ? '-' : Number(data.resultList[i].ae7).toFixed(0)],
        ["", "Logistics & Supply Chain", data.resultList[i].ae8 == "" ? '-' : Number(data.resultList[i].ae8).toFixed(0)],
        ["", "Design & Production", data.resultList[i].ae9 == "" ? '-' : Number(data.resultList[i].ae9).toFixed(0)],
        ["", "Technical", data.resultList[i].ae10 == "" ? '-' : Number(data.resultList[i].ae10).toFixed(0)],
        ["", "Customer Experience", data.resultList[i].ae11 == "" ? '-' : Number(data.resultList[i].ae11).toFixed(0)],
        ["", "Administration", data.resultList[i].ae12 == "" ? '-' : Number(data.resultList[i].ae12).toFixed(0)],
        ["", "Online Job Portals", data.resultList[i].ae15 == 1 ? 'Yes' : 'No'],
        ["", "Campus Recruitment", data.resultList[i].ae16 == 1 ? 'Yes' : 'No'],
        ["", "Employee Referral Programs", data.resultList[i].ae17 == 1 ? 'Yes' : 'No'],
        ["", "Social Media and Company Website", data.resultList[i].ae18 == 1 ? 'Yes' : 'No'],
        ["", "Recruitment Agencies and Headhunters", data.resultList[i].ae19 == 1 ? 'Yes' : 'No'],
        ["", "Sales & Marketing, New Joinee Hike %", data.resultList[i].ae21 == "" ? '-' : Number((Number(data.resultList[i].ae21) * 100).toFixed(0)) + "%"],
        ["", "Logistics & Supply Chain, New Joinee Hike %", data.resultList[i].ae22 == "" ? '-' : Number((Number(data.resultList[i].ae22) * 100).toFixed(0)) + "%"],
        ["", "Design & Production, New Joinee Hike %", data.resultList[i].ae23 == "" ? '-' : Number((Number(data.resultList[i].ae23) * 100).toFixed(0)) + "%"],
        ["", "Technical, New Joinee Hike %", data.resultList[i].ae24 == "" ? '-' : Number((Number(data.resultList[i].ae24) * 100).toFixed(0)) + "%"],
        ["", "Customer Experience, New Joinee Hike %", data.resultList[i].ae25 == "" ? '-' : Number((Number(data.resultList[i].ae25) * 100).toFixed(0)) + "%"],
        ["", "Administration, New Joinee Hike %", data.resultList[i].ae26 == "" ? '-' : Number((Number(data.resultList[i].ae26) * 100).toFixed(0)) + "%"],
        ["", "Sales & Marketing, Existing Employee Hike %", data.resultList[i].af21 == "" ? '-' : Number((Number(data.resultList[i].af21) * 100).toFixed(0)) + "%"],
        ["", "Logistics & Supply Chain, Existing Employee Hike %", data.resultList[i].af22 == "" ? '-' : Number((Number(data.resultList[i].af22) * 100).toFixed(0)) + "%"],
        ["", "Design & Production, Existing Employee Hike %", data.resultList[i].af23 == "" ? '-' : Number((Number(data.resultList[i].af23) * 100).toFixed(0)) + "%"],
        ["", "Technical, Existing Employee Hike %", data.resultList[i].af24 == "" ? '-' : Number((Number(data.resultList[i].af24) * 100).toFixed(0)) + "%"],
        ["", "Customer Experience, Existing Employee Hike %", data.resultList[i].af25 == "" ? '-' : Number((Number(data.resultList[i].af25) * 100).toFixed(0)) + "%"],
        ["", "Administration, Existing Employee Hike %", data.resultList[i].af26 == "" ? '-' : Number((Number(data.resultList[i].af26) * 100).toFixed(0)) + "%"],

        ["", "Digital Marketing Mastery", data.resultList[i].ae29 == 1 ? 'Yes' : 'No'],
        ["", "Advanced E-commerce Analytics", data.resultList[i].ae30 == 1 ? 'Yes' : 'No'],
        ["", "Augmented Reality (AR) in Fashion E-commerce", data.resultList[i].ae31 == 1 ? 'Yes' : 'No'],
        ["", "Customer Service Excellence", data.resultList[i].ae32 == 1 ? 'Yes' : 'No'],
        ["", "Sustainable Fashion and Ethical Production", data.resultList[i].ae33 == 1 ? 'Yes' : 'No'],
        ["", "Remote Work Flexibility Policy", data.resultList[i].ae35 == 1 ? 'Yes' : 'No'],
        ["", "Continuous Learning and Development Policy", data.resultList[i].ae36 == 1 ? 'Yes' : 'No'],
        ["", "Comprehensive Health and Wellness Policy", data.resultList[i].ae37 == 1 ? 'Yes' : 'No'],
        ["", "Inclusive and Diverse Hiring Policy", data.resultList[i].ae38 == 1 ? 'Yes' : 'No'],
        [],
        ["", "Employees Count", "", "", "", "", "", ""],
        [],
        ["", "", "", "Technical", "Sales & Marketing", "Logistics & Supply Chain", "Design & Production", "Customer Support", "Administration"],
        ["", "Existing employees", "", Number(data.resultList[i].g73).toFixed(0), Number(data.resultList[i].g74).toFixed(0), Number(data.resultList[i].g75).toFixed(0), Number(data.resultList[i].g76).toFixed(0), Number(data.resultList[i].g77).toFixed(0), Number(data.resultList[i].g78).toFixed(0)],
        ["", "New joinees", "", Number(data.resultList[i].f81).toFixed(0), Number(data.resultList[i].f82).toFixed(0), Number(data.resultList[i].f83).toFixed(0), Number(data.resultList[i].f84).toFixed(0), Number(data.resultList[i].f85).toFixed(0), Number(data.resultList[i].f86).toFixed(0)],
        ["", "Contract employees", "", Number(data.resultList[i].e89).toFixed(0), Number(data.resultList[i].e90).toFixed(0), Number(data.resultList[i].e91).toFixed(0), Number(data.resultList[i].e92).toFixed(0), Number(data.resultList[i].e93).toFixed(0), Number(data.resultList[i].e94).toFixed(0)],
        ["", "Total employees", "", Number(data.resultList[i].h89).toFixed(0), Number(data.resultList[i].h90).toFixed(0), Number(data.resultList[i].h91).toFixed(0), Number(data.resultList[i].h92).toFixed(0), Number(data.resultList[i].h93).toFixed(0), Number(data.resultList[i].h94).toFixed(0)],
        [],
        ["", "Cost, K INR", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Incremental salary, existing employees", data.resultList[i].c114 == "" ? '-' : Number((Number(data.resultList[i].c114) / 1000).toFixed(0))],
        ["", "New hires, salary", data.resultList[i].c115 == "" ? '-' : Number((Number(data.resultList[i].c115) / 1000).toFixed(0))],
        ["", "Contract employees", data.resultList[i].c116 == "" ? '-' : Number((Number(data.resultList[i].c116) / 1000).toFixed(0))],
        ["", "Branding", data.resultList[i].c117 == "" ? '-' : Number((Number(data.resultList[i].c117) / 1000).toFixed(0))],
        ["", "Training", data.resultList[i].c118 == "" ? '-' : Number((Number(data.resultList[i].c118) / 1000).toFixed(0))],
        ["", "Policies", data.resultList[i].c119 == "" ? '-' : Number((Number(data.resultList[i].c119) / 1000).toFixed(0))],
        ["", "Total", data.resultList[i].c120 == "" ? '-' : Number((Number(data.resultList[i].c120) / 1000).toFixed(0))],
        [],
        ["", "KPI", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Employee Satisfaction Score", data.resultList[i].c99 == "" ? '-' : Number(data.resultList[i].c99).toFixed(2)],
        ["", "Average time to fill position, days", data.resultList[i].c103 == "" ? '-' : Number(data.resultList[i].c103).toFixed(2)],
        ["", "Average efficiency across organization", data.resultList[i].c124 == "" ? '-' : Number((Number(data.resultList[i].c124) * 100).toFixed(0)) + "%"],
        ["", "Employees participation in training", data.resultList[i].c112 == "" ? '-' : Number((Number(data.resultList[i].c112) * 100).toFixed(0)) + "%"],
        ["", "Cost per employee, k INR", data.resultList[i].c122 == "" ? '-' : Number(data.resultList[i].c122).toFixed(0)],
        ["", "Recruitment metrics, %", data.resultList[i].c128 == "" ? '-' : Number((Number(data.resultList[i].c128) * 100).toFixed(0)) + "%"],
        [],
        ["", "Thinking Ability", ""],
        [],
        ["", "Parameter", "Score %"],
        ["", "Demand Forecasting", data.resultList[i].ae44 == "" ? '-' : Number((Number(data.resultList[i].ae44) * 100).toFixed(0)) + "%"],
        ["", "Supply Forecasting", data.resultList[i].ae45 == "" ? '-' : Number((Number(data.resultList[i].ae45) * 100).toFixed(0)) + "%"],
        ["", "Analysis & Planning", data.resultList[i].ae46 == "" ? '-' : Number((Number(data.resultList[i].ae46) * 100).toFixed(0)) + "%"],
        ["", "Implementation", data.resultList[i].ae47 == "" ? '-' : Number((Number(data.resultList[i].ae47) * 100).toFixed(0)) + "%"],

      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('hrplanning', 'hrplanning report', this.excelalldata, data.resultList.length);


  }


  //design thinking excel sheet...
  createExcelReportfordesignthinking(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {

      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Target: Battery Life, Days", data.resultList[i].af7 == "" ? '-' : Number(data.resultList[i].af7).toFixed(0)],
        ["", "Target: Affordability, INR", data.resultList[i].af8 == "" ? '-' : Number(data.resultList[i].af8).toFixed(0)],
        ["", "Target: Localization, %", data.resultList[i].af9 == "" ? '-' : Number((Number(data.resultList[i].af9) * 100).toFixed(0)) + "%"],
        ["", "Idea 1", data.resultList[i].c17 == "" ? '-' : data.resultList[i].c17],
        ["", "Idea 2", data.resultList[i].d17 == "" ? '-' : data.resultList[i].d17],
        ["", "Idea 3", data.resultList[i].e17 == "" ? '-' : data.resultList[i].e17],
        ["", "Product 1", data.resultList[i].c17 == "" ? '-' : data.resultList[i].c17],
        ["", "Battery Life", data.resultList[i].af24 == "" ? '-' : Number((Number(data.resultList[i].af24) * 100).toFixed(0)) + "%"],
        ["", "Design & Aesthetics", data.resultList[i].af25 == 1 ? 'Yes' : 'No'],
        ["", "Localized Language Support", data.resultList[i].af26 == 1 ? 'Yes' : 'No'],
        ["", "Seamless Syncing", data.resultList[i].af27 == 1 ? 'Yes' : 'No'],
        ["", "Water Resistance", data.resultList[i].af28 == 1 ? 'Yes' : 'No'],
        ["", "Customizable Watch Faces", data.resultList[i].af29 == 1 ? 'Yes' : 'No'],
        ["", "Unique Health Features", data.resultList[i].af30 == 1 ? 'Yes' : 'No'],
        ["", "Indian Payment System Integration", data.resultList[i].af31 == 1 ? 'Yes' : 'No'],
        ["", "Product 2", data.resultList[i].d17 == "" ? '-' : data.resultList[i].d17],
        ["", "Battery Life", data.resultList[i].af35 == "" ? '-' : Number((Number(data.resultList[i].af35) * 100).toFixed(0)) + "%"],
        ["", "Design & Aesthetics", data.resultList[i].af36 == 1 ? 'Yes' : 'No'],
        ["", "Localized Language Support", data.resultList[i].af37 == 1 ? 'Yes' : 'No'],
        ["", "Seamless Syncing", data.resultList[i].af38 == 1 ? 'Yes' : 'No'],
        ["", "Water Resistance", data.resultList[i].af39 == 1 ? 'Yes' : 'No'],
        ["", "Customizable Watch Faces", data.resultList[i].af40 == 1 ? 'Yes' : 'No'],
        ["", "Unique Health Features", data.resultList[i].af41 == 1 ? 'Yes' : 'No'],
        ["", "Indian Payment System Integration", data.resultList[i].af42 == 1 ? 'Yes' : 'No'],
        ["", "Product 3", data.resultList[i].e17 == "" ? '-' : data.resultList[i].e17],
        ["", "Battery Life", data.resultList[i].af46 == "" ? '-' : Number((Number(data.resultList[i].af46) * 100).toFixed(0)) + "%"],
        ["", "Design & Aesthetics", data.resultList[i].af47 == 1 ? 'Yes' : 'No'],
        ["", "Localized Language Support", data.resultList[i].af48 == 1 ? 'Yes' : 'No'],
        ["", "Seamless Syncing", data.resultList[i].af49 == 1 ? 'Yes' : 'No'],
        ["", "Water Resistance", data.resultList[i].af50 == 1 ? 'Yes' : 'No'],
        ["", "Customizable Watch Faces", data.resultList[i].af51 == 1 ? 'Yes' : 'No'],
        ["", "Unique Health Features", data.resultList[i].af52 == 1 ? 'Yes' : 'No'],
        ["", "Indian Payment System Integration", data.resultList[i].af53 == 1 ? 'Yes' : 'No'],
        ["", "Product Launch", data.resultList[i].c49 == 1 ? 'Yes' : 'No'],
        ["", "Price, INR", data.resultList[i].af57 == "" ? '-' : Number(data.resultList[i].af57).toFixed(0)],
        ["", "Advertising, INR Million", data.resultList[i].af58 == "" ? '-' : Number(data.resultList[i].af58).toFixed(0)],
        ["", "Warranty Period", data.resultList[i].af59 == "" ? '-' : data.resultList[i].af59],
        ["", "Distributor/Wholesaler, INR Million", data.resultList[i].af60 == "" ? '-' : Number(data.resultList[i].af60).toFixed(0)],
        ["", "E-commerce, INR Million", data.resultList[i].af61 == "" ? '-' : Number(data.resultList[i].af61).toFixed(0)],
        ["", "Telecom Partnerships, INR Million", data.resultList[i].af62 == "" ? '-' : Number(data.resultList[i].af62).toFixed(0)],
        ["", "Direct-to-consumer, INR Million", data.resultList[i].af63 == "" ? '-' : Number(data.resultList[i].af58).toFixed(0)],

        ["", "Income Statement, INR Million", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Revenue", data.resultList[i].c74 == "" ? '-' : Number(data.resultList[i].c74).toFixed(0)],
        ["", "Variable Cost", data.resultList[i].c75 == "" ? '-' : Number(data.resultList[i].c75).toFixed(0)],
        ["", "Gross Profit", data.resultList[i].c76 == "" ? '-' : Number(data.resultList[i].c74).toFixed(0)],
        ["", "Production Line Cost", data.resultList[i].c77 == "" ? '-' : Number(data.resultList[i].c77).toFixed(0)],
        ["", "Administration Cost", data.resultList[i].c78 == "" ? '-' : Number(data.resultList[i].c78).toFixed(0)],
        ["", "Market Research Cost", data.resultList[i].c79 == "" ? '-' : Number(data.resultList[i].c79).toFixed(0)],
        ["", "Advertising Cost", data.resultList[i].c80 == "" ? '-' : Number(data.resultList[i].c80).toFixed(0)],
        ["", "Channel Investment Cost", data.resultList[i].c81 == "" ? '-' : Number(data.resultList[i].c81).toFixed(0)],
        ["", "Total Fixed Cost", data.resultList[i].c82 == "" ? '-' : Number(data.resultList[i].c82).toFixed(0)],
        ["", "Operating Profit/Loss", data.resultList[i].c83 == "" ? '-' : Number(data.resultList[i].c83).toFixed(0)],
        [],
        ["", "KPI", ""],
        [],
        ["", "Parameter", "Input"],
        ["", "Attractiveness Score", data.resultList[i].c71 == "" ? '-' : Number(data.resultList[i].c71).toFixed(0)],
        ["", "Market Share, %", data.resultList[i].c72 == "" ? '-' : Number((Number(data.resultList[i].c72) * 100).toFixed(0)) + "%"],
        ["", "Units Sold", data.resultList[i].c73 == "" ? '-' : Number((Number(data.resultList[i].c73) * 1000000).toFixed(0))],
        ["", "Operating Margin, %", data.resultList[i].c84 == "" ? '-' : Number((Number(data.resultList[i].c84) * 100).toFixed(0)) + "%"],
        [],
        ["", "Thinking Ability", ""],
        [],
        ["", "Parameter", "Score %"],
        ["", "Design", data.resultList[i].af77 == "" ? '-' : Number((Number(data.resultList[i].af77) * 100).toFixed(0)) + "%"],
        ["", "Execute", data.resultList[i].af78 == "" ? '-' : Number((Number(data.resultList[i].af78) * 100).toFixed(0)) + "%"],

      ]
      this.excelalldata.push(this.consumerexcelformat)
    }

    this.excelSheetDesignFunction('designthinking', 'designthinking report', this.excelalldata, data.resultList.length);
  }


  

  // innovation game excel sheet...
  createExcelReportforinnovation(data: any) {
    console.log("ff", data.resultList[0].d15)
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Product", data.resultList[i].c8],
        ["", "Legal Compliance", data.resultList[i].b80 == 1 ? "Yes" : "No"],
        ["", "Regulatory Compliance", data.resultList[i].b81 == 1 ? "Yes" : "No"],
        ["", "Trademarks & Copyrights", data.resultList[i].b82 == 1 ? "Yes" : "No"],
        ["", "Technology Patent", data.resultList[i].b83 == 1 ? "Yes" : "No"],
        ["", "Open Source Compliance", data.resultList[i].b84 == 1 ? "Yes" : "No"],
        ["", "Industry Standards Compliance", data.resultList[i].b85 == 1 ? "Yes" : "No"],
        ["", "No. of Developers", data.resultList[i].ae23],
        ["", "No. of Industry Expert", data.resultList[i].ae24],
        ["", "No. of Marketeer", data.resultList[i].ae25],
        ["", data.resultList[i].d15, data.resultList[i].b15 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].d16, data.resultList[i].b16 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].d17, data.resultList[i].b17 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].d18, data.resultList[i].b18 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].d19, data.resultList[i].b19 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].d20, data.resultList[i].b20 == 1 ? "Yes" : "No"],
        ["", "In-App Guidance", data.resultList[i].ae102],
        ["", "User Onboarding", data.resultList[i].ae103],
        ["", "Interactive Help Center", data.resultList[i].ae104],
        ["", "Customizable User Profiles", data.resultList[i].ae105],
        ["", "Community Forums", data.resultList[i].ae106],
        ["", "Multi-Platform Compatibility", data.resultList[i].ae107],
        ["", "Analytics and Reporting", data.resultList[i].ae108],
        ["", "Customization Options", data.resultList[i].ae109],
        ["", "Offline Access", data.resultList[i].ae110],
        ["", data.resultList[i].e25, data.resultList[i].ae111],
        ["", data.resultList[i].e26, data.resultList[i].ae112],
        ["", data.resultList[i].e27, data.resultList[i].ae113],
        ["", data.resultList[i].e28, data.resultList[i].ae114],
        ["", data.resultList[i].e29, data.resultList[i].ae115],
        ["", data.resultList[i].e30, data.resultList[i].ae116],
        ["", "Basic package price per user per year, k INR", data.resultList[i].ae56],
        ["", "Standard package price per user per year, k INR", data.resultList[i].af56],
        ["", "Premium package price per user per year, k INR", data.resultList[i].ag56],
        ["", "Promotion, k INR", data.resultList[i].ae58],
        ["", data.resultList[i].c56, data.resultList[i].b56 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c57, data.resultList[i].b57 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c58, data.resultList[i].b58 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c61, data.resultList[i].b61 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c62, data.resultList[i].b62 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c63, data.resultList[i].b63 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c64, data.resultList[i].b64 == 1 ? "Yes" : "No"],
        ["", data.resultList[i].c65, data.resultList[i].b65 == 1 ? "Yes" : "No"],
        ["", "Technology Adoption", data.resultList[i].ae118],
        ["", "Continous Improvement", data.resultList[i].ae119],
        [],
        ["", "Sales units", ""],
        ["", "Parameter", "Year 1", "Year 3(projected)"],
        ["", "Basic Package", Number(data.resultList[i].j53).toFixed(0), Number(data.resultList[i].k53).toFixed(0)],
        ["", "Standard Package", Number(data.resultList[i].j54).toFixed(0), Number(data.resultList[i].k54).toFixed(0)],
        ["", "Premium Package", Number(data.resultList[i].j55).toFixed(0), Number(data.resultList[i].k55).toFixed(0)],
        ["", "Total Sales", Number(data.resultList[i].j52).toFixed(0), Number(data.resultList[i].k52).toFixed(0)],
        [],
        ["", "Cash balance, k INR", ""],
        ["", "Parameter", "Input"],
        ["", "Beginning cash", data.resultList[i].o36 == "" ? '-' : Number(data.resultList[i].o36).toFixed(0)],
        ["", "Expenses", data.resultList[i].o37 == "" ? '-' : Number(data.resultList[i].o37).toFixed(0)],
        ["", "Cash infusion", data.resultList[i].o38 == "" ? '-' : Number(data.resultList[i].o38).toFixed(0)],
        ["", "Ending cash", data.resultList[i].o39 == "" ? '-' : Number(data.resultList[i].o39).toFixed(0)],
        [],
        ["", "Income Statement, k INR", ""],
        ["", "Parameter", "Year 1", "Year 3 (Projected)"],
        ["", "Revenue", Number(data.resultList[i].j36).toFixed(0), Number(data.resultList[i].k36).toFixed(0)],
        ["", "Compliance", Number(data.resultList[i].j38).toFixed(0), Number(data.resultList[i].k38).toFixed(0)],
        ["", "Resource", Number(data.resultList[i].j39).toFixed(0), Number(data.resultList[i].k39).toFixed(0)],
        ["", "Promotion", Number(data.resultList[i].j40).toFixed(0), Number(data.resultList[i].k40).toFixed(0)],
        ["", "Distribution", Number(data.resultList[i].j41).toFixed(0), Number(data.resultList[i].k41).toFixed(0)],
        ["", "Collaboration", Number(data.resultList[i].j42).toFixed(0), Number(data.resultList[i].k42).toFixed(0)],
        ["", "Technology", Number(data.resultList[i].j43).toFixed(0), Number(data.resultList[i].k43).toFixed(0)],
        ["", "Total Cost", Number(data.resultList[i].j44).toFixed(0), Number(data.resultList[i].k44).toFixed(0)],
        ["", "Profit/Loss, k INR", Number(data.resultList[i].j45).toFixed(0), Number(data.resultList[i].k45).toFixed(0)],
        [],
        ["", "KPI", ""],
        ["", "Parameter", "Output"],
        ["", "Product", data.resultList[i].c8],
        ["", "Development time, months", data.resultList[i].j4 == "" ? '-' : Number(data.resultList[i].j4).toFixed(0)],
        ["", "Quality score %", data.resultList[i].j5 == "" ? '-' : Number((Number(data.resultList[i].j5) * 100).toFixed(0)) + "%"],
        ["", "Average price, k INR", data.resultList[i].j15 == "" ? '-' : Number(data.resultList[i].j15).toFixed(0)],
        ["", "Monthly burn, k INR", data.resultList[i].j48 == "" ? '-' : Number(data.resultList[i].j48).toFixed(0)],
        ["", "Runaway, months", data.resultList[i].j49 == "" ? '-' : Number(data.resultList[i].j49).toFixed(0)],
        [],
        ["", "Thinking Ability", ""],
        ["", "Parameter", "Score"],
        ["", "Product", data.resultList[i].ae96 == "" ? '-' : Number((Number(data.resultList[i].ae96) * 100).toFixed(0)) + "%"],
        ["", "Resources", data.resultList[i].ae97 == "" ? '-' : Number((Number(data.resultList[i].ae97) * 100).toFixed(0)) + "%"],
        ["", "Marketing", data.resultList[i].ae98 == "" ? '-' : Number((Number(data.resultList[i].ae98) * 100).toFixed(0)) + "%"],
        ["", "Collaboration", data.resultList[i].ae99 == "" ? '-' : Number((Number(data.resultList[i].ae99) * 100).toFixed(0)) + "%"],
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }
    this.excelSheetDesignFunction('innovation', 'innovation report', this.excelalldata, data.resultList.length);
  }

  // ordering basics excel sheet...
  createExcelReportfororderingbasics(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Phase 1", ""],
        ["", "Order Quantity, units", data.resultList[i].ap10 == "" ? "-" : Number(data.resultList[i].ap10).toFixed(0)],
        ["", "Reorder Level, units", data.resultList[i].ap11 == "" ? "-" : Number(data.resultList[i].ap11).toFixed(0)],
        ["", "Phase 2", ""],
        ["", "Order Quantity, units", data.resultList[i].ap15 == "" ? "-" : Number(data.resultList[i].ap15).toFixed(0)],
        ["", "Reorder Level, units", data.resultList[i].ap16 == "" ? "-" : Number(data.resultList[i].ap16).toFixed(0)],
        [],
        ["", "Quantity, units", ""],
        ["", "Parameter", "Phase 1", "Phase 2"],
        ["", "Demand", Number(data.resultList[i].j63).toFixed(0), Number(data.resultList[i].w63).toFixed(0)],
        ["", "Stockout", Number(data.resultList[i].j64).toFixed(0), Number(data.resultList[i].w64).toFixed(0)],
        ["", "Back order", Number(data.resultList[i].j65).toFixed(0), Number(data.resultList[i].w65).toFixed(0)],
        [],
        ["", "Cost, INR  ", ""],
        ["", "Parameter", "Phase 1", "Phase 2"],
        ["", "Ordering", Number(data.resultList[i].m63).toFixed(0), Number(data.resultList[i].z63).toFixed(0)],
        ["", "Holding", Number(data.resultList[i].m64).toFixed(0), Number(data.resultList[i].z64).toFixed(0)],
        ["", "Stockout", Number(data.resultList[i].m65).toFixed(0), Number(data.resultList[i].z65).toFixed(0)],
        ["", "Back ordering", Number(data.resultList[i].m66).toFixed(0), Number(data.resultList[i].z66).toFixed(0)],
        [],
        ["", "KPI", ""],
        ["", "Parameter", "Output"],
        ["", "Service level", Number((Number(data.resultList[i].j67) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].w68) * 100).toFixed(0)) + "%"],
        ["", "Cost, INR", Number(data.resultList[i].m67).toFixed(0), Number(data.resultList[i].z67).toFixed(0)],
        [],
        ["", "Thinking Ability", ""],
        ["", "Parameter", "Score"],
        ["", "Ordering & Inventory", data.resultList[i].ap25 == "" ? '-' : Number((Number(data.resultList[i].ap25) * 100).toFixed(0)) + "%"],
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }
    this.excelSheetDesignFunction('orderingbasics', 'orderingbasics report', this.excelalldata, data.resultList.length);
  }

  // stp game excel sheet...

  createExcelReportforstpGame(data: any) {
    this.excelalldata = [];
    for (let i = 0; i < data.resultList.length; i++) {
      this.consumerexcelformat = [
        [],
        ["", "Round" + Number(i + 1), "", "", "", "", "", "", "", "", "", "", ""],
        [],
        ["", "Decisions"],
        [],
        ["", "Parameter", "Input"],
        ["", "Phase 1", ""],
        ["", "Product 1 Launch", data.resultList[i].CJ8 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CJ9 == "" ? "-" : data.resultList[i].CJ9],
        ["", "Performance", data.resultList[i].CJ10 == "" ? "-" : Number(data.resultList[i].CJ10).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CJ11 == "" ? "-" : Number(data.resultList[i].CJ11).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CJ12 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CJ13 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CJ14 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CJ15 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CJ16 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CJ17 == "" ? "-" : Number(data.resultList[i].CJ17).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CJ18 == "" ? "-" : Number(data.resultList[i].CJ18).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].CJ8 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CK9 == "" ? "-" : data.resultList[i].CK9],
        ["", "Performance", data.resultList[i].CK10 == "" ? "-" : Number(data.resultList[i].CK10).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CK11 == "" ? "-" : Number(data.resultList[i].CK11).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CK12 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CK13 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CK14 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CK15 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CK16 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CK17 == "" ? "-" : Number(data.resultList[i].CK17).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CK18 == "" ? "-" : Number(data.resultList[i].CK18).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].CJ20 == "" ? "-" : Number(data.resultList[i].CJ20).toFixed(0)],
        ["", "Packaging", data.resultList[i].CJ22],
        ["", "Repairability & Services", data.resultList[i].CJ26],
        ["", "Recycling", data.resultList[i].CJ30],
        ["", "Retail", data.resultList[i].CJ35 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].CJ36 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].CJ37 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Phase 2", ""],
        ["", "Product 1 Launch", data.resultList[i].CJ48 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CJ49 == "" ? "-" : data.resultList[i].CJ49],
        ["", "Performance", data.resultList[i].CJ50 == "" ? "-" : Number(data.resultList[i].CJ50).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CJ51 == "" ? "-" : Number(data.resultList[i].CJ51).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CJ52 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CJ53 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CJ54 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CJ55 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CJ56 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CJ57 == "" ? "-" : Number(data.resultList[i].CJ57).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CJ58 == "" ? "-" : Number(data.resultList[i].CJ58).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].CK48 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CK49 == "" ? "-" : data.resultList[i].CK49],
        ["", "Performance", data.resultList[i].CK50 == "" ? "-" : Number(data.resultList[i].CK50).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CK51 == "" ? "-" : Number(data.resultList[i].CK51).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CK52 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CK53 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CK54 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CK55 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CK56 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CK57 == "" ? "-" : Number(data.resultList[i].CK57).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CK58 == "" ? "-" : Number(data.resultList[i].CK58).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].CJ60 == "" ? "-" : Number(data.resultList[i].CJ20).toFixed(0)],
        ["", "Packaging", data.resultList[i].CJ62],
        ["", "Repairability & Services", data.resultList[i].CJ66],
        ["", "Recycling", data.resultList[i].CJ70],
        ["", "Retail", data.resultList[i].CJ75 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].CJ76 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].CJ77 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Phase 3", ""],
        ["", "Product 1 Launch", data.resultList[i].CJ88 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CJ89 == "" ? "-" : data.resultList[i].CJ89],
        ["", "Performance", data.resultList[i].CJ90 == "" ? "-" : Number(data.resultList[i].CJ90).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CJ91 == "" ? "-" : Number(data.resultList[i].CJ91).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CJ92 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CJ93 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CJ94 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CJ95 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CJ96 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CJ97 == "" ? "-" : Number(data.resultList[i].CJ97).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CJ98 == "" ? "-" : Number(data.resultList[i].CJ98).toFixed(0)],
        ["", "Product 2 Launch", data.resultList[i].CK88 == 1 ? "Yes" : "No"],
        ["", "Design", data.resultList[i].CK89 == "" ? "-" : data.resultList[i].CK89],
        ["", "Performance", data.resultList[i].CK90 == "" ? "-" : Number(data.resultList[i].CK90).toFixed(0)],
        ["", "Battery Life", data.resultList[i].CK91 == "" ? "-" : Number(data.resultList[i].CK91).toFixed(0)],
        ["", "Premium Camera", data.resultList[i].CK92 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Extra Memory", data.resultList[i].CK93 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Premium Display", data.resultList[i].CK94 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Durable Screen", data.resultList[i].CK95 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Securtiy", data.resultList[i].CK96 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Projected Sales, Mn units", data.resultList[i].CK97 == "" ? "-" : Number(data.resultList[i].CK97).toFixed(0)],
        ["", "Price, INR", data.resultList[i].CK98 == "" ? "-" : Number(data.resultList[i].CK98).toFixed(0)],
        ["", "Promotion, Mn INR", data.resultList[i].CJ100 == "" ? "-" : Number(data.resultList[i].CJ100).toFixed(0)],
        ["", "Packaging", data.resultList[i].CJ102],
        ["", "Repairability & Services", data.resultList[i].CJ106],
        ["", "Recycling", data.resultList[i].CJ110],
        ["", "Retail", data.resultList[i].CJ115 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Online", data.resultList[i].CJ116 == 1 ? "Implemented" : "Not Implemented"],
        ["", "Specialist Stores", data.resultList[i].CJ117 == 1 ? "Implemented" : "Not Implemented"],
        [],
        ["", "Company Sales & Market Share, Phase 3", ""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2", "Phase 3"],
        ["", "TC", "", Number(data.resultList[i].AW136).toFixed(0), Number((Number(data.resultList[i].AW137) * 100).toFixed(0)) + "%",],
        ["", "TG", "", Number(data.resultList[i].AX136).toFixed(0), Number((Number(data.resultList[i].AX137) * 100).toFixed(0)) + "%",],
        ["", "IT", "", Number(data.resultList[i].AY136).toFixed(0), Number((Number(data.resultList[i].AY137) * 100).toFixed(0)) + "%",],
        ["", "NG", "", Number(data.resultList[i].AZ136).toFixed(0), Number((Number(data.resultList[i].AZ137) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number(data.resultList[i].BA136).toFixed(0), Number((Number(data.resultList[i].BA137) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number(data.resultList[i].BB136).toFixed(0), Number((Number(data.resultList[i].BB137) * 100).toFixed(0)) + "%",],
        [],
        ["", "Company Market Share, Phase 1 to 3", ""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2", "Phase 3"],
        ["", "TC", "", Number((Number(data.resultList[i].C137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].W137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AW137) * 100).toFixed(0)) + "%",],
        ["", "TG", "", Number((Number(data.resultList[i].D137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].X137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AX137) * 100).toFixed(0)) + "%",],
        ["", "IT", "", Number((Number(data.resultList[i].E137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Y137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AY137) * 100).toFixed(0)) + "%",],
        ["", "NG", "", Number((Number(data.resultList[i].F137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Z137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AZ137) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number((Number(data.resultList[i].G137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AA137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BA137) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number((Number(data.resultList[i].H137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AB137) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BB137) * 100).toFixed(0)) + "%",],
        [],
        ["", "Product Market Share, Phase 1 to 3", ""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2", "Phase 3"],
        ["", "TC P1", "", Number((Number(data.resultList[i].C133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].W133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AW133) * 100).toFixed(0)) + "%",],
        ["", "TC P2", "", Number((Number(data.resultList[i].D133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].X133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AX133) * 100).toFixed(0)) + "%",],
        ["", "TG Alpha", "", Number((Number(data.resultList[i].E133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Y133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AY133) * 100).toFixed(0)) + "%",],
        ["", "TG Beta", "", Number((Number(data.resultList[i].F133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Z133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AZ133) * 100).toFixed(0)) + "%",],
        ["", "TG Gamma", "", Number((Number(data.resultList[i].G133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AA133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BA133) * 100).toFixed(0)) + "%",],
        ["", "IT Delta", "", Number((Number(data.resultList[i].H133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AB133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BB133) * 100).toFixed(0)) + "%",],
        ["", "IT Epsilon", "", Number((Number(data.resultList[i].I133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AC133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BC133) * 100).toFixed(0)) + "%",],
        ["", "NG Zeta", "", Number((Number(data.resultList[i].J133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AD133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BD133) * 100).toFixed(0)) + "%",],
        ["", "NG Theta", "", Number((Number(data.resultList[i].K133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AE133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BE133) * 100).toFixed(0)) + "%",],
        ["", "ST Sigma", "", Number((Number(data.resultList[i].L133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AF133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BF133) * 100).toFixed(0)) + "%",],
        ["", "EM Omega", "", Number((Number(data.resultList[i].M133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AG133) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BG133) * 100).toFixed(0)) + "%",],
        [],
        ["", "Company Operating Margins, Phase 1 to 3", ""],
        [],
        ["", "Parameter", "Phase 1", "Phase 2", "Phase 3"],
        ["", "TC", "", Number((Number(data.resultList[i].C156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].W156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AW156) * 100).toFixed(0)) + "%",],
        ["", "TG", "", Number((Number(data.resultList[i].D156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].X156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AX156) * 100).toFixed(0)) + "%",],
        ["", "IT", "", Number((Number(data.resultList[i].E156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Y156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AY156) * 100).toFixed(0)) + "%",],
        ["", "NG", "", Number((Number(data.resultList[i].F156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].Z156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AZ156) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number((Number(data.resultList[i].G156 * 100)).toFixed(0)) + "%", Number((Number(data.resultList[i].AA156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BA156) * 100).toFixed(0)) + "%",],
        ["", "ST", "", Number((Number(data.resultList[i].H156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].AB156) * 100).toFixed(0)) + "%", Number((Number(data.resultList[i].BB156 * 100)).toFixed(0)) + "%",],
        [],
        ["", "Financial Statement, Mn INR, Phase 3", ""],
        ["", "TC", "TG", "IT", "NG", "ST", "EM"],
        ["", "Revenue", "", Number(data.resultList[i].AW144).toFixed(0), Number(data.resultList[i].AX144).toFixed(0), Number(data.resultList[i].AY144).toFixed(0), Number(data.resultList[i].AZ144).toFixed(0), Number(data.resultList[i].BA144).toFixed(0), Number(data.resultList[i].BB144).toFixed(0),],
        ["", "Variable Cost", "", Number(data.resultList[i].AW145).toFixed(0), Number(data.resultList[i].AX145).toFixed(0), Number(data.resultList[i].AY145).toFixed(0), Number(data.resultList[i].AZ145).toFixed(0), Number(data.resultList[i].BA145).toFixed(0), Number(data.resultList[i].BB145).toFixed(0),],
        ["", "Gross Profit", "", Number(data.resultList[i].AW146).toFixed(0), Number(data.resultList[i].AX146).toFixed(0), Number(data.resultList[i].AY146).toFixed(0), Number(data.resultList[i].AZ146).toFixed(0), Number(data.resultList[i].BA146).toFixed(0), Number(data.resultList[i].BB146).toFixed(0),],
        ["", "Production Line Cost + Update Cost", "", Number(data.resultList[i].AW147).toFixed(0), Number(data.resultList[i].AX147).toFixed(0), Number(data.resultList[i].AY147).toFixed(0), Number(data.resultList[i].AZ147).toFixed(0), Number(data.resultList[i].BA147).toFixed(0), Number(data.resultList[i].BB147).toFixed(0),],
        ["", "Administration Cost", "", Number(data.resultList[i].AW148).toFixed(0), Number(data.resultList[i].AX148).toFixed(0), Number(data.resultList[i].AY148).toFixed(0), Number(data.resultList[i].AZ148).toFixed(0), Number(data.resultList[i].BA148).toFixed(0), Number(data.resultList[i].BB148).toFixed(0),],
        ["", "Market Research Cost", "", Number(data.resultList[i].AW149).toFixed(0), Number(data.resultList[i].AX149).toFixed(0), Number(data.resultList[i].AY149).toFixed(0), Number(data.resultList[i].AZ149).toFixed(0), Number(data.resultList[i].BA149).toFixed(0), Number(data.resultList[i].BB149).toFixed(0),],
        ["", "Promotion Cost", "", Number(data.resultList[i].AW150).toFixed(0), Number(data.resultList[i].AX150).toFixed(0), Number(data.resultList[i].AY150).toFixed(0), Number(data.resultList[i].AZ150).toFixed(0), Number(data.resultList[i].BA150).toFixed(0), Number(data.resultList[i].BB150).toFixed(0),],
        ["", "Channel Cost", "", Number(data.resultList[i].AW151).toFixed(0), Number(data.resultList[i].AX151).toFixed(0), Number(data.resultList[i].AY151).toFixed(0), Number(data.resultList[i].AZ151).toFixed(0), Number(data.resultList[i].BA151).toFixed(0), Number(data.resultList[i].BB151).toFixed(0),],
        ["", "Packaging Cost", "", Number(data.resultList[i].AW152).toFixed(0), Number(data.resultList[i].AX152).toFixed(0), Number(data.resultList[i].AY152).toFixed(0), Number(data.resultList[i].AZ152).toFixed(0), Number(data.resultList[i].BA152).toFixed(0), Number(data.resultList[i].BB152).toFixed(0),],
        ["", "Recyclying Cost", "", Number(data.resultList[i].AW153).toFixed(0), Number(data.resultList[i].AX153).toFixed(0), Number(data.resultList[i].AY153).toFixed(0), Number(data.resultList[i].AZ153).toFixed(0), Number(data.resultList[i].BA153).toFixed(0), Number(data.resultList[i].BB153).toFixed(0),],
        ["", "Repairability Cost", "", Number(data.resultList[i].AW154).toFixed(0), Number(data.resultList[i].AX154).toFixed(0), Number(data.resultList[i].AY154).toFixed(0), Number(data.resultList[i].AZ154).toFixed(0), Number(data.resultList[i].BA154).toFixed(0), Number(data.resultList[i].BB154).toFixed(0),],
        ["", "Operating Profit/Loss", "", Number(data.resultList[i].AW155).toFixed(0), Number(data.resultList[i].AX155).toFixed(0), Number(data.resultList[i].AY155).toFixed(0), Number(data.resultList[i].AZ155).toFixed(0), Number(data.resultList[i].BA155).toFixed(0), Number(data.resultList[i].BB155).toFixed(0),],
        [],
        ["", "KPI", ""],
        ["", "Parameter", "Output"],
        ["", "Market Share", data.resultList[i].AW195 == "" ? "-" : Number((Number(data.resultList[i].AW195) * 100).toFixed(0)) + "%"],
        ["", "Revenue, Mn INR", data.resultList[i].AW196 == "" ? "-" : Number(data.resultList[i].AW196).toFixed(0)],
        ["", "Operating Profit/Loss, Mn INR", data.resultList[i].AW197 == "" ? "-" : Number(data.resultList[i].AW197).toFixed(0)],
        ["", "Operating Margin", data.resultList[i].AW198 == "" ? "-" : Number((Number(data.resultList[i].AW198) * 100).toFixed(0)) + "%"],
        [],
        ["", "Thinking Ability", ""],
        ["", "Parameter", "Score"],
        // ["", "Positioning", data.resultList[i].ap25 == "" ? '-' : Number((Number(data.resultList[i].ap25) * 100).toFixed(0)) + "%"],
      ]
      this.excelalldata.push(this.consumerexcelformat)
    }
    this.excelSheetDesignFunction('orderingbasics', 'orderingbasics report', this.excelalldata, data.resultList.length);
  }


  createExcelReportforvoicebased(data: any) {

    this.excelalldata = [];

    // for (let i = 0; i < data.resultList.length; i++) {

    this.consumerexcelformat = [
      [],
      ["Parameters", "Score", "Summary"],
      [data.kpi1 ? data.kpi1 : '-', data.kpi1score ? data.kpi1score : '-', data.kpi1summary ? data.kpi1summary : '-'],
      [data.kpi2 ? data.kpi2 : '-', data.kpi2score ? data.kpi2score : '-', data.kpi2summary ? data.kpi2summary : '-'],
      [data.kpi3 ? data.kpi3 : '-', data.kpi3score ? data.kpi3score : '-', data.kpi3summary ? data.kpi3summary : '-'],
      [data.kpi4 ? data.kpi4 : '-', data.kpi4score ? data.kpi4score : '-', data.kpi4summary ? data.kpi4summary : '-'],
      [data.kpi5 ? data.kpi5 : '-', data.kpi5score ? data.kpi5score : '-', data.kpi5summary ? data.kpi5summary : '-'],
      [data.kpi6 ? data.kpi6 : '-', data.kpi6score ? data.kpi6score : '-', data.kpi6summary ? data.kpi6summary : '-'],

    ]


    this.excelalldata.push(this.consumerexcelformat)
    // }

    this.excelSheetDesignFunction('pricinggame', 'Student Voicebased Report', this.excelalldata, 1)
  }

}
