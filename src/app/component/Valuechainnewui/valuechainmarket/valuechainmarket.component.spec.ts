import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainmarketComponent } from './valuechainmarket.component';

describe('ValuechainmarketComponent', () => {
  let component: ValuechainmarketComponent;
  let fixture: ComponentFixture<ValuechainmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
