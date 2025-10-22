import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicscaseheaderComponent } from './orderingbasicscaseheader.component';

describe('OrderingbasicscaseheaderComponent', () => {
  let component: OrderingbasicscaseheaderComponent;
  let fixture: ComponentFixture<OrderingbasicscaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicscaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicscaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
