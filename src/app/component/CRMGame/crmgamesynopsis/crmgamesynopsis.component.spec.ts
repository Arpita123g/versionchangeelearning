import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgamesynopsisComponent } from './crmgamesynopsis.component';

describe('CrmgamesynopsisComponent', () => {
  let component: CrmgamesynopsisComponent;
  let fixture: ComponentFixture<CrmgamesynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgamesynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgamesynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
