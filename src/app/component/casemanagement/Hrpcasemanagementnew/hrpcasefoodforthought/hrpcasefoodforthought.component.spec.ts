import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpcasefoodforthoughtComponent } from './hrpcasefoodforthought.component';

describe('HrpcasefoodforthoughtComponent', () => {
  let component: HrpcasefoodforthoughtComponent;
  let fixture: ComponentFixture<HrpcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
