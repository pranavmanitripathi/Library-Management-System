import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-by-id',
  templateUrl: './book-by-id.component.html',
  styleUrls: ['./book-by-id.component.css']
})
export class BookByIdComponent implements OnInit {

  books: Book[] | undefined ;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
