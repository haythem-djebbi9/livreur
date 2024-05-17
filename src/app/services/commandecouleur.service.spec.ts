import { TestBed } from '@angular/core/testing';

import { CommandecouleurService } from './commandecouleur.service';

describe('CommandecouleurService', () => {
  let service: CommandecouleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandecouleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
