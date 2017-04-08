package net.mzouabi.ng2.server.document.repository;

import net.mzouabi.ng2.server.document.model.Document;
import net.mzouabi.ng2.server.repository.PersonRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long>, PersonRepositoryCustom {

}
