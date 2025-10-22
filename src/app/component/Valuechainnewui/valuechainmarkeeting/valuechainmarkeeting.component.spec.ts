import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainmarkeetingComponent } from './valuechainmarkeeting.component';

describe('ValuechainmarkeetingComponent', () => {
  let component: ValuechainmarkeetingComponent;
  let fixture: ComponentFixture<ValuechainmarkeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainmarkeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainmarkeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
