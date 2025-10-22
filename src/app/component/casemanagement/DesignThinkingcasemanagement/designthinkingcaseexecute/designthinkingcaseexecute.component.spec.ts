import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseexecuteComponent } from './designthinkingcaseexecute.component';

describe('DesignthinkingcaseexecuteComponent', () => {
  let component: DesignthinkingcaseexecuteComponent;
  let fixture: ComponentFixture<DesignthinkingcaseexecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseexecuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseexecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
