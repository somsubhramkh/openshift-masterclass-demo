package com.goldys.userservice.repository;

import com.goldys.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
 * Boilerplate Code: Do Not Change
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User findByEmailAndPassword(String email, String password);

    User findByEmailAndRole(String email, String role);

}
