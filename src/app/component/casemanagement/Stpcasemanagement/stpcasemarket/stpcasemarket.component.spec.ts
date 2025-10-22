import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpcasemarketComponent } from './stpcasemarket.component';

describe('StpcasemarketComponent', () => {
  let component: StpcasemarketComponent;
  let fixture: ComponentFixture<StpcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
