import { TestBed, inject } from '@angular/core/testing';

import { SearchRestaurantsService } from './search-restaurants.service';

describe('SearchRestaurantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRestaurantsService]
    });
  });

  it('should be created', inject([SearchRestaurantsService], (service: SearchRestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
