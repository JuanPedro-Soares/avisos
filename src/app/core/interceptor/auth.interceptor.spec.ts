import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';

describe('AuthInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authTokenService: jasmine.SpyObj<AuthTokenService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthTokenService', ['getToken']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: AuthTokenService, useValue: spy },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    authTokenService = TestBed.inject(
      AuthTokenService
    ) as jasmine.SpyObj<AuthTokenService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Authorization header', () => {
    const token = 'test-token';
    authTokenService.getToken.and.returnValue(token);

    httpClient.get('/test').subscribe();

    const httpRequest = httpMock.expectOne('/test');

    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      `Bearer ${token}`
    );
  });

  it('should not add an Authorization header if token is not present', () => {
    authTokenService.getToken.and.returnValue(null);

    httpClient.get('/test').subscribe();

    const httpRequest = httpMock.expectOne('/test');

    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });
});
