import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementmarketoutlookComponent } from './itcasemanagementmarketoutlook.component';

describe('ItcasemanagementmarketoutlookComponent', () => {
  let component: ItcasemanagementmarketoutlookComponent;
  let fixture: ComponentFixture<ItcasemanagementmarketoutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementmarketoutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementmarketoutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
