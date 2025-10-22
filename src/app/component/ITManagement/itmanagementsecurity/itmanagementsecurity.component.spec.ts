import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementsecurityComponent } from './itmanagementsecurity.component';

describe('ItmanagementsecurityComponent', () => {
  let component: ItmanagementsecurityComponent;
  let fixture: ComponentFixture<ItmanagementsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementsecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
