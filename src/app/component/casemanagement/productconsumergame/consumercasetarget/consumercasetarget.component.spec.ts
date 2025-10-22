import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumercasetargetComponent } from './consumercasetarget.component';

describe('ConsumercasetargetComponent', () => {
  let component: ConsumercasetargetComponent;
  let fixture: ComponentFixture<ConsumercasetargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumercasetargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumercasetargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
