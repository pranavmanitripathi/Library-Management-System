package project.library_management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.library_management.model.User;
import project.library_management.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	public User loginUser(User user) {
		User user1 = loginRepository.findByEmail(user.getEmail());
		if(user1.getPassword().equals(user.getPassword())) {
			return user1;
			
	}
		return null;
}
}
