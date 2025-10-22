import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerconceptualizationComponent } from './consumerconceptualization.component';

describe('ConsumerconceptualizationComponent', () => {
  let component: ConsumerconceptualizationComponent;
  let fixture: ComponentFixture<ConsumerconceptualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerconceptualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerconceptualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
