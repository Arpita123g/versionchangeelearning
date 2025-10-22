import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcasemarketoutlookComponent } from './salestargetcasemarketoutlook.component';

describe('SalestargetcasemarketoutlookComponent', () => {
  let component: SalestargetcasemarketoutlookComponent;
  let fixture: ComponentFixture<SalestargetcasemarketoutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcasemarketoutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcasemarketoutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
