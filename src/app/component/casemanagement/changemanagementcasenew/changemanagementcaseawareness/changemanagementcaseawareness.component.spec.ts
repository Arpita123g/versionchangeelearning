import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcaseawarenessComponent } from './changemanagementcaseawareness.component';

describe('ChangemanagementcaseawarenessComponent', () => {
  let component: ChangemanagementcaseawarenessComponent;
  let fixture: ComponentFixture<ChangemanagementcaseawarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcaseawarenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcaseawarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
