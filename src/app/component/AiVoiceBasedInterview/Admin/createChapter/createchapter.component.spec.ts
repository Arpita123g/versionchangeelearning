import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechapterComponent } from './createchapter.component';

describe('CreatechapterComponent', () => {
  let component: CreatechapterComponent;
  let fixture: ComponentFixture<CreatechapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatechapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
