import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasedevelopmentComponent } from './innovationcasedevelopment.component';

describe('InnovationcasedevelopmentComponent', () => {
  let component: InnovationcasedevelopmentComponent;
  let fixture: ComponentFixture<InnovationcasedevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasedevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasedevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
