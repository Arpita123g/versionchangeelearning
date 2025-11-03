import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { PromotionsigmentcasechannelComponent } from '../promotionsigmentcasechannel/promotionsigmentcasechannel.component';
import { PromotionsigmentcasecommunicationmixComponent } from '../promotionsigmentcasecommunicationmix/promotionsigmentcasecommunicationmix.component';
import { PromotionsigmentcasefoodforthoughtComponent } from '../promotionsigmentcasefoodforthought/promotionsigmentcasefoodforthought.component';
import { PromotionsigmentcasemarketComponent } from '../promotionsigmentcasemarket/promotionsigmentcasemarket.component';
import { PromotionsigmentcasemarketresearchComponent } from '../promotionsigmentcasemarketresearch/promotionsigmentcasemarketresearch.component';
import { PromotionsigmentcasemoduleComponent } from '../promotionsigmentcasemodule/promotionsigmentcasemodule.component';
import { PromotionsigmentcasecampaignComponent } from '../promotionsigmentcasecampaign/promotionsigmentcasecampaign.component';

@Component({
  selector: 'app-promotionsigmentcaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    PromotionsigmentcasecampaignComponent,
    PromotionsigmentcasechannelComponent,
    PromotionsigmentcasecommunicationmixComponent,
    PromotionsigmentcasefoodforthoughtComponent,
    PromotionsigmentcasemarketComponent,
    PromotionsigmentcasemarketresearchComponent,
    PromotionsigmentcasemoduleComponent,
  ],
  templateUrl: './promotionsigmentcaseheader.component.html',
  styleUrls: ['./promotionsigmentcaseheader.component.scss']
})
export class PromotionsigmentcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  activeTab = 'martketResearch';
  getSelectTab:any
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  ngOnInit(): void {
    this.getSelectTab = localStorage.getItem('selectedTab');
  }

  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }

  GoBack() {
    this._api.GoBack();
  }
  selectedLanguage = 'english';
  languagebody: any = [
    {
      heading: "b277",
      body: ['b7', 'b259', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18']
    },
    {
      heading: "b259",
      body: ['b19']
    },
    {
      heading: "b8",
      body: ['b20', 'b21', 'b22', 'b23', 'b24', 'b26', 'b27', 'b32', 'b33', 'b38', 'b39', 'b40', 'b41', 'b44', 'b45',
        'b48', 'b49', 'b50', 'b55', 'b56', 'b57', 'b58', 'b59']
    },
    {
      heading: "b378",
      body: ['b25', 'b28', 'b29', 'b30', 'b31', 'b34', 'b35', 'b36', 'b37', 'b42', 'b43', 'b46', 'b47', 'b51', 'b52',
        'b53', 'b54', 'b263', 'b264', 'b265', 'b266', 'b267', 'b268', 'b269', 'b270', 'b271',]
    },
    {
      heading: "b9",
      body: ['b60', 'b61', 'b62', 'b63', 'b64', 'b65', 'b67', 'b68', 'b69', 'b70', 'b71', 'b72', 'b73', 'b74']
    },
    {
      heading: "b379",
      body: ['b66']
    },
    {
      heading: "b10",
      body: ['b75', 'b282', 'b283', 'b284', 'b285', 'b286', 'b287', 'b288', 'b289', 'b290', 'b291', 'b292', 'b293',
        'b294', 'b295', 'b296', 'b297', 'b298', 'b299', 'b300', 'b301', 'b302', 'b303', 'b304', 'b305', 'b306', 'b307',
        'b308', 'b309', 'b310', 'b311', 'b312', 'b313', 'b314', 'b315', 'b316', 'b317', 'b318', 'b319', 'b320', 'b321',
        'b322', 'b323', 'b324', 'b325', 'b326', 'b327', 'b328', 'b329', 'b330', 'b331', 'b332', 'b333', 'b334', 'b335',
        'b336', 'b337', 'b338', 'b339', 'b340', 'b341', 'b342', 'b343', 'b344', 'b345', 'b346', 'b347', 'b348', 'b349',
        'b350', 'b351', 'b352', 'b353', 'b354', 'b355', 'b356', 'b357', 'b358', 'b359', 'b360', 'b361', 'b362', 'b363',
        'b364', 'b365'
      ]
    },
    {
      heading: "b11",
      body: ['b104', 'b105', 'b106', 'b107', 'b108', 'b109', 'b112', 'b113', 'b114', 'b115', 'b116', 'b117', 'b118',
        'b272',
      ]
    },
    {
      heading: "b380",
      body: ['b110', 'b111',]
    },
    {
      heading: "b273",
      body: ['b119', 'b120', 'b121', 'b122', 'b123', 'b124', 'b125', 'b126', 'b127', 'b128', 'b129', 'b130', 'b131',
        'b132', 'b133', 'b134', 'b135', 'b136', 'b137', 'b138', 'b139', 'b140', 'b141', 'b275',
      ]
    },
    {
      heading: "b12",
      body: ['b142', 'b143', 'b144', 'b145', 'b146', 'b147', 'b148', 'b149', 'b150', 'b151', 'b152', 'b153', 'b154',
        'b155', 'b156', 'b157', 'b158', 'b159', 'b160', 'b161', 'b162', 'b163', 'b164', 'b165', 'b166', 'b167', 'b168',
        'b169',
      ]
    },
    {
      heading: "b381",
      body: ['b170', 'b171', 'b172',]
    },
    {
      heading: "b278",
      body: ['b173', 'b174', 'b175', 'b274', 'b278', 'b279', 'b280']
    },
    {
      heading: "b382",
      body: ['b176', 'b177', 'b178', 'b179', 'b180', 'b181', 'b182', 'b183', 'b184', 'b185', 'b186', 'b187', 'b188',
      ]
    },
    {
      heading: "b260",
      body: ['b189', 'b190', 'b191', 'b192', 'b193', 'b194', 'b195', 'b196', 'b197', 'b198', 'b199', 'b200', 'b201',
        'b202', 'b203', 'b204', 'b205', 'b206', 'b207', 'b208', 'b209', 'b210', 'b211', 'b212', 'b213', 'b214', 'b215',
        'b216', 'b217', 'b218', 'b219', 'b220', 'b221', 'b222', 'b223', 'b224', 'b225', 'b226', 'b227', 'b228', 'b229',
        'b230', 'b231', 'b232', 'b233', 'b234', 'b235', 'b236', 'b237', 'b238', 'b239', 'b240', 'b241', 'b242', 'b243',
        'b244', 'b245', 'b246', 'b247', 'b248', 'b249', 'b250', 'b251', 'b252', 'b253', 'b254', 'b255', 'b256', 'b257',
        'b258', 'b260',
      ]
    },
    {
      heading: "b384",
      body: ['b3', 'b4', 'b5', 'b6', 'b261', 'b262', 'b385', 'b368', 'b369', 'b370', 'b371', 'b372', 'b373', 'b374',
        'b375', 'b376', 'b377', 'b277', 'b273']
    },
  ]

}
