import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesfoodforthoughtComponent } from './businesfoodforthought.component';

describe('BusinesfoodforthoughtComponent', () => {
  let component: BusinesfoodforthoughtComponent;
  let fixture: ComponentFixture<BusinesfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
