import { TestBed, inject } from '@angular/core/testing';

import { LeaderboardsService } from './leaderboards.service';

describe('LeaderboardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaderboardsService]
    });
  });

  // it('should be created', inject([ProjectsService], (service: ProjectsService) => {
  //   expect(service).toBeTruthy();
  // }));
});
