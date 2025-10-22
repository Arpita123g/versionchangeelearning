import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementsystemarchitectureComponent } from './itmanagementsystemarchitecture.component';

describe('ItmanagementsystemarchitectureComponent', () => {
  let component: ItmanagementsystemarchitectureComponent;
  let fixture: ComponentFixture<ItmanagementsystemarchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementsystemarchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementsystemarchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
