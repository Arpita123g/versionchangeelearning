import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdatedatainstructorComponent } from './updatedatainstructor.component';

describe('UpdatedatainstructorComponent', () => {
  let component: UpdatedatainstructorComponent;
  let fixture: ComponentFixture<UpdatedatainstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatedatainstructorComponent],
      providers: [
        importProvidersFrom(
          BrowserAnimationsModule,
          HttpClientTestingModule,
          RouterTestingModule
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedatainstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
