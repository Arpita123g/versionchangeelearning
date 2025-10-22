import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamecommunicationComponent } from './crmgamecommunication.component';

describe('CrmgamecommunicationComponent', () => {
  let component: CrmgamecommunicationComponent;
  let fixture: ComponentFixture<CrmgamecommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamecommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
