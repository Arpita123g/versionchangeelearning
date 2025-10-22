import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolionewmanagementphaseoneComponent } from './portfolionewmanagementphaseone.component';

describe('PortfolionewmanagementphaseoneComponent', () => {
  let component: PortfolionewmanagementphaseoneComponent;
  let fixture: ComponentFixture<PortfolionewmanagementphaseoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolionewmanagementphaseoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolionewmanagementphaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
