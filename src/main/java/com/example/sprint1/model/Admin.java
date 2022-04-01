package com.example.sprint1.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "admin")
public class Admin {
   @Id
    private String email;
    
    private String pwd;
    private String Firstname;
    private String lastname;
    public String getFirstname() {
        return Firstname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    public void setFirstname(String firstname) {
        this.Firstname = firstname;
    }


    
}
