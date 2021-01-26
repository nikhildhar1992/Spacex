import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public myBaseUrl: string;
  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, body: Object = {}): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      body: body,
    };
    return this.http.get(
      `${path}`,
      options
    ).pipe(
      catchError(this.formatErrors)
    );
  }
}