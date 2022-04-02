package com.goldys.userservice.security;

import com.goldys.userservice.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/*
 * Boilerplate Code: Do Not Change
 */
@Service
public class JwtSecurityTokenGeneratorImpl implements SecurityTokenGenerator {

    @Override
    public Map<String, String> generateToken(User user) {

        String jwtToken = null;

        jwtToken = Jwts.builder().setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "goldysSecret")
                .compact();

        Map<String, String> map = new HashMap<>();
        map.put("token", jwtToken);
        map.put("message", "User authentication successful");

        return map;
    }
}
