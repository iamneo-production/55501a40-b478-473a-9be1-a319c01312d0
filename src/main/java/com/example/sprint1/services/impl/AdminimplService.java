package com.example.sprint1.services.impl;

import java.util.List;

import com.example.sprint1.Repository.AdminRepository;
import com.example.sprint1.model.Admin;
import com.example.sprint1.services.AdminService;

import org.springframework.stereotype.Service;
@Service
public class AdminimplService implements AdminService {
    private AdminRepository adminRepository;
    public AdminimplService(AdminRepository adminRepository){
        this.adminRepository=adminRepository;
    }

    @Override
    public Admin saveAdmin(Admin admin) {
    
        
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
    
}
