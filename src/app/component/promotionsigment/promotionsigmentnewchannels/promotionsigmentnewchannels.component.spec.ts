import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewchannelsComponent } from './promotionsigmentnewchannels.component';

describe('PromotionsigmentnewchannelsComponent', () => {
  let component: PromotionsigmentnewchannelsComponent;
  let fixture: ComponentFixture<PromotionsigmentnewchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewchannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
