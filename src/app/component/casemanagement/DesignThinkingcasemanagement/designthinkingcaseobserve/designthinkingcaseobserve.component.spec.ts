import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseobserveComponent } from './designthinkingcaseobserve.component';

describe('DesignthinkingcaseobserveComponent', () => {
  let component: DesignthinkingcaseobserveComponent;
  let fixture: ComponentFixture<DesignthinkingcaseobserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseobserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseobserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
