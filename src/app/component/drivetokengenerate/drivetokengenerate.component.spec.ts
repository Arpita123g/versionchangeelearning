import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivetokengenerateComponent } from './drivetokengenerate.component';

describe('DrivetokengenerateComponent', () => {
  let component: DrivetokengenerateComponent;
  let fixture: ComponentFixture<DrivetokengenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivetokengenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivetokengenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
