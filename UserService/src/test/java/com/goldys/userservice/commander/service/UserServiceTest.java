package com.goldys.userservice.commander.service;

import com.goldys.userservice.exception.InvalidCredentialsException;
import com.goldys.userservice.exception.UserAlreadyExistsException;
import com.goldys.userservice.exception.UserNotFoundException;
import com.goldys.userservice.model.User;
import com.goldys.userservice.repository.UserRepository;
import com.goldys.userservice.service.UserServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.annotation.Rollback;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private User user;

    private List<User> userList;

    @BeforeEach
    public void setUp() throws Exception {

        MockitoAnnotations.initMocks(this);

        user = new User("john@abc.com", "password", "admin");
        userList = new ArrayList<>();
        userList.add(user);
    }

    @AfterEach
    public void tearDown() throws Exception {
        user = null;
    }

    @Test
    @Rollback(true)
    public void testRegisterUserSuccess() throws UserAlreadyExistsException {

        when(userRepository.findById(any())).thenReturn(Optional.empty());
        when(userRepository.save(any())).thenReturn(user);

        assertEquals(user, userService.registerUser(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(1)).save(any());

    }

    @Test
    @Rollback(true)
    public void testRegisterUserFailure() throws UserAlreadyExistsException {

        when(userRepository.findById(any())).thenReturn(Optional.of(user));

        assertThrows(UserAlreadyExistsException.class, () -> userService.registerUser(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(0)).save(any());

    }


    @Test
    @Rollback(true)
    public void testUpdateProfileSuccess() throws UserNotFoundException {

        when(userRepository.findById(any())).thenReturn(Optional.ofNullable(user));
        when(userRepository.save(any())).thenReturn(user);

        assertEquals(user, userService.updateProfile(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(1)).save(any());

    }

    @Test
    @Rollback(true)
    public void testUpdateProfileFailure() throws UserNotFoundException {

        when(userRepository.findById(any())).thenReturn(Optional.ofNullable(null));

        assertThrows(UserNotFoundException.class, () -> userService.updateProfile(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(0)).save(any());

    }

    @Test
    @Rollback(true)
    public void testUserLoginSuccess() throws UserNotFoundException, InvalidCredentialsException {

        when(userRepository.findById(any())).thenReturn(Optional.of(user));
        when(userRepository.findByEmailAndPassword(anyString(), anyString())).thenReturn(user);

        assertEquals(user, userService.login(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(1)).findByEmailAndPassword(anyString(), anyString());

    }

    @Test
    @Rollback(true)
    public void testUserNotFound() throws UserNotFoundException {

        when(userRepository.findById(any())).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.login(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(0)).findByEmailAndPassword(anyString(), anyString());

    }

    @Test
    @Rollback(true)
    public void testUserUnauthorized() throws InvalidCredentialsException {

        when(userRepository.findById(any())).thenReturn(Optional.of(user));

        assertThrows(InvalidCredentialsException.class, () -> userService.login(user));

        verify(userRepository, times(1)).findById(any());
        verify(userRepository, times(1)).findByEmailAndPassword(anyString(), anyString());

    }

    @Test
    @Rollback(true)
    public void testGetAllUsersSuccess() {

        when(userRepository.findAll()).thenReturn(userList);

        assertEquals(userList, userService.listAllUsers());

        verify(userRepository, times(1)).findAll();

    }

    @Test
    @Rollback(true)
    public void testGetProgramSuccess() throws UserNotFoundException {

        when(userRepository.findById(any())).thenReturn(Optional.of(user));

        assertEquals(user, userService.getUserByEmail(user.getEmail()));

        verify(userRepository, times(2)).findById(any());

    }

    @Test
    @Rollback(true)
    public void testGetProgramFailure() throws UserNotFoundException {

        when(userRepository.findById(any())).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getUserByEmail(user.getEmail()));

        verify(userRepository, times(1)).findById(any());

    }
}
