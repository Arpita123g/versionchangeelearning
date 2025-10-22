import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmgameintroductionComponent } from './crmgameintroduction.component';

describe('CrmgameintroductionComponent', () => {
  let component: CrmgameintroductionComponent;
  let fixture: ComponentFixture<CrmgameintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmgameintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmgameintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
