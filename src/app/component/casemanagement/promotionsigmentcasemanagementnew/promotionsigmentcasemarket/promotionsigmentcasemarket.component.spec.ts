import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasemarketComponent } from './promotionsigmentcasemarket.component';

describe('PromotionsigmentcasemarketComponent', () => {
  let component: PromotionsigmentcasemarketComponent;
  let fixture: ComponentFixture<PromotionsigmentcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
