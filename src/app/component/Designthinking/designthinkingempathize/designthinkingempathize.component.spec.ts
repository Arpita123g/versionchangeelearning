import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingempathizeComponent } from './designthinkingempathize.component';

describe('DesignthinkingempathizeComponent', () => {
  let component: DesignthinkingempathizeComponent;
  let fixture: ComponentFixture<DesignthinkingempathizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingempathizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingempathizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
