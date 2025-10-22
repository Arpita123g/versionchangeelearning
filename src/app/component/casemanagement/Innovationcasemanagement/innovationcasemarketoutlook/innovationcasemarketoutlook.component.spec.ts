import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasemarketoutlookComponent } from './innovationcasemarketoutlook.component';

describe('InnovationcasemarketoutlookComponent', () => {
  let component: InnovationcasemarketoutlookComponent;
  let fixture: ComponentFixture<InnovationcasemarketoutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasemarketoutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasemarketoutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
