import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicscasephase2Component } from './orderingbasicscasephase2.component';

describe('Orderingbasicscasephase2Component', () => {
  let component: Orderingbasicscasephase2Component;
  let fixture: ComponentFixture<Orderingbasicscasephase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicscasephase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicscasephase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
