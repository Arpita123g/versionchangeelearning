import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscaseheaderComponent } from './logisticscaseheader.component';

describe('LogisticscaseheaderComponent', () => {
  let component: LogisticscaseheaderComponent;
  let fixture: ComponentFixture<LogisticscaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
