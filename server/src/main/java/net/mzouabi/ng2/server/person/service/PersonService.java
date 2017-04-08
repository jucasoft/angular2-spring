package net.mzouabi.ng2.server.person.service;

import net.mzouabi.ng2.server.person.dto.PersonDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PersonService {

    Page<PersonDTO> findPersons(Pageable pageable);

    PersonDTO getPerson(Long id);

    void updatePerson(PersonDTO personDTO);

    void savePerson(PersonDTO personDTO);

    void deletePerson(Long id);

}
