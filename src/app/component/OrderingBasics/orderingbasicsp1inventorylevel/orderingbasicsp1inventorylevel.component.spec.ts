import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderingbasicsp1inventorylevelComponent } from './orderingbasicsp1inventorylevel.component';

describe('Orderingbasicsp1inventorylevelComponent', () => {
  let component: Orderingbasicsp1inventorylevelComponent;
  let fixture: ComponentFixture<Orderingbasicsp1inventorylevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderingbasicsp1inventorylevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderingbasicsp1inventorylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
