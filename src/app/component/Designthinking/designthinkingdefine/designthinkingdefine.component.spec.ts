import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingdefineComponent } from './designthinkingdefine.component';

describe('DesignthinkingdefineComponent', () => {
  let component: DesignthinkingdefineComponent;
  let fixture: ComponentFixture<DesignthinkingdefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingdefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingdefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
