import { TestBed, inject } from '@angular/core/testing';

import { ManageAuthService } from './manage-auth.service';

describe('ManageAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageAuthService]
    });
  });

  it('should be created', inject([ManageAuthService], (service: ManageAuthService) => {
    expect(service).toBeTruthy();
  }));
});
