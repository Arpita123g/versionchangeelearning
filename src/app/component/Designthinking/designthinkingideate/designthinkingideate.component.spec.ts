import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingideateComponent } from './designthinkingideate.component';

describe('DesignthinkingideateComponent', () => {
  let component: DesignthinkingideateComponent;
  let fixture: ComponentFixture<DesignthinkingideateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingideateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingideateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
