import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewdecisionchecklistComponent } from './changemanagementnewdecisionchecklist.component';

describe('ChangemanagementnewdecisionchecklistComponent', () => {
  let component: ChangemanagementnewdecisionchecklistComponent;
  let fixture: ComponentFixture<ChangemanagementnewdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
