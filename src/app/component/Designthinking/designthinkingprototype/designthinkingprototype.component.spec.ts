import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingprototypeComponent } from './designthinkingprototype.component';

describe('DesignthinkingprototypeComponent', () => {
  let component: DesignthinkingprototypeComponent;
  let fixture: ComponentFixture<DesignthinkingprototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingprototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingprototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
