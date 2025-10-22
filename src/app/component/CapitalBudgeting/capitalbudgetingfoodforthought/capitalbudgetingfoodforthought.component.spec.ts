import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingfoodforthoughtComponent } from './capitalbudgetingfoodforthought.component';

describe('CapitalbudgetingfoodforthoughtComponent', () => {
  let component: CapitalbudgetingfoodforthoughtComponent;
  let fixture: ComponentFixture<CapitalbudgetingfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
