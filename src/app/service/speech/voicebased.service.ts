import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoicebasedService {
  public tabState = new BehaviorSubject<number>(0); // Default to the first tab
  currentTabState = this.tabState.asObservable();

  public Istermandconditionaccepted = new BehaviorSubject<boolean>(false);
  termandconditionacceptedState = this.Istermandconditionaccepted.asObservable();

  private lockState = new BehaviorSubject<boolean>(false);
  currentLockState = this.lockState.asObservable();

  private timeFinishlockState = new BehaviorSubject<boolean>(false);
  timeorattemptfinishLockState = this.timeFinishlockState.asObservable();

  private interviewcompleteState = new BehaviorSubject<boolean>(false);
  interviewcompleteperAttemptState = this.interviewcompleteState.asObservable();

  // private tabState = new BehaviorSubject<number>(0);
  public tabData = new BehaviorSubject<any>(null);

  constructor() { }

  // changeTabState(tabIndex: number) {
  //   this.tabState.next(tabIndex);
  // }


  changeTabState(tabIndex: number, data?: any): void {
    this.tabState.next(tabIndex);
    if (data !== undefined) {
      this.tabData.next(data);
    }
  }

   // Update only data
   updateTabData(data: any): void {
    this.tabData.next(data);
  }

  updateDataProperties(updates: Partial<any>): void {
    const currentData = this.tabData.value;
    if (currentData) {
      const updatedData = { ...currentData, ...updates };
      this.tabData.next(updatedData);
    } else {
      this.tabData.next(updates);
    }
  }

  getTabState(): Observable<number> {
    return this.tabState.asObservable();
  }

  getTabData(): Observable<any> {
    return this.tabData.asObservable();
  }
  istermandconditionchangeState(acceptedvalue: boolean) {
    this.Istermandconditionaccepted.next(acceptedvalue);
  }
  changeLockState(state: boolean) {
    this.lockState.next(state);
  }

  timeorAttemptLockState(state: boolean) {
    this.timeFinishlockState.next(state);
  }

  interviewCompleteState(state: boolean) {
    this.interviewcompleteState.next(state);
  }
}