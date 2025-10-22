import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasemarketingComponent } from './valuechaincasemarketing.component';

describe('ValuechaincasemarketingComponent', () => {
  let component: ValuechaincasemarketingComponent;
  let fixture: ComponentFixture<ValuechaincasemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasemarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
