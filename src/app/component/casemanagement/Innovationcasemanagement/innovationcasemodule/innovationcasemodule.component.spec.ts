import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcasemoduleComponent } from './innovationcasemodule.component';

describe('InnovationcasemoduleComponent', () => {
  let component: InnovationcasemoduleComponent;
  let fixture: ComponentFixture<InnovationcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
