import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingfoodforthoughtComponent } from './designthinkingfoodforthought.component';

describe('DesignthinkingfoodforthoughtComponent', () => {
  let component: DesignthinkingfoodforthoughtComponent;
  let fixture: ComponentFixture<DesignthinkingfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
