package com.example.cmComputerRepairSystemManagement.service.impl;

import com.example.cmComputerRepairSystemManagement.dto.ProductDto;
import com.example.cmComputerRepairSystemManagement.model.Product;
import com.example.cmComputerRepairSystemManagement.repository.ProductRepository;
import com.example.cmComputerRepairSystemManagement.service.ProductService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto getProductById(Long id) {
        return productRepository.findById(id)
                .map(this::convertToDto)
                .orElseThrow(() -> new EntityNotFoundException("Ürün bulunamadı: " + id));
    }

    @Override
    @Transactional
    public ProductDto createProduct(ProductDto productDto) {
        Product product = convertToEntity(productDto);
        Product savedProduct = productRepository.save(product);
        return convertToDto(savedProduct);
    }

    @Override
    @Transactional
    public ProductDto updateProduct(Long id, ProductDto productDto) {
        // Ürünün varlığını kontrol et
        if (!productRepository.existsById(id)) {
            throw new EntityNotFoundException("Ürün bulunamadı: " + id);
        }
        
        // ID'yi güncelleme için ayarla
        productDto.setId(id);
        Product product = convertToEntity(productDto);
        Product updatedProduct = productRepository.save(product);
        return convertToDto(updatedProduct);
    }

    @Override
    @Transactional
    public void deleteProduct(Long id) {
        // Ürünün varlığını kontrol et
        if (!productRepository.existsById(id)) {
            throw new EntityNotFoundException("Ürün bulunamadı: " + id);
        }
        
        productRepository.deleteById(id);
    }

    @Override
    public List<ProductDto> searchProducts(String name) {
        return productRepository.findByNameContainingIgnoreCase(name).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDto> getProductsByCategory(String category) {
        return productRepository.findByCategory(category).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // ProductDto'dan Product'a dönüştürme
    private Product convertToEntity(ProductDto productDto) {
        Product product = new Product();
        product.setId(productDto.getId());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setCategory(productDto.getCategory());
        product.setImg1(productDto.getImg1());
        product.setImg2(productDto.getImg2());
        product.setImg3(productDto.getImg3());
        product.setImg4(productDto.getImg4());
        product.setImg5(productDto.getImg5());
        product.setImg6(productDto.getImg6());
        return product;
    }

    // Product'tan ProductDto'ya dönüştürme
    private ProductDto convertToDto(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setCategory(product.getCategory());
        productDto.setImg1(product.getImg1());
        productDto.setImg2(product.getImg2());
        productDto.setImg3(product.getImg3());
        productDto.setImg4(product.getImg4());
        productDto.setImg5(product.getImg5());
        productDto.setImg6(product.getImg6());
        return productDto;
    }
} 