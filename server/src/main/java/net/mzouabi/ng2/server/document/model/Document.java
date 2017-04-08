package net.mzouabi.ng2.server.document.model;

import net.mzouabi.ng2.server.model.AbstractEntity;

import javax.persistence.Entity;

@Entity
public class Document extends AbstractEntity {

    private static final long serialVersionUID = -6321180910534044216L;

    private String entity;
    private String desciption;
    private String type;

    public String getEntity() {
        return entity;
    }

    public Document setEntity(String entity) {
        this.entity = entity;
        return this;
    }

    public String getDesciption() {
        return desciption;
    }

    public Document setDesciption(String desciption) {
        this.desciption = desciption;
        return this;
    }

    public String getType() {
        return type;
    }

    public Document setType(String type) {
        this.type = type;
        return this;
    }
}
