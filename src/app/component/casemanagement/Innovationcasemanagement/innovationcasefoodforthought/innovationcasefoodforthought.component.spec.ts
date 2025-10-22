import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasefoodforthoughtComponent } from './innovationcasefoodforthought.component';

describe('InnovationcasefoodforthoughtComponent', () => {
  let component: InnovationcasefoodforthoughtComponent;
  let fixture: ComponentFixture<InnovationcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
