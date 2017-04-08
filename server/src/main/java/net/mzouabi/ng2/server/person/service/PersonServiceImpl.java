package net.mzouabi.ng2.server.person.service;

import net.mzouabi.ng2.server.person.dto.PersonDTO;
import net.mzouabi.ng2.server.person.mapper.PersonMapper;
import net.mzouabi.ng2.server.person.model.Person;
import net.mzouabi.ng2.server.person.repository.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class PersonServiceImpl implements PersonService {

    final static Logger LOG = LoggerFactory.getLogger(PersonServiceImpl.class);

    @Autowired
    PersonRepository repository;

    @Autowired
    PersonMapper mapper;

    @Override
    public PersonDTO create(PersonDTO value) {
        Person item = mapper.toEntity(value);
        item = repository.save(item);
        return mapper.toDTO(item);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public PersonDTO update(PersonDTO value) {
        Person person = repository.findOne(value.getId());
        mapper.mapToEntity(value, person);
        return get(value.getId());
    }

    @Override
    public PersonDTO get(Long id) {
        Person item = repository.getOne(id);
        if (item == null) {
            return null;
        } else {
            return mapper.toDTO(item);
        }
    }

    @Override
    public Page<PersonDTO> search(Pageable pagable) {
        return repository.findAll(pagable).map(value -> mapper.toDTO(value));
    }

}
