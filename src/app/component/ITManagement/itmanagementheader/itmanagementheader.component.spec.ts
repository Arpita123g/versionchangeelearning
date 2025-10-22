import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmanagementheaderComponent } from './itmanagementheader.component';

describe('ItmanagementheaderComponent', () => {
  let component: ItmanagementheaderComponent;
  let fixture: ComponentFixture<ItmanagementheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmanagementheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmanagementheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
