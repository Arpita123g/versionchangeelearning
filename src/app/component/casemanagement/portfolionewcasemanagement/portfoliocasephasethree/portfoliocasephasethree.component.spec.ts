import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocasephasethreeComponent } from './portfoliocasephasethree.component';

describe('PortfoliocasephasethreeComponent', () => {
  let component: PortfoliocasephasethreeComponent;
  let fixture: ComponentFixture<PortfoliocasephasethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocasephasethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocasephasethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
