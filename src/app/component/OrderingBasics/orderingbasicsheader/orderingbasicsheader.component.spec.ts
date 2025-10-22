import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicsheaderComponent } from './orderingbasicsheader.component';

describe('OrderingbasicsheaderComponent', () => {
  let component: OrderingbasicsheaderComponent;
  let fixture: ComponentFixture<OrderingbasicsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
