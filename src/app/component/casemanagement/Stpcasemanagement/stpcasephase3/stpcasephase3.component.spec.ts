import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpcasephase3Component } from './stpcasephase3.component';

describe('Stpcasephase3Component', () => {
  let component: Stpcasephase3Component;
  let fixture: ComponentFixture<Stpcasephase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpcasephase3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpcasephase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
