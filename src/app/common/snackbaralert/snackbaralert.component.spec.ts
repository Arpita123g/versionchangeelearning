import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbaralertComponent } from './snackbaralert.component';

describe('SnackbaralertComponent', () => {
  let component: SnackbaralertComponent;
  let fixture: ComponentFixture<SnackbaralertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbaralertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbaralertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
