import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementreportComponent } from './itmanagementreport.component';

describe('ItmanagementreportComponent', () => {
  let component: ItmanagementreportComponent;
  let fixture: ComponentFixture<ItmanagementreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
