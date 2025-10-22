import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodforthoughtportfoliomanagementComponent } from './foodforthoughtportfoliomanagement.component';

describe('FoodforthoughtportfoliomanagementComponent', () => {
  let component: FoodforthoughtportfoliomanagementComponent;
  let fixture: ComponentFixture<FoodforthoughtportfoliomanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodforthoughtportfoliomanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodforthoughtportfoliomanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
