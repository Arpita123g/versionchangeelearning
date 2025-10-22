import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasecollaborationComponent } from './innovationcasecollaboration.component';

describe('InnovationcasecollaborationComponent', () => {
  let component: InnovationcasecollaborationComponent;
  let fixture: ComponentFixture<InnovationcasecollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasecollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasecollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
