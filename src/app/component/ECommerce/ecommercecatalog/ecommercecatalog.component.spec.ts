import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercecatalogComponent } from './ecommercecatalog.component';

describe('EcommercecatalogComponent', () => {
  let component: EcommercecatalogComponent;
  let fixture: ComponentFixture<EcommercecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercecatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
