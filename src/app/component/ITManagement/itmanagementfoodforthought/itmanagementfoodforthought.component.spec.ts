import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementfoodforthoughtComponent } from './itmanagementfoodforthought.component';

describe('ItmanagementfoodforthoughtComponent', () => {
  let component: ItmanagementfoodforthoughtComponent;
  let fixture: ComponentFixture<ItmanagementfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
