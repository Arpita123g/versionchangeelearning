import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumercasecraftingComponent } from './consumercasecrafting.component';

describe('ConsumercasecraftingComponent', () => {
  let component: ConsumercasecraftingComponent;
  let fixture: ComponentFixture<ConsumercasecraftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumercasecraftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumercasecraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
