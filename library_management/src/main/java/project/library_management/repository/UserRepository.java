package project.library_management.repository;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;



import project.library_management.model.User;

@Repository
public class UserRepository extends SimpleJpaRepository<User, Integer>{
	
	public UserRepository(EntityManager em) {
		super(User.class, em);
	}
}
