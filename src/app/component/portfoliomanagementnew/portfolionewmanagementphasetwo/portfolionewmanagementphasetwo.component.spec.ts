import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolionewmanagementphasetwoComponent } from './portfolionewmanagementphasetwo.component';

describe('PortfolionewmanagementphasetwoComponent', () => {
  let component: PortfolionewmanagementphasetwoComponent;
  let fixture: ComponentFixture<PortfolionewmanagementphasetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolionewmanagementphasetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolionewmanagementphasetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
