import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliointroductionComponent } from './portfoliointroduction.component';

describe('PortfoliointroductionComponent', () => {
  let component: PortfoliointroductionComponent;
  let fixture: ComponentFixture<PortfoliointroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliointroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliointroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
