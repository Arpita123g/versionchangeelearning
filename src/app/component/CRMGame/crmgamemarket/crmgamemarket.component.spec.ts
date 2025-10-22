import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamemarketComponent } from './crmgamemarket.component';

describe('CrmgamemarketComponent', () => {
  let component: CrmgamemarketComponent;
  let fixture: ComponentFixture<CrmgamemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
