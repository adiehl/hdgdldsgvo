/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LetterService } from './letter.service';

describe('LetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LetterService]
    });
  });

  it('should ...', inject([LetterService], (service: LetterService) => {
    expect(service).toBeTruthy();
  }));
});
