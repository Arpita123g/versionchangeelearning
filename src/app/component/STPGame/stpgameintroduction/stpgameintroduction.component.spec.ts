import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgameintroductionComponent } from './stpgameintroduction.component';

describe('StpgameintroductionComponent', () => {
  let component: StpgameintroductionComponent;
  let fixture: ComponentFixture<StpgameintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgameintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgameintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
