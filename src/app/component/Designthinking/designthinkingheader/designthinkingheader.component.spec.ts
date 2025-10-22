import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkingheaderComponent } from './designthinkingheader.component';

describe('DesignthinkingheaderComponent', () => {
  let component: DesignthinkingheaderComponent;
  let fixture: ComponentFixture<DesignthinkingheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkingheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
