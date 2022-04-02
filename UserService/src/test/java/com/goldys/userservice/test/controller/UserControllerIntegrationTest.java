package com.goldys.userservice.test.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.goldys.userservice.UserServiceApplication;
import com.goldys.userservice.model.User;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
        classes = UserServiceApplication.class
)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application_test.properties")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;
    private User user;


    @BeforeEach
    public void setUp() {

        user = new User("chris@abc.com", "password", "admin");

    }

    @Order(1)
    @Test
    public void registerUserSuccess() throws Exception {

        mockMvc.perform(post("/api/v1/userservice").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());

    }

    @Order(2)
    @Test
    public void registerUserFailure() throws Exception {

        mockMvc.perform(post("/api/v1/userservice").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());

    }

    @Order(3)
    @Test
    public void getAllUsersSuccess() throws Exception {

        mockMvc.perform(get("/api/v1/userservice").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Order(4)
    @Test
    public void getUserByEmailSuccess() throws Exception {

        mockMvc.perform(get("/api/v1/userservice/getByEmail/chris@abc.com")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Order(5)
    @Test
    public void getUserByEmailFailure() throws Exception {

        mockMvc.perform(get("/api/v1/userservice/getByEmail/chris2@abc.com")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

    @Order(6)
    @Test
    public void userLoginUnauthorizedFailure() throws Exception {

        user.setPassword("password3");
        mockMvc.perform(post("/api/v1/userservice/login").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isUnauthorized()).andDo(MockMvcResultHandlers.print());

    }

    @Order(7)
    @Test
    public void userNotFoundFailure() throws Exception {

        user.setEmail("chris2@abc.com");
        mockMvc.perform(post("/api/v1/userservice/login").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isNotFound()).andDo(MockMvcResultHandlers.print());

    }

    @Order(8)
    @Test
    public void userLoginSuccess() throws Exception {

        mockMvc.perform(post("/api/v1/userservice/login").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());

    }


    @Order(9)
    @Test
    public void tokenGenerationSuccess() throws Exception {

        mockMvc.perform(post("/api/v1/userservice/login").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.token").isNotEmpty())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("User authentication successful"))
                .andDo(MockMvcResultHandlers.print());

    }

    @Order(10)
    @Test
    public void updateProfileSuccess() throws Exception {

        mockMvc.perform(put("/api/v1/userservice").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());

    }

    @Order(11)
    @Test
    public void updateProfileFailure() throws Exception {

        user.setEmail("chris2@abc.com");
        mockMvc.perform(put("/api/v1/userservice")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(status().isNotFound())
                .andDo(MockMvcResultHandlers.print());

    }


    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
