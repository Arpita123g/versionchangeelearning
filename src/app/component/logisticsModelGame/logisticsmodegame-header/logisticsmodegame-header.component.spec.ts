import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegameHeaderComponent } from './logisticsmodegame-header.component';

describe('LogisticsmodegameHeaderComponent', () => {
  let component: LogisticsmodegameHeaderComponent;
  let fixture: ComponentFixture<LogisticsmodegameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegameHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
