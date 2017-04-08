package net.mzouabi.ng2.server.document.repository;

import com.mysema.query.jpa.JPQLQuery;
import com.mysema.query.jpa.impl.JPAQuery;
import net.mzouabi.ng2.server.document.model.QDocument;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class DocumentRepositoryImpl implements DocumentRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public int countCustom() {
        JPQLQuery query = new JPAQuery(em);
        return (int) query.from(QDocument.document).where(QDocument.document.id.isNotNull()).count();
//        return 1;
    }

}
