import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TenantHelper } from '@shared/helpers/TenantHelper';

const SOCIAL_BASE_URL = TenantHelper.getEnvironmentBasedValue("apiSocialServiceBaseUrl");
const BASE_URL = TenantHelper.getEnvironmentBasedValue("apiServerBaseUrl");
const PLATFORM_URL = TenantHelper.getEnvironmentBasedValue("apiPlatformUrl");
const ANALYTICS_BASE_URL = TenantHelper.getEnvironmentBasedValue("apiAnalyticsServiceBaseUrl");

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private responseCache = new Map();
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }

  public get(path: string, cacheEnabled: boolean = false, isHardReload: boolean = false, params: HttpParams = new HttpParams()): Observable<any> {
    if (cacheEnabled)
      return this.getResponseFromCache(path, isHardReload);
    else
      return this.httpClient.get(BASE_URL + path, { params }).pipe(catchError(this.formatErrors));
  }

  public getCsvFile(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(BASE_URL + path, { params, responseType: 'text' }).pipe(catchError(this.formatErrors));
  }

  public patch(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .patch(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(BASE_URL + path).pipe(catchError(this.formatErrors));
  }

  public postFile(path: string, body: object = {}): Observable<any> {
    return this.httpClient.post(BASE_URL + path, body).pipe(catchError(this.formatErrors));
  }

  public putFile(path: string, body: object = {}): Observable<any> {
    return this.httpClient.put(BASE_URL + path, body).pipe(catchError(this.formatErrors));
  }

  public getSocial(path: string, cacheEnabled: boolean = false, isHardReload: boolean = false, params: HttpParams = new HttpParams()): Observable<any> {
    if (cacheEnabled)
      return this.getResponseFromCache(path, isHardReload);
    else
      return this.httpClient.get(SOCIAL_BASE_URL + path, { params }).pipe(catchError(this.formatErrors));
  }

  public putSocial(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(SOCIAL_BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public postSocial(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(SOCIAL_BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public deleteSocial(path: string): Observable<any> {
    return this.httpClient.delete(SOCIAL_BASE_URL + path).pipe(catchError(this.formatErrors));
  }

  public platformPost(path: string, body: object = {}): Observable<any> {
    return this.httpClient.post(PLATFORM_URL + path, body).pipe(catchError(this.formatErrors));
  }

  public platformGet(path: string, body: object = {}): Observable<any> {
    return this.httpClient.get(PLATFORM_URL + path, body).pipe(catchError(this.formatErrors));
  }

  // Client side caching of HTTP requests
  public getResponseFromCache(Url, isHardReload): Observable<any> {
    const request = BASE_URL + Url;
    let cachedResponse = this.responseCache.get(request);
    if (cachedResponse) {
      // on hardreload, delete cached response and reload it
      if (isHardReload) {
        this.responseCache.delete(request);
        return this.putResponseInCache(Url);
      }
      else {
        return of(cachedResponse);
      }
    }
    else {
      return this.putResponseInCache(Url);
    }
  }

  public putResponseInCache(url): Observable<any> {
    const request = BASE_URL + url;
    const response = this.get(url);
    response.subscribe(res => this.responseCache.set(request, res));
    return response;
  }

  public reloadCache(url) {
    Array.from(this.responseCache.keys()).forEach(key => {
      if (key.includes(url)) {
        this.responseCache.delete(key);
        this.putResponseInCache(key.replace(BASE_URL, ""));
      }
    });
  }

  formatErrors(error: any): Observable<any> {
    return throwError(error);
  }
}
