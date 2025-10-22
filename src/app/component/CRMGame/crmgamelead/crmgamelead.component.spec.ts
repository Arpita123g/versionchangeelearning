import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgameleadComponent } from './crmgamelead.component';

describe('CrmgameleadComponent', () => {
  let component: CrmgameleadComponent;
  let fixture: ComponentFixture<CrmgameleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgameleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgameleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
