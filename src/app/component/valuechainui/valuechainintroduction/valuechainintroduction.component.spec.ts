import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainintroductionComponent } from './valuechainintroduction.component';

describe('ValuechainintroductionComponent', () => {
  let component: ValuechainintroductionComponent;
  let fixture: ComponentFixture<ValuechainintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
