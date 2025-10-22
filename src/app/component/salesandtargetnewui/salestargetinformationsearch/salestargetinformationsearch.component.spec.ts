import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetinformationsearchComponent } from './salestargetinformationsearch.component';

describe('SalestargetinformationsearchComponent', () => {
  let component: SalestargetinformationsearchComponent;
  let fixture: ComponentFixture<SalestargetinformationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetinformationsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetinformationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
