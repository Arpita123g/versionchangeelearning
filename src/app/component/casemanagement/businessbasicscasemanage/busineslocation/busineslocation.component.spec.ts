import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusineslocationComponent } from './busineslocation.component';

describe('BusineslocationComponent', () => {
  let component: BusineslocationComponent;
  let fixture: ComponentFixture<BusineslocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusineslocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusineslocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
