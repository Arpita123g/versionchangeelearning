import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementheaderComponent } from './itcasemanagementheader.component';

describe('ItcasemanagementheaderComponent', () => {
  let component: ItcasemanagementheaderComponent;
  let fixture: ComponentFixture<ItcasemanagementheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
