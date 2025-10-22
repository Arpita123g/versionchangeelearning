import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolionewdecisionchecklistComponent } from './portfolionewdecisionchecklist.component';

describe('PortfolionewdecisionchecklistComponent', () => {
  let component: PortfolionewdecisionchecklistComponent;
  let fixture: ComponentFixture<PortfolionewdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolionewdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolionewdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
