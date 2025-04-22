package com.example.cmComputerRepairSystemManagement.service;

import com.example.cmComputerRepairSystemManagement.dto.ProductDto;
import java.util.List;

public interface ProductService {
    
    List<ProductDto> getAllProducts();
    
    ProductDto getProductById(Long id);
    
    ProductDto createProduct(ProductDto productDto);
    
    ProductDto updateProduct(Long id, ProductDto productDto);
    
    void deleteProduct(Long id);
    
    List<ProductDto> searchProducts(String name);
    
    List<ProductDto> getProductsByCategory(String category);
} 