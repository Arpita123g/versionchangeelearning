import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationresourcesComponent } from './innovationresources.component';

describe('InnovationresourcesComponent', () => {
  let component: InnovationresourcesComponent;
  let fixture: ComponentFixture<InnovationresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationresourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
