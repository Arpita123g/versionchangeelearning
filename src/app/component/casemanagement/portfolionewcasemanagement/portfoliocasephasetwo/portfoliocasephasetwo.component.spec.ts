import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocasephasetwoComponent } from './portfoliocasephasetwo.component';

describe('PortfoliocasephasetwoComponent', () => {
  let component: PortfoliocasephasetwoComponent;
  let fixture: ComponentFixture<PortfoliocasephasetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocasephasetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocasephasetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
