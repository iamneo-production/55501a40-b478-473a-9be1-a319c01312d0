package com.example.sprint1.Repository;


import com.example.sprint1.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import java.util.*;

public interface UserRepository extends JpaRepository<User,String> {
    @Modifying
    @Query(value="SELECT * FROM users WHERE users.email= :email",nativeQuery = true)
    List<User> findByEmail(String email);
    
}
