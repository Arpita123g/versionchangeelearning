import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasemarketingComponent } from './innovationcasemarketing.component';

describe('InnovationcasemarketingComponent', () => {
  let component: InnovationcasemarketingComponent;
  let fixture: ComponentFixture<InnovationcasemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasemarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
