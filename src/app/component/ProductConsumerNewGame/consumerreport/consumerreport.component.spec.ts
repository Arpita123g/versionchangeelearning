import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerreportComponent } from './consumerreport.component';

describe('ConsumerreportComponent', () => {
  let component: ConsumerreportComponent;
  let fixture: ComponentFixture<ConsumerreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
