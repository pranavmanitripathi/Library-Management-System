package project.library_management.model;

import java.sql.Date;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BookLending {
    
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int transactionId;
	
	private int bookId;
	
	private int userId;
	
	private boolean isReturned;
	
	@Basic
	private java.sql.Date issueDate;
	@Basic
	private java.sql.Date returnDate;
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public boolean isReturned() {
		return isReturned;
	}
	public void setReturned(boolean isReturned) {
		this.isReturned = isReturned;
	}
	public java.sql.Date getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(java.sql.Date issueDate) {
		this.issueDate = issueDate;
	}
	public java.sql.Date getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(java.sql.Date returnDate) {
		this.returnDate = returnDate;
	} 
	
	public BookLending() {
		super();
	}
	public BookLending(int transactionId, int bookId, int userId, boolean isReturned, Date issueDate, Date returnDate) {
		super();
		this.transactionId = transactionId;
		this.bookId = bookId;
		this.userId = userId;
		this.isReturned = isReturned;
		this.issueDate = issueDate;
		this.returnDate = returnDate;
	}
	
}
