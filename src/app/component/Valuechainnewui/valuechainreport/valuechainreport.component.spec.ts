import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainreportComponent } from './valuechainreport.component';

describe('ValuechainreportComponent', () => {
  let component: ValuechainreportComponent;
  let fixture: ComponentFixture<ValuechainreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
