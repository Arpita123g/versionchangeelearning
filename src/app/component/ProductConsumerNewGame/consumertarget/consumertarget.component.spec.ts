import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumertargetComponent } from './consumertarget.component';

describe('ConsumertargetComponent', () => {
  let component: ConsumertargetComponent;
  let fixture: ComponentFixture<ConsumertargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumertargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumertargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
