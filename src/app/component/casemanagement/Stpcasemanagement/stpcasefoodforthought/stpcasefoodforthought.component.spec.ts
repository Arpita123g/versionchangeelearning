import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpcasefoodforthoughtComponent } from './stpcasefoodforthought.component';

describe('StpcasefoodforthoughtComponent', () => {
  let component: StpcasefoodforthoughtComponent;
  let fixture: ComponentFixture<StpcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
