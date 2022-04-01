package com.example.sprint1.services;

import com.example.sprint1.model.User;
import java.util.*;
public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    
    
}
