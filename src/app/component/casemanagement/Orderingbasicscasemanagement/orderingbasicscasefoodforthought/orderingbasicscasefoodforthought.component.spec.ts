import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicscasefoodforthoughtComponent } from './orderingbasicscasefoodforthought.component';

describe('OrderingbasicscasefoodforthoughtComponent', () => {
  let component: OrderingbasicscasefoodforthoughtComponent;
  let fixture: ComponentFixture<OrderingbasicscasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicscasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicscasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
