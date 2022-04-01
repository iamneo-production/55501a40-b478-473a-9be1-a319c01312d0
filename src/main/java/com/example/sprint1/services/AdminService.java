package com.example.sprint1.services;

import com.example.sprint1.model.Admin;
import java.util.*;
public interface AdminService {
    Admin saveAdmin(Admin admin);
    List<Admin> getAllAdmins();
    
    
}
