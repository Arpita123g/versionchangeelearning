import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingsynopsisComponent } from './capitalbudgetingsynopsis.component';

describe('CapitalbudgetingsynopsisComponent', () => {
  let component: CapitalbudgetingsynopsisComponent;
  let fixture: ComponentFixture<CapitalbudgetingsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
