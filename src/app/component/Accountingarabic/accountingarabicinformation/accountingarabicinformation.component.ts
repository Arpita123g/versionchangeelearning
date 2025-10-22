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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AccountingArabicfoodforthoughtComponent } from '../accountingarabicfoodforthought/accountingarabicfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountingarabicinformation',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule,FormsModule],
  templateUrl: './accountingarabicinformation.component.html',
  styleUrls: ['./accountingarabicinformation.component.scss']
})
export class AccountingArabicinformationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  periodcellname: any;
  databasecellname: any;
  attempt: number = 0;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  informationtextround1 = [
    {
      Establishment: 'انطلق السيد علي، مدفوعًا بشغفه بالاستدامة، في تأسيس شركة لتصنيع الورق. ولجمع الأموال، أصدر 200 ألف سهم عادي بقيمة ريال واحد، وحظيت بدعم عائلته الداعمة. وفي سعيه للحصول على المزيد من رأس المال، حصل على قرض بقيمة 300 ألف ريال من البنك المحلي. وبفضل الدعم المالي والعزيمة الثابتة، بدأ حلم السيد علي في صنع منتجات ورقية صديقة للبيئة، مما يعد بمستقبل أكثر إشراقًا واخضرارًا.',
      Investments: 'وبعد أن أصبحت الشركة تتمتع بأساس مالي آمن، لم يهدر السيد علي أي وقت في توسيع مشروعه في تصنيع الورق. فقد استثمر في قطعة أرض مميزة بقيمة 60 ألف ريال سعودي، مما مهد الطريق للنمو المستقبلي. بالإضافة إلى ذلك، اشترى آلات معالجة بقيمة 200 ألف ريال سعودي، وسجل على الفور أول إهلاك، مما ضمن كفاءة الإنتاج. ولدفع عجلة الابتكار والاستدامة، حصل السيد علي على براءة اختراع بقيمة 50 ألف ريال سعودي، مما يعد بتقليل النفايات في عملية الإنتاج، مع تسجيل أول إهلاك أيضًا. تبلغ مدة العمر الاقتصادي للآلات وبراءة الاختراع 4 و5 سنوات على التوالي. ومع كل استثمار، أصبحت رؤية السيد علي لخلق مستقبل أكثر اخضرارًا واستدامة لشركته والبيئة أقرب إلى التحقق.',
      Operations: [
        "انطلقت مشروعات تصنيع الورق التي أنشأها السيد علي بخطوات استراتيجية، حيث اشترى مواد خام بقيمة 100 ألف ريال سعودي بالدين، مما أدى إلى زيادة الإنتاج. وتم دفع رواتب بقيمة 40 ألف ريال سعودي لموظفي الإنتاج بسرعة، مما أدى إلى ضمان سير العمل بسلاسة. وتم الانتهاء من الدفعة الأولى المكونة من 100 وحدة، مع تسجيل التكاليف المتغيرة بدقة.",
        "وبعد تجهيز المنتجات، استثمر السيد علي 50 ألف ريال سعودي في فريق مبيعات متخصص، مما أدى إلى تأمين مشترين سريعًا لمنتجاته الورقية الصديقة للبيئة. واشترى ثمانية عملاء بشغف 80 وحدة بسعر 5000 ريال سعودي لكل منها، حيث دفع أحدهم نقدًا واختار سبعة عملاء الدفع بالائتمان.",
        "وبين النجاحات ظهرت التحديات، فقد تلقى السيد علي فاتورة كهرباء غير متوقعة بقيمة 15 ألف ريال سعودي، فاضطر إلى الوفاء بالتزاماته المالية بسداد الدين عن المواد الخام التي اشتراها بالدين.",
        "ولكن إعلان إفلاس أحد العملاء كان بمثابة انتكاسة. ولكن السيد علي لم يتراجع، بل تمكن من التعامل مع الموقف برشاقة، وتعلم وتكيف مع استمراره في تنمية أعماله. وفي النهاية، نجح في ضمان الاستقرار المالي من خلال دفع فائدة بنسبة 8% على القرض الذي حصل عليه في وقت سابق، الأمر الذي عزز التزامه بالنجاح في صناعة تصنيع الورق المستدام.",
        "ومع اقتراب السنة المالية من نهايتها، كان السيد علي يحسب الضرائب المستحقة للحكومة بدقة ويسددها. ومع معدل ضريبي يبلغ 20%، فإن مساهمته تعكس التزامه بالامتثال ونجاحه المتزايد كرجل أعمال في قطاع تصنيع الورق."
      ]
      
    },
  ];
  informationtextround2 = [
    {
      Establishment: 'أصدرت شركة جلو إيسنس مؤخرًا 100 ألف سهم جديد، وجمعت 500 ألف ريال سعودي من المستثمرين. كما حصلت الشركة على قرض طويل الأجل بقيمة 300 ألف ريال سعودي من أحد البنوك المحلية، بمعدل فائدة سنوي 8%. ويتم سداد القرض على مدى 5 سنوات، مع سداد 60 ألف ريال سعودي سنويًا كسداد لأصل القرض، بالإضافة إلى الفائدة. وتبلغ الأرباح المحتجزة من الفترة السابقة 480 ألف ريال سعودي.',
      Investments: 'وتمتلك الشركة معدات تصنيع بقيمة 450 ألف ريال سعودي، مع استهلاك تراكمي بقيمة 100 ألف ريال سعودي. وقد قامت شركة GlowEssence مؤخرًا بشراء معدات تعبئة وتغليف جديدة بقيمة 150 ألف ريال سعودي، مع عمر افتراضي يبلغ 10 سنوات مع استهلاك ثابت.',
      Operations: [
        "يتضمن المخزون الموجود مواد خام بقيمة 120 ألف ريال سعودي وسلع تامة الصنع بقيمة 80 ألف ريال سعودي. وتبلغ الحسابات المدينة 200 ألف ريال سعودي، مع مخصص للديون المشكوك في تحصيلها بقيمة 10 آلاف ريال سعودي. ولدى الشركة 50 ألف ريال سعودي مصاريف مدفوعة مقدمًا لحملة تسويقية قادمة. وبلغ النقد الموجود في بداية العام 60 ألف ريال سعودي.",
        "يبلغ إجمالي الحسابات الدائنة للمواد الخام المشتراة على الائتمان 100 ألف ريال سعودي. وتبلغ المصاريف المستحقة، بما في ذلك الرواتب والمرافق، 40 ألف ريال سعودي. وقد قامت الشركة بتأجيل إيرادات بقيمة 30 ألف ريال سعودي من الدفعات المقدمة من العملاء للمنتجات المطلوبة مسبقًا. ولم يتم تضمين هذا المبلغ في الإيرادات خلال السنة المالية. ويستحق هذا العام القسط الأول من أصل القرض الطويل الأجل والفائدة، والذي يبلغ إجماليه 84 ألف ريال سعودي.",
        "حققت شركة GlowEssence إيرادات مبيعات بقيمة 600 ألف ريال سعودي، حيث تم استلام 450 ألف ريال سعودي نقدًا والباقي على الائتمان. بلغت تكلفة البضائع المباعة (COGS) للسنة 250 ألف ريال سعودي. تشمل تكلفة المبيعات رواتب بقيمة 100 ألف ريال سعودي وتسويق بقيمة 50 ألف ريال سعودي بينما تبلغ تكلفة الإيجار 30 ألف ريال سعودي ونفقات المرافق 20 ألف ريال سعودي. يبلغ إجمالي مصاريف الاستهلاك لمعدات التصنيع والآلات الجديدة 65 ألف ريال سعودي.",
        "يبلغ معدل ضريبة الشركات 25%، وتحتاج الشركة إلى حساب التزامها الضريبي على أساس الدخل الخاضع للضريبة. يتم دفع الضرائب في نهاية العام على أساس صافي دخل الشركة بعد جميع النفقات والفوائد."
      ]
    },
  ];
  informationtextround3 = [
    {
      Establishment: 'تأسست شركة TechWave Innovations قبل 10 سنوات باستثمار أولي قدره 2 مليون ريال سعودي تم جمعه من خلال الأسهم من المؤسسين والمستثمرين الأوائل. نمت الشركة بسرعة من خلال تأمين قرض طويل الأجل بقيمة 1 مليون ريال سعودي من أحد البنوك المحلية، بمعدل فائدة سنوي 6%. يتم سداد القرض على مدى 10 سنوات، مع استحقاق 100 ألف ريال سعودي كل عام كسداد أصل، بالإضافة إلى الفائدة.',
      Investments: 'استثمرت الشركة بكثافة في التكنولوجيا والبنية التحتية. تشمل الأصول المتداولة البرمجيات والبنية التحتية لتكنولوجيا المعلومات بقيمة 1200 ألف ريال سعودي، مع استهلاك تراكمي قدره 500 ألف ريال سعودي. تمتلك شركة TechWave مساحات مكتبية بقيمة 800 ألف ريال سعودي ومعدات مكتبية بقيمة 300 ألف ريال سعودي، مع استهلاك تراكمي قدره 100 ألف ريال سعودي. يمكن استخدام الأصول الثابتة الأخرى لاستيعاب البنية التحتية لتكنولوجيا المعلومات والمعدات. بالإضافة إلى ذلك، تمتلك الشركة سمعة تجارية بقيمة 970 ألف ريال سعودي.',
      Operations: [
        "حققت شركة TechWave إيرادات بلغت 3,000,000 ريال سعودي خلال السنة المالية الحالية، حيث تم استلام 2,200,000 ريال سعودي نقدًا والباقي على الائتمان. بلغت تكلفة البضائع المباعة (COGS) للسنة 1,000,000 ريال سعودي. تضمنت المصروفات التشغيلية 500,000 ريال سعودي للرواتب و200,000 ريال سعودي للتسويق كجزء من المبيعات، و100,000 ريال سعودي للإيجار و50,000 ريال سعودي للمرافق. بلغ إجمالي مصروفات الاستهلاك للبنية التحتية لتكنولوجيا المعلومات ومعدات المكاتب 150,000 ريال سعودي.",
        "تبلغ الحسابات المدينة 800,000 ريال سعودي، مع مخصص للحسابات المشكوك في تحصيلها بقيمة 30,000 ريال سعودي. لدى الشركة 100,000 ريال سعودي كنفقات مدفوعة مقدمًا لصفقة ترخيص برامج قادمة. بلغ النقد المتاح في بداية العام 150,000 ريال سعودي.",
        "بلغ إجمالي الحسابات المستحقة الدفع مقابل الخدمات والمعدات المشتراة على الائتمان 300,000 ريال سعودي. وبلغت المصروفات المستحقة، بما في ذلك الرواتب والمرافق، 120,000 ريال سعودي. كما قامت الشركة بتأجيل إيرادات بقيمة 200,000 ريال سعودي من العملاء الذين دفعوا مقدمًا لعقود الخدمة طويلة الأجل. ولم يتم تضمين هذا المبلغ في الإيرادات خلال السنة المالية.",
        "أصدرت شركة TechWave 50,000 سهم إضافي هذا العام، مما أدى إلى جمع 1,000,000 ريال سعودي في صورة أسهم لتمويل توسعها في الخدمات السحابية. ويبلغ إجمالي حقوق المساهمين، بما في ذلك الاستثمار الجديد، 3,000,000 ريال سعودي."
      ]
      
    },
  ];



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
              this.attempt=data.resultList[0].attempt;

              this._global.casemanagementid.next(data.resultList[0].accountingarabiccmid);
              if (data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].accountingArabicCM[this.periodcellname[i]]

              }
              for (let i = 36; i < 45; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 36]]

              }
              for (let i = 39; i < 45; i++) {
                if (this.result[i] == "1") {
                  this.result[i] = true;
                  this.technologycheckbox = this.technologycheckbox + 1;
                } else {
                  this.result[i] = false;

                }
              }
              if (this.technologycheckbox == 2) {
                for (let j = 39; j < 45; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 39] = false;
                  } else {
                    this.disabled[j - 39] = true;
                  }
                }
              }


              if ((data.resultList[0].aw53 == 'Yes') || (data.resultList[0].aw53 == 'yes')) {
                this.checkdisable = true;
              }
              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].title = String(data.resultList[0].logisticsCM[this.cardData1[i].title])

              //   this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              // }

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

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(AccountingArabicfoodforthoughtComponent, {
      data: {},
    });
  }

}
