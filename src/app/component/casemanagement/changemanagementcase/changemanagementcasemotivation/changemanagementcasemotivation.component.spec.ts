import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasemotivationComponent } from './changemanagementcasemotivation.component';

describe('ChangemanagementcasemotivationComponent', () => {
  let component: ChangemanagementcasemotivationComponent;
  let fixture: ComponentFixture<ChangemanagementcasemotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasemotivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasemotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
