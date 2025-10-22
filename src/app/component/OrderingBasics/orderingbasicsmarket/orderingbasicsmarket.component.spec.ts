import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsmarketComponent } from './orderingbasicsmarket.component';

describe('OrderingbasicsmarketComponent', () => {
  let component: OrderingbasicsmarketComponent;
  let fixture: ComponentFixture<OrderingbasicsmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
