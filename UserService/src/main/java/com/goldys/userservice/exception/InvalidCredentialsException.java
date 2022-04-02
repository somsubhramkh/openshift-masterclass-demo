package com.goldys.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
 * Boilerplate Code: Do Not Change
 */
@ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "Invalid Credentials!!")
public class InvalidCredentialsException extends Exception {
}
