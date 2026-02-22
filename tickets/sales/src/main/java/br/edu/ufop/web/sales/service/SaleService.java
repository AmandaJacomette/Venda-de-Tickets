package br.edu.ufop.web.sales.service;

import br.edu.ufop.web.sales.Enum.SaleStatus;
import br.edu.ufop.web.sales.entity.Sale;
import br.edu.ufop.web.sales.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository repository;

    public List<Sale> listAll() {
        return repository.findAll();
    }

    public Sale create(Sale s) {
        s.setSaleStatus(SaleStatus.EM_ABERTO);
        s.setSaleDate(LocalDateTime.now());
        s.setCreatedAt(LocalDateTime.now());
        s.setUpdatedAt(LocalDateTime.now());
        return repository.save(s);
    }

    public Sale updateStatus(UUID id, SaleStatus status) {
        Sale sale = repository.findById(id).orElseThrow();
        sale.setSaleStatus(status);
        sale.setUpdatedAt(LocalDateTime.now());
        return repository.save(sale);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}

