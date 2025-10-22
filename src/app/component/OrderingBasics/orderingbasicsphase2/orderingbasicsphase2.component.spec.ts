import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicsphase2Component } from './orderingbasicsphase2.component';

describe('Orderingbasicsphase2Component', () => {
  let component: Orderingbasicsphase2Component;
  let fixture: ComponentFixture<Orderingbasicsphase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicsphase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicsphase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
