import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcasemarketresearchComponent } from './promotionsigmentcasemarketresearch.component';

describe('PromotionsigmentcasemarketresearchComponent', () => {
  let component: PromotionsigmentcasemarketresearchComponent;
  let fixture: ComponentFixture<PromotionsigmentcasemarketresearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcasemarketresearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcasemarketresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
