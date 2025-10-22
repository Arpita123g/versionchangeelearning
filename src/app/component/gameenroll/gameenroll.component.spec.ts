import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameenrollComponent } from './gameenroll.component';

describe('GameenrollComponent', () => {
  let component: GameenrollComponent;
  let fixture: ComponentFixture<GameenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameenrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
