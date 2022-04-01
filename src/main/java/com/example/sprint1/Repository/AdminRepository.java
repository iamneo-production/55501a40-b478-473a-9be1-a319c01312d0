package com.example.sprint1.Repository;

import com.example.sprint1.model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository< Admin,String> {

    
    
}
