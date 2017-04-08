package net.mzouabi.ng2.server.main.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Created by Luca on 08/04/2017.
 */
public interface CrudService<T> {

    T create(T value);

    void delete(Long id);

    T update(T value);

    T get(Long id);

    Page<T> search(Pageable value);
}
