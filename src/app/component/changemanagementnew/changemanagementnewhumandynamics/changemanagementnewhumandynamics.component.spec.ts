import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewhumandynamicsComponent } from './changemanagementnewhumandynamics.component';

describe('ChangemanagementnewhumandynamicsComponent', () => {
  let component: ChangemanagementnewhumandynamicsComponent;
  let fixture: ComponentFixture<ChangemanagementnewhumandynamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewhumandynamicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewhumandynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
