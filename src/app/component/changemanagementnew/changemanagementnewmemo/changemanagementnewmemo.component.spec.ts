import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewmemoComponent } from './changemanagementnewmemo.component';

describe('ChangemanagementnewmemoComponent', () => {
  let component: ChangemanagementnewmemoComponent;
  let fixture: ComponentFixture<ChangemanagementnewmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
