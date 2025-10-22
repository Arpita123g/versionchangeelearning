import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosimdashboardComponent } from './microsimdashboard.component';

describe('MicrosimdashboardComponent', () => {
  let component: MicrosimdashboardComponent;
  let fixture: ComponentFixture<MicrosimdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosimdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
