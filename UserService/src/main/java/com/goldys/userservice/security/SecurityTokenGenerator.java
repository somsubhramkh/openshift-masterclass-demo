package com.goldys.userservice.security;

import com.goldys.userservice.model.User;

import java.util.Map;

/*
 * Boilerplate Code: Do Not Change
 */
public interface SecurityTokenGenerator {

    Map<String, String> generateToken(User user);
}
