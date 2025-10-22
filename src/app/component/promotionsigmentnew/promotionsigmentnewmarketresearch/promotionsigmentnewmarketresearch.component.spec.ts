import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewmarketresearchComponent } from './promotionsigmentnewmarketresearch.component';

describe('PromotionsigmentnewmarketresearchComponent', () => {
  let component: PromotionsigmentnewmarketresearchComponent;
  let fixture: ComponentFixture<PromotionsigmentnewmarketresearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewmarketresearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewmarketresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
