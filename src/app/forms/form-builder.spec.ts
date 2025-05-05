import { TestBed } from '@angular/core/testing';
import { FormBuilderService } from './form-builder.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormBuilderService', () => {
  let service: FormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule]
    });
    service = TestBed.inject(FormBuilderService);
  });

  it('should create form', () => {
    const form = service.createForm({ name: [''] });
    expect(form).toBeTruthy();
  });
});
