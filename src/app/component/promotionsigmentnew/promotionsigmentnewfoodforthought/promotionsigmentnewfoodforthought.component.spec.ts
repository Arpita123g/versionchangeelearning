import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewfoodforthoughtComponent } from './promotionsigmentnewfoodforthought.component';

describe('PromotionsigmentnewfoodforthoughtComponent', () => {
  let component: PromotionsigmentnewfoodforthoughtComponent;
  let fixture: ComponentFixture<PromotionsigmentnewfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
