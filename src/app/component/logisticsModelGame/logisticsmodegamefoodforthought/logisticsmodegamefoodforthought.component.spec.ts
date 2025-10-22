import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamefoodforthoughtComponent } from './logisticsmodegamefoodforthought.component';

describe('LogisticsmodegamefoodforthoughtComponent', () => {
  let component: LogisticsmodegamefoodforthoughtComponent;
  let fixture: ComponentFixture<LogisticsmodegamefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
