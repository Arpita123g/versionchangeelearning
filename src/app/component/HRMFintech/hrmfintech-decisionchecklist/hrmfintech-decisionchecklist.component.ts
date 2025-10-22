import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingPopup } from '../../Designthinking/designthinkingdecisionchecklist/designthinkingdecisionchecklist.component';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { HrmfintechassessmentService } from 'src/app/service/assesment/HrmFintech/hrmfintechassessment.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
// import { HrmfintechassessmentService } from 'src/app/service/HrmFintech/hrmfintechassessment.service';


@Component({
  selector: 'app-hrmfintech-decisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,MatIconModule, FormsModule],
  templateUrl: './hrmfintech-decisionchecklist.component.html',
  styleUrls: ['./hrmfintech-decisionchecklist.component.scss']
})
export class HrmfintechDecisionchecklistComponent extends AbstractComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  numberofattempts: number = 0;
  foodforthought: boolean = true;
  kpivaluearray: any = [];
  kpivalue: any = [
    ["d138", "e138", "f138"],
    ["d139", "e139", "f139"],
    ["d140", "e140", "f140"],
    ["d141", "e141", "f141"],
    ["d142", "e142", "f142"],
    ["d143", "e143", "f143"],
  ];

  optionalcase: any = ['foodforthoughtstatus', 'productengstatus', 'customersuccessstatus', 'designcommunicationstatus'];

  blankInputMessage: any = [];
  conflictvalue: string = "";

  tableData: any = [
    {
      title: "Talent Acquisition, Sales",
      status: 'active',
      body: [
        { title: "Channel Mix 1, Top Management", value: "", cell: ["e6", "e9", "e12", "e15", "e18", "e21"] },
        { title: "Channel Mix 2, Top Management", value: "", cell: ["e7", "e10", "e13", "e16", "e19", "e22"] },
        { title: "Channel Mix 3, Top Management", value: "", cell: ["e8", "e11", "e14", "e17", "e20", "e23"] },
        { title: "Channel Mix 1, Senior Management", value: "", cell: ["f6", "f9", "f12", "f15", "f18", "f21"] },
        { title: "Channel Mix 2, Senior Management", value: "", cell: ["f7", "f10", "f13", "f16", "f19", "f22"] },
        { title: "Channel Mix 3, Senior Management", value: "", cell: ["f8", "f11", "f14", "f17", "f20", "f23"] },
        { title: "Channel Mix 1, Junior Management", value: "", cell: ["g6", "g9", "g12", "g15", "g18", "g21"] },
        { title: "Channel Mix 2, Junior Management", value: "", cell: ["g7", "g10", "g13", "g16", "g19", "g22"] },
        { title: "Channel Mix 3, Junior Management", value: "", cell: ["g8", "g11", "g14", "g17", "g20", "g23"] },
        { title: "Number of hiring Top Management, units", value: "", cell: ["e27", "e28", "e29", "e30", "e31", "e32"] },
        { title: "Number of hiring Senior Management, units", value: "", cell: ["e35", "e36", "e37", "e38", "e39", "e40"] },
        { title: "Number of hiring Junior Management, units", value: "", cell: ["e43", "e44", "e45", "e46", "e47", "e48"] },
        { title: "Number of hiring for Bench Junior Management, units", value: "", cell: ["e51", "e52", "e53", "e54", "e55", "e56"] },
        { title: "Number of Retrenchment Junior Management, units", value: "", cell: ["e59", "e60", "e61", "e62", "e63", "e64"] },
        { title: "Number of Retrenchment Senior Management, units", value: "", cell: ["e67", "e68", "e69", "e70", "e71", "e72"] },
        { title: "Number of Retrenchment Top Management, units", value: "", cell: ["e75", "e76", "e77", "e78", "e79", "e80"] },
        { title: "Vendor Hiring, Top & Senior Management", value: "", cell: ["e83", "e84", "e85", "e86", "e87", "e88"] },
        { title: "Outsourcing, Junior Management", value: "", cell: ["e91", "e92", "e93", "e94", "e95", "e96"] },
      ]
    },
    {
      title: "Talent Acquisition, Product & Engineering",
      status: 'active',
      body: [
        { title: "Channel Mix 1, Top Management", value: "", cell: ["i6", "i9", "i12", "i15", "i18", "i21"] },
        { title: "Channel Mix 2, Top Management", value: "", cell: ["i7", "i10", "i13", "i16", "i19", "i22"] },
        { title: "Channel Mix 3, Top Management", value: "", cell: ["i8", "i11", "i14", "i17", "i20", "i23"] },
        { title: "Channel Mix 1, Senior Management", value: "", cell: ["j6", "j9", "j12", "j15", "j18", "j21"] },
        { title: "Channel Mix 2, Senior Management", value: "", cell: ["j7", "j10", "j13", "j16", "j19", "j22"] },
        { title: "Channel Mix 3, Senior Management", value: "", cell: ["j8", "j11", "j14", "j17", "j20", "j23"] },
        { title: "Channel Mix 1, Junior Management", value: "", cell: ["k6", "k9", "k12", "k15", "k18", "k21"] },
        { title: "Channel Mix 2, Junior Management", value: "", cell: ["k7", "k10", "k13", "k16", "k19", "k22"] },
        { title: "Channel Mix 3, Junior Management", value: "", cell: ["k8", "k11", "k14", "k17", "k20", "k23"] },
        { title: "Number of hiring Top Management, units", value: "", cell: ["f27", "f28", "f29", "f30", "f31", "f32"] },
        { title: "Number of hiring Senior Management, units", value: "", cell: ["f35", "f36", "f37", "f38", "f39", "f40"] },
        { title: "Number of hiring Junior Management, units", value: "", cell: ["f43", "f44", "f45", "f46", "f47", "f48"] },
        { title: "Number of hiring for Bench Junior Management, units", value: "", cell: ["f51", "f52", "f53", "f54", "f55", "f56"] },
        { title: "Number of Retrenchment Junior Management, units", value: "", cell: ["f59", "f60", "f61", "f62", "f63", "f64"] },
        { title: "Number of Retrenchment Senior Management, units", value: "", cell: ["f67", "f68", "f69", "f70", "f71", "f72"] },
        { title: "Number of Retrenchment Top Management, units", value: "", cell: ["f75", "f76", "f77", "f78", "f79", "f80"] },
        { title: "Vendor Hiring, Top & Senior Management", value: "", cell: ["f83", "f84", "f85", "f86", "f87", "f88"] },
        { title: "Outsourcing, Junior Management", value: "", cell: ["f91", "f92", "f93", "f94", "f95", "f96"] },
      ]
    },
    {
      title: "Talent Acquisition, Customer Support",
      status: 'active',
      body: [
        { title: "Channel Mix 1, Top Management", value: "", cell: ["m6", "m9", "m12", "m15", "m18", "m21"] },
        { title: "Channel Mix 2, Top Management", value: "", cell: ["m7", "m10", "m13", "m16", "m19", "m22"] },
        { title: "Channel Mix 3, Top Management", value: "", cell: ["m8", "m11", "m14", "m17", "m20", "m23"] },
        { title: "Channel Mix 1, Senior Management", value: "", cell: ["n6", "n9", "n12", "n15", "n18", "n21"] },
        { title: "Channel Mix 2, Senior Management", value: "", cell: ["n7", "n10", "n13", "n16", "n19", "n22"] },
        { title: "Channel Mix 3, Senior Management", value: "", cell: ["n8", "n11", "n14", "n17", "n20", "n23"] },
        { title: "Channel Mix 1, Junior Management", value: "", cell: ["o6", "o9", "o12", "o15", "o18", "o21"] },
        { title: "Channel Mix 2, Junior Management", value: "", cell: ["o7", "o10", "o13", "o16", "o19", "o22"] },
        { title: "Channel Mix 3, Junior Management", value: "", cell: ["o8", "o11", "o14", "o17", "o20", "o23"] },
        { title: "Number of hiring Top Management, units", value: "", cell: ["g27", "g28", "g29", "g30", "g31", "g32"] },
        { title: "Number of hiring Senior Management, units", value: "", cell: ["g35", "g36", "g37", "g38", "g39", "g40"] },
        { title: "Number of hiring Junior Management, units", value: "", cell: ["g43", "g44", "g45", "g46", "g47", "g48"] },
        { title: "Number of hiring for Bench Junior Management, units", value: "", cell: ["g51", "g52", "g53", "g54", "g55", "g56"] },
        { title: "Number of Retrenchment Junior Management, units", value: "", cell: ["g59", "g60", "g61", "g62", "g63", "g54"] },
        { title: "Number of Retrenchment Senior Management, units", value: "", cell: ["g67", "g68", "g69", "g70", "g71", "g72"] },
        { title: "Number of Retrenchment Top Management, units", value: "", cell: ["g75", "g76", "g77", "g78", "g79", "g80"] },
        { title: "Vendor Hiring, Top & Senior Management", value: "", cell: ["g83", "g84", "g85", "g86", "g87", "g88"] },
        { title: "Outsourcing, Junior Management", value: "", cell: ["g91", "g92", "g93", "g94", "g95", "g96"] },
      ]
    },
    {
      title: "Talent Acquisition, Design & Communication",
      status: 'active',
      body: [
        { title: "Channel Mix 1, Top Management", value: "", cell: ["q6", "q9", "q12", "q15", "q18", "q21"] },
        { title: "Channel Mix 2, Top Management", value: "", cell: ["q7", "q10", "q13", "q16", "q19", "q22"] },
        { title: "Channel Mix 3, Top Management", value: "", cell: ["q8", "q11", "q14", "q17", "q20", "q23"] },
        { title: "Channel Mix 1, Senior Management", value: "", cell: ["r6", "r9", "r12", "r15", "r18", "r21"] },
        { title: "Channel Mix 2, Senior Management", value: "", cell: ["r7", "r10", "r13", "r16", "r19", "r21"] },
        { title: "Channel Mix 3, Senior Management", value: "", cell: ["r8", "r11", "r14", "r17", "r20", "r23"] },
        { title: "Channel Mix 1, Junior Management", value: "", cell: ["s6", "s9", "s12", "s15", "s18", "s21"] },
        { title: "Channel Mix 2, Junior Management", value: "", cell: ["s7", "s10", "s13", "s16", "s19", "s22"] },
        { title: "Channel Mix 3, Junior Management", value: "", cell: ["s8", "s11", "s14", "s17", "s20", "s23"] },
        { title: "Number of hiring Top Management, units", value: "", cell: ["h27", "h28", "h29", "h30", "h31", "h32"] },
        { title: "Number of hiring Senior Management, units", value: "", cell: ["h35", "h36", "h37", "h38", "h39", "h40"] },
        { title: "Number of hiring Junior Management, units", value: "", cell: ["h43", "h44", "h45", "h46", "h47", "h48"] },
        { title: "Number of hiring for Bench Junior Management, units", value: "", cell: ["h51", "h52", "h53", "h54", "h55", "h56"] },
        { title: "Number of Retrenchment Junior Management, units", value: "", cell: ["h59", "h60", "h61", "h62", "h63", "h64"] },
        { title: "Number of Retrenchment Senior Management, units", value: "", cell: ["h67", "h68", "h69", "h70", "h71", "h72"] },
        { title: "Number of Retrenchment Top Management, units", value: "", cell: ["h75", "h76", "h77", "h78", "h79", "h80"] },
        { title: "Vendor Hiring, Top & Senior Management", value: "", cell: ["h83", "h84", "h85", "h86", "h87", "h88"] },
        { title: "Outsourcing, Junior Management", value: "", cell: ["h91", "h92", "h93", "h94", "h95", "h96"] },
      ]
    },
    {
      title: "Talent Management, Sales",
      status: 'active',
      body: [
        { title: "5 Star Compensation, % of employee, Top Management", value: "", cell: ["e102", "e106", "e110", "e114", "e118", "e122"] },
        { title: "4 Star Compensation, % of employee, Top Management", value: "", cell: ["e103", "e107", "e111", "e115", "e119", "e123"] },
        { title: "3 Star Compensation, % of employee, Top Management", value: "", cell: ["e104", "e108", "e112", "e116", "e120", "e124"] },
        { title: "2 Star Compensation, % of employee, Top Management", value: "", cell: ["e105", "e109", "e113", "e117", "e121", "e125"] },
        { title: "5 Star Compensation, % of employee, Senior Management", value: "", cell: ["f102", "f106", "f110", "f114", "f118", "f122"] },
        { title: "4 Star Compensation, % of employee, Senior Management", value: "", cell: ["f103", "f107", "f111", "f115", "f119", "f123"] },
        { title: "3 Star Compensation, % of employee, Senior Management", value: "", cell: ["f104", "f108", "f112", "f116", "f120", "f124"] },
        { title: "2 Star Compensation, % of employee, Senior Management", value: "", cell: ["f105", "f109", "f113", "f117", "f121", "f125"] },
        { title: "5 Star Compensation, % of employee, Junior Management", value: "", cell: ["g102", "g106", "g110", "g114", "g118", "g122"] },
        { title: "4 Star Compensation, % of employee, Junior Management", value: "", cell: ["g103", "g107", "g111", "g115", "g119", "g123"] },
        { title: "3 Star Compensation, % of employee, Junior Management", value: "", cell: ["g104", "g108", "g112", "g116", "g120", "g124"] },
        { title: "2 Star Compensation, % of employee, Junior Management", value: "", cell: ["g105", "g109", "g113", "g117", "g121", "g125"] },
        { title: "Incentive Policy, Top Management", value: "", cell: ["e129", "e130", "e131", "e132", "e133", "e134"] },
        { title: "Incentive Policy, Senior Management", value: "", cell: ["f129", "f130", "f131", "f132", "f133", "f134"] },
        { title: "Incentive Policy, Junior Management", value: "", cell: ["g129", "g130", "g131", "g132", "g133", "g134"] },
        { title: "Paycut, Top Management", value: "", cell: ["e153", "e154", "e155", "e156", "e157", "e158"] },
        { title: "Paycut, Senior Management", value: "", cell: ["e145", "e146", "e147", "e148", "e149", "e150"] },
        { title: "Paycut, Junior Management", value: "", cell: ["e137", "e138", "e139", "e140", "e141", "e142"] },
        { title: "Training, Top Management", value: "", cell: ["e162", "e163", "e164", "e165", "e166", "e167"] },
        { title: "Training, Senior Management", value: "", cell: ["f162", "f163", "f164", "f165", "f166", "f167"] },
        { title: "Training, Junior Management", value: "", cell: ["g162", "g163", "g164", "g165", "g166", "g167"] },
        { title: "Leadership Programme, Senior Management", value: "", cell: ["f171", "f172", "f173", "f174", "f175", "f176"] },
        { title: "Leadership Programme, Junior Management", value: "", cell: ["g171", "g172", "g173", "g174", "g175", "g176"] },
      ]
    },
    {
      title: "Talent Management, Product & Engineering",
      status: 'active',
      body: [
        { title: "5 Star Compensation, % of employee, Top Management", value: "", cell: ["i102", "i106", "i110", "i114", "i118", "i122"] },
        { title: "4 Star Compensation, % of employee, Top Management", value: "", cell: ["i103", "i107", "i111", "i115", "i119", "i123"] },
        { title: "3 Star Compensation, % of employee, Top Management", value: "", cell: ["i104", "i108", "i112", "i116", "i120", "i124"] },
        { title: "2 Star Compensation, % of employee, Top Management", value: "", cell: ["i105", "i109", "i113", "i117", "i121", "i125"] },
        { title: "5 Star Compensation, % of employee, Senior Management", value: "", cell: ["j102", "j106", "j110", "j114", "j118", "j122"] },
        { title: "4 Star Compensation, % of employee, Senior Management", value: "", cell: ["j103", "j107", "j111", "j115", "j119", "j123"] },
        { title: "3 Star Compensation, % of employee, Senior Management", value: "", cell: ["j104", "j108", "j112", "j116", "j120", "j124"] },
        { title: "2 Star Compensation, % of employee, Senior Management", value: "", cell: ["j105", "j109", "j113", "j117", "j121", "j125"] },
        { title: "5 Star Compensation, % of employee, Junior Management", value: "", cell: ["k102", "k106", "k110", "k114", "k118", "k122"] },
        { title: "4 Star Compensation, % of employee, Junior Management", value: "", cell: ["k103", "k107", "k111", "k115", "k119", "k123"] },
        { title: "3 Star Compensation, % of employee, Junior Management", value: "", cell: ["k104", "k108", "k112", "k116", "k120", "k124"] },
        { title: "2 Star Compensation, % of employee, Junior Management", value: "", cell: ["k105", "k109", "k113", "k117", "k121", "k125"] },
        { title: "Incentive Policy, Top Management", value: "", cell: ["i129", "i130", "i131", "i132", "i133", "i134"] },
        { title: "Incentive Policy, Senior Management", value: "", cell: ["j129", "j130", "j131", "j132", "j133", "j134"] },
        { title: "Incentive Policy, Junior Management", value: "", cell: ["k129", "k130", "k131", "k132", "k133", "k134"] },
        { title: "Paycut, Top Management", value: "", cell: ["f153", "f154", "f155", "f156", "f157", "f158"] },
        { title: "Paycut, Senior Management", value: "", cell: ["f145", "f146", "f147", "f148", "f149", "f150"] },
        { title: "Paycut, Junior Management", value: "", cell: ["f137", "f138", "f139", "f140", "f141", "f142"] },
        { title: "Training, Top Management", value: "", cell: ["i162", "i163", "i164", "i165", "i166", "i167"] },
        { title: "Training, Senior Management", value: "", cell: ["j162", "j163", "j164", "j165", "j166", "j167"] },
        { title: "Training, Junior Management", value: "", cell: ["k162", "k163", "k164", "k165", "k166", "k167"] },
        { title: "Leadership Programme, Senior Management", value: "", cell: ["j171", "j172", "j173", "j174", "j175", "j176"] },
        { title: "Leadership Programme, Junior Management", value: "", cell: ["k171", "k172", "k173", "k174", "k175", "k176"] },
      ]
    },
    {
      title: "Talent Management, Customer Support",
      status: 'active',
      body: [
        { title: "5 Star Compensation, % of employee, Top Management", value: "", cell: ["m102", "m106", "m110", "m114", "m118", "m122"] },
        { title: "4 Star Compensation, % of employee, Top Management", value: "", cell: ["m103", "m107", "m111", "m115", "m119", "m123"] },
        { title: "3 Star Compensation, % of employee, Top Management", value: "", cell: ["m104", "m108", "m112", "m116", "m120", "m124"] },
        { title: "2 Star Compensation, % of employee, Top Management", value: "", cell: ["m105", "m109", "m113", "m117", "m121", "m125"] },
        { title: "5 Star Compensation, % of employee, Senior Management", value: "", cell: ["n102", "n106", "n110", "n114", "n118", "n122"] },
        { title: "4 Star Compensation, % of employee, Senior Management", value: "", cell: ["n103", "n107", "n111", "n115", "n119", "n123"] },
        { title: "3 Star Compensation, % of employee, Senior Management", value: "", cell: ["n104", "n108", "n112", "n116", "n120", "n124"] },
        { title: "2 Star Compensation, % of employee, Senior Management", value: "", cell: ["n105", "n109", "n113", "n117", "n121", "n125"] },
        { title: "5 Star Compensation, % of employee, Junior Management", value: "", cell: ["o102", "o106", "o110", "o114", "o118", "o122"] },
        { title: "4 Star Compensation, % of employee, Junior Management", value: "", cell: ["o103", "o107", "o111", "o115", "o119", "o123"] },
        { title: "3 Star Compensation, % of employee, Junior Management", value: "", cell: ["o104", "o108", "o112", "o116", "o120", "o124"] },
        { title: "2 Star Compensation, % of employee, Junior Management", value: "", cell: ["o105", "o109", "o113", "o117", "o121", "o125"] },
        { title: "Incentive Policy, Top Management", value: "", cell: ["m129", "m130", "m131", "m132", "m133", "m134"] },
        { title: "Incentive Policy, Senior Management", value: "", cell: ["n129", "n130", "n131", "n132", "n133", "n134"] },
        { title: "Incentive Policy, Junior Management", value: "", cell: ["o129", "o130", "o131", "o132", "o133", "o134"] },
        { title: "Paycut, Top Management", value: "", cell: ["g153", "g154", "g155", "g156", "g157", "g158"] },
        { title: "Paycut, Senior Management", value: "", cell: ["g145", "g146", "g147", "g148", "g149", "g150"] },
        { title: "Paycut, Junior Management", value: "", cell: ["g137", "g138", "g139", "g140", "g141", "g142"] },
        { title: "Training, Top Management", value: "", cell: ["m162", "m163", "m164", "m165", "m166", "m167"] },
        { title: "Training, Senior Management", value: "", cell: ["n162", "n163", "n164", "n165", "n166", "n167"] },
        { title: "Training, Junior Management", value: "", cell: ["o162", "o163", "o164", "o165", "o166", "o167"] },
        { title: "Leadership Programme, Senior Management", value: "", cell: ["n171", "n172", "n173", "n174", "n175", "n176"] },
        { title: "Leadership Programme, Junior Management", value: "", cell: ["o171", "o172", "o173", "o174", "o175", "o176"] },
      ]
    },
    {
      title: "Talent Management, Design & Communication",
      status: 'active',
      body: [
        { title: "5 Star Compensation, % of employee, Top Management", value: "", cell: ["q102", "q106", "q110", "q114", "q118", "q122"] },
        { title: "4 Star Compensation, % of employee, Top Management", value: "", cell: ["q103", "q107", "q111", "q115", "q119", "q123"] },
        { title: "3 Star Compensation, % of employee, Top Management", value: "", cell: ["q104", "q108", "q112", "q116", "q120", "q124"] },
        { title: "2 Star Compensation, % of employee, Top Management", value: "", cell: ["q105", "q109", "q113", "q117", "q121", "q125"] },
        { title: "5 Star Compensation, % of employee, Senior Management", value: "", cell: ["r102", "r106", "r110", "r114", "r118", "r122"] },
        { title: "4 Star Compensation, % of employee, Senior Management", value: "", cell: ["r103", "r107", "r111", "r115", "r119", "r123"] },
        { title: "3 Star Compensation, % of employee, Senior Management", value: "", cell: ["r104", "r108", "r112", "r116", "r120", "r124"] },
        { title: "2 Star Compensation, % of employee, Senior Management", value: "", cell: ["r105", "r109", "r113", "r117", "r121", "r125"] },
        { title: "5 Star Compensation, % of employee, Junior Management", value: "", cell: ["s102", "s106", "s110", "s114", "s118", "s122"] },
        { title: "4 Star Compensation, % of employee, Junior Management", value: "", cell: ["s103", "s107", "s111", "s115", "s119", "s123"] },
        { title: "3 Star Compensation, % of employee, Junior Management", value: "", cell: ["s104", "s108", "s112", "s116", "s120", "s124"] },
        { title: "2 Star Compensation, % of employee, Junior Management", value: "", cell: ["s105", "s109", "s113", "s117", "s121", "s125"] },
        { title: "Incentive Policy, Top Management", value: "", cell: ["q129", "q130", "q131", "q132", "q133", "q134"] },
        { title: "Incentive Policy, Senior Management", value: "", cell: ["r129", "r130", "r131", "r132", "r133", "r134"] },
        { title: "Incentive Policy, Junior Management", value: "", cell: ["s129", "s130", "s131", "s132", "s133", "s134"] },
        { title: "Paycut, Top Management", value: "", cell: ["h153", "h154", "h155", "h156", "h157", "h158"] },
        { title: "Paycut, Senior Management", value: "", cell: ["h145", "h146", "h147", "h148", "h149", "h150"] },
        { title: "Paycut, Junior Management", value: "", cell: ["h137", "h138", "h139", "h140", "h141", "h142"] },
        { title: "Training, Top Management", value: "", cell: ["q162", "q163", "q164", "q165", "q166", "q167"] },
        { title: "Training, Senior Management", value: "", cell: ["r162", "r163", "r164", "r165", "r166", "r167"] },
        { title: "Training, Junior Management", value: "", cell: ["s162", "s163", "s164", "s165", "s166", "s167"] },
        { title: "Leadership Programme, Senior Management", value: "", cell: ["r171", "r172", "r173", "r174", "r175", "r176"] },
        { title: "Leadership Programme, Junior Management", value: "", cell: ["s171", "s172", "s173", "s174", "s175", "s176"] },
      ]
    },
    {
      title: "Policy",
      status: 'active',
      body: [
        { title: "Division Policy 1", value: "", cell: ["e180", "e190", "e200", "e210", "e220", "e230"] },
        { title: "Division Policy 2", value: "", cell: ["e181", "e191", "e201", "e211", "e221", "e231"] },
        { title: "Division Policy 3", value: "", cell: ["e182", "e192", "e202", "e212", "e222", "e232"] },
        { title: "Division Policy 4", value: "", cell: ["e183", "e193", "e203", "e213", "e223", "e233"] },
        { title: "Division Policy 5", value: "", cell: ["e184", "e194", "e204", "e214", "e224", "e234"] },
        { title: "Division Policy 6", value: "", cell: ["e185", "e195", "e205", "e215", "e225", "e235"] },
        { title: "Division Policy 7", value: "", cell: ["e186", "e196", "e206", "e216", "e226", "e236"] },
        { title: "Division Policy 8", value: "", cell: ["e187", "e197", "e207", "e217", "e227", "e237"] },
        { title: "Division Policy 9", value: "", cell: ["e188", "e198", "e208", "e218", "e228", "e238"] },
        { title: "Division Policy 10", value: "", cell: ["e189", "e199", "e209", "e219", "e229", "e239"] },
        { title: "Diversity Inclusion Policy 1", value: "", cell: ["e242", "e252", "e262", "e272", "e282", "e292"] },
        { title: "Diversity Inclusion Policy 2", value: "", cell: ["e243", "e253", "e263", "e273", "e283", "e293"] },
        { title: "Diversity Inclusion Policy 3", value: "", cell: ["e244", "e254", "e264", "e274", "e284", "e294"] },
        { title: "Diversity Inclusion Policy 4", value: "", cell: ["e245", "e255", "e265", "e275", "e285", "e295"] },
        { title: "Diversity Inclusion Policy 5", value: "", cell: ["e246", "e256", "e266", "e276", "e286", "e296"] },
        { title: "Diversity Inclusion Policy 6", value: "", cell: ["e247", "e257", "e267", "e277", "e287", "e297"] },
        { title: "Diversity Inclusion Policy 7", value: "", cell: ["e248", "e258", "e268", "e278", "e288", "e298"] },
        { title: "Diversity Inclusion Policy 8", value: "", cell: ["e249", "e259", "e269", "e279", "e289", "e299"] },
        { title: "Diversity Inclusion Policy 9", value: "", cell: ["e250", "e260", "e270", "e280", "e290", "e300"] },
        { title: "Diversity Inclusion Policy 10", value: "", cell: ["e151", "e261", "e271", "e281", "e291", "e301"] },
        { title: "Towhall Programme 1", value: "", cell: ["e304", "e307", "e310", "e313", "e316", "e319"] },
        { title: "Towhall Programme 2", value: "", cell: ["e305", "e308", "e311", "e314", "e317", "e320"] },
        { title: "Towhall Programme 3", value: "", cell: ["e306", "e309", "e312", "e315", "e318", "e321"] },
      ]
    },
    {
      title: "Organizational & Budgets",
      status: 'active',
      body: [
        { title: "Performance & Goal Tool, Level", value: "", cell: ["e326", "e327", "e328", "e329", "e320", "e331"] },
        { title: "Recruitment Analytics Tool, Level", value: "", cell: ["e334", "e335", "e336", "e337", "e338", "e339"] },
        { title: "Workforce Analytics Tool, Level", value: "", cell: ["e342", "e343", "e344", "e345", "e346", "e347"] },
        { title: "Process Content Guidance Tool, Level", value: "", cell: ["e350", "e351", "e352", "e353", "e354", "e355"] },
        { title: "Conflict", value: "", cell: ["d419", "d419", "d419", "d419", "d419", "d419"] },
      ]
    }
  ]



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private hrmFintechassesmentservice: HrmfintechassessmentService,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
      this.useranalysisinput = '';
    }

    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1))
    } else {
      this.getFetchData(this.noofattempt);
    }
  }

  //percent check function
  checkPercent(title: string) {
    if (title.includes('%')) {
      return true;
    } else {
      return false;
    }
  }


  getPreviousData(attempt: string) {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              const attemptIndex = Number(attempt);
              this.previousResulList = [];
              for (let i = 0; i < this.tableData.length; i++) {
                for (let j = 0; j < this.tableData[i].body.length; j++) {
                  const cellArray = data.resultList[0].decisions[this.tableData[i].body[j].cell[attempt]];
                  if (attemptIndex < cellArray.length) {
                    this.previousResulList.push(cellArray[attemptIndex]);
                  } else {
                    this.previousResulList.push(null);
                  }
                }
              };
              for (let i = 0; i < this.tableData.length; i++) {
                for (let j = 0; j < this.tableData[i].body.length; j++) {
                  for (let k = 0; k < this.tableData[i].body[j].cell.length; k++) {
                    if (Number(this.previousResulList[i]) == 0) {
                      this.previousResulList[i] = "-"
                    } else {
                      this.previousResulList[i] = data.resultList[0].decisions[this.tableData[i].body[j].cell[attempt]];
                    }
                    if (["Paycut, Top Management", "Paycut, Senior Management", "Paycut, Junior Management"].includes(this.tableData[i].body[j].title)) {
                      this.previousResulList[i] = Number(this.previousResulList[i]) === 1 ? "Yes" : "No";
                    }
                  }
                }
              }
              this.getFetchData(this.noofattempt);
            }

          } else {
            this.checkloading = false;

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getFetchData(attempt: string) {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].hrmGameCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(this.noofattempt);
              this._global.casemanagementid.next(data.resultList[0].hrmgamecmid);
              this.foodforthoughtQNo = data.resultList[0].decisions.d418;
              this.submitprove = data.resultList[0].decisions.d417;
              this.conflictvalue = data.resultList[0].decisions.d419;
              let attempt = data.resultList[0].attempt;
              if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  if (this.optionalcase[i] == 'productengstatus') {
                    this.tableData[1].status = "inactive";
                    this.tableData[5].status = "inactive";
                  }
                  if (this.optionalcase[i] == 'customersuccessstatus') {
                    this.tableData[2].status = "inactive";
                    this.tableData[6].status = "inactive";
                  }
                  if (this.optionalcase[i] == 'designcommunicationstatus') {
                    this.tableData[3].status = "inactive";
                    this.tableData[7].status = "inactive";
                  }
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              };

              for (let i = 0; i < this.tableData.length; i++) {
                for (let j = 0; j < this.tableData[i].body.length; j++) {
                  this.tableData[i].body[j].value = data.resultList[0].decisions[this.tableData[i].body[j].cell[attempt]];
                  if (["Paycut, Top Management", "Paycut, Senior Management", "Paycut, Junior Management"].includes(this.tableData[i].body[j].title)) {
                    this.previousResulList[i] = Number(this.previousResulList[i]) === 1 ? "Yes" : "No";
                  }
                  if (this.tableData[i].body[j].value == 0) {
                    this.tableData[i].body[j].value = "-";
                  }
                }
              };

              for (let i = 0; i < 4; i++) {
                [16, 17].forEach(index => {
                  const value = this.tableData[i].body[index].value.toLowerCase();
                  this.tableData[i].body[index].value = value === 'yes' ? "Applied" : "Not Applied";
                });
              }

              for (let i = 0; i < this.tableData.length; i++) {
                for (let j = 0; j < this.tableData[i].body.length; j++) {
                  for (let k = 0; k < this.tableData[i].body[j].cell.length; k++) {
                    if (attempt > 1) {
                      if (this.tableData[i].body[j].cell == this.previousResulList[i]) {
                        this.isClass[i] = true;
                      } else {
                        this.isClass[i] = false;
                      }
                    } else {
                      this.isClass[i] = true;
                    }

                  }
                }
              };

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              };

              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              };
              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              };


              this.kpivaluearray = [Number((data.resultList[0].kpireport[this.kpivalue[attempt][0]])).toFixed(2),
              Number((data.resultList[0].kpireport[this.kpivalue[attempt][1]])).toFixed(2),
              Number((data.resultList[0].kpireport[this.kpivalue[attempt][2]])).toFixed(2),
              ];



            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.assesment = this.hrmFintechassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    this.feedback = this.assesment;

    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }
  }


  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt), "coursecode").subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.useranalysisinput = data.resultList[0].studentsentiment;
            if (this.useranalysisinput == '') {
              this.useranalysisinput = String(localStorage.getItem('useranalysis'));
              if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
                this.useranalysisinput = '';
              }
            }
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }


  roundClick() {
    let attempt = this.roundname.split(" ");
    this.checkloading = true;
    this.getFetchData(attempt[1]);

  }

  decisionchecklistpopup() {
    this.saveDecisionChecklist();

  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 12) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    if (this.conflictvalue.toLocaleLowerCase() == 'no') {
      this._alert.error("To move ahead please select conflict option ");
      return;
    }

    const openDialog = () => {
      const dialogRef = this.dialog.open(Hrmfintechpopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray,

        },
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };

    openDialog();
  }


}



