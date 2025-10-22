import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersynopsisComponent } from './consumersynopsis.component';

describe('ConsumersynopsisComponent', () => {
  let component: ConsumersynopsisComponent;
  let fixture: ComponentFixture<ConsumersynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumersynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
