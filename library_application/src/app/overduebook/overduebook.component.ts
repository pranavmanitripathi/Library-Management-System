import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { User } from '../user';

@Component({
  selector: 'app-overduebook',
  templateUrl: './overduebook.component.html',
  styleUrls: ['./overduebook.component.css']
})
export class OverduebookComponent implements OnInit {

  user: User = new User();
  books: Book[] | undefined ;
  

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getoverduebook();
  }

  getoverduebook(){
    this.bookService.getoverduebook(this.user).subscribe(data => {
      this.books= data;
    });
  }
  

}
