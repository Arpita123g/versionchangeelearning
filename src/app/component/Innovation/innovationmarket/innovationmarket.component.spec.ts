import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationmarketComponent } from './innovationmarket.component';

describe('InnovationmarketComponent', () => {
  let component: InnovationmarketComponent;
  let fixture: ComponentFixture<InnovationmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
