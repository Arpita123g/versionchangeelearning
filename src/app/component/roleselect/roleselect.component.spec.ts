import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleselectComponent } from './roleselect.component';

describe('RoleselectComponent', () => {
  let component: RoleselectComponent;
  let fixture: ComponentFixture<RoleselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
