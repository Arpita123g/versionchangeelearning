import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamefoodforthoughtComponent } from './crmgamefoodforthought.component';

describe('CrmgamefoodforthoughtComponent', () => {
  let component: CrmgamefoodforthoughtComponent;
  let fixture: ComponentFixture<CrmgamefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
