import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userData :any;
  constructor(private loginservice : LoginService,private router: Router) { }
  user: User = new User();
  ngOnInit(): void {
  }
  
  UserLogin(){
    console.log(this.user);
       this.loginservice.loginUser(this.user).subscribe((data)=>{
        //  alert("login success");
        console.log(data);
         this.userData = data;
         localStorage.setItem("user",JSON.stringify(this.userData));
         console.log(data);
         console.log("Userdata"+this.userData.userType);
        this.user=JSON.parse(localStorage.getItem('user') || '{}');
        console.log(this.user.userId);
         //User usr  = JSON.parse(localStorage.getItem('user') || '{}');
        //  if(this.userData.userType===-1){
           
        //  }
          if(this.userData.userType===1)
            this.router.navigate(['/admin/booklist'])
         else if(this.userData.userType===0){
           this.router.navigate(['/user/booklist']);
         }
       
       },error=>alert("Incorrect Detail. Come back again..")
       )
  }
}
