import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagementnewsynopsisComponent } from './portfoliomanagementnewsynopsis.component';

describe('PortfoliomanagementnewsynopsisComponent', () => {
  let component: PortfoliomanagementnewsynopsisComponent;
  let fixture: ComponentFixture<PortfoliomanagementnewsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomanagementnewsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomanagementnewsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
