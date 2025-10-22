import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpcasemoduleComponent } from './stpcasemodule.component';

describe('StpcasemoduleComponent', () => {
  let component: StpcasemoduleComponent;
  let fixture: ComponentFixture<StpcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
