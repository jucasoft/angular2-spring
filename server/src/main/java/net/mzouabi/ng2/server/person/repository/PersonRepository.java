package net.mzouabi.ng2.server.person.repository;

import net.mzouabi.ng2.server.person.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long>, PersonRepositoryCustom {

}
