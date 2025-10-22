import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentnewheaderComponent } from './promotionsigmentnewheader.component';

describe('PromotionsigmentnewheaderComponent', () => {
  let component: PromotionsigmentnewheaderComponent;
  let fixture: ComponentFixture<PromotionsigmentnewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentnewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentnewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
