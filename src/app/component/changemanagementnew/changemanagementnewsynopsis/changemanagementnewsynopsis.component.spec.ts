import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewsynopsisComponent } from './changemanagementnewsynopsis.component';

describe('ChangemanagementnewsynopsisComponent', () => {
  let component: ChangemanagementnewsynopsisComponent;
  let fixture: ComponentFixture<ChangemanagementnewsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
