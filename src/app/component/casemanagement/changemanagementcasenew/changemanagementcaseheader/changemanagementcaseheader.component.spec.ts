import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcaseheaderComponent } from './changemanagementcaseheader.component';

describe('ChangemanagementcaseheaderComponent', () => {
  let component: ChangemanagementcaseheaderComponent;
  let fixture: ComponentFixture<ChangemanagementcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
