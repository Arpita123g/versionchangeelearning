import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationdecisionchecklistComponent } from './innovationdecisionchecklist.component';

describe('InnovationdecisionchecklistComponent', () => {
  let component: InnovationdecisionchecklistComponent;
  let fixture: ComponentFixture<InnovationdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
