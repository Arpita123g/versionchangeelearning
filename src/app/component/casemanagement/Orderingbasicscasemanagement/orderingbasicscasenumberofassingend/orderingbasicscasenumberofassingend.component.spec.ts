import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingbasicscasenumberofassingendComponent } from './orderingbasicscasenumberofassingend.component';

describe('OrderingbasicscasenumberofassingendComponent', () => {
  let component: OrderingbasicscasenumberofassingendComponent;
  let fixture: ComponentFixture<OrderingbasicscasenumberofassingendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingbasicscasenumberofassingendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingbasicscasenumberofassingendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
