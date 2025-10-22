import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcasecompositionComponent } from './salestargetcasecomposition.component';

describe('SalestargetcasecompositionComponent', () => {
  let component: SalestargetcasecompositionComponent;
  let fixture: ComponentFixture<SalestargetcasecompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcasecompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcasecompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
