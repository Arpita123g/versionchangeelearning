import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestargetsalesdevelopmentComponent } from './salestargetsalesdevelopment.component';

describe('SalestargetsalesdevelopmentComponent', () => {
  let component: SalestargetsalesdevelopmentComponent;
  let fixture: ComponentFixture<SalestargetsalesdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestargetsalesdevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestargetsalesdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
