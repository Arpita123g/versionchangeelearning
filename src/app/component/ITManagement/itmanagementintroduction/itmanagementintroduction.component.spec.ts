import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementintroductionComponent } from './itmanagementintroduction.component';

describe('ItmanagementintroductionComponent', () => {
  let component: ItmanagementintroductionComponent;
  let fixture: ComponentFixture<ItmanagementintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
