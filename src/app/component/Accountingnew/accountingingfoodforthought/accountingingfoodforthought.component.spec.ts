import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingfoodforthoughtComponent } from './accountingingfoodforthought.component';

describe('AccountingingfoodforthoughtComponent', () => {
  let component: AccountingingfoodforthoughtComponent;
  let fixture: ComponentFixture<AccountingingfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
