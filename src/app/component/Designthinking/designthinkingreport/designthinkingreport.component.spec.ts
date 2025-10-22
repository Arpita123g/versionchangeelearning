import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingreportComponent } from './designthinkingreport.component';

describe('DesignthinkingreportComponent', () => {
  let component: DesignthinkingreportComponent;
  let fixture: ComponentFixture<DesignthinkingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
