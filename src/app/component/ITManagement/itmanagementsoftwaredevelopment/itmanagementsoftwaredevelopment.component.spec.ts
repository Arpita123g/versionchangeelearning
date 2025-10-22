import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementsoftwaredevelopmentComponent } from './itmanagementsoftwaredevelopment.component';

describe('ItmanagementsoftwaredevelopmentComponent', () => {
  let component: ItmanagementsoftwaredevelopmentComponent;
  let fixture: ComponentFixture<ItmanagementsoftwaredevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementsoftwaredevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementsoftwaredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
