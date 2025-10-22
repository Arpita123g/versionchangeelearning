import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptcreateComponent } from './promptcreate.component';

describe('PromptcreateComponent', () => {
  let component: PromptcreateComponent;
  let fixture: ComponentFixture<PromptcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
