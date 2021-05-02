import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable()
export class HttpService {
  cancelHttpCall: Subject<void> = new Subject<void>();
  urlBase = environment.urlBase;

  constructor(private http: HttpClient) {
  }

  get(uri: string,
      params?: HttpParams,
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'})): Observable<any> {
    return this.http.get<any>(this.urlBase + uri, {headers, params})
      .pipe(takeUntil(this.cancelHttpCall));
  }

  post(uri: string,
       body: any = {},
       headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'}),
       params?: HttpParams): Observable<any> {
    return this.http.post<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
      .pipe(takeUntil(this.cancelHttpCall));
  }

  put(uri: string,
      body: any = {},
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'}),
      params?: HttpParams): Observable<any> {
    return this.http.put<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
      .pipe(takeUntil(this.cancelHttpCall));
  }

  patch(uri: string,
        body: any = {},
        headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'}),
        params?: HttpParams): Observable<any> {
    return this.http.patch<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
      .pipe(takeUntil(this.cancelHttpCall));
  }

  delete(uri: string,
         headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'}),
         params?: HttpParams): Observable<any> {
    return this.http.delete<any>(this.urlBase + uri, {headers, params})
      .pipe(takeUntil(this.cancelHttpCall));
  }

  unsubscribeHttpCall() {
    this.cancelHttpCall.next();
  }
}
