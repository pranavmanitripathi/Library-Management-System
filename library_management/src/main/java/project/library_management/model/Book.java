package project.library_management.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	private int bookID;
	
	private String bookTitle;
	
	private String authorName;
	
	private String publication;
	
	private int isbn;
	
	private int availableCopies;

	public int getBookID() {
		return bookID;
	}

	public void setBookID(int bookID) {
		this.bookID = bookID;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getPublication() {
		return publication;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	public int getAvailableCopies() {
		return availableCopies;
	}

	public void setAvailableCopies(int availableCopies) {
		this.availableCopies = availableCopies;
	}
	
	public Book() {
		super();
	}

	public Book(int bookID, String bookTitle, String authorName, String publication, int isbn, int availableCopies) {
		super();
		this.bookID = bookID;
		this.bookTitle = bookTitle;
		this.authorName = authorName;
		this.publication = publication;
		this.isbn = isbn;
		this.availableCopies = availableCopies;
	}

}
