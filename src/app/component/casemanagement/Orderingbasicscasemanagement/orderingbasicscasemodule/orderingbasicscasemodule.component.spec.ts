import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicscasemoduleComponent } from './orderingbasicscasemodule.component';

describe('OrderingbasicscasemoduleComponent', () => {
  let component: OrderingbasicscasemoduleComponent;
  let fixture: ComponentFixture<OrderingbasicscasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicscasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicscasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
