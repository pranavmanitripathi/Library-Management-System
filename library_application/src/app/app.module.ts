import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookByIdComponent } from './book-by-id/book-by-id.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';
import { AllbooklistComponent } from './allbooklist/allbooklist.component';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';
import { OverduebookComponent } from './overduebook/overduebook.component';
import { UsersbybookComponent } from './usersbybook/usersbybook.component';
import { AlllendedbooksComponent } from './alllendedbooks/alllendedbooks.component';
import { UserlendedbooksComponent } from './userlendedbooks/userlendedbooks.component';
import { UseroverduebooksComponent } from './useroverduebooks/useroverduebooks.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    BookListComponent,
    AddBookComponent,
    UpdateBookComponent,
    BookByIdComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserComponent,
    AllbooklistComponent,
    BorrowedbooksComponent,
    OverduebookComponent,
    UsersbybookComponent,
    AlllendedbooksComponent,
    UserlendedbooksComponent,
    UseroverduebooksComponent,
    BorrowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
