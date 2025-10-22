import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetsalescompositionComponent } from './salestargetsalescomposition.component';

describe('SalestargetsalescompositionComponent', () => {
  let component: SalestargetsalescompositionComponent;
  let fixture: ComponentFixture<SalestargetsalescompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetsalescompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetsalescompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
