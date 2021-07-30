import { TestBed } from '@angular/core/testing';

import { PokemonHttpService } from './pokemon-http.service';

describe('PokemonHttpService', () => {
  let service: PokemonHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
