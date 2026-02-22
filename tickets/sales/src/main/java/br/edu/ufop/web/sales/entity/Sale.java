package br.edu.ufop.web.sales.entity;

import br.edu.ufop.web.sales.Enum.SaleStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private UUID userId;
    private UUID eventId;

    private LocalDateTime saleDate;

    @Enumerated(EnumType.STRING)
    private SaleStatus saleStatus;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

