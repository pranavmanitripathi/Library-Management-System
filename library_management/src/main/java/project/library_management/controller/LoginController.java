package project.library_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.library_management.model.User;
import project.library_management.service.LoginService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@RequestMapping("")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User userData) {
		System.out.println(userData);
		return loginService.loginUser(userData);
	}
	
	
	
}
