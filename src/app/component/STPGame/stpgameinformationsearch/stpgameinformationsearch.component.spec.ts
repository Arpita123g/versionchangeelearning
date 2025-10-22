import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgameinformationsearchComponent } from './stpgameinformationsearch.component';

describe('StpgameinformationsearchComponent', () => {
  let component: StpgameinformationsearchComponent;
  let fixture: ComponentFixture<StpgameinformationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgameinformationsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgameinformationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
