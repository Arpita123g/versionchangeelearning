import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocasephaseoneComponent } from './portfoliocasephaseone.component';

describe('PortfoliocasephaseoneComponent', () => {
  let component: PortfoliocasephaseoneComponent;
  let fixture: ComponentFixture<PortfoliocasephaseoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocasephaseoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocasephaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
