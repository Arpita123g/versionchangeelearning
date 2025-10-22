import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcasefoodforthoughtComponent } from './salestargetcasefoodforthought.component';

describe('SalestargetcasefoodforthoughtComponent', () => {
  let component: SalestargetcasefoodforthoughtComponent;
  let fixture: ComponentFixture<SalestargetcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
