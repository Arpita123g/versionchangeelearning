import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewintroductionComponent } from './changemanagementnewintroduction.component';

describe('ChangemanagementnewintroductionComponent', () => {
  let component: ChangemanagementnewintroductionComponent;
  let fixture: ComponentFixture<ChangemanagementnewintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
