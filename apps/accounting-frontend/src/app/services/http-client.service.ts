import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) { }

  post(url:string, data:unknown):Observable<unknown> {
    return this.http.post(url, data);
  }
}
