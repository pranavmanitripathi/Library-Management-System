import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined ;

  constructor(private userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    this.getAllUsers();
   
  }
    private getAllUsers(){
      this.userService.getAllUsers().subscribe(data => {
        this.users=data;
      });
    }
    updateUser(){
      this.router.navigate(['admin/updateuser']);
  
    }
    deleteUser(userId: number){
      this.userService.deleteUser(userId).subscribe(data => {
        console.log(data);
        this.getAllUsers();
      })
    }
  
}
