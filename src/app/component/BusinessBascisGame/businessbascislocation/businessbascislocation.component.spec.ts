import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascislocationComponent } from './businessbascislocation.component';

describe('BusinessbascislocationComponent', () => {
  let component: BusinessbascislocationComponent;
  let fixture: ComponentFixture<BusinessbascislocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascislocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascislocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
