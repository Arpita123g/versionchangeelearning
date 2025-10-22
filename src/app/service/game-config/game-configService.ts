// import { Injectable } from '@angular/core';
// import { Observable, map } from 'rxjs';
// // import { ApiService } from './api.service'; // adjust path
// import { gameConfig } from '../game-config/game-configforToolbar'
// import { ApiService } from '../backendgameapi/api.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class GameConfigService {
//     constructor(private _api: ApiService) { }

//     getLanguageData(
//         gamename: string,
//         attempt: string,
//         language: string,
//         courseId: string
//     ): Observable<{ headingarray?: string[], commonData?: any, readingarray?: string[], type: string }> {

//         const config = gameConfig[gamename];
//         if (!config) {
//             return new Observable(observer => {
//                 observer.next({ headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' });
//                 observer.complete();
//             });
//         }

//         return this._api.fetchLanguageDataForToolbar(
//             config.api,
//             attempt,
//             language.toLowerCase(),
//             courseId
//         ).pipe(
//             map((data: any) => {
//                 if (data.status !== "Success" || !data.resultList) {
//                     return { headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' };
//                 }

//                 const lmData = data.resultList?.[0]?.[config.lmKey];
//                 if (!lmData) {
//                     return { headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' };
//                 }

//                 // if (config.type === "heading") {
//                 //     const languageSelect = lmData[language.toLowerCase()];
//                 //     const headingarray = config.headingKeys.map((key: string) => languageSelect[key]);
//                 //     return { headingarray, type: 'heading' };
//                 // }
//                 // else if (config.type === "common") {
//                 //     const commonData = lmData?.[`${config.commonPrefix}${language.toLowerCase()}`] || {};
//                 //     return { commonData, type: 'common' };
//                 // }
//                 if (config.type === "heading") {
//                     const languageSelect = lmData[language.toLowerCase()];

//                     const headingarray = config.headingKeys?.map((key: string) => languageSelect[key]) || [];
//                     const gameHeadings = config.gameheadingKeys?.map((key: string) => languageSelect[key]) || [];
//                     const readingarray = config.readingkeys?.map((key: string) => languageSelect[key]) || [];
                    
//                     return { headingarray, gameHeadings,readingarray, type: 'heading' };
//                 }

//                 else if (config.type === "common") {
//                     const languageSelect = lmData[language.toLowerCase()];
//                     const gameHeadings = config.gameheadingKeys?.map((key: string) => languageSelect[key]) || [];
//                     const commonData = lmData?.[`${config.commonPrefix}${language.toLowerCase()}`] || {};
//                     const readingarray = config.readingkeys?.map((k: string) => commonData[k]) || [];
//                     return { gameHeadings, commonData,readingarray, type: 'common' };
//                 }


//                 return {
//                     headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"],
//                     type: 'default'
//                 };
//             })
//         );
//     }
// }




//////////////////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ApiService } from './api.service'; // adjust path
import { gameConfig } from '../game-config/game-configforToolbar'
import { ApiService } from '../backendgameapi/api.service';

const gameNameMapping: Record<string, string> = {
  consumerbehaviournew: "Product & Consumer New",
  promotionsnew: "Promotions & Segments New",
  valuechainnew: "Value Chain New",
  hrplanningnew: "HRP New"
};

@Injectable({
  providedIn: 'root'
})
export class GameConfigService {
  constructor(private _api: ApiService) { }

  getLanguageData(
    gamename: string,
    attempt: string,
    language: string,
    courseId: string
  ): Observable<{ headingarray?: string[], gameHeadings?: string[], readingarray?: string[], commonData?: any, type: string }> {

    // ✅ Normalize gamename with mapping
    const mappedKey = gameNameMapping[gamename.toLowerCase()];
    const config = gameConfig[mappedKey];

    if (!config) {
      return new Observable(observer => {
        observer.next({ headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' });
        observer.complete();
      });
    }

    return this._api.fetchLanguageDataForToolbar(
      config.api,
      attempt,
      language.toLowerCase(),
      courseId
    ).pipe(
      map((data: any) => {
        if (data.status !== "Success" || !data.resultList) {
          return { headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' };
        }

        const lmData = data.resultList?.[0]?.[config.lmKey];
        if (!lmData) {
          return { headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' };
        }

        if (config.type === "heading") {
          const languageSelect = lmData[language.toLowerCase()];

          const headingarray = config.headingKeys?.map((k: string) => languageSelect[k]) || [];
          const gameHeadings = config.gameheadingKeys?.map((k: string) => languageSelect[k]) || [];
          const readingarray = config.readingkeys?.map((k: string) => languageSelect[k]) || [];

          return { headingarray, gameHeadings, readingarray, type: 'heading' };
        }

        if (config.type === "common") {
          const languageSelect = lmData[language.toLowerCase()];
          const gameHeadings = config.gameheadingKeys?.map((k: string) => languageSelect[k]) || [];
          const commonData = lmData?.[`${config.commonPrefix}${language.toLowerCase()}`] || {};
          const readingarray = config.readingkeys?.map((k: string) => commonData[k]) || [];

          return { gameHeadings, commonData, readingarray, type: 'common' };
        }

        return { headingarray: ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"], type: 'default' };
      })
    );
  }
}
