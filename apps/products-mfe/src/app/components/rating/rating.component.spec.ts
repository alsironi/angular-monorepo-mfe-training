import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RatingComponent]
    });
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
  });

  it('should emit rating', (done) => {
    component.ratingChanged.subscribe(value => {
      expect(value).toBe(5);
      done();
    });
    component.setRating(5);
  });
});
