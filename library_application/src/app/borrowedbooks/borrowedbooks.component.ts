import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrowedbooks',
  templateUrl: './borrowedbooks.component.html',
  styleUrls: ['./borrowedbooks.component.css']
})
export class BorrowedbooksComponent implements OnInit {
  
  user: User = new User();
  books: Book[] | undefined ;
  

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getborrowedbook();
  }

  getborrowedbook(){
    this.bookService.getborrowbook(this.user).subscribe(data => {
      this.books= data;
    });
  }
  

}
