package com.example.cmComputerRepairSystemManagement.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    
    private Long id;
    
    @NotBlank(message = "Ürün adı boş olamaz")
    private String name;
    
    private String description;
    
    @NotBlank(message = "Kategori boş olamaz")
    private String category;
    
    private String img1;
    private String img2;
    private String img3;
    private String img4;
    private String img5;
    private String img6;
} 