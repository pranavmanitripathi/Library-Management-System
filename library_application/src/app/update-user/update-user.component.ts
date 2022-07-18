import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new  User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/admin/userlist']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
