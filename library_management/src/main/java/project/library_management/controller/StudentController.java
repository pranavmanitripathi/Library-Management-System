package project.library_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.library_management.model.Book;
import project.library_management.model.BookLending;
import project.library_management.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	StudentService studentService;
	
	@GetMapping("/availablebooks")
	public List<Book> getAllBooks(){
		return studentService.getAllBooks();
		
	}
	
	@GetMapping("/lendedbooks")
    List<Book> getLendedBooks(int userId){
    	return studentService.getLendedBooks(userId);
    }
	
	
	@GetMapping("/overduebooks")
	List<Book> getOverdueBooks( int userId){
		return studentService.getOverdueBooks(userId);
	}
	
	@PostMapping("/userborrowbook")
	public BookLending addBookLending(@RequestBody BookLending booklending) {
		return studentService.addBookLending(booklending);
	}
}
