import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamereportComponent } from './crmgamereport.component';

describe('CrmgamereportComponent', () => {
  let component: CrmgamereportComponent;
  let fixture: ComponentFixture<CrmgamereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
