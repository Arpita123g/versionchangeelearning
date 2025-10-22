import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomoduleComponent } from './portfoliomodule.component';

describe('PortfoliomoduleComponent', () => {
  let component: PortfoliomoduleComponent;
  let fixture: ComponentFixture<PortfoliomoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
