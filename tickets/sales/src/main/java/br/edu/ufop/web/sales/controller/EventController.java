package br.edu.ufop.web.sales.controller;

import br.edu.ufop.web.sales.entity.Event;
import br.edu.ufop.web.sales.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService service;

    @GetMapping
    public List<Event> list() {
        return service.listAll();
    }

    @PostMapping
    public Event create(@RequestBody Event event) {
        return service.create(event);
    }

    @GetMapping("/{id}")
    public Event find(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public Event update(@PathVariable UUID id, @RequestBody Event event) {
        return service.update(id, event);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
