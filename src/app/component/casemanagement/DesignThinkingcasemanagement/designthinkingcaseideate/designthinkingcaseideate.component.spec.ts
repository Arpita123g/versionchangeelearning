import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseideateComponent } from './designthinkingcaseideate.component';

describe('DesignthinkingcaseideateComponent', () => {
  let component: DesignthinkingcaseideateComponent;
  let fixture: ComponentFixture<DesignthinkingcaseideateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseideateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseideateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
