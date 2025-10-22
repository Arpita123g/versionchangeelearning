import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagementnewreportComponent } from './portfoliomanagementnewreport.component';

describe('PortfoliomanagementnewreportComponent', () => {
  let component: PortfoliomanagementnewreportComponent;
  let fixture: ComponentFixture<PortfoliomanagementnewreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomanagementnewreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomanagementnewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
