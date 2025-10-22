import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpgamephase2Component } from './stpgamephase2.component';

describe('Stpgamephase2Component', () => {
  let component: Stpgamephase2Component;
  let fixture: ComponentFixture<Stpgamephase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpgamephase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpgamephase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
