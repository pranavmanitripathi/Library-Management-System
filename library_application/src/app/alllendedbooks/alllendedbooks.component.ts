import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-alllendedbooks',
  templateUrl: './alllendedbooks.component.html',
  styleUrls: ['./alllendedbooks.component.css']
})
export class AlllendedbooksComponent implements OnInit {

  books: Book[] | undefined ;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllLendedBooks();
   
}
  private getAllLendedBooks(){
    this.bookService.getAllLendedBooks().subscribe(data => {
      this.books=data;
    });
  }

}
