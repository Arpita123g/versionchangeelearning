import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgameheaderComponent } from './stpgameheader.component';

describe('StpgameheaderComponent', () => {
  let component: StpgameheaderComponent;
  let fixture: ComponentFixture<StpgameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgameheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
