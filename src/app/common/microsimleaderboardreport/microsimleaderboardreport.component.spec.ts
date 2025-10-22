import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosimleaderboardreportComponent } from './microsimleaderboardreport.component';

describe('MicrosimleaderboardreportComponent', () => {
  let component: MicrosimleaderboardreportComponent;
  let fixture: ComponentFixture<MicrosimleaderboardreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosimleaderboardreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimleaderboardreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
