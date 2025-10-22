import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsdecisionchecklistComponent } from './orderingbasicsdecisionchecklist.component';

describe('OrderingbasicsdecisionchecklistComponent', () => {
  let component: OrderingbasicsdecisionchecklistComponent;
  let fixture: ComponentFixture<OrderingbasicsdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
