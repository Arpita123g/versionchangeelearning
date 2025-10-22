import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewmotivationComponent } from './changemanagementnewmotivation.component';

describe('ChangemanagementnewmotivationComponent', () => {
  let component: ChangemanagementnewmotivationComponent;
  let fixture: ComponentFixture<ChangemanagementnewmotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewmotivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewmotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
