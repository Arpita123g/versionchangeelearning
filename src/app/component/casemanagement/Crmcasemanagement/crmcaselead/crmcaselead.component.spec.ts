import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcaseleadComponent } from './crmcaselead.component';

describe('CrmcaseleadComponent', () => {
  let component: CrmcaseleadComponent;
  let fixture: ComponentFixture<CrmcaseleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcaseleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcaseleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
