import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationfoodforthoughtComponent } from './innovationfoodforthought.component';

describe('InnovationfoodforthoughtComponent', () => {
  let component: InnovationfoodforthoughtComponent;
  let fixture: ComponentFixture<InnovationfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
