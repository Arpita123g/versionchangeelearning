import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasememoComponent } from './changemanagementcasememo.component';

describe('ChangemanagementcasememoComponent', () => {
  let component: ChangemanagementcasememoComponent;
  let fixture: ComponentFixture<ChangemanagementcasememoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasememoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasememoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
