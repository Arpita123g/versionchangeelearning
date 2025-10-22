import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliofoodforthoughtComponent } from './portfoliofoodforthought.component';

describe('PortfoliofoodforthoughtComponent', () => {
  let component: PortfoliofoodforthoughtComponent;
  let fixture: ComponentFixture<PortfoliofoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliofoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliofoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
