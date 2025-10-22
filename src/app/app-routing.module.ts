import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './service/auth/authguard.service';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { NoPreloading } from '@angular/router';
import { DrivetokengenerateComponent } from './component/drivetokengenerate/drivetokengenerate.component';
import { DriveerrorlogcomponentComponent } from './component/driveerrorlogcomponent/driveerrorlogcomponent.component';
import { DriveloginComponent } from './component/drivelogin/drivelogin.component';
import { DrivetablecomponentComponent } from './component/drivetablecomponent/drivetablecomponent.component';
import { ConfirmForgotPassComponent, ForgotpassComponent, SuccesspageComponent } from './component/forgotpass/forgotpass.component';
// import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { StudentdashboardheaderComponent } from './common/studentdashboardheader/studentdashboardheader.component';
import { NewinstructorviewComponent } from './common/newinstructorview/newinstructorview.component';
import { ChapterdashboardComponent } from './component/AiVoiceBasedInterview/Admin/chapterDashboard/chapter-dashboard.component';

export const routes: Routes = [

  { path: 'component/boencilogin', component: DrivetokengenerateComponent },
  { path: 'drivetable', component: DrivetablecomponentComponent },
  { path: 'driveerrorlog', component: DriveerrorlogcomponentComponent },
  { path: 'drivelogin', component: DriveloginComponent },
  { path: 'forgotpassword', component: ForgotpassComponent },
  { path: 'confirmforgotpassword', component: ConfirmForgotPassComponent },
  { path: 'successpage', component: SuccesspageComponent },

  {
    path: '',
    loadChildren: () => import('./component/roleselect/roleselect.module').then(m => m.RoleselectModule)
  },
  {
    path: 'auth',
    component: SidenavComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: 'businessbascis',
        loadChildren: () => import('./component/BusinessBascisGame/business.module').then(m => m.BusinessModule)
      },
      {
        path: 'businesscasemanagement',
        loadChildren: () => import('./component/casemanagement/businessbasicscasemanage/businesscase.module').then(m => m.BusinesscaseModule)
      },
      {
        path: 'accountingheader',
        loadChildren: () => import('./component/Accountingnew/accounting.module').then(m => m.AcountingModule)
      },
      {
        path: 'accountingcaseheader',
        loadChildren: () => import('./component/casemanagement/accountingcase/accountingcase.module').then(m => m.AccountingcaseModule)
      },
      {
        path: 'accountingarabicheader',
        loadChildren: () => import('./component/Accountingarabic/accountingarabic.module').then(m => m.AcountingArabicModule)
      },
      {
        path: 'accountingarabiccaseheader',
        loadChildren: () => import('./component/casemanagement/accountingarabiccase/accountingarabiccase.module').then(m => m.AccountingArabicCaseModule)
      },
      {
        path: 'capitalbudgetingheader',
        loadChildren: () => import('./component/CapitalBudgeting/capitalbudeting.module').then(m => m.CapitalBudgetingModule)
      },
      {
        path: 'capitalbudgetingcaseheader',
        loadChildren: () => import('./component/casemanagement/CapitalBudgeting/capitalbudgetingcase.module').then(m => m.CapitalBudgetingCaseModule)
      },
      {
        path: 'changemanagementheader',
        loadChildren: () => import('./component/changemanagement/changemanagement.module').then(m => m.ChangeManagementModule)
      },
       {
        path: 'changemanagementnewheader',
        loadChildren: () => import('./component/changemanagementnew/changemanagement.module').then(m => m.ChangeManagementModule)
      },
      {
        path: 'changemanagementcasemanagement',
        loadChildren: () => import('./component/casemanagement/changemanagementcase/changemanagementcase.module').then(m => m.ChangeManagementcaseModule)
      },
       {
        path: 'changemanagementnewcasemanagement',
        loadChildren: () => import('./component/casemanagement/changemanagementcasenew/changemanagementcase.module').then(m => m.ChangeManagementcaseModule)
      },
      {
        path: 'crmgameheader',
        loadChildren: () => import('./component/CRMGame/crmgame.module').then(m => m.CrmGameModule)
      },
      {
        path: 'crmcaseheader',
        loadChildren: () => import('./component/casemanagement/Crmcasemanagement/crmcasemanagement.module').then(m => m.CrmGameCaseModule)
      },
      {
        path: 'cvpanalysisheader',
        loadChildren: () => import('./component/CvpAnalysis/cvpanalysis.module').then(m => m.CvpAnalysiscModule)
      },
      {
        path: 'cvpcaseheader',
        loadChildren: () => import('./component/casemanagement/cvpanalysiscasemanagement/cvpanalysiscase.module').then(m => m.CvpAnalysiscaseModule)
      },
      {
        path: 'designthinkingheader',
        loadChildren: () => import('./component/Designthinking/designthinking.module').then(m => m.DesignThinkingModule)
      },
      {
        path: 'designthinkingcaseheader',
        loadChildren: () => import('./component/casemanagement/DesignThinkingcasemanagement/designthinkingcase.module').then(m => m.DesignThinkingcaseModule)
      },
      {
        path: 'ecommerceheader',
        loadChildren: () => import('./component/ECommerce/ecommerce.module').then(m => m.EcommerceModule)
      },
      {
        path: 'ecommerccaseeheader',
        loadChildren: () => import('./component/casemanagement/Ecommercecasemanagement/ecommercecase.module').then(m => m.EcommercecaseModule)
      },
      {
        path: 'financialanalysisnewheader',
        loadChildren: () => import('./component/Financialanalysisnew/financialanalysis.module').then(m => m.FinancialAnalysisModule)
      },
      {
        path: 'financialanalysiscasemanagement',
        loadChildren: () => import('./component/casemanagement/financialanalysiscasemanagement/finalcialanalysiscase.module').then(m => m.FinalcialAnalysiscaseModule)
      },
      {
        path: 'hrm',
        loadChildren: () => import('./component/HRMFintech/hrmfintech.module').then(m => m.HrmFintechModule)
      },
      {
        path: 'hrmcasemanagement',
        loadChildren: () => import('./component/casemanagement/hrmcasemanagement/hrmfintechcase.module').then(m => m.HrmFintechcasecaseModule)
      },
      {
        path: 'hrpgameheader',
        loadChildren: () => import('./component/HRPGame/hrpgame.module').then(m => m.HrpGameModule)
      },
      {
        path: 'hrpnewgameheader',
        loadChildren: () => import('./component/HRPNewGame/hrpgame.module').then(m => m.HrpGameModule)
      },
      {
        path: 'hrpcaseheader',
        loadChildren: () => import('./component/casemanagement/Hrpcasemanagement/hrpcase.module').then(m => m.HrpcaseModule)
      },
      {
        path: 'hrpcase',
        loadChildren: () => import('./component/casemanagement/Hrpcasemanagementnew/hrpcase.module').then(m => m.HrpcaseNewModule)
      },
      {
        path: 'innovationheader',
        loadChildren: () => import('./component/Innovation/innovation.module').then(m => m.InnovationModule)
      },
      {
        path: 'innovationcaseheader',
        loadChildren: () => import('./component/casemanagement/Innovationcasemanagement/Innovationcase.module').then(m => m.InnovationcaseModule)
      },
      {
        path: 'itmanagementheader',
        loadChildren: () => import('./component/ITManagement/itmanagement.module').then(m => m.ItManagementModule)
      },
      {
        path: 'itcasemanagementheader',
        loadChildren: () => import('./component/casemanagement/ItcaseManagement/itmanagementcase.module').then(m => m.ItManagementcaseModule)
      },
      {
        path: 'logisticsmodegameheader',
        loadChildren: () => import('./component/logisticsModelGame/logistics.model').then(m => m.LogisticstModule)
      },
      {
        path: 'logisticscasemanagement',
        loadChildren: () => import('./component/casemanagement/logisticsmodelgamecasemanagement/logisticscase.module').then(m => m.LogisticcaseModule)
      },
      {
        path: 'mergersacquisitionheader',
        loadChildren: () => import('./component/Mergersacquisition/mergeracquistion.model').then(m => m.MergersAcquisionModule)
      },
      {
        path: 'mergersacquisitioncaseheader',
        loadChildren: () => import('./component/casemanagement/MergersAcquision/mergercase.module').then(m => m.MergersAcquisioncaseModule)
      },
      {
        path: 'orderingbasicsheader',
        loadChildren: () => import('./component/OrderingBasics/ordering.module').then(m => m.OrderingModule)
      },
      {
        path: 'orderingbasicscaseheader',
        loadChildren: () => import('./component/casemanagement/Orderingbasicscasemanagement/orderingcase.module').then(m => m.OrderingcaseModule)
      },
      {
        path: 'portfoliomanagementnewheader',
        loadChildren: () => import('./component/portfoliomanagementnew/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'portfoliocaseheader',
        loadChildren: () => import('./component/casemanagement/portfolionewcasemanagement/portfoliocase.module').then(m => m.PortfoliocaseModule)
      },
      {
        path: 'pricingheader',
        loadChildren: () => import('./component/Pricingnewgame/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'pricingcaseheader',
        loadChildren: () => import('./component/casemanagement/Pricingcasemanagement/pricingcase.module').then(m => m.PricingcaseModule)
      },
      {
        path: 'projectmanagementheader',
        loadChildren: () => import('./component/Projectmanagement/projectmanagement.module').then(m => m.ProjectManagementModule)
      },
      {
        path: 'projectmanagementcaseheader',
        loadChildren: () => import('./component/casemanagement/Projectcasemanagement/projectmanagementcase.module').then(m => m.ProjectManagementcaseModule)
      },
      {
        path: 'promotionsigmentnewheader',
        loadChildren: () => import('./component/promotionsigmentnew/promotionsegment.module').then(m => m.PromotionSegmentModule)
      },
      {
        path: 'promotionsigmentheader',
        loadChildren: () => import('./component/promotionsigment/promotionsegment.module').then(m => m.PromotionSegmentModule)
      },
      {
        path: 'promotionscasemanagement',
        loadChildren: () => import('./component/casemanagement/promotionsigmentcasemanagement/promotionsegmentcase.module').then(m => m.PromotionSegmentcaseModule)
      },
      {
        path: 'promotionscasemanagementnew',
        loadChildren: () => import('./component/casemanagement/promotionsigmentcasemanagementnew/promotionsegmentcase.module').then(m => m.PromotionSegmentcaseNewModule)
      },
      {
        path: 'salestargetheader',
        loadChildren: () => import('./component/salesandtargetnewui/salesandtarget.module').then(m => m.SalesAndTargetModule)
      },
      {
        path: 'salestargetcasemanagement',
        loadChildren: () => import('./component/casemanagement/salestargetnew/salesandtargetcase.module').then(m => m.SalesAndTargetcaseModule)
      },
      {
        path: 'stpgameheader',
        loadChildren: () => import('./component/STPGame/stpgame.module').then(m => m.StpGametModule)
      },
      {
        path: 'stpcaseheader',
        loadChildren: () => import('./component/casemanagement/Stpcasemanagement/stpgamecase.module').then(m => m.StpGamecaseModule)
      },
      {
        path: 'valuechainnewheader',
        loadChildren: () => import('./component/Valuechainnewui/valuechain.module').then(m => m.ValueChainModule)
      },
      {
        path: 'valuechainheader',
        loadChildren: () => import('./component/valuechainui/valuechain.module').then(m => m.ValueChainModule)
      },
      {
        path: 'valuechaincaseheader',
        loadChildren: () => import('./component/casemanagement/Valuechaincasemanagement/valuechaincase.module').then(m => m.ValueChaincaseModule)
      },
      {
        path: 'valuechaincase',
        loadChildren: () => import('./component/casemanagement/Valuechaincasemanagementnew/valuechaincase.module').then(m => m.ValueChaincaseNewModule)
      },
      {
        path: 'consumergameheadernew',
        loadChildren: () => import('./component/ProductConsumerNewGame/productconsumer.module').then(m => m.ProductConsumerModule)
      },
      {
        path: 'consumercasemanagementnew',
        loadChildren: () => import('./component/casemanagement/productconsumergamenew/productconsumercase.module').then(m => m.ProductConsumercaseModule)
      },
      {
        path: 'consumergameheader',
        loadChildren: () => import('./component/ProductConsumerGame/productconsumer.module').then(m => m.ProductConsumerModule)
      },
      {
        path: 'consumercasemanagement',
        loadChildren: () => import('./component/casemanagement/productconsumergame/productconsumercase.module').then(m => m.ProductConsumercaseModule)
      },

      {
        path: 'component',
        loadChildren: () => import('./component/studentmanagesection/studentmanagementsec.module').then(m => m.StudentManagementSecModule)
      },
      {
        path: 'instructorArchivepage',
        loadChildren: () => import('./component/instructorarchivepage/instructorarchive.module').then(m => m.InstructorArchiveModule)
      },

      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'common',
        loadChildren: () => import('./common/common.module').then(m => m.CommonComponentsModule)
      },

      { path: 'component/studentdashboardheader', component: StudentdashboardheaderComponent },
      { path: 'component/instructordashboard', component: NewinstructorviewComponent },
      { path: 'component/chapter-dashboard', component: ChapterdashboardComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    preloadingStrategy: NoPreloading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }