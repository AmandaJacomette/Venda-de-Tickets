package br.edu.ufop.web.sales.controller;

import br.edu.ufop.web.sales.Enum.SaleStatus;
import br.edu.ufop.web.sales.entity.Sale;
import br.edu.ufop.web.sales.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {

    private final SaleService service;

    @GetMapping
    public List<Sale> list() {
        return service.listAll();
    }

    @PostMapping
    public Sale create(@RequestBody Sale sale) {
        return service.create(sale);
    }

    @PatchMapping("/{id}/status")
    public Sale updateStatus(
            @PathVariable UUID id,
            @RequestParam SaleStatus status
    ) {
        return service.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}

