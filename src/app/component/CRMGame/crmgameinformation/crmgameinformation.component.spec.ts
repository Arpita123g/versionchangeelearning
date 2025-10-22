import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgameinformationComponent } from './crmgameinformation.component';

describe('CrmgameinformationComponent', () => {
  let component: CrmgameinformationComponent;
  let fixture: ComponentFixture<CrmgameinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgameinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgameinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
