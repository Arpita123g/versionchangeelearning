import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationcaseproductComponent } from './innovationcaseproduct.component';

describe('InnovationcaseproductComponent', () => {
  let component: InnovationcaseproductComponent;
  let fixture: ComponentFixture<InnovationcaseproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationcaseproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationcaseproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
