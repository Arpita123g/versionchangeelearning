import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcasefoodforthoughtComponent } from './crmcasefoodforthought.component';

describe('CrmcasefoodforthoughtComponent', () => {
  let component: CrmcasefoodforthoughtComponent;
  let fixture: ComponentFixture<CrmcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
