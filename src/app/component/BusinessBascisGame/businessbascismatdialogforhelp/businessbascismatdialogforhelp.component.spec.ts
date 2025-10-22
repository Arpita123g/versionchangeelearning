import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascismatdialogforhelpComponent } from './businessbascismatdialogforhelp.component';

describe('BusinessbascismatdialogforhelpComponent', () => {
  let component: BusinessbascismatdialogforhelpComponent;
  let fixture: ComponentFixture<BusinessbascismatdialogforhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascismatdialogforhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascismatdialogforhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
