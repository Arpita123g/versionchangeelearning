import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasemoduleComponent } from './promotionsigmentcasemodule.component';

describe('PromotionsigmentcasemoduleComponent', () => {
  let component: PromotionsigmentcasemoduleComponent;
  let fixture: ComponentFixture<PromotionsigmentcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
