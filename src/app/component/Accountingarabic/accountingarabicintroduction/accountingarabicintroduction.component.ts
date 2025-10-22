import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AccountingArabicfoodforthoughtComponent } from '../accountingarabicfoodforthought/accountingarabicfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accountingarabicintroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './accountingarabicintroduction.component.html',
  styleUrls: ['./accountingarabicintroduction.component.scss']
})
export class AccountingArabicintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }
  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ag8 == 'yes') || (data.resultList[0].ag8 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "It sets the context for the microsimulation by describing the business situation and the tasks you are expected to perform.",
    "You'll find transcripts of the transactions conducted within the company for various purposes. These transcripts detail the financial activities such as sales, purchases, expenses, investments, etc., that have occurred during the period.",
    "You are tasked with preparing accounting statements, including the income statement, balance sheet, and financial statements, based on the transactional data provided in the information section.",
    "Evaluate the financial health of the company based on the accounting statements. Describe the opportunities to the stakeholder that can improve their financial statements and as a result business performance & long-term sustainability.",
    "Receive feedback on your performance in creating accounting statements and making decisions based on key performance indicators (KPIs). See how well your decisions align with the financial health of the company and receive suggestions for improvement.",
  ]
  textLinesArabic: string[] = [
    "إنه يحدد سياق المحاكاة الدقيقة من خلال وصف موقف العمل والمهام التي يتوقع منك القيام بها.",
    "ستجد نصوص المعاملات التي أجريت داخل الشركة لأغراض مختلفة. توضح هذه النصوص الأنشطة المالية مثل المبيعات والمشتريات والنفقات والاستثمارات وما إلى ذلك، التي حدثت خلال الفترة.",
    "تتمثل مهمتك في إعداد البيانات المحاسبية، بما في ذلك بيان الدخل، والميزانية العمومية، والبيانات المالية، بناءً على البيانات المعاملاتية المقدمة في قسم المعلومات.",
    "تقييم الوضع المالي للشركة على أساس البيانات المحاسبية. وصف الفرص المتاحة لأصحاب المصلحة لتحسين بياناتهم المالية وبالتالي تحسين أداء الأعمال والاستدامة على المدى الطويل.",
    "احصل على ملاحظات حول أدائك في إنشاء البيانات المحاسبية واتخاذ القرارات بناءً على مؤشرات الأداء الرئيسية (KPIs). شاهد مدى توافق قراراتك مع الصحة المالية للشركة واحصل على اقتراحات للتحسين.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  truncatedTextArabic: string[] = this.textLinesArabic.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));

  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Memo', image: '../../../../assets/images/accounting/memoforaacounting.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Information', image: '.../../../../assets/images/accounting/accountinginformtion.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Accounts', image: '../../../../assets/images/accounting/accounting.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Evaluation', image: '../../../../assets/images/accounting/accountevaluation.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/accounting/accountreports.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
  ]

  cardsArabic = [
    { title: 'مذكرة', image: '../../../../assets/images/accounting/memoforaacounting.svg', text: this.textLinesArabic[0], truncatedTextArabic: this.truncatedTextArabic[0], showAll: this.showAll },
    { title: 'معلومة', image: '.../../../../assets/images/accounting/accountinginformtion.svg', text: this.textLinesArabic[1], truncatedTextArabic: this.truncatedTextArabic[1], showAll: this.showAll },
    { title: 'الحسابات', image: '../../../../assets/images/accounting/accounting.svg', text: this.textLinesArabic[2], truncatedTextArabic: this.truncatedTextArabic[2], showAll: this.showAll },
    { title: 'تقييم', image: '../../../../assets/images/accounting/accountevaluation.svg', text: this.textLinesArabic[3], truncatedTextArabic: this.truncatedTextArabic[3], showAll: this.showAll },
    { title: 'التقارير', image: '../../../../assets/images/accounting/accountreports.svg', text: this.textLinesArabic[4], truncatedTextArabic: this.truncatedTextArabic[4], showAll: this.showAll },
  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(AccountingArabicfoodforthoughtComponent, {
      data: {},
    });


  }
}
