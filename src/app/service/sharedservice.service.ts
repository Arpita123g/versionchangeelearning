import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private bodyContentSource = new BehaviorSubject<any>({});
  bodyContent$ = this.bodyContentSource.asObservable();

  private enteredgame = new BehaviorSubject<string>('');
  gameenter$ = this.enteredgame.asObservable();

  private usermode = new BehaviorSubject<string>('');
  usertype$ = this.usermode.asObservable();

  private nameofgame = new BehaviorSubject<string>('');
  gamename$ = this.nameofgame.asObservable();

  // Signal to ask pages to refresh the current body content from backend
  private refreshBodyContentSource = new Subject<void>();
  refreshBodyContent$ = this.refreshBodyContentSource.asObservable();

  private currentTimeSubject = new BehaviorSubject<string>(this.getCurrentTime());
  currentTime$ = this.currentTimeSubject.asObservable();

  private tabEnabledSubject = new BehaviorSubject<boolean>(true);
  tabEnabled$ = this.tabEnabledSubject.asObservable();

  private phase2tabEnabledSubject = new BehaviorSubject<boolean>(true);
  phase2tabEnabled$ = this.phase2tabEnabledSubject.asObservable();

  private phase3tabEnabledSubject = new BehaviorSubject<boolean>(true);
  phase3tabEnabled$ = this.phase3tabEnabledSubject.asObservable();

  //  for ordering..
  private orderingphase2tabEnabledSubject = new BehaviorSubject<boolean>(true);
  orderingphase2tabEnabled$ = this.orderingphase2tabEnabledSubject.asObservable();

  ////////////////////////
  private selectedLanguageSource = new BehaviorSubject<string>('english');
  private attemptSource = new BehaviorSubject<string>('1');

  selectedLanguage$ = this.selectedLanguageSource.asObservable();
  attempt$ = this.attemptSource.asObservable();

  setSelectedLanguage(lang: string) {
    this.selectedLanguageSource.next(lang);
  }

  getSelectedLanguage() {
    return this.selectedLanguageSource.value;
  }

  setAttempt(attempt: string) {
    this.attemptSource.next(attempt);
  }

  getCurrentLanguage(): string {
    return this.selectedLanguageSource.getValue();
  }

  getCurrentAttempt(): string {
    return this.attemptSource.getValue();
  }
  /////////////////////////////

  enableTab(): void {
    this.tabEnabledSubject.next(false);
  }
  disableTab(): void {
    this.tabEnabledSubject.next(true);
  }
  phase2disableTab(): void {
    this.phase2tabEnabledSubject.next(true);
  }

  phase3disableTab(): void {
    this.phase3tabEnabledSubject.next(true);
  }

  phase2enableTab(): void {
    this.phase2tabEnabledSubject.next(false);
  }
  phase3enableTab(): void {
    this.phase3tabEnabledSubject.next(false);
  }

  // ordering
  orderingphase2disableTab(): void {
    this.orderingphase2tabEnabledSubject.next(true);
  }


  constructor() {

    // Update the time every second
    setInterval(() => {
      this.currentTimeSubject.next(this.getCurrentTime());
    }, 1000);
  }

  updateBodyContent(content: any) {
    this.bodyContentSource.next(content);
  }

  requestBodyContentRefresh(): void {
    this.refreshBodyContentSource.next();
  }

  enterInGame(content: any) {
    this.enteredgame.next(content);
  }

  userTypeSet(content: string) {
    this.usermode.next(content);
  }

  gameNameSet(content: string) {
    this.nameofgame.next(content);
  }

  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // // 🔴 Global kill switch (emit once to end ALL subscriptions that use it)
  // private _cancelAll$ = new Subject<void>();
  // /** Subscribe with: .pipe(takeUntil(this.shared.cancelAll$)) */
  // cancelAll$ = this._cancelAll$.asObservable();

  // cancelAllSubscriptions(): void {
  //   this._cancelAll$.next();      // end all current subscriptions
  //   this._cancelAll$.complete();  // complete the subject

  //   // re-create for the next time you enter the page
  //   this._cancelAll$ = new Subject<void>();
  //   this.cancelAll$ = this._cancelAll$.asObservable();
  // }
}
