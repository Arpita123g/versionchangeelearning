import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingreportComponent } from './capitalbudgetingreport.component';

describe('CapitalbudgetingreportComponent', () => {
  let component: CapitalbudgetingreportComponent;
  let fixture: ComponentFixture<CapitalbudgetingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
