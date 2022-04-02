package com.goldys.userservice.commander;

import org.junit.jupiter.api.Test;
import org.springframework.cache.annotation.Cacheable;

import java.lang.reflect.Method;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CachingImplementationTest {

    @Test
    public void testCacheOnLogin() throws ClassNotFoundException, NoSuchMethodException {

        boolean flag = false;
        int counter = 0;
        Method[] methods = Class.forName("com.goldys.userservice.service.UserServiceImpl")
                .getDeclaredMethods();
        for (Method method : methods) {
            if (method.getName().equals("login")) {
                if ((method.getAnnotation(Cacheable.class)) != null) {
                    flag = true;
                    counter++;
                }
            }
        }
        assertTrue(flag, "login() method should have @Cacheable Annotation");
        assertThat(counter).isGreaterThan(0);

    }

}
