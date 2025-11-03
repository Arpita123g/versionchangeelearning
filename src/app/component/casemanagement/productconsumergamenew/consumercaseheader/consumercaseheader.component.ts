import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { ConsumercasecraftingComponent } from '../consumercasecrafting/consumercasecrafting.component';
import { ConsumercasetargetComponent } from '../consumercasetarget/consumercasetarget.component';
import { ConsumerconceptualizingComponent } from '../consumerconceptualizing/consumerconceptualizing.component';
import { ConsumerfoodforthougthComponent } from '../consumerfoodforthougth/consumerfoodforthougth.component';
import { ConsumerinformationsearchComponent } from '../consumerinformationsearch/consumerinformationsearch.component';
import { ConsumeroutlookComponent } from '../consumeroutlook/consumeroutlook.component';
import { ConsumermoduleComponent } from '../consumermodule/consumermodule.component';

@Component({
  selector: 'app-consumercaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ConsumercasecraftingComponent,
    ConsumercasetargetComponent,
    ConsumerconceptualizingComponent,
    ConsumerfoodforthougthComponent,
    ConsumerinformationsearchComponent,
    ConsumeroutlookComponent,
    ConsumermoduleComponent,
  ],
  templateUrl: './consumercaseheader.component.html',
  styleUrls: ['./consumercaseheader.component.scss']
})
export class ConsumercaseheaderComponent implements OnInit {

  constructor(private _router: Router, private _api: ApiService) { }
  getSelectTab: any
  ngOnInit(): void {
    this.getSelectTab = localStorage.getItem('selectedTab');

  }
  activeTab = 'informationsearch';
  search(activeTab: any) {
    this.activeTab = activeTab;
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
      heading: "b333",
      body: ['b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19']
    },
    {
      heading: "b8",
      body: ['b20']
    },
    {
      heading: "b9",
      body: ['b21', 'b22', 'b23', 'b32', 'b35', 'b37', 'b38', 'b48', 'b50', 'b51', 'b52', 'b54', 'b56', 'b58', 'b303',
        'b304', 'b305', 'b306', 'b307', 'b308', 'b309', 'b310', 'b311', 'b312', 'b335', 'b336'
      ]
    },
    {
      heading: "b382",
      body: ['b24', 'b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b33', 'b34', 'b36', 'b39', 'b40', 'b41', 'b42',
        'b43', 'b44', 'b45', 'b46', 'b47', 'b49', 'b53', 'b55', 'b57'
      ]
    },
    {
      heading: "b10",
      body: ['b59', 'b63', 'b64', 'b65', 'b67', 'b68', 'b69', 'b70', 'b71', 'b72', 'b73', 'b74', 'b75', 'b76', 'b77', 'b78',
        'b79', 'b80', 'b81', 'b82', 'b84', 'b85', 'b86', 'b298', 'b299', 'b300', 'b301', 'b302', 'b329'
      ]
    },
    {
      heading: "b383",
      body: ['b60', 'b61', 'b62', 'b66', 'b83', 'b344']
    },
    {
      heading: "b11",
      body: ['b87', 'b88', 'b89', 'b90', 'b91', 'b92', 'b94', 'b95', 'b96', 'b97', 'b98', 'b99', 'b100', 'b101', 'b102', 'b105',
        'b106', 'b107', 'b108', 'b109', 'b110', 'b111', 'b112', 'b113', 'b114', 'b115', 'b116', 'b117', 'b118', 'b119', 'b120', 'b121', 'b122',
        'b123', 'b124', 'b125', 'b126', 'b127', 'b128', 'b129', 'b130', 'b131', 'b132', 'b133', 'b134', 'b345',]
    },
    {
      heading: "b384",
      body: ['b93', 'b103', 'b104', 'b332']
    },
    {
      heading: "b12",
      body: ['b135', 'b136', 'b137', 'b138', 'b139', 'b140', 'b141', 'b142', 'b143', 'b144', 'b145', 'b146', 'b147', 'b148', 'b149',
        'b150', 'b151', 'b152', 'b153', 'b154', 'b155', 'b156', 'b157', 'b158', 'b159', 'b160', 'b161', 'b162', 'b164', 'b165', 'b166', 'b167',
        'b168', 'b169', 'b170', 'b175', 'b176', 'b177', 'b178', 'b179', 'b180', 'b181', 'b182', 'b183', 'b184', 'b185', 'b313', 'b314', 'b315', 'b316', 'b317',
      ]
    },
    {
      heading: "b385",
      body: ['b163', 'b171', 'b172', 'b173', 'b174', 'b186', 'b187', 'b188', 'b189',
      ]
    },
    {
      heading: "b334",
      body: ['b190', 'b191', 'b192', 'b193', 'b194', 'b195', 'b196', 'b197', 'b198', 'b199', 'b200', 'b201', 'b202', 'b203', 'b204',
        'b205', 'b206', 'b343',]
    },
    {
      heading: "b13",
      body: ['b207', 'b208', 'b209', 'b210', 'b211', 'b212', 'b213', 'b214', 'b215', 'b216', 'b217', 'b218', 'b219', 'b337', 'b338',
        'b339', 'b340', 'b341', 'b346', "b380"]
    },
    {
      heading: "b220",
      body: ['b220', 'b221', 'b222', 'b223', 'b224', 'b225', 'b226', 'b347',
      ]
    },
    {
      heading: "b386",
      body: ['b227', 'b228', 'b229', 'b230', 'b231', 'b232', 'b233', 'b234', 'b235', 'b236', 'b237', 'b238', 'b239', 'b240',
        'b241', 'b242', 'b243', 'b244', 'b245', 'b246', 'b247', 'b248', 'b249', 'b250', 'b251', 'b252',
      ]
    },
    {
      heading: "b253",
      body: ["b253", 'b254', 'b255', 'b256', 'b257', 'b258', 'b259', 'b260', 'b261', 'b262', 'b263', 'b264', 'b265', 'b266', 'b267', 'b268',
        'b269', 'b270', 'b271', 'b272', 'b273', 'b274', 'b275', 'b276', 'b277', 'b278', 'b279', 'b280', 'b281', 'b282', 'b283', 'b284', 'b285',
        'b286', 'b287', 'b288', 'b289', 'b290', 'b291', 'b292', 'b293', 'b294', 'b295', 'b296', 'b297', 'b348', 'b349', 'b350', 'b351', 'b352',
        'b353', 'b354', 'b355', 'b356', 'b357', 'b358', 'b359', 'b360', 'b361', 'b362', 'b363', 'b364', 'b365', 'b366', 'b367', 'b368', 'b369', 'b370',
        'b371', 'b372', 'b373', 'b374', 'b375', 'b376', 'b377', 'b378', 'b379',
      ]
    },
    {
      heading: "b387",
      body: ['b3', 'b4', 'b5', 'b6', 'b330', 'b331', 'b319', 'b342', 'b333', 'b334', 'b381','b388','b389','b390',
        'b391','b392','b393','b394','b395','b396','b397','b398','b399','b400','b401','b402','b403'
      ]
    }
  ]
}


