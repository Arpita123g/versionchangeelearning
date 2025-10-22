import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasehumandynamicsComponent } from './changemanagementcasehumandynamics.component';

describe('ChangemanagementcasehumandynamicsComponent', () => {
  let component: ChangemanagementcasehumandynamicsComponent;
  let fixture: ComponentFixture<ChangemanagementcasehumandynamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasehumandynamicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasehumandynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
