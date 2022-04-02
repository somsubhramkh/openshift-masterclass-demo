package com.goldys.userservice.commander;

import org.junit.jupiter.api.Test;

import java.lang.reflect.Method;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestCoverageFinder {

    @Test
    public void testModelTestCaseCoverage() throws ClassNotFoundException {

        boolean flag = false;
        int counter = 0;
        Method[] methods = Class.forName("com.goldys.userservice.commander.model.UserTest")
                .getDeclaredMethods();
        for (Method method : methods) {
            if ((method.getAnnotation(Test.class)) != null) {
                flag = true;
                counter++;
            }
        }
        assertTrue(flag);
        assertThat(counter).isGreaterThan(0);

    }

    @Test
    public void testServiceTestCaseCoverage() throws ClassNotFoundException {

        boolean flag = false;
        int counter = 0;
        Method[] methods = Class.forName("com.goldys.userservice.commander.service.UserServiceTest")
                .getDeclaredMethods();
        for (Method method : methods) {
            if ((method.getAnnotation(Test.class)) != null) {
                flag = true;
                counter++;
            }
        }
        assertTrue(flag);
        assertThat(counter).isGreaterThan(6);
    }

    @Test
    public void testControllerTestCaseCoverage() throws ClassNotFoundException {

        boolean flag = false;
        int counter = 0;
        Method[] methods = Class.forName("com.goldys.userservice.commander.controller.UserControllerTest")
                .getDeclaredMethods();
        for (Method method : methods) {
            if ((method.getAnnotation(Test.class)) != null) {
                flag = true;
                counter++;
            }
        }
        assertTrue(flag);
        assertThat(counter).isGreaterThan(6);
    }
}
