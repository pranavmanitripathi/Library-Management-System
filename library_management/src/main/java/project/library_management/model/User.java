package project.library_management.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	private int userId;
	
	private String userName;
	
	private String email;
	
	private String password;
	
	private int userType;
	
	private boolean isAvailable;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getUserType() {
		return userType;
	}

	public void setUserType(int userType) {
		this.userType = userType;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	public User() {
		super();
	}

	public User(int userId, String userName, String email, String password, int userType, boolean isAvailable) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.userType = userType;
		this.isAvailable = isAvailable;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", email=" + email + ", password=" + password
				+ ", userType=" + userType + ", isAvailable=" + isAvailable + "]";
	}
	
	

	public void setDeleted(boolean isAvailable) {
		this.isAvailable= isAvailable;
	}

}
