import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcasedemandforecastComponent } from './hrpcasedemandforecast.component';

describe('HrpcasedemandforecastComponent', () => {
  let component: HrpcasedemandforecastComponent;
  let fixture: ComponentFixture<HrpcasedemandforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcasedemandforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcasedemandforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
