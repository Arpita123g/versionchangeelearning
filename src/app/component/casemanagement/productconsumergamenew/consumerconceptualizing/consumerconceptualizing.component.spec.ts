import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerconceptualizingComponent } from './consumerconceptualizing.component';

describe('ConsumerconceptualizingComponent', () => {
  let component: ConsumerconceptualizingComponent;
  let fixture: ComponentFixture<ConsumerconceptualizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerconceptualizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerconceptualizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
