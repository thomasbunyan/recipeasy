import { TestBed } from '@angular/core/testing';

import { RecipeCreateService } from './recipe-create.service';

describe('RecipeCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeCreateService = TestBed.get(RecipeCreateService);
    expect(service).toBeTruthy();
  });
});
