import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainfinanceComponent } from './valuechainfinance.component';

describe('ValuechainfinanceComponent', () => {
  let component: ValuechainfinanceComponent;
  let fixture: ComponentFixture<ValuechainfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainfinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
