import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewfoodforthougthComponent } from './changemanagementnewfoodforthougth.component';

describe('ChangemanagementnewfoodforthougthComponent', () => {
  let component: ChangemanagementnewfoodforthougthComponent;
  let fixture: ComponentFixture<ChangemanagementnewfoodforthougthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewfoodforthougthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewfoodforthougthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
