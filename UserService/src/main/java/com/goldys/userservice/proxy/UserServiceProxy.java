package com.goldys.userservice.proxy;


import com.goldys.userservice.exception.InvalidCredentialsException;
import com.goldys.userservice.exception.UserAlreadyExistsException;
import com.goldys.userservice.exception.UserNotFoundException;
import com.goldys.userservice.model.User;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/*
 * Boilerplate Code: Do Not Change
 */
@FeignClient(name = "user-service")
@RibbonClient(name = "user-service")
public interface UserServiceProxy {

    @PostMapping("/api/v1/userservice")
    ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException;

    @PutMapping("/api/v1/userservice")
    ResponseEntity<?> updateUser(@RequestBody User user) throws UserNotFoundException;

    @PostMapping("/api/v1/userservice/login")
    ResponseEntity<?> login(@RequestBody User user) throws InvalidCredentialsException, UserNotFoundException;

}
