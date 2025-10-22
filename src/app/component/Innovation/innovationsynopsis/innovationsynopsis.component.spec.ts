import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationsynopsisComponent } from './innovationsynopsis.component';

describe('InnovationsynopsisComponent', () => {
  let component: InnovationsynopsisComponent;
  let fixture: ComponentFixture<InnovationsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
