import { TestBed, inject } from '@angular/core/testing';

import { RecipeValidateService } from './recipe-validate.service';

describe('RecipeValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeValidateService]
    });
  });

  it('should be created', inject([RecipeValidateService], (service: RecipeValidateService) => {
    expect(service).toBeTruthy();
  }));
});
