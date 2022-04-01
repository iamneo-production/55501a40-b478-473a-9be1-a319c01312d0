package com.example.sprint1.controller;

import com.example.sprint1.Repository.UserRepository;
import com.example.sprint1.model.User;
import com.example.sprint1.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
@RestController
@RequestMapping
public class UserController {
    @Autowired
    private UserRepository userRepository;
    private UserService userService;
    public UserController(UserService userService){
        
        this.userService=userService;
    } 
    @PostMapping("api/add/user")
    public List<User>saveuser(@RequestBody User user){
        userService.saveUser(user);
        return(userService.getAllUsers());
    }
    @GetMapping("api/user/show")
    public List<User> showb(){
        return userService.getAllUsers();
    }
    @GetMapping("/getbyemail")
	public ResponseEntity<List<User>> getbyname(@RequestParam(name="email")String email){
		return new ResponseEntity<List<User>>(userRepository.findByEmail(email),HttpStatus.OK);

	}
}
