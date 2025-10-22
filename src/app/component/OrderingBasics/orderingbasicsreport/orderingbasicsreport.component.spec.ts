import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsreportComponent } from './orderingbasicsreport.component';

describe('OrderingbasicsreportComponent', () => {
  let component: OrderingbasicsreportComponent;
  let fixture: ComponentFixture<OrderingbasicsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
