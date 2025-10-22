import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorarchivepageComponent } from './instructorarchivepage.component';

describe('InstructorarchivepageComponent', () => {
  let component: InstructorarchivepageComponent;
  let fixture: ComponentFixture<InstructorarchivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorarchivepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorarchivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
