import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionintroductionComponent } from './mergersacquisitionintroduction.component';

describe('MergersacquisitionintroductionComponent', () => {
  let component: MergersacquisitionintroductionComponent;
  let fixture: ComponentFixture<MergersacquisitionintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
