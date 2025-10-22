import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementsystemarchitectureComponent } from './itcasemanagementsystemarchitecture.component';

describe('ItcasemanagementsystemarchitectureComponent', () => {
  let component: ItcasemanagementsystemarchitectureComponent;
  let fixture: ComponentFixture<ItcasemanagementsystemarchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementsystemarchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementsystemarchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
