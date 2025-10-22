import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetdecisionchecklistComponent } from './salestargetdecisionchecklist.component';

describe('SalestargetdecisionchecklistComponent', () => {
  let component: SalestargetdecisionchecklistComponent;
  let fixture: ComponentFixture<SalestargetdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
