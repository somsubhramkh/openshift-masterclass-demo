package com.goldys.userservice.controller;

import com.goldys.userservice.exception.InvalidCredentialsException;
import com.goldys.userservice.exception.UserAlreadyExistsException;
import com.goldys.userservice.exception.UserNotFoundException;
import com.goldys.userservice.model.User;
import com.goldys.userservice.proxy.UserServiceProxy;
import com.goldys.userservice.security.SecurityTokenGenerator;
import com.goldys.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/*
 * Boilerplate Code: Do Not Change
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/userservice")
public class UserController {

    private UserService userService;

    private SecurityTokenGenerator securityTokenGenerator;

    private UserServiceProxy userServiceProxy;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator, UserServiceProxy userServiceProxy) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
        this.userServiceProxy = userServiceProxy;
    }


    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
    }


    @PutMapping
    public ResponseEntity<?> updateUser(@RequestBody User user) throws UserNotFoundException {
        return new ResponseEntity<>(userService.updateProfile(user), HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws InvalidCredentialsException, UserNotFoundException {

        Map<String, String> map = null;

        User retrievedUser = userService.login(user);

        if (retrievedUser != null) {
            map = securityTokenGenerator.generateToken(retrievedUser);
        }

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<?> validateUser(@PathVariable String email) {
        return new ResponseEntity<>(userService.validateUser(email), HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<?> listAllUsers() {
        return new ResponseEntity<>(userService.listAllUsers(), HttpStatus.OK);
    }


    @GetMapping("/getByEmail/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
    }

}
