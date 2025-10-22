import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewcampaignsComponent } from './promotionsigmentnewcampaigns.component';

describe('PromotionsigmentnewcampaignsComponent', () => {
  let component: PromotionsigmentnewcampaignsComponent;
  let fixture: ComponentFixture<PromotionsigmentnewcampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewcampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
