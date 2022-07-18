import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  

  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  
    
  }
  saveBook(){
    this.bookService.addBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }
  goToBookList(){
    this.router.navigate(['/admin/booklist']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
