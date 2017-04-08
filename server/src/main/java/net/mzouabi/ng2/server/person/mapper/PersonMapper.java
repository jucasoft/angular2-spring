package net.mzouabi.ng2.server.person.mapper;

import net.mzouabi.ng2.server.person.dto.PersonDTO;
import net.mzouabi.ng2.server.person.model.Person;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

/**
 * Created by mouradzouabi on 04/12/15.
 */
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PersonMapper {

    public PersonDTO toDTO(Person person);

    public Person toEntity(PersonDTO person);

    public void mapToEntity(PersonDTO personDTO, @MappingTarget Person person);

}
