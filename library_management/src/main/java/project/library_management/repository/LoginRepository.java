package project.library_management.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import project.library_management.model.User;

@Repository
public interface LoginRepository extends CrudRepository<User, Integer>{

	public User findByEmail(String email);
	

}
