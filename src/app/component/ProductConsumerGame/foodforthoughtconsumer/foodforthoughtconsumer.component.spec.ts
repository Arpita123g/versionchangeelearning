import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodforthoughtComponent } from './foodforthoughtconsumer.component';

describe('FoodforthoughtComponent', () => {
  let component: FoodforthoughtComponent;
  let fixture: ComponentFixture<FoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
