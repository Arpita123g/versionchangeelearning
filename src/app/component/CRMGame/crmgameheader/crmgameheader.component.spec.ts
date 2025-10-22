import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgameheaderComponent } from './crmgameheader.component';

describe('CrmgameheaderComponent', () => {
  let component: CrmgameheaderComponent;
  let fixture: ComponentFixture<CrmgameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgameheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
