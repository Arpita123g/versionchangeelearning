import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingreportComponent } from './pricingreport.component';

describe('PricingreportComponent', () => {
  let component: PricingreportComponent;
  let fixture: ComponentFixture<PricingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
