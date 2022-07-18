import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usersbybook',
  templateUrl: './usersbybook.component.html',
  styleUrls: ['./usersbybook.component.css']
})
export class UsersbybookComponent implements OnInit {

  users: User[] | undefined ;
  book: Book = new Book() ;

  
  constructor(private userService: UserService,private bookService: BookService,
    private router: Router) { }


    ngOnInit(): void {
      this.getbookbyuser();
    }
  
    getbookbyuser(){
      this.userService.getbookbyuser(this.book).subscribe(data => {
        this.users=data;
      });
    }
   
  }
