import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from '../../environments/enviroment.config';

@Inject({ providedIn: 'root' })
export class HttpClientService {
  environment = environment;
  constructor(private http: HttpClient) {}

  get rootUrl() {
    return environment.server_url;
  }

  get(url: string) {
    return this.http.get(`${this.rootUrl}${url}`);
  }

  post(url: string, data) {
    return this.http.post(`${this.rootUrl}${url}`, data);
  }
}
