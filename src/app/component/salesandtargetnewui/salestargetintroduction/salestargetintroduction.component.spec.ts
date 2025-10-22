import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetintroductionComponent } from './salestargetintroduction.component';

describe('SalestargetintroductionComponent', () => {
  let component: SalestargetintroductionComponent;
  let fixture: ComponentFixture<SalestargetintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
