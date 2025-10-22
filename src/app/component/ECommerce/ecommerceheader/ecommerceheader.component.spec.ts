import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceheaderComponent } from './ecommerceheader.component';

describe('EcommerceheaderComponent', () => {
  let component: EcommerceheaderComponent;
  let fixture: ComponentFixture<EcommerceheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
