import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booklending } from '../booklending';
import { BooklendingService } from '../booklending.service';


@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent implements OnInit {

  booklending: Booklending = new Booklending();
  
  constructor(private booklendingService: BooklendingService,
    private router: Router
    ) { }
  ngOnInit(): void {
  }
  savebooklending(){
    this.booklendingService.addBookLending(this.booklending).subscribe( data =>{
      //console.log(data);
      this.router.navigate(['user/lendedbooklist'])
    },
    error => console.log(error));
  }

  onSubmit(){
    this.booklending.userId = JSON.parse(localStorage.getItem('user') || '{}').userId;
    console.log(this.booklending);
    this.savebooklending();
  }

}
