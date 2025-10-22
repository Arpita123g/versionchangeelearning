import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewawarenessComponent } from './changemanagementnewawareness.component';

describe('ChangemanagementnewawarenessComponent', () => {
  let component: ChangemanagementnewawarenessComponent;
  let fixture: ComponentFixture<ChangemanagementnewawarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewawarenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewawarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
