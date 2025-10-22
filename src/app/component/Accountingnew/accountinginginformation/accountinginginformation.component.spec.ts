import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountinginginformationComponent } from './accountinginginformation.component';

describe('AccountinginginformationComponent', () => {
  let component: AccountinginginformationComponent;
  let fixture: ComponentFixture<AccountinginginformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountinginginformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountinginginformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
