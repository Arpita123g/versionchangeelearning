import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcaseheaderComponent } from './innovationcaseheader.component';

describe('InnovationcaseheaderComponent', () => {
  let component: InnovationcaseheaderComponent;
  let fixture: ComponentFixture<InnovationcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
