import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscasefoodforthoughtComponent } from './logisticscasefoodforthought.component';

describe('LogisticscasefoodforthoughtComponent', () => {
  let component: LogisticscasefoodforthoughtComponent;
  let fixture: ComponentFixture<LogisticscasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
