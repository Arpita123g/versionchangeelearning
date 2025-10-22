import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationintroductionComponent } from './innovationintroduction.component';

describe('InnovationintroductionComponent', () => {
  let component: InnovationintroductionComponent;
  let fixture: ComponentFixture<InnovationintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
