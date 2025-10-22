import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewintroductionComponent } from './promotionsigmentnewintroduction.component';

describe('PromotionsigmentnewintroductionComponent', () => {
  let component: PromotionsigmentnewintroductionComponent;
  let fixture: ComponentFixture<PromotionsigmentnewintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
