import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcaseheaderComponent } from './salestargetcaseheader.component';

describe('SalestargetcaseheaderComponent', () => {
  let component: SalestargetcaseheaderComponent;
  let fixture: ComponentFixture<SalestargetcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
