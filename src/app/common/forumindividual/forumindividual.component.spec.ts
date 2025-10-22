import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumindividualComponent } from './forumindividual.component';

describe('ForumindividualComponent', () => {
  let component: ForumindividualComponent;
  let fixture: ComponentFixture<ForumindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumindividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
