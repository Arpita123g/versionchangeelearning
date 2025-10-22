import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetheaderComponent } from './salestargetheader.component';

describe('SalestargetheaderComponent', () => {
  let component: SalestargetheaderComponent;
  let fixture: ComponentFixture<SalestargetheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
