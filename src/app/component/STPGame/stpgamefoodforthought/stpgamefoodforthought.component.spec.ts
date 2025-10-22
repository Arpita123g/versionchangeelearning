import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgamefoodforthoughtComponent } from './stpgamefoodforthought.component';

describe('StpgamefoodforthoughtComponent', () => {
  let component: StpgamefoodforthoughtComponent;
  let fixture: ComponentFixture<StpgamefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgamefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgamefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
