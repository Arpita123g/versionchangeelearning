import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinescasemanageheaderComponent } from './businescasemanageheader.component';

describe('BusinescasemanageheaderComponent', () => {
  let component: BusinescasemanageheaderComponent;
  let fixture: ComponentFixture<BusinescasemanageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinescasemanageheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinescasemanageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
