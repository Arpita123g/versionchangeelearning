import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcaseimplementationComponent } from './hrpcaseimplementation.component';

describe('HrpcaseimplementationComponent', () => {
  let component: HrpcaseimplementationComponent;
  let fixture: ComponentFixture<HrpcaseimplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcaseimplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcaseimplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
