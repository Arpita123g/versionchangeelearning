import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementsynopsisComponent } from './itmanagementsynopsis.component';

describe('ItmanagementsynopsisComponent', () => {
  let component: ItmanagementsynopsisComponent;
  let fixture: ComponentFixture<ItmanagementsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
