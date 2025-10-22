import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewmarketComponent } from './promotionsigmentnewmarket.component';

describe('PromotionsigmentnewmarketComponent', () => {
  let component: PromotionsigmentnewmarketComponent;
  let fixture: ComponentFixture<PromotionsigmentnewmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
