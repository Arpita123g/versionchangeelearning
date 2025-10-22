import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcaseheaderComponent } from './crmcaseheader.component';

describe('CrmcaseheaderComponent', () => {
  let component: CrmcaseheaderComponent;
  let fixture: ComponentFixture<CrmcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
