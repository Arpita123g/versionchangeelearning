import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgamesynopsisComponent } from './stpgamesynopsis.component';

describe('StpgamesynopsisComponent', () => {
  let component: StpgamesynopsisComponent;
  let fixture: ComponentFixture<StpgamesynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgamesynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgamesynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
