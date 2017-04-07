package net.mzouabi.ng2.server.repository;

import net.mzouabi.ng2.server.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long>, PersonRepositoryCustom {

}
