import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainsynopsisComponent } from './valuechainsynopsis.component';

describe('ValuechainsynopsisComponent', () => {
  let component: ValuechainsynopsisComponent;
  let fixture: ComponentFixture<ValuechainsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
