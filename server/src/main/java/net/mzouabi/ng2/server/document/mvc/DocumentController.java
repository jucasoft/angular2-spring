package net.mzouabi.ng2.server.document.mvc;

import net.mzouabi.ng2.server.document.dto.DocumentDTO;
import net.mzouabi.ng2.server.document.service.DocumentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin
@RequestMapping(value = "/api/document")
public class DocumentController {

    final static Logger LOG = LoggerFactory.getLogger(DocumentController.class);

    @Inject
    DocumentService service;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<DocumentDTO>> search(Pageable pageable, HttpServletRequest req) {
        Page<DocumentDTO> page = service.search(pageable);
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DocumentDTO> get(@PathVariable Long id, HttpServletRequest req) {
        DocumentDTO value = service.get(id);
        return new ResponseEntity<>(value, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void create(@RequestBody DocumentDTO value) {
        service.create(value);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody DocumentDTO value) {
        service.update(value);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}


