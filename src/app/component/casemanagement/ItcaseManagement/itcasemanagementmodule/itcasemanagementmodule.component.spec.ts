import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementmoduleComponent } from './itcasemanagementmodule.component';

describe('ItcasemanagementmoduleComponent', () => {
  let component: ItcasemanagementmoduleComponent;
  let fixture: ComponentFixture<ItcasemanagementmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
