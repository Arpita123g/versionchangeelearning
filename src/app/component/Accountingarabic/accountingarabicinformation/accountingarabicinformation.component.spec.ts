import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicinformationComponent } from './accountingarabicinformation.component';

describe('AccountinginginformationComponent', () => {
  let component: AccountingArabicinformationComponent;
  let fixture: ComponentFixture<AccountingArabicinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
