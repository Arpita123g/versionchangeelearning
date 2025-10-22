import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercedecisionchecklistComponent } from './ecommercedecisionchecklist.component';

describe('EcommercedecisionchecklistComponent', () => {
  let component: EcommercedecisionchecklistComponent;
  let fixture: ComponentFixture<EcommercedecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercedecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercedecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
