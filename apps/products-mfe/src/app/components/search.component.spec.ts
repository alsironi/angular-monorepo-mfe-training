import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should emit search query', (done) => {
    component.searchTriggered.subscribe(q => {
      expect(q).toBe('laptop');
      done();
    });
    
    component.query = 'laptop';
    component.onSearch();
  });
});
