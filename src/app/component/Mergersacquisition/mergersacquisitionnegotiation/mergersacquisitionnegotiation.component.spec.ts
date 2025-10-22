import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionnegotiationComponent } from './mergersacquisitionnegotiation.component';

describe('MergersacquisitionnegotiationComponent', () => {
  let component: MergersacquisitionnegotiationComponent;
  let fixture: ComponentFixture<MergersacquisitionnegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionnegotiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionnegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
