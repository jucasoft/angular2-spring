package net.mzouabi.ng2.server.service;

import net.mzouabi.ng2.server.dto.DocumentDTO;
import net.mzouabi.ng2.server.mapper.DocumentMapper;
import net.mzouabi.ng2.server.model.Document;
import net.mzouabi.ng2.server.model.Person;
import net.mzouabi.ng2.server.repository.DocumentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@org.springframework.stereotype.Service
@Transactional
public class DocumentServiceImpl implements DocumentService {

    final static Logger LOG = LoggerFactory.getLogger(PersonServiceImpl.class);

    @Autowired
    DocumentRepository repository;

    @Autowired
    DocumentMapper mapper;

    @Override
    public DocumentDTO create(DocumentDTO value) {
        Document item = mapper.toEntity(value);
        item = repository.save(item);
        return mapper.toDTO(item);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public DocumentDTO update(DocumentDTO value) {
        Document item = repository.findOne(value.getId());
        mapper.mapToEntity(value, item);
        return get(item.getId());
    }

    @Override
    public DocumentDTO get(Long id) {
        Document item = repository.getOne(id);
        if (item == null) {
            return null;
        } else {
            return mapper.toDTO(item);
        }
    }

    @Override
    public Page<DocumentDTO> search(Pageable pagable) {
        return repository.findAll(pagable).map(value -> mapper.toDTO(value));
    }
}
