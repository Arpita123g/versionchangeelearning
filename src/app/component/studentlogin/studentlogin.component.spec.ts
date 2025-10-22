import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StudentloginComponent } from './studentlogin.component';

describe('StudentloginComponent', () => {
  let component: StudentloginComponent;
  let fixture: ComponentFixture<StudentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentloginComponent],
      providers: [
        importProvidersFrom(
          BrowserAnimationsModule,
          MatIconModule,
          ReactiveFormsModule,
          HttpClientTestingModule,
          RouterTestingModule
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
