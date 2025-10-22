import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-voicebaseddashboardstructure',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './voicebaseddashboardstructure.component.html',
  styleUrls: ['./voicebaseddashboardstructure.component.scss']
})
export class VoicebaseddashboardstructureComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name', 'email', 'Password', 'realtimeview', 'currentround','Logs'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any =[];
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(
    private _api : ApiService,
    private _global: GlobalService,

  ) {
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
   }
  

  ngOnInit(): void {
    this.getfetchdata("all",this.instructorcarddetails.coursecode);
  }
 
 
  
  getfetchdata(searchtype:String,searchcontent:String) {

    if (searchtype == "all"){
      searchtype = "coursename"
    }
   
    this._api.getStudentDetails(searchtype,searchcontent).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          // this.isData=true;
          this.ELEMENT_DATA = data.resultList;

          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          if (this.paginator) this.dataSource.paginator = this.paginator;
          // this.checkloading = false;
        } else {
          // this.checkloading = false;
          // this._alert.error(data.message)
        }
      },
      (error: any) => {
        // this.checkloading = false;
        // this._alert.error('something went wrong');
      }
    );
  }

  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
  }
}
export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  email:string;
}