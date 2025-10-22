import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcasefoodforthoughtComponent } from './designthinkingcasefoodforthought.component';

describe('DesignthinkingcasefoodforthoughtComponent', () => {
  let component: DesignthinkingcasefoodforthoughtComponent;
  let fixture: ComponentFixture<DesignthinkingcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
