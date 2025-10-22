import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingheaderComponent } from './capitalbudgetingheader.component';

describe('CapitalbudgetingheaderComponent', () => {
  let component: CapitalbudgetingheaderComponent;
  let fixture: ComponentFixture<CapitalbudgetingheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
