import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationmarketingComponent } from './innovationmarketing.component';

describe('InnovationmarketingComponent', () => {
  let component: InnovationmarketingComponent;
  let fixture: ComponentFixture<InnovationmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationmarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
