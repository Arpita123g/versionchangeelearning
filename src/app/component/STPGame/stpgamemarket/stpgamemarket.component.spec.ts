import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgamemarketComponent } from './stpgamemarket.component';

describe('StpgamemarketComponent', () => {
  let component: StpgamemarketComponent;
  let fixture: ComponentFixture<StpgamemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgamemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgamemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
