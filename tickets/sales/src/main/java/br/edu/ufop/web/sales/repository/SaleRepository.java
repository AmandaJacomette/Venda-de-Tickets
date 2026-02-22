package br.edu.ufop.web.sales.repository;

import br.edu.ufop.web.sales.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SaleRepository extends JpaRepository<Sale, UUID> {}

