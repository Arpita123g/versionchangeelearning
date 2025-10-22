import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerfoodforthougthComponent } from './consumerfoodforthougth.component';

describe('ConsumerfoodforthougthComponent', () => {
  let component: ConsumerfoodforthougthComponent;
  let fixture: ComponentFixture<ConsumerfoodforthougthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerfoodforthougthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerfoodforthougthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
