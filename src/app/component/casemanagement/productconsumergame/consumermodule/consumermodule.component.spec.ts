import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumermoduleComponent } from './consumermodule.component';

describe('ConsumermoduleComponent', () => {
  let component: ConsumermoduleComponent;
  let fixture: ComponentFixture<ConsumermoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumermoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
