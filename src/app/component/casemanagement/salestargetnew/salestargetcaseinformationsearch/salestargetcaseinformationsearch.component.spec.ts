import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetcaseinformationsearchComponent } from './salestargetcaseinformationsearch.component';

describe('SalestargetcaseinformationsearchComponent', () => {
  let component: SalestargetcaseinformationsearchComponent;
  let fixture: ComponentFixture<SalestargetcaseinformationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetcaseinformationsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetcaseinformationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
