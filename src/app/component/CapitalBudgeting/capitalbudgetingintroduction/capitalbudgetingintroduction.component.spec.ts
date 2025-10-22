import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingintroductionComponent } from './capitalbudgetingintroduction.component';

describe('CapitalbudgetingintroductionComponent', () => {
  let component: CapitalbudgetingintroductionComponent;
  let fixture: ComponentFixture<CapitalbudgetingintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
