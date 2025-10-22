import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingexecuteComponent } from './designthinkingexecute.component';

describe('DesignthinkingexecuteComponent', () => {
  let component: DesignthinkingexecuteComponent;
  let fixture: ComponentFixture<DesignthinkingexecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingexecuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingexecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
