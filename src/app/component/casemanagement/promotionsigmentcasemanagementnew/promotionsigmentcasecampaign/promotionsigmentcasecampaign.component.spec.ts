import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasecampaignComponent } from './promotionsigmentcasecampaign.component';

describe('PromotionsigmentcasecampaignComponent', () => {
  let component: PromotionsigmentcasecampaignComponent;
  let fixture: ComponentFixture<PromotionsigmentcasecampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasecampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasecampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
