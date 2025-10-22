import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessgeneralComponent } from './businessgeneral.component';

describe('BusinessgeneralComponent', () => {
  let component: BusinessgeneralComponent;
  let fixture: ComponentFixture<BusinessgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
