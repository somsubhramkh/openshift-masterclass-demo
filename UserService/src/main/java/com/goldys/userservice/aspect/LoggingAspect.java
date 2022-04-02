package com.goldys.userservice.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/*
 * Boilerplate Code: Do Not Change
 */
@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);
    private static final String METHOD_NAME = "Method Name : {}";
    private static final String METHOD_ARGS = "Method Args : {}";

    @Pointcut("execution (* com.goldys.userservice.controller.UserController.*(..))")
    public void allControllerMethods() {
        /*  Pointcut method	 */
    }

    @Before("allControllerMethods()")
    public void beforeAdvice(JoinPoint joinPoint) {
        logger.info("************ @Before ************");
        logger.debug(METHOD_NAME, joinPoint.getSignature().getName());
        logger.debug(METHOD_ARGS, Arrays.toString(joinPoint.getArgs()));
        logger.info("*********************************");
    }

    @After("allControllerMethods()")
    public void afterAdvice(JoinPoint joinPoint) {
        logger.info("************ @After ************");
        logger.debug(METHOD_NAME, joinPoint.getSignature().getName());
        logger.debug(METHOD_ARGS, Arrays.toString(joinPoint.getArgs()));
        logger.info("*********************************");
    }

    @AfterReturning(value = "allControllerMethods()", returning = "result")
    public void afterReturningAdvice(JoinPoint joinPoint, Object result) {
        logger.info("************ @AfterReturning ************");
        logger.debug(METHOD_NAME, joinPoint.getSignature().getName());
        logger.debug(METHOD_ARGS, Arrays.toString(joinPoint.getArgs()));
        logger.debug("Return Value: {}", result);
        logger.info("*****************************************");
    }

    @AfterThrowing(value = "allControllerMethods()", throwing = "error")
    public void afterThrowingAdvice(JoinPoint joinPoint, Throwable error) {
        logger.info("************ @AfterThrowing ************");
        logger.debug(METHOD_NAME, joinPoint.getSignature().getName());
        logger.debug(METHOD_ARGS, Arrays.toString(joinPoint.getArgs()));
        logger.debug("Exception : {}", error);
        logger.info("****************************************");
    }
}

