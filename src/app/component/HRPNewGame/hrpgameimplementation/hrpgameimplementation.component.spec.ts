import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgameimplementationComponent } from './hrpgameimplementation.component';

describe('HrpgameimplementationComponent', () => {
  let component: HrpgameimplementationComponent;
  let fixture: ComponentFixture<HrpgameimplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgameimplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgameimplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
