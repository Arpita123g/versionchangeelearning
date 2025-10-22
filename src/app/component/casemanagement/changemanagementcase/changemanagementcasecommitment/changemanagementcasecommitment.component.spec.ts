import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasecommitmentComponent } from './changemanagementcasecommitment.component';

describe('ChangemanagementcasecommitmentComponent', () => {
  let component: ChangemanagementcasecommitmentComponent;
  let fixture: ComponentFixture<ChangemanagementcasecommitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasecommitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasecommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
