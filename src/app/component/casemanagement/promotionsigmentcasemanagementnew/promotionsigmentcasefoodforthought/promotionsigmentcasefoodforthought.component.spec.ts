import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasefoodforthoughtComponent } from './promotionsigmentcasefoodforthought.component';

describe('PromotionsigmentcasefoodforthoughtComponent', () => {
  let component: PromotionsigmentcasefoodforthoughtComponent;
  let fixture: ComponentFixture<PromotionsigmentcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
