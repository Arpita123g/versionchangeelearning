import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveerrorlogcomponentComponent } from './driveerrorlogcomponent.component';

describe('DriveerrorlogcomponentComponent', () => {
  let component: DriveerrorlogcomponentComponent;
  let fixture: ComponentFixture<DriveerrorlogcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveerrorlogcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveerrorlogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
