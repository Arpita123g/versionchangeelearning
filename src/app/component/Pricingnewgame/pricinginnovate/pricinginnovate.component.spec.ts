import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricinginnovateComponent } from './pricinginnovate.component';

describe('PricinginnovateComponent', () => {
  let component: PricinginnovateComponent;
  let fixture: ComponentFixture<PricinginnovateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricinginnovateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricinginnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
