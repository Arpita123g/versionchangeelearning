import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementmarketComponent } from './itmanagementmarket.component';

describe('ItmanagementmarketComponent', () => {
  let component: ItmanagementmarketComponent;
  let fixture: ComponentFixture<ItmanagementmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
