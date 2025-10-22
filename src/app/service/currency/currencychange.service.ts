import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencychangeService {

  constructor() { }

  replaceINRtoAnotherCurrency(text: string,currency:string): string {
    return text.replace(/INR/g, currency);
  }
}
