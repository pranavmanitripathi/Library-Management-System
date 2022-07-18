import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { User } from '../user';

@Component({
  selector: 'app-useroverduebooks',
  templateUrl: './useroverduebooks.component.html',
  styleUrls: ['./useroverduebooks.component.css']
})
export class UseroverduebooksComponent implements OnInit {

  books: Book[] | undefined ;
  user: User = new User();

  constructor(private bookService: BookService,
    private router: Router) { }


    ngOnInit(): void {
      this.getuseroverduebooks();
    }
    getuseroverduebooks() {
    this.bookService.getuseroverduebooks(this.user).subscribe(data => {
      this.books= data;
  });
  }

}
