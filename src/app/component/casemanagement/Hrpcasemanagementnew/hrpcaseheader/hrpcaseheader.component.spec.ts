import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcaseheaderComponent } from './hrpcaseheader.component';

describe('HrpcaseheaderComponent', () => {
  let component: HrpcaseheaderComponent;
  let fixture: ComponentFixture<HrpcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
