import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessoutlookComponent } from './businessoutlook.component';

describe('BusinessoutlookComponent', () => {
  let component: BusinessoutlookComponent;
  let fixture: ComponentFixture<BusinessoutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessoutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessoutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
