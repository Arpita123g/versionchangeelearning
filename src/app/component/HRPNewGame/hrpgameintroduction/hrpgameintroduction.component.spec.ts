import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgameintroductionComponent } from './hrpgameintroduction.component';

describe('HrpgameintroductionComponent', () => {
  let component: HrpgameintroductionComponent;
  let fixture: ComponentFixture<HrpgameintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgameintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgameintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
