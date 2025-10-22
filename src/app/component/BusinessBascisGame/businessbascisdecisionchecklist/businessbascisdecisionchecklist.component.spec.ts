import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisdecisionchecklistComponent } from './businessbascisdecisionchecklist.component';

describe('BusinessbascisdecisionchecklistComponent', () => {
  let component: BusinessbascisdecisionchecklistComponent;
  let fixture: ComponentFixture<BusinessbascisdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
