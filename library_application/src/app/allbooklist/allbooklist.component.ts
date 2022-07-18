import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-allbooklist',
  templateUrl: './allbooklist.component.html',
  styleUrls: ['./allbooklist.component.css']
})
export class AllbooklistComponent implements OnInit {

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
  
}
