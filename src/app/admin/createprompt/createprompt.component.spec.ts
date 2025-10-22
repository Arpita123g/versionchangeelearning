import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepromptComponent } from './createprompt.component';

describe('CreatepromptComponent', () => {
  let component: CreatepromptComponent;
  let fixture: ComponentFixture<CreatepromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
