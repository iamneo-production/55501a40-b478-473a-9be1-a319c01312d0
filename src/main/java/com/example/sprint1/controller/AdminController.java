package com.example.sprint1.controller;

import com.example.sprint1.model.Admin;
import com.example.sprint1.services.AdminService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping
public class AdminController {
    @Autowired
    private AdminService adminService;
    public AdminController(AdminService adminService){
        super();
        this.adminService=adminService;
    } 
    @PostMapping("api/admin/add")
    public List<Admin>saveadmin(@RequestBody Admin admin){
        adminService.saveAdmin(admin);
        return(adminService.getAllAdmins());
    }
    @GetMapping("api/admin/show")
    public List<Admin> show(){
        return adminService.getAllAdmins();
    }


    
}
