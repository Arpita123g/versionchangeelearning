import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpgamephase1Component } from './stpgamephase1.component';

describe('Stpgamephase1Component', () => {
  let component: Stpgamephase1Component;
  let fixture: ComponentFixture<Stpgamephase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpgamephase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpgamephase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
