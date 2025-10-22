import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationproductComponent } from './innovationproduct.component';

describe('InnovationproductComponent', () => {
  let component: InnovationproductComponent;
  let fixture: ComponentFixture<InnovationproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
