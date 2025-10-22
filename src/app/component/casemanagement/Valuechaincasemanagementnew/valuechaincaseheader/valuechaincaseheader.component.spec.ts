import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincaseheaderComponent } from './valuechaincaseheader.component';

describe('ValuechaincaseheaderComponent', () => {
  let component: ValuechaincaseheaderComponent;
  let fixture: ComponentFixture<ValuechaincaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
