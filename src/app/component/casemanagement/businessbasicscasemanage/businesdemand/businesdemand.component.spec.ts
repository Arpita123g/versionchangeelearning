import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesdemandComponent } from './businesdemand.component';

describe('BusinesdemandComponent', () => {
  let component: BusinesdemandComponent;
  let fixture: ComponentFixture<BusinesdemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesdemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
