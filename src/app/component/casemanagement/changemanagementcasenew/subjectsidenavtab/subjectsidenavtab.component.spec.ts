import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsidenavtabComponent } from './subjectsidenavtab.component';

describe('SubjectsidenavtabComponent', () => {
  let component: SubjectsidenavtabComponent;
  let fixture: ComponentFixture<SubjectsidenavtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsidenavtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsidenavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
