import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcasemoduleComponent } from './crmcasemodule.component';

describe('CrmcasemoduleComponent', () => {
  let component: CrmcasemoduleComponent;
  let fixture: ComponentFixture<CrmcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
