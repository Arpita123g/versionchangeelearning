import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesinvestmentComponent } from './businesinvestment.component';

describe('BusinesinvestmentComponent', () => {
  let component: BusinesinvestmentComponent;
  let fixture: ComponentFixture<BusinesinvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesinvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
