import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcasemarketComponent } from './hrpcasemarket.component';

describe('HrpcasemarketComponent', () => {
  let component: HrpcasemarketComponent;
  let fixture: ComponentFixture<HrpcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
