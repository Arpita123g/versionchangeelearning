import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingreportComponent } from './accountingingreport.component';

describe('AccountingingreportComponent', () => {
  let component: AccountingingreportComponent;
  let fixture: ComponentFixture<AccountingingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
