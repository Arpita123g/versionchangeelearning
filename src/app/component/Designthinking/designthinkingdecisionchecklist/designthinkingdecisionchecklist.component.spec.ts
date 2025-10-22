import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingdecisionchecklistComponent } from './designthinkingdecisionchecklist.component';

describe('DesignthinkingdecisionchecklistComponent', () => {
  let component: DesignthinkingdecisionchecklistComponent;
  let fixture: ComponentFixture<DesignthinkingdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
