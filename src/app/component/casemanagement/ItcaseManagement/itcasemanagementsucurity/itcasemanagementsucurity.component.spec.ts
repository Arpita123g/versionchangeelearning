import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementsucurityComponent } from './itcasemanagementsucurity.component';

describe('ItcasemanagementsucurityComponent', () => {
  let component: ItcasemanagementsucurityComponent;
  let fixture: ComponentFixture<ItcasemanagementsucurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementsucurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementsucurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
