import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainheaderComponent } from './valuechainheader.component';

describe('ValuechainheaderComponent', () => {
  let component: ValuechainheaderComponent;
  let fixture: ComponentFixture<ValuechainheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