// Design Thinking POpUp

@Component({
  selector: 'app-hrmfintechpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './hrmfintechpopup.html',
  styleUrls: ['./hrmfintech-decisionchecklist.component.scss']
})

export class Hrmfintechpopup extends AbstractComponent {

  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DesignthinkingPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/hrmgame/singleinputhrmgame';

    let decisionsubmitData = {
      decisions: {
        "d417": "yes"
      }
    }
    this._api.promotionsdatawrite("hrmgame", 1,
      decisionsubmitData, apiname, 'hrmgamecmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.kpivaluearray[0],
            this.data.kpivaluearray[1], this.data.kpivaluearray[2], 'update', this.noofattempt)

          let submitprovecheck = this.data.submitprove;
          if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
            this.sendAssesmentValue();

          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }
        }

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Desing Thinking").subscribe((data: any) => {

      if (data.status == "Success") { }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Desing Thinking").subscribe((data: any) => {

        if (data.status == "Success") {

          setTimeout(() => {
            this.sendfeedbackvalue();
          }, 4000);
          setTimeout(() => {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }, 10000);
        } else {
          this.checkloading = false;
          this._alert.error(data.status);
        }

      }, (error: any) => {
        this.checkloading = false;
      })

  }

  close() {
    this.dialogRef.close(false);
  }
}