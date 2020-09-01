import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:8080/api/orgchart"

  constructor(private http: HttpClient) { }

  get<T>(url) {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url, body) {
    return this.http.post<T>(this.baseUrl + url, body);
  }

  put<T>(url, body) {
    return this.http.put<T>(this.baseUrl + url, body);
  }

  delete<T>(url) {
    return this.http.delete<T>(this.baseUrl + url);
  }
}
