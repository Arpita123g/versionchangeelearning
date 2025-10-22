import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewsynopsisComponent } from './promotionsigmentnewsynopsis.component';

describe('PromotionsigmentnewsynopsisComponent', () => {
  let component: PromotionsigmentnewsynopsisComponent;
  let fixture: ComponentFixture<PromotionsigmentnewsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
