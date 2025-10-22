import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewcommunicationmixComponent } from './promotionsigmentnewcommunicationmix.component';

describe('PromotionsigmentnewcommunicationmixComponent', () => {
  let component: PromotionsigmentnewcommunicationmixComponent;
  let fixture: ComponentFixture<PromotionsigmentnewcommunicationmixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewcommunicationmixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewcommunicationmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
