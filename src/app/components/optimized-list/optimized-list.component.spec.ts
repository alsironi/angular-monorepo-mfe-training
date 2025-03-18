import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptimizedListComponent } from './optimized-list.component';

describe('OptimizedListComponent', () => {
  let component: OptimizedListComponent;
  let fixture: ComponentFixture<OptimizedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedListComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(OptimizedListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
