import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamedecisionchecklistComponent } from './crmgamedecisionchecklist.component';

describe('CrmgamedecisionchecklistComponent', () => {
  let component: CrmgamedecisionchecklistComponent;
  let fixture: ComponentFixture<CrmgamedecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamedecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamedecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
