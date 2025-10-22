import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumergameintroductionComponent } from './consumergameintroduction.component';

describe('ConsumergameintroductionComponent', () => {
  let component: ConsumergameintroductionComponent;
  let fixture: ComponentFixture<ConsumergameintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumergameintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumergameintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
