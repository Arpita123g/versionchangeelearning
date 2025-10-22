import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcasecommunicationComponent } from './crmcasecommunication.component';

describe('CrmcasecommunicationComponent', () => {
  let component: CrmcasecommunicationComponent;
  let fixture: ComponentFixture<CrmcasecommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmcasecommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcasecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
