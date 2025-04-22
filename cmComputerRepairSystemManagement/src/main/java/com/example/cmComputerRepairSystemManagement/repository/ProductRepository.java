package com.example.cmComputerRepairSystemManagement.repository;

import com.example.cmComputerRepairSystemManagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    // Ürün adına göre arama
    List<Product> findByNameContainingIgnoreCase(String name);
    
    // Kategoriye göre ürünleri getir
    List<Product> findByCategory(String category);
} 