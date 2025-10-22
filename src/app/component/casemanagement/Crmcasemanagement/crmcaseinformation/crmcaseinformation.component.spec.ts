import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcaseinformationComponent } from './crmcaseinformation.component';

describe('CrmcaseinformationComponent', () => {
  let component: CrmcaseinformationComponent;
  let fixture: ComponentFixture<CrmcaseinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcaseinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcaseinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
