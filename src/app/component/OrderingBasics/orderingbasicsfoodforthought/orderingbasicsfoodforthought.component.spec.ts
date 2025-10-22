import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsfoodforthoughtComponent } from './orderingbasicsfoodforthought.component';

describe('OrderingbasicsfoodforthoughtComponent', () => {
  let component: OrderingbasicsfoodforthoughtComponent;
  let fixture: ComponentFixture<OrderingbasicsfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
