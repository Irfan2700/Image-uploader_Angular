import { TestBed } from '@angular/core/testing';

import { CroppedImageSubjectService } from './cropped-image-subject.service';

describe('CroppedImageSubjectService', () => {
  let service: CroppedImageSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroppedImageSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
