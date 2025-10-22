import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicscasemarketComponent } from './orderingbasicscasemarket.component';

describe('OrderingbasicscasemarketComponent', () => {
  let component: OrderingbasicscasemarketComponent;
  let fixture: ComponentFixture<OrderingbasicscasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicscasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicscasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
