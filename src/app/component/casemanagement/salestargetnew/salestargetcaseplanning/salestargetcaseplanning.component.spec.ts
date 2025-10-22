import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcaseplanningComponent } from './salestargetcaseplanning.component';

describe('SalestargetcaseplanningComponent', () => {
  let component: SalestargetcaseplanningComponent;
  let fixture: ComponentFixture<SalestargetcaseplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcaseplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcaseplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
