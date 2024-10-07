import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsListComponent } from './reviews-list.component';

describe('ReviewsListComponent', () => {
  let component: ReviewsListComponent;
  let fixture: ComponentFixture<ReviewsListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ReviewsListComponent]
    });
    fixture = TestBed.createComponent(ReviewsListComponent);
    component = fixture.componentInstance;
  });

  it('should display reviews', () => {
    expect(component).toBeTruthy();
  });
});
