import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpcasephase2Component } from './stpcasephase2.component';

describe('Stpcasephase2Component', () => {
  let component: Stpcasephase2Component;
  let fixture: ComponentFixture<Stpcasephase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpcasephase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpcasephase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
