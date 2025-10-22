import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeroutlookComponent } from './consumeroutlook.component';

describe('ConsumeroutlookComponent', () => {
  let component: ConsumeroutlookComponent;
  let fixture: ComponentFixture<ConsumeroutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumeroutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeroutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
