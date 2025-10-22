import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingmarketComponent } from './capitalbudgetingmarket.component';

describe('CapitalbudgetingmarketComponent', () => {
  let component: CapitalbudgetingmarketComponent;
  let fixture: ComponentFixture<CapitalbudgetingmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
