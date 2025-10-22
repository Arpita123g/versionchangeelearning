import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumercaseheaderComponent } from './consumercaseheader.component';

describe('ConsumercaseheaderComponent', () => {
  let component: ConsumercaseheaderComponent;
  let fixture: ComponentFixture<ConsumercaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumercaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumercaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
