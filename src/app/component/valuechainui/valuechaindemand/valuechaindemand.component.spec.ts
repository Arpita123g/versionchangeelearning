import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaindemandComponent } from './valuechaindemand.component';

describe('ValuechaindemandComponent', () => {
  let component: ValuechaindemandComponent;
  let fixture: ComponentFixture<ValuechaindemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaindemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaindemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
