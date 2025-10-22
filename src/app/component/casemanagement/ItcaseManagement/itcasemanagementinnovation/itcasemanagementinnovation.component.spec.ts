import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementinnovationComponent } from './itcasemanagementinnovation.component';

describe('ItcasemanagementinnovationComponent', () => {
  let component: ItcasemanagementinnovationComponent;
  let fixture: ComponentFixture<ItcasemanagementinnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementinnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementinnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
