import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpcaseheaderComponent } from './stpcaseheader.component';

describe('StpcaseheaderComponent', () => {
  let component: StpcaseheaderComponent;
  let fixture: ComponentFixture<StpcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
