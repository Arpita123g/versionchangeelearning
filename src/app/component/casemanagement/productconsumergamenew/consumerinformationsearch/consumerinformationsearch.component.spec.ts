import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerinformationsearchComponent } from './consumerinformationsearch.component';

describe('ConsumerinformationsearchComponent', () => {
  let component: ConsumerinformationsearchComponent;
  let fixture: ComponentFixture<ConsumerinformationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerinformationsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerinformationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
