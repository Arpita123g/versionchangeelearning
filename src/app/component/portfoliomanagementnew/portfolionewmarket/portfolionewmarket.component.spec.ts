import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolionewmarketComponent } from './portfolionewmarket.component';

describe('PortfolionewmarketComponent', () => {
  let component: PortfolionewmarketComponent;
  let fixture: ComponentFixture<PortfolionewmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolionewmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolionewmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
