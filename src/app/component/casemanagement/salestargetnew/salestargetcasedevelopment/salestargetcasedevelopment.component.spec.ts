import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcasedevelopmentComponent } from './salestargetcasedevelopment.component';

describe('SalestargetcasedevelopmentComponent', () => {
  let component: SalestargetcasedevelopmentComponent;
  let fixture: ComponentFixture<SalestargetcasedevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcasedevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcasedevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
