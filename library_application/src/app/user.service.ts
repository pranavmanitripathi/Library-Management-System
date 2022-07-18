import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/admin/allusers`);
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/admin/adduser`, user);
  }
  deleteUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/admin/removeuser?userId=${userId}`);
}
getbookbyuser(book: Book): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.baseURL}/admin/usersbybook?bookName="${book.bookTitle}"`);
}

}
