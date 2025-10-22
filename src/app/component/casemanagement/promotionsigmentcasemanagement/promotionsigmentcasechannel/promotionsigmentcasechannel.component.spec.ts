import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasechannelComponent } from './promotionsigmentcasechannel.component';

describe('PromotionsigmentcasechannelComponent', () => {
  let component: PromotionsigmentcasechannelComponent;
  let fixture: ComponentFixture<PromotionsigmentcasechannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasechannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasechannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
