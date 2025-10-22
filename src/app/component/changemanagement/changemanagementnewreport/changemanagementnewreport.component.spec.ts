import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewreportComponent } from './changemanagementnewreport.component';

describe('ChangemanagementnewreportComponent', () => {
  let component: ChangemanagementnewreportComponent;
  let fixture: ComponentFixture<ChangemanagementnewreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
