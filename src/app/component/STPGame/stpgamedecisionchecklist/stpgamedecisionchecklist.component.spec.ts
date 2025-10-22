import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgamedecisionchecklistComponent } from './stpgamedecisionchecklist.component';

describe('StpgamedecisionchecklistComponent', () => {
  let component: StpgamedecisionchecklistComponent;
  let fixture: ComponentFixture<StpgamedecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgamedecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgamedecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
