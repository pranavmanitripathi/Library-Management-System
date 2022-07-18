import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] | undefined ;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
   
}
  private getAllBooks(){
    this.bookService.getAllBooks().subscribe(data => {
      this.books=data;
    });
  }

  updateBook(){
    this.router.navigate(['admin/updatebook']);

  }
  
  deleteBook(bookID: number){
    this.bookService.deleteBook(bookID).subscribe(data => {
      console.log(data);
      this.getAllBooks();
    })
  }

}
