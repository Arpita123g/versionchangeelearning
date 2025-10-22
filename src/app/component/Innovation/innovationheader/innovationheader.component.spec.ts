import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationheaderComponent } from './innovationheader.component';

describe('InnovationheaderComponent', () => {
  let component: InnovationheaderComponent;
  let fixture: ComponentFixture<InnovationheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
