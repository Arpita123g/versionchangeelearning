import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementcasefoodforthoughtComponent } from './changemanagementcasefoodforthought.component';

describe('ChangemanagementcasefoodforthoughtComponent', () => {
  let component: ChangemanagementcasefoodforthoughtComponent;
  let fixture: ComponentFixture<ChangemanagementcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
