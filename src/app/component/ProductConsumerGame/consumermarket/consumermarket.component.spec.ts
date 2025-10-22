import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumermarketComponent } from './consumermarket.component';

describe('ConsumermarketComponent', () => {
  let component: ConsumermarketComponent;
  let fixture: ComponentFixture<ConsumermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumermarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
