import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseempathizeComponent } from './designthinkingcaseempathize.component';

describe('DesignthinkingcaseempathizeComponent', () => {
  let component: DesignthinkingcaseempathizeComponent;
  let fixture: ComponentFixture<DesignthinkingcaseempathizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseempathizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseempathizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
