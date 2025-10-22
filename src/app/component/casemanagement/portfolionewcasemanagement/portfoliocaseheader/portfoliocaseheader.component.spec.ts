import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocaseheaderComponent } from './portfoliocaseheader.component';

describe('PortfoliocaseheaderComponent', () => {
  let component: PortfoliocaseheaderComponent;
  let fixture: ComponentFixture<PortfoliocaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
