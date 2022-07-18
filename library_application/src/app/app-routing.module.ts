import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AllbooklistComponent } from './allbooklist/allbooklist.component';
import { AlllendedbooksComponent } from './alllendedbooks/alllendedbooks.component';
import { BookByIdComponent } from './book-by-id/book-by-id.component';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';
import { LoginComponent } from './login/login.component';
import { OverduebookComponent } from './overduebook/overduebook.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserlendedbooksComponent } from './userlendedbooks/userlendedbooks.component';
import { UseroverduebooksComponent } from './useroverduebooks/useroverduebooks.component';
import { UsersbybookComponent } from './usersbybook/usersbybook.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/addbook',component:AddBookComponent},
  {path:'admin/booklist',component:BookListComponent},
  {path:'admin/updatebook',component:UpdateBookComponent},
  {path:'admin/getBookById',component:BookByIdComponent},
  {path:'admin/userlist',component:UserListComponent},
  {path:'admin/adduser',component:AddUserComponent},
  {path:'admin/updateuser',component:UpdateUserComponent},
  {path:'admin/borrowedbooks',component:BorrowedbooksComponent},
  {path:'admin/overduebooks',component:OverduebookComponent},
  {path:'admin/usersbybook',component:UsersbybookComponent},
  {path:'admin/alllendedbooks',component:AlllendedbooksComponent},
  {path:'user',component:UserComponent},
  {path:'user/booklist',component:AllbooklistComponent},
  {path:'user/lendedbooklist',component:UserlendedbooksComponent},
  {path:'user/overduebooklist',component:UseroverduebooksComponent},
  {path:'user/borrowbook',component:BorrowbookComponent}
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
