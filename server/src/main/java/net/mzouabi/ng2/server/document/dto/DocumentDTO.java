package net.mzouabi.ng2.server.document.dto;

import net.mzouabi.ng2.server.dto.AbstractDTO;

/**
 * Created by Luca on 07/04/2017.
 */
public class DocumentDTO extends AbstractDTO {
    private String entity;
    private String desciption;
    private String type;

    public String getEntity() {
        return entity;
    }

    public DocumentDTO setEntity(String entity) {
        this.entity = entity;
        return this;
    }

    public String getDesciption() {
        return desciption;
    }

    public DocumentDTO setDesciption(String desciption) {
        this.desciption = desciption;
        return this;
    }

    public String getType() {
        return type;
    }

    public DocumentDTO setType(String type) {
        this.type = type;
        return this;
    }
}
