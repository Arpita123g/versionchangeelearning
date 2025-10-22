import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpcaseinformationsearchComponent } from './stpcaseinformationsearch.component';

describe('StpcaseinformationsearchComponent', () => {
  let component: StpcaseinformationsearchComponent;
  let fixture: ComponentFixture<StpcaseinformationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpcaseinformationsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpcaseinformationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
