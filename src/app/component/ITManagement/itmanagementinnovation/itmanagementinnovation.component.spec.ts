import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementinnovationComponent } from './itmanagementinnovation.component';

describe('ItmanagementinnovationComponent', () => {
  let component: ItmanagementinnovationComponent;
  let fixture: ComponentFixture<ItmanagementinnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementinnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementinnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
