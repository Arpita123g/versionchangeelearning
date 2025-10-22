import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcasemarketComponent } from './crmcasemarket.component';

describe('CrmcasemarketComponent', () => {
  let component: CrmcasemarketComponent;
  let fixture: ComponentFixture<CrmcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
