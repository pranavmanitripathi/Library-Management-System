import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booklending } from './booklending';

@Injectable({
  providedIn: 'root'
})
export class BooklendingService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  addBookLending(booklending: Booklending): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/student/userborrowbook`, booklending);
  }
}
