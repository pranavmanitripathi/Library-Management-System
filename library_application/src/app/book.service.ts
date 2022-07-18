import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/availablebooks`);
  }

  addBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/admin/addbook`, book);
  }

  deleteBook(bookID: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/admin/removebook?bookId=${bookID}`);
}
  getborrowbook(user: User): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/admin/getbooks?userId=${user.userId}`);
  }
  getoverduebook(user: User): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/overduebooks?userId=${user.userId}`);
  }
  getAllLendedBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/admin/alllendedbooks`);
  }
  getuserlendedbooks(user:User): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/lendedbooks?userId=${JSON.parse(localStorage.getItem('user') || '{}').userId}`);
  }
  getuseroverduebooks(user:User): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/overduebooks?userId=${JSON.parse(localStorage.getItem('user') || '{}').userId}`);
  }

}
