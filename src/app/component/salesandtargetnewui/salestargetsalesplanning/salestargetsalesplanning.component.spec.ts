import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetsalesplanningComponent } from './salestargetsalesplanning.component';

describe('SalestargetsalesplanningComponent', () => {
  let component: SalestargetsalesplanningComponent;
  let fixture: ComponentFixture<SalestargetsalesplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetsalesplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetsalesplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
