import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumergameheaderComponent } from './consumergameheader.component';

describe('ConsumergameheaderComponent', () => {
  let component: ConsumergameheaderComponent;
  let fixture: ComponentFixture<ConsumergameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumergameheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumergameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
