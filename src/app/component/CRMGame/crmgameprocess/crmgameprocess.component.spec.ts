import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgameprocessComponent } from './crmgameprocess.component';

describe('CrmgameprocessComponent', () => {
  let component: CrmgameprocessComponent;
  let fixture: ComponentFixture<CrmgameprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgameprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgameprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
