import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationreportComponent } from './innovationreport.component';

describe('InnovationreportComponent', () => {
  let component: InnovationreportComponent;
  let fixture: ComponentFixture<InnovationreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
