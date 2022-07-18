package project.library_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


import project.library_management.model.Book;
import project.library_management.model.User;
import project.library_management.service.AdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		return adminService.addUser(user);
	}
	
	@DeleteMapping("/removeuser")
	public boolean removeUser(int userId) {
		return adminService.removeUser(userId);
	}
	
	@PostMapping("/addbook")
	public Book addBook(@RequestBody Book book) {
		return adminService.addBook(book);
	}
	
	@DeleteMapping("/removebook")
	public boolean removeBook(int bookId) {
		return adminService.removeBook(bookId);
	}

	@GetMapping("/getbooks")
	public List<Book> getBooksByUser( int userId){
		return adminService.getBooksByUser(userId);
	}
	
	@GetMapping("/alllendedbooks")
	public List<Book> getAllLendingBooks(){
		return adminService.getAllLendingBooks();
	}
	
	@GetMapping("/usersbybook")
	public List<User> getAllUsersByBookName(String bookName){
		return adminService.getAllUsersByBookName(bookName);
	}
	
	@GetMapping("/allusers")
	public List<User> getAllUsers(){
		return adminService.getAllUsers();
	}


}
