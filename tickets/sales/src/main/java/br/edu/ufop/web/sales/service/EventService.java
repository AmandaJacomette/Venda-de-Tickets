package br.edu.ufop.web.sales.service;

import br.edu.ufop.web.sales.entity.Event;
import br.edu.ufop.web.sales.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository repository;

    public List<Event> listAll() {
        return repository.findAll();
    }

    public Event findById(UUID id) {
        return repository.findById(id).orElseThrow();
    }

    public Event create(Event e) {
        e.setCreatedAt(LocalDateTime.now());
        e.setUpdatedAt(LocalDateTime.now());
        return repository.save(e);
    }

    public Event update(UUID id, Event e) {
        Event db = findById(id);
        e.setId(id);
        e.setCreatedAt(db.getCreatedAt());
        e.setUpdatedAt(LocalDateTime.now());
        return repository.save(e);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}

