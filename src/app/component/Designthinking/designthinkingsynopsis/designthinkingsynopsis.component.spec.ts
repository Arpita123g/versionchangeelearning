import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingsynopsisComponent } from './designthinkingsynopsis.component';

describe('DesignthinkingsynopsisComponent', () => {
  let component: DesignthinkingsynopsisComponent;
  let fixture: ComponentFixture<DesignthinkingsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
