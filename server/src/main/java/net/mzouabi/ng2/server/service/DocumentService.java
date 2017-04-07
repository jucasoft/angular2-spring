package net.mzouabi.ng2.server.service;

import net.mzouabi.ng2.server.dto.DocumentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface DocumentService {

    DocumentDTO create(DocumentDTO value);

    void delete(Long id);

    DocumentDTO update(DocumentDTO value);

    DocumentDTO get(Long id);

    Page<DocumentDTO> search(Pageable value);

}
