package project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.library_management.model.Book;
import project.library_management.model.BookLending;
import project.library_management.repository.BookLendingRepository;
import project.library_management.repository.BookRepository;

@Service
public class StudentService {

	@Autowired
	BookRepository bookRepository;
	
	@Autowired
	BookLendingRepository bookLendingRepository;
	
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	public List<Book> getOverdueBooks(int userId) {
		return bookRepository.getOverdueBooks(userId);
	}

	public List<Book> getLendedBooks(int userId) {
		return bookRepository.getLendedBooks(userId);
	}

	public BookLending addBookLending(BookLending booklending) {
		return bookLendingRepository.save(booklending);
	}
	

}
