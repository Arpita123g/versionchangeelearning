import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicsp2inventorylevelComponent } from './orderingbasicsp2inventorylevel.component';

describe('Orderingbasicsp2inventorylevelComponent', () => {
  let component: Orderingbasicsp2inventorylevelComponent;
  let fixture: ComponentFixture<Orderingbasicsp2inventorylevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicsp2inventorylevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicsp2inventorylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
