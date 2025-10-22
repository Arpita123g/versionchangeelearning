import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcasemanagementfoodforthoughtComponent } from './itcasemanagementfoodforthought.component';

describe('ItcasemanagementfoodforthoughtComponent', () => {
  let component: ItcasemanagementfoodforthoughtComponent;
  let fixture: ComponentFixture<ItcasemanagementfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcasemanagementfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcasemanagementfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
