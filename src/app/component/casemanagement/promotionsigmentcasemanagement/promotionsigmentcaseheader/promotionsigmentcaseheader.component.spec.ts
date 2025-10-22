import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsigmentcaseheaderComponent } from './promotionsigmentcaseheader.component';

describe('PromotionsigmentcaseheaderComponent', () => {
  let component: PromotionsigmentcaseheaderComponent;
  let fixture: ComponentFixture<PromotionsigmentcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsigmentcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsigmentcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
