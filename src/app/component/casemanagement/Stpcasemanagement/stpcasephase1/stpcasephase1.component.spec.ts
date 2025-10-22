import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpcasephase1Component } from './stpcasephase1.component';

describe('Stpcasephase1Component', () => {
  let component: Stpcasephase1Component;
  let fixture: ComponentFixture<Stpcasephase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpcasephase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpcasephase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
