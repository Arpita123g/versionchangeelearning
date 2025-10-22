import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegameroutesandtechnologyComponent } from './logisticsmodegameroutesandtechnology.component';

describe('LogisticsmodegameroutesandtechnologyComponent', () => {
  let component: LogisticsmodegameroutesandtechnologyComponent;
  let fixture: ComponentFixture<LogisticsmodegameroutesandtechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegameroutesandtechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegameroutesandtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
