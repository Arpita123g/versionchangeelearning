import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stpgamephase3Component } from './stpgamephase3.component';

describe('Stpgamephase3Component', () => {
  let component: Stpgamephase3Component;
  let fixture: ComponentFixture<Stpgamephase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stpgamephase3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stpgamephase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
