import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcaseresourceComponent } from './crmcaseresource.component';

describe('CrmcaseresourceComponent', () => {
  let component: CrmcaseresourceComponent;
  let fixture: ComponentFixture<CrmcaseresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcaseresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcaseresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
