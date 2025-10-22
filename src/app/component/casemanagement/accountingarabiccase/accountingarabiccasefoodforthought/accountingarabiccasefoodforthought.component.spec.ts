import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccasefoodforthoughtComponent } from './accountingarabiccasefoodforthought.component';

describe('AccountingarabiccasefoodforthoughtComponent', () => {
  let component: AccountingarabiccasefoodforthoughtComponent;
  let fixture: ComponentFixture<AccountingarabiccasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
