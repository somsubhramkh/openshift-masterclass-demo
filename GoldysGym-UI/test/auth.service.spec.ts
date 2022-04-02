import { TestBed } from '@angular/core/testing';

import { AuthService } from '../src/app/_services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });


  it('should have login method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.login).toBeTruthy();
   });

   it('should have register method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.register).toBeTruthy();
   });
});
