package br.edu.ufop.web.sales.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String description;
    private Integer type; // palestra, show, teatro (numérico)
    private LocalDate date;

    private LocalDateTime startSales;
    private LocalDateTime endSales;

    private Double price;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

