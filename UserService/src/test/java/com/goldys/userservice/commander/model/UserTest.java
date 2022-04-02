package com.goldys.userservice.commander.model;

import com.goldys.userservice.model.User;
import org.junit.jupiter.api.Test;
import org.meanbean.test.BeanTester;

public class UserTest {

    /*
     * Test whether bean instance can be created successfully by calling the constructor
     */

    @Test
    public void BeanTest() {
        BeanTester beanTester = new BeanTester();
        beanTester.testBean(User.class);
    }
}
