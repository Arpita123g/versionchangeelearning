import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationCaseService {
  private simulationCasesMap: { [key: string]: string[] } = {
    "Business Basics": ["Local tea shop case"],
    "Product & Consumer": ["Gaming case", "Gaming Case Study Europe Market"],
    "Product & Consumer New": ["Gaming case", "Gaming Case Study Europe Market"],
    "Change Management Module": ["Merger & Acquisition case"],
    "Change Management Module New": ["Merger & Acquisition Indian Case","Merger & Acquisition EU Case"],
    "Logistics": ["Local 4 PL case"],
    "Financial Analysis": ["Automotive case"],
    "Promotions & Segments": ["Fmcg case"],
    "Sales & Target": ["Fmcg case"],
    "Portfolio Management": ["Brokerage firm case"],
    "Promotions & Segments New": ["FMCG India Case", "FMCG EU Case"],
    "Value Chain": ["Smartphone value case"],
    "Value Chain New": ["Mobile INR Case", "Mobile Europe Case"],
    "CVP Analysis": ["Garment manufacturing case"],
    "Accounting": ["Local paper firm case"],
    "Accounting New": ["Local Paper Firm INR Case","Local Paper Firm EU Case"],
    "Accounting Arabic": ["Local paper firm case"],
    "Pricing": ["Airlines case"],
    "Mergers & Acquisition": ["Automotive case"],
    "HRP": ["Clothing online case"],
    "HRP New": ["Clothing Case India","Clothing Case Europe"],
    "Design Thinking": ["Smartphone case"],
    "CRM": ["Technology case"],
    "Innovation": ["Go to market tech case"],
    "Ordering Basics": ["Art firm case"],
    "STP": ["Smartphone design case"],
    "Ecommerce": ["Clothing case"],
    "Capital Budgeting": ["Insurance company case"],
    "IT Management": ["Consulting case"],
    "HRM_Fintech": ["Fintech India Case"],

  };

  getCases(simulationName: string): string[] {
    return this.simulationCasesMap[simulationName] || [];
  }
}
