import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsintroductionComponent } from './orderingbasicsintroduction.component';

describe('OrderingbasicsintroductionComponent', () => {
  let component: OrderingbasicsintroductionComponent;
  let fixture: ComponentFixture<OrderingbasicsintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
