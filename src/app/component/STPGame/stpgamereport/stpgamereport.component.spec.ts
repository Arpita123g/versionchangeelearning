import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpgamereportComponent } from './stpgamereport.component';

describe('StpgamereportComponent', () => {
  let component: StpgamereportComponent;
  let fixture: ComponentFixture<StpgamereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpgamereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpgamereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
