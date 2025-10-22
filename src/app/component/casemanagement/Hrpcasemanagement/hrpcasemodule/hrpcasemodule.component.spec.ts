import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcasemoduleComponent } from './hrpcasemodule.component';

describe('HrpcasemoduleComponent', () => {
  let component: HrpcasemoduleComponent;
  let fixture: ComponentFixture<HrpcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
