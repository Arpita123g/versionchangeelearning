import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercereportComponent } from './ecommercereport.component';

describe('EcommercereportComponent', () => {
  let component: EcommercereportComponent;
  let fixture: ComponentFixture<EcommercereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
