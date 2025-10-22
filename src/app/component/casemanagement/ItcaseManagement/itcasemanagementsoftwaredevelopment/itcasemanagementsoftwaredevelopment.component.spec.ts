import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementsoftwaredevelopmentComponent } from './itcasemanagementsoftwaredevelopment.component';

describe('ItcasemanagementsoftwaredevelopmentComponent', () => {
  let component: ItcasemanagementsoftwaredevelopmentComponent;
  let fixture: ComponentFixture<ItcasemanagementsoftwaredevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementsoftwaredevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementsoftwaredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
