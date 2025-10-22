import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionmarketComponent } from './mergersacquisitionmarket.component';

describe('MergersacquisitionmarketComponent', () => {
  let component: MergersacquisitionmarketComponent;
  let fixture: ComponentFixture<MergersacquisitionmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
