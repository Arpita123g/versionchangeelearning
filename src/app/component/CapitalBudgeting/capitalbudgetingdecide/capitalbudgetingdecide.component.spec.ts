import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingdecideComponent } from './capitalbudgetingdecide.component';

describe('CapitalbudgetingdecideComponent', () => {
  let component: CapitalbudgetingdecideComponent;
  let fixture: ComponentFixture<CapitalbudgetingdecideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingdecideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingdecideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
