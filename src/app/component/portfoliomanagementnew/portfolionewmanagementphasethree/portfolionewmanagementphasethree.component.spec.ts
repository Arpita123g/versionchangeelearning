import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolionewmanagementphasethreeComponent } from './portfolionewmanagementphasethree.component';

describe('PortfolionewmanagementphasethreeComponent', () => {
  let component: PortfolionewmanagementphasethreeComponent;
  let fixture: ComponentFixture<PortfolionewmanagementphasethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolionewmanagementphasethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolionewmanagementphasethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
