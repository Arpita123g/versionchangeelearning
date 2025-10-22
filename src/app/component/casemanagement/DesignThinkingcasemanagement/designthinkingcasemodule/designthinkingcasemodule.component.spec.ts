import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcasemoduleComponent } from './designthinkingcasemodule.component';

describe('DesignthinkingcasemoduleComponent', () => {
  let component: DesignthinkingcasemoduleComponent;
  let fixture: ComponentFixture<DesignthinkingcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
