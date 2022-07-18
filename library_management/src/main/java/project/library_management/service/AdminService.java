package project.library_management.service;

import java.util.List;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import project.library_management.model.Book;
import project.library_management.model.User;
import project.library_management.repository.BookRepository;
import project.library_management.repository.UserRepository;

@Service
public class AdminService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	BookRepository bookRepository;

	public User addUser(User user) {
		user.setAvailable(true);
		return userRepository.save(user);
	}

	public boolean removeUser(int userId) {
		try {
		    User user = userRepository.getById(userId);
		    user.setAvailable(false);
		    userRepository.save(user);
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	public Book addBook(Book book) {
		return bookRepository.save(book);
	}

	public boolean removeBook(int bookId) {
		try {
		    bookRepository.delete(bookRepository.getById(bookId));
		    return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	public List<Book> getBooksByUser(int userId) {
		return bookRepository.getLendedBooks(userId);
	}

	public List<Book> getAllLendingBooks() {
		return bookRepository.getAllLendedBooks();
	}

	public List<User> getAllUsersByBookName(String bookName) {
		return bookRepository.getAllUserByBookName(bookName);
		
	}

	public List<User> getAllUsers() {
		//return userRepository.findAll();
		return bookRepository.getAllUsers();
	}

	
}
