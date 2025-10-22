import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingobserveComponent } from './designthinkingobserve.component';

describe('DesignthinkingobserveComponent', () => {
  let component: DesignthinkingobserveComponent;
  let fixture: ComponentFixture<DesignthinkingobserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingobserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingobserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
