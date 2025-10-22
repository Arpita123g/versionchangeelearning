import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcaseanalysisandplanningComponent } from './hrpcaseanalysisandplanning.component';

describe('HrpcaseanalysisandplanningComponent', () => {
  let component: HrpcaseanalysisandplanningComponent;
  let fixture: ComponentFixture<HrpcaseanalysisandplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcaseanalysisandplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcaseanalysisandplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
