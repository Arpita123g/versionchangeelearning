import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercefoodforthoughtComponent } from './ecommercefoodforthought.component';

describe('EcommercefoodforthoughtComponent', () => {
  let component: EcommercefoodforthoughtComponent;
  let fixture: ComponentFixture<EcommercefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
