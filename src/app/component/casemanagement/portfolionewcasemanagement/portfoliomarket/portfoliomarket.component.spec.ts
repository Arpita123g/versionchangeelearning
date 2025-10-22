import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomarketComponent } from './portfoliomarket.component';

describe('PortfoliomarketComponent', () => {
  let component: PortfoliomarketComponent;
  let fixture: ComponentFixture<PortfoliomarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
