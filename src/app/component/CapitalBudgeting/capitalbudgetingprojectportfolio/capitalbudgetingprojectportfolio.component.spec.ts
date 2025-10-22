import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingprojectportfolioComponent } from './capitalbudgetingprojectportfolio.component';

describe('CapitalbudgetingprojectportfolioComponent', () => {
  let component: CapitalbudgetingprojectportfolioComponent;
  let fixture: ComponentFixture<CapitalbudgetingprojectportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingprojectportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingprojectportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
