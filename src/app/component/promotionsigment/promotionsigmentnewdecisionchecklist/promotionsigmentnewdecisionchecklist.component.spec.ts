import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewdecisionchecklistComponent } from './promotionsigmentnewdecisionchecklist.component';

describe('PromotionsigmentnewdecisionchecklistComponent', () => {
  let component: PromotionsigmentnewdecisionchecklistComponent;
  let fixture: ComponentFixture<PromotionsigmentnewdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
