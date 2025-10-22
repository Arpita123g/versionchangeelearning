import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtimeupdateComponent } from './newtimeupdate.component';

describe('NewtimeupdateComponent', () => {
  let component: NewtimeupdateComponent;
  let fixture: ComponentFixture<NewtimeupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtimeupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtimeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
