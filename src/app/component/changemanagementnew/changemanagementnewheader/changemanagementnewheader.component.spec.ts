import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewheaderComponent } from './changemanagementnewheader.component';

describe('ChangemanagementnewheaderComponent', () => {
  let component: ChangemanagementnewheaderComponent;
  let fixture: ComponentFixture<ChangemanagementnewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
