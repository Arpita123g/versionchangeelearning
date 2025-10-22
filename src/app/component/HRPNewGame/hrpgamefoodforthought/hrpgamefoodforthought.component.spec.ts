import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamefoodforthoughtComponent } from './hrpgamefoodforthought.component';

describe('HrpgamefoodforthoughtComponent', () => {
  let component: HrpgamefoodforthoughtComponent;
  let fixture: ComponentFixture<HrpgamefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
