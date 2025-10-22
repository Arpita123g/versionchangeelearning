import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingintroductionComponent } from './designthinkingintroduction.component';

describe('DesignthinkingintroductionComponent', () => {
  let component: DesignthinkingintroductionComponent;
  let fixture: ComponentFixture<DesignthinkingintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
