import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainproductionComponent } from './valuechainproduction.component';

describe('ValuechainproductionComponent', () => {
  let component: ValuechainproductionComponent;
  let fixture: ComponentFixture<ValuechainproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
