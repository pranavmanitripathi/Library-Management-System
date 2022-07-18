import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
//import { this.user } from '../login/login.component';
import { BookService } from '../book.service';
import { User } from '../user';

@Component({
  selector: 'app-userlendedbooks',
  templateUrl: './userlendedbooks.component.html',
  styleUrls: ['./userlendedbooks.component.css']
})
export class UserlendedbooksComponent implements OnInit {

  books: Book[] | undefined ;
  user: User = new User();

  constructor(private bookService: BookService,
    private router: Router) { }


    ngOnInit(): void {
      this.getuserlendedbooks();
    }
  getuserlendedbooks() {
    this.bookService.getuserlendedbooks(this.user).subscribe(data => {
      this.books= data;
  });
}
}
