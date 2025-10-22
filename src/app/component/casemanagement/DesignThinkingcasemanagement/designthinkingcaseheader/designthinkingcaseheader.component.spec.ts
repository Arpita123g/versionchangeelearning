import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingcaseheaderComponent } from './designthinkingcaseheader.component';

describe('DesignthinkingcaseheaderComponent', () => {
  let component: DesignthinkingcaseheaderComponent;
  let fixture: ComponentFixture<DesignthinkingcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
