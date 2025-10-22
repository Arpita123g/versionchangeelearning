import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodforthoughtConsumerComponent } from './foodforthoughtconsumer.component';

describe('FoodforthoughtConsumerComponent', () => {
  let component: FoodforthoughtConsumerComponent;
  let fixture: ComponentFixture<FoodforthoughtConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodforthoughtConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodforthoughtConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
