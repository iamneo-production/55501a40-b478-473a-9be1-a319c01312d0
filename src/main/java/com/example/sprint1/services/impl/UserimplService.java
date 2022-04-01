package com.example.sprint1.services.impl;

import java.util.List;

import com.example.sprint1.Repository.UserRepository;
import com.example.sprint1.model.User;
import com.example.sprint1.services.UserService;

import org.springframework.stereotype.Service;
@Service
public class UserimplService implements UserService {
    private UserRepository userRepository;
    public UserimplService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public User saveUser(User user) {
        // TODO Auto-generated method stub
        
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        // TODO Auto-generated method stub
        return userRepository.findAll();
    }

    
}
