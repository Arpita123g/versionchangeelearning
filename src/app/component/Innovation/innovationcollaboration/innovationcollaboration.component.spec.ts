import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcollaborationComponent } from './innovationcollaboration.component';

describe('InnovationcollaborationComponent', () => {
  let component: InnovationcollaborationComponent;
  let fixture: ComponentFixture<InnovationcollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
