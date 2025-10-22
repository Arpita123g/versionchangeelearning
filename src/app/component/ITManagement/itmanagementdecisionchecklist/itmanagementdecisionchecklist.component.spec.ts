import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementdecisionchecklistComponent } from './itmanagementdecisionchecklist.component';

describe('ItmanagementdecisionchecklistComponent', () => {
  let component: ItmanagementdecisionchecklistComponent;
  let fixture: ComponentFixture<ItmanagementdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
