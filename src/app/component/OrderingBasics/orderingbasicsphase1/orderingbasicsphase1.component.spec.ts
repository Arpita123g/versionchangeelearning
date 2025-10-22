import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicsphase1Component } from './orderingbasicsphase1.component';

describe('Orderingbasicsphase1Component', () => {
  let component: Orderingbasicsphase1Component;
  let fixture: ComponentFixture<Orderingbasicsphase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicsphase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicsphase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
