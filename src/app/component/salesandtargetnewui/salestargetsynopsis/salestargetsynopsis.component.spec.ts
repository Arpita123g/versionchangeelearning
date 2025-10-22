import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetsynopsisComponent } from './salestargetsynopsis.component';

describe('SalestargetsynopsisComponent', () => {
  let component: SalestargetsynopsisComponent;
  let fixture: ComponentFixture<SalestargetsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
