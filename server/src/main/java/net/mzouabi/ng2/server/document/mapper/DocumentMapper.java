package net.mzouabi.ng2.server.document.mapper;

import net.mzouabi.ng2.server.document.dto.DocumentDTO;
import net.mzouabi.ng2.server.document.model.Document;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DocumentMapper {
    public DocumentDTO toDTO(Document value);

    public Document toEntity(DocumentDTO value);

    public void mapToEntity(DocumentDTO valueDTO, @MappingTarget Document value);
}
