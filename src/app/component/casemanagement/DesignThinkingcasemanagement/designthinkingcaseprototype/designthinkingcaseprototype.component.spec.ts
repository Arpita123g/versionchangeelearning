import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseprototypeComponent } from './designthinkingcaseprototype.component';

describe('DesignthinkingcaseprototypeComponent', () => {
  let component: DesignthinkingcaseprototypeComponent;
  let fixture: ComponentFixture<DesignthinkingcaseprototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseprototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseprototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
