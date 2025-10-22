import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicssynopsisComponent } from './orderingbasicssynopsis.component';

describe('OrderingbasicssynopsisComponent', () => {
  let component: OrderingbasicssynopsisComponent;
  let fixture: ComponentFixture<OrderingbasicssynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicssynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicssynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
