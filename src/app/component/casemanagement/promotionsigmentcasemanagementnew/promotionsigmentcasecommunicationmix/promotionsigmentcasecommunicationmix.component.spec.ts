import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasecommunicationmixComponent } from './promotionsigmentcasecommunicationmix.component';

describe('PromotionsigmentcasecommunicationmixComponent', () => {
  let component: PromotionsigmentcasecommunicationmixComponent;
  let fixture: ComponentFixture<PromotionsigmentcasecommunicationmixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasecommunicationmixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasecommunicationmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
