import { TestBed } from '@angular/core/testing';

import { DataRequestInterceptor } from './data-request.interceptor';

describe('DataRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DataRequestInterceptor = TestBed.inject(DataRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
