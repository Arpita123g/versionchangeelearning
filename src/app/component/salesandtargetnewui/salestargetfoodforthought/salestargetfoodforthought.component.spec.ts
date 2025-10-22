import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetfoodforthoughtComponent } from './salestargetfoodforthought.component';

describe('SalestargetfoodforthoughtComponent', () => {
  let component: SalestargetfoodforthoughtComponent;
  let fixture: ComponentFixture<SalestargetfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
