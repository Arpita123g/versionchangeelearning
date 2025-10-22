import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcasemoduleComponent } from './salestargetcasemodule.component';

describe('SalestargetcasemoduleComponent', () => {
  let component: SalestargetcasemoduleComponent;
  let fixture: ComponentFixture<SalestargetcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
