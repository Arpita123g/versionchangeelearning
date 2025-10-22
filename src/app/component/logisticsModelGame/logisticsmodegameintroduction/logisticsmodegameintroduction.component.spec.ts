import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegameintroductionComponent } from './logisticsmodegameintroduction.component';

describe('LogisticsmodegameintroductionComponent', () => {
  let component: LogisticsmodegameintroductionComponent;
  let fixture: ComponentFixture<LogisticsmodegameintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegameintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegameintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
