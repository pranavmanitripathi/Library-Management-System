package project.library_management.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import project.library_management.model.Book;
import project.library_management.model.User;

@Repository
public class BookRepository extends SimpleJpaRepository<Book, Integer>{
	
	@Autowired
	private EntityManager entityManager;
	
	public BookRepository(EntityManager em) {
		super(Book.class, em);
	
	}

	public List<Book> getLendedBooks(int userId) {
		Query q = entityManager.createNativeQuery("SELECT B.BOOKID, B.BOOK_TITLE,B.AUTHOR_NAME,B.PUBLICATION,B.ISBN,B.AVAILABLE_COPIES FROM BOOK AS B ,BOOK_LENDING AS L WHERE B.BOOKID = L.BOOK_ID AND L.USER_ID =" + userId,Book.class);
		List<Book> lendedBooks = q.getResultList();
		return lendedBooks;

	}

	public List<Book> getOverdueBooks(int userId) {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK AS B ,BOOK_LENDING AS L WHERE B.BOOKID = L.BOOK_ID AND L.RETURN_DATE < NOW() AND L.USER_ID = " + userId, Book.class);
		List<Book> overdueBooks = q.getResultList();
		return overdueBooks;
	}
	
	public List<Book> getAllLendedBooks() {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK AS B ,BOOK_LENDING AS L WHERE B.BOOKID = L.BOOK_ID AND L.IS_RETURNED = 0",Book.class);
		List<Book> alllendedBooks = q.getResultList();
		return alllendedBooks;
	}
	
	public List<User> getAllUserByBookName(String bookName) {
		Query q = entityManager.createNativeQuery("SELECT  *  FROM USER AS U, BOOK_LENDING AS L, BOOK AS B WHERE L.USER_ID = U.USER_ID AND L.IS_RETURNED = 0 AND B.BOOKID = L.BOOK_ID AND B.BOOK_TITLE = "+ bookName,User.class);
		List<User> allUsersByBook = q.getResultList();
		return allUsersByBook;
	}
	
	public List<User> getAllUsers(){
		Query q = entityManager.createNativeQuery("SELECT  *  FROM USER AS U WHERE U.IS_AVAILABLE = 1 ",User.class);
		List<User> allusers = q.getResultList();
		return allusers;
	
	}
}

	
              
