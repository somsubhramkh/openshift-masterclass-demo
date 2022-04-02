package com.goldys.userservice.service;

import com.goldys.userservice.exception.InvalidCredentialsException;
import com.goldys.userservice.exception.UserAlreadyExistsException;
import com.goldys.userservice.exception.UserNotFoundException;
import com.goldys.userservice.model.User;

import java.util.List;

public interface UserService {

    /*
     * You Should not modify this interface. You have to implement these methods in
     * corresponding Impl classes
     */
    User registerUser(User user) throws UserAlreadyExistsException;

    User updateProfile(User user) throws UserNotFoundException;

    User login(User user) throws UserNotFoundException, InvalidCredentialsException;

    boolean validateUser(String email);

    List<User> listAllUsers();

    User getUserByEmail(String email) throws UserNotFoundException;


}
