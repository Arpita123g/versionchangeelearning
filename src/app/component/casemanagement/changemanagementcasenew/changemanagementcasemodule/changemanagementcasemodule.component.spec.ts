import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasemoduleComponent } from './changemanagementcasemodule.component';

describe('ChangemanagementcasemoduleComponent', () => {
  let component: ChangemanagementcasemoduleComponent;
  let fixture: ComponentFixture<ChangemanagementcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
