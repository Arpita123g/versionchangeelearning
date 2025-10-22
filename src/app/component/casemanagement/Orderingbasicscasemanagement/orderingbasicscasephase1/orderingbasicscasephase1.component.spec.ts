import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicscasephase1Component } from './orderingbasicscasephase1.component';

describe('Orderingbasicscasephase1Component', () => {
  let component: Orderingbasicscasephase1Component;
  let fixture: ComponentFixture<Orderingbasicscasephase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicscasephase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicscasephase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
