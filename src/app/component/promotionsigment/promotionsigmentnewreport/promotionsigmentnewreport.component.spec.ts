import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewreportComponent } from './promotionsigmentnewreport.component';

describe('PromotionsigmentnewreportComponent', () => {
  let component: PromotionsigmentnewreportComponent;
  let fixture: ComponentFixture<PromotionsigmentnewreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
