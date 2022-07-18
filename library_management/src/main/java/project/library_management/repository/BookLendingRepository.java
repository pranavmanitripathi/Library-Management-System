package project.library_management.repository;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import project.library_management.model.BookLending;

@Repository
public class BookLendingRepository extends SimpleJpaRepository<BookLending, Integer>{
	
	@Autowired
	private EntityManager entityManager;
	
	public BookLendingRepository(EntityManager em) {
		super(BookLending.class, em);
	
	}
}
