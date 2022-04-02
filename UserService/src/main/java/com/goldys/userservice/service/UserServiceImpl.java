package com.goldys.userservice.service;

import com.goldys.userservice.exception.InvalidCredentialsException;
import com.goldys.userservice.exception.UserAlreadyExistsException;
import com.goldys.userservice.exception.UserNotFoundException;
import com.goldys.userservice.model.User;
import com.goldys.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 * Boilerplate Code: Do Not Change
 */
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        if (userRepository.findById(user.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        return userRepository.save(user);
    }

    @Override
    public User updateProfile(User user) throws UserNotFoundException {
        if (userRepository.findById(user.getEmail()).isEmpty()) {
            throw new UserNotFoundException();
        }
        return userRepository.save(user);
    }


    @Cacheable(value = "users-cache", key = "#user.email")
    @Override
    public User login(User user) throws UserNotFoundException, InvalidCredentialsException {
        if (userRepository.findById(user.getEmail()).isEmpty()) {
            throw new UserNotFoundException();
        }
        User retrievedUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (retrievedUser == null) {
            throw new InvalidCredentialsException();
        }
        return retrievedUser;
    }


    @Override
    public boolean validateUser(String email) {
        return ((userRepository.findByEmailAndRole(email, "Executive")) != null);
    }


    @Override
    public List<User> listAllUsers() {
        return userRepository.findAll();
    }


    @Override
    public User getUserByEmail(String email) throws UserNotFoundException {
        if (userRepository.findById(email).isEmpty()) {
            throw new UserNotFoundException();
        }
        return userRepository.findById(email).get();
    }

}
