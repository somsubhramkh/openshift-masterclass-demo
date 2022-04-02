package com.goldys.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
 * Boilerplate Code: Do Not Change
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Specified User Not Found")
public class UserNotFoundException extends Exception {
}
