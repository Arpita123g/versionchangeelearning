import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcasedefineComponent } from './designthinkingcasedefine.component';

describe('DesignthinkingcasedefineComponent', () => {
  let component: DesignthinkingcasedefineComponent;
  let fixture: ComponentFixture<DesignthinkingcasedefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcasedefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcasedefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
