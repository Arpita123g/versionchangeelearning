import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumercraftingComponent } from './consumercrafting.component';

describe('ConsumercraftingComponent', () => {
  let component: ConsumercraftingComponent;
  let fixture: ComponentFixture<ConsumercraftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumercraftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumercraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
