import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcasesupplyforecastComponent } from './hrpcasesupplyforecast.component';

describe('HrpcasesupplyforecastComponent', () => {
  let component: HrpcasesupplyforecastComponent;
  let fixture: ComponentFixture<HrpcasesupplyforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcasesupplyforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcasesupplyforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
