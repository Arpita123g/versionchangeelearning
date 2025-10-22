import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagementnewheaderComponent } from './portfoliomanagementnewheader.component';

describe('PortfoliomanagementnewheaderComponent', () => {
  let component: PortfoliomanagementnewheaderComponent;
  let fixture: ComponentFixture<PortfoliomanagementnewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomanagementnewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomanagementnewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
