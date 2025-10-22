import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {
  

  constructor(
    private http:HttpClient,
  ) { }
 public getCooker(): Observable<any> {
  const sheetno="o6isq5z"
       const sheetid = "1FPb5dEzfsMyHit5E0wsLDJ5luIrvo8HSZdQhms0ytew"
       const url = 
  'https://docs.google.com/spreadsheets/d/1FPb5dEzfsMyHit5E0wsLDJ5luIrvo8HSZdQhms0ytew/edit#gid=0';
      
          return this.http.get(url)
            .pipe(
              map((res: any) => {
                const data = res.feed.entry;
      
                const returnArray: Array<any> = [];
                if (data && data.length > 0) {
                  // data.forEach(entry => {
                  //   const obj = {};
                  //   for (const x in entry) {
                  //     if (x.includes('gsx$') && entry[x].$t) {
                  //       obj[x.split('$')[1]] = entry[x]['$t'];
                  //     }
                  //   }
                  //   returnArray.push(obj);
                  // });
                }
                return returnArray;
              })
            );
        }
 
}
