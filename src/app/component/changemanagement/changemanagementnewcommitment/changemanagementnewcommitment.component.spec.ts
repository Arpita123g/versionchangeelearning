import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemanagementnewcommitmentComponent } from './changemanagementnewcommitment.component';

describe('ChangemanagementnewcommitmentComponent', () => {
  let component: ChangemanagementnewcommitmentComponent;
  let fixture: ComponentFixture<ChangemanagementnewcommitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemanagementnewcommitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemanagementnewcommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
